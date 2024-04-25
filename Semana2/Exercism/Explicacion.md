# Soluciones Y Explicaciones

## Resistor Color Duo
# Problema
El problema es decodificar un par de colores en un valor numérico basado en un código de colores. Cada color tiene un valor numérico asociado, y el valor del par de colores se calcula concatenando los valores numéricos de los dos colores. El primer color determina el primer dígito y el segundo color determina el segundo dígito del valor numérico resultante.

# Solución
La solución es utilizar un mapa (objeto) que asocie cada color con su valor numérico y luego calcular el valor decodificado usando ese mapa.

# Código Explicado

type Color = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white';

type ColorMap = {
  [key in Color]: number;
};
Definición de tipos: Se define un tipo Color que representa los colores posibles y un tipo ColorMap que representa un mapa donde las claves son los colores y los valores son números.

export const decodedValue = (colors: [Color, Color]): number => {
Función decodedValue: Se exporta una función llamada decodedValue que toma un par de colores como argumento y devuelve un número.

  const colorMap: ColorMap = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
  };
Mapa de Colores: Se crea un objeto colorMap que mapea cada color con su valor numérico correspondiente.

  const value = colorMap[colors[0]] * 10 + colorMap[colors[1]];
Cálculo del Valor: Se calcula el valor decodificado tomando el valor numérico del primer color (colorMap[colors[0]]) y multiplicándolo por 10. Luego se suma el valor numérico del segundo color (colorMap[colors[1]]).

  return value;
};
Retorno del Valor: La función devuelve el valor calculado.

## Resistor Color Trio
# Problema
El problema es decodificar un trío de colores de una resistencia en un valor de resistencia en ohmios. Cada color representa un dígito, y el tercer color indica cuántos ceros se deben añadir al valor calculado.

# Solución
La solución es similar a la anterior, pero con una adición. Después de calcular el valor de la resistencia en ohmios, se ajusta el valor multiplicándolo por una potencia de 10 basada en el tercer color para obtener el valor final en ohmios, kiloohmios, megaohmios o gigaohmios.

Código Explicado

type Color = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white';

type ColorMap = {
  [key in Color]: number;
};
Definición de tipos: Se definen los mismos tipos Color y ColorMap que en el código anterior.
export const decodedResistorValue = (colors: [Color, Color, Color]): string => {
Función decodedResistorValue: Se exporta una función llamada decodedResistorValue que toma un trío de colores como argumento y devuelve una cadena representando el valor de la resistencia.

  const colorMap: ColorMap = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
  };
Mapa de Colores: Se crea un objeto colorMap que mapea cada color con su valor numérico correspondiente.

  const value = colorMap[colors[0]] * 10 + colorMap[colors[1]];
Cálculo del Valor: Se calcula el valor de la resistencia tomando el valor numérico de los primeros dos colores y concatenándolos.

  const zeros = Math.pow(10, colorMap[colors[2]]);
Cálculo de los Ceros: Se calcula la cantidad de ceros multiplicando 10 a la potencia del valor numérico del tercer color.

  let result = value * zeros;
Cálculo del Resultado: Se calcula el valor final de la resistencia multiplicando el valor calculado previamente por la cantidad de ceros.


  if (result < 1000) {
    return `${result} ohms`;
  } else if (result < 1000000) {
    result = result / 1000;
    return `${result} kiloohms`;
  } else if (result < 1000000000) {
    result = result / 1000000;
    return `${result} megaohms`;
  } else {
    result = result / 1000000000;
    return `${result} gigaohms`;
  }
};
Conversión del Resultado: Se convierte el resultado en una cadena que representa el valor de la resistencia en la unidad adecuada (ohms, kiloohms, megaohms, gigaohms) según su magnitud.

Link de Youtube:https://www.youtube.com/watch?v=v4v2IuLKzzw&t=1s
