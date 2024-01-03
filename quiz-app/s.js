var arr = [
    {
        q:"what is the capital of egypt",
        a:"Cairo",
        b:"Madrid",
        c:"London",
        d:"Berlin",
        correct:"aone"
    },
    {
        q:"what is the capital of spain",
        a:"Cairo",
        b:"Madrid",
        c:"London",
        d:"Berlin",
        correct:"atwo"
    },
    {
        q:"what is the capital of england",
        a:"Cairo",
        b:"Madrid",
        c:"London",
        d:"Berlin",
        correct:"athree"
    },
    {
        q:"what is the capital of germany",
        a:"Cairo",
        b:"Madrid",
        c:"London",
        d:"Berlin",
        correct:"afour"
    },
]
var radios = document.querySelectorAll('.qs')
var first = document.getElementById('done')
var second = document.getElementById('dtwo')
var third = document.getElementById('dthree')
var fourth = document.getElementById('dfour')
var question = document.getElementById('question')
var index = 0;
show();
function show(){
    del();
    var data = arr[index];
    first.innerHTML = data.a
    second.innerHTML = data.b
    third.innerHTML = data.c
    fourth.innerHTML = data.d
    question.innerHTML = data.q
}
function del(){
    radios.forEach(x=>x.checked=false)
}
var score = 0;
function clickss(){
    try{
        var answer
        radios.forEach(x=>{if(x.checked){
            answer = x.id
        }})
        if(answer == arr[index].correct){
            score++;
        }
        index++
        if(index < arr.length){
            show();
        }
        else{
            document.getElementById('container').innerHTML = `<h2>${score} from ${arr.length} is your score<h2>`
        }
    }
    catch(error){
        alert("Must choose")
    }
}