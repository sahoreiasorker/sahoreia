// var author=document.getElementsByClassName('author');
// for(var i=0;i<author.length;i++){
//     var element =author[i];
//     element.innerHTML='lakhok-'+(i+1);
//     console.log(element.innerHTML);
//     element.style.backgroundColor ="#0f0"
//     element.style.fontSize='30px'
// }
// console.log(author);


/*var author=document.querySelectorAll('.special h3');
for(var i=0;i<author.length;i++){
    var element =author[i];
    element.innerHTML='lakhok-'+(i+1);
    console.log(element.innerHTML);
    element.style.backgroundColor ="#0f0"
    element.style.fontSize='30px'
}
console.log(author);*/


// const article = document.getElementById('first_article');
// const newparagraph = document.createElement('p');
// newparagraph.innerHTML='this is added by me'
// article.appendChild(newparagraph);

//add one more list
// const ul = document.getElementById('item_list');
// const li = document.createElement('li');
// li.innerHTML='best item';
// ul.appendChild(li);

// const oneBtn = document.getElementById('one_btn');
// oneBtn.onclick = function (){
//     console.log('one Button')
// }
// function hendekClick(){
//     document.body.style.backgroundColor = 'cyan';
// }

// const oneBtn = document.getElementById('one_btn');
// oneBtn.addEventListener('click', hendekClick);

// const lastButton = document.getElementById('last_btn');
// lastButton.addEventListener('click', function () {
//     document.body.style.color = 'cyan';
// })


// var names = ["anis", "korim", "johan", "rena", "hakim"];
// console.log(names);
// names.splice(3, 0, "Ena", "bla");
// var NewArray = names.splice(4);
// names.sort();
// names.reverse();
// console.log(NewArray);
// var revName = names.sort();
// names.reverse();
// console.log(revName);

// var num = [34, 5, 65, 3, 6];
// var numRev = num.sort(function (a, b) {
//     return b - a;
// });
// console.log(numRev);


//object

// function Student(name, age, cgpa) {
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.disply = function () {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgpa);
//         console.log(this.nationality)
//     }
// }
// var Student1 = new Student("mottuqe", 20, 3.11);
// var Student2 = new Student("brid", 23, 3.56);

// Student1.disply();
// Student2.disply();
// Student2.name = "sahoreia";
// Student2.disply();
// Student.prototype.nationality = "English";
// // Student2.nationality = "bangali";
// Student2.disply();
// console.log(Student1.name)


// function clearDisplay() {
//     document.getElementById('display').value = '';
// }

// function appendToDisplay(value) {
//     document.getElementById('display').value += value;
// }

// function backspace() {
//     let display = document.getElementById('display').value;
//     document.getElementById('display').value = display.slice(0, -1);
// }

// function calculate() {
//     let display = document.getElementById('display').value;
//     try {
//         document.getElementById('display').value = eval(display);
//     } catch (e) {
//         document.getElementById('display').value = 'Error';
//     }
// }

// var input = document.querySelector("input[name=name]");
// input.addEventListener("change", changeHenler);

// function changeHenler(e) {
//     // console.log(e.type);
//     // console.log(e.target);
//     // console.log(e.target.className);
//     // console.log(e.target.id);
//     console.log(e.target.value);

// }


// const programs = document.querySelectorAll("input[name=program]");
// console.log(programs);
// Array.from(programs).map((program) => {
//     program.addEventListener("change", programHandeler);
// })
// function programHandeler(e) {
//     if (e.target.checked) {
//         console.log(e.target.value)
//     }

// }


// const depertment = document.querySelector("#depertment");
// depertment.addEventListener('change', hadleDeprtment);

// function hadleDeprtment(e) {
//     console.log(e.target.value);
// }


// const form = document.querySelector('form');
// const name = form.querySelector('div #name');
// const email = form.querySelector('div #email');
// const password = form.querySelector('div #password');

// form.addEventListener("submit", formHandeler);

// function formHandeler(e) {
//     e.preventDefault();
//     // console.log("submit");
//     const userInfo = {
//         name: name.value,
//         email: email.value,
//         password: password.value,
//     };
//     console.log(userInfo);
//     name.value = "";
//     email.value = "";
//     password.value = "";
// }



// const video = document.querySelector('video');
// video.addEventListener('canplay', function () {
//     console.log('canplay')
// })
// video.addEventListener("play", function () {
//     console.log("play")
// })
// video.addEventListener("playing", function () {
//     console.log("playing")
// })
// video.addEventListener("pause", function () {
//     console.log("pause")
// })
// video.addEventListener("ended", function () {
//     console.log("Thanks for watching")
// })
// video.addEventListener("volumechange", function () {
//     console.log("volumechange")
// })



// window.addEventListener('load', function () {
//     console.log("load")
// })
// window.addEventListener('unload', function () {
//     console.log("unload")
// })

// window.addEventListener('resize', function () {
//     const width = window.outerWidth;
//     const height = this.window.outerHeight;
//     console.log(`height: ${height}, width: ${width}`);
// })



// const detais = document.querySelector("details");
// detais.addEventListener("toggle", function (e) {
//     console.log(e.target.open);
// })



// const textarea = document.querySelector("textarea");
// textarea.addEventListener("keydown", function () {
//     console.log("keydown")
// })
// textarea.addEventListener('keypress', function () {
//     console.log("keypress")
// })
// textarea.addEventListener('keyup', function () {
//     console.log("keyup")
// })
// textarea.addEventListener('keyup', function (e) {
//     console.log(e.code)
// })
// textarea.addEventListener('keydown', function (e) {
//     if (e.repeat) {
//         alert("do not repit")
//     }
// })



// const input = document.querySelector("input");
// input.addEventListener("blur", function (e) {
// console.log('blur is occured');
// input.style.backgroundColor = "transparent"
// console.log(e.target.value);
//     input.value = e.target.value.toUpperCase();

// })
// input.addEventListener("focus", function () {
// console.log('focus is occured');
// input.style.backgroundColor = "tomato"
// })
// input.addEventListener("focusin", function () {
//     console.log('focusin is occured');
// })
// input.addEventListener("focusout", function () {
//     console.log('focusout is occured');
// })

// const input = document.querySelector("input");
// const p = document.querySelector("p");
// input.addEventListener("copy", function () {
//     // console.log("you have copy");
//     p.innerText = "you have copy";
// })
// input.addEventListener("cut", function () {
//     // console.log("you have cut");
//     p.innerText = "you have cut";
// })
// input.addEventListener("paste", function () {
//     // console.log("you have paste");
//     p.innerText = "you have paste";
// })




// const div = document.querySelector("div");
// const p = document.querySelector("p");
// p.addEventListener("dragstart", function (e) {
//     e.dataTransfer.setData("text", e.target.id);
// });
// div.addEventListener("dragover", function (e) {
//     e.preventDefault();
// })
// div.addEventListener("drop", function (e) {
//     var id = e.dataTransfer.getData("text");
//     div.appendChild(document.getElementById(id));
//     e.preventDefault();
// })


// console.log(location)
// console.log(location.href)
// console.log(location.protocol)

// var locationDiv = document.querySelector(".location_div");
// var p1 = locationDiv.children[0];
// p1.textContent = location.href;
// locationDiv.children[1].textContent = location.host
// locationDiv.children[2].textContent = location.protocol
// locationDiv.children[3].textContent = location.port
// locationDiv.children[4].textContent = location.pathname


// const button = document.getElementById("vsit_btn");
// button.addEventListener('click', function () {
//     location.assign('https://www.fb.com')
// })




// function deletessomething() {
//     let value = confirm("do you want to delete?");
//     if (value) {
//         console.log("Deleted");
//     } else {
//         console.log("Not Deleted");
//     }
// }
// deletessomething()



// setTimeout(() => {
//     console.log("hi")
// }, 2000)

// setTimeout(display, 2000);
// function display() {
//     console.log("display function")
// }

// const saveButton = document.querySelector(".save_btn");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click", saveUser);
// function saveUser() {
//     message.textContent = "user registration successful"
//     setTimeout(() => {
//         message.textContent = "";
//     }, 2000)
// }

// saveButton.addEventListener("click", displayCount);
// function displayCount() {
//     let count = 0;
//     message.textContent = count;
//     setInterval(() => {
//         count++;
//         message.textContent = count;
//     }, 10)
// }

// saveButton.addEventListener("click", startClock);
// function startClock() {
//     let date = new Date();
//     let hours = date.getHours(12);
//     let minuts = date.getMinutes();
//     let seconds = date.getSeconds();
//     // console.log(typeof (hours))

//     minuts = formatTime(minuts);
//     seconds = formatTime(seconds);
//     hours = formatTime(hours);

//     let time = hours + ":" + minuts + ":" + seconds;

//     message.textContent = time;
//     setInterval(startClock, 1000)
// }
// function formatTime(value) {
//     if (value < 10) {
//         value = "0" + value;
//     }
//     return value;
// }


// try {
//     alert("hi");
//     alert(x);
// } catch (err) {
//     alert("Inside Catch block");
//     console.log(err);
//     // console.log(err.name);
//     // console.log(err.message);
// } finally {
//     alert("by");
// }

// document.querySelector("#checkId").addEventListener("click", function () {
//     var num = document.querySelector("#numTextFild").value;
//     try {
//         if (num < 5) {
//             throw "input is too low"
//         } else if (num > 10) {
//             throw "input is too heigh"
//         } else {
//             throw "input not Valid"
//         }
//     } catch (err) {
//         console.log(err);
//     }
// })

// var c = document.getElementById("myCanvas");
// var ctext = c.getContext("2d");

// ctext.lineWidth = 3;
// ctext.strokeStyle = "black"
// ctext.strokeRect(10, 10, 380, 280);
// ctext.fillStyle = "green";
// ctext.fillRect(12, 12, 376, 276);

// var centerX = c.width / 2;
// var centerY = c.height / 2;
// ctext.beginPath();
// ctext.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
// ctext.fillStyle = "red";
// ctext.fill();
// ctext.stroke()


// "use strict"
// x = 20;
// console.log(`x=${x}`);



// function addNumber(x, y, z) {
//     return x + y + z;
// }
// let number = [1, 3, 7];
// console.log(addNumber(...number));

// let num1 = [4, 5, 6, ...number];
// console.log(num1);
// let num2 = [6, 4, 2, 6];
// let num = number.concat(num2);
// let num = [...number, ...num2]
// console.log(num);


// let p1 = {
//     name: "mottuqe",
//     age: 30
// }
// let p2 = {
//     nationlity: "banglladehi",
//     occupation: "teacher"
// }
// let p = { ...p1, ...p2 };
// console.log(p);




// object literals
// function studentInfo1(name, age) {
//     return {
//         name,
//         age
//     }
// }
// console.log(studentInfo1("mottuqe", 45))
// let message = {
//     'body name'() {
//         return `I am object Function`
//     }
// }
// console.log(message['body name']())



// for...of and for...in
// const names = ["a1", "a2", "a3", "a4"];
// for (let name of names) {
//     console.log(name);
// }
// let Student = {
//     Id: 101,
//     name: 'mottuqe',
//     cgpa: 3.44
// }
// for (let x in Student) {
//     // console.log(Student[x]);
//     console.log(`${x}:${Student[x]}`)
// }

// var numbers = [10, 45, 33, 76, 89];
// numbers.forEach(function (x, index, arr) {
//     arr[index] = x + 5;
// })
// console.log(numbers);
// var numbers = [10, 45, 33, 76, 89];
// var squareNumbers = [];
// numbers.forEach(function (x) {
//     squareNumbers.push(x * x);
//     console.log(x);
// })
// console.log(squareNumbers);

// function myFunction(x) {
//     console.log(x);
// }
// console.log(numbers);




// var number = [1, 2, 3, 4, 5];
// var squareNumbers = number.map(function (x) {
//     return x * x;
// })
// console.log(squareNumbers);

// var number = [1, 11, 2, 35, 4, 53];
// var newNumber = number.filter(function (x) {
//     return x > 10;
// })
// console.log(newNumber);



// const display1 = () => console.log("display ksdjshc");
// display1()


// const message1 = () => "i am message";
// console.log(message1())


// const add1 = (num1, num2) => num1 + num2;
// console.log(add1(34, 45))


// var student = [
//     {
//         id: 121,
//         name: "mottuqe",
//         cgpa: 2.33
//     },
//     {
//         id: 122,
//         name: "bojoy",
//         cgpa: 3.55
//     }, {
//         id: 123,
//         name: "sujoy",
//         cgpa: 3.32
//     }
// ]

// function StudentName() {
//     return student.filter(function (x) {
//         return x.cgpa > 3
//     }).map(function (y) {
//         return y.name;
//     });
// }
// console.log(StudentName())

// console.log(student);




// let num = [2, 45, 6, 45, 43, 78];
// let [num1, num2, num3, num4, num5, num6] = num;
// let [num1, num2, ...z] = num;
// console.log(num2)
// console.log(z)

// let a = 20, b = 30;
// [a, b] = [b, a];
// console.log(a)
// console.log(b)

// const studentInfo = {
//     name: "mottuqe",
//     id: 34,
//     gpa: 4.44,
//     laguage: {
//         native: "bangla",
//         beginner: "englaish"
//     }
// }

// const { name, laguage } = studentInfo;
// console.log(laguage.native)
// console.log(name)

// const studentInfo = ({ id, fullName }) => {
//     console.log(`${id},${fullName}`)
// }
// const student = {
//     id: 101,
//     fullName: "mottuqe"
// }
// studentInfo(student);




// let numbers = [5, 6, 3, 65, 23, 44];
// let firstEvenNumber = numbers.find(x => x % 2 === 0);
// let firstEvenNumber = numbers.findIndex(x => x % 2 === 0);
// console.log(firstEvenNumber)
// const student = [
//     {
//         name: "mottuqe",
//         id: 101,
//         gpa: 3.44
//     },
//     {
//         name: "jahid",
//         id: 102,
//         gpa: 5.44
//     },
//     {
//         name: "korim",
//         id: 103,
//         gpa: 4.44
//     }
// ]
// console.log(student.find(x => x.gpa > 4))



// string
// const message = "today is friday";
// console.log(message.startsWith("today"))
// console.log(message.endsWith("friday"))
// console.log(message.includes("is");)



//modules & class
// import { sentText, text } from "./abcd2.js";
// console.log(text);
// sentText("good by");
// console.log(text);

// class
// class student {
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
//     set studentName(name) {
//         this.name = name;
//     }
//     get studentInfo() {
//         return this.id + " " + this.name;
//     }
// }
// let s1 = new student(101, "mottuqe");
// let s2 = new student(103);
// console.log(s1);
// s1.studentName = "brid";
// console.log(s1)
// console.log(s1.studentInfo)
// console.log(s2);



//callback Higherorder function




//promise
// console.log("welcome");
// const promisel = new Promise((resolve, reject) => {
//     let complitedPromise = true;
//     if (complitedPromise) {
//         resolve("completed promise 1")
//     } else {
//         reject("not completed promise 1")
//     }
// });

// const promise2 = new Promise((resolve, reject) => {
//     resolve("completed promise 2")
// })
// console.log(promisel)
// Promise.all([promisel, promise2]).then((res) => console.log(res))
// promisel.then((res) => {
//     console.log(res);
// })
//     .catch((err) => {
//         console.log(err)
//     })
// promise2.then((res) => console.log(res));
// console.log("END");


//promise callback
// console.log("welcome");
// const task1 = () => {
//     return new Promise((resolve, reject) => {
//         resolve("task 1 is completed")
//     })
// }
// const task2 = () => {
//     return new Promise((resolve, reject) => {
//         resolve("task 2 is completed")
//     })
// }
// const task3 = () => {
//     return new Promise((resolve, reject) => {
//         resolve("task 3 is completed")
//     })
// }
// const task4 = () => {
//     return new Promise((resolve, reject) => {
//         resolve("task 4 is completed")
//     })
// }
// task1()
//     .then((res) => console.log(res))
//     .then(task2)
//     .then((res) => console.log(res))
//     .then(task3)
//     .then((res) => console.log(res))
//     .then(task4)
//     .then((res) => console.log(res))


// async function callAllTasks() {
//     try {
//         const t1 = await task1();
//         console.log(t1);
//         const t2 = await task2();
//         console.log(t2);
//         const t3 = await task3();
//         console.log(t3);
//         const t4 = await task4();
//         console.log(t4);
//     } catch (e) {
//         console.log(e);
//     }
// }
// callAllTasks();
// console.log("END");


//Api calling
// console.clear();

// const makeRequst = (method, url, data) => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.setRequestHeader('Content-Type', 'application/json')
//         xhr.onload = () => {
//             let data = xhr.response;
//             console.log(xhr.status)
//             console.log(JSON.parse(data));
//         }
//         xhr.onerror = () => {
//             console.log("error is here");
//         }
//         xhr.send(JSON.stringify(data));
//     });
// }
// const getData = () => {
//     makeRequst('GET', 'https://jsonplaceholder.typicode.com/posts')
//         .then((res) => console.log(res));
// }
// getData()
// const sendData = () => {
//     makeRequst('POST', 'https://jsonplaceholder.typicode.com/posts', {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     });
// }
// const upDateData = () => {
//     makeRequst('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
//         id: 1,
//         title: 'fooMa',
//         body: 'barMa',
//         userId: 1,
//     });
// }
// const upDateSingleData = () => {
//     makeRequst('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
//         // id: 1,
//         title: 'This is page',
//         // body: 'barMa',
//         // userId: 1,
//     });
// }
// const deleteData = () => {
//     makeRequst('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
// }
// deleteData();


//Api calling fetch()
// console.clear();
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//         id: 1,
//         title: 'fooma',
//         body: 'barma',
//         userId: 1,
//     })
// })
//     .then((res) => {
//         if (!res.ok) {
//             const message = `Error : ${res.status}`
//             throw new Error(message)
//         }
//         return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// const makeRequst = async (url, config) => {
//     const res = await fetch(url, config);
//     if (!res.ok) {
//         const message = `Erorr : ${res.status}`;
//         throw new Error(message);
//     }
//     const data = await res.json();
//     return data;
// }
// const deleteData = () => {
//     makeRequst('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'DELETE',
//     })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// deleteData()
// const updateData = () => {
//     makeRequst('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PATCH',
//         body: JSON.stringify({

//             title: 'fooshdfsgsdfghfb',

//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// updateData()

// const updateData = () => {
//     makeRequst('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: 1,
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// updateData()

// const sendData = () => {
//     makeRequst('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// sendData()

// const getData = () => {
//     makeRequst('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// getData()



// API axios
// console.clear();

// axios.delete("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));


// axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'fdfvdflkmfoo',
//     }),
// })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));


// axios.put("https://jsonplaceholder.typicode.com/posts/1", {
//     method: 'POST',
//     body: JSON.stringify({
//         id: 1,
//         title: 'fdfvoo',
//         body: 'bafdvfr',
//         userId: 1,
//     }),
// })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));


// axios.post("https://jsonplaceholder.typicode.com/posts", {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
// })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

// axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));

// const makeRequst = async (config) => {
//     return await axios(config)
// }
// const deleteData = () => {
//     makeRequst({
//         url: "https://jsonplaceholder.typicode.com/posts/1",
//         method: 'delete'
//     })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// deleteData()

// const updateData = () => {
//     makeRequst({
//         url: "https://jsonplaceholder.typicode.com/posts/1",
//         method: 'put',
//         data: JSON.stringify({
//             id: 1,
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         })
//     })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// updateData()

// const createData = () => {
//     makeRequst({
//         url: "https://jsonplaceholder.typicode.com/posts",
//         method: 'post',
//         data: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         })
//     })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// createData()

// const getData = () => {
//     makeRequst("https://jsonplaceholder.typicode.com/posts")
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }
// getData()



//API jquery
// console.clear();

// const makeRequst = async (url1, method1, data1) => {
//     try {
//         const result = await $.ajax({
//             url: url1,
//             method: method1,
//             data: data1,
//         });
//         // console.log(result)
//         return result;
//     } catch (err) {
//         console.log(err);
//     }
// }
// const updateData = () => {
//     makeRequst("https://jsonplaceholder.typicode.com/posts/1", "DELETE")
//         .then((res) => console.log(res))
// }
// updateData();

// const updateData = () => {
//     makeRequst("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
//         .then((res) => console.log(res))
// }
// updateData();

// const creatData = () => {
//     makeRequst("https://jsonplaceholder.typicode.com/posts", "POST", {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
//         .then((res) => console.log(res))
// }
// creatData();

// const getData = () => {
//     makeRequst("https://jsonplaceholder.typicode.com/posts", "GET")
//         .then((res) => console.log(res))
// }
// getData();




//API  storage
// const countries = ["bangladesh", "India", "iran"]
// localStorage.setItem("countries", JSON.stringify(countries));
// localStorage.setItem("userName", "Mottuqe");
// localStorage.setItem("password", "1234");
// const userName = localStorage.getItem("userName");
// const password = localStorage.getItem("password");
// const password = localStorage.getItem("password");
// console.log(userName);
// console.log(password);
// localStorage.removeItem("userName");
// localStorage.removeItem("password")

// sessionStorage.setItem("user", "mottuqe");
// sessionStorage.setItem("number", "1223243");

//cookie
// document.cookie = 'username=mottuqe; expires=Fri 09 Aug 2024 19:00'




// class
// class Parent {
//     constructor() {
//         this.fatherName = "karim";
//     }
// }
// class Child extends Parent {
//     constructor(name) {
//         super();
//         this.Name = name;
//     }
//     getFullName() {
//         return this.Name + " " + this.fatherName;
//     }
// }
// const baby = new Child("adnan");
// const baby2 = new Child("amir");
// console.log(baby);
// console.log(baby2);
// console.log(baby.getFullName());



const person = { name: "jhis", job: "facebook", phone: "0172343412", age: 27 };
const { phone, job } = person;
console.log(phone, job);
console.log(person.age, phone);
const friends = ["jhid", "salman", "habib", "hasan", "kbir"];
const [first, secand, ...others] = friends;
console.log(first, secand)
console.log(others)