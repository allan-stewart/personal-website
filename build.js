const markdown = require('markdown').markdown
const fileHandler = require('./src/file-handler')
const templates = require('./src/templates')

fileHandler.clearOutputDirectory()
fileHandler.copyVerbatimContent()

fileHandler.getAllPages().forEach(page => {
    let content = fileHandler.readFile(page.path)
    fileHandler.writeFile(page.name, templates.applyBaseTemplate({content}))
})

fileHandler.makeDirectory('./www/blog')
const posts = require('./src/blog/posts.json')
posts.forEach(post => {
    let article = markdown.toHTML(fileHandler.readFile(`./src/blog/${post.file}.md`))
    post.snip = markdown.toHTML(post.snip + ` [more...](/blog/${post.file})` || '')
    fileHandler.writeFile(`blog/${post.file}.html`, templates.applyBlogTemplate({article, title: post.title}))
})
fileHandler.writeFile(`blog/index.html`, templates.applyBlogListTemplate({list: posts}))