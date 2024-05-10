## Salto
Problemática:
La problemática que aborda este código es la determinación de si un año dado es bisiesto o no.

Solución:
La solución propuesta utiliza el algoritmo básico para determinar si un año es bisiesto. Según este algoritmo, un año es bisiesto si es divisible por 4 pero no por 100, excepto si también es divisible por 400.

Explicación 
Función isLeap(year: number): boolean:
Esta función toma un parámetro year que es un número representando el año que se desea verificar.
Devuelve un valor booleano (true si el año es bisiesto, false de lo contrario).
La expresión year % 4 === 0 verifica si el año es divisible por 4. Si es divisible, se considera un posible año bisiesto.
La expresión (year % 100 !== 0 || year % 400 === 0) verifica las excepciones para determinar si el año es bisiesto o no. Si el año no es divisible por 100 (lo cual descarta la mayoría de los años no bisiestos), o si es divisible por 400 (lo que hace que los años como 2000 sean bisiestos a pesar de ser divisibles por 100), entonces se considera un año bisiesto.
Pruebas con distintos años:
console.log(isLeap(2015));: Se espera que devuelva false, ya que 2015 no es un año bisiesto.
console.log(isLeap(1970));: Se espera que devuelva false, ya que 1970 no es un año bisiesto.
console.log(isLeap(1996));: Se espera que devuelva true, ya que 1996 es un año bisiesto.
console.log(isLeap(1900));: Se espera que devuelva false, ya que 1900 no es un año bisiesto.
console.log(isLeap(2000));: Se espera que devuelva true, ya que 2000 es un año bisiesto.
console.log(isLeap(1800));: Se espera que devuelva false, ya que 1800 no es un año bisiesto.

Conclusiones:
Este código proporciona una solución eficiente y concisa para determinar si un año es bisiesto o no, siguiendo las reglas estándar del calendario gregoriano.
Las pruebas realizadas muestran que la función isLeap devuelve resultados precisos para diferentes años, confirmando su funcionalidad.

## Transcripcion de ARN
Problemática:
La problemática que aborda este código es la conversión de una cadena de ADN en su equivalente de ARN. En ARN, los nucleótidos 'G' (guanina) se emparejan con 'C' (citosina) y 'A' (adenina) se empareja con 'U' (uracilo), mientras que 'T' (timina) se convierte simplemente en 'A'.

Solución:
La solución propuesta utiliza un mapeo de cada nucleótido de ADN a su correspondiente nucleótido de ARN. Luego, recorre la cadena de ADN y construye la cadena de ARN correspondiente utilizando el mapeo.

Explicación
Objeto dnaToRnaMap:
Este objeto almacena un mapeo de cada nucleótido de ADN a su equivalente de ARN. Por ejemplo, 'G' se mapea a 'C', 'C' se mapea a 'G', y así sucesivamente.
Función toRna(dna: string): string:
Esta función toma un parámetro dna, que es una cadena de ADN que se desea convertir.
Inicializa una cadena vacía rna que almacenará el resultado de la conversión de ADN a ARN.
Itera sobre cada nucleótido en la cadena de ADN utilizando un bucle for...of.
Verifica si el nucleótido actual está presente en el mapeo dnaToRnaMap utilizando el método hasOwnProperty.
Si el nucleótido está presente, agrega su equivalente de ARN a la cadena rna.
Si el nucleótido no está presente en el mapeo, lanza un error indicando que la entrada de ADN es inválida.
Devuelve la cadena de ARN resultante después de haber procesado todos los nucleótidos de ADN.

Conclusiones:
Este código proporciona una solución efectiva para convertir cadenas de ADN en cadenas de ARN utilizando un mapeo predefinido.
Las pruebas de presencia de nucleótidos desconocidos garantizan que la función maneje correctamente las entradas inválidas.

Link del video: https://youtu.be/RNkxTaYNfC8