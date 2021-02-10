const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    lrcType: 3,
    audio: [
      {
        name: "Everglow",
        artist: 'piano tribute players',
        url: 'http://music.163.com/song?id=1335076029&userid=510811968',
        cover: '',
        lrc: ''
      },
    ]
});