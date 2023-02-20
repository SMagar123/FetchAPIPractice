const memeApi = "https://api.imgflip.com/get_memes";
(async () => {
  try {
    const response = await fetch(memeApi); //get request by default
    const data = await response.json();
    showMemes(data.data.memes);
  } catch (err) {
    console.error(err);
  }
})();
let imageDiv = document.getElementById("memeImage");
function showMemes([firstOne,...memesMaterials]) {
  memesMaterials.map((item) => {
    //creating div for memes
    let imageResultDiv = document.createElement("div");
    imageResultDiv.className = "imageResultDiv";
    //creating image for meme
    let imageMeme = document.createElement("img");
    imageMeme.src = `${item.url}`;
    imageResultDiv.appendChild(imageMeme);
    //creating title for meme
    let memeName = document.createElement("h4");
    memeName.innerText = `${item.name}`;
    imageResultDiv.appendChild(memeName);
    imageDiv.appendChild(imageResultDiv);
  });
}
