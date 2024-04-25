
type Color = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white';

type ColorMap = {
  [key in Color]: number;
};

export const decodedValue = (colors: [Color, Color]): number => {
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

  return value;
};
