const fileHandler = require('./file-handler')

const templateDir = './src/templates/'

const templates = {
    base: {
        html: fileHandler.readFile(templateDir + 'base.html'),
        replacements: ['title', 'nav', 'content'],
        defaults: {title: '', nav: '', content: ''}
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
    }
}

const applyTemplate = (template, data) => {
    let html = template.html
    template.replacements.forEach(x => html = html.replace(`:${x}:`, (data[x] || template.defaults[x])))
    return html
}

const applyBaseTemplate = (data) => {
    let title = data.title ? `Allan Stewart - ${data.title}` : 'Allan Stewart'
    return applyTemplate(templates.base, {nav: templates.nav.html, title, content: data.content})
}

const applyBlogTemplate = (data) => {
    return applyBaseTemplate({content: applyTemplate(templates.blog, data), title: data.title})
}

const applyBlogListTemplate = (data) => {
    let list = data.list.map(x => applyTemplate(templates.blogListItem, x)).join('\n')
    return applyBaseTemplate({content: applyTemplate(templates.blogList, {list}), title: 'Blog'})
}

module.exports = {
    applyBaseTemplate,
    applyBlogTemplate,
    applyBlogListTemplate
}