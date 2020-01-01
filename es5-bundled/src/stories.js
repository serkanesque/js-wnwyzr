define(["../node_modules/@polymer/polymer/polymer-element.js","./shared-styles.js"],function(_polymerElement,_sharedStyles){"use strict";function _templateObject_ee907b102caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n\n    /* START STORIES */\n\n#stories {\n  width: 100%;\n    background-color:#fff;\n    height: auto;\npadding: 0 16px;\nbox-sizing: border-box;\nheight: 824px;\ndisplay: flex;\n    align-items: center;\n}\n\n#stories > div {\n  width:var(--app-content-wdith);\n  margin: 0 auto;\n        display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n}\n\n#stories > div > div:first-child {\n  width: 46%;\n    display: flex;\n    align-items: center;\n      position: relative;\n          justify-content: center;\n}\n\n#stories > div > div:last-child {\n  width: 64%;\n  background-color: var(--app-button-color);\npadding-top: 50.75%;\n  display: flex;\n  align-items: center;\n}\n\n#stories > div > div:first-child > div {\n  width: 115%;\n  color: white;\n  background-color: var(--app-primary-color);\n      position: absolute;\n      margin-left: 7.5%;\n}\n\n#stories > div > div:first-child div > div{\n  width: 100%;\n  color: white;\n  background-color: var(--app-primary-color);\n      position: relative;\n      margin-left: 0;\n          padding: 64px;\n    box-sizing: border-box;\n}\n\n#stories h5 {\n    background-color: var(--app-primary-color);\n    color: #fff;  \n    z-index: 10;  \n    margin-left: 715px;\n\n  }\n\n#stories h3 {\nfont-size: 28px;\nmargin: 0;\n  }\n\n  #stories span {\n      text-transform: uppercase;\n      font-size: 14px;\n      display: block;\n      line-height: 1.45em;\n  }\n\n\n @media only screen and (max-width: 1140px) {\n\n#stories > div > div:first-child div > div{\n padding: calc(64px - 2.5vw);\n  padding-top: calc(64px - 1vw);\n    padding-bottom: calc(64px - 1vw);\n        }\n\n#stories h3 {\n  font-size: 2.5vw\n  }\n#stories h5 {\nleft: calc((100vw - 160px) - 21.25% );\n    margin-left: 0;\n}\n\n }\n\n  @media only screen and (max-width: 768px) {\n#stories > div > div:first-child {\n      width: calc(100% - 64px);\n    order: 1;\n}\n\n#stories > div > div:last-child {\n    width: calc(100% - 64px);\n  }\n#stories > div > div:first-child > div {\n  width: 102%;\n}\n#stories > div {\nflex-wrap: wrap;\n  }\n#stories > div > div:last-child {\nwidth: calc(100% - 64px);\n    padding-top: 80.25%;\n  }\n#stories h5 {\nleft: auto;\n    margin-left: 7.5%;\n}\n\n}\n\n @media only screen and (max-width: 480px) {\n#stories {\n     padding: var(--app-mobile-padding);\n}\n\n#stories > div {\n\n    justify-content: center;\n}\n\n#stories > div > div:first-child > div {\n  position: relative;\n}\n\n#stories > div > div:last-child, #stories > div > div:first-child, #stories > div > div:first-child > div {\n  width: 100%;\n}\n#stories > div > div:first-child > div {\nmargin-left: 0;\nmargin-top: 32px;\n}\n\n#stories > div > div:last-child {\n      padding-top: 100%;\n}\n\n\n#stories h5 {  \nleft: auto;\n\n    margin-left: 0\n}\n }\n\n @media only screen and (max-width: 375px) {\n#stories {\n     padding: var(--app-mobile-small-padding);\n}\n}\n\n      /* END STORIES */\n\n\n\n\n      </style>\n  \n <div id=\"stories\">\n <div>\n <div>\n\n <div> \n <div><h3 class=\"small-headline\">\n\u201CI am a person who was helped by this organization. Before they gave me assistance, I was really struggling with this issue, but now my life is better.\u201D\n<span>BALKI, FARMER AND MOTHER IN NIGER</span></h3>\n</div>\n</div>\n\n\n </div><h5>Stories</h5>\n <div>\n\n </div>\n </div>\n </div>\n\n\n\n  \n\n\n    "]);_templateObject_ee907b102caa11ea91a843ae9cba1c4a=function _templateObject_ee907b102caa11ea91a843ae9cba1c4a(){return data};return data}var Stories=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(Stories,_PolymerElement);function Stories(){babelHelpers.classCallCheck(this,Stories);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Stories).apply(this,arguments))}babelHelpers.createClass(Stories,null,[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_ee907b102caa11ea91a843ae9cba1c4a())}}]);return Stories}(_polymerElement.PolymerElement);window.customElements.define("stories",Stories)});