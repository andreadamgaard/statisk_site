//fetch
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //loope
  products.forEach(showProduct);
}

const template = document.querySelector("template").content;
const parent = document.querySelector(".grid");

function showProduct(product) {
  const copy = template.cloneNode(true);
  console.log(product);
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("p.p1").textContent = product.articletype + " | " + product.brandname;
  copy.querySelector("p.p2").textContent = product.price;
  if (product.discount) {
    copy.querySelector("p.p3").textContent = product.price - (product.price / 100) * product.discount;
    copy.querySelector("p.p4").textContent = product.discount + "%";
  } else {
    copy.querySelector(".discount").remove();
  }
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldout");
  }
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".readmore").setAttribute("href", `product.html?id=${product.id}`);
  parent.appendChild(copy);
}
