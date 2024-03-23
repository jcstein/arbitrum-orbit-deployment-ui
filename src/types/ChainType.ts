export const ChainType = {
  Rollup: 'Rollup',
  AnyTrust: 'AnyTrust',
  CelestiaDA: 'CelestiaDA',
} as const;

export type ChainType = (typeof ChainType)[keyof typeof ChainType];
