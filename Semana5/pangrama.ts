const alphabet = new Set([...Array(26)].map((_, i) => String.fromCharCode(i + 97)))

export function isPangram(str: string): boolean {
  let argSet = new Set(str.toLowerCase().split(""))
  return new Set(
    [...alphabet].filter(
      ch => argSet.has(ch)
    )
  ).size === 26;
}