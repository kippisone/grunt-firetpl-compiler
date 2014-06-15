/*
 * grunt-firetpl
 * 
 *
 * Copyright (c) 2014 Andi Oxidant
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

var FireTPL = require('firetpl');

module.exports = function(grunt) {


    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('firetpl-compile', 'Precompiler for FireTPL', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            verbose: false
        });

        //Set debug mode
        FireTPL.debug = options.verbose;

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            f.src.forEach(function(filepath) {
                grunt.log.ok('Read template', filepath);

                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } 
               
                var filename = path.basename(filepath, '.fire'),
                    outfile = path.join(f.dest, filename + '.html');

                grunt.log.ok('Write htmlfile', outfile);

                var tmpl = FireTPL.compile(grunt.file.read(f.src));

                // Write the destination file.
                grunt.file.write(outfile, tmpl(f.data));
            });
        });
    });
};
