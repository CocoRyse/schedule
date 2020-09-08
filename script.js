"use strict"
let daycard = document.querySelector(".daycard");
class Lession
{
    constructor(aTitle, aClassroom, aTeacher, aType)
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
            result += `<div class="title cell">${this.title}</div>`;
        if (this.classroom != "")
            result +=`<div class="classroom cell">${this.classroom}</div>`;
        if (this.teacher != "")
            result += `<div class="teacher cell">${this.teacher}</div>`;
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
                    <div class="time cell">${this.time}</div>`;
        this.lessions.forEach((item, index, array) => 
                                { result += item.HTMLify(); }
                             );
        result += `</div>`;
        return result;
    }
}

let times = ["8:00&ndash;9:35", "9:45&ndash;11:20", "11:30&ndash;13:05", "13:25&ndash;15:00", "15:10&ndash;16:45", "16:55&ndash;18:30", "18:40&ndash;20:00"];

let first;
let second; 
let third; 
let fourth;
let card;

let monday = [
                card = new LessionCard(times[0]),
                card = new LessionCard(times[1]),
                card = new LessionCard(times[2], [new Lession("Вычислительные методы", "226", "Корольков", "single")]),
                card = new LessionCard(times[3]),
                card = new LessionCard(times[4], [new Lession("Тервер и матстат", "409П", "Чудинова", "single")]),
                card = new LessionCard(times[5], [new Lession("ПМУ", "12", "Ширяев", "single")]),
                card = new LessionCard(times[6], [new Lession("ПМУ", "11", "Ширяев", "single")]),
];

let tuesday = [
                new LessionCard(times[0]),
                new LessionCard(times[1]),
                new LessionCard(times[2]),
                new LessionCard(times[3]),
                new LessionCard(times[4]),
                new LessionCard(times[5]),
                new LessionCard(times[6]),
];
let wednesday = [
                new LessionCard(times[0], [new Lession("Java", "216", "Курбатова", "single nominator"), new Lession("Машинное обучение", "214", "Золотарёв", "firstsubgroup denominator")]),
                new LessionCard(times[1], [new Lession("Ассемблер", "9", "Вощинская", "firstsubgroup nominator"), new Lession("Машинное обучение", "304", "Золотарёв", "secondsubgroup nominator"), new Lession("Ассемблер", "9", "Вощинская", "secondsubgroup denominator")]),
                new LessionCard(times[2], [new Lession("БД", "12", "Каширская", "single")]),
                new LessionCard(times[3], [new Lession("Физкультура", "", "", "single")]),
                new LessionCard(times[4]),
                new LessionCard(times[5]),
                new LessionCard(times[6]),

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
                new LessionCard(times[6]),

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
                new LessionCard(times[2], [new Lession("Машинное обучение", "227", "Золотарёв", "single")]),
                new LessionCard(times[3]),
                new LessionCard(times[4]),
                new LessionCard(times[5]),
                new LessionCard(times[6]),
];

function dayclick(day)
{
    daycard.innerHTML = "";
    let result = "";
    for (let i = 0; i < 7; i++) 
    { 
        result += day[i].HTMLify();
    }
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