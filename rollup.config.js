import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './src/index.js',
  output: {
    exports: 'named',
    file: 'dist/vue-mutation-observer.js',
    format: 'umd',
    name: 'vueMutationObserver'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    uglify()
  ]
};