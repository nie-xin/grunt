module.exports = function (grunt) {

    grunt.registerTask('default', 'Just say hello', function () {
        grunt.log.write('Hello from grunt');
    });

    grunt.registerTask('greet','Greeting', function (name) {
        grunt.log.write('Hi there, ' + name);
    });

    grunt.registerTask('addNumbers', 'Adding two numbers', function (first, second) {
        if (isNaN(Number(first))) {
            grunt.warn('The first argument must be a number');
        }
        var answer = Number(first) + Number(second);
        grunt.log.write(first + ' + ' + second + ' is ' + answer);
    });

    grunt.registerTask('all', 'Chaining tasks', ['default', 'greet:NIE', 'addNumbers:2:3']);

    grunt.registerTask('praise', 'Have Grunt say nice things about you',
                      function () {
                          var praise = [
                            "You're awesome",
                            "You're the best developer ever!",
                            "You are extremely attractive",
                            "Everyone loves you!"
                          ];
                          var pick = praise[(Math.floor(Math.random() * praise.length))];
                          grunt.log.writeln(pick);
                      });

    grunt.registerTask('multiplyNumbers', 'Multiplying two numbers',
        function (a, b) {
            grunt.log.write(a + ' * ' + b + ' is ' + (a*b));
        });

}
