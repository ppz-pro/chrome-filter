const toggle_map = {}

chrome.action.onClicked.addListener(async tab => {
  const dark = !toggle_map[tab.id]
  toggle_map[tab.id] = dark
  const job = dark ? 'insertCSS' : 'removeCSS'
  await chrome.scripting[job]({
    files: ['dark.css'],
    target: { tabId: tab.id },
  })
})
