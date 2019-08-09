import React from 'react';

import { Code, Book, Link, Copy, Search } from 'react-feather';

export const getHostname = function(url) {
    if (url !== null) {
        const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
        if (match !== null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
            return match[2];
        }
    }

    return null;
};

export const pagination = function(c, m) {
    const current = c;
    const last = m;
    const delta = 2;
    const left = current - delta;
    const right = current + delta + 1;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= last; i++) {
        if (i === 1 || i === last || (i >= left && i < right)) {
            range.push(i);
        }
    }

    for (const i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
};

export const convertToArray = function(objArray) {
    console.log(objArray);
    const convertedArray = [];
    if (objArray !== undefined) {
        Object.keys(objArray).forEach(key => {
            objArray[key].push_key = key;
            convertedArray.push(objArray[key]);
        });
    }
    return convertedArray;
};

export function getReadingTime(text) {
    const timeObj = readingTime(text);
    return timeObj.text;
}

export function getIcon(name, size) {
    let iCon;
    if (name === 'APIs') {
        iCon = <Code size={size} />;
    } else if (name === 'Tutorials') {
        iCon = <Book size={size} />;
    } else if (name === 'Resources') {
        iCon = <Link size={size} />;
    } else if (name === 'Alternative') {
        iCon = <Copy size={size} />;
    } else if (name === 'findAPI') {
        iCon = <Search size={size} />;
    }
    return iCon;
}
