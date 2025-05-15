// This script will redirect to the blocked page with the desired URL
(function() {
    // Detects the URL being blocked
    var currentUrl = window.location.href;

    // You can customize the logic here to match your own conditions.
    // For example, if you want to redirect blocked URLs to a custom extension page:
    var blockedUrl = 'chrome-extension://jcdhmojfecjfmbdpchihbeilohgnbdci/blocked.html?url=' + encodeURIComponent(currentUrl);

    // Perform the redirection
    window.location.href = blockedUrl;
})();
