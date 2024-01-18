function persegi( )
{
var a,area,perimeter;
a = parseInt(document.getElementById("InputHitung").value);
area = a*a; 
perimeter = 4*a; 
document.getElementById("num").innerHTML="Luas Persegi adalah : "+area;
document.getElementById("num1").innerHTML="Keliling Persegi adalah : "+perimeter;
}
function reset() {
    document.getElementById("myForm").reset();
  }