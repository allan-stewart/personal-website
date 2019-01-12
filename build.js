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

const zeroPad = (input) => {
    var output = `0${input}`
    return output.length > 2 ? output.substring(1) : output
}
const buildRssDate = (input) => {
    const date = new Date(input)
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${daysOfWeek[date.getUTCDay()]}, ${zeroPad(date.getUTCDate())} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()} 00:00:00 +0000`
}

const rssData = posts.map(x => ({...x, link: 'http://allan-stewart.github.io/blog/' + x.file, date: buildRssDate(x.date)}))
fileHandler.writeFile(`blog/rss.xml`, templates.applyBlogRssTemplate({list: rssData}))

const getPostLink = (index) => {
    return `<a href="${posts[index].file}">${posts[index].title}</a>`
}
const getPreviousLink = (index) => {
    if (index > 0) {
        return `<br/>Newer: ${getPostLink(index - 1)}`
    }
    return ''
}
const getNextLink = (index) => {
    if (index + 1 < posts.length) {
        return `<br/>Older: ${getPostLink(index + 1)}`
    }
    return ''
}
posts.forEach((post, index) => {
    let article = markdown(fileHandler.readFile(`./src/blog/${post.file}.md`))
    post.snip = markdown(post.snip + ` [more...](/blog/${post.file})` || '')
    const canonical = post.canonical ? `<link rel="canonical" href="${post.canonical}">` : ''
    if (post.canonical) {
        article = article.replace('</h1>', `</h1>\n<p><em>Originally published on ${post.date} on the <a href="${post.canonical}">Pluralsight Tech Blog</a></em></p>`)
    }
    fileHandler.writeFile(`blog/${post.file}.html`, templates.applyBlogTemplate({article, title: post.title, previous: getPreviousLink(index), next: getNextLink(index), headers: canonical}))
})
fileHandler.writeFile(`blog/index.html`, templates.applyBlogListTemplate({list: posts}))
