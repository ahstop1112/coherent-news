(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "./src/containers/MainContainer.js":
/*!*****************************************!*\
  !*** ./src/containers/MainContainer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/cheungperry/development/weather-redux/src/containers/MainContainer.js: Support for the experimental syntax 'classProperties' isn't currently enabled (10:22):\\n\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mclass\\u001b[39m \\u001b[33mMainContainer\\u001b[39m \\u001b[36mextends\\u001b[39m \\u001b[33mComponent\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 10 | \\u001b[39m    static propTypes \\u001b[33m=\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                     \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m        ajaxStatus\\u001b[33m:\\u001b[39m \\u001b[33mPropTypes\\u001b[39m\\u001b[33m.\\u001b[39mobject\\u001b[33m.\\u001b[39misRequired\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m        fetchCurrentForecast\\u001b[33m:\\u001b[39m \\u001b[33mPropTypes\\u001b[39m\\u001b[33m.\\u001b[39mfunc\\u001b[33m.\\u001b[39misRequired\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m        fetchFiveDaysForecast\\u001b[33m:\\u001b[39m \\u001b[33mPropTypes\\u001b[39m\\u001b[33m.\\u001b[39mfunc\\u001b[33m.\\u001b[39misRequired\\u001b[0m\\n\\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\\n    at Object.raise (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:6420:17)\\n    at Object.expectPlugin (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:7778:18)\\n    at Object.parseClassProperty (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11013:12)\\n    at Object.pushClassProperty (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10978:30)\\n    at Object.parseClassMemberWithIsStatic (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10917:14)\\n    at Object.parseClassMember (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10851:10)\\n    at withTopicForbiddingContext (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10806:14)\\n    at Object.withTopicForbiddingContext (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9884:14)\\n    at Object.parseClassBody (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10783:10)\\n    at Object.parseClass (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10757:22)\\n    at Object.parseStatementContent (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10051:21)\\n    at Object.parseStatement (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10009:17)\\n    at Object.parseExportDeclaration (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11194:17)\\n    at Object.maybeParseExportDeclaration (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11150:31)\\n    at Object.parseExport (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11079:29)\\n    at Object.parseStatementContent (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10113:27)\\n    at Object.parseStatement (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10009:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10585:25)\\n    at Object.parseBlockBody (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:10572:10)\\n    at Object.parseTopLevel (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:9940:10)\\n    at Object.parse (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11447:17)\\n    at parse (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:11483:38)\\n    at parser (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\\n    at normalizeFile (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\\n    at runSync (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/cheungperry/development/weather-redux/node_modules/@babel/core/lib/transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/MainContainer.js\n");

/***/ })

}]);