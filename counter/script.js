const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const lab = document.getElementById("Btn");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    lab.innerHTML = count;
};

decreaseBtn.onclick = function() {
    count--;
    lab.innerHTML = count;
};

resetBtn.onclick = function() {
    count = 0;
    lab.innerHTML = count;
};

