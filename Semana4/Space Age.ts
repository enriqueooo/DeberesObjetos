export function age(planet: string, seconds: number): number {
    const earthYearInSeconds: number = 31557600;
  
    const orbitalPeriods: { [key: string]: number } = {
      earth: 1.0,
      mercury: 0.2408467,
      venus: 0.61519726,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132
    };
  
    const earthYears: number = seconds / earthYearInSeconds;
    const ageOnPlanet: number = earthYears / orbitalPeriods[planet];
  
    return parseFloat(ageOnPlanet.toFixed(2));
  }
  