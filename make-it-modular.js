const program = require('./mymodule.js')

program(process.argv[2], process.argv[3], (error, files) => {
       files.forEach((file) => {
        console.log(file);
    });
});