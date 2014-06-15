# grunt-firetpl-compile

> Compiles .fire templates into HTML

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-firetpl-compile --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-firetpl-compile');
```

## The "firetpl-compile" task

### Overview
In your project's Gruntfile, add a section named `firetpl-compile` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'firetpl-compile': {
    dist: {
      options: {
        // Task-specific options go here.
      },
      src: ['templates/*.fire'],
      dest: 'precompiled.js'
    }
  }
});
```

### Options

#### options.verbose
Type: `Boolean`
Default value `false`

Output more infos


### Usage Examples

#### Default Options
In this example, the default options are used.

```js
grunt.initConfig({
  firetpl: {
    options: {},
    data: {},
    src: ['templates/*.fire'],
    dest: 'public/'
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
