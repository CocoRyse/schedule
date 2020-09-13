"use strict"
let daycard = document.querySelector(".daycard");
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
        let result = `<div class="lession ${this.type}">`;
        if (this.title != "")
            result += `<div class="title cell mid">${this.title}</div>`;
        if (this.teacher != "")
            result += `<div class="lession_bottom"> <div class="teacher cell small">${this.teacher}</div>`;
        if (this.classroom != "")
            result +=`<div class="classroom cell small">${this.classroom}</div> </div>`;
        result += `</div>`;
        return result;
    }
}

class LessionCard
{
    constructor(aTime, aLessions = [])
    {
        this.time = aTime;
        this.lessions = aLessions; 
    }
    HTMLify()
    {
        let result = `<div class="lessioncard">
                    <div class="time cell mid">${this.time}</div>`;
        this.lessions.forEach((item, index, array) => 
                                { result += item.HTMLify(); }
                             );
        result += `</div>`;
        return result;
    }
}

let times = [`<nobr>8:00&ndash;9:35</nobr><br><nobr class="small">Пара #1</nobr>`, 
            `<nobr>9:45&ndash;11:20</nobr><br><nobr class="small">Пара #2</nobr>`, 
            `<nobr>11:30&ndash;13:05</nobr><br><nobr class="small">Пара #3</nobr>`, 
            `<nobr>13:25&ndash;15:00</nobr><br><nobr class="small">Пара #4</nobr>`, 
            `<nobr>15:10&ndash;16:45</nobr><br><nobr class="small">Пара #5</nobr>`, 
            `<nobr>16:55&ndash;18:30</nobr><br><nobr class="small">Пара #6</nobr>`, 
            `<nobr>18:40&ndash;20:00</nobr><br><nobr class="small">Пара #7</nobr>`];

let first;
let second; 
let third; 
let fourth;
let card;

let monday = [
                card = new LessionCard(times[0], [new Lession("Элитный английский", "315", "Кудинова", "single")]),
                card = new LessionCard(times[1], [new Lession("Элитный английский", "315", "Кудинова", "single")]),
                card = new LessionCard(times[2], [new Lession("Вычислительные методы", "226", "Корольков", "single")]),
                card = new LessionCard(times[3]),
                card = new LessionCard(times[4], [new Lession("Тервер и матстат", "409П", "Чудинова", "single")]),
                card = new LessionCard(times[5], [new Lession("ПМУ", "12", "Ширяев", "single")]),
                card = new LessionCard(times[6], [new Lession("ПМУ", "11", "Ширяев", "single")]),
];

let tuesday = [
                new LessionCard(times[0], [new Lession("Военная подготовка", "", "", "single")]),
                new LessionCard(times[1], [new Lession("Военная подготовка", "", "", "single")]),
                new LessionCard(times[2], [new Lession("Военная подготовка", "", "", "single")]),
                new LessionCard(times[3], [new Lession("Военная подготовка", "", "", "single")]),
                new LessionCard(times[4], [new Lession("Военная подготовка", "", "", "single")]),
                new LessionCard(times[5]),
                new LessionCard(times[6]),
];
let wednesday = [
                new LessionCard(times[0], [new Lession("Java", "216", "Курбатова", "singlewidth nominator"), new Lession("Машинное обучение", "214", "Золотарёв", "firstsubgroup denominator")]),
                new LessionCard(times[1], [new Lession("Ассемблер", "9", "Вощинская", "firstsubgroup nominator"), new Lession("Машинное обучение", "304", "Золотарёв", "secondsubgroup nominator"), new Lession("Ассемблер", "9", "Вощинская", "secondsubgroup denominator")]),
                new LessionCard(times[2], [new Lession("БД", "12", "Каширская", "single")]),
                new LessionCard(times[3], [new Lession("Физкультура", "", "", "single")]),
                new LessionCard(times[4]),
                new LessionCard(times[5]),
                new LessionCard(times[6]),
                new LessionCard(`<nobr>20:00&ndash;21:30</nobr><br><nobr class="small">Онлайн-пара</nobr>`,
                                [new Lession("MS.NET", "Moodle", "Старикова", "single")]),

];
let thursday = [
                new LessionCard(times[0], [new Lession("Java", "433", "Курбатова", "single")]),
                new LessionCard(times[1], [new Lession("Вычислительные методы", "337", "Корзунина", "single")]),
                new LessionCard(times[2], [new Lession("Вычислительные методы", "337", "Корзунина", "singlewidth nominator"),
                                            new Lession("","","","singlewidth denominator borderless")]),
                new LessionCard(times[3], [new Lession("ОС", "214", "Вощинская", "firstsubgroup nominator"),
                                            new Lession("MS.NET", "304", "Курченкова", "secondsubgroup nominator"),
                                            new Lession("MS.NET", "9", "Курченкова", "firstsubgroup denominator"),
                                            new Lession("ОС", "20?", "Вощинская", "secondsubgroup denominator")]),
                new LessionCard(times[4], [new Lession("Тервер", "433", "Каширина", "single")]),
                new LessionCard(times[5]),
                new LessionCard(`<nobr>19:30&ndash;21:00</nobr><br><nobr class="small">Онлайн-пара</nobr>`,
                                [new Lession("Машинное обучение", "Zoom", "Золотарёв", "single")]),

];
let friday = [
                new LessionCard(times[0]),
                new LessionCard(times[1]),
                new LessionCard(times[2], [new Lession("ОС", "226", "Вощинская", "single")]),
                new LessionCard(times[3], [new Lession("БД", "12", "Каширская", "single")]),
                new LessionCard(times[4], [new Lession("Ассемблер", "226", "Вощинская", "singlewidth nominator"),
                                            new Lession("Ассемблер", "337", "Вощинская", "singlewidth denominator")]),
                new LessionCard(times[5], [new Lession("","","","singlewidth nominator borderless"), new Lession("Физкультура", "", "", "singlewidth denominator")]),
                new LessionCard(times[6]),

];

let saturday = [
                new LessionCard(times[0]),
                new LessionCard(times[1]),
                new LessionCard(times[2]),//[new Lession("Машинное обучение", "227", "Золотарёв", "single")]),
                new LessionCard(times[3], [new Lession("Элитный английский", "хз где", "Кудинова", "single")]),
                new LessionCard(times[4]),
                new LessionCard(times[5]),
                new LessionCard(times[6]),
];

function dayclick(day)
{
    daycard.innerHTML = "";
    let result = "";
    /*for (let i = 0; i < 7; i++) 
    { 
        result += day[i].HTMLify();
    }*/
    day.forEach(item => {result += item.HTMLify();})
    daycard.innerHTML = result;
    return;
}


function mondayclick()
{
    dayclick(monday);
}

function tuesdayclick()
{
    dayclick(tuesday);
}

function wednesdayclick()
{
    dayclick(wednesday);
}

function thursdayclick()
{
    dayclick(thursday);
}

function fridayclick()
{
    dayclick(friday);
}

function saturdayclick()
{
    dayclick(saturday);
}

let day = new Date().getDay();
switch (day) {
    case 1: mondayclick(); break;
    case 2: tuesdayclick(); break;
    case 3: wednesdayclick(); break;
    case 4: thursdayclick(); break;
    case 5: fridayclick(); break;
    case 6: saturdayclick(); break;
    case 0: mondayclick(); break;
}