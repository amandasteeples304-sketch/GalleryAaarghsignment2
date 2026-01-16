console.log(`oooohhh...`);

const thumbnailsContainer = document.querySelector(".thumbnails");
const bigDisplay = document.getElementById("bigDisplay");

const images = [
  {
    src: `https://images.unsplash.com/photo-1526344966-89049886b28d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt: `body of water surrounded by blooming cherry blossom trees`,
  },
  {
    src: `https://images.unsplash.com/photo-1600759487717-62bbb608106e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt: `a field of lavender in front of mountains as the setting sun turns the sky dusky pink.`,
  },
  {
    src: `https://images.unsplash.com/photo-1667833149392-627729dc708a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt: `a blooming orange with red coloured Chrysanthemum up close`,
  },
  {
    src: `https://images.unsplash.com/photo-1641963547471-969f5be55ae8?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt: `snow covered Holly bush leaves with its red berries`,
  },
];

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    const imageElement = document.createElement(`img`);
    imageElement.src = images[i].src;
    imageElement.alt = images[i].alt;

    imageElement.addEventListener(`click`, function () {
      console.log(images[i]);
      createBigImage(images[i]);
    });
    thumbnailsContainer.append(imageElement);
  }
}

createThumbnails();

function createBigImage(imageData) {
  bigDisplay.innerHTML = "";
  const bigImage = document.createElement(`img`);

  bigImage.src = imageData.src;
  bigImage.alt = imageData.alt;

  bigDisplay.append(bigImage);
}

const imageData = {
  src: `https://images.unsplash.com/photo-1526344966-89049886b28d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  alt: `body of water surrounded by blooming cherry blossom trees`,
};

const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("prev");
nextBtn.addEventListener(`click`, function () {
  console.log("next");
  bigImage.next();
}),
  previousBtn.addEventListener(`click`, function () {
    console.log("prev");
    bigImage.prev();
  });
