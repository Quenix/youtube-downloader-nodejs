const fs = require('fs');
const ytdl = require('ytdl-core');

async function download(videoID){
    let info = await ytdl.getInfo(videoID);
    console.log('Started downloading...', /*  */info.videoDetails.title);
    
    ytdl(videoID, {
        quality: `highest`
      })
    .pipe(fs.createWriteStream(`${info.videoDetails.title}.mp4`));

    console.log("Download complete!")
}

download('https://www.youtube.com/watch?v=djV11Xbc914&list=PLj1EqwPS3ZA5Con3CjgzOIMZyeNiNsnsi&index=10')
download("https://www.youtube.com/watch?v=-cJauX_q6wI&list=PLj1EqwPS3ZA5Con3CjgzOIMZyeNiNsnsi&index=13")

