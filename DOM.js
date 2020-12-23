function increase(id, prix, ctn, prixtot) {
  let inp = document.getElementById(id);
  let val = Number(inp.value);
  val++;
  inp.value = val;
  let price = document.getElementById(prix);
  price.innerHTML = `${ctn * val}`;
  let tot = document.getElementById(prixtot);
  tot.innerHTML = `${Number(tot.innerHTML) + ctn}`;
}
function decrease(id, prix, ctn, prixtot) {
  let inp = document.getElementById(id);
  let val = Number(inp.value);
  val = isNaN(val) ? 0 : val;
  val < 1 ? (val = 1) : "";
  val--;
  inp.value = val;
  let price = document.getElementById(prix);
  price.innerHTML = `${ctn * val}`;
  let tot = document.getElementById(prixtot);
  if (val > 1) {
    tot.innerHTML = `${Number(tot.innerHTML) - ctn}`;
  } else {
    tot.innerHTML = `${Number(tot.innerHTML) -2* ctn*val}`;
  }
}
function myFunction1() {
  var myobj = document.getElementById("demo1");
  myobj.remove();
}
function myFunction2() {
  var myobj = document.getElementById("demo2");
  myobj.remove();
}
function myFunction3() {
  var myobj = document.getElementById("demo3");
  myobj.remove();
}
function total(prix1, prix2, prix3, prixtot) {
  let tot1 = document.getElementById(prix1);
  let tot2 = document.getElementById(prix2);
  let tot3 = document.getElementById(prix3);
  let tot = document.getElementById(prixtot);
  tot.innerHTML = `${
    Number(tot1.innerHTML) + Number(tot2.innerHTML) + Number(tot3.innerHTML)
  }`;
}
