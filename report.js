const fs  = require('fs/promises');

//Prints final report
async function printReport(pages) {
    console.log("============");
    console.log("REPORT");
    console.log("============");
    const sortedPages = sortPages(pages);
    for (const sortedPage of sortedPages) {
        const url = sortedPage[0]
        const hits = sortedPage[1]
        console.log(`Found ${hits} links to page: ${url}`)
    };
    console.log("============")
    console.log("END REPORT")
    console.log("============")
    
    // Creates new dir, saves links to links.txt
    var d = new Date();
    const dir = `./Crawled/${d}`;
    try {
        await fs.mkdir(dir)
        await fs.writeFile(`./${dir}/links.txt`, sortedPages.join("\r\n"))
    } catch (err) {
        console.log(`error with creating dir: ${err.message}`)
    };
};

// Sorts output for report from most hits, to least
function sortPages(pages) {
    const pagesArr = Object.entries(pages);
    pagesArr.sort((a,b) => {
        aHits = a[1]
        bHits = b[1]
        return b[1] - a[1]
    });
    return pagesArr;
};

// Exports function for use elsewhere in the app
module.exports = {
    sortPages, printReport
};