// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { ipcRenderer } = require('electron')

const container = document.getElementById('container')
let webviewId = 'webview'

ipcRenderer.on('file:new-tab', () => {
  // hide previous webview
  document.getElementById(webviewId).style.display = 'none'

  // create, append, and focus new webview
  const newWebview = document.createElement('webview')
  newWebview.id = webviewId = webviewId + 'x'
  newWebview.style.background = getRandomColor()
  newWebview.style.flex = '0 0 50%'
  container.append(newWebview)
  newWebview.focus()
})

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
