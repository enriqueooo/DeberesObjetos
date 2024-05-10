## Space Age
Problemática:
La problemática que aborda este código es calcular la edad de una persona en años en un planeta específico, dada su edad en segundos vividos en la Tierra.

Solución:
La solución propuesta calcula primero la edad de la persona en años en la Tierra, y luego la ajusta en función del período orbital relativo de cada planeta.

Explicación
Constante earthYearInSeconds:
Esta constante representa el número de segundos en un año en la Tierra (31557600 segundos).
Objeto orbitalPeriods:
Este objeto almacena los períodos orbitales relativos de los planetas en relación con la Tierra. Por ejemplo, 1 año terrestre es equivalente a 0.2408467 años en Mercurio.
Cálculo de la edad en años terrestres:
Se divide el número total de segundos vividos (seconds) entre el número de segundos en un año terrestre para obtener la edad en años terrestres.
Ajuste de la edad en el planeta dado:
Se divide la edad en años terrestres por el período orbital relativo del planeta específico para obtener la edad en ese planeta.
Redondeo de la edad y conversión a número con dos decimales:
Se redondea la edad a dos decimales utilizando parseFloat(ageOnPlanet.toFixed(2)) y se devuelve como el resultado de la función.

Conclusiones:
Este código proporciona una solución eficiente para calcular la edad de una persona en años en un planeta específico.
Utiliza constantes y un objeto para almacenar los datos necesarios para realizar los cálculos, lo que hace que el código sea fácilmente ajustable y mantenible.

## D&D Character
Problemática:
La problemática que aborda este código es la creación de un personaje de D&D con estadísticas de habilidades y puntos de golpe generados aleatoriamente.

Solución:
La solución propuesta utiliza métodos estáticos para generar estadísticas de habilidades y calcular los puntos de golpe de un personaje de D&D.

Explicación 
Atributos de la clase DnDCharacter:
La clase tiene atributos para las seis estadísticas de habilidades de un personaje de D&D: fuerza, destreza, constitución, inteligencia, sabiduría y carisma.
También tiene un atributo para los puntos de golpe del personaje.
Constructor:
En el constructor, se generan aleatoriamente las estadísticas de habilidades para el personaje utilizando el método generateAbilityScore() para cada una de las seis habilidades.
Se calculan los puntos de golpe basados en la constitución del personaje, utilizando el método getModifierFor().
Método estático generateAbilityScore():
Este método genera un puntaje de habilidad para una estadística usando el método de lanzamiento de dados de D&D.
Se lanzan 4 dados de 6 caras (d6) y se suman los tres valores más altos.
Esto simula el método de generación de habilidades en D&D, donde se lanzan 4d6 y se descarta el valor más bajo.
Método estático rollDie():
Este método simula el lanzamiento de un dado de 6 caras (d6), generando un número aleatorio entre 1 y 6.
Método estático getModifierFor(abilityValue: number):
Este método calcula el modificador de una estadística de habilidad según su valor.
El modificador se calcula restando 10 del valor de la habilidad y dividiendo el resultado por 2, y luego redondeando hacia abajo.

Conclusiones:
Este código proporciona una forma de generar aleatoriamente estadísticas de habilidades y calcular los puntos de golpe para un personaje de D&D.
La implementación utiliza métodos estáticos para encapsular la lógica de generación de habilidades y cálculo de modificadores, lo que facilita su reutilización y mantenimiento.

Link del video: https://youtu.be/O__j14jZrbw