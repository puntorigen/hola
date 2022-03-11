import babel            from '@rollup/plugin-babel';
import { nodeResolve }  from '@rollup/plugin-node-resolve';
import typescript       from 'rollup-plugin-typescript2';

const config = {
  input: 'src/index.ts',
  external: [],
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: 'hola',
    sourcemap: false
  },

  plugins: [
    nodeResolve(),
    typescript({
        declaration: true,
        declarationDir: "lib/",
        declarationMap: true,
        experimentalDecorators: true,
        exclude: ['test']
    }),
    babel({
      presets: [
        ['@babel/preset-env',
        {
          targets: {
            esmodules: true
          },
        }]
      ],
      exclude: ['node_modules','test'],
      babelHelpers: 'bundled',
    })
  ]
};

//'**/node_modules/**'
export default config;