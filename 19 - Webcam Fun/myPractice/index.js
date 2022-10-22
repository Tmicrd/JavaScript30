const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

// 1. get the video
function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);

      video.srcObject = localMediaStream; // convert object into url
      video.play();
    })
    .catch((error) => {
      console.log("error: ", error);
    });
}

// 2. put the video into canvas
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  // canvas 和 video 的宽高要一致
  canvas.width = width;
  canvas.height = height;
  console.log(width, height);

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height); // 0 0 stands for top left

    // get pixels
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with the pixels
    // pixels = redEffect(pixels);
    pixels = rgbSplit(pixels);
    // put the pixels back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

// 3. play a sound when taking photo
// 4. take the photo out of the canvas, putting it into strip
function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL("image/png"); // blob
  const link = document.createElement("a");
  let time = new Date().getDate();

  link.href = data;
  link.setAttribute("download", `snap`);
  link.innerHTML = `<img src="${data}" alt="SNAP"/>`;
  strip.insertBefore(link, strip.firstChild);
  console.log("data: ", data);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 190; // RED
    pixels.data[i + 1] = pixels.data[i + 1] + 500; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] + 800; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 50] = pixels.data[i + 0]; // RED
    pixels.data[i + 60] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 30] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
