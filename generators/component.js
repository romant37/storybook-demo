const format = require('prettier-eslint')

function prettier(text) {
  return format({ text, prettierOptions: { parser: 'babel' } })
}

module.exports = function (plop) {
  plop.setHelper('fileName', (name = '') => name.split('/').pop())
  plop.setHelper('componentName', (name = '') => name.split('/').pop().split('.').shift())
  plop.setHelper('escapeRegex', text => text.replace(/[.*+\-?^${}()|[\]\/\\]/g, '\\$&'))

  plop.setGenerator('component', {
    description: 'Generate React component folder',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'Component name including local path inside `src`,\nex. `components/MyComponent`\n',
      },

      {
        type: 'input',
        name: 'storybookName',
        message: 'StoryBook title,\nex. Components/MyComponent\n',
      },
    ],
    actions: [
      {
        type: 'add',
        transform: prettier,
        path: '../src/{{name}}/index.ts',
        template: `
          export { default } from './{{fileName name}}'
        `,
      },
      {
        type: 'add',
        transform: prettier,
        path: '../src/{{name}}/{{componentName name}}.tsx',
        template: `
          import styles from './{{componentName name}}.module.css'

          type {{componentName name}}Props = {}

          const {{componentName name}}: React.FC<{{componentName name}}Props> = ({ children }) => {
            return <div className={styles.wrapper}>{children}</div>
          }

          export default {{componentName name}}
        `,
      },
      {
        type: 'add',
        transform: prettier,
        path: '../src/{{name}}/{{componentName name}}.stories.tsx',
        template: `
          import {{componentName name}} from './{{componentName name}}'

          export default {
            title: '{{storybookName}}',
          }

          export function story() {
            return <{{componentName name}} />
          }
        `,
      },
      {
        type: 'add',
        path: '../src/{{name}}/{{componentName name}}.module.css',
        template: `
          .wrapper {
            display: block;
          }
        `,
      },
    ],
  })
}
