const edad = 18;
if(edad >= 18) {
// Esta condición se cumple, por lo que saldrá el alert.
  alert("Eres mayor de edad");
}
else {
  alert("Todavía eres menor de edad");
}
switch (edad) {
  case 18:
   // Esta condición se cumple, por lo que saldrá el alert.
    alert('Tienes 18 años');
    break;
  case 20:
    alert('Tienes 20 años');
    break;
  default:
    alert('Sigues siendo joven');
}
     // Imprimirá en consola el valor de `i` 10 veces.
     for (let i = 0; i < edad; i += 1) {
        console.log(i);
      }
 
      // Imprimirá en consola el valor de `cont` 10 veces.
      let cont = 0;
      while (cont < edad) {
        cont++;
        console.log(cont);
      }
 
      // Imprimirá en consola el valor de `inc` 10 veces.
      let inc = 0;
      do {
        inc++;
        console.log(inc);
      } while (inc < edad);

      function nombreFuncion(parametro1, parametro2, parametro3) {
        // Las variables y constantes locales
        // no son accesibles fuera de la función
        let variableLocal = 'Variable local';
        console.log('Parámetro 1: ', parametro1);
        console.log('Parámetro 2: ', parametro2);
        console.log('Parámetro 3: ', parametro3);
        variableLocal = 'Valor de variable cambiado';
 
        // Se regresa el valor procesado en la función
        // En este caso la suma del `parámetro2` que es numérico
        // Más el atributo `valor` del objeto `parámetro3`.
        const constanteLocal = parametro2 + parametro3.valor;
        return constanteLocal;
      }
 
      // Aquí se re-usa la función 3 veces,
      // evitando escribir el mismo código esas mismas 3 veces
      // Aun cuando regrese un valor
      // se puede mandar llamar directamente la función
      nombreFuncion('Los argumentos', 1, { tipo: 'Objeto', valor: 4 });
 
      // Se puede llamar y almacenar el valor regresado en una constante
      const suma = nombreFuncion('Pueden ser', 2, { tipo: 'Objeto', valor: 5 });
      console.log('Suma: ', suma);
 
      // O se puede llamar, almacenar el valor
      // en una variable y hacer algo con la misma
      let res = nombreFuncion('De cualquier tipo', 3, { tipo: 'Objeto', valor: 6 });
      const resta = res - 2;
      console.log('Resta: ', resta);