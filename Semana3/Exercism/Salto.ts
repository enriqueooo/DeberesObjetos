export function isLeap(year: number): boolean {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}


console.log(isLeap(2015));
console.log(isLeap(1970)); 
console.log(isLeap(1996)); 
console.log(isLeap(1900)); 
console.log(isLeap(2000)); 
console.log(isLeap(1800)); 
