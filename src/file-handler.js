const fileSystem = require('fs')

const directoryExists = (path) => {
    try {
        fileSystem.statSync(path)
        return true
    }
    catch (error) {
        if (error.message.includes('ENOENT')) {
            return false
        }
    }
}

const makeDirectory = (path) => {
    if (!directoryExists(path)) {
        fileSystem.mkdirSync(path)
    }
}

const clearOutputDirectory = () => {
    const path = './www'
    if (directoryExists(path)) {
        deleteDirectoryRecursively(path)
    }
    makeDirectory(path)
}

const deleteDirectoryRecursively = (path) => {
    processDirectoryRecursively(path,
        (dir) => {},
        (dir) => fileSystem.rmdirSync(dir),
        (file) => fileSystem.unlinkSync(file)
    )
}

const processDirectoryRecursively = (path, beforeDirectory, afterDirectory, onFile) => {
    beforeDirectory(path)
    let contents = fileSystem.readdirSync(path)
    contents.forEach(x => {
        let contentPath = `${path}/${x}`
        if (fileSystem.statSync(contentPath).isDirectory()) {
            processDirectoryRecursively(contentPath, beforeDirectory, afterDirectory, onFile)
        } else {
            onFile(contentPath, x)
        }
    })
    afterDirectory(path)
}

const readFile = (path) => {
    return fileSystem.readFileSync(path, {encoding: 'utf8'})
}

const writeFile = (path, contents) => {
    fileSystem.writeFileSync('./www/' + path, contents, {encoding: 'utf8'})
}

const copyFile = (from, to) => {
    writeFile(to, readFile(from))
}

const copyVerbatimContent = () => {
    const sourcePath = './src/verbatim'
    processDirectoryRecursively(sourcePath,
        (dir) => makeDirectory(dir.replace(sourcePath, './www')),
        (dir) => {},
        (file) => copyFile(file, file.replace(sourcePath, ''))
    )
}

const getAllPages = () => {
    const sourcePath = './src/pages'
    let pages = []
    processDirectoryRecursively(sourcePath,
        (dir) => {},
        (dir) => {},
        (file, name) => pages.push({path: file, name})
    )
    return pages
}

module.exports = {
    clearOutputDirectory,
    readFile,
    writeFile,
    copyVerbatimContent,
    getAllPages,
    makeDirectory
}