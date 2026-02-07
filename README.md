# API Project for 15-113

This web app uses the free API called LRCLIB, which is an open-source database for song lyrics. The API is called the natice Fetch API in JavaScript. The data is searched for using LRCLIB's /api/search function that can search using just keywords. It returns a JSON array of lyric records, which each object looking like this:

```
{
  "id": 3396226,
  "trackName": "I Want to Live",
  "artistName": "Borislav Slavov",
  "albumName": "Baldur's Gate 3 (Original Game Soundtrack)",
  "duration": 233,
  "instrumental": false,
  "plainLyrics": "I feel your breath upon my neck\n...The clock won't stop and this is what we get\n",
  "syncedLyrics": "[00:17.12] I feel your breath upon my neck\n...[03:20.31] The clock won't stop and this is what we get\n[03:25.72] "
}
```

This can then be "parsed" through to recieve lyrics for each song (in individual lines).

This web app is written in JavaScript and is accessible through GitHub pages here:
https://rachaelchung.github.io/API-demo/index.html

Learn about LRCLIB here: https://lrclib.net/

*A side note: I am completely aware my code has some uneccessary features of collecting the timestamps for each lyric. While I could've just parsed through the plainLyrics, I was collecting everything because I thought I was going to use the syncedLyrics, which in the end, I did not.*