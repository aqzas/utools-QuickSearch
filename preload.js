
// const open = require('open')
// open("https://www.dogedoge.com")

const { shell } = require('electron');

myopen = url => {
    shell.openExternal(url);
}
