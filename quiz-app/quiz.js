var arr = [
   {
       question: "1- who is the tallest khraba member",
       answer1: "Ahmed tamr",
       answer2: "Ahmed abdelhameed",
       answer3: "yassin osama",
       answer4: "mahmoud",
       right: "athree",
   },
   {
       question: "2- who is the oldest 2 members of elkhraba(creators)",
       answer1: "Ahmed tamr|ahmedabdelhameed",
       answer2: "hassan | omar fardos",
       answer3: "yassin osama | milk",
       answer4: "milk | abdelhameed",
       right: "afour",
   },
   {
       question: "3-how many people where added after the OGS of the khraba",
       answer1: "3",
       answer2: "4",
       answer3: "2",
       answer4: "5",
       right: "atwo",
   },
   {
       question: "4-how many govs does the khraba members come from  ?",
       answer1: "5",
       answer2: "6",
       answer3: "3",
       answer4: "2",
       right: "aone",
   },
];

var radios = document.querySelectorAll(".qs");
var first = document.getElementById("done");
var second = document.getElementById("dtwo");
var three = document.getElementById("dthree");
var four = document.getElementById("dfour");
var ques = document.getElementById("question");
var index = 0;

show();

function show() {
   deleteRadios();
   var data = arr[index];
   first.innerHTML = data.answer1;
   second.innerHTML = data.answer2;
   three.innerHTML = data.answer3;
   four.innerHTML = data.answer4;
   ques.innerHTML = data.question;
}

function deleteRadios() {
   radios.forEach(x => x.checked = false);
}

var score = 0;
 

function clickss() {
   try {
       var answer;
       radios.forEach(x => {
           if (x.checked) {
               answer = x.id;
           }
       });

       if (answer == arr[index].right) {
           score++;
       }

       index++;

       if (index < arr.length) {
           show();
       } else {
           document.getElementById("container").innerHTML = `<h2>${score} from ${arr.length} this is your score</h2>`;
       }
   } catch (error) {
       alert("You need to choose one choice");
   }
}
