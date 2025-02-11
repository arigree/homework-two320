const readline = require("readline");
const fs = require("fs");
const path = require("path");

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("path", path.resolve("yoda*2"));

readLine.question("Name the folder: ", (dirName) => {
    const dirPath = path.join(__dirname, dirName);

    if(!fs.existsSync(dirPath)){
        fs.mkdirSync(dirPath);
        console.log(`Directory made. '${dirName}'`);
    }else{
        console.log("Something isn't right...")
    }

    readLine.question("Enter a file name bestie: ", (fileName) => {
        const filePath = path.join(dirPath, fileName);

        fs.writeFileSync(filePath, "Example");
        console.log(`File created. '${fileName}' inside '${dirName}'`);

        readLine.close();
    }); //10 minutes on a missing parenthesisises
})