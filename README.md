<p align="center">
  <img width="240" src="https://avatars.githubusercontent.com/u/26663338?v=4"/>
</p>

<h1 align="center">Front-end website admin 🚧 </h1>

this project is responsible for publishing, editing and deleting content from my personal website, as well as being a playground where I like to try new things related to the vuejs ecosystem.

> technologies used

- 💚 [Vuejs](https://vuejs.org/)  - The Intuitive Vue Framework
- 🍍 [Pinia](https://pinia.vuejs.org/)  - The Vue Store that you will enjoy using
- ❎ [Sentry](https://sentry.io/)  - Working Code, Happy Customers
- 🔅 [Vite](https://vitejs.dev/)  - Next Generation Frontend Tooling
- 🃏 [Jest](https://jestjs.io/)  -  Unit/Snapshot Testing
- 🧩 [Commitlint](https://commitlint.js.org/#/)  -  helps your team adhering to a commit convention.
- 🐻‍❄️ [Tailwind](https://tailwindcss.com/)  -  Rapidly build modern websites without ever leaving your HTML.

## Usage

- `yarn dev` - This start application.
- `yarn serve` - This preview production.
- `yarn jest` - Run all linting and unit tests before committing.
- `yarn jest -o` - Run only the tests that have changed.
- `yarn jest -u` - Update all of the snapshot tests.
- `yarn lint` - Run lint in code.

Install dependencies:

```sh
yarn install
```

## Testing

Run Vue components unit tests:

```sh
yarn jest
```

Open test coverage detailed report:

```sh
yarn jest:coverage
```

## Commit types

| Commit Type | Title                    | Description                                                                                                 | Emoji |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | :---: |
| `feat`      | Features                 | A new feature                                                                                               |  ✨   |
| `fix`       | Bug Fixes                | A bug Fix                                                                                                   |  🐛   |
| `docs`      | Documentation            | Documentation only changes                                                                                  |  📚   |
| `style`     | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |  💎   |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |  📦   |
| `perf`      | Performance Improvements | A code change that improves performance                                                                     |  🚀   |
| `test`      | Tests                    | Adding missing tests or correcting existing tests                                                           |  🚨   |
| `build`     | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |   🛠   |
| `ci`        | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |  ⚙️   |
| `chore`     | Chores                   | Other changes that don't modify src or test files                                                           |  ♻️   |
| `revert`    | Reverts                  | Reverts a previous commit                                                                                   |   🗑   |

## License

All code are **copyright gabrielcaiana** and may not be used or reproduced without explicit permission.
