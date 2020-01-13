function cinema() {
  let i = 0;
  let currentElement;
  while (i < movieArray.length) {
    currentElement = array[i];
    let title = document.createElement("h1");
    title.setAttribute("class","black_title");
    let paragraphe = document.createElement("p");
    paragraphe.textContent = currentElement;
    document.body.appendChild(paragraphe);
    var btn = document.createElement("BUTTON");
    let text = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
    i++;
  }
}
let movieArray =["Titre du film","Réalisateur","Nationalité","Année","Durée","Version"];
cinema(movieArray);

function displayElement(array) {
  // POSITION
  let i = 1;
  let j = 0;
  // COLUMN TITLE
  let dataHead = array[0];
  let nbElement;
  // CURRENT ELEMENT
  let currentElement;
  let currentElement2;
  // TABLE ORGANIZATION
  let table = document.createElement("table");
  document.body.appendChild(table);
  table.style.border ="1px solid black";
  // CREATE TABLE HEAD
  let tableHead = document.createElement ("thead");
  table.appendChild(tableHead);
  let tableHeadR = document.createElement("tr");
  tableHead.appendChild(tableHeadR);
  let tableHeadH;
  // CREATE TABLE BODY
  let tableBody = document.createElement("tbody");
  table.appendChild(tableBody);
  let tableR;
  let tableD;
  // FIRST LOOP TO CREATE THE HEADER
  while (j < dataHead.length) {
    currentElement = dataHead[j];
    tableHeadH = document.createElement("th");
    tableHeadR.appendChild(tableHeadH);
    tableHeadH.textContent = currentElement;
    j++;
    nbElement ++;
  }
  // SECOND LOOP TO CREATE THE BODY
  while (i < array.length) {
    currentElement = array[i];
    tableR = document.createElement("tr");
    tableBody.appendChild(tableR);
    j = 0;
    while (j < currentElement.length) {
      currentElement2 = currentElement[j];
      tableD = document.createElement("td");
      tableR.appendChild(tableD);
      tableD.textContent = currentElement2;
      j++;
    }
    i++;
  }
  return array;
}
