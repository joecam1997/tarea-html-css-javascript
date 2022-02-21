 <script>

<h1>Introduce un número mayor a 5 </h1>
<h2> Si número >5 "Biennnn" sino "Ohhhhh"</h2>
<input type="text" id="numero">
<input type="button" value="Enviar" onclick="funcion()">
<p id="parrafo"></p>
<script>
function funcion(){
var1=document.getElementById("numero").value;
if (var1>5) document.getElementById("parrafo").innerHTML="Biennn";
else document.getElementById("parrafo").innerHTML="Ohhhh";
}
</script>

 
 



 