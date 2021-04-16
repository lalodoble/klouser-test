import { Magic } from 'magic-sdk';
import { MAGIC_PUBLIC_KEY } from "../utils/urls";


// Create client-side Magic instance
const createMagic = (key) => {
  return (
    typeof window != 'undefined' &&
    new Magic(key, {
      locale: "ES",
    })
  );
};

export const magic = createMagic(MAGIC_PUBLIC_KEY);