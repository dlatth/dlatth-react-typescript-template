/* eslint-env node */
export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*?)(?:\((.*)\))?:(.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        '✨ feat',
        '🐛 fix',
        '🎨 style',
        '🔥 remove',
        '🚧 wip',
        '📝 docs',
        '📦 build',
        '⚒️ chore',
        '🐳 docker',
        '♻️ refactor',
        '🗑️ cleanup',
      ],
    ],
    'type-case': [0], // 이모지가 있으므로 케이스 검사 비활성화
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    // body와 footer는 선택사항으로 설정
    'body-empty': [0],
    'footer-empty': [0],
  },
}
