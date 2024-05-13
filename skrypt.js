function wyk(){
    let id1=document.getElementById("id1").value.toUpperCase();
    let id2=document.getElementById("id2").value.toUpperCase();
    let id3=document.getElementById("id3").value;
    let id4=document.getElementById("id4");
    let id5=document.getElementById("id5").value;

    let out1=document.getElementById("wynik");

    if(!id4.checked) {
        out1.style.color = "red";
        out1.innerHTML = "Musisz zapoznać się z regulaminem";
        return;
       }else{
        out1.style.color = "navy";
        out1.innerHTML="<p>"+id1+" "+id2+"<br>"+id5+"</p>";
       }
}
function wycz(){
    document.querySelectorAll('input, textarea').forEach(input => input.value = '');
}
