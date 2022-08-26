const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const clearBtn = document.getElementById('clear');
const colorInput = document.getElementById('color');
const sizeRange = document.getElementById('size');

let size = 8;
let color ='black';
let x;
let y;
let isPressed = false;

function drawCircle(x, y){
    
}