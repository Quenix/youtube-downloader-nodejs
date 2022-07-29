const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

async function download(){
    let videoID = 'https://www.youtube.com/watch?v=NdYWuo9OFAw&list=PLj1EqwPS3ZA5Con3CjgzOIMZyeNiNsnsi'
    let info = await ytdl.getInfo(videoID);
    let format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
    console.log('Format found!', /*  */info.videoDetails.title);
    
    ytdl(videoID, {
        quality: `highest`
      })
    .pipe(fs.createWriteStream(`${info.videoDetails.title}.mp4`));
}

download()

if (true) {
    return
}

