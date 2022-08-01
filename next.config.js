const path = require("path");

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    distDir: "node_modules/.next",
    basePath: "/websocket-security-checker",
    reactStrictMode: true,
    sassOptions: {
        includePaths: [
            path.join(__dirname, "styles")
        ]
    },
    poweredByHeader: false,
    
};