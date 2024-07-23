document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('tabUrls', (data) => {
      const tabList = document.getElementById('tabList');
      if (data.tabUrls) {
        data.tabUrls.forEach(url => {
          let li = document.createElement('li');
          li.textContent = url;
          tabList.appendChild(li);
        });
      } else {
        tabList.textContent = 'タブ情報がありません';
      }
    });
  });