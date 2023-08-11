const {JSDOM} = require('jsdom');

// Input for the URLs you wish to crawl
function getURLsFromHTML(htmlBody, baseURL) {
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (const element of linkElements) {
        if (element.href.slice(0, 1) === '/') {
            // Relative URL
            try {
                const urlGiven = new URL(`${baseURL}${element.href}`)
                urls.push(urlGiven.href)
            } catch (err) {
                console.log(`error with relative url: ${err.message}`)
            };
        } else {
            // Absolute URLs
            try {
                const urlGiven = new URL(element.href)
                urls.push(urlGiven.href)
            } catch (err) {
                console.log(`error with absolute url: ${err.message}`)
            };
        };
    };
    return urls
}

/* Normalize(consolidate to same string) URLs with differing strings, but same destination into 
a unified string while also stripping the protocol, and any trailing slashes from said string */
function normalizeURL(urlString) {
    const urlGiven = new URL(urlString)
    const hostPath = `${urlGiven.hostname}${urlGiven.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1)
    };
    return hostPath
};

// Exports functions for use elsewhere in the app
module.exports = {
    normalizeURL, getURLsFromHTML
};