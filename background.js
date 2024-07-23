chrome.runtime.onInstalled.addListener(() => {
    console.log("拡張機能がインストールされました");
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({}, (tabs) => {
      let tabUrls = tabs.map(tab => tab.url);
      chrome.storage.local.set({ tabUrls: tabUrls }, () => {
        console.log("タブのURLが保存されました");
      });
    });
  });