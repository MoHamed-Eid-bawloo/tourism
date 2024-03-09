var Links=document.getElementById("links");
function vooo() {
    Links.style.transform="translate(0px,0px)";
}
function closse() {
    Links.style.transform="translate(-250px, 0px)"
}
window.onscroll=function (){
    if (window.scrollY>0) {
        document.getElementById("Navbar").classList.add('active');
    } else {
        document.getElementById("Navbar").classList.remove('active');
    }
}
var x=document.getElementById("send").onclick=function send() {
    var Input=document.getElementsByClassName("input");
    var info =document.getElementById("info");
    var another =document.getElementById("send-another");
    var x=document.querySelector("form");
    var alert1=document.getElementById("alert");
    if (Input[0].value==="" || Input[1].value===""|| Input[2].value==="" || Input[3].value==="" || Input[4].value==="") {
            alert("please complete all required fields!");
            } else {
                x.style.display="none";
                alert1.style.display="block";
               var p= `<p> Your Name: <span style="text-transform:capitalize" class="active3">${Input[0].value}</span><br>
               <br>
               Your Email Addres: <span class="active3">${Input[1].value}</span><br>
               <br>
               Your Phone Number: <span style="text-transform:capitalize" class="active3">${Input[2].value}</span><br>
               <br>
               Your Subject Name: <span class="active3">${Input[3].value}</span><br>
               <br>
               your Massege Include: <span class="active2">${Input[4].value}</span>
               </p>
               `
               info.innerHTML=p
               info.style.display="block";
               Input[0].value="";
               Input[1].value="";
               Input[2].value="";
               Input[3].value="";
               Input[4].value="";
               another.style.display="block";
               another.onclick=function (){
                 another.style.display="none";
                 x.style.display="block";
                 info.style.display="none";
                 alert1.style.display="none";
              }
                    }
       
}
// var input_search=document.getElementById("input-search");
// function MySearch() {
//     input_search.style.transform="translate(0px,0px)"
//     let x=document.getElementById("close2").style.display="block";
// }
// function clossse() {
//     input_search.style.transform="translate(-10000px, 0px)"
//     let x=document.getElementById("close2").style.display="none";
// }
