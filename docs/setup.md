# Setup

## Install Script Kit

```shell
```

## Install Script Kit Plugins

```shell
```

## Initialize Git and GitHub

```shell
# initialize git
git init

# initialize github
gh repo create --public -d 'Script Kit ~/.kenv Configuration' jimbrig/.kenv

# add remote
git remote add origin git@github.com:jimbrig/.kenv.git

# add branch
git checkout -M main

# push to remote
git push -u origin main
```

## Install NPM Packages

### Dependencies

Dependencies:

- `@metascraper/helpers`
- `@sindresorhus/slugify`
- `@svgr/core`
- `@svgr/plugin-jsx`
- `@svgr/plugin-svgo`
- `ansi-to-html`
- `bytes-formatter`
- `dist-exiftool`
- `filenamify`
- `imagemin`
- `imagemin-gifsicle`
- `imagemin-jpeg-recompress`
- `imagemin-jpegtran`
- `imagemin-pngquant`
- `imagemin-svgo`
- `md5-hex`
- `metascraper`
- `node-exiftool`
- `prettier`
- `project-name-generator`
- `shell-quote`
- `svg-parser`
- `unused-filename`
- `yaml`
- `zod`

```shell
npm i --save @metascraper/helpers @sindresorhus/slugify @svgr/core @svgr/plugin-jsx @svgr/plugin-svgo ansi-to-html date-fns bytes-formatter dist-exiftool filenamify imagemin imagemin-gifsicle imagemin-jpeg-recompress imagemin-jpegtran imagemin-pngquant imagemin-svgo md5-hex metascraper node-exiftool prettier project-name-generator shell-quote svg-parser unused-filename yaml zod
```

### Dev Dependencies, Plugins, and Types

> [!NOTE]
> The `@johnlindquist/kit` dev-dependency will already be installed and declared in the `package.json` file.
> However, you can alter the `package.json` to link to `file:../.kit` if you want to use a local version of the kit package.

- `@types/imagemin`
- `@types/imagemin-gifsicle`
- `@types/imagemin-jpegtran`
- `@types/imagemin-svgo`
- `@types/shell-quote`
- `@types/svg-parser`
- `execa`
- `globby`
- `rimraf`
- `rehype-stringify`
- `remark-parse`
- `remark-rehype`
- `shiki`
- `unified`


- `@kentcdobbs/md-temp`
- `imagemin-cli`


Command:

```shell
npm i --save-dev @types/imagemin @types/imagemin-gifsicle @types/imagemin-jpegtran @types/imagemin-svgo @types/shell-quote @types/svg-parser execa globby rimraf rehype-stringify remark-parse remark-rehype shiki unified
```

JSON:

```json
"devDependencies": {
    "@johnlindquist/kit": "file:../.kit",
    "@kentcdodds/md-temp": "^8.0.1",
    "@types/imagemin": "^8.0.1",
    "@types/imagemin-gifsicle": "^7.0.1",
    "@types/imagemin-jpegtran": "^5.0.1",
    "@types/imagemin-svgo": "^10.0.2",
    "@types/shell-quote": "^1.7.1",
    "@types/svg-parser": "^2.0.3",
    "execa": "^8.0.1",
    "globby": "^13.2.2",
    "rehype-stringify": "^10.0.0",
    "remark-parse": "^11.0.0",
    "remark-rehype": "^11.1.0",
    "shiki": "^1.4.0",
    "unified": "^11.0.4"
  },
```
