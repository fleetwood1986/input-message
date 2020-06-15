const para2 = document.getElementById("para2");
const inp = document.getElementById("inp");

const water = ()=>{
if(inp.value === ""){
  para2.textContent = "Drink water";
}else{
para2.textContent = inp.value;
inp.value = "";
}}