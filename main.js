const {crawlPage} = require('./crawl.js')

// Checks validity of input, and logs output
function main() {
    // Makes sure input is a valid URL
    if (process.argv.length < 3) {
        console.log("No URL provided")
        process.exit(1)
    };
    // Prevents more than one argument at a time
    if (process.argv.length > 3) {
        console.log("Too many command line arguments")
        process.exit(1)
    };
    const baseURL = process.argv[2]
    console.log(`Starting crawl of ${baseURL}`)
    crawlPage(baseURL)
};

main();