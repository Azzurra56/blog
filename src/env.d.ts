/// <reference types="astro/client" />

declare module '*.jpg' {
  const src: { src: string; width: number; height: number; format: string };
  export default src;
}

declare module '*.png' {
  const src: { src: string; width: number; height: number; format: string };
  export default src;
}

interface Window {
  showModal: (el: HTMLElement) => void;
  closeModal: () => void;
}
