declare module '@i2cinc/animations' {
  export type Animation = Keyframe[];
  export const animations: Animation[];
  export const easings: { [key: string]: string };
}
