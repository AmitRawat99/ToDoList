let inputs = document.getElementById("input");
let plusIcon = document.getElementById("plusIcon");
let box = document.getElementsByClassName("box1")[0];
let refresh = document.getElementById('refresh')

function task() {
  if (inputs.value.trim() == "") {
    alert("Write A Something Text");
  } else {
    let Addlist = document.createElement("ul");
    Addlist.classList.add("AddList");

    let div = document.createElement("div");
    let inputElement = document.createElement("input");
    let labelElement = document.createElement("label");

    inputElement.type = "radio";
    inputElement.id = "label";
    labelElement.setAttribute("for", "label");

    labelElement.innerHTML = inputs.value;
    div.classList.add("text");

    let div1 = document.createElement("div");
    let icon = document.createElement("i");
    icon.innerText = "x";
    div1.classList.add("div1");

    div.appendChild(inputElement);
    div.appendChild(labelElement);
    div1.appendChild(icon);

    box.appendChild(Addlist);
    Addlist.appendChild(div);
    Addlist.appendChild(div1);

    inputs.value = "";

    icon.addEventListener("click", function () {
      box.removeChild(Addlist);
    });

    refresh.addEventListener('click',function(){
      box.removeChild(Addlist)
    })
  }
}