export const hexToRgb = (hex: string): string | null => {
  hex = hex.replace(/^#/, "");

  let r: number, g: number, b: number;

  if (hex.length === 3) {
    // If the hex is in shorthand format (#RGB)
    r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
    g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
    b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
  } else if (hex.length === 6) {
    // If the hex is in full format (#RRGGBB)
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    // Invalid hex format
    return null;
  }

  return `${r}, ${g}, ${b}`;
};
