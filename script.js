"use strict"

let mf_inner = document.querySelector(".mf_inner");
let themeButton = document.querySelector(".themechanger");
let backCircle = document.querySelector(".circle");
let times = document.querySelectorAll(".time");
let root = document.documentElement;
let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let togglecircle = document.querySelector(".togglecircle"); 

class Lession
{
    constructor(aTitle, aClassroom = "", aTeacher = "", aType = "")
    {
        this.title = aTitle;
        this.classroom = aClassroom;
        this.teacher = aTeacher;
        this.type = aType;
    }
    HTMLify()
    {
        let result = `<div class="card flexalign ${this.type}">`;
        result += `<div><span class="m">${this.title}</span><br>`;
        result += `<nobr class="s">${this.teacher}`;
        if (this.teacher != "")
            result += ',';
        result +=` ${this.classroom}</nobr>`;
        result += `</div></div>`;
        return result;
    }
}

class LessionCard
{
    constructor(aNum, aLessions = [])
    {
        switch (aNum) {
            case 1: 
                this.num = "first";
                break;
            case 2:
                this.num = "second";
                break;
            case 3:
                this.num = "third";
                break;
            case 4:
                this.num = "fourth";
                break;
            case 5:
                this.num = "fifth";
                break;
            case 6:
                this.num = "sixth";
                break;
            case 7:
                this.num = "seventh";
                break;
        }
        this.lessions = aLessions; 
    }
    HTMLify(day)
    {
        let result = "";
        result = `<div class="lession cell ${this.num} ${day}">`;
        this.lessions.forEach((item, index, array) => 
                                { result += item.HTMLify(); }
                             );
        result += `</div>`;
        return result;
    }
}

let monday = [
                new LessionCard(1, [new Lession("Элитный английский", "315", "Кудинова", "all")]),
                new LessionCard(2, [new Lession("Элитный английский", "315", "Кудинова", "all")]),
                new LessionCard(3, [new Lession("Вычислительные методы", "226", "Корольков", "all")]),
                new LessionCard(4, [new Lession("", "", "", "all")]),
                new LessionCard(5, [new Lession("Тервер и матстат", "409П", "Чудинова", "all")]),
                new LessionCard(6, [new Lession("ПМУ", "12", "Ширяев", "all")]),
                new LessionCard(7, [new Lession("ПМУ", "11", "Ширяев", "all")]),
];

let tuesday = [
                new LessionCard(1, [new Lession("Военная подготовка", "", "", "all")]),
                new LessionCard(2, [new Lession("Военная подготовка", "", "", "all")]),
                new LessionCard(3, [new Lession("Военная подготовка", "", "", "all")]),
                new LessionCard(4, [new Lession("Военная подготовка", "", "", "all")]),
                new LessionCard(5, [new Lession("Военная подготовка", "", "", "all")]),
                new LessionCard(6, [new Lession("", "", "", "all")]),
                new LessionCard(7, [new Lession("", "", "", "all")]),
];

let wednesday = [
                new LessionCard(1, [new Lession("Java", "216", "Курбатова", "nom"), new Lession("Машинное обучение", "214", "Золотарёв", "fgdenom"), new Lession("", "", "", "sgdenom")]),
                new LessionCard(2, [new Lession("Ассемблер", "9", "Вощинская", "fgnom"), new Lession("Машинное обучение", "304", "Золотарёв", "sgnom"), new Lession("", "", "", "fgdenom"), new Lession("Ассемблер", "9", "Вощинская", "sgdenom")]),
                new LessionCard(3, [new Lession("БД", "12", "Каширская", "all")]),
                new LessionCard(4, [new Lession("Физкультура", "", "", "all")]),
                new LessionCard(5, [new Lession("", "", "", "all")]),
                new LessionCard(6, [new Lession("", "", "", "all")]),
                new LessionCard(7, [new Lession("", "", "", "all")]),
                new LessionCard(7, [new Lession("MS.NET (20:00–21:30, онлайн)", "Moodle", "Старикова", "all")]),

];

let thursday = [
                new LessionCard(1, [new Lession("Java", "433", "Курбатова", "all")]),
                new LessionCard(2, [new Lession("Вычислительные методы", "337", "Корзунина", "all")]),
                new LessionCard(3, [new Lession("Вычислительные методы", "337", "Корзунина", "nom"), new Lession("", "", "", "denom")]),
                new LessionCard(4, [new Lession("ОС", "214", "Вощинская", "fgnom"),
                                    new Lession("MS.NET", "304", "Курченкова", "sgnom"),
                                    new Lession("MS.NET", "9", "Курченкова", "fgdenom"),
                                    new Lession("ОС", "20", "Вощинская", "sgdenom")]),
                new LessionCard(5, [new Lession("Тервер", "433", "Каширина", "all")]),
                new LessionCard(6, [new Lession("", "", "", "all")]),
                new LessionCard(7,
                                [new Lession("Машинное обучение (19:30–21:00, онлайн)", "Zoom", "Золотарёв", "all")]),

];

let friday = [
                new LessionCard(1, [new Lession("", "", "", "all")]),
                new LessionCard(2, [new Lession("", "", "", "all")]),
                new LessionCard(3, [new Lession("ОС", "226", "Вощинская", "all")]),
                new LessionCard(4, [new Lession("БД", "12", "Каширская", "all")]),
                new LessionCard(5, [new Lession("Ассемблер", "226", "Вощинская", "nom"),
                                    new Lession("Ассемблер", "337", "Вощинская", "denom")]),
                new LessionCard(6, [new Lession("Физкультура", "", "", "denom"), new Lession("", "", "", "nom")]),
                new LessionCard(7, [new Lession("", "", "", "all")]),

];

let saturday = [
                new LessionCard(1, [new Lession("", "", "", "all")]),
                new LessionCard(2, [new Lession("", "", "", "all")]),
                new LessionCard(3, [new Lession("", "", "", "all")]),
                new LessionCard(4, [new Lession("Элитный английский", "315", "Кудинова", "all")]),
                new LessionCard(5, [new Lession("", "", "", "all")]),
                new LessionCard(6, [new Lession("", "", "", "all")]),
                new LessionCard(7, [new Lession("", "", "", "all")]),
];

function dayfill(day, dayName)
{
    let result = "";
    day.forEach(item => {result += item.HTMLify(dayName);})
    mf_inner.innerHTML += result;
    return;
}

let lightColors = ['#EEE5E9',
    'rgba(238, 229, 233, .4)',
    '#E07767',
    '#C4C9D4',
    '#3C4353',
    '#B8BECC',
    '#C4C9D4',
    '#D0D4DD'];

let darkColors = ['#111317',
    'rgba(17, 19, 23, .4)',
    '#772418',
    '#2B303A',
    '#EEE5E9',
    '#23272F',
    '#343A46',
    '#3D4452'];

let cssVars = ['--backgroundColor', 
    '--outermfColor', 
    '--backgroundboxColor', 
    '--headerColor', 
    '--textColor', 
    '--bodyframeColor', 
    '--lessioncardColor', 
    '--lessiontopcardColor'];

let currentTheme = +localStorage.getItem('theme') || 0; //0 — light, 1 — dark

function changeScheme(colors) {
    for (let i = 0; i < 8; i++)
        root.style.setProperty(cssVars[i], colors[i]);
}

function makeLight() {
    changeScheme(lightColors);
    togglecircle.style.transform = "translateX(44px)";
}

function makeDark() {
    changeScheme(darkColors);
    togglecircle.style.transform = "translateX(0px)";
}

function setTheme() {
    if (currentTheme == 0) 
        makeLight();
    else 
        makeDark();
}

function changeTheme() {
    if (currentTheme == 0) {
        animateChange(darkColors);
        darkAnimateCircle();
        gsap.to(".togglecircle", {duration: 1, x: 0});
        currentTheme = 1;
    }
    else {
        animateChange(lightColors);
        lightAnimateCircle();
        gsap.to(".togglecircle", {duration: 1, x: 44});
        currentTheme = 0;
    }
    localStorage.setItem('theme', currentTheme);
}

function animateChange(colors) {
    gsap.to(root, {'--backgroundColor': colors[0], duration: 1, yoyo: false, repeat: 0});
    gsap.to(root, {'--outermfColor': colors[1], duration: 1, yoyo: false, repeat: 0});
    gsap.to(root, {'--backgroundboxColor': colors[2], duration: 1, yoyo: false, repeat: 0});
    gsap.to(root, {'--headerColor': colors[3], duration: 1, yoyo: false, repeat: 0});
    gsap.to(root, {'--textColor': colors[4], duration: 1, yoyo: false, repeat: 0});
    gsap.to(root, {'--bodyframeColor': colors[5], duration: 1, yoyo: false, repeat: 0});
    gsap.to(root, {'--lessioncardColor': colors[6], duration: 1, yoyo: false, repeat: 0});
    gsap.to(root, {'--lessiontopcardColor': colors[7], duration: 1, yoyo: false, repeat: 0});
}

function darkAnimateCircle() {
    gsap.to(".circle", {duration: 1, x: 1400, y: 1300});
}

function lightAnimateCircle() {
    gsap.to(".circle", {duration: 1, x: 0, y: 0});
}

function setBackgroundCirclePosition() {
    if (currentTheme == 0) {
        backCircle.style.transform = "translate(0px, 0px)";
    } 
    else {
        backCircle.style.transform = "translate(1300px, 1200px)";
    }
}

setTheme();
setBackgroundCirclePosition();
dayfill(monday, "mon");
dayfill(tuesday, "tue");
dayfill(wednesday, "wed");
dayfill(thursday, "thu");
dayfill(friday, "fri");
dayfill(saturday, "sat");

/*mf_inner.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', mf_inner.scrollLeft / (mf_inner.scrollWidth - mf_inner.clientWidth));
}, false);*/