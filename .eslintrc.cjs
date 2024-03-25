module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // Deshabilita reglas específicas o haz ajustes según tus necesidades
    'react/jsx-no-target-blank': 'warn', // Cambia 'off' a 'warn' para advertir en lugar de desactivar
    // Añade reglas adicionales o ajusta según tus necesidades
    // 'nombre-de-la-regla': 'valor', 
  },
}
