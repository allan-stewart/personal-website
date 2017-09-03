const markdown = require('marked')
const fileHandler = require('./src/file-handler')
const templates = require('./src/templates')

fileHandler.clearOutputDirectory()
fileHandler.copyVerbatimContent()

fileHandler.getAllPages().forEach(page => {
    let content = fileHandler.readFile(page.path)
    let newName = page.name
    if (page.name.endsWith('.md')) {
        newName = page.name.replace('.md', '.html')
        content = markdown(content)
    }
    fileHandler.writeFile(newName, templates.applyBaseTemplate({content}))
})

fileHandler.makeDirectory('./www/blog')
const posts = require('./src/blog/posts.json')
const getPreviousLink = (index) => {
    if (index > 0) {
        return `<a href="${posts[index - 1].file}">&lt; ${posts[index - 1].title}</a> | `
    }
    return ''
}
const getNextLink = (index) => {
    if (index + 1 < posts.length) {
        return ` | <a href="${posts[index + 1].file}">${posts[index + 1].title} &gt;</a>`
    }
    return ''
}
posts.forEach((post, index) => {
    let article = markdown(fileHandler.readFile(`./src/blog/${post.file}.md`))
    post.snip = markdown(post.snip + ` [more...](/blog/${post.file})` || '')
    fileHandler.writeFile(`blog/${post.file}.html`, templates.applyBlogTemplate({article, title: post.title, previous: getPreviousLink(index), next: getNextLink(index)}))
})
fileHandler.writeFile(`blog/index.html`, templates.applyBlogListTemplate({list: posts}))