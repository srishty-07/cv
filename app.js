let dragindex = 0;
let dropindex = 0;
let clone = "";

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
  e.preventDefault();
  clone = e.target.cloneNode(true);
  let data = e.dataTransfer.getData("text");
  if (clone.id !== data) {
    let nodelist1 = document.getElementById("grid-container").childNodes;
    for (let i = 0; i < nodelist1.length; i++) {
      let nodelist =
        document.getElementsByClassName("grid-item")[i].childNodes[1];
      if (nodelist.id == data) {
        dragindex = i;
      }
    }
  }
//   console.log(document.getElementById(data));
//   console.log(e.target);
  document
    .getElementsByClassName("grid-item")
    .replaceChild(document.getElementById(data), e.target);

  document
    .getElementsByClassName("grid-item")
    .insertBefore(
      clone,
      document.getElementsByClassName("grid-item").childNode[dragindex]
    );
}

function allowDrop(e) {
  e.preventDefault();
}



// const draggablesBoxes = document.querySelectorAll(".box");
// //jaha pe drop hoga in conatiner we want to drop these boxes in grid-item conatiners
// const container = document.querySelectorAll(".grid-item");

// //for opacity
// draggablesBoxes.forEach((draggablesBoxes) => {
//   //when we start dragging box ki opacity bhi satth mai kum ho jayegi so to prevent that hum remove bhi karenge is class list ko as soon as hum drag chodenege tab
//   draggablesBoxes.addEventListener("dragstart", () => {
//     draggablesBoxes.classList.add("dragging");
//   });
//   draggablesBoxes.addEventListener("dragend", () => {
//     draggablesBoxes.classList.remove("dragging");
//   });
// });