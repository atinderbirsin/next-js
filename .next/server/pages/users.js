"use strict";
(() => {
var exports = {};
exports.id = 892;
exports.ids = [892];
exports.modules = {

/***/ 400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ users),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/user.js

function User({ user  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: user.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: user.name
            })
        ]
    });
}
/* harmony default export */ const components_user = (User);

;// CONCATENATED MODULE: ./pages/users.js


function UserList({ users  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "UserList Page"
            }),
            users.map((user)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_user, {
                        user: user
                    })
                }, user.id);
            })
        ]
    });
}
/* harmony default export */ const users = (UserList);
async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
        props: {
            users: data
        }
    };
}


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(400));
module.exports = __webpack_exports__;

})();