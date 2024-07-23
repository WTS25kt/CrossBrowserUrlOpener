document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('openUrlButton').addEventListener('click', () => {
    const urlTextarea = document.getElementById('urlTextarea');
    const urls = urlTextarea.value.trim().split('\n').map(url => url.trim());

    urls.forEach(url => {
      if (url) {
        // URLがhttpまたはhttpsで始まっていない場合、httpを追加
        const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;
        // 新しいタブでURLを開く
        const a = document.createElement('a');
        a.href = formattedUrl;
        a.target = '_blank';
        a.click();
      }
    });
  });
});