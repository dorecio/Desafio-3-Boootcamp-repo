// Código de asignación
var generateBtn = document.querySelector("#generate");
var CapitalLetter = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var LowerCase = "abcdefghijklmnñopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "!#$%& '()*+,-./:;<=>?@[\]^_`{|}~";
var numCapitalLetter = 0;
var numLowerCase = 0;
var amountNumbers = 0;
var numSpecialChar = 0;
var stringTotal = "";
var numChar = 0;
var leter = "";

function suggestedPassword() {
  var password = "";
  var indice;
  stringTotal = CapitalLetter + LowerCase + numbers + specialChar;
  for (var i = 0; i < numChar; i++) {
    indice = Math.floor(Math.random() * stringTotal.length);
    password += stringTotal.charAt(indice);
  }
  return (password);
}

function refill() {
  var password = "";
  var string1 = "";
  var string2 = "";
  var indice;
  var indice2;
  for (var i = 0; i < numChar; i++) {
    indice = Math.floor(Math.random() * stringTotal.length);
    password += stringTotal.charAt(indice);
    indice2 = stringTotal.length;
    string1 = (stringTotal.slice(0, indice));
    indice++;
    string2 = (stringTotal.slice(indice, indice2));
    stringTotal = string1 + string2;
  }
  return (password);
}

function selectElements(typeCharacter) {
  var indice = 0;
  switch (typeCharacter) {
    case 1:
      for (var x = 0; x < numCapitalLetter; x++) {
        indice = Math.floor(Math.random() * CapitalLetter.length);
        stringTotal += CapitalLetter.charAt(indice);
      }
      ;
      break;
    case 2:
      for (var x = 0; x < numLowerCase; x++) {
        indice = Math.floor(Math.random() * LowerCase.length);
        stringTotal += LowerCase.charAt(indice);
      }
      ;
      break;
    case 3:
      for (var x = 0; x < amountNumbers; x++) {
        indice = Math.floor(Math.random() * numbers.length);
        stringTotal += numbers.charAt(indice);
      }
      ;
      break;
    case 4:
      for (var x = 0; x < numSpecialChar; x++) {
        indice = Math.floor(Math.random() * specialChar.length);
        stringTotal += specialChar.charAt(indice);
      }
      ;
      break;
  }
}

function generatePassword() {
  var sumChar = 0;
  var typeCharacter = 0;
  alert("NOTA: Para generar una contraseña más segura es recomendable contenga como mínimo una letra mayúscula, una minúscula, un número y caracter especial");
  numChar = parseInt(prompt("¿Cuántos caracteres deseas que contenga la contraseña?  Minimo 8 y máximo 128 "));
  if (Number(numChar) != numChar) {
    alert("Número invalido !!! ");
    return (null); 
    }
  if (numChar < 8 || numChar > 128) {
    alert('Elige número de 8 a 128 !!!');
    return (null);
  }
  
  var placeAvailable = numChar;
  var confirmaMay = confirm("¿Deseas que contenga mayúsculas? ");
  if (confirmaMay) {
    numCapitalLetter = parseInt(prompt("¿Cuántos mayúsculas deseas que contenga la contraseña? Tienes " + placeAvailable + " espacios disponibles"));
    if (Number(numCapitalLetter) != numCapitalLetter) {
      alert("Número invalido !!! ");
      return (null);
    }
    sumChar = sumChar + numCapitalLetter;
    if (sumChar > numChar) {
      alert("El número de caracteres excede los " + numChar + " caracteres establecidos inicialmente.");
      return (null);
    } else {
      typeCharacter = 1;
      selectElements(typeCharacter);
      placeAvailable = numChar - sumChar;
      if (placeAvailable === 0) {
        stringTotal = refill();
        return (stringTotal);
      }
    }
  } 
  var confirmaMin = confirm("¿Deseas que contenga minúsculas? ");
  if (confirmaMin) {
    numLowerCase = parseInt(prompt("¿Cuántos minúsculas deseas que contenga la contraseña? Tienes " + placeAvailable + " espacios disponibles"));
    if (Number(numLowerCase) != numLowerCase) {
      alert("Número invalido !!! ");
      return (null);
    }
    sumChar = sumChar + numLowerCase;
    if (sumChar > numChar) {
      alert("El número de caracteres excede los " + numChar + " caracteres establecidos inicialmente.");
      return (null);
    } else {
      typeCharacter = 2;
      selectElements(typeCharacter);
      placeAvailable = numChar - sumChar;
      if (placeAvailable === 0) {
        stringTotal = refill();
        return (stringTotal);
      }
    }
  }
  var confirmaNum = confirm("¿Deseas que contenga numeros? ");
  if (confirmaNum) {
    amountNumbers = parseInt(prompt("¿Cuántos numeros deseas que contenga la contraseña? Tienes " + placeAvailable + " espacios disponibles"));
    if (Number(amountNumbers) != amountNumbers) {
      alert("Número invalido !!! ");
      return (null);
    }
    sumChar = sumChar + amountNumbers;
    if (sumChar > numChar) {
      alert("El número de caracteres excede los " + numChar + " caracteres establecidos inicialmente.");
      return (null);
    } else {
      typeCharacter = 3;
      selectElements(typeCharacter);
      placeAvailable = numChar - sumChar;
      if (placeAvailable === 0) {
        stringTotal = refill();
        return (stringTotal);
      }
    }
  }
  var confirmaEsp = confirm("¿Deseas que contenga caracteres especiales? ");
  if (confirmaEsp) {
    numSpecialChar = parseInt(prompt("¿Cuántos caracteres especiales deseas que contenga la contraseña? Tienes " + placeAvailable + " espacios disponibles"));
    if (Number(numSpecialChar) != numSpecialChar) {
      alert("Número invalido !!! ");
      return (null);
    }
    sumChar = sumChar + numSpecialChar;
    if (sumChar > numChar) {
      alert("El número de caracteres excede los " + numChar + " caracteres establecidos inicialmente.");
      return (null);
    } else {
      typeCharacter =4;
      selectElements(typeCharacter);
      placeAvailable = numChar - sumChar;
      if (placeAvailable > 0) {
        alert("Datos incompletos !!!  Por lo tanto se genera contraseña sugerida");
        stringTotal = suggestedPassword();
        return (stringTotal); 
      } else {
        stringTotal = refill();
        return (stringTotal);
      }
    }
  } else {
    alert("Datos incompletos !!!  Por lo tanto se genera contraseña sugerida");
    stringTotal = suggestedPassword();
    return (stringTotal); 
  }
  
}



// Escriba la contraseña en la entrada #password
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Agregar oyente de eventos para generar el botón
generateBtn.addEventListener("click", writePassword);
