let f_Photo = document.getElementById("photo_1");
let s_Photo = document.getElementById("photo_2");
let t_Photo = document.getElementById("photo_3");
let flag_name = document.getElementById("f_name");


function arg() {
    f_Photo.src = "images/arg.png";
    f_Photo.style.width = "280px";
    f_Photo.style.height = "250px";
    
}

function col() {
    f_Photo.src = "images/col.png";
    f_Photo.style.width = "280px";
    f_Photo.style.height = "250px";
}

function per() {
    f_Photo.src = "images/peru.png";
    f_Photo.style.width = "280px";
    f_Photo.style.height = "250px";
}

function ven() {
    f_Photo.src = "images/ven.png";
    f_Photo.style.width = "280px";
    f_Photo.style.height = "250px";
}

function bra() {
    f_Photo.src = "images/braz.png";
    f_Photo.style.width = "280px";
    f_Photo.style.height = "250px";
}


function ger() {
    s_Photo.src = "images/ger.png";
    s_Photo.style.width = "280px";
    s_Photo.style.height = "250px";
}

function rom() {
    s_Photo.src = "images/rom.png";
    s_Photo.style.width = "280px";
    s_Photo.style.height = "250px";
}

function fra() {
    s_Photo.src = "images/fran.jpg";
    s_Photo.style.width = "280px";
    s_Photo.style.height = "250px";
}

function spa() {
    s_Photo.src = "images/spain.png";
    s_Photo.style.width = "280px";
    s_Photo.style.height = "250px";
}

function ang() {
    s_Photo.src = "images/eng.jpg";
    s_Photo.style.width = "280px";
    s_Photo.style.height = "250px";
}

function chi() {
    t_Photo.src = "images/china.jpg"
    t_Photo.style.width = "280px";
    t_Photo.style.height = "250px";
}

function thai() {
    t_Photo.src = "images/thai.jpg"
    t_Photo.style.width = "280px";
    t_Photo.style.height = "250px";
}

function cor() {
    t_Photo.src = "images/cor.png"
    t_Photo.style.width = "280px";
    t_Photo.style.height = "250px";
}

function jap() {
    t_Photo.src = "images/jap.png"
    t_Photo.style.width = "280px";
    t_Photo.style.height = "250px";
}

function mon() {
    t_Photo.src = "images/mong.png"
    t_Photo.style.width = "280px";
    t_Photo.style.height = "250px";
}

document.getElementById("ev_1").addEventListener("click",function(){
    f_Photo.value = 1;
});

document.getElementById("ev_2").addEventListener("click",function(){
    f_Photo.value = 2;
});

document.getElementById("ev_3").addEventListener("click",function(){
    f_Photo.value = 3;
});

document.getElementById("ev_4").addEventListener("click",function(){
    f_Photo.value = 4;
});

document.getElementById("ev_5").addEventListener("click",function(){
    f_Photo.value = 5;
});

document.getElementById("ev_6").addEventListener("click",function(){
    s_Photo.value = 6;
});

document.getElementById("ev_7").addEventListener("click",function(){
    s_Photo.value = 7;
});

document.getElementById("ev_8").addEventListener("click",function(){
    s_Photo.value = 8;
});

document.getElementById("ev_9").addEventListener("click",function(){
    s_Photo.value = 9;
});

document.getElementById("ev_10").addEventListener("click",function(){
    s_Photo.value = 10;
});

document.getElementById("ev_11").addEventListener("click",function(){
    t_Photo.value = 11;
});

document.getElementById("ev_12").addEventListener("click",function(){
    t_Photo.value = 12;
});

document.getElementById("ev_13").addEventListener("click",function(){
    t_Photo.value = 13;
});

document.getElementById("ev_14").addEventListener("click",function(){
    t_Photo.value = 14;
});

document.getElementById("ev_15").addEventListener("click",function(){
    t_Photo.value = 15;
});

function checker_1() {
    switch(f_Photo.value) {
        case 1 : {
            flag_name.innerHTML = document.getElementById("arg").innerHTML;
            break;};
        case 2 : {
            flag_name.innerHTML = document.getElementById("col").innerHTML;
            break;};
        case 3 :  {
            flag_name.innerHTML = document.getElementById("per").innerHTML;
            break;}
        case 4 : {
            flag_name.innerHTML = document.getElementById("ven").innerHTML;
            break;}
    
        case 5 : {
            flag_name.innerHTML = document.getElementById("bra").innerHTML;
            break;}}}

function checker_2() {
    switch(s_Photo.value) {
        case 6 : {
            flag_name.innerHTML = document.getElementById("ger").innerHTML;
            break;}
        case 7 : {
            flag_name.innerHTML = document.getElementById("rom").innerHTML;
            break;}
        case 8 : {
            flag_name.innerHTML = document.getElementById("fra").innerHTML;
            break;}
        case 9 : {
            flag_name.innerHTML = document.getElementById("spa").innerHTML;
            break;}
        case 10 : {
            flag_name.innerHTML = document.getElementById("ang").innerHTML;
            break;}}}

function checker_3() {
    switch(t_Photo.value) {
        case 11 : {
            flag_name.innerHTML = document.getElementById("chi").innerHTML;
            break;}
        case 12 : {
            flag_name.innerHTML = document.getElementById("thai").innerHTML;
            break;}
        case 13 : {
            flag_name.innerHTML = document.getElementById("cor").innerHTML;
            break;}
        case 14 : {
            flag_name.innerHTML = document.getElementById("jap").innerHTML;
            break;}
        case 15 : { 
            flag_name.innerHTML = document.getElementById("mon").innerHTML;
            break;}}}


let firstCol = document.getElementById("f_flag");
let secondCol = document.getElementById("s_flag");
let thirdCol = document.getElementById("t_flag");
let container = document.getElementById("flags");


function getColor() {
    const colors = ['00', '0F', '5F', 'AF', 'FF'];
    const fisrIndex = getActiveIndex(firstCol);
    console.log(fisrIndex);
    const red = colors[fisrIndex];
    const green = colors[getActiveIndex(secondCol)];
    const blue = colors[getActiveIndex(thirdCol)];
    return `#${red}${green}${blue}`;
}

function resetColors() {
    firstCol.style.borderColor = 'transparent';
    secondCol.style.borderColor = 'transparent';
    thirdCol.style.borderColor = 'transparent';
}

function getActiveIndex(element) {
    let i = 0;
    const inputs = element.getElementsByTagName('input');
    for (i =0; i< 5; i++) {
        if (inputs.item(i).checked) {
            return i;
        }
    }

    return i < 5 ? i : 0;
}

firstCol.addEventListener('click', () => {
    resetColors();
    firstCol.style.borderColor = getColor();
});
secondCol.addEventListener('click', () => {
    resetColors();
    secondCol.style.borderColor = getColor();
});
thirdCol.addEventListener('click', () => {
    resetColors();
    thirdCol.style.borderColor = getColor();
});

function reset() {
    document.getElementById("f_name").innerHTML = "Flag";
    document.getElementById("ev_1").checked = true;
    document.getElementById("ev_6").checked = true;
    document.getElementById("ev_11").checked = true;

    f_Photo.src = "images/arg.png";
    f_Photo.style.width = "280px";
    f_Photo.style.height = "250px";
    
    s_Photo.src = "images/ger.png";
    s_Photo.style.width = "280px";
    s_Photo.style.height = "250px";

    t_Photo.src = "images/china.jpg"
    t_Photo.style.width = "280px";
    t_Photo.style.height = "250px";

    firstCol.style.borderColor = 'black';
    secondCol.style.borderColor = 'black';
    thirdCol.style.borderColor = 'black';
}