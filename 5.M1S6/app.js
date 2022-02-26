     // Inicializamos un arreglo
     const frutas = ['Manzana', 'Plátano', 'Naranja', 'Fresa', 'Zarzamora'];

     // Recorremos el arreglo
     frutas.forEach((elemento, indice, array) => {
       // Imprime el elemento actual y su índice
       console.log(elemento, indice);
     });

     // Ordenamos alfabéticamente el arreglo
     frutas.sort((fruta1, fruta2) => {
       // fruta1 va primero que fruta2
       if (fruta1 < fruta2) {
         return -1;
       }
       // fruta2 va primero que fruta1
       if (fruta1 > fruta2) {
         return 1;
       }

       // Los elementos ya están ordenados
       return 0;
     });
     console.log('Frutas Ordenadas: ', frutas);

     // Filtramos el arreglo
     const berries = frutas.filter((elemento) => {
       if (elemento === 'Fresa' || elemento === 'Zarzamora') {
         return true;
       }

       return false;
     });
     console.log('Berries: ', berries);

     // Mapeamos el arreglo
     const frutasMapeadas = frutas.map((elemento, indice) => {
       return {
         nombreFruta: elemento,
         posicion: indice,
       };
     });
     console.log('Mapeo: ', frutasMapeadas);

     // Reducimos el arreglo
     const valorInicial = '';
     const licuado = frutas.reduce((valorReducido, elemento) => {
       return `${valorReducido} - ${elemento}`;
     }, valorInicial);
     console.log('Reducción: ', licuado);