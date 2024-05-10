export function score(x: number, y: number): number {
    const distanciaAlCentro = Math.sqrt(x * x + y * y);
  
    if (distanciaAlCentro > 10) {
    
      return 0;
    } else if (distanciaAlCentro > 5) {
   
      return 1;
    } else if (distanciaAlCentro > 1) {
  
      return 5;
    } else {
    
      return 10;
    }
  }
  