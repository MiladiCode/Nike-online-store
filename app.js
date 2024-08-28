const wrapper = document.querySelector('.sliderWrapper');

const menuItems = document.querySelectorAll('.menuItem');

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 450,
    colors: [
      {
        code: "black",
        img: "images/air.png",
      },
      {
        code: "darkblue",
        img: "images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "AIR JORDAN",
    price: 300,
    colors: [
      {
        code: "gray",
        img: "images/jordan.png",
      },
      {
        code: "darkgreen",
        img: "images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "BLAZER",
    price: 290,
    colors: [
      {
        code: "gray",
        img: "images/blazer.png",
      },
      {
        code: "green",
        img: "images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "CHATER",
    price: 399,
    colors: [
      {
        code: "black",
        img: "images/crater.png",
      },
      {
        code: "white",
        img: "images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "HIPPE",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "images/hippie.png",
      },
      {
        code: "black",
        img: "images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes= document.querySelectorAll(".size");



menuItems.forEach((item, index) => {
  item.addEventListener("click", ()=>{
    //change the current slide
    wrapper.style.transform = `translatex(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index]

    //change texts of currentproduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = '$' + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assgin new colors
    currentProductColors.forEach((color,index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });

    menuItems.forEach((item) => {
      item.style.backgroundColor = "black";
      item.style.color = "white"
    });

    item.style.backgroundColor = "white";
    item.style.color = "black"
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", ()=> {
    currentProductImg.src = choosenProduct.colors[index].img
  })
})

currentProductSizes.forEach((size,index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    })
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener("click",() => {
  payment.style.display = "flex"
});

close.addEventListener("click",() => {
  payment.style.display = "none"
});

