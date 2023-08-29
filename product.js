//linker din data her fra sammen med produktliste, så det linker til de rigtige produkter
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

const parent = document.querySelector(".grid");

function showProduct(product) {
  console.log(product);
  // document.querySelector(".breadcrumb li:nth-child(2)").textContent = product.productdisplayname;
  //document.querySelector(".breadcrumb li:nth-child(3)").textContent = product.productdisplayname;
  document.querySelector(".breadcrumb li:nth-child(4)").textContent = product.productdisplayname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".box h3").textContent = product.productdisplayname;
  document.querySelector(".box .p1").textContent = product.articletype + " | " + product.brandname;
  document.querySelector(".box .p2").textContent = product.price;
  if (product.discount) {
    document.querySelector("p.p3").textContent = product.price - (product.price / 100) * product.discount;
    document.querySelector("p.p4").textContent = product.discount + "%";
  } else {
    document.querySelector(".discount").remove();
  }
  if (product.soldout == 1) {
    document.querySelector(".box").classList.add("soldout");
    document.querySelector(".button").classList.add("soldout");
    document.querySelector("form").remove();
    document.querySelector(".button").remove();
  }
  document.querySelector(".info h2").textContent = product.brandname;
  document.querySelector(".info dl dd").textContent = product.articletype;
  document.querySelector(".info dd:nth-child(4)").textContent = product.basecolour;
  document.querySelector(".info dd:nth-child(6)").textContent = product.gender;
  document.querySelector(".info dd:nth-child(8)").textContent = product.subcategory;

  document.querySelector(".description h2").textContent = product.productdisplayname;
  document.querySelector(".description h3").textContent = product.productionyear;
  document.querySelector(".description p").innerHTML = product.description;
  document.querySelector(".description .brand").textContent = product.brandname;
  document.querySelector(".description .brandbio").textContent = product.brandbio;
}
