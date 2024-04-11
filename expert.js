
const words=["On my last shift as a lighthouse keeper, I climbed the seventy-six spiral iron stairs and two ladders to the watch room, the number of steps the same as my age. The thwomp and snare of each step laid an ominous background score. Something wasn’t right. At that very moment, Richie Tedesco was pointing a fire extinguisher at the burning electrical panel in the engine room of his boat a few miles offshore.","The placard in the watch room read “Marge Mabrity, Lightkeeper—First lighted the depths on March 2nd, 1985, and hasn’t missed a night.” Already so close to forty years. I could still read the skies like a book. The lighthouse smelled of aging wood, dried-out moss, and the bitter acid spritz of corrosion. But out on the gallery deck, leaning against the handrails, there was the unmistakable scent of petrichor. The clouds in the distance grew taller, black shading growing across their swelling bellies, with the storm caps flattening under the weight of the system.","A few miles back toward the mainland, Cappie patrolled the Long Island ports and seaways on his tug, waiting for salvage and rescue calls. There were still enough of them to get by. Especially with these yahoos taking up boating. But the seas were not what they used to be, and Cappie barely eked out a life of sustenance back on land. Lone rangers like us were going extinct in this world of ubiquitous connection and universal alienation. It was a world of gadgets now. But it turned out our kind was more needed than ever when the gadgets failed."];

let rand=Math.floor(Math.random()*3);
const read=words[rand];
document.querySelector(".story").innerHTML=read

let num=0;


const first_second=1;

let wordLenght=read.length;
let total_time=first_second*wordLenght;


let time=document.querySelector(".rt");

time.innerHTML=total_time


document.querySelector(".start").addEventListener("click",function (params) {
   this.style.display="none";
 increase()

})


function increase() {
    setInterval(() => {
    let time=document.querySelector(".rt");
    if (time.getAttribute("check") =="Undefined") {
        
    }else{

 
    num=  Number(time.innerHTML);
     num--;
     document.querySelector(".rt").innerHTML=num;
     if (num==0) {
     
       time.setAttribute("check","Undefined");
      
      let ret= checker();
    if (ret) {
        document.querySelector(".message").style.display="block";
        document.querySelector(".restart").style.display="block";
       document.querySelector(".attempt").style.display="block";
       document.querySelector(".drt").innerHTML=document.querySelector(".num_attempt").value;
console.log(document.querySelector(".num_attempt").value)
    }else{
        document.querySelector(".tryagain").style.display="block";
        document.querySelector(".error").style.display="block";
    }
     }
    }
    }, 1000);

}


function checker(params) {
    let input=document.querySelector(".input").value;

    let story=read;

    if (input===story) {
        return true;
    }
    else{
       return false;
    }

}

document.querySelector(".restart").addEventListener("click",function (params) {
    window.location.reload();
})

document.querySelector(".tryagain").addEventListener("click",function (params) {

    this.style.display="none";

    let hiden=document.querySelector(".num_attempt");
   let newel=Number(hiden.value) +1;
   hiden.value=newel;

//resetting time to defualt;
   let time=document.querySelector(".rt");

   time.innerHTML=total_time;

   time.setAttribute("check","defined");
   document.querySelector(".error").style.display="none";
   
})