const fileHandler = require('./file-handler')

const templateDir = './src/templates/'

const templates = {
    base: {
        html: fileHandler.readFile(templateDir + 'base.html'),
        replacements: ['title', 'nav', 'content', 'headers'],
        defaults: {title: '', nav: '', content: '', headers: ''}
    },
    nav: {
        html: fileHandler.readFile(templateDir + 'nav.html'),
        replacements: [],
        defaults: {}
    },
    blog: {
        html: fileHandler.readFile(templateDir + 'blog.html'),
        replacements: ['article', 'previous', 'next'],
        defaults: {article: '', previous: '', next: ''}
    },
    blogList: {
        html: fileHandler.readFile(templateDir + 'blog-list.html'),
        replacements: ['list'],
        defaults: {list: ''}
    },
    blogListItem: {
        html: fileHandler.readFile(templateDir + 'blog-list-item.html'),
        replacements: ['file', 'title', 'date', 'snip'],
        defaults: {}
    },
    blogRssBase: {
        html: fileHandler.readFile(templateDir + 'blog-rss-base.xml'),
        replacements: ['list'],
        defaults: {}
    },
    blogRssItem: {
        html: fileHandler.readFile(templateDir + 'blog-rss-item.xml'),
        replacements: ['title', 'link', 'snip', 'date'],
        defaults: {}
    }
}

const applyTemplate = (template, data) => {
    let html = template.html
    template.replacements.forEach(x => html = replaceAll(html, `:${x}:`, (data[x] || template.defaults[x])))
    return html
}

const replaceAll = (original, match, replacement) => {
    if (match.length < 1) {
        return original
    }

    return original.split(match).join(replacement)
}

const applyBaseTemplate = (data) => {
    let title = data.title ? `Allan Stewart - ${data.title}` : 'Allan Stewart'
    return applyTemplate(templates.base, {nav: templates.nav.html, title, content: data.content, headers: data.headers})
}

const applyBlogTemplate = (data) => {
    return applyBaseTemplate({content: applyTemplate(templates.blog, data), title: data.title, headers: data.headers})
}

const applyBlogListTemplate = (data) => {
    let list = data.list.map(x => applyTemplate(templates.blogListItem, x)).join('\n')
    return applyBaseTemplate({content: applyTemplate(templates.blogList, {list}), title: 'Blog'})
}

const applyBlogRssTemplate = (data) => {
    let list = data.list.map(x => applyTemplate(templates.blogRssItem, x)).join('\n')
    return applyTemplate(templates.blogRssBase, {list})
}

module.exports = {
    applyBaseTemplate,
    applyBlogTemplate,
    applyBlogListTemplate,
    applyBlogRssTemplate
}