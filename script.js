const body = document.body;
const div = document.createElement("div");
body.append(div);

const redText = document.createElement("p");
div.append(redText);

redText.style.color = "red";
redText.textContent = "Hey I'm red!"

const blueText = document.createElement("h3");
div.append(blueText);


blueText.style.color = "blue";
blueText.textContent = "Hey I'm a blue h3";

const blackBorderDiv = document.createElement("div");
div.append(blackBorderDiv);
blackBorderDiv.style.border = "thick solid #000000"
blackBorderDiv.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
blackBorderDiv.append(h1);

h1.textContent = "I'm in a div";

const p = document.createElement("p");
blackBorderDiv.append(p);
p.textContent = "Me Too!";