document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('getTabUrls').addEventListener('click', () => {
      chrome.tabs.query({ currentWindow: true }, (tabs) => {
        const tabList = document.getElementById('tabList');
        tabList.innerHTML = ''; // リストをクリア
        tabs.forEach(tab => {
          let li = document.createElement('li');
          li.textContent = tab.url;
          tabList.appendChild(li);
        });
      });
    });
  });