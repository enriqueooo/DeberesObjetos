export class DnDCharacter {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    hitpoints: number;
  
    constructor() {
      this.strength = DnDCharacter.generateAbilityScore();
      this.dexterity = DnDCharacter.generateAbilityScore();
      this.constitution = DnDCharacter.generateAbilityScore();
      this.intelligence = DnDCharacter.generateAbilityScore();
      this.wisdom = DnDCharacter.generateAbilityScore();
      this.charisma = DnDCharacter.generateAbilityScore();
      this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }
  
    public static generateAbilityScore(): number {
      let dice = [...Array(4)].map(_ => DnDCharacter.rollDie());
      dice.sort((a, b) => a - b);
      dice.shift(); // Remove lowest roll
      return dice.reduce((total, current) => total + current, 0);
    }
  
    public static rollDie(): number {
      return 1 + Math.floor(Math.random() * 6);
    }
  
    public static getModifierFor(abilityValue: number): number {
      return Math.floor((abilityValue - 10) / 2);
    }
  }
  