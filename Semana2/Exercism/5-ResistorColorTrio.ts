type Color = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white';

type ColorMap = {
  [key in Color]: number;
};

export const decodedResistorValue = (colors: [Color, Color, Color]): string => {
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

  const value = colorMap[colors[0]] * 10 + colorMap[colors[1]];
  const zeros = Math.pow(10, colorMap[colors[2]]);

  let result = value * zeros;

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
