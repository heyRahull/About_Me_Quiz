// console.log("Enter your name to play the Quiz :")
var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score=0;
var emoji = require('node-emoji')
var userName = readlineSync.question("Enter your name to play the Quiz : ");
console.log("\n");
console.log("Hey "+chalk.green(userName)+" Welcome to the quiz ~ "+emoji.get('face_with_monocle')+chalk.green("  HOW MUCH DO YOU KNOW RAHUL? ")+emoji.get('face_with_monocle'));

console.log("---------------------");
console.log(chalk.green("Answer by pressing 1, 2, 3 or 4 key for correct option and press enter."))
console.log("---------------------");

console.log("\n")

var questions = [{
  question : "What is Rahul's Age? ",
  options : [12,22,27,32],
  ans : "2"
},
{
  question : "What is Rahul's favoriate food? : ",
  options : ["Pav Bhaji","Capsicum","Veggies","Chapati"],
  ans : "1"
},
{
  question : "What is Rahul Currently Learning? : ",
  options : ["Data Science","Machine Learning","Web Development","Literature"],
  ans : "3"
},
{
  question : "Rahul is pursuing his Bachelor's Degree in which field? : ",
  options : ["Computer Science","Electronics","Mechanical","Civil"],
  ans : "1"
},
{
  question : "What kind of person Rahul is? : ",
  options : ["Introvert but kind-Hearted","Extrovert","Social","Talketive"],
  ans : "1"
}]

for(var i=0;i<questions.length;i++){
  var currQues = questions[i];
  play(currQues.question,currQues.ans,currQues.options)
}

function play(question,ans,options){
  console.log(question)

for(var i=0;i<options.length;i++)
{
  console.log(i+1,chalk.blueBright(options[i]))
}
var userAns = readlineSync.question("Enter Your Answer : ");
if(userAns === ans){
console.log(chalk.greenBright("You are Correct."))
score = score+1;
}
else 
console.log(chalk.redBright("You are Wrong."))
console.log(chalk.bgMagenta("Your score is : "+score))
console.log("-----------------------------------------")
}

console.log(chalk.green("your Final Score is : "+score) )
if (score < 3) {
      console.log('Score: ' + score);
      console.log('🔥You can do better next time🔥');
    } else if (score > 2 && score < 5) {
      console.log('Score: ' + score);
      console.log("🔥🔥🔥 Yaay!! that's a great score 🔥🔥🔥");
    } else {
      console.log('Score: ' + score );
      console.log('🔥🔥🔥 Yo!! Lets have coffee some time 🔥🔥🔥.');
    }