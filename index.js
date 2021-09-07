"use strict";

const button = document.querySelector(".btn");
const quotesElement = document.querySelector(".quotes");

const listElement = document.createElement("li");

const getData = async function () {
  const URL = "https://type.fit/api/quotes";

  const res = await fetch(URL);
  const data = await res.json();

  const randomNumber = Math.floor(Math.random() * data.length);

  let textData = data[randomNumber].text;
  let authorData = data[randomNumber].author;

  if (authorData) {
    const applyChild = () => {
      listElement.innerHTML = `
        <p>${textData}</p>
        <p>${authorData}</p>`;
      quotesElement.appendChild(listElement);
    };
    applyChild();
  } else {
    getData();
  }
};

getData();

button.addEventListener("click", () => {
  if (!getData()) quotesElement.removeChild(listElement);
});
