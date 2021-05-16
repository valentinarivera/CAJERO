class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero ()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if (dinero > 0)
    {
      division = Math.floor(dinero / bi.valor);

      if (division > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = division;
      }
        entregado.push(new Billete(bi.valor, papeles));
        dinero = dinero - (bi.valor * papeles);
    }
  }
if (dinero > 0)
{
  resultado.innerHTML = "Soy un cajero pobre y no tengo dinero :("
}
else 
{
  for (var e of entregado)
  {
    if (e.cantidad >  0)
    resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
  }
}

  console.log(entregado);
}

var caja = [new Billete(50, 10), new Billete(20, 30), new Billete(10, 10), new Billete(5, 10)]
var entregado = [];
var division = 0;
var papeles = 0;
var dinero = 0;
var b = document.getElementById("Retirar");
var resultado = document.getElementById("resultado");

b.addEventListener ("click", entregarDinero)







