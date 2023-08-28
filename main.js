//fetch
fetch("https://kea-alt-del.dk/t7/api/sample")
  .then((res) => res.json())
  .then(showSample);

function showSample(sample) {
  //loope
  sample.forEach(showSample);
}

function showSuperhero(sample) {
  console.log(sample);
  const template = document.querySelector;
}
