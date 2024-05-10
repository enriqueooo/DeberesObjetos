## dardos 
Problemática:
La problemática que aborda este código es asignar una puntuación a un punto en un plano cartesiano, según su distancia desde el origen (0,0).

Solución:
La solución propuesta divide el plano en regiones circulares concéntricas, asignando diferentes puntuaciones en función de la distancia euclidiana desde el origen.

Explicación 
Función score(x: number, y: number): number:
Esta función toma dos parámetros, x y y, que representan las coordenadas cartesianas del punto.
Calcula la distancia del punto al origen utilizando la fórmula de la distancia euclidiana: √(x² + y²), mediante Math.sqrt(x * x + y * y).
La función luego utiliza una serie de declaraciones if...else if...else para determinar la puntuación basada en la distancia calculada.
Si la distancia es mayor que 10 unidades desde el origen, se devuelve una puntuación de 0.
Si la distancia es mayor que 5 pero menor o igual que 10 unidades desde el origen, se devuelve una puntuación de 1.
Si la distancia es mayor que 1 pero menor o igual que 5 unidades desde el origen, se devuelve una puntuación de 5.
Si la distancia es menor o igual a 1 unidad desde el origen, se devuelve una puntuación de 10.
Estas reglas asignan puntuaciones más altas a puntos más cercanos al origen y puntuaciones más bajas a puntos más alejados del origen.

Conclusiones:
Este código proporciona una solución simple y efectiva para asignar puntuaciones basadas en las coordenadas de un punto en un plano cartesiano.
Las diferentes condiciones establecidas en las declaraciones if garantizan que se asigne la puntuación correcta en función de la ubicación del punto en relación con el origen.

## pangrama
Problemática:
La problemática que aborda este código es verificar si una cadena contiene al menos una vez cada una de las letras del alfabeto inglés.

Solución:
La solución propuesta crea un conjunto (Set) que contiene todas las letras del alfabeto inglés y luego verifica si todas estas letras están presentes al menos una vez en la cadena dada.

Explicación 
Conjunto alphabet:
Se crea un conjunto utilizando new Set([...Array(26)].map((_, i) => String.fromCharCode(i + 97))).
Esto genera un conjunto que contiene todas las letras minúsculas del alfabeto inglés.
Función isPangram(str: string): boolean:
Esta función toma una cadena str como entrada.
Primero, convierte la cadena a minúsculas usando str.toLowerCase() para asegurarse de que las comparaciones de letras no sean sensibles a mayúsculas y minúsculas.
Luego, crea un conjunto (argSet) a partir de la cadena de entrada, dividiéndola en caracteres individuales.
Utiliza el método filter para filtrar solo las letras del conjunto alphabet que están presentes en el conjunto argSet.
Crea un nuevo conjunto a partir de los resultados del filtro y verifica si su tamaño es igual a 26, que es la longitud del alfabeto inglés.
Devuelve true si el tamaño del conjunto es 26, lo que indica que todas las letras del alfabeto están presentes al menos una vez en la cadena. De lo contrario, devuelve false.

Conclusiones:
Este código proporciona una solución eficiente para determinar si una cadena es un pangrama.
Utiliza conjuntos para facilitar la comparación y el filtrado de letras, lo que resulta en un código conciso y legible.