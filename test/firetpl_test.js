'use strict';

var grunt = require('grunt'),
    expect = require('expect.js');

describe('grunt-firetpl', function() {
    it('Should compile a .fire template into html', function() {
        var actual = grunt.file.read('tmp/test.html');
        var expected = grunt.file.read('test/expected/test.html');
        expect(expected).to.eql(actual);
    });

});
