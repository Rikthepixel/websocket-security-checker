const path = require("path");

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    distDir: "node_modules/.next",
    basePath: "/cswsh-checker",
    reactStrictMode: true,
    sassOptions: {
        includePaths: [
            path.join(__dirname, "styles")
        ]
    },
    
};