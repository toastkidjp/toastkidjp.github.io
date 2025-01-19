/*
 * Copyright (c) 2025 toastkidjp.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompany this distribution.
 * The Eclipse Public License is available at http://www.eclipse.org/legal/epl-v10.html.
 */

/**
 * @author toastkidjp
 */
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
