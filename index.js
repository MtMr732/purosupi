const orderFirst = document.getElementById("1");

const orderSecond = document.getElementById("2");

const plaiers = document.querySelectorAll(".playerName");
const posButton = document.querySelectorAll(".position");

let selected = null;

plaiers.forEach((player) => {
  player.addEventListener("click", (e) => {
    posButton.forEach((pos) => {
      pos.classList.add("disabled");
      pos.setAttribute("disabled", true);
    });

    if (!selected) {
      selected = e;
      return;
    }
    console.log("selected:" + selected);
    changePosition(e);

    posButton.forEach((pos) => {
      pos.removeAttribute("disabled");
      pos.classList.remove("disabled");
    });
  });
});

function changePosition(secondEle) {
  console.log("!");
  const buffer = secondEle.target.innerText;
  console.log("Second Element:" + secondEle);
  secondEle.target.innerText = selected.target.innerText;
  selected.target.innerText = buffer;
  selected = null;
}

posButton.forEach((pos) => {
  pos.addEventListener("click", (e) => {
    plaiers.forEach((player) => {
      player.classList.add("disabled");
      player.setAttribute("disabled", true);
    });

    if (!selected) {
      selected = e;
      return;
    }
    console.log("selected:" + selected);
    changePosition(e);

    plaiers.forEach((player) => {
      player.removeAttribute("disabled");
      player.classList.remove("disabled");
    });
  });
});
