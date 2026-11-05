const shop_catlog = [
  {
    name: "TIE/ln Space Superiority Starfighter",
    price: 60000,
    catagory: "Starfighter",
  },
  {
    name: "TIE/sa Bomber",
    price: 75000,
    catagory: "Starfighter",
  },
  {
    name: "TIE/in Interceptor",
    price: 65000,
    catagory: "Starfighter",
  },
  {
    name: "TIE Advanced x1",
    price: 120000,
    catagory: "Starfighter",
  },
  {
    name: "TIE/D Defender",
    price: 300000,
    catagory: "Starfighter",
  },
  {
    name: "TIE/sk Striker",
    price: 55000,
    catagory: "Starfighter",
  },
  {
    name: "TIE Reaper",
    price: 110000,
    catagory: "Starfighter",
  },
  {
    name: "Lambda-class T-4a Shuttle",
    price: 240000,
    catagory: "Shuttle & Landing Craft",
  },
  {
    name: "Sentinel-class Landing Craft",
    price: 260000,
    catagory: "Shuttle & Landing Craft",
  },
  {
    name: "Delta-class T-3c Shuttle",
    price: 210000,
    catagory: "Shuttle & Landing Craft",
  },
  {
    name: "Mu-class Shuttle",
    price: 180000,
    catagory: "Shuttle & Landing Craft",
  },
  {
    name: "Immobilizer 418 Interdictor-class Heavy Cruiser",
    price: 52000000,
    catagory: "Capital Ship",
  },
  {
    name: "Vindicator-class Heavy Cruiser",
    price: 48000000,
    catagory: "Capital Ship",
  },
  {
    name: "Enforcer-class Light Cruiser",
    price: 23000000,
    catagory: "Capital Ship",
  },
  {
    name: "Guardian-class Corvette",
    price: 9500000,
    catagory: "Capital Ship",
  },
  {
    name: "Twin Ion Engine Sublight Propulsion System",
    price: 8500,
    catagory: "Component & Tech",
  },
  {
    name: "XX-23 S-thread Tracker",
    price: 15000,
    catagory: "Component & Tech",
  },
];

function filter_cat(category) {
  if (category === "All") {
    return shop_catlog;
  }

  return shop_catlog.filter((item) => item.catagory === category);
}

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
