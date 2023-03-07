
const makeupContainer = document.getElementById("makeup-container");
const searchInput = document.getElementById("search");
let  product = [];

function handleSearch(target) {
  const search = target.value.toLowerCase();
  const searchMatch =  product.filter((element) => {
    const name = element.name.toLowerCase();
    return name.includes(search);
  });
  renderCards(searchMatch);
}

async function fetchData() {
  const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
  const data = await response.json();
  if (data.length > 0) {
    product = [...data];
    renderCards( product);
  }
}
fetchData();
function renderCards(data = []) {
  
  let cards = [];
  for (let i = 0; i < data.length; i++) {
    cards.push(createCard(data[i]));
  }
  
  makeupContainer.innerHTML = "";
  
  makeupContainer.append(...cards);
}

function createCard(data = {}) {
  let card = document.createElement("div");
  let title = document.createElement("h2");
  let brand1 = document.createElement("p");
  let id1    = document.createElement("p");
  let price1 =  document.createElement("p");
  let currency1=  document.createElement("p");
  let image_link1=document.createElement("a");
  let website_link1=document.createElement("a")
image_link1.setAttribute("id","ancer")
  card.setAttribute("class", "card");

  
  const { name = "", brand = "", id= "",price="", currency="",image_link="",website_link=""} = data;
  title.innerText = name;
  brand1.innerText = brand;
  id1.innerText = id;
  price1.innerText = price;
  currency1.innerText = currency;
  image_link1.innerHTML = image_link;
  website_link1.innerHTML = website_link;
 
  card.append(title, brand1,id1,price1,currency1, image_link1,website_link);

  return card;
}