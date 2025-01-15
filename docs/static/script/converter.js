function encode() {
    const input = document.getElementById('input');
    const encodedTextValue = encodeURIComponent(input.value);
    document.getElementById('encoded').value = encodedTextValue;
}

function decode() {
    const encoded = document.getElementById('encoded');
    try {
        const decodedTextValue = decodeURIComponent(encoded.value);
        document.getElementById('input').value = decodedTextValue;
    } catch (e) {
        // > /dev/null
    }
}
function setInitialTime() {
    const now = Date.now();
    document.getElementById('unixtime').value = now;
    toDateTime();
}

function toDateTime() {
    const input = document.getElementById('unixtime');
    const encodedTextValue = new Date(Number(input.value));
    document.getElementById('datetime').value = encodedTextValue.toLocaleString();
}

function toUnixTime() {
    const encoded = document.getElementById('datetime');
    try {
        const decodedTextValue = Date.parse(encoded.value);
        document.getElementById('unixtime').value = decodedTextValue;
    } catch (e) {
        // > /dev/null
    }
}
