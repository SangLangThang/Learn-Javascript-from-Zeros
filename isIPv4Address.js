// An IP address is a numerical label assigned to each device (e.g., computer, printer)
//  participating in a computer network that uses the Internet Protocol for communication. 
//  There are two versions of the Internet protocol, and thus two versions of addresses. 
//  One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.

function isIPv4Address(a) {
    let result = true
    a.split(".").length === 4 ? result = true : result = false
    a.split(".").map(function (e) {
        if (Number(e) < 0 || Number(e) > 255 || e.length === 0 || e.length > 4 || isNaN(e)) result = false
    })

    return result
}

function diff_isIPv4Address(s) {
    var r = s.split(".")
    return r.length === 4 && r.every(x => x != "" && !isNaN(x) && x >= 0 && x < 256)
}
