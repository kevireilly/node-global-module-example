node-global-module-example
==========================

A simple Node.js global module example that demonstrates how to quickly
and easily make your own global module that provides a command line utility
and can be required in other modules. Once created, they can easily be
installed by doing `npm install -g <package>` after publishing it to npm
or while providing with an acceptable [package](https://www.npmjs.org/doc/cli/npm-install.html).

The basic implementation relies on the [bin](https://www.npmjs.org/doc/package.json.html#bin)
specification in the `package.json`. This defines what command will execute
which script with the node interpreter. The main requirement is that the
executed script must have `#!/usr/bin/env node` at the top, but otherwise
it mostly operates like any other script.

## Install
May require `sudo` prepended to the command

    npm install -g ngme
     
## CLI utility
After installation, you should be able to run the bundled command from
the command line. It will accept the command argument `test_input` and
then ask you for your name. Your name will be passed to an example method
that will simply output your input.

    ngme test_input
    
## Module require
You can also `require` the module and call a method that will simply
output your provided input.

    var ngme = require('ngme');
    ngme.example('test_input');
    
An example module require can be found at `example/test.js`.
