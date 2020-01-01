Polymer.AppLayout.registerEffect("resizable-logo",{setUp:function setUp(config){// the effect's config is passed to the setUp.
this._fxResizeLogo={logo:Polymer.dom(this).querySelector("[logo]")}},run:function run(progress){// the progress of the effect
this.transform("scale3d("+progress+", "+progress+", 1)",this._fxResizeLogo.logo)},tearDown:function tearDown(){// clean up and reset of states
delete this._fxResizeLogo}});