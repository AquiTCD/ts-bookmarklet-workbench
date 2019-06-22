module.exports = {
  preset: `jest-puppeteer`,
  moduleNameMapper: {
    '^#/(.+)': `<rootDir>/dist/$1`,
  },
  moduleFileExtensions: [`ts`, `tsx`, `js`],
  transform: {
    '^.+\\.(ts|tsx)$': `ts-jest`,
  },
  globals: {
    'ts-jest': {
      tsConfig: `tsconfig.json`,
    },
  },
  testMatch: [`**/__tests__/*.+(ts|tsx|js)`],
}
