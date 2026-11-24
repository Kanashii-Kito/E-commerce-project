const shop_catlog = [
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "TIE Fighter",
    price: 60000,
    category: "Starfighter",
    image: "images/tiefighter.png",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "TIE Bomber",
    price: 75000,
    category: "Starfighter",
    image: "images/tiebomber.jpg",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "TIE Interceptor",
    price: 65000,
    category: "Starfighter",
    image: "images/tieinter.jpg",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "TIE Advanced x1",
    price: 120000,
    category: "Starfighter",
    image: "images/tieadv.jpg",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "TIE Defender",
    price: 300000,
    category: "Starfighter",
    image: "images/il_fullxfull.1199696595_c9xf.avif",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "TIE Striker",
    price: 55000,
    category: "Starfighter",
    image: "images/TIE_striker_schematic.webp",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "TIE Reaper",
    price: 110000,
    category: "Starfighter",
    image: "images/TIE_Reaper.webp",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "Lambda-class T-4a Shuttle",
    price: 240000,
    category: "Shuttle & Landing Craft",
    image: "images/LCS.webp",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "Sentinel-class Landing Craft",
    price: 260000,
    category: "Shuttle & Landing Craft",
    image: "images/ISC.jpeg",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "Delta-class T-3c Shuttle",
    price: 210000,
    category: "Shuttle & Landing Craft",
    image: "images/idk15.jpg",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "Mu-class Shuttle",
    price: 180000,
    category: "Shuttle & Landing Craft",
    image: "images/idk24.webp",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "Immobilizer 418 Interdictor-class Heavy Cruiser",
    price: 52000000,
    category: "Capital Ship",
    image: "images/im2.webp",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "Vindicator-class Heavy Cruiser",
    price: 48000000,
    category: "Capital Ship",
    image: "images/vin1.webp",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "Enforcer-class Light Cruiser",
    price: 23000000,
    category: "Capital Ship",
    image: "images/enforcer10.jpg",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "Guardian-class Corvette",
    price: 9500000,
    category: "Capital Ship",
    image: "images/idk126.jpg",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "Twin Ion Engine Sublight Propulsion System",
    price: 8500,
    category: "Component & Tech",
    image: "images/idk1.png",
  },
  {
    Manufacturer: "Sienar Fleet Systems",
    name: "XX-23 S-thread Tracker",
    price: 15000,
    category: "Component & Tech",
    image: "images/xx1.webp",
  },
  {
    Manufacturer: "Roberts Space Industries",
    name: "Galaxy",
    price: 15000,
    category: "Capital Ship",
    image: "images/RSI_Galaxy.jpg",
  },
  {
    Manufacturer: "Anvil Aerospace",
    name: "Odin",
    price: 52000000,
    category: "Capital Ship",
    image: "images/odin.jpg",
  },
  {
    Manufacturer: "Roberts Space Industries",
    name: "Polaris",
    price: 52000000,
    category: "Capital Ship",
    image: "images/_reo_.webp",
  },
];

let shopping_cart = [];

function add_cat(productName) {
  const product = shop_catlog.find((item) => item.name === productName);

  if (!product) {
    return "Product not found | ID:10T Error";
  }

  shopping_cart.push(product);

  return shopping_cart;
}

function removeFromCart(productName) {
  const index = shopping_cart.findIndex((item) => item.name === productName);

  if (index === -1) {
    return "Product not found | ID:10T Error1";
  }

  shopping_cart.splice(index, 1);

  return shopping_cart;
}

function calculateTotal() {
  return shopping_cart.reduce((total, item) => total + item.price, 0);
}

const container = document.querySelector(".container");

function cat(items) {
  container.innerHTML = "";

  items.forEach((item) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="card-title">${item.name}</h2>
        <h2 class="card-title2 fontsizetest">${item.category}</h2>
        <img
          class="card-img centering"
          src="${item.image}"
          alt="${item.name}"
        />
        <p class="card-price frt3 blah">Price : ${item.price} Credits</p>
        <button class="card-btn">Add to Cart</button>
      </div>`,
    );
  });
}

let filter = [];

const filter_btn = document.querySelectorAll(".filter_btn");

filter_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedCategory = btn.dataset.category;

    if (!selectedCategory) {
      cat(shop_catlog);
    } else {
      const filteredItems = shop_catlog.filter(
        (item) => item.category === selectedCategory,
      );
      cat(filteredItems);
    }
  });
});

console.log("js is running and has ran");

cat(shop_catlog);

// shop_catlog.forEach((item) => {
//   inject(item);
// });

//make 1 html card, comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons

// const crash = [];
// while (true) {
//   crash.push(new Array(1e7).fill("ID10T"));
//   console.log(crash);
// }
