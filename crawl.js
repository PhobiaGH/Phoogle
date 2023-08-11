/* Normalize(consolidate to same string) URL's with differing strings, but same destination into 
a unified string while also stripping the protocol, and any trailing slashes from said string. */
function normalizeURL(urlString) {
    const urlGiven = new URL(urlString)
    const hostPath = `${urlGiven.hostname}${urlGiven.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1)
    };
    return hostPath
};

// Exports functions for use elsewhere in the app.
module.exports = {
    normalizeURL
};