import babel from "@rollup/plugin-babel";
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';


export default [{
    input: "./src/client.ts",
    watch: true,
    output: {
        file: '../static/js/index.js',
        format: 'iife'
    },
    plugins: [
        resolve(),
        json(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
        babel()
    ]
}]