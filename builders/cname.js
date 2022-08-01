const fs = require("fs/promises");

const generate = async () => {
    const cwd = process.cwd();
    const packageJsonLocation = `${cwd}/package.json`;
    let packageContents = null;
    try {
        const packageFile = await fs.open(packageJsonLocation, "r");
        packageContents = await packageFile.readFile();
    } catch (err) {
        console.log("❌ CNAME: Failed to open/read package.json");
        process.exit(1);
    }

    let packageJSON = null;
    try {
        packageJSON = JSON.parse(packageContents.toString());
    } catch {
        console.log("❌ CNAME: JSON stringify failed");
        process.exit(1);
    }

    const homepage = packageJSON.homepage;
    if (!homepage) {
        console.log(`❌ CNAME: No homepage set in ${packageJsonLocation}`);
        process.exit(1);
    }

    let url;
    try {
        url = new URL(homepage);
    } catch {
        console.log("❌ CNAME: Invalid homepage");
        process.exit(1);
    }

    try {
        await fs.writeFile(`${cwd}/dist/CNAME`, url.href);
    } catch {
        console.log(`❌ CNAME: Failed to write ${url.href} to ${cwd}/dist/CNAME`);
        process.exit(1);
    }

    console.log(`✅ CNAME: file succesfully created\nWritten: ${url.href}`);
};

generate();