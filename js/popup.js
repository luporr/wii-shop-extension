// Save settings
document.querySelector('#music-picker').addEventListener('change', function () {
    chrome.storage.local.set({
        music: document.querySelector('#music-picker').value
    })
})

// Get stored settings
chrome.storage.local.get(function (data) {
    document.querySelector('#music-picker').value = data.music;
})

// Button link functionality
document.querySelectorAll('button[data-link]').forEach(function (el) {
    el.addEventListener('click', function () {
      chrome.tabs.create({ url: el.getAttribute('data-link') })
    })
  })