const fs = require('fs');
const path = require('path');

function run(code){
    const cmd = code[0]
    if(cmd == "log"){
        console.log(code[1]);
    }
    if(cmd == "while"){
        while(code[1] != code[2]){
            if(code[1] == code[2]){
                break;
            }
            run(code[3]);
            code[1]++;
        }
    }
    if (cmd == "if") {
        if(code[1] == code[2]){
            run(code[3]);
        }
    }

}

const file = process.argv[2];
if (path.extname(file) !== '.ks') {
    console.error("Err : Only files with .ks extension are allowed.");
    process.exit(1);
}

const raw = fs.readFileSync(file, 'utf-8');
const code = JSON.parse(raw);
run(code);