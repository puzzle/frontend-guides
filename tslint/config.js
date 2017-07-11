module.exports = {
  rules: {
    'prefer-const': true, // 2.1, 13.1
    'no-var-keyword': true, // 2.2
    'object-literal-shorthand': true, // 3.3, 3.4
    'object-literal-key-quotes': [
      true,
      'as-needed',
    ], // 3.6
    quotemark: [
      true,
      'single',
      'jsx-double',
    ], // 6.1
    'no-eval': true, // 6.4
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always', // 7.11
        named: 'never', // 18.3
      },
    ],
    align: [
      true,
      'arguments',
      'parameters',
    ],
    'arrow-parens': false,
    'one-variable-per-declaration': [
      true,
      'ignore-for-loop',
    ], // 13.2
    'triple-equals': [
      true,
      'allow-null-check',
    ], // 15.1
    'comment-format': [
      true,
      'check-space',
    ], // 17.3
    indent: [
      true,
      'space',
      2,
    ], // 18.1
    whitespace: [
      true,
      'check-branch', // 18.3
      'check-decl', // 18.4
      'check-operator', // 18.4
      'check-preblock', // 18.2
    ],
    eofline: true, // 18.5
    'max-line-length': [
      true,
      100,
    ], // 18.12
    'trailing-comma': [
      true,
      {
        multiline: 'always',
        singleline: 'never',
      },
    ], // 19.2
    semicolon: [
      true,
      'always',
    ], // 20.1
    radix: true, // 21.3
    'no-construct': true, // 21.3, 21.6
    'variable-name': [
      true,
      'check-format', // 22.2
    ],
    typedef: [
      true,
      'call-signature'
    ],
  },
};
