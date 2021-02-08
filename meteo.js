/*let villeCourante = "Lyon";
function showCity() { alert(villeCourante); }*/

let cities = document.getElementsByClassName("city");

let l = cities.length;
for (let i=0; i<l; i++) {
    cities[i].style.display= "none";
}

function showCity() {

let select = document.getElementsByName("ville")[0];
let selected_city = select.value;

for (let i=0; i<l; i++) {
    cities[i].style.display= "none";
}

if(selected_city == "Paris"){
    document.getElementsByName("paris")[0].style.display="";
}else if(selected_city == "Douais"){
    document.getElementsByName("Douais")[0].style.display="";
}else if(selected_city == "Osio"){
    document.getElementsByName("Osio")[0].style.display="";
}

}