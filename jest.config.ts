import type {Config} from 'jest';
import nextJest from 'next/jest.js'


const jestConfig: Config = {
    testEnvironment: 'jest-environment-jsdom',
    verbose: true,
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.ts'
    ]
};

const nextConfig = nextJest({
    dir: "./"
})

export default nextConfig(jestConfig)