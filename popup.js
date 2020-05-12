function parsePage() {
  chrome.tabs.executeScript({ file: 'billie.js' })
}

function clearPage() {
  chrome.tabs.reload()
}

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (e) {
    if (e.target.id === 'parsePage') parsePage()
    else if (e.target.id === 'clearPage') clearPage()
  })
})
