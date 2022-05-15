cvs = document.getElementById("canvas");
ctx = cvs.getContext("2d");

const drawRect = (x, y, w, h, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};
const drawCircle = (x, y, r, color) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.closePath();
  ctx.fill();
};
const drawText = (text, x, y, color) => {
  ctx.fillStyle = color;
  ctx.font = "50px sans-serif";
  ctx.fillText(text, x, y);
};
const oyuncu = {
  x: 20,
  y: cvs.height / 2 - 50,
  w: 10,
  h: 100,
  color: "#000",
  score: 0,
};
const bilgisayar = {
  x: cvs.width - 30,
  y: cvs.height / 2 - 50,
  w: 10,
  h: 100,
  color: "#000",
  score: 0,
};
const cubukhareketi = (e) => {
  let dikt = cvs.getBoundingClientRect();
  oyuncu.y = e.clientY - dikt.top - oyuncu.h / 2;
};
cvs.addEventListener("mousemove", cubukhareketi);

const yazdir = () => {
  drawRect(0, 0, cvs.width, cvs.height, "#add8e6");
  drawRect(cvs.width / 2 - 2, 0, 4, cvs.height, "#000");
  drawCircle(cvs.width / 2, cvs.height / 2, 12, "#0faea4");
  drawText(oyuncu.score, cvs.width / 4, 100, "#000");
  drawText(bilgisayar.score, (3 * cvs.width) / 4, 100, "#000");
  drawRect(oyuncu.x, oyuncu.y, oyuncu.w, oyuncu.h, oyuncu.color);
  drawRect(
    bilgisayar.x,
    bilgisayar.y,
    bilgisayar.w,
    bilgisayar.h,
    bilgisayar.color
  );
};
yazdir();
