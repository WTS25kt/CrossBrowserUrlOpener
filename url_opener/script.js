document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('openUrlButton').addEventListener('click', () => {
    const urlTextarea = document.getElementById('urlTextarea');
    const urls = urlTextarea.value.trim().split('\n').map(url => url.trim()).filter(url => url);

    // 一度に開くタブの数を制限
    const maxTabsAtOnce = 5;
    let index = 0;

    function openNextBatch() {
      const batch = urls.slice(index, index + maxTabsAtOnce);
      batch.forEach(url => {
        try {
          const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;
          const a = document.createElement('a');
          a.href = formattedUrl;
          a.target = '_blank';
          a.click();
        } catch (error) {
          console.error('Error opening URL:', url, error);
        }
      });
      index += maxTabsAtOnce;
      if (index < urls.length) {
        setTimeout(openNextBatch, 1000); // 1秒待ってから次のセットを開く
      }
    }

    openNextBatch();
  });
});