



x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = to_number;
}
 
for(var i =1; i <= to_number; i++)
{
    x = Math.floor(Math.random() *700);
    y = Math.floor(Math.random() *400);
    image(apple, x, y, 50, 50);
}