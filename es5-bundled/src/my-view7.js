define(["exports","../shared_bundle_1.js"],function(_exports,_shared_bundle_){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0/* ignoreName */ /* skipSlots */});_exports.PaperInputHelper=_exports.PaperInputBehaviorImpl=_exports.PaperInputBehavior=_exports.PaperInputAddonBehavior=_exports.PaperButtonBehaviorImpl=_exports.PaperButtonBehavior=_exports.IronValidatableBehaviorMeta=_exports.IronValidatableBehavior=_exports.IronFormElementBehavior=_exports.IronA11yAnnouncer=_exports.$paperInputBehavior=_exports.$paperInputAddonBehavior=_exports.$paperButtonBehavior=_exports.$ironValidatableBehavior=_exports.$ironFormElementBehavior=_exports.$ironA11yAnnouncer=void 0;function _templateObject12_ee6302702caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n   <style include=\"normalize webflow styles\">\niron-image {\n  width: 100%;\n    height: 0;\n    padding-top: 333px;\n      background-color: #f5f5f5;\n}\n.full-width {\ndisplay: flex;\n    align-items: center !important;\n    height: auto !important;\n}\niron-form {\n  width: 100%;\n  margin: 60px 0;\n}\n\npaper-input {\n      margin-bottom: 16px;\n}\ninput {\n  display: inline-block;\n    width: 100%;\n    margin-bottom: 2px;\n    padding: 16px 20px;\n    background-color: #005eb8;\n    font-family: Mikado, sans-serif;\n    color: #fff;\n    font-size: 20px;\n    text-decoration: none;\n        border: none;\n        margin-top: 50px;\n}\nplastic-image {\n  width: 100%;\n    height: 740px;\n      background-color: #f5f5f5;\n}\n\n      </style>\n\n\n <div class=\"section top\">\n    <div class=\"div-block\">\n      <div class=\"div-block-2\">\n        <h1 class=\"heading _64px\">Work with us to end corporal punishment of children</h1>\n        <p class=\"paragraph\">If you are working to end corporal punishment in your country, or if you would like to, get in touch to see how we can help.</p>\n      </div>\n      <div class=\"div-block-3\">\n<plastic-image fade sizing=\"cover\" placeholder=\"/src/images/placeholder-m.png\" preload srcset=\"http://churchesfornon-violence.org/imgs/contact-us-hero.png\"></plastic-image>\n\n      </div>\n    </div>\n  </div>\n<div class=\"section-2 white\">\n    <div class=\"_1120px\">\n      <div class=\"div-block-4 narrow\">\n        <h2 class=\"heading-2 page-ttile\">Contact us</h2>\n          <iron-form id=\"form4\">\n      <form method=\"get\" action=\"/form/handler\">\n\n\n<paper-input required label=\"Your name *\"></paper-input>\n<paper-input required label=\"Your email address *\"></paper-input>\n<paper-input required label=\"Subject *\"></paper-input>\n<paper-textarea required label=\"Your message *\" rows=\"7\"></paper-textarea>\n  <input onclick=\"validate\" type=\"submit\" value=\"Submit\">\n\n\n      </form>\n    </iron-form>\n      </div>\n    </div>\n  </div>\n \n\n\n\n\n\n\n\n\n   \n\n\n\n\n\n\n\n\n\n\n\n    "]);_templateObject12_ee6302702caa11ea91a843ae9cba1c4a=function _templateObject12_ee6302702caa11ea91a843ae9cba1c4a(){return data};return data}function _templateObject11_ee6302702caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container no-label-float$=\"[[noLabelFloat]]\" always-float-label=\"[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]\" auto-validate$=\"[[autoValidate]]\" disabled$=\"[[disabled]]\" invalid=\"[[invalid]]\">\n\n      <label hidden$=\"[[!label]]\" aria-hidden=\"true\" for$=\"[[_inputId]]\" slot=\"label\">[[label]]</label>\n\n      <iron-autogrow-textarea class=\"paper-input-input\" slot=\"input\" id$=\"[[_inputId]]\" aria-labelledby$=\"[[_ariaLabelledBy]]\" aria-describedby$=\"[[_ariaDescribedBy]]\" bind-value=\"{{value}}\" invalid=\"{{invalid}}\" validator$=\"[[validator]]\" disabled$=\"[[disabled]]\" autocomplete$=\"[[autocomplete]]\" autofocus$=\"[[autofocus]]\" inputmode$=\"[[inputmode]]\" name$=\"[[name]]\" placeholder$=\"[[placeholder]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\" autocapitalize$=\"[[autocapitalize]]\" rows$=\"[[rows]]\" max-rows$=\"[[maxRows]]\" on-change=\"_onChange\"></iron-autogrow-textarea>\n\n      <template is=\"dom-if\" if=\"[[errorMessage]]\">\n        <paper-input-error aria-live=\"assertive\" slot=\"add-on\">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[charCounter]]\">\n        <paper-input-char-counter slot=\"add-on\"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n"]);_templateObject11_ee6302702caa11ea91a843ae9cba1c4a=function _templateObject11_ee6302702caa11ea91a843ae9cba1c4a(){return data};return data}function _templateObject10_ee6302702caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input's properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id=\"container\" no-label-float=\"[[noLabelFloat]]\" always-float-label=\"[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]\" auto-validate$=\"[[autoValidate]]\" disabled$=\"[[disabled]]\" invalid=\"[[invalid]]\">\n\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n\n      <label hidden$=\"[[!label]]\" aria-hidden=\"true\" for$=\"[[_inputId]]\" slot=\"label\">[[label]]</label>\n\n      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->\n      <iron-input bind-value=\"{{value}}\" slot=\"input\" class=\"input-element\" id$=\"[[_inputId]]\" maxlength$=\"[[maxlength]]\" allowed-pattern=\"[[allowedPattern]]\" invalid=\"{{invalid}}\" validator=\"[[validator]]\">\n        <input aria-labelledby$=\"[[_ariaLabelledBy]]\" aria-describedby$=\"[[_ariaDescribedBy]]\" disabled$=\"[[disabled]]\" title$=\"[[title]]\" type$=\"[[type]]\" pattern$=\"[[pattern]]\" required$=\"[[required]]\" autocomplete$=\"[[autocomplete]]\" autofocus$=\"[[autofocus]]\" inputmode$=\"[[inputmode]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\" min$=\"[[min]]\" max$=\"[[max]]\" step$=\"[[step]]\" name$=\"[[name]]\" placeholder$=\"[[placeholder]]\" readonly$=\"[[readonly]]\" list$=\"[[list]]\" size$=\"[[size]]\" autocapitalize$=\"[[autocapitalize]]\" autocorrect$=\"[[autocorrect]]\" on-change=\"_onChange\" tabindex$=\"[[tabIndex]]\" autosave$=\"[[autosave]]\" results$=\"[[results]]\" accept$=\"[[accept]]\" multiple$=\"[[multiple]]\">\n      </iron-input>\n\n      <slot name=\"suffix\" slot=\"suffix\"></slot>\n\n      <template is=\"dom-if\" if=\"[[errorMessage]]\">\n        <paper-input-error aria-live=\"assertive\" slot=\"add-on\">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[charCounter]]\">\n        <paper-input-char-counter slot=\"add-on\"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  "]);_templateObject10_ee6302702caa11ea91a843ae9cba1c4a=function _templateObject10_ee6302702caa11ea91a843ae9cba1c4a(){return data};return data}function _templateObject9_ee6302702caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      }\n\n      #a11yWrapper {\n        visibility: hidden;\n      }\n\n      :host([invalid]) #a11yWrapper {\n        visibility: visible;\n      }\n    </style>\n\n    <!--\n    If the paper-input-error element is directly referenced by an\n    `aria-describedby` attribute, such as when used as a paper-input add-on,\n    then applying `visibility: hidden;` to the paper-input-error element itself\n    does not hide the error.\n\n    For more information, see:\n    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description\n    -->\n    <div id=\"a11yWrapper\">\n      <slot></slot>\n    </div>\n"],["\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      }\n\n      #a11yWrapper {\n        visibility: hidden;\n      }\n\n      :host([invalid]) #a11yWrapper {\n        visibility: visible;\n      }\n    </style>\n\n    <!--\n    If the paper-input-error element is directly referenced by an\n    \\`aria-describedby\\` attribute, such as when used as a paper-input add-on,\n    then applying \\`visibility: hidden;\\` to the paper-input-error element itself\n    does not hide the error.\n\n    For more information, see:\n    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description\n    -->\n    <div id=\"a11yWrapper\">\n      <slot></slot>\n    </div>\n"]);_templateObject9_ee6302702caa11ea91a843ae9cba1c4a=function _templateObject9_ee6302702caa11ea91a843ae9cba1c4a(){return data};return data}function _templateObject8_ee6302702caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n        @apply --paper-input-container;\n      }\n\n      :host([inline]) {\n        display: inline-block;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        opacity: 0.33;\n\n        @apply --paper-input-container-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .floated-label-placeholder {\n        @apply --paper-font-caption;\n      }\n\n      .underline {\n        height: 2px;\n        position: relative;\n      }\n\n      .focused-line {\n        @apply --layout-fit;\n        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n        -webkit-transform: scale3d(0,1,1);\n        transform: scale3d(0,1,1);\n\n        @apply --paper-input-container-underline-focus;\n      }\n\n      .underline.is-highlighted .focused-line {\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .underline.is-invalid .focused-line {\n        border-color: var(--paper-input-container-invalid-color, var(--error-color));\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .unfocused-line {\n        @apply --layout-fit;\n        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline;\n      }\n\n      :host([disabled]) .unfocused-line {\n        border-bottom: 1px dashed;\n        border-color: var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline-disabled;\n      }\n\n      .input-wrapper {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n      }\n\n      .input-content {\n        @apply --layout-flex-auto;\n        @apply --layout-relative;\n        max-width: 100%;\n      }\n\n      .input-content ::slotted(label),\n      .input-content ::slotted(.paper-input-label) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        font: inherit;\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n        -webkit-transition: -webkit-transform 0.25s, width 0.25s;\n        transition: transform 0.25s, width 0.25s;\n        -webkit-transform-origin: left top;\n        transform-origin: left top;\n        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */\n        min-height: 1px;\n\n        @apply --paper-font-common-nowrap;\n        @apply --paper-font-subhead;\n        @apply --paper-input-container-label;\n        @apply --paper-transition-easing;\n      }\n\n      .input-content.label-is-floating ::slotted(label),\n      .input-content.label-is-floating ::slotted(.paper-input-label) {\n        -webkit-transform: translateY(-75%) scale(0.75);\n        transform: translateY(-75%) scale(0.75);\n\n        /* Since we scale to 75/100 of the size, we actually have 100/75 of the\n        original space now available */\n        width: 133%;\n\n        @apply --paper-input-container-label-floating;\n      }\n\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {\n        right: 0;\n        left: auto;\n        -webkit-transform-origin: right top;\n        transform-origin: right top;\n      }\n\n      .input-content.label-is-highlighted ::slotted(label),\n      .input-content.label-is-highlighted ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n\n        @apply --paper-input-container-label-focus;\n      }\n\n      .input-content.is-invalid ::slotted(label),\n      .input-content.is-invalid ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .input-content.label-is-hidden ::slotted(label),\n      .input-content.label-is-hidden ::slotted(.paper-input-label) {\n        visibility: hidden;\n      }\n\n      .input-content ::slotted(input),\n      .input-content ::slotted(iron-input),\n      .input-content ::slotted(textarea),\n      .input-content ::slotted(iron-autogrow-textarea),\n      .input-content ::slotted(.paper-input-input) {\n        @apply --paper-input-container-shared-input-style;\n        /* The apply shim doesn't apply the nested color custom property,\n          so we have to re-apply it here. */\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        @apply --paper-input-container-input;\n      }\n\n      .input-content ::slotted(input)::-webkit-outer-spin-button,\n      .input-content ::slotted(input)::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      .input-content.focused ::slotted(input),\n      .input-content.focused ::slotted(iron-input),\n      .input-content.focused ::slotted(textarea),\n      .input-content.focused ::slotted(iron-autogrow-textarea),\n      .input-content.focused ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-focus;\n      }\n\n      .input-content.is-invalid ::slotted(input),\n      .input-content.is-invalid ::slotted(iron-input),\n      .input-content.is-invalid ::slotted(textarea),\n      .input-content.is-invalid ::slotted(iron-autogrow-textarea),\n      .input-content.is-invalid ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-invalid;\n      }\n\n      .prefix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n        @apply --paper-input-prefix;\n      }\n\n      .suffix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n\n        @apply --paper-input-suffix;\n      }\n\n      /* Firefox sets a min-width on the input, which can cause layout issues */\n      .input-content ::slotted(input) {\n        min-width: 0;\n      }\n\n      .input-content ::slotted(textarea) {\n        resize: none;\n      }\n\n      .add-on-content {\n        position: relative;\n      }\n\n      .add-on-content.is-invalid ::slotted(*) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .add-on-content.is-highlighted ::slotted(*) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n    </style>\n\n    <div class=\"floated-label-placeholder\" aria-hidden=\"true\" hidden=\"[[noLabelFloat]]\">&nbsp;</div>\n\n    <div class=\"input-wrapper\">\n      <span class=\"prefix\"><slot name=\"prefix\"></slot></span>\n\n      <div class$=\"[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]\" id=\"labelAndInputContainer\">\n        <slot name=\"label\"></slot>\n        <slot name=\"input\"></slot>\n      </div>\n\n      <span class=\"suffix\"><slot name=\"suffix\"></slot></span>\n    </div>\n\n    <div class$=\"[[_computeUnderlineClass(focused,invalid)]]\">\n      <div class=\"unfocused-line\"></div>\n      <div class=\"focused-line\"></div>\n    </div>\n\n    <div class$=\"[[_computeAddOnContentClass(focused,invalid)]]\">\n      <slot name=\"add-on\"></slot>\n    </div>\n"]);_templateObject8_ee6302702caa11ea91a843ae9cba1c4a=function _templateObject8_ee6302702caa11ea91a843ae9cba1c4a(){return data};return data}function _templateObject7_ee6302702caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      --paper-input-container-shared-input-style: {\n        position: relative; /* to make a stacking context */\n        outline: none;\n        box-shadow: none;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        max-width: 100%;\n        background: transparent;\n        border: none;\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        -webkit-appearance: none;\n        text-align: inherit;\n        vertical-align: var(--paper-input-container-input-align, bottom);\n\n        @apply --paper-font-subhead;\n      };\n    }\n  </style>\n</custom-style>\n"]);_templateObject7_ee6302702caa11ea91a843ae9cba1c4a=function _templateObject7_ee6302702caa11ea91a843ae9cba1c4a(){return data};return data}function _templateObject6_ee6302702caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        float: right;\n\n        @apply --paper-font-caption;\n        @apply --paper-input-char-counter;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:dir(rtl)) {\n        float: left;\n      }\n    </style>\n\n    <span>[[_charCounterStr]]</span>\n"]);_templateObject6_ee6302702caa11ea91a843ae9cba1c4a=function _templateObject6_ee6302702caa11ea91a843ae9cba1c4a(){return data};return data}function _templateObject5_ee6302702caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n  <style include=\"paper-material-styles\">\n    /* Need to specify the same specificity as the styles imported from paper-material. */\n    :host {\n      @apply --layout-inline;\n      @apply --layout-center-center;\n      position: relative;\n      box-sizing: border-box;\n      min-width: 5.14em;\n      margin: 0 0.29em;\n      background: transparent;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      -webkit-tap-highlight-color: transparent;\n      font: inherit;\n      text-transform: uppercase;\n      outline-width: 0;\n      border-radius: 3px;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      cursor: pointer;\n      z-index: 0;\n      padding: 0.7em 0.57em;\n\n      @apply --paper-font-common-base;\n      @apply --paper-button;\n    }\n\n    :host([elevation=\"1\"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation=\"2\"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation=\"3\"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation=\"4\"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation=\"5\"]) {\n      @apply --paper-material-elevation-5;\n    }\n\n    :host([hidden]) {\n      display: none !important;\n    }\n\n    :host([raised].keyboard-focus) {\n      font-weight: bold;\n      @apply --paper-button-raised-keyboard-focus;\n    }\n\n    :host(:not([raised]).keyboard-focus) {\n      font-weight: bold;\n      @apply --paper-button-flat-keyboard-focus;\n    }\n\n    :host([disabled]) {\n      background: none;\n      color: #a8a8a8;\n      cursor: auto;\n      pointer-events: none;\n\n      @apply --paper-button-disabled;\n    }\n\n    :host([disabled][raised]) {\n      background: #eaeaea;\n    }\n\n\n    :host([animated]) {\n      @apply --shadow-transition;\n    }\n\n    paper-ripple {\n      color: var(--paper-button-ink-color);\n    }\n  </style>\n\n  <slot></slot>"]);_templateObject5_ee6302702caa11ea91a843ae9cba1c4a=function _templateObject5_ee6302702caa11ea91a843ae9cba1c4a(){return data};return data}function _templateObject4_ee6302702caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n    </style>\n    <slot id=\"content\"></slot>\n"]);_templateObject4_ee6302702caa11ea91a843ae9cba1c4a=function _templateObject4_ee6302702caa11ea91a843ae9cba1c4a(){return data};return data}function _templateObject3_ee6302702caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n\n    <!-- This form is used to collect the elements that should be submitted -->\n    <slot></slot>\n\n    <!-- This form is used for submission -->\n    <form id=\"helper\" action$=\"[[action]]\" method$=\"[[method]]\" enctype$=\"[[enctype]]\"></form>\n"]);_templateObject3_ee6302702caa11ea91a843ae9cba1c4a=function _templateObject3_ee6302702caa11ea91a843ae9cba1c4a(){return data};return data}function _templateObject2_ee6302702caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 400px;\n        border: 1px solid;\n        padding: 2px;\n        -moz-appearance: textarea;\n        -webkit-appearance: textarea;\n        overflow: hidden;\n      }\n\n      .mirror-text {\n        visibility: hidden;\n        word-wrap: break-word;\n        @apply --iron-autogrow-textarea;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n\n      textarea {\n        position: relative;\n        outline: none;\n        border: none;\n        resize: none;\n        background: inherit;\n        color: inherit;\n        /* see comments in template */\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        font-family: inherit;\n        line-height: inherit;\n        text-align: inherit;\n        @apply --iron-autogrow-textarea;\n      }\n\n      textarea::-webkit-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea::-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-ms-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n    </style>\n\n    <!-- the mirror sizes the input/textarea so it grows with typing -->\n    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->\n    <div id=\"mirror\" class=\"mirror-text\" aria-hidden=\"true\">&nbsp;</div>\n\n    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->\n    <div class=\"textarea-container fit\">\n      <textarea id=\"textarea\" name$=\"[[name]]\" aria-label$=\"[[label]]\" autocomplete$=\"[[autocomplete]]\" autofocus$=\"[[autofocus]]\" autocapitalize$=\"[[autocapitalize]]\" inputmode$=\"[[inputmode]]\" placeholder$=\"[[placeholder]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" disabled$=\"[[disabled]]\" rows$=\"[[rows]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\"></textarea>\n    </div>\n"]);_templateObject2_ee6302702caa11ea91a843ae9cba1c4a=function _templateObject2_ee6302702caa11ea91a843ae9cba1c4a(){return data};return data}function _templateObject_ee6302702caa11ea91a843ae9cba1c4a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$=\"[[mode]]\">[[_text]]</div>\n"]);_templateObject_ee6302702caa11ea91a843ae9cba1c4a=function _templateObject_ee6302702caa11ea91a843ae9cba1c4a(){return data};return data}/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ /*
     FIXME(polymer-modulizer): the above comments were extracted
     from HTML and may be out of place here. Review them and
     then delete this comment!
   */;var IronA11yAnnouncer=(0,_shared_bundle_.Polymer)({/** @override */_template:(0,_shared_bundle_.html$2)(_templateObject_ee6302702caa11ea91a843ae9cba1c4a()),is:"iron-a11y-announcer",properties:{/**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */mode:{type:String,value:"polite"},_text:{type:String,value:""}},/** @override */created:function created(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=this}document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},/**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */announce:function announce(text){this._text="";this.async(function(){this._text=text},100)},_onIronAnnounce:function _onIronAnnounce(event){if(event.detail&&event.detail.text){this.announce(event.detail.text)}}});_exports.IronA11yAnnouncer=IronA11yAnnouncer;IronA11yAnnouncer.instance=null;IronA11yAnnouncer.requestAvailability=function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=document.createElement("iron-a11y-announcer")}document.head.appendChild(IronA11yAnnouncer.instance)};var ironA11yAnnouncer={IronA11yAnnouncer:IronA11yAnnouncer};_exports.$ironA11yAnnouncer=ironA11yAnnouncer;(0,_shared_bundle_.Polymer)({is:"iron-request",/** @override */_template:null,hostAttributes:{hidden:!0},properties:{/**
     * A reference to the XMLHttpRequest instance used to generate the
     * network request.
     *
     * @type {XMLHttpRequest}
     */xhr:{type:Object,notify:!0,readOnly:!0,value:function value(){return new XMLHttpRequest}},/**
     * A reference to the parsed response body, if the `xhr` has completely
     * resolved.
     *
     * @type {*}
     * @default null
     */response:{type:Object,notify:!0,readOnly:!0,value:function value(){return null}},/**
     * A reference to the status code, if the `xhr` has completely resolved.
     */status:{type:Number,notify:!0,readOnly:!0,value:0},/**
     * A reference to the status text, if the `xhr` has completely resolved.
     */statusText:{type:String,notify:!0,readOnly:!0,value:""},/**
     * A promise that resolves when the `xhr` response comes back, or rejects
     * if there is an error before the `xhr` completes.
     * The resolve callback is called with the original request as an argument.
     * By default, the reject callback is called with an `Error` as an argument.
     * If `rejectWithRequest` is true, the reject callback is called with an
     * object with two keys: `request`, the original request, and `error`, the
     * error object.
     *
     * @type {Promise}
     */completes:{type:Object,readOnly:!0,notify:!0,value:function value(){return new Promise(function(resolve,reject){this.resolveCompletes=resolve;this.rejectCompletes=reject}.bind(this))}},/**
     * An object that contains progress information emitted by the XHR if
     * available.
     *
     * @default {}
     */progress:{type:Object,notify:!0,readOnly:!0,value:function value(){return{}}},/**
     * Aborted will be true if an abort of the request is attempted.
     */aborted:{type:Boolean,notify:!0,readOnly:!0,value:/* ignoreName */!1/* skipSlots */ /* skipSlots */},/**
     * Errored will be true if the browser fired an error event from the
     * XHR object (mainly network errors).
     */errored:{type:Boolean,notify:!0,readOnly:!0,value:!1},/**
     * TimedOut will be true if the XHR threw a timeout event.
     */timedOut:{type:Boolean,notify:!0,readOnly:!0,value:!1}},/**
   * Succeeded is true if the request succeeded. The request succeeded if it
   * loaded without error, wasn't aborted, and the status code is ≥ 200, and
   * < 300, or if the status code is 0.
   *
   * The status code 0 is accepted as a success because some schemes - e.g.
   * file:// - don't provide status codes.
   *
   * @return {boolean}
   */get succeeded(){if(this.errored||this.aborted||this.timedOut){return!1}var status=this.xhr.status||0;// Note: if we are using the file:// protocol, the status code will be 0
// for all outcomes (successful or otherwise).
return 0===status||200<=status&&300>status},/**
   * Sends an HTTP request to the server and returns a promise (see the
   * `completes` property for details).
   *
   * The handling of the `body` parameter will vary based on the Content-Type
   * header. See the docs for iron-ajax's `body` property for details.
   *
   * @param {{
   *   url: string,
   *   method: (string|undefined),
   *   async: (boolean|undefined),
   *   body:
   * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
   *   headers: (Object|undefined),
   *   handleAs: (string|undefined),
   *   jsonPrefix: (string|undefined),
   *   withCredentials: (boolean|undefined),
   *   timeout: (number|undefined),
   *   rejectWithRequest: (boolean|undefined)}} options -
   *   - url The url to which the request is sent.
   *   - method The HTTP method to use, default is GET.
   *   - async By default, all requests are sent asynchronously. To send
   * synchronous requests, set to false.
   *   -  body The content for the request body for POST method.
   *   -  headers HTTP request headers.
   *   -  handleAs The response type. Default is 'text'.
   *   -  withCredentials Whether or not to send credentials on the request.
   * Default is false.
   *   -  timeout - Timeout for request, in milliseconds.
   *   -  rejectWithRequest Set to true to include the request object with
   * promise rejections.
   * @return {Promise}
   */send:function send(options){var xhr=this.xhr;if(0<xhr.readyState){return null}xhr.addEventListener("progress",function(progress){this._setProgress({lengthComputable:progress.lengthComputable,loaded:progress.loaded,total:progress.total});// Webcomponents v1 spec does not fire *-changed events when not connected
this.fire("iron-request-progress-changed",{value:this.progress})}.bind(this));xhr.addEventListener("error",function(error){this._setErrored(!0);this._updateStatus();var response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("timeout",function(error){this._setTimedOut(!0);this._updateStatus();var response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("abort",function(){this._setAborted(!0);this._updateStatus();var error=new Error("Request aborted."),response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));// Called after all of the above.
xhr.addEventListener("loadend",function(){this._updateStatus();this._setResponse(this.parseResponse());if(!this.succeeded){var error=new Error("The request failed with status code: "+this.xhr.status),response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response);return}this.resolveCompletes(this)}.bind(this));this.url=options.url;var isXHRAsync=!1!==options.async;xhr.open(options.method||"GET",options.url,isXHRAsync);var acceptType={json:"application/json",text:"text/plain",html:"text/html",xml:"application/xml",arraybuffer:"application/octet-stream"}[options.handleAs],headers=options.headers||Object.create(null),newHeaders=Object.create(null);for(var key in headers){newHeaders[key.toLowerCase()]=headers[key]}headers=newHeaders;if(acceptType&&!headers.accept){headers.accept=acceptType}Object.keys(headers).forEach(function(requestHeader){if(/[A-Z]/.test(requestHeader)){_shared_bundle_.Base._error("Headers must be lower case, got",requestHeader)}xhr.setRequestHeader(requestHeader,headers[requestHeader])},this);if(isXHRAsync){xhr.timeout=options.timeout||0;var handleAs=options.handleAs;// If a JSON prefix is present, the responseType must be 'text' or the
// browser won’t be able to parse the response.
if(!!options.jsonPrefix||!handleAs){handleAs="text"}// In IE, `xhr.responseType` is an empty string when the response
// returns. Hence, caching it as `xhr._responseType`.
xhr.responseType=xhr._responseType=handleAs;// Cache the JSON prefix, if it exists.
if(!!options.jsonPrefix){xhr._jsonPrefix=options.jsonPrefix}}xhr.withCredentials=!!options.withCredentials;var body=this._encodeBodyObject(options.body,headers["content-type"]);xhr.send(/**
                 @type {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|
                         null|string|undefined}
               */body);return this.completes},/**
   * Attempts to parse the response body of the XHR. If parsing succeeds,
   * the value returned will be deserialized based on the `responseType`
   * set on the XHR.
   *
   * @return {*} The parsed response,
   * or undefined if there was an empty response or parsing failed.
   */parseResponse:function parseResponse(){var xhr=this.xhr,responseType=xhr.responseType||xhr._responseType,preferResponseText=!this.xhr.responseType,prefixLen=xhr._jsonPrefix&&xhr._jsonPrefix.length||0;try{switch(responseType){case"json":// If the xhr object doesn't have a natural `xhr.responseType`,
// we can assume that the browser hasn't parsed the response for us,
// and so parsing is our responsibility. Likewise if response is
// undefined, as there's no way to encode undefined in JSON.
if(preferResponseText||xhr.response===void 0){// Try to emulate the JSON section of the response body section of
// the spec: https://xhr.spec.whatwg.org/#response-body
// That is to say, we try to parse as JSON, but if anything goes
// wrong return null.
try{return JSON.parse(xhr.responseText)}catch(_){console.warn("Failed to parse JSON sent from "+xhr.responseURL);return null}}return xhr.response;case"xml":return xhr.responseXML;case"blob":case"document":case"arraybuffer":return xhr.response;case"text":default:{// If `prefixLen` is set, it implies the response should be parsed
// as JSON once the prefix of length `prefixLen` is stripped from
// it. Emulate the behavior above where null is returned on failure
// to parse.
if(prefixLen){try{return JSON.parse(xhr.responseText.substring(prefixLen))}catch(_){console.warn("Failed to parse JSON sent from "+xhr.responseURL);return null}}return xhr.responseText}}}catch(e){this.rejectCompletes(new Error("Could not parse response. "+e.message))}},/**
   * Aborts the request.
   */abort:function abort(){this._setAborted(!0);this.xhr.abort()},/**
   * @param {*} body The given body of the request to try and encode.
   * @param {?string} contentType The given content type, to infer an encoding
   *     from.
   * @return {*} Either the encoded body as a string, if successful,
   *     or the unaltered body object if no encoding could be inferred.
   */_encodeBodyObject:function _encodeBodyObject(body,contentType){if("string"==typeof body){return body;// Already encoded.
}var bodyObj=/** @type {Object} */body;switch(contentType){case"application/json":return JSON.stringify(bodyObj);case"application/x-www-form-urlencoded":return this._wwwFormUrlEncode(bodyObj);}return body},/**
   * @param {Object} object The object to encode as x-www-form-urlencoded.
   * @return {string} .
   */_wwwFormUrlEncode:function _wwwFormUrlEncode(object){if(!object){return""}var pieces=[];Object.keys(object).forEach(function(key){// TODO(rictic): handle array values here, in a consistent way with
//   iron-ajax params.
pieces.push(this._wwwFormUrlEncodePiece(key)+"="+this._wwwFormUrlEncodePiece(object[key]))},this);return pieces.join("&")},/**
   * @param {*} str A key or value to encode as x-www-form-urlencoded.
   * @return {string} .
   */_wwwFormUrlEncodePiece:function _wwwFormUrlEncodePiece(str){// Spec says to normalize newlines to \r\n and replace %20 spaces with +.
// jQuery does this as well, so this is likely to be widely compatible.
if(null===str||str===void 0||!str.toString){return""}return encodeURIComponent(str.toString().replace(/\r?\n/g,"\r\n")).replace(/%20/g,"+")},/**
   * Updates the status code and status text.
   */_updateStatus:function _updateStatus(){this._setStatus(this.xhr.status);this._setStatusText(this.xhr.statusText===void 0?"":this.xhr.statusText)}});(0,_shared_bundle_.Polymer)({is:"iron-ajax",/** @override */_template:null,/**
   * Fired before a request is sent.
   *
   * @event iron-ajax-presend
   */ /**
       * Fired when a request is sent.
       *
       * @event request
       */ /**
           * Fired when a request is sent.
           *
           * @event iron-ajax-request
           */ /**
               * Fired when a response is received.
               *
               * @event response
               */ /**
                   * Fired when a response is received.
                   *
                   * @event iron-ajax-response
                   */ /**
                       * Fired when an error is received.
                       *
                       * @event error
                       */ /**
                           * Fired when an error is received.
                           *
                           * @event iron-ajax-error
                           */hostAttributes:{hidden:!0},properties:{/**
     * The URL target of the request.
     */url:{type:String},/**
     * An object that contains query parameters to be appended to the
     * specified `url` when generating a request. If you wish to set the body
     * content when making a POST request, you should use the `body` property
     * instead.
     */params:{type:Object,value:function value(){return{}}},/**
     * The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.
     * Default is 'GET'.
     */method:{type:String,value:"GET"},/**
     * HTTP request headers to send.
     *
     * Example:
     *
     *     <iron-ajax
     *         auto
     *         url="http://somesite.com"
     *         headers='{"X-Requested-With": "XMLHttpRequest"}'
     *         handle-as="json"></iron-ajax>
     *
     * Note: setting a `Content-Type` header here will override the value
     * specified by the `contentType` property of this element.
     */headers:{type:Object,value:function value(){return{}}},/**
     * Content type to use when sending data. If the `contentType` property
     * is set and a `Content-Type` header is specified in the `headers`
     * property, the `headers` property value will take precedence.
     *
     * Varies the handling of the `body` param.
     */contentType:{type:String,value:null},/**
     * Body content to send with the request, typically used with "POST"
     * requests.
     *
     * If body is a string it will be sent unmodified.
     *
     * If Content-Type is set to a value listed below, then
     * the body will be encoded accordingly.
     *
     *    * `content-type="application/json"`
     *      * body is encoded like `{"foo":"bar baz","x":1}`
     *    * `content-type="application/x-www-form-urlencoded"`
     *      * body is encoded like `foo=bar+baz&x=1`
     *
     * Otherwise the body will be passed to the browser unmodified, and it
     * will handle any encoding (e.g. for FormData, Blob, ArrayBuffer).
     *
     * @type
     * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object)
     */body:{type:Object,value:null},/**
     * Toggle whether XHR is synchronous or asynchronous. Don't change this
     * to true unless You Know What You Are Doing™.
     */sync:{type:Boolean,value:!1},/**
     * Specifies what data to store in the `response` property, and
     * to deliver as `event.detail.response` in `response` events.
     *
     * One of:
     *
     *    `text`: uses `XHR.responseText`.
     *
     *    `xml`: uses `XHR.responseXML`.
     *
     *    `json`: uses `XHR.responseText` parsed as JSON.
     *
     *    `arraybuffer`: uses `XHR.response`.
     *
     *    `blob`: uses `XHR.response`.
     *
     *    `document`: uses `XHR.response`.
     */handleAs:{type:String,value:"json"},/**
     * Set the withCredentials flag on the request.
     */withCredentials:{type:Boolean,value:!1},/**
     * Set the timeout flag on the request.
     */timeout:{type:Number,value:0},/**
     * If true, automatically performs an Ajax request when either `url` or
     * `params` changes.
     */auto:{type:Boolean,value:!1},/**
     * If true, error messages will automatically be logged to the console.
     */verbose:{type:Boolean,value:!1},/**
     * The most recent request made by this iron-ajax element.
     *
     * @type {Object|undefined}
     */lastRequest:{type:Object,notify:!0,readOnly:!0},/**
     * The `progress` property of this element's `lastRequest`.
     *
     * @type {Object|undefined}
     */lastProgress:{type:Object,notify:!0,readOnly:!0},/**
     * True while lastRequest is in flight.
     */loading:{type:Boolean,notify:!0,readOnly:!0},/**
     * lastRequest's response.
     *
     * Note that lastResponse and lastError are set when lastRequest finishes,
     * so if loading is true, then lastResponse and lastError will correspond
     * to the result of the previous request.
     *
     * The type of the response is determined by the value of `handleAs` at
     * the time that the request was generated.
     *
     * @type {Object}
     */lastResponse:{type:Object,notify:!0,readOnly:!0},/**
     * lastRequest's error, if any.
     *
     * @type {Object}
     */lastError:{type:Object,notify:!0,readOnly:!0},/**
     * An Array of all in-flight requests originating from this iron-ajax
     * element.
     */activeRequests:{type:Array,notify:!0,readOnly:!0,value:function value(){return[]}},/**
     * Length of time in milliseconds to debounce multiple automatically
     * generated requests.
     */debounceDuration:{type:Number,value:0,notify:!0},/**
     * Prefix to be stripped from a JSON response before parsing it.
     *
     * In order to prevent an attack using CSRF with Array responses
     * (http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx/)
     * many backends will mitigate this by prefixing all JSON response bodies
     * with a string that would be nonsensical to a JavaScript parser.
     *
     */jsonPrefix:{type:String,value:""},/**
     * By default, iron-ajax's events do not bubble. Setting this attribute will
     * cause its request and response events as well as its iron-ajax-request,
     * -response,  and -error events to bubble to the window object. The vanilla
     * error event never bubbles when using shadow dom even if this.bubbles is
     * true because a scoped flag is not passed with it (first link) and because
     * the shadow dom spec did not used to allow certain events, including
     * events named error, to leak outside of shadow trees (second link).
     * https://www.w3.org/TR/shadow-dom/#scoped-flag
     * https://www.w3.org/TR/2015/WD-shadow-dom-20151215/#events-that-are-not-leaked-into-ancestor-trees
     */bubbles:{type:Boolean,value:!1},/**
     * Changes the [`completes`](iron-request#property-completes) promise chain
     * from `generateRequest` to reject with an object
     * containing the original request, as well an error message.
     * If false (default), the promise rejects with an error message only.
     */rejectWithRequest:{type:Boolean,value:!1},_boundHandleResponse:{type:Function,value:function value(){return this._handleResponse.bind(this)}}},observers:["_requestOptionsChanged(url, method, params.*, headers, contentType, "+"body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)"],/** @override */created:function created(){this._boundOnProgressChanged=this._onProgressChanged.bind(this)},/**
   * The query string that should be appended to the `url`, serialized from
   * the current value of `params`.
   *
   * @return {string}
   */get queryString(){var queryParts=[],param,value;for(param in this.params){value=this.params[param];param=window.encodeURIComponent(param);if(Array.isArray(value)){for(var i=0;i<value.length;i++){queryParts.push(param+"="+window.encodeURIComponent(value[i]))}}else if(null!==value){queryParts.push(param+"="+window.encodeURIComponent(value))}else{queryParts.push(param)}}return queryParts.join("&")},/**
   * The `url` with query string (if `params` are specified), suitable for
   * providing to an `iron-request` instance.
   *
   * @return {string}
   */get requestUrl(){var queryString=this.queryString,url=this.url||"";if(queryString){var bindingChar=0<=url.indexOf("?")?"&":"?";return url+bindingChar+queryString}return url},/**
   * An object that maps header names to header values, first applying the
   * the value of `Content-Type` and then overlaying the headers specified
   * in the `headers` property.
   *
   * @return {Object}
   */get requestHeaders(){var headers={},contentType=this.contentType;if(null==contentType&&"string"===typeof this.body){contentType="application/x-www-form-urlencoded"}if(contentType){headers["content-type"]=contentType}var header;if("object"===babelHelpers.typeof(this.headers)){for(header in this.headers){headers[header]=this.headers[header].toString()}}return headers},_onProgressChanged:function _onProgressChanged(event){this._setLastProgress(event.detail.value)},/**
   * Request options suitable for generating an `iron-request` instance based
   * on the current state of the `iron-ajax` instance's properties.
   *
   * @return {{
   *   url: string,
   *   method: (string|undefined),
   *   async: (boolean|undefined),
   *   body:
   * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
   *   headers: (Object|undefined),
   *   handleAs: (string|undefined),
   *   jsonPrefix: (string|undefined),
   *   withCredentials: (boolean|undefined)}}
   */toRequestOptions:function toRequestOptions(){return{url:this.requestUrl||"",method:this.method,headers:this.requestHeaders,body:this.body,async:!this.sync,handleAs:this.handleAs,jsonPrefix:this.jsonPrefix,withCredentials:this.withCredentials,timeout:this.timeout,rejectWithRequest:this.rejectWithRequest}},/**
   * Performs an AJAX request to the specified URL.
   *
   * @return {!IronRequestElement}
   */generateRequest:function generateRequest(){var request=/** @type {!IronRequestElement} */document.createElement("iron-request"),requestOptions=this.toRequestOptions();this.push("activeRequests",request);request.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this,request)).then(this._discardRequest.bind(this,request));var evt=this.fire("iron-ajax-presend",{request:request,options:requestOptions},{bubbles:this.bubbles,cancelable:!0});if(evt.defaultPrevented){request.abort();request.rejectCompletes(request);return request}if(this.lastRequest){this.lastRequest.removeEventListener("iron-request-progress-changed",this._boundOnProgressChanged)}request.addEventListener("iron-request-progress-changed",this._boundOnProgressChanged);request.send(requestOptions);this._setLastProgress(null);this._setLastRequest(request);this._setLoading(!0);this.fire("request",{request:request,options:requestOptions},{bubbles:this.bubbles,composed:!0});this.fire("iron-ajax-request",{request:request,options:requestOptions},{bubbles:this.bubbles,composed:!0});return request},_handleResponse:function _handleResponse(request){if(request===this.lastRequest){this._setLastResponse(request.response);this._setLastError(null);this._setLoading(!1)}this.fire("response",request,{bubbles:this.bubbles,composed:!0});this.fire("iron-ajax-response",request,{bubbles:this.bubbles,composed:!0})},_handleError:function _handleError(request,error){if(this.verbose){_shared_bundle_.Base._error(error)}if(request===this.lastRequest){this._setLastError({request:request,error:error,status:request.xhr.status,statusText:request.xhr.statusText,response:request.xhr.response});this._setLastResponse(null);this._setLoading(!1)}// Tests fail if this goes after the normal this.fire('error', ...)
this.fire("iron-ajax-error",{request:request,error:error},{bubbles:this.bubbles,composed:!0});this.fire("error",{request:request,error:error},{bubbles:this.bubbles,composed:!0})},_discardRequest:function _discardRequest(request){var requestIndex=this.activeRequests.indexOf(request);if(-1<requestIndex){this.splice("activeRequests",requestIndex,1)}},_requestOptionsChanged:function _requestOptionsChanged(){this.debounce("generate-request",function(){if(null==this.url){return}if(this.auto){this.generateRequest()}},this.debounceDuration)}});var IronValidatableBehaviorMeta=null;/**
                                                * `Use Polymer.IronValidatableBehavior` to implement an element that validates
                                                * user input. Use the related `Polymer.IronValidatorBehavior` to add custom
                                                * validation logic to an iron-input.
                                                *
                                                * By default, an `<iron-form>` element validates its fields when the user
                                                * presses the submit button. To validate a form imperatively, call the form's
                                                * `validate()` method, which in turn will call `validate()` on all its
                                                * children. By using `Polymer.IronValidatableBehavior`, your custom element
                                                * will get a public `validate()`, which will return the validity of the
                                                * element, and a corresponding `invalid` attribute, which can be used for
                                                * styling.
                                                *
                                                * To implement the custom validation logic of your element, you must override
                                                * the protected `_getValidity()` method of this behaviour, rather than
                                                * `validate()`. See
                                                * [this](https://github.com/PolymerElements/iron-form/blob/master/demo/simple-element.html)
                                                * for an example.
                                                *
                                                * ### Accessibility
                                                *
                                                * Changing the `invalid` property, either manually or by calling `validate()`
                                                * will update the `aria-invalid` attribute.
                                                *
                                                * @demo demo/index.html
                                                * @polymerBehavior
                                                */_exports.IronValidatableBehaviorMeta=IronValidatableBehaviorMeta;var IronValidatableBehavior={properties:{/**
     * Name of the validator to use.
     */validator:{type:String},/**
     * True if the last call to `validate` is invalid.
     */invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function registered(){_exports.IronValidatableBehaviorMeta=IronValidatableBehaviorMeta=new _shared_bundle_.IronMeta({type:"validator"})},_invalidChanged:function _invalidChanged(){if(this.invalid){this.setAttribute("aria-invalid","true")}else{this.removeAttribute("aria-invalid")}},/* Recompute this every time it's needed, because we don't know if the
   * underlying IronValidatableBehaviorMeta has changed. */get _validator(){return IronValidatableBehaviorMeta&&IronValidatableBehaviorMeta.byKey(this.validator)},/**
   * @return {boolean} True if the validator `validator` exists.
   */hasValidator:function hasValidator(){return null!=this._validator},/**
   * Returns true if the `value` is valid, and updates `invalid`. If you want
   * your element to have custom validation logic, do not override this method;
   * override `_getValidity(value)` instead.
    * @param {Object} value Deprecated: The value to be validated. By default,
   * it is passed to the validator's `validate()` function, if a validator is
   set.
   * If this argument is not specified, then the element's `value` property
   * is used, if it exists.
   * @return {boolean} True if `value` is valid.
   */validate:function validate(value){// If this is an element that also has a value property, and there was
// no explicit value argument passed, use the element's property instead.
if(value===void 0&&this.value!==void 0)this.invalid=!this._getValidity(this.value);else this.invalid=!this._getValidity(value);return!this.invalid},/**
   * Returns true if `value` is valid.  By default, it is passed
   * to the validator's `validate()` function, if a validator is set. You
   * should override this method if you want to implement custom validity
   * logic for your element.
   *
   * @param {Object} value The value to be validated.
   * @return {boolean} True if `value` is valid.
   */_getValidity:function _getValidity(value){if(this.hasValidator()){return this._validator.validate(value)}return!0}};_exports.IronValidatableBehavior=IronValidatableBehavior;var ironValidatableBehavior={get IronValidatableBehaviorMeta(){return IronValidatableBehaviorMeta},IronValidatableBehavior:IronValidatableBehavior};_exports.$ironValidatableBehavior=ironValidatableBehavior;(0,_shared_bundle_.Polymer)({/** @override */_template:(0,_shared_bundle_.html$2)(_templateObject2_ee6302702caa11ea91a843ae9cba1c4a()),is:"iron-autogrow-textarea",behaviors:[IronValidatableBehavior,_shared_bundle_.IronControlState],properties:{/**
     * Use this property instead of `bind-value` for two-way data binding.
     * @type {string|number}
     */value:{observer:"_valueChanged",type:String,notify:!0},/**
     * This property is deprecated, and just mirrors `value`. Use `value`
     * instead.
     * @type {string|number}
     */bindValue:{observer:"_bindValueChanged",type:String,notify:!0},/**
     * The initial number of rows.
     *
     * @attribute rows
     * @type number
     * @default 1
     */rows:{type:Number,value:1,observer:"_updateCached"},/**
     * The maximum number of rows this element can grow to until it
     * scrolls. 0 means no maximum.
     *
     * @attribute maxRows
     * @type number
     * @default 0
     */maxRows:{type:Number,value:0,observer:"_updateCached"},/**
     * Bound to the textarea's `autocomplete` attribute.
     */autocomplete:{type:String,value:"off"},/**
     * Bound to the textarea's `autofocus` attribute.
     */autofocus:{type:Boolean,value:!1},/**
     * Bound to the textarea's `autocapitalize` attribute.
     */autocapitalize:{type:String,value:"none"},/**
     * Bound to the textarea's `inputmode` attribute.
     */inputmode:{type:String},/**
     * Bound to the textarea's `placeholder` attribute.
     */placeholder:{type:String},/**
     * Bound to the textarea's `readonly` attribute.
     */readonly:{type:String},/**
     * Set to true to mark the textarea as required.
     */required:{type:Boolean},/**
     * The minimum length of the input value.
     */minlength:{type:Number},/**
     * The maximum length of the input value.
     */maxlength:{type:Number},/**
     * Bound to the textarea's `aria-label` attribute.
     */label:{type:String}},listeners:{input:"_onInput"},/**
   * Returns the underlying textarea.
   * @return {!HTMLTextAreaElement}
   */get textarea(){return(/** @type {!HTMLTextAreaElement} */this.$.textarea)},/**
   * Returns textarea's selection start.
   * @return {number}
   */get selectionStart(){return this.$.textarea.selectionStart},/**
   * Returns textarea's selection end.
   * @return {number}
   */get selectionEnd(){return this.$.textarea.selectionEnd},/**
   * Sets the textarea's selection start.
   */set selectionStart(value){this.$.textarea.selectionStart=value},/**
   * Sets the textarea's selection end.
   */set selectionEnd(value){this.$.textarea.selectionEnd=value},/** @override */attached:function attached(){/* iOS has an arbitrary left margin of 3px that isn't present
     * in any other browser, and means that the paper-textarea's cursor
     * overlaps the label.
     * See https://github.com/PolymerElements/paper-input/issues/468.
     */var IS_IOS=navigator.userAgent.match(/iP(?:[oa]d|hone)/);if(IS_IOS){this.$.textarea.style.marginLeft="-3px"}},/**
   * Returns true if `value` is valid. The validator provided in `validator`
   * will be used first, if it exists; otherwise, the `textarea`'s validity
   * is used.
   * @return {boolean} True if the value is valid.
   */validate:function validate(){// Use the nested input's native validity.
var valid=this.$.textarea.validity.valid;// Only do extra checking if the browser thought this was valid.
if(valid){// Empty, required input is invalid
if(this.required&&""===this.value){valid=!1}else if(this.hasValidator()){valid=IronValidatableBehavior.validate.call(this,this.value)}}this.invalid=!valid;this.fire("iron-input-validate");return valid},_bindValueChanged:function _bindValueChanged(bindValue){this.value=bindValue},_valueChanged:function _valueChanged(value){var textarea=this.textarea;if(!textarea){return}// If the bindValue changed manually, then we need to also update
// the underlying textarea's value. Otherwise this change was probably
// generated from the _onInput handler, and the two values are already
// the same.
if(textarea.value!==value){textarea.value=!(value||0===value)?"":value}this.bindValue=value;this.$.mirror.innerHTML=this._valueForMirror();// Manually notify because we don't want to notify until after setting
// value.
this.fire("bind-value-changed",{value:this.bindValue})},_onInput:function _onInput(event){var eventPath=(0,_shared_bundle_.dom)(event).path;this.value=eventPath?eventPath[0].value:event.target.value},_constrain:function _constrain(tokens){var _tokens;tokens=tokens||[""];// Enforce the min and max heights for a multiline input to avoid
// measurement
if(0<this.maxRows&&tokens.length>this.maxRows){_tokens=tokens.slice(0,this.maxRows)}else{_tokens=tokens.slice(0)}while(0<this.rows&&_tokens.length<this.rows){_tokens.push("")}// Use &#160; instead &nbsp; of to allow this element to be used in XHTML.
return _tokens.join("<br/>")+"&#160;"},_valueForMirror:function _valueForMirror(){var input=this.textarea;if(!input){return}this.tokens=input&&input.value?input.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""];return this._constrain(this.tokens)},_updateCached:function _updateCached(){this.$.mirror.innerHTML=this._constrain(this.tokens)}});var IronFormElementBehavior={properties:{/**
     * Fired when the element is added to an `iron-form`.
     *
     * @event iron-form-element-register
     */ /**
         * Fired when the element is removed from an `iron-form`.
         *
         * @event iron-form-element-unregister
         */ /**
             * The name of this element.
             */name:{type:String},/**
     * The value for this element.
     * @type {string|number|null|undefined}
     */value:{notify:!0,type:String},/**
     * Set to true to mark the input as required. If used in a form, a
     * custom element that uses this behavior should also use
     * Polymer.IronValidatableBehavior and define a custom validation method.
     * Otherwise, a `required` element will always be considered valid.
     * It's also strongly recommended to provide a visual style for the element
     * when its value is invalid.
     */required:{type:Boolean,value:!1},/**
     * The form that the element is registered to.
     */_parentForm:{type:Object}},attached:function attached(){if(!_shared_bundle_.PolymerElement){// Note: the iron-form that this element belongs to will set this
// element's _parentForm property when handling this event.
this.fire("iron-form-element-register")}},detached:function detached(){if(!_shared_bundle_.PolymerElement&&this._parentForm){this._parentForm.fire("iron-form-element-unregister",{target:this})}}};_exports.IronFormElementBehavior=IronFormElementBehavior;var ironFormElementBehavior={IronFormElementBehavior:IronFormElementBehavior};_exports.$ironFormElementBehavior=ironFormElementBehavior;(0,_shared_bundle_.Polymer)({/** @override */_template:(0,_shared_bundle_.html$2)(_templateObject3_ee6302702caa11ea91a843ae9cba1c4a()),is:"iron-form",properties:{/*
     * Set this to true if you don't want the form to be submitted through an
     * ajax request, and you want the page to redirect to the action URL
     * after the form has been submitted.
     */allowRedirect:{type:Boolean,value:!1},/**
     * HTTP request headers to send. See PolymerElements/iron-ajax for
     * more details. Only works when `allowRedirect` is false.
     */headers:{type:Object,value:function value(){return{}}},/**
     * Set the `withCredentials` flag on the request. See
     * PolymerElements/iron-ajax for more details. Only works when
     * `allowRedirect` is false.
     */withCredentials:{type:Boolean,value:!1}},/**
   * Fired if the form cannot be submitted because it's invalid.
   *
   * @event iron-form-invalid
   */ /**
       * Fired after the form is submitted.
       *
       * @event iron-form-submit
       */ /**
           * Fired before the form is submitted.
           *
           * @event iron-form-presubmit
           */ /**
               * Fired after the form is reset.
               *
               * @event iron-form-reset
               */ /**
                   * Fired after the form is submitted and a response is received. An
                   * IronRequestElement is included as the event.detail object.
                   *
                   * @event iron-form-response
                   */ /**
                       * Fired after the form is submitted and an error is received. An
                       * error message is included in event.detail.error and an
                       * IronRequestElement is included in event.detail.request.
                       *
                       * @event iron-form-error
                       */ /**
                           * @return {void}
                           * @override
                           */attached:function attached(){// We might have been detached then re-attached.
// Avoid searching again for the <form> if we already found it.
if(this._form){return}// Search for the `<form>`, if we don't find it, observe for
// mutations.
this._form=(0,_shared_bundle_.dom)(this).querySelector("form");if(this._form){this._init();// Since some elements might not be upgraded yet at this time,
// we won't be able to look into their shadowRoots for submittables.
// We wait a tick and check again for any missing submittable default
// values.
this.async(this._saveInitialValues.bind(this),1)}else{this._nodeObserver=(0,_shared_bundle_.dom)(this).observeNodes(function(mutations){for(var i=0;i<mutations.addedNodes.length;i++){if("FORM"===mutations.addedNodes[i].tagName){this._form=mutations.addedNodes[i];// At this point in time, all custom elements are expected
// to be upgraded, hence we'll be able to traverse their
// shadowRoots.
this._init();(0,_shared_bundle_.dom)(this).unobserveNodes(this._nodeObserver);this._nodeObserver=null}}}.bind(this))}},/**
   * @return {void}
   * @override
   */detached:function detached(){if(this._nodeObserver){(0,_shared_bundle_.dom)(this).unobserveNodes(this._nodeObserver);this._nodeObserver=null}},_init:function _init(){this._form.addEventListener("submit",this.submit.bind(this));this._form.addEventListener("reset",this.reset.bind(this));// Save the initial values.
this._defaults=this._defaults||new WeakMap;this._saveInitialValues()},/**
   * Saves the values of all form elements that will be used when resetting
   * the form. Initially called asynchronously on attach. Any time you
   * call this function, the previously saved values for a form element will
   * be overwritten.
   *
   * This function is useful if you are dynamically adding elements to
   * the form, or if your elements are asynchronously setting their values.
   * @return {void}
   */saveResetValues:function saveResetValues(){this._saveInitialValues(!0)},/**
   * @param {boolean=} overwriteValues
   * @return {void}
   */_saveInitialValues:function _saveInitialValues(overwriteValues){for(var nodes=this._getValidatableElements(),i=0,node;i<nodes.length;i++){node=nodes[i];if(!this._defaults.has(node)||overwriteValues){// Submittables are expected to have `value` property,
// that's what gets serialized.
var defaults={value:node.value};if("checked"in node){defaults.checked=node.checked}// In 1.x iron-form would reset `invalid`, so
// keep it here for backwards compat.
if("invalid"in node){defaults.invalid=node.invalid}this._defaults.set(node,defaults)}}},/**
   * Validates all the required elements (custom and native) in the form.
   * @return {boolean} True if all the elements are valid.
   */validate:function validate(){// If you've called this before distribution happened, bail out.
if(!this._form){return!1}if(""===this._form.getAttribute("novalidate"))return!0;// Start by making the form check the native elements it knows about.
// Go through all the elements, and validate the custom ones.
for(var valid=this._form.checkValidity(),elements=this._getValidatableElements(),el,i=0,validatable;el=elements[i],i<elements.length;i++){// This is weird to appease the compiler. We assume the custom element
// has a validate() method, otherwise we can't check it.
validatable=/** @type {{validate: (function() : boolean)}} */el;if(validatable.validate){valid=!!validatable.validate()&&valid}}return valid},/**
   * Submits the form.
   *
   * @param {Event=} event
   * @return {void}
   */submit:function submit(event){// We are not using this form for submission, so always cancel its event.
if(event){event.preventDefault()}// If you've called this before distribution happened, bail out.
if(!this._form){return}if(!this.validate()){this.fire("iron-form-invalid");return}// Remove any existing children in the submission form (from a previous
// submit).
this.$.helper.textContent="";var json=this.serializeForm();// If we want a redirect, submit the form natively.
if(this.allowRedirect){// If we're submitting the form natively, then create a hidden element for
// each of the values.
for(var element in json){this.$.helper.appendChild(this._createHiddenElement(element,json[element]))}// Copy the original form attributes.
this.$.helper.action=this._form.getAttribute("action");this.$.helper.method=this._form.getAttribute("method")||"GET";this.$.helper.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded";this.$.helper.submit();this.fire("iron-form-submit")}else{this._makeAjaxRequest(json)}},/**
   * Resets the form to the default values.
   *
   * @param {Event=} event
   * @return {void}
   */reset:function reset(event){// We are not using this form for submission, so always cancel its event.
if(event)event.preventDefault();// If you've called this before distribution happened, bail out.
if(!this._form){return}// Ensure the native form fired the `reset` event.
// User might have bound `<button on-click="_resetIronForm">`, or directly
// called `ironForm.reset()`. In these cases we want to first reset the
// native form.
if(!event||"reset"!==event.type||event.target!==this._form){this._form.reset();return}// Load the initial values.
for(var nodes=this._getValidatableElements(),i=0,node;i<nodes.length;i++){node=nodes[i];if(this._defaults.has(node)){var defaults=this._defaults.get(node);for(var propName in defaults){node[propName]=defaults[propName]}}}this.fire("iron-form-reset")},/**
   * Serializes the form as will be used in submission. Note that `serialize`
   * is a Polymer reserved keyword, so calling `someIronForm`.serialize()`
   * will give you unexpected results.
   * @return {!Object<string, *>} An object containing name-value pairs for elements that
   *                  would be submitted.
   */serializeForm:function serializeForm(){// Only elements that have a `name` and are not disabled are submittable.
for(var elements=this._getSubmittableElements(),json={},i=0,values;i<elements.length;i++){values=this._serializeElementValues(elements[i]);for(var v=0;v<values.length;v++){this._addSerializedElement(json,elements[i].name,values[v])}}return json},_handleFormResponse:function _handleFormResponse(event){this.fire("iron-form-response",event.detail)},_handleFormError:function _handleFormError(event){this.fire("iron-form-error",event.detail)},_makeAjaxRequest:function _makeAjaxRequest(json){// Initialize the iron-ajax element if we haven't already.
if(!this.request){this.request=document.createElement("iron-ajax");this.request.addEventListener("response",this._handleFormResponse.bind(this));this.request.addEventListener("error",this._handleFormError.bind(this))}// Native forms can also index elements magically by their name (can't make
// this up if I tried) so we need to get the correct attributes, not the
// elements with those names.
this.request.url=this._form.getAttribute("action");this.request.method=this._form.getAttribute("method")||"GET";this.request.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded";this.request.withCredentials=this.withCredentials;this.request.headers=this.headers;if("POST"===this._form.method.toUpperCase()){this.request.body=json}else{this.request.params=json}// Allow for a presubmit hook
var event=this.fire("iron-form-presubmit",{},{cancelable:!0});if(!event.defaultPrevented){this.request.generateRequest();this.fire("iron-form-submit",json)}},_getValidatableElements:function _getValidatableElements(){return this._findElements(this._form,!0,!1)},_getSubmittableElements:function _getSubmittableElements(){return this._findElements(this._form,!1,!1)},/**
   * Traverse the parent element to find and add all submittable nodes to
   * `submittable`.
   * @param  {!Node} parent The parent node
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @param  {!boolean} skipSlots  Whether to skip traversing of slot elements
   * @param  {!Array<!Node>=} submittable Reference to the array of submittables
   * @return {!Array<!Node>}
   * @private
   */_findElements:function _findElements(parent,ignoreName,skipSlots,submittable){submittable=submittable||[];for(var nodes=(0,_shared_bundle_.dom)(parent).querySelectorAll("*"),i=0;i<nodes.length;i++){// An element is submittable if it is not disabled, and if it has a
// name attribute.
if(!skipSlots&&("slot"===nodes[i].localName||"content"===nodes[i].localName)){this._searchSubmittableInSlot(submittable,nodes[i],ignoreName)}else{this._searchSubmittable(submittable,nodes[i],ignoreName)}}return submittable},/**
   * Traverse the distributed nodes of a slot or content element
   * and add all submittable nodes to `submittable`.
   * @param  {!Array<!Node>} submittable Reference to the array of submittables
   * @param  {!Node} node The slot or content node
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @return {void}
   * @private
   */_searchSubmittableInSlot:function _searchSubmittableInSlot(submittable,node,ignoreName){for(var assignedNodes=(0,_shared_bundle_.dom)(node).getDistributedNodes(),i=0;i<assignedNodes.length;i++){if(assignedNodes[i].nodeType===Node.TEXT_NODE){continue}// Note: assignedNodes does not contain <slot> or <content> because
// getDistributedNodes flattens the tree.
this._searchSubmittable(submittable,assignedNodes[i],ignoreName);for(var nestedAssignedNodes=(0,_shared_bundle_.dom)(assignedNodes[i]).querySelectorAll("*"),j=0;j<nestedAssignedNodes.length;j++){this._searchSubmittable(submittable,nestedAssignedNodes[j],ignoreName)}}},/**
   * Traverse the distributed nodes of a slot or content element
   * and add all submittable nodes to `submittable`.
   * @param  {!Array<!Node>} submittable Reference to the array of submittables
   * @param  {!Node} node The node to be
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @return {void}
   * @private
   */_searchSubmittable:function _searchSubmittable(submittable,node,ignoreName){if(this._isSubmittable(node,ignoreName)){submittable.push(node)}else if(node.root){this._findElements(node.root,ignoreName,!0,submittable)}},/**
   * An element is submittable if it is not disabled, and if it has a
   * 'name' attribute. If we ignore the name, check if is validatable.
   * This allows `_findElements` to decide if to explore an element's shadowRoot
   * or not: an element implementing `validate()` is considered validatable, and
   * we don't search for validatables in its shadowRoot.
   * @param {!Node} node
   * @param {!boolean} ignoreName
   * @return {boolean}
   * @private
   */_isSubmittable:function _isSubmittable(node,ignoreName){return!node.disabled&&(ignoreName?node.name||"function"===typeof node.validate:node.name)},_serializeElementValues:function _serializeElementValues(element){// We will assume that every custom element that needs to be serialized
// has a `value` property, and it contains the correct value.
// The only weird one is an element that implements
// IronCheckedElementBehaviour, in which case like the native checkbox/radio
// button, it's only used when checked. For native elements, from
// https://www.w3.org/TR/html5/forms.html#the-form-element. Native
// submittable elements: button, input, keygen, object, select, textarea;
// 1. We will skip `keygen and `object` for this iteration, and deal with
// them if they're actually required.
// 2. <button> and <textarea> have a `value` property, so they behave like
//    the custom elements.
// 3. <select> can have multiple options selected, in which case its
//    `value` is incorrect, and we must use the values of each of its
//    `selectedOptions`
// 4. <input> can have a whole bunch of behaviours, so it's handled
// separately.
// 5. Buttons are hard. The button that was clicked to submit the form
//    is the one who's name/value gets sent to the server.
var tag=element.tagName.toLowerCase();if("button"===tag||"input"===tag&&("submit"===element.type||"reset"===element.type)){return[]}if("select"===tag){return this._serializeSelectValues(element)}else if("input"===tag){return this._serializeInputValues(element)}else{if(element._hasIronCheckedElementBehavior&&!element.checked)return[];return[element.value]}},_serializeSelectValues:function _serializeSelectValues(element){// A <select multiple> has an array of options, some of which can be
// selected.
for(var values=[],i=0;i<element.options.length;i++){if(element.options[i].selected){values.push(element.options[i].value)}}return values},_serializeInputValues:function _serializeInputValues(element){// Most of the inputs use their 'value' attribute, with the exception
// of radio buttons, checkboxes and file.
var type=element.type.toLowerCase();// Don't do anything for unchecked checkboxes/radio buttons.
// Don't do anything for file, since that requires a different request.
if(("checkbox"===type||"radio"===type)&&!element.checked||"file"===type){return[]}return[element.value]},_createHiddenElement:function _createHiddenElement(name,value){var input=document.createElement("input");input.setAttribute("type","hidden");input.setAttribute("name",name);input.setAttribute("value",value);return input},_addSerializedElement:function _addSerializedElement(json,name,value){// If the name doesn't exist, add it. Otherwise, serialize it to
// an array,
if(json[name]===void 0){json[name]=value}else{if(!Array.isArray(json[name])){json[name]=[json[name]]}json[name].push(value)}}});(0,_shared_bundle_.Polymer)({/** @override */_template:(0,_shared_bundle_.html$2)(_templateObject4_ee6302702caa11ea91a843ae9cba1c4a()),is:"iron-input",behaviors:[IronValidatableBehavior],/**
   * Fired whenever `validate()` is called.
   *
   * @event iron-input-validate
   */properties:{/**
     * Use this property instead of `value` for two-way data binding, or to
     * set a default value for the input. **Do not** use the distributed
     * input's `value` property to set a default value.
     */bindValue:{type:String,value:""},/**
     * Computed property that echoes `bindValue` (mostly used for Polymer 1.0
     * backcompatibility, if you were one-way binding to the Polymer 1.0
     * `input is="iron-input"` value attribute).
     */value:{type:String,computed:"_computeValue(bindValue)"},/**
     * Regex-like list of characters allowed as input; all characters not in the
     * list will be rejected. The recommended format should be a list of allowed
     * characters, for example, `[a-zA-Z0-9.+-!;:]`.
     *
     * This pattern represents the allowed characters for the field; as the user
     * inputs text, each individual character will be checked against the
     * pattern (rather than checking the entire value as a whole). If a
     * character is not a match, it will be rejected.
     *
     * Pasted input will have each character checked individually; if any
     * character doesn't match `allowedPattern`, the entire pasted string will
     * be rejected.
     *
     * Note: if you were using `iron-input` in 1.0, you were also required to
     * set `prevent-invalid-input`. This is no longer needed as of Polymer 2.0,
     * and will be set automatically for you if an `allowedPattern` is provided.
     *
     */allowedPattern:{type:String},/**
     * Set to true to auto-validate the input value as you type.
     */autoValidate:{type:Boolean,value:!1},/**
     * The native input element.
     */_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},/** @override */created:function created(){IronA11yAnnouncer.requestAvailability();this._previousValidInput="";this._patternAlreadyChecked=!1},/** @override */attached:function attached(){// If the input is added at a later time, update the internal reference.
this._observer=(0,_shared_bundle_.dom)(this).observeNodes(function(info){this._initSlottedInput()}.bind(this))},/** @override */detached:function detached(){if(this._observer){(0,_shared_bundle_.dom)(this).unobserveNodes(this._observer);this._observer=null}},/**
   * Returns the distributed input element.
   */get inputElement(){return this._inputElement},_initSlottedInput:function _initSlottedInput(){this._inputElement=this.getEffectiveChildren()[0];if(this.inputElement&&this.inputElement.value){this.bindValue=this.inputElement.value}this.fire("iron-input-ready")},get _patternRegExp(){var pattern;if(this.allowedPattern){pattern=new RegExp(this.allowedPattern)}else{switch(this.inputElement.type){case"number":pattern=/[0-9.,e-]/;break;}}return pattern},/**
   * @suppress {checkTypes}
   */_bindValueChanged:function _bindValueChanged(bindValue,inputElement){// The observer could have run before attached() when we have actually
// initialized this property.
if(!inputElement){return}if(bindValue===void 0){inputElement.value=null}else if(bindValue!==inputElement.value){this.inputElement.value=bindValue}if(this.autoValidate){this.validate()}// manually notify because we don't want to notify until after setting value
this.fire("bind-value-changed",{value:bindValue})},_onInput:function _onInput(){// Need to validate each of the characters pasted if they haven't
// been validated inside `_onKeypress` already.
if(this.allowedPattern&&!this._patternAlreadyChecked){var valid=this._checkPatternValidity();if(!valid){this._announceInvalidCharacter("Invalid string of characters not entered.");this.inputElement.value=this._previousValidInput}}this.bindValue=this._previousValidInput=this.inputElement.value;this._patternAlreadyChecked=!1},_isPrintable:function _isPrintable(event){// What a control/printable character is varies wildly based on the browser.
// - most control characters (arrows, backspace) do not send a `keypress`
// event
//   in Chrome, but the *do* on Firefox
// - in Firefox, when they do send a `keypress` event, control chars have
//   a charCode = 0, keyCode = xx (for ex. 40 for down arrow)
// - printable characters always send a keypress event.
// - in Firefox, printable chars always have a keyCode = 0. In Chrome, the
// keyCode
//   always matches the charCode.
// None of this makes any sense.
// For these keys, ASCII code == browser keycode.
var anyNonPrintable=8==event.keyCode||// backspace
9==event.keyCode||// tab
13==event.keyCode||// enter
27==event.keyCode,mozNonPrintable=19==event.keyCode||// pause
20==event.keyCode||// caps lock
45==event.keyCode||// insert
46==event.keyCode||// delete
144==event.keyCode||// num lock
145==event.keyCode||// scroll lock
32<event.keyCode&&41>event.keyCode||// page up/down, end, home, arrows
111<event.keyCode&&124>event.keyCode;// escape
// For these keys, make sure it's a browser keycode and not an ASCII code.
// fn keys
return!anyNonPrintable&&!(0==event.charCode&&mozNonPrintable)},_onKeypress:function _onKeypress(event){if(!this.allowedPattern&&"number"!==this.inputElement.type){return}var regexp=this._patternRegExp;if(!regexp){return}// Handle special keys and backspace
if(event.metaKey||event.ctrlKey||event.altKey){return}// Check the pattern either here or in `_onInput`, but not in both.
this._patternAlreadyChecked=!0;var thisChar=String.fromCharCode(event.charCode);if(this._isPrintable(event)&&!regexp.test(thisChar)){event.preventDefault();this._announceInvalidCharacter("Invalid character "+thisChar+" not entered.")}},_checkPatternValidity:function _checkPatternValidity(){var regexp=this._patternRegExp;if(!regexp){return!0}for(var i=0;i<this.inputElement.value.length;i++){if(!regexp.test(this.inputElement.value[i])){return!1}}return!0},/**
   * Returns true if `value` is valid. The validator provided in `validator`
   * will be used first, then any constraints.
   * @return {boolean} True if the value is valid.
   */validate:function validate(){if(!this.inputElement){this.invalid=!1;return!0}// Use the nested input's native validity.
var valid=this.inputElement.checkValidity();// Only do extra checking if the browser thought this was valid.
if(valid){// Empty, required input is invalid
if(this.required&&""===this.bindValue){valid=!1}else if(this.hasValidator()){valid=IronValidatableBehavior.validate.call(this,this.bindValue)}}this.invalid=!valid;this.fire("iron-input-validate");return valid},_announceInvalidCharacter:function _announceInvalidCharacter(message){this.fire("iron-announce",{text:message})},_computeValue:function _computeValue(bindValue){return bindValue}});var PaperButtonBehaviorImpl={properties:{/**
     * The z-depth of this element, from 0-5. Setting to 0 will remove the
     * shadow, and each increasing number greater than 0 will be "deeper"
     * than the last.
     *
     * @attribute elevation
     * @type number
     * @default 1
     */elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function _calculateElevation(){var e=1;if(this.disabled){e=0}else if(this.active||this.pressed){e=4}else if(this.receivedFocusFromKeyboard){e=3}this._setElevation(e)},_computeKeyboardClass:function _computeKeyboardClass(receivedFocusFromKeyboard){this.toggleClass("keyboard-focus",receivedFocusFromKeyboard)},/**
   * In addition to `IronButtonState` behavior, when space key goes down,
   * create a ripple down effect.
   *
   * @param {!KeyboardEvent} event .
   */_spaceKeyDownHandler:function _spaceKeyDownHandler(event){_shared_bundle_.IronButtonStateImpl._spaceKeyDownHandler.call(this,event);// Ensure that there is at most one ripple when the space key is held down.
if(this.hasRipple()&&1>this.getRipple().ripples.length){this._ripple.uiDownAction()}},/**
   * In addition to `IronButtonState` behavior, when space key goes up,
   * create a ripple up effect.
   *
   * @param {!KeyboardEvent} event .
   */_spaceKeyUpHandler:function _spaceKeyUpHandler(event){_shared_bundle_.IronButtonStateImpl._spaceKeyUpHandler.call(this,event);if(this.hasRipple()){this._ripple.uiUpAction()}}};/** @polymerBehavior */_exports.PaperButtonBehaviorImpl=PaperButtonBehaviorImpl;var PaperButtonBehavior=[_shared_bundle_.IronButtonState,_shared_bundle_.IronControlState,_shared_bundle_.PaperRippleBehavior,PaperButtonBehaviorImpl];_exports.PaperButtonBehavior=PaperButtonBehavior;var paperButtonBehavior={PaperButtonBehaviorImpl:PaperButtonBehaviorImpl,PaperButtonBehavior:PaperButtonBehavior};_exports.$paperButtonBehavior=paperButtonBehavior;var $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML="<dom-module id=\"paper-material-styles\">\n  <template>\n    <style>\n      :host, html {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      :host(.paper-material), .paper-material {\n        @apply --paper-material;\n      }\n      :host(.paper-material[elevation=\"1\"]), .paper-material[elevation=\"1\"] {\n        @apply --paper-material-elevation-1;\n      }\n      :host(.paper-material[elevation=\"2\"]), .paper-material[elevation=\"2\"] {\n        @apply --paper-material-elevation-2;\n      }\n      :host(.paper-material[elevation=\"3\"]), .paper-material[elevation=\"3\"] {\n        @apply --paper-material-elevation-3;\n      }\n      :host(.paper-material[elevation=\"4\"]), .paper-material[elevation=\"4\"] {\n        @apply --paper-material-elevation-4;\n      }\n      :host(.paper-material[elevation=\"5\"]), .paper-material[elevation=\"5\"] {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer.content);/**
                                                        @license
                                                        Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                        This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                        The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                        The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                        Code distributed by Google as part of the polymer project is also
                                                        subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                        */ /**
                                                           Material design: [Cards](https://www.google.com/design/spec/components/cards.html)
                                                           
                                                           Shared styles that you can apply to an element to renders two shadows on top
                                                           of each other,that create the effect of a lifted piece of paper.
                                                           
                                                           Example:
                                                           
                                                               <custom-style>
                                                                 <style is="custom-style" include="paper-material-styles"></style>
                                                               </custom-style>
                                                           
                                                               <div class="paper-material" elevation="1">
                                                                 ... content ...
                                                               </div>
                                                           
                                                           @group Paper Elements
                                                           @demo demo/index.html
                                                           */ /*
                                                                FIXME(polymer-modulizer): the above comments were extracted
                                                                from HTML and may be out of place here. Review them and
                                                                then delete this comment!
                                                              */;var template=(0,_shared_bundle_.html$1)(_templateObject5_ee6302702caa11ea91a843ae9cba1c4a());template.setAttribute("strip-whitespace","");/**
                                               Material design:
                                               [Buttons](https://www.google.com/design/spec/components/buttons.html)
                                               
                                               `paper-button` is a button. When the user touches the button, a ripple effect
                                               emanates from the point of contact. It may be flat or raised. A raised button is
                                               styled with a shadow.
                                               
                                               Example:
                                               
                                                   <paper-button>Flat button</paper-button>
                                                   <paper-button raised>Raised button</paper-button>
                                                   <paper-button noink>No ripple effect</paper-button>
                                                   <paper-button toggles>Toggle-able button</paper-button>
                                               
                                               A button that has `toggles` true will remain `active` after being clicked (and
                                               will have an `active` attribute set). For more information, see the
                                               `IronButtonState` behavior.
                                               
                                               You may use custom DOM in the button body to create a variety of buttons. For
                                               example, to create a button with an icon and some text:
                                               
                                                   <paper-button>
                                                     <iron-icon icon="favorite"></iron-icon>
                                                     custom button content
                                                   </paper-button>
                                               
                                               To use `paper-button` as a link, wrap it in an anchor tag. Since `paper-button`
                                               will already receive focus, you may want to prevent the anchor tag from
                                               receiving focus as well by setting its tabindex to -1.
                                               
                                                   <a href="https://www.polymer-project.org/" tabindex="-1">
                                                     <paper-button raised>Polymer Project</paper-button>
                                                   </a>
                                               
                                               ### Styling
                                               
                                               Style the button with CSS as you would a normal DOM element.
                                               
                                                   paper-button.fancy {
                                                     background: green;
                                                     color: yellow;
                                                   }
                                               
                                                   paper-button.fancy:hover {
                                                     background: lime;
                                                   }
                                               
                                                   paper-button[disabled],
                                                   paper-button[toggles][active] {
                                                     background: red;
                                                   }
                                               
                                               By default, the ripple is the same color as the foreground at 25% opacity. You
                                               may customize the color using the `--paper-button-ink-color` custom property.
                                               
                                               The following custom properties and mixins are also available for styling:
                                               
                                               Custom property | Description | Default
                                               ----------------|-------------|----------
                                               `--paper-button-ink-color` | Background color of the ripple | `Based on the button's color`
                                               `--paper-button` | Mixin applied to the button | `{}`
                                               `--paper-button-disabled` | Mixin applied to the disabled button. Note that you can also use the `paper-button[disabled]` selector | `{}`
                                               `--paper-button-flat-keyboard-focus` | Mixin applied to a flat button after it's been focused using the keyboard | `{}`
                                               `--paper-button-raised-keyboard-focus` | Mixin applied to a raised button after it's been focused using the keyboard | `{}`
                                               
                                               @demo demo/index.html
                                               */(0,_shared_bundle_.Polymer)({_template:template,is:"paper-button",behaviors:[PaperButtonBehavior],properties:{/**
     * If true, the button should be styled with a shadow.
     */raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function _calculateElevation(){if(!this.raised){this._setElevation(0)}else{PaperButtonBehaviorImpl._calculateElevation.apply(this)}}/**
    Fired when the animation finishes.
    This is useful if you want to wait until
    the ripple animation finishes to perform some action.
     @event transitionend
    Event param: {{node: Object}} detail Contains the animated node.
    */});var PaperInputAddonBehavior={attached:function attached(){this.fire("addon-attached")},/**
   * The function called by `<paper-input-container>` when the input value or
   * validity changes.
   * @param {{
   *   invalid: boolean,
   *   inputElement: (Element|undefined),
   *   value: (string|undefined)
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */update:function update(state){}};_exports.PaperInputAddonBehavior=PaperInputAddonBehavior;var paperInputAddonBehavior={PaperInputAddonBehavior:PaperInputAddonBehavior};// aria-labelledby) and add-ons.
_exports.$paperInputAddonBehavior=paperInputAddonBehavior;var PaperInputHelper={};_exports.PaperInputHelper=PaperInputHelper;PaperInputHelper.NextLabelID=1;PaperInputHelper.NextAddonID=1;PaperInputHelper.NextInputID=1;/**
                                   * Use `PaperInputBehavior` to implement inputs with `<paper-input-container>`.
                                   * This behavior is implemented by `<paper-input>`. It exposes a number of
                                   * properties from `<paper-input-container>` and `<input is="iron-input">` and
                                   * they should be bound in your template.
                                   *
                                   * The input element can be accessed by the `inputElement` property if you need
                                   * to access properties or methods that are not exposed.
                                   * @polymerBehavior PaperInputBehavior
                                   */var PaperInputBehaviorImpl={properties:{/**
     * Fired when the input changes due to user interaction.
     *
     * @event change
     */ /**
         * The label for this input. If you're using PaperInputBehavior to
         * implement your own paper-input-like element, bind this to
         * `<label>`'s content and `hidden` property, e.g.
         * `<label hidden$="[[!label]]">[[label]]</label>` in your `template`
         */label:{type:String},/**
     * The value for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<iron-input>`'s `bindValue`
     * property, or the value property of your input that is `notify:true`.
     * @type {*}
     */value:{notify:!0,type:String},/**
     * Set to true to disable this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * both the `<paper-input-container>`'s and the input's `disabled` property.
     */disabled:{type:Boolean,value:!1},/**
     * Returns true if the value is invalid. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to both the
     * `<paper-input-container>`'s and the input's `invalid` property.
     *
     * If `autoValidate` is true, the `invalid` attribute is managed
     * automatically, which can clobber attempts to manage it manually.
     */invalid:{type:Boolean,value:!1,notify:!0},/**
     * Set this to specify the pattern allowed by `preventInvalidInput`. If
     * you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `allowedPattern`
     * property.
     */allowedPattern:{type:String},/**
     * The type of the input. The supported types are the
     * [native input's
     * types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the (Polymer 1) `<input is="iron-input">`'s or
     * (Polymer 2)
     * `<iron-input>`'s `type` property.
     */type:{type:String},/**
     * The datalist of the input (if any). This should match the id of an
     * existing `<datalist>`. If you're using PaperInputBehavior to implement
     * your own paper-input-like element, bind this to the `<input
     * is="iron-input">`'s `list` property.
     */list:{type:String},/**
     * A pattern to validate the `input` with. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `pattern` property.
     */pattern:{type:String},/**
     * Set to true to mark the input as required. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `required` property.
     */required:{type:Boolean,value:!1},/**
     * The error message to display when the input is invalid. If you're using
     * PaperInputBehavior to implement your own paper-input-like element,
     * bind this to the `<paper-input-error>`'s content, if using.
     */errorMessage:{type:String},/**
     * Set to true to show a character counter.
     */charCounter:{type:Boolean,value:!1},/**
     * Set to true to disable the floating label. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `noLabelFloat` property.
     */noLabelFloat:{type:Boolean,value:!1},/**
     * Set to true to always float the label. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to the
     * `<paper-input-container>`'s `alwaysFloatLabel` property.
     */alwaysFloatLabel:{type:Boolean,value:!1},/**
     * Set to true to auto-validate the input value. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `autoValidate` property.
     */autoValidate:{type:Boolean,value:!1},/**
     * Name of the validator to use. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<input is="iron-input">`'s `validator` property.
     */validator:{type:String},// HTMLInputElement attributes for binding if needed
/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocomplete`
     * property.
     */autocomplete:{type:String,value:"off"},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autofocus`
     * property.
     */autofocus:{type:Boolean,observer:"_autofocusChanged"},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `inputmode`
     * property.
     */inputmode:{type:String},/**
     * The minimum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `minlength`
     * property.
     */minlength:{type:Number},/**
     * The maximum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `maxlength`
     * property.
     */maxlength:{type:Number},/**
     * The minimum (numeric or date-time) input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `min` property.
     */min:{type:String},/**
     * The maximum (numeric or date-time) input value.
     * Can be a String (e.g. `"2000-01-01"`) or a Number (e.g. `2`).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `max` property.
     */max:{type:String},/**
     * Limits the numeric or date-time increments.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `step` property.
     */step:{type:String},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `name` property.
     */name:{type:String},/**
     * A placeholder string in addition to the label. If this is set, the label
     * will always float.
     */placeholder:{type:String,// need to set a default so _computeAlwaysFloatLabel is run
value:""},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `readonly`
     * property.
     */readonly:{type:Boolean,value:!1},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `size` property.
     */size:{type:Number},// Nonstandard attributes for binding if needed
/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocapitalize`
     * property.
     *
     * @type {string}
     */autocapitalize:{type:String,value:"none"},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocorrect`
     * property.
     */autocorrect:{type:String,value:"off"},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autosave`
     * property, used with type=search.
     */autosave:{type:String},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `results` property,
     * used with type=search.
     */results:{type:Number},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `accept` property,
     * used with type=file.
     */accept:{type:String},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the`<input is="iron-input">`'s `multiple` property,
     * used with type=file.
     */multiple:{type:Boolean},/** @private */_ariaDescribedBy:{type:String,value:""},/** @private */_ariaLabelledBy:{type:String,value:""},/** @private */_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},/**
   * @type {!Object}
   */keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},/** @private */hostAttributes:{tabindex:0},/**
   * Returns a reference to the input element.
   * @return {!HTMLElement}
   */get inputElement(){// Chrome generates audit errors if an <input type="password"> has a
// duplicate ID, which is almost always true in Shady DOM. Generate
// a unique ID instead.
if(!this.$){this.$={}}if(!this.$.input){this._generateInputId();this.$.input=this.$$("#"+this._inputId)}return this.$.input},/**
   * Returns a reference to the focusable element.
   * @return {!HTMLElement}
   */get _focusableElement(){return this.inputElement},/** @override */created:function created(){// These types have some default placeholder text; overlapping
// the label on top of it looks terrible. Auto-float the label in this case.
this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},/** @override */attached:function attached(){this._updateAriaLabelledBy();// In the 2.0 version of the element, this is handled in `onIronInputReady`,
// i.e. after the native input has finished distributing. In the 1.0
// version, the input is in the shadow tree, so it's already available.
if(!_shared_bundle_.PolymerElement&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)){this.alwaysFloatLabel=!0}},_appendStringWithSpace:function _appendStringWithSpace(str,more){if(str){str=str+" "+more}else{str=more}return str},_onAddonAttached:function _onAddonAttached(event){var target=(0,_shared_bundle_.dom)(event).rootTarget;if(target.id){this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,target.id)}else{var id="paper-input-add-on-"+PaperInputHelper.NextAddonID++;target.id=id;this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,id)}},/**
   * Validates the input element and sets an error style if needed.
   *
   * @return {boolean}
   */validate:function validate(){return this.inputElement.validate()},/**
   * Forward focus to inputElement. Overriden from IronControlState.
   */_focusBlurHandler:function _focusBlurHandler(event){_shared_bundle_.IronControlState._focusBlurHandler.call(this,event);// Forward the focus to the nested input.
if(this.focused&&!this._shiftTabPressed&&this._focusableElement){this._focusableElement.focus()}},/**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */_onShiftTabDown:function _onShiftTabDown(event){var oldTabIndex=this.getAttribute("tabindex");this._shiftTabPressed=!0;this.setAttribute("tabindex","-1");this.async(function(){this.setAttribute("tabindex",oldTabIndex);this._shiftTabPressed=!1},1)},/**
   * If `autoValidate` is true, then validates the element.
   */_handleAutoValidate:function _handleAutoValidate(){if(this.autoValidate)this.validate()},/**
   * Restores the cursor to its original position after updating the value.
   * @param {string} newValue The value that should be saved.
   */updateValueAndPreserveCaret:function updateValueAndPreserveCaret(newValue){// Not all elements might have selection, and even if they have the
// right properties, accessing them might throw an exception (like for
// <input type=number>)
try{var start=this.inputElement.selectionStart;this.value=newValue;// The cursor automatically jumps to the end after re-setting the value,
// so restore it to its original position.
this.inputElement.selectionStart=start;this.inputElement.selectionEnd=start}catch(e){// Just set the value and give up on the caret.
this.value=newValue}},_computeAlwaysFloatLabel:function _computeAlwaysFloatLabel(alwaysFloatLabel,placeholder){return placeholder||alwaysFloatLabel},_updateAriaLabelledBy:function _updateAriaLabelledBy(){var label=(0,_shared_bundle_.dom)(this.root).querySelector("label");if(!label){this._ariaLabelledBy="";return}var labelledBy;if(label.id){labelledBy=label.id}else{labelledBy="paper-input-label-"+PaperInputHelper.NextLabelID++;label.id=labelledBy}this._ariaLabelledBy=labelledBy},_generateInputId:function _generateInputId(){if(!this._inputId||""===this._inputId){this._inputId="input-"+PaperInputHelper.NextInputID++}},_onChange:function _onChange(event){// In the Shadow DOM, the `change` event is not leaked into the
// ancestor tree, so we must do this manually.
// See
// https://w3c.github.io/webcomponents/spec/shadow/#events-that-are-not-leaked-into-ancestor-trees.
if(this.shadowRoot){this.fire(event.type,{sourceEvent:event},{node:this,bubbles:event.bubbles,cancelable:event.cancelable})}},_autofocusChanged:function _autofocusChanged(){// Firefox doesn't respect the autofocus attribute if it's applied after
// the page is loaded (Chrome/WebKit do respect it), preventing an
// autofocus attribute specified in markup from taking effect when the
// element is upgraded. As a workaround, if the autofocus property is set,
// and the focus hasn't already been moved elsewhere, we take focus.
if(this.autofocus&&this._focusableElement){// In IE 11, the default document.activeElement can be the page's
// outermost html element, but there are also cases (under the
// polyfill?) in which the activeElement is not a real HTMLElement, but
// just a plain object. We identify the latter case as having no valid
// activeElement.
var activeElement=document.activeElement,isActiveElementValid=babelHelpers.instanceof(activeElement,HTMLElement),isSomeElementActive=isActiveElementValid&&activeElement!==document.body&&activeElement!==document.documentElement;/* IE 11 */if(!isSomeElementActive){// No specific element has taken the focus yet, so we can take it.
this._focusableElement.focus()}}}};/** @polymerBehavior */_exports.PaperInputBehaviorImpl=PaperInputBehaviorImpl;var PaperInputBehavior=[_shared_bundle_.IronControlState,_shared_bundle_.IronA11yKeysBehavior,PaperInputBehaviorImpl];_exports.PaperInputBehavior=PaperInputBehavior;var paperInputBehavior={PaperInputHelper:PaperInputHelper,PaperInputBehaviorImpl:PaperInputBehaviorImpl,PaperInputBehavior:PaperInputBehavior};_exports.$paperInputBehavior=paperInputBehavior;var $_documentContainer$1=document.createElement("template");$_documentContainer$1.setAttribute("style","display: none;");$_documentContainer$1.innerHTML="<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      /* Shared Styles */\n      --paper-font-common-base: {\n        font-family: 'Roboto', 'Noto', sans-serif;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-code: {\n        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-expensive-kerning: {\n        text-rendering: optimizeLegibility;\n      };\n\n      --paper-font-common-nowrap: {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      };\n\n      /* Material Font Styles */\n\n      --paper-font-display4: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 112px;\n        font-weight: 300;\n        letter-spacing: -.044em;\n        line-height: 120px;\n      };\n\n      --paper-font-display3: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 56px;\n        font-weight: 400;\n        letter-spacing: -.026em;\n        line-height: 60px;\n      };\n\n      --paper-font-display2: {\n        @apply --paper-font-common-base;\n\n        font-size: 45px;\n        font-weight: 400;\n        letter-spacing: -.018em;\n        line-height: 48px;\n      };\n\n      --paper-font-display1: {\n        @apply --paper-font-common-base;\n\n        font-size: 34px;\n        font-weight: 400;\n        letter-spacing: -.01em;\n        line-height: 40px;\n      };\n\n      --paper-font-headline: {\n        @apply --paper-font-common-base;\n\n        font-size: 24px;\n        font-weight: 400;\n        letter-spacing: -.012em;\n        line-height: 32px;\n      };\n\n      --paper-font-title: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 20px;\n        font-weight: 500;\n        line-height: 28px;\n      };\n\n      --paper-font-subhead: {\n        @apply --paper-font-common-base;\n\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n      };\n\n      --paper-font-body2: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-body1: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n      };\n\n      --paper-font-caption: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 12px;\n        font-weight: 400;\n        letter-spacing: 0.011em;\n        line-height: 20px;\n      };\n\n      --paper-font-menu: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 13px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-button: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 14px;\n        font-weight: 500;\n        letter-spacing: 0.018em;\n        line-height: 24px;\n        text-transform: uppercase;\n      };\n\n      --paper-font-code2: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 20px;\n      };\n\n      --paper-font-code1: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 20px;\n      };\n\n    }\n\n  </style>\n</custom-style>";document.head.appendChild($_documentContainer$1.content);/**
                                                          @license
                                                          Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
                                                          This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                          The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                          The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                          Code distributed by Google as part of the polymer project is also
                                                          subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                          */ /*
                                                             Typographic styles are provided matching the Material Design standard styles:
                                                             http://www.google.com/design/spec/style/typography.html#typography-standard-styles
                                                             
                                                             Note that these are English/Latin centric styles. You may need to further adjust
                                                             line heights and weights for CJK typesetting. See the notes in the Material
                                                             Design typography section.
                                                             */ /*
                                                                  FIXME(polymer-modulizer): the above comments were extracted
                                                                  from HTML and may be out of place here. Review them and
                                                                  then delete this comment!
                                                                */;(0,_shared_bundle_.Polymer)({/** @override */_template:(0,_shared_bundle_.html$2)(_templateObject6_ee6302702caa11ea91a843ae9cba1c4a()),is:"paper-input-char-counter",behaviors:[PaperInputAddonBehavior],properties:{_charCounterStr:{type:String,value:"0"}},/**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */update:function update(state){if(!state.inputElement){return}state.value=state.value||"";var counter=state.value.toString().length.toString();if(state.inputElement.hasAttribute("maxlength")){counter+="/"+state.inputElement.getAttribute("maxlength")}this._charCounterStr=counter}});var template$1=(0,_shared_bundle_.html$2)(_templateObject7_ee6302702caa11ea91a843ae9cba1c4a());template$1.setAttribute("style","display: none;");document.head.appendChild(template$1.content);/*
                                               `<paper-input-container>` is a container for a `<label>`, an `<iron-input>` or
                                               `<textarea>` and optional add-on elements such as an error message or character
                                               counter, used to implement Material Design text fields.
                                                                                           For example:
                                                                                               <paper-input-container>
                                                   <label slot="label">Your name</label>
                                                   <iron-input slot="input">
                                                     <input>
                                                   </iron-input>
                                                   // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
                                               instead of the above.
                                                 </paper-input-container>
                                                                                           You can style the nested `<input>` however you want; if you want it to look like
                                               a Material Design input, you can style it with the
                                               --paper-input-container-shared-input-style mixin.
                                                                                           Do not wrap `<paper-input-container>` around elements that already include it,
                                               such as `<paper-input>`. Doing so may cause events to bounce infinitely between
                                               the container and its contained element.
                                                                                           ### Listening for input changes
                                                                                           By default, it listens for changes on the `bind-value` attribute on its children
                                               nodes and perform tasks such as auto-validating and label styling when the
                                               `bind-value` changes. You can configure the attribute it listens to with the
                                               `attr-for-value` attribute.
                                                                                           ### Using a custom input element
                                                                                           You can use a custom input element in a `<paper-input-container>`, for example
                                               to implement a compound input field like a social security number input. The
                                               custom input element should have the `paper-input-input` class, have a
                                               `notify:true` value property and optionally implements
                                               `Polymer.IronValidatableBehavior` if it is validatable.
                                                                                               <paper-input-container attr-for-value="ssn-value">
                                                   <label slot="label">Social security number</label>
                                                   <ssn-input slot="input" class="paper-input-input"></ssn-input>
                                                 </paper-input-container>
                                                                                           
                                               If you're using a `<paper-input-container>` imperatively, it's important to make
                                               sure that you attach its children (the `iron-input` and the optional `label`)
                                               before you attach the `<paper-input-container>` itself, so that it can be set up
                                               correctly.
                                                                                           ### Validation
                                                                                           If the `auto-validate` attribute is set, the input container will validate the
                                               input and update the container styling when the input value changes.
                                                                                           ### Add-ons
                                                                                           Add-ons are child elements of a `<paper-input-container>` with the `add-on`
                                               attribute and implements the `Polymer.PaperInputAddonBehavior` behavior. They
                                               are notified when the input value or validity changes, and may implement
                                               functionality such as error messages or character counters. They appear at the
                                               bottom of the input.
                                                                                           ### Prefixes and suffixes
                                               These are child elements of a `<paper-input-container>` with the `prefix`
                                               or `suffix` attribute, and are displayed inline with the input, before or after.
                                                                                               <paper-input-container>
                                                   <div slot="prefix">$</div>
                                                   <label slot="label">Total</label>
                                                   <iron-input slot="input">
                                                     <input>
                                                   </iron-input>
                                                   // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
                                               instead of the above. <paper-icon-button slot="suffix"
                                               icon="clear"></paper-icon-button>
                                                 </paper-input-container>
                                                                                           ### Styling
                                                                                           The following custom properties and mixins are available for styling:
                                                                                           Custom property | Description | Default
                                               ----------------|-------------|----------
                                               `--paper-input-container-color` | Label and underline color when the input is not focused | `--secondary-text-color`
                                               `--paper-input-container-focus-color` | Label and underline color when the input is focused | `--primary-color`
                                               `--paper-input-container-invalid-color` | Label and underline color when the input is is invalid | `--error-color`
                                               `--paper-input-container-input-color` | Input foreground color | `--primary-text-color`
                                               `--paper-input-container` | Mixin applied to the container | `{}`
                                               `--paper-input-container-disabled` | Mixin applied to the container when it's disabled | `{}`
                                               `--paper-input-container-label` | Mixin applied to the label | `{}`
                                               `--paper-input-container-label-focus` | Mixin applied to the label when the input is focused | `{}`
                                               `--paper-input-container-label-floating` | Mixin applied to the label when floating | `{}`
                                               `--paper-input-container-input` | Mixin applied to the input | `{}`
                                               `--paper-input-container-input-align` | The vertical-align property of the input | `bottom`
                                               `--paper-input-container-input-disabled` | Mixin applied to the input when the component is disabled | `{}`
                                               `--paper-input-container-input-focus` | Mixin applied to the input when focused | `{}`
                                               `--paper-input-container-input-invalid` | Mixin applied to the input when invalid | `{}`
                                               `--paper-input-container-input-webkit-spinner` | Mixin applied to the webkit spinner | `{}`
                                               `--paper-input-container-input-webkit-clear` | Mixin applied to the webkit clear button | `{}`
                                               `--paper-input-container-input-webkit-calendar-picker-indicator` | Mixin applied to the webkit calendar picker indicator | `{}`
                                               `--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer clear button | `{}`
                                               `--paper-input-container-underline` | Mixin applied to the underline | `{}`
                                               `--paper-input-container-underline-focus` | Mixin applied to the underline when the input is focused | `{}`
                                               `--paper-input-container-underline-disabled` | Mixin applied to the underline when the input is disabled | `{}`
                                               `--paper-input-prefix` | Mixin applied to the input prefix | `{}`
                                               `--paper-input-suffix` | Mixin applied to the input suffix | `{}`
                                                                                           This element is `display:block` by default, but you can set the `inline`
                                               attribute to make it `display:inline-block`.
                                               */(0,_shared_bundle_.Polymer)({/** @override */_template:(0,_shared_bundle_.html$2)(_templateObject8_ee6302702caa11ea91a843ae9cba1c4a()),is:"paper-input-container",properties:{/**
     * Set to true to disable the floating label. The label disappears when the
     * input value is not null.
     */noLabelFloat:{type:Boolean,value:!1},/**
     * Set to true to always float the floating label.
     */alwaysFloatLabel:{type:Boolean,value:!1},/**
     * The attribute to listen for value changes on.
     */attrForValue:{type:String,value:"bind-value"},/**
     * Set to true to auto-validate the input value when it changes.
     */autoValidate:{type:Boolean,value:!1},/**
     * True if the input is invalid. This property is set automatically when the
     * input value changes if auto-validating, or when the `iron-input-validate`
     * event is heard from a child.
     */invalid:{observer:"_invalidChanged",type:Boolean,value:!1},/**
     * True if the input has focus.
     */focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array// do not set a default value here intentionally - it will be initialized
// lazily when a distributed child is attached, which may occur before
// configuration for this element in polyfill.
},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function value(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function value(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function value(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function value(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return(0,_shared_bundle_.dashToCamelCase)(this.attrForValue)},get _inputElement(){return(0,_shared_bundle_.dom)(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},/** @override */ready:function ready(){// Paper-input treats a value of undefined differently at startup than
// the rest of the time (specifically: it does not validate it at startup,
// but it does after that. We need to track whether the first time we
// encounter the value is basically this first time, so that we can validate
// it correctly the rest of the time. See
// https://github.com/PolymerElements/paper-input/issues/605
this.__isFirstValueUpdate=!0;if(!this._addons){this._addons=[]}this.addEventListener("focus",this._boundOnFocus,!0);this.addEventListener("blur",this._boundOnBlur,!0)},/** @override */attached:function attached(){if(this.attrForValue){this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged)}else{this.addEventListener("input",this._onInput)}// Only validate when attached if the input already has a value.
if(this._inputElementValue&&""!=this._inputElementValue){this._handleValueAndAutoValidate(this._inputElement)}else{this._handleValue(this._inputElement)}},/** @private */_onAddonAttached:function _onAddonAttached(event){if(!this._addons){this._addons=[]}var target=event.target;if(-1===this._addons.indexOf(target)){this._addons.push(target);if(this.isAttached){this._handleValue(this._inputElement)}}},/** @private */_onFocus:function _onFocus(){this._setFocused(!0)},/** @private */_onBlur:function _onBlur(){this._setFocused(!1);this._handleValueAndAutoValidate(this._inputElement)},/** @private */_onInput:function _onInput(event){this._handleValueAndAutoValidate(event.target)},/** @private */_onValueChanged:function _onValueChanged(event){var input=event.target;// Paper-input treats a value of undefined differently at startup than
// the rest of the time (specifically: it does not validate it at startup,
// but it does after that. If this is in fact the bootup case, ignore
// validation, just this once.
if(this.__isFirstValueUpdate){this.__isFirstValueUpdate=!1;if(input.value===void 0||""===input.value){return}}this._handleValueAndAutoValidate(event.target)},/** @private */_handleValue:function _handleValue(inputElement){var value=this._inputElementValue;// type="number" hack needed because this.value is empty until it's valid
if(value||0===value||"number"===inputElement.type&&!inputElement.checkValidity()){this._inputHasContent=!0}else{this._inputHasContent=!1}this.updateAddons({inputElement:inputElement,value:value,invalid:this.invalid})},/** @private */_handleValueAndAutoValidate:function _handleValueAndAutoValidate(inputElement){if(this.autoValidate&&inputElement){var valid;if(inputElement.validate){valid=inputElement.validate(this._inputElementValue)}else{valid=inputElement.checkValidity()}this.invalid=!valid}// Call this last to notify the add-ons.
this._handleValue(inputElement)},/** @private */_onIronInputValidate:function _onIronInputValidate(event){this.invalid=this._inputElement.invalid},/** @private */_invalidChanged:function _invalidChanged(){if(this._addons){this.updateAddons({invalid:this.invalid})}},/**
   * Call this to update the state of add-ons.
   * @param {Object} state Add-on state.
   */updateAddons:function updateAddons(state){for(var addon,index=0;addon=this._addons[index];index++){addon.update(state)}},/** @private */_computeInputContentClass:function _computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent){var cls="input-content";if(!noLabelFloat){var label=this.querySelector("label");if(alwaysFloatLabel||_inputHasContent){cls+=" label-is-floating";// If the label is floating, ignore any offsets that may have been
// applied from a prefix element.
this.$.labelAndInputContainer.style.position="static";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" label-is-highlighted"}}else{// When the label is not floating, it should overlap the input element.
if(label){this.$.labelAndInputContainer.style.position="relative"}if(invalid){cls+=" is-invalid"}}}else{if(_inputHasContent){cls+=" label-is-hidden"}if(invalid){cls+=" is-invalid"}}if(focused){cls+=" focused"}return cls},/** @private */_computeUnderlineClass:function _computeUnderlineClass(focused,invalid){var cls="underline";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" is-highlighted"}return cls},/** @private */_computeAddOnContentClass:function _computeAddOnContentClass(focused,invalid){var cls="add-on-content";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" is-highlighted"}return cls}});(0,_shared_bundle_.Polymer)({/** @override */_template:(0,_shared_bundle_.html$2)(_templateObject9_ee6302702caa11ea91a843ae9cba1c4a()),is:"paper-input-error",behaviors:[PaperInputAddonBehavior],properties:{/**
     * True if the error is showing.
     */invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},/**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */update:function update(state){this._setInvalid(state.invalid)}});(0,_shared_bundle_.Polymer)({is:"paper-input",/** @override */_template:(0,_shared_bundle_.html$2)(_templateObject10_ee6302702caa11ea91a843ae9cba1c4a()),behaviors:[PaperInputBehavior,IronFormElementBehavior],properties:{value:{// Required for the correct TypeScript type-generation
type:String}},/**
   * Returns a reference to the focusable element. Overridden from
   * PaperInputBehavior to correctly focus the native input.
   *
   * @return {!HTMLElement}
   */get _focusableElement(){return this.inputElement._inputElement},// Note: This event is only available in the 1.0 version of this element.
// In 2.0, the functionality of `_onIronInputReady` is done in
// PaperInputBehavior::attached.
listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function _onIronInputReady(){// Even though this is only used in the next line, save this for
// backwards compatibility, since the native input had this ID until 2.0.5.
if(!this.$.nativeInput){this.$.nativeInput=/** @type {!Element} */this.$$("input")}if(this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)){this.alwaysFloatLabel=!0}// Only validate when attached if the input already has a value.
if(!!this.inputElement.bindValue){this.$.container._handleValueAndAutoValidate(this.inputElement)}}});(0,_shared_bundle_.Polymer)({/** @override */_template:(0,_shared_bundle_.html$2)(_templateObject11_ee6302702caa11ea91a843ae9cba1c4a()),is:"paper-textarea",behaviors:[PaperInputBehavior,IronFormElementBehavior],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{// Required for the correct TypeScript type-generation
type:String},/**
     * The initial number of rows.
     * @type {number}
     * @default 1
     */rows:{type:Number,value:1},/**
     * The maximum number of rows this element can grow to until it
     * scrolls. 0 means no maximum.
     * @type {number}
     * @default 0
     */maxRows:{type:Number,value:0}},/**
   * @return {number}
   */get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(start){this.$.input.textarea.selectionStart=start},/**
   * @return {number}
   */get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(end){this.$.input.textarea.selectionEnd=end},_ariaLabelledByChanged:function _ariaLabelledByChanged(ariaLabelledBy){this._focusableElement.setAttribute("aria-labelledby",ariaLabelledBy)},_ariaDescribedByChanged:function _ariaDescribedByChanged(ariaDescribedBy){this._focusableElement.setAttribute("aria-describedby",ariaDescribedBy)},get _focusableElement(){return this.inputElement.textarea}});var MyView7=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(MyView7,_PolymerElement);function MyView7(){babelHelpers.classCallCheck(this,MyView7);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MyView7).apply(this,arguments))}babelHelpers.createClass(MyView7,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(MyView7.prototype),"ready",this).call(this)}},{key:"validate",value:function validate(){document.getElementById("form4").validate()}}],[{key:"template",get:function get(){return(0,_shared_bundle_.html)(_templateObject12_ee6302702caa11ea91a843ae9cba1c4a())}}]);return MyView7}(_shared_bundle_.PolymerElement);window.customElements.define("my-view7",MyView7)});