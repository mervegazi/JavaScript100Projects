const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){ //get your own video
    navigator.mediaDevices.getUserMedia({ video: true, audio: false})
    .then(localMediaStream =>{
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch(err => { //generate an error if user doesn't allow to capture video.
       console.error('OH NO!!!', err); 
    });
}

function paintToCanavas(){ //adjust canvas size based on video size
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height =height; 

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}


getVideo();