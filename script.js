<script>
  var idade = prompt("insira sua idade")
  var ask = prompt("está na lista de convidados?")
  
  
  if (idade >= 18 && ask.toLowerCase() == "sim") {
  alert("acesso concedido!")
  } 
  else if (idade < 18 && ask.toLowerCase() == "nao") {
  alert("Desculpe, você não pode acessar a festa.") 
  } 
  
  else if (idade < 18 && ask.toLowerCase() == "sim") {
  alert("Desculpe, você não pode acessar a festa.") 
  }
  
  else if (idade >= 18 && ask.toLowerCase() == "nao") {
  alert("Desculpe, você não pode acessar a festa.") 
  }
   </script>