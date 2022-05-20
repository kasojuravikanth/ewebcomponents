

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

___$insertStyle(".package {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(134, 159, 174);\n  padding: 4px;\n}\n.package > h2 {\n  font-size: 2.5em;\n}");

var Package = function (Title, data) { return React.createElement("div", { className: "package" },
    Title,
    data); };

exports.default = Package;
//# sourceMappingURL=index.js.map
