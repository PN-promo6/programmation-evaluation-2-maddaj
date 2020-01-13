
// FUNCTION
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
    tableHeadH.style.color = "red";
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

// ARRAY
let fishList = [
  ["Ordre","Famille","Nom vernaculaire","Nom binomial"],
  ["Aulopiforme","Synodontadiae","Poisson lézard","Synodus saurus"],
  ["Aulopiforme","Anguilliformes","Anguille","Anguilla anguilla"],
  ["Aulopiforme","Congridae","Congre","Conger conger"],
  ["Atheriniformes","Atherinidae","Joël","Atherina boyeri"],
];

// CALL FUNCTION
displayElement(fishList);
