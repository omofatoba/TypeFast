//selecting levels

document.querySelector(".levs").addEventListener("click",function(){
    document.querySelector(".select").classList.toggle("hide")
})

document.querySelector(".fresher").addEventListener("click",function (params) {
    document.querySelector(".fresher-container").style.display="block";
    document.querySelector(".type").style.display="block"
    document.querySelector(".select").classList.toggle("hide");
})



const words=["On my last shift as a lighthouse keeper, I climbed the seventy-six spiral iron stairs and two ladders to the watch room, the number of steps the same as my age. The thwomp and snare of each step laid an ominous background score. Something wasn’t right. At that very moment, Richie Tedesco was pointing a fire extinguisher at the burning electrical panel in the engine room of his boat a few miles offshore.","The placard in the watch room read “Marge Mabrity, Lightkeeper—First lighted the depths on March 2nd, 1985, and hasn’t missed a night.” Already so close to forty years. I could still read the skies like a book. The lighthouse smelled of aging wood, dried-out moss, and the bitter acid spritz of corrosion. But out on the gallery deck, leaning against the handrails, there was the unmistakable scent of petrichor. The clouds in the distance grew taller, black shading growing across their swelling bellies, with the storm caps flattening under the weight of the system.","A few miles back toward the mainland, Cappie patrolled the Long Island ports and seaways on his tug, waiting for salvage and rescue calls. There were still enough of them to get by. Especially with these yahoos taking up boating. But the seas were not what they used to be, and Cappie barely eked out a life of sustenance back on land. Lone rangers like us were going extinct in this world of ubiquitous connection and universal alienation. It was a world of gadgets now. But it turned out our kind was more needed than ever when the gadgets failed."];

let rand=Math.floor(Math.random()*3);

document.querySelector(".story").innerHTML=words[rand]

const start=document.querySelector(".start");
const stop=document.querySelector(".stop");
let num= 0;

start.addEventListener("click",function (params) {
    document.querySelector(".stop").style.display="block"
this.style.display="none"

  let time=document.querySelector(".time");
increase(time)
})


function increase(time) {
    setInterval(() => {
    num=  Number(time.innerHTML);
     num++;
     document.querySelector(".time").innerHTML=num
    }, 1000);
}



stop.addEventListener("click",function (params) {
    document.querySelector(".f-time").style.display="block" 
   
    document.querySelector(".f-time").innerHTML=num;
    document.querySelector(".time").innerHTML=0;
document.querySelector(".time").style.display='none';

let input=document.querySelector(".input").value;

let story=document.querySelector(".story").innerHTML;

if (story === input) {
    document.querySelector(".message").style.display='block'
    document.querySelector(".when").innerHTML=num
}else{
    document.querySelector(".error").style.display='block'
    this.style.display="none"
    document.querySelector(".tryagain").style.display="block" 
}


})

document.querySelector(".tryagain").addEventListener("click",function(){
    window.location.reload();
})

document.querySelector(".input").addEventListener("input",function (params) {
    let time=document.querySelector(".time");  
    if (Number(time.innerHTML)===0) {
        console.log(time.innerHTML)
        document.querySelector(".input").value="";
    }
})