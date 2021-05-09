function confirm(){
    var f=document.getElementById("fn").value;
    var g=document.getElementById("un").value;
    var h=document.getElementById("em").value;
    var i=document.getElementById("pn").value;
    var valu=document.getElementById("pw").value;
    var valu1=document.getElementById("cp").value;
console.log(valu); 
console.log(valu1);
if(!f || !g || !h || !i){
    // document.getElementById('fn').required = true
    // alert("hjdvjh")
}else if(f){


 if(valu1=" "){
      alert("confirm your password correctly");
      
    }
  else if(valu1!=valu){
        alert("confirm your password correctly");
    }
    else{
      alert("sucess")
    }
}
}