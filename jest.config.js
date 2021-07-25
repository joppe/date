/* eslint-env node */

module.exports = {
    coverageDirectory: 'coverage',
    globals: {
        'ts-jest': {
            tsconfig: {
                module: 'commonjs',
                paths: {
                    '@apestaartje/date/*': ['src/date/*'],
                },
            },
        },
    },
    moduleNameMapper: {
        '^@apestaartje/date/(.*)$': '<rootDir>/src/date/$1',
    },
    preset: 'ts-jest',
};
