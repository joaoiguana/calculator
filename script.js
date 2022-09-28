let display=document.getElementById("screen");
let allClear = () => {
  display.value = "";
}

let show = (n) => {
    display.value += n;
}

let calc = () => {
    display.value = eval(display.value);
}
