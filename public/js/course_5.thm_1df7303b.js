
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/gamemain/game_skins/Interactive/IE_Math_1_1/IE_Math_1_1_1_Skin.exml'] = window.IE_Math_1_1_1_Skin = (function (_super) {
	__extends(IE_Math_1_1_1_Skin, _super);
	function IE_Math_1_1_1_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","optnum5","opt5","optnum6","opt6","optnum7","opt7","optnum8","opt8","optnum9","opt9","optnum10","opt10","rect_g_1","itemnum1","item1","itemnum2","item2","itemnum3","item3","itemnum4","item4","itemnum5","item5","itemnum6","item6","itemnum7","item7"];
		
		this.height = 708;
		this.width = 1002;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = IE_Math_1_1_1_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 708;
		t.width = 1002;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.opt5_i(),this.opt6_i(),this.opt7_i(),this.opt8_i(),this.opt9_i(),this.opt10_i(),this.rect_g_1_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 709;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor6_png";
		t.width = 1003;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_bg1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1002;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 13;
		t.width = 138;
		t.x = 842;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 106;
		t.width = 79;
		t.x = 38;
		t.y = 538;
		t.elementsContent = [this._Image3_i(),this.optnum1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 106;
		t.width = 79;
		t.x = 132;
		t.y = 538;
		t.elementsContent = [this._Image4_i(),this.optnum2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 106;
		t.width = 79;
		t.x = 226;
		t.y = 538;
		t.elementsContent = [this._Image5_i(),this.optnum3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 106;
		t.width = 79;
		t.x = 320;
		t.y = 538;
		t.elementsContent = [this._Image6_i(),this.optnum4_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt5_i = function () {
		var t = new eui.Group();
		this.opt5 = t;
		t.height = 106;
		t.width = 79;
		t.x = 414;
		t.y = 538;
		t.elementsContent = [this._Image7_i(),this.optnum5_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum5_i = function () {
		var t = new eui.Group();
		this.optnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt6_i = function () {
		var t = new eui.Group();
		this.opt6 = t;
		t.height = 106;
		t.width = 79;
		t.x = 508;
		t.y = 538;
		t.elementsContent = [this._Image8_i(),this.optnum6_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum6_i = function () {
		var t = new eui.Group();
		this.optnum6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt7_i = function () {
		var t = new eui.Group();
		this.opt7 = t;
		t.height = 106;
		t.width = 79;
		t.x = 602;
		t.y = 538;
		t.elementsContent = [this._Image9_i(),this.optnum7_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum7_i = function () {
		var t = new eui.Group();
		this.optnum7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt8_i = function () {
		var t = new eui.Group();
		this.opt8 = t;
		t.height = 106;
		t.width = 79;
		t.x = 696;
		t.y = 538;
		t.elementsContent = [this._Image10_i(),this.optnum8_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum8_i = function () {
		var t = new eui.Group();
		this.optnum8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt9_i = function () {
		var t = new eui.Group();
		this.opt9 = t;
		t.height = 106;
		t.width = 79;
		t.x = 790;
		t.y = 538;
		t.elementsContent = [this._Image11_i(),this.optnum9_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum9_i = function () {
		var t = new eui.Group();
		this.optnum9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt10_i = function () {
		var t = new eui.Group();
		this.opt10 = t;
		t.height = 106;
		t.width = 79;
		t.x = 884;
		t.y = 538;
		t.elementsContent = [this._Image12_i(),this.optnum10_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum10_i = function () {
		var t = new eui.Group();
		this.optnum10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 85.5;
		t.width = 79;
		t.x = 576;
		t.y = 327;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 112;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 739.5;
		t.y = 266.2;
		t.elementsContent = [this.itemnum1_i()];
		return t;
	};
	_proto.itemnum1_i = function () {
		var t = new eui.Group();
		this.itemnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 70;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 112;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 629.5;
		t.y = 147.2;
		t.elementsContent = [this.itemnum2_i()];
		return t;
	};
	_proto.itemnum2_i = function () {
		var t = new eui.Group();
		this.itemnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 112;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 555.5;
		t.y = 274.2;
		t.elementsContent = [this.itemnum3_i()];
		return t;
	};
	_proto.itemnum3_i = function () {
		var t = new eui.Group();
		this.itemnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 2;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 112;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 363.5;
		t.y = 281;
		t.elementsContent = [this.itemnum4_i()];
		return t;
	};
	_proto.itemnum4_i = function () {
		var t = new eui.Group();
		this.itemnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -20.5;
		t.width = 53.2;
		t.x = -62;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.height = 112;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 260.1;
		t.y = 163.2;
		t.elementsContent = [this.itemnum5_i()];
		return t;
	};
	_proto.itemnum5_i = function () {
		var t = new eui.Group();
		this.itemnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -42.5;
		t.width = 53.2;
		t.x = -60;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Group();
		this.item6 = t;
		t.height = 112;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 143.5;
		t.y = 272.2;
		t.elementsContent = [this.itemnum6_i()];
		return t;
	};
	_proto.itemnum6_i = function () {
		var t = new eui.Group();
		this.itemnum6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Group();
		this.item7 = t;
		t.height = 112;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 419.5;
		t.y = 140.2;
		t.elementsContent = [this.itemnum7_i()];
		return t;
	};
	_proto.itemnum7_i = function () {
		var t = new eui.Group();
		this.itemnum7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	return IE_Math_1_1_1_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Interactive/IE_Math_1_1/IE_Math_1_1_2_Skin.exml'] = window.IE_Math_1_1_2_Skin = (function (_super) {
	__extends(IE_Math_1_1_2_Skin, _super);
	function IE_Math_1_1_2_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","optnum5","opt5","optnum6","opt6","optnum7","opt7","optnum8","opt8","optnum9","opt9","optnum10","opt10","rect_g_1"];
		
		this.height = 708;
		this.width = 1002;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = IE_Math_1_1_2_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 708;
		t.width = 1002;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.opt5_i(),this.opt6_i(),this.opt7_i(),this.opt8_i(),this.opt9_i(),this.opt10_i(),this.rect_g_1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 709;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor6_png";
		t.width = 1003;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_bg2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1002;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 13;
		t.width = 138;
		t.x = 842;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 106;
		t.width = 79;
		t.x = 38;
		t.y = 538;
		t.elementsContent = [this._Image3_i(),this.optnum1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 106;
		t.width = 79;
		t.x = 132;
		t.y = 538;
		t.elementsContent = [this._Image4_i(),this.optnum2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 106;
		t.width = 79;
		t.x = 226;
		t.y = 538;
		t.elementsContent = [this._Image5_i(),this.optnum3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 106;
		t.width = 79;
		t.x = 320;
		t.y = 538;
		t.elementsContent = [this._Image6_i(),this.optnum4_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt5_i = function () {
		var t = new eui.Group();
		this.opt5 = t;
		t.height = 106;
		t.width = 79;
		t.x = 414;
		t.y = 538;
		t.elementsContent = [this._Image7_i(),this.optnum5_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum5_i = function () {
		var t = new eui.Group();
		this.optnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt6_i = function () {
		var t = new eui.Group();
		this.opt6 = t;
		t.height = 106;
		t.width = 79;
		t.x = 508;
		t.y = 538;
		t.elementsContent = [this._Image8_i(),this.optnum6_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum6_i = function () {
		var t = new eui.Group();
		this.optnum6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt7_i = function () {
		var t = new eui.Group();
		this.opt7 = t;
		t.height = 106;
		t.width = 79;
		t.x = 602;
		t.y = 538;
		t.elementsContent = [this._Image9_i(),this.optnum7_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum7_i = function () {
		var t = new eui.Group();
		this.optnum7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt8_i = function () {
		var t = new eui.Group();
		this.opt8 = t;
		t.height = 106;
		t.width = 79;
		t.x = 696;
		t.y = 538;
		t.elementsContent = [this._Image10_i(),this.optnum8_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum8_i = function () {
		var t = new eui.Group();
		this.optnum8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt9_i = function () {
		var t = new eui.Group();
		this.opt9 = t;
		t.height = 106;
		t.width = 79;
		t.x = 790;
		t.y = 538;
		t.elementsContent = [this._Image11_i(),this.optnum9_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum9_i = function () {
		var t = new eui.Group();
		this.optnum9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.opt10_i = function () {
		var t = new eui.Group();
		this.opt10 = t;
		t.height = 106;
		t.width = 79;
		t.x = 884;
		t.y = 538;
		t.elementsContent = [this._Image12_i(),this.optnum10_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.optnum10_i = function () {
		var t = new eui.Group();
		this.optnum10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 0;
		t.width = 79;
		t.x = 0;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 85.5;
		t.width = 79;
		t.x = 574;
		t.y = 327;
		return t;
	};
	return IE_Math_1_1_2_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Interactive/IE_Math_1_1/IE_Math_1_1_3_Skin.exml'] = window.IE_Math_1_1_3_Skin = (function (_super) {
	__extends(IE_Math_1_1_3_Skin, _super);
	function IE_Math_1_1_3_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","optnum5","opt5","optnum6","opt6","rect_g_1","rect_g_2","circleBtn"];
		
		this.height = 708;
		this.width = 1002;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = IE_Math_1_1_3_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 708;
		t.width = 1002;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.opt5_i(),this.opt6_i(),this.rect_g_1_i(),this.rect_g_2_i(),this.circleBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 709;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor6_png";
		t.width = 1003;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_bg3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1002;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 13;
		t.width = 138;
		t.x = 842;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 112;
		t.name = "1";
		t.width = 116;
		t.x = 120;
		t.y = 356;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 112;
		t.name = "2";
		t.width = 116;
		t.x = 662;
		t.y = 366;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -2.5;
		t.width = 53.2;
		t.x = 112;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 112;
		t.name = "3";
		t.width = 116;
		t.x = 266;
		t.y = 370;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -14.5;
		t.width = 53.2;
		t.x = 120;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 112;
		t.name = "4";
		t.width = 116;
		t.x = 168;
		t.y = 136;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -28.5;
		t.width = 53.2;
		t.x = -56;
		return t;
	};
	_proto.opt5_i = function () {
		var t = new eui.Group();
		this.opt5 = t;
		t.height = 112;
		t.name = "5";
		t.width = 116;
		t.x = 592;
		t.y = 252;
		t.elementsContent = [this.optnum5_i()];
		return t;
	};
	_proto.optnum5_i = function () {
		var t = new eui.Group();
		this.optnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 70;
		return t;
	};
	_proto.opt6_i = function () {
		var t = new eui.Group();
		this.opt6 = t;
		t.height = 112;
		t.name = "6";
		t.width = 116;
		t.x = 450;
		t.y = 120;
		t.elementsContent = [this.optnum6_i()];
		return t;
	};
	_proto.optnum6_i = function () {
		var t = new eui.Group();
		this.optnum6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 39.5;
		t.width = 53.2;
		t.x = -56;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 265.5;
		t.width = 105;
		t.x = 696;
		t.y = 327;
		return t;
	};
	_proto.rect_g_2_i = function () {
		var t = new eui.Group();
		this.rect_g_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 265.5;
		t.width = 469;
		t.x = 224;
		t.y = 337;
		return t;
	};
	_proto.circleBtn_i = function () {
		var t = new eui.Group();
		this.circleBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 263.5;
		t.width = 113;
		t.x = 828;
		t.y = 347;
		return t;
	};
	return IE_Math_1_1_3_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Interactive/IE_Math_1_1/IE_Math_1_1_4_Skin.exml'] = window.IE_Math_1_1_4_Skin = (function (_super) {
	__extends(IE_Math_1_1_4_Skin, _super);
	function IE_Math_1_1_4_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","group_top","opt1","opt2"];
		
		this.height = 708;
		this.width = 1002;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = IE_Math_1_1_4_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 708;
		t.width = 1002;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this._Image3_i(),this.opt1_i(),this._Image5_i(),this.opt2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 709;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor6_png";
		t.width = 1003;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_bg4_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1002;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 13;
		t.width = 138;
		t.x = 842;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_6_png";
		t.x = 234;
		t.y = 564;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 114;
		t.width = 180;
		t.x = 230;
		t.y = 560;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_7_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_6_png";
		t.x = 576;
		t.y = 564;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 114;
		t.width = 180;
		t.x = 572;
		t.y = 560;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_math_1_1_common_8_png";
		t.verticalCenter = 0;
		t.x = -92;
		t.y = -232;
		return t;
	};
	return IE_Math_1_1_4_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_1/IT_Math_1_1_1_Skin.exml'] = window.IT_Math_1_1_1_Skin = (function (_super) {
	__extends(IT_Math_1_1_1_Skin, _super);
	function IT_Math_1_1_1_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","itemnum1","item1","itemnum2","item2","itemnum3","item3","itemnum4","item4","itemnum5","item5","itemnum6","item6","itemnum7","item7","itemnum8","item8","opt1","opt2","opt3","opt4","opt5","opt6","opt7","opt8","opt9","opt10","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_1_1_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.opt5_i(),this.opt6_i(),this.opt7_i(),this.opt8_i(),this.opt9_i(),this.opt10_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor10_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it_math_1_1_bg1_png";
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i(),this._Image3_i(),this._Image4_i(),this.ie_top_star_i(),this.sec_bg_i(),this.sec_cur_img_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 1178;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "ie_common_5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 143;
		t.x = 1000;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.source = "ie_common_4_png";
		t.visible = false;
		t.width = 34;
		t.x = 1020;
		t.y = 34.5;
		return t;
	};
	_proto.ie_top_star_i = function () {
		var t = new eui.Label();
		this.ie_top_star = t;
		t.anchorOffsetX = 0;
		t.text = "999";
		t.visible = false;
		t.width = 84;
		t.x = 1064;
		t.y = 36;
		return t;
	};
	_proto.sec_bg_i = function () {
		var t = new eui.Image();
		this.sec_bg = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "ie_common_1_png";
		t.verticalCenter = 0;
		t.width = 414;
		return t;
	};
	_proto.sec_cur_img_i = function () {
		var t = new eui.Image();
		this.sec_cur_img = t;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(15,11,271,0);
		t.source = "ie_common_2_png";
		t.verticalCenter = -1;
		t.width = 460;
		t.x = 460;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 112;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 971.5;
		t.y = 394.2;
		t.elementsContent = [this.itemnum1_i()];
		return t;
	};
	_proto.itemnum1_i = function () {
		var t = new eui.Group();
		this.itemnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 70;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 112;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 1120;
		t.y = 221;
		t.elementsContent = [this.itemnum2_i()];
		return t;
	};
	_proto.itemnum2_i = function () {
		var t = new eui.Group();
		this.itemnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 112;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 782;
		t.y = 244;
		t.elementsContent = [this.itemnum3_i()];
		return t;
	};
	_proto.itemnum3_i = function () {
		var t = new eui.Group();
		this.itemnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 2;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 112;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 671.5;
		t.y = 379;
		t.elementsContent = [this.itemnum4_i()];
		return t;
	};
	_proto.itemnum4_i = function () {
		var t = new eui.Group();
		this.itemnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -20.5;
		t.width = 53.2;
		t.x = -62;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.height = 112;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 290.1;
		t.y = 225.2;
		t.elementsContent = [this.itemnum5_i()];
		return t;
	};
	_proto.itemnum5_i = function () {
		var t = new eui.Group();
		this.itemnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -42.5;
		t.width = 53.2;
		t.x = -60;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Group();
		this.item6 = t;
		t.height = 112;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 177.5;
		t.y = 384.2;
		t.elementsContent = [this.itemnum6_i()];
		return t;
	};
	_proto.itemnum6_i = function () {
		var t = new eui.Group();
		this.itemnum6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Group();
		this.item7 = t;
		t.height = 112;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 539.5;
		t.y = 226.2;
		t.elementsContent = [this.itemnum7_i()];
		return t;
	};
	_proto.itemnum7_i = function () {
		var t = new eui.Group();
		this.itemnum7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.item8_i = function () {
		var t = new eui.Group();
		this.item8 = t;
		t.height = 112;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 447.5;
		t.y = 384.2;
		t.elementsContent = [this.itemnum8_i()];
		return t;
	};
	_proto.itemnum8_i = function () {
		var t = new eui.Group();
		this.itemnum8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 30;
		t.y = 562;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 160;
		t.y = 562;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 290;
		t.y = 560;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 420;
		t.y = 562;
		return t;
	};
	_proto.opt5_i = function () {
		var t = new eui.Group();
		this.opt5 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 552;
		t.y = 562;
		return t;
	};
	_proto.opt6_i = function () {
		var t = new eui.Group();
		this.opt6 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 682;
		t.y = 562;
		return t;
	};
	_proto.opt7_i = function () {
		var t = new eui.Group();
		this.opt7 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 814;
		t.y = 562;
		return t;
	};
	_proto.opt8_i = function () {
		var t = new eui.Group();
		this.opt8 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 942;
		t.y = 562;
		return t;
	};
	_proto.opt9_i = function () {
		var t = new eui.Group();
		this.opt9 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1074;
		t.y = 562;
		return t;
	};
	_proto.opt10_i = function () {
		var t = new eui.Group();
		this.opt10 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1202;
		t.y = 562;
		return t;
	};
	return IT_Math_1_1_1_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_1/IT_Math_1_1_10_Skin.exml'] = window.IT_Math_1_2_10_Skin = (function (_super) {
	__extends(IT_Math_1_2_10_Skin, _super);
	function IT_Math_1_2_10_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_2_10_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor10_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it_math_1_2_bg10_png";
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i(),this._Image3_i(),this._Image4_i(),this.ie_top_star_i(),this.sec_bg_i(),this.sec_cur_img_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 1178;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "ie_common_5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 143;
		t.x = 1000;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.source = "ie_common_4_png";
		t.visible = false;
		t.width = 34;
		t.x = 1020;
		t.y = 34.5;
		return t;
	};
	_proto.ie_top_star_i = function () {
		var t = new eui.Label();
		this.ie_top_star = t;
		t.anchorOffsetX = 0;
		t.text = "999";
		t.visible = false;
		t.width = 84;
		t.x = 1064;
		t.y = 36;
		return t;
	};
	_proto.sec_bg_i = function () {
		var t = new eui.Image();
		this.sec_bg = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "ie_common_1_png";
		t.verticalCenter = 0;
		t.width = 414;
		return t;
	};
	_proto.sec_cur_img_i = function () {
		var t = new eui.Image();
		this.sec_cur_img = t;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(15,11,271,0);
		t.source = "ie_common_2_png";
		t.verticalCenter = -1;
		t.width = 460;
		t.x = 460;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 171;
		t.y = 550;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 761;
		t.y = 550;
		return t;
	};
	return IT_Math_1_2_10_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_1/IT_Math_1_1_2_Skin.exml'] = window.IT_Math_1_1_2_Skin = (function (_super) {
	__extends(IT_Math_1_1_2_Skin, _super);
	function IT_Math_1_1_2_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","itemnum1","item1","itemnum2","item2","itemnum3","item3","itemnum4","item4","itemnum5","item5","itemnum6","item6","opt1","opt2","opt3","opt4","opt5","opt6","opt7","opt8","opt9","opt10","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_1_2_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.opt5_i(),this.opt6_i(),this.opt7_i(),this.opt8_i(),this.opt9_i(),this.opt10_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor10_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it_math_1_1_bg2_png";
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i(),this._Image3_i(),this._Image4_i(),this.ie_top_star_i(),this.sec_bg_i(),this.sec_cur_img_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 1178;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "ie_common_5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 143;
		t.x = 1000;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.source = "ie_common_4_png";
		t.visible = false;
		t.width = 34;
		t.x = 1020;
		t.y = 34.5;
		return t;
	};
	_proto.ie_top_star_i = function () {
		var t = new eui.Label();
		this.ie_top_star = t;
		t.anchorOffsetX = 0;
		t.text = "999";
		t.visible = false;
		t.width = 84;
		t.x = 1064;
		t.y = 36;
		return t;
	};
	_proto.sec_bg_i = function () {
		var t = new eui.Image();
		this.sec_bg = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "ie_common_1_png";
		t.verticalCenter = 0;
		t.width = 414;
		return t;
	};
	_proto.sec_cur_img_i = function () {
		var t = new eui.Image();
		this.sec_cur_img = t;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(15,11,271,0);
		t.source = "ie_common_2_png";
		t.verticalCenter = -1;
		t.width = 460;
		t.x = 460;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 112;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 937.5;
		t.y = 362.2;
		t.elementsContent = [this.itemnum1_i()];
		return t;
	};
	_proto.itemnum1_i = function () {
		var t = new eui.Group();
		this.itemnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 70;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 112;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 986;
		t.y = 201;
		t.elementsContent = [this.itemnum2_i()];
		return t;
	};
	_proto.itemnum2_i = function () {
		var t = new eui.Group();
		this.itemnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 112;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 674;
		t.y = 228;
		t.elementsContent = [this.itemnum3_i()];
		return t;
	};
	_proto.itemnum3_i = function () {
		var t = new eui.Group();
		this.itemnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 2;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 112;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 547.5;
		t.y = 373;
		t.elementsContent = [this.itemnum4_i()];
		return t;
	};
	_proto.itemnum4_i = function () {
		var t = new eui.Group();
		this.itemnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -20.5;
		t.width = 53.2;
		t.x = -62;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.height = 112;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 360.1;
		t.y = 215.2;
		t.elementsContent = [this.itemnum5_i()];
		return t;
	};
	_proto.itemnum5_i = function () {
		var t = new eui.Group();
		this.itemnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -42.5;
		t.width = 53.2;
		t.x = -60;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Group();
		this.item6 = t;
		t.height = 112;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 233.5;
		t.y = 360.2;
		t.elementsContent = [this.itemnum6_i()];
		return t;
	};
	_proto.itemnum6_i = function () {
		var t = new eui.Group();
		this.itemnum6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 28;
		t.y = 562;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 158;
		t.y = 562;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 288;
		t.y = 560;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 418;
		t.y = 562;
		return t;
	};
	_proto.opt5_i = function () {
		var t = new eui.Group();
		this.opt5 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 550;
		t.y = 562;
		return t;
	};
	_proto.opt6_i = function () {
		var t = new eui.Group();
		this.opt6 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 680;
		t.y = 562;
		return t;
	};
	_proto.opt7_i = function () {
		var t = new eui.Group();
		this.opt7 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 812;
		t.y = 562;
		return t;
	};
	_proto.opt8_i = function () {
		var t = new eui.Group();
		this.opt8 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 940;
		t.y = 562;
		return t;
	};
	_proto.opt9_i = function () {
		var t = new eui.Group();
		this.opt9 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1072;
		t.y = 562;
		return t;
	};
	_proto.opt10_i = function () {
		var t = new eui.Group();
		this.opt10 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1200;
		t.y = 562;
		return t;
	};
	return IT_Math_1_1_2_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_1/IT_Math_1_1_3_Skin.exml'] = window.IT_Math_1_1_3_Skin = (function (_super) {
	__extends(IT_Math_1_1_3_Skin, _super);
	function IT_Math_1_1_3_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","itemnum1","item1","itemnum2","item2","itemnum3","item3","itemnum4","item4","itemnum5","item5","itemnum6","item6","itemnum7","item7","itemnum8","item8","opt1","opt2","opt3","opt4","opt5","opt6","opt7","opt8","opt9","opt10","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_1_3_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.opt5_i(),this.opt6_i(),this.opt7_i(),this.opt8_i(),this.opt9_i(),this.opt10_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor10_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it_math_1_1_bg3_png";
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i(),this._Image3_i(),this._Image4_i(),this.ie_top_star_i(),this.sec_bg_i(),this.sec_cur_img_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 1178;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "ie_common_5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 143;
		t.x = 1000;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.source = "ie_common_4_png";
		t.visible = false;
		t.width = 34;
		t.x = 1020;
		t.y = 34.5;
		return t;
	};
	_proto.ie_top_star_i = function () {
		var t = new eui.Label();
		this.ie_top_star = t;
		t.anchorOffsetX = 0;
		t.text = "999";
		t.visible = false;
		t.width = 84;
		t.x = 1064;
		t.y = 36;
		return t;
	};
	_proto.sec_bg_i = function () {
		var t = new eui.Image();
		this.sec_bg = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "ie_common_1_png";
		t.verticalCenter = 0;
		t.width = 414;
		return t;
	};
	_proto.sec_cur_img_i = function () {
		var t = new eui.Image();
		this.sec_cur_img = t;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(15,11,271,0);
		t.source = "ie_common_2_png";
		t.verticalCenter = -1;
		t.width = 460;
		t.x = 460;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 112;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 865.5;
		t.y = 310.2;
		t.elementsContent = [this.itemnum1_i()];
		return t;
	};
	_proto.itemnum1_i = function () {
		var t = new eui.Group();
		this.itemnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 93.5;
		t.width = 53.2;
		t.x = 4;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 112;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 986;
		t.y = 257;
		t.elementsContent = [this.itemnum2_i()];
		return t;
	};
	_proto.itemnum2_i = function () {
		var t = new eui.Group();
		this.itemnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 90;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 112;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 708;
		t.y = 232;
		t.elementsContent = [this.itemnum3_i()];
		return t;
	};
	_proto.itemnum3_i = function () {
		var t = new eui.Group();
		this.itemnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 2;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 112;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 645.5;
		t.y = 355;
		t.elementsContent = [this.itemnum4_i()];
		return t;
	};
	_proto.itemnum4_i = function () {
		var t = new eui.Group();
		this.itemnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -20.5;
		t.width = 53.2;
		t.x = -62;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.height = 112;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 560.1;
		t.y = 221.2;
		t.elementsContent = [this.itemnum5_i()];
		return t;
	};
	_proto.itemnum5_i = function () {
		var t = new eui.Group();
		this.itemnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -4;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Group();
		this.item6 = t;
		t.height = 112;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 439.5;
		t.y = 308.2;
		t.elementsContent = [this.itemnum6_i()];
		return t;
	};
	_proto.itemnum6_i = function () {
		var t = new eui.Group();
		this.itemnum6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Group();
		this.item7 = t;
		t.height = 112;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 305.5;
		t.y = 328.2;
		t.elementsContent = [this.itemnum7_i()];
		return t;
	};
	_proto.itemnum7_i = function () {
		var t = new eui.Group();
		this.itemnum7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 0;
		return t;
	};
	_proto.item8_i = function () {
		var t = new eui.Group();
		this.item8 = t;
		t.height = 112;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 173.5;
		t.y = 272.2;
		t.elementsContent = [this.itemnum8_i()];
		return t;
	};
	_proto.itemnum8_i = function () {
		var t = new eui.Group();
		this.itemnum8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 30;
		t.y = 576;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 160;
		t.y = 576;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 290;
		t.y = 574;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 420;
		t.y = 576;
		return t;
	};
	_proto.opt5_i = function () {
		var t = new eui.Group();
		this.opt5 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 552;
		t.y = 576;
		return t;
	};
	_proto.opt6_i = function () {
		var t = new eui.Group();
		this.opt6 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 682;
		t.y = 576;
		return t;
	};
	_proto.opt7_i = function () {
		var t = new eui.Group();
		this.opt7 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 814;
		t.y = 576;
		return t;
	};
	_proto.opt8_i = function () {
		var t = new eui.Group();
		this.opt8 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 942;
		t.y = 576;
		return t;
	};
	_proto.opt9_i = function () {
		var t = new eui.Group();
		this.opt9 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1074;
		t.y = 576;
		return t;
	};
	_proto.opt10_i = function () {
		var t = new eui.Group();
		this.opt10 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1202;
		t.y = 576;
		return t;
	};
	return IT_Math_1_1_3_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_1/IT_Math_1_1_4_Skin.exml'] = window.IT_Math_1_1_4_Skin = (function (_super) {
	__extends(IT_Math_1_1_4_Skin, _super);
	function IT_Math_1_1_4_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","itemnum1","item1","itemnum2","item2","itemnum3","item3","itemnum4","item4","itemnum5","item5","itemnum6","item6","opt1","opt2","opt3","opt4","opt5","opt6","opt7","opt8","opt9","opt10","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_1_4_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.opt5_i(),this.opt6_i(),this.opt7_i(),this.opt8_i(),this.opt9_i(),this.opt10_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor10_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it_math_1_1_bg4_png";
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i(),this._Image3_i(),this._Image4_i(),this.ie_top_star_i(),this.sec_bg_i(),this.sec_cur_img_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 1178;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "ie_common_5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 143;
		t.x = 1000;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.source = "ie_common_4_png";
		t.visible = false;
		t.width = 34;
		t.x = 1020;
		t.y = 34.5;
		return t;
	};
	_proto.ie_top_star_i = function () {
		var t = new eui.Label();
		this.ie_top_star = t;
		t.anchorOffsetX = 0;
		t.text = "999";
		t.visible = false;
		t.width = 84;
		t.x = 1064;
		t.y = 36;
		return t;
	};
	_proto.sec_bg_i = function () {
		var t = new eui.Image();
		this.sec_bg = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "ie_common_1_png";
		t.verticalCenter = 0;
		t.width = 414;
		return t;
	};
	_proto.sec_cur_img_i = function () {
		var t = new eui.Image();
		this.sec_cur_img = t;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(15,11,271,0);
		t.source = "ie_common_2_png";
		t.verticalCenter = -1;
		t.width = 460;
		t.x = 460;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 112;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 861.5;
		t.y = 298.2;
		t.elementsContent = [this.itemnum1_i()];
		return t;
	};
	_proto.itemnum1_i = function () {
		var t = new eui.Group();
		this.itemnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 93.5;
		t.width = 53.2;
		t.x = 4;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 112;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 982;
		t.y = 257;
		t.elementsContent = [this.itemnum2_i()];
		return t;
	};
	_proto.itemnum2_i = function () {
		var t = new eui.Group();
		this.itemnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 90;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 112;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 708;
		t.y = 232;
		t.elementsContent = [this.itemnum3_i()];
		return t;
	};
	_proto.itemnum3_i = function () {
		var t = new eui.Group();
		this.itemnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 2;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 112;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 645.5;
		t.y = 355;
		t.elementsContent = [this.itemnum4_i()];
		return t;
	};
	_proto.itemnum4_i = function () {
		var t = new eui.Group();
		this.itemnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -20.5;
		t.width = 53.2;
		t.x = -62;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.height = 112;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 440.1;
		t.y = 283.2;
		t.elementsContent = [this.itemnum5_i()];
		return t;
	};
	_proto.itemnum5_i = function () {
		var t = new eui.Group();
		this.itemnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -4;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Group();
		this.item6 = t;
		t.height = 112;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 309.5;
		t.y = 320.2;
		t.elementsContent = [this.itemnum6_i()];
		return t;
	};
	_proto.itemnum6_i = function () {
		var t = new eui.Group();
		this.itemnum6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 28;
		t.y = 576;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 158;
		t.y = 576;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 288;
		t.y = 574;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 418;
		t.y = 576;
		return t;
	};
	_proto.opt5_i = function () {
		var t = new eui.Group();
		this.opt5 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 550;
		t.y = 576;
		return t;
	};
	_proto.opt6_i = function () {
		var t = new eui.Group();
		this.opt6 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 680;
		t.y = 576;
		return t;
	};
	_proto.opt7_i = function () {
		var t = new eui.Group();
		this.opt7 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 812;
		t.y = 576;
		return t;
	};
	_proto.opt8_i = function () {
		var t = new eui.Group();
		this.opt8 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 940;
		t.y = 576;
		return t;
	};
	_proto.opt9_i = function () {
		var t = new eui.Group();
		this.opt9 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1072;
		t.y = 576;
		return t;
	};
	_proto.opt10_i = function () {
		var t = new eui.Group();
		this.opt10 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1200;
		t.y = 576;
		return t;
	};
	return IT_Math_1_1_4_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_1/IT_Math_1_1_5_Skin.exml'] = window.IT_Math_1_1_5_Skin = (function (_super) {
	__extends(IT_Math_1_1_5_Skin, _super);
	function IT_Math_1_1_5_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","itemnum1","item1","itemnum2","item2","itemnum3","item3","itemnum4","item4","itemnum5","item5","itemnum6","item6","itemnum7","item7","itemnum8","item8","itemnum9","item9","opt1","opt2","opt3","opt4","opt5","opt6","opt7","opt8","opt9","opt10","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_1_5_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.item9_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.opt5_i(),this.opt6_i(),this.opt7_i(),this.opt8_i(),this.opt9_i(),this.opt10_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor10_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it_math_1_1_bg5_png";
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i(),this._Image3_i(),this._Image4_i(),this.ie_top_star_i(),this.sec_bg_i(),this.sec_cur_img_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 1178;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "ie_common_5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 143;
		t.x = 1000;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.source = "ie_common_4_png";
		t.visible = false;
		t.width = 34;
		t.x = 1020;
		t.y = 34.5;
		return t;
	};
	_proto.ie_top_star_i = function () {
		var t = new eui.Label();
		this.ie_top_star = t;
		t.anchorOffsetX = 0;
		t.text = "999";
		t.visible = false;
		t.width = 84;
		t.x = 1064;
		t.y = 36;
		return t;
	};
	_proto.sec_bg_i = function () {
		var t = new eui.Image();
		this.sec_bg = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "ie_common_1_png";
		t.verticalCenter = 0;
		t.width = 414;
		return t;
	};
	_proto.sec_cur_img_i = function () {
		var t = new eui.Image();
		this.sec_cur_img = t;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(15,11,271,0);
		t.source = "ie_common_2_png";
		t.verticalCenter = -1;
		t.width = 460;
		t.x = 460;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 112;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 799.5;
		t.y = 234.2;
		t.elementsContent = [this.itemnum1_i()];
		return t;
	};
	_proto.itemnum1_i = function () {
		var t = new eui.Group();
		this.itemnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -26.5;
		t.width = 53.2;
		t.x = 124;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 112;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 1082;
		t.y = 175;
		t.elementsContent = [this.itemnum2_i()];
		return t;
	};
	_proto.itemnum2_i = function () {
		var t = new eui.Group();
		this.itemnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 90;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 112;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 738;
		t.y = 386;
		t.elementsContent = [this.itemnum3_i()];
		return t;
	};
	_proto.itemnum3_i = function () {
		var t = new eui.Group();
		this.itemnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 2;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 112;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 597.5;
		t.y = 461;
		t.elementsContent = [this.itemnum4_i()];
		return t;
	};
	_proto.itemnum4_i = function () {
		var t = new eui.Group();
		this.itemnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -20.5;
		t.width = 53.2;
		t.x = -62;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.height = 112;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 482.1;
		t.y = 199.2;
		t.elementsContent = [this.itemnum5_i()];
		return t;
	};
	_proto.itemnum5_i = function () {
		var t = new eui.Group();
		this.itemnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -4;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Group();
		this.item6 = t;
		t.height = 112;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 61.5;
		t.y = 436.2;
		t.elementsContent = [this.itemnum6_i()];
		return t;
	};
	_proto.itemnum6_i = function () {
		var t = new eui.Group();
		this.itemnum6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Group();
		this.item7 = t;
		t.height = 112;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 287.5;
		t.y = 360.2;
		t.elementsContent = [this.itemnum7_i()];
		return t;
	};
	_proto.itemnum7_i = function () {
		var t = new eui.Group();
		this.itemnum7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 0;
		return t;
	};
	_proto.item8_i = function () {
		var t = new eui.Group();
		this.item8 = t;
		t.height = 112;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 97.5;
		t.y = 204.2;
		t.elementsContent = [this.itemnum8_i()];
		return t;
	};
	_proto.itemnum8_i = function () {
		var t = new eui.Group();
		this.itemnum8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.item9_i = function () {
		var t = new eui.Group();
		this.item9 = t;
		t.height = 112;
		t.name = "9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 1002;
		t.y = 444;
		t.elementsContent = [this.itemnum9_i()];
		return t;
	};
	_proto.itemnum9_i = function () {
		var t = new eui.Group();
		this.itemnum9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 2;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 24;
		t.y = 576;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 154;
		t.y = 576;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 284;
		t.y = 574;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 414;
		t.y = 576;
		return t;
	};
	_proto.opt5_i = function () {
		var t = new eui.Group();
		this.opt5 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 546;
		t.y = 576;
		return t;
	};
	_proto.opt6_i = function () {
		var t = new eui.Group();
		this.opt6 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 676;
		t.y = 576;
		return t;
	};
	_proto.opt7_i = function () {
		var t = new eui.Group();
		this.opt7 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 808;
		t.y = 576;
		return t;
	};
	_proto.opt8_i = function () {
		var t = new eui.Group();
		this.opt8 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 936;
		t.y = 576;
		return t;
	};
	_proto.opt9_i = function () {
		var t = new eui.Group();
		this.opt9 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1068;
		t.y = 576;
		return t;
	};
	_proto.opt10_i = function () {
		var t = new eui.Group();
		this.opt10 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1196;
		t.y = 576;
		return t;
	};
	return IT_Math_1_1_5_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_1/IT_Math_1_1_6_Skin.exml'] = window.IT_Math_1_1_6_Skin = (function (_super) {
	__extends(IT_Math_1_1_6_Skin, _super);
	function IT_Math_1_1_6_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","itemnum1","item1","itemnum2","item2","itemnum3","item3","itemnum4","item4","itemnum5","item5","opt1","opt2","opt3","opt4","opt5","opt6","opt7","opt8","opt9","opt10","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_1_6_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.opt5_i(),this.opt6_i(),this.opt7_i(),this.opt8_i(),this.opt9_i(),this.opt10_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor10_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it_math_1_1_bg6_png";
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i(),this._Image3_i(),this._Image4_i(),this.ie_top_star_i(),this.sec_bg_i(),this.sec_cur_img_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 1178;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "ie_common_5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 143;
		t.x = 1000;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.source = "ie_common_4_png";
		t.visible = false;
		t.width = 34;
		t.x = 1020;
		t.y = 34.5;
		return t;
	};
	_proto.ie_top_star_i = function () {
		var t = new eui.Label();
		this.ie_top_star = t;
		t.anchorOffsetX = 0;
		t.text = "999";
		t.visible = false;
		t.width = 84;
		t.x = 1064;
		t.y = 36;
		return t;
	};
	_proto.sec_bg_i = function () {
		var t = new eui.Image();
		this.sec_bg = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "ie_common_1_png";
		t.verticalCenter = 0;
		t.width = 414;
		return t;
	};
	_proto.sec_cur_img_i = function () {
		var t = new eui.Image();
		this.sec_cur_img = t;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(15,11,271,0);
		t.source = "ie_common_2_png";
		t.verticalCenter = -1;
		t.width = 460;
		t.x = 460;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 112;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 1017.5;
		t.y = 406.2;
		t.elementsContent = [this.itemnum1_i()];
		return t;
	};
	_proto.itemnum1_i = function () {
		var t = new eui.Group();
		this.itemnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -26.5;
		t.width = 53.2;
		t.x = 124;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 112;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 980;
		t.y = 195;
		t.elementsContent = [this.itemnum2_i()];
		return t;
	};
	_proto.itemnum2_i = function () {
		var t = new eui.Group();
		this.itemnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 90;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 112;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 696;
		t.y = 406;
		t.elementsContent = [this.itemnum3_i()];
		return t;
	};
	_proto.itemnum3_i = function () {
		var t = new eui.Group();
		this.itemnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 2;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 112;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 211.5;
		t.y = 409;
		t.elementsContent = [this.itemnum4_i()];
		return t;
	};
	_proto.itemnum4_i = function () {
		var t = new eui.Group();
		this.itemnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -20.5;
		t.width = 53.2;
		t.x = -62;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.height = 112;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 310.1;
		t.y = 235.2;
		t.elementsContent = [this.itemnum5_i()];
		return t;
	};
	_proto.itemnum5_i = function () {
		var t = new eui.Group();
		this.itemnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -4;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 24;
		t.y = 578;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 154;
		t.y = 578;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 284;
		t.y = 576;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 414;
		t.y = 578;
		return t;
	};
	_proto.opt5_i = function () {
		var t = new eui.Group();
		this.opt5 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 546;
		t.y = 578;
		return t;
	};
	_proto.opt6_i = function () {
		var t = new eui.Group();
		this.opt6 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 676;
		t.y = 578;
		return t;
	};
	_proto.opt7_i = function () {
		var t = new eui.Group();
		this.opt7 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 808;
		t.y = 578;
		return t;
	};
	_proto.opt8_i = function () {
		var t = new eui.Group();
		this.opt8 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 936;
		t.y = 578;
		return t;
	};
	_proto.opt9_i = function () {
		var t = new eui.Group();
		this.opt9 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1068;
		t.y = 578;
		return t;
	};
	_proto.opt10_i = function () {
		var t = new eui.Group();
		this.opt10 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1196;
		t.y = 578;
		return t;
	};
	return IT_Math_1_1_6_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_1/IT_Math_1_1_7_Skin.exml'] = window.IT_Math_1_1_7_Skin = (function (_super) {
	__extends(IT_Math_1_1_7_Skin, _super);
	function IT_Math_1_1_7_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","itemnum1","item1","itemnum2","item2","itemnum3","item3","itemnum4","item4","itemnum5","item5","itemnum6","item6","itemnum7","item7","itemnum8","item8","itemnum9","item9","itemnum10","item10","itemnum11","item11","opt1","opt2","opt3","opt4","opt5","opt6","opt7","opt8","opt9","opt10","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_1_7_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.item9_i(),this.item10_i(),this.item11_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.opt5_i(),this.opt6_i(),this.opt7_i(),this.opt8_i(),this.opt9_i(),this.opt10_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor10_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it_math_1_1_bg7_png";
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i(),this._Image3_i(),this._Image4_i(),this.ie_top_star_i(),this.sec_bg_i(),this.sec_cur_img_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 1178;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "ie_common_5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 143;
		t.x = 1000;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.source = "ie_common_4_png";
		t.visible = false;
		t.width = 34;
		t.x = 1020;
		t.y = 34.5;
		return t;
	};
	_proto.ie_top_star_i = function () {
		var t = new eui.Label();
		this.ie_top_star = t;
		t.anchorOffsetX = 0;
		t.text = "999";
		t.visible = false;
		t.width = 84;
		t.x = 1064;
		t.y = 36;
		return t;
	};
	_proto.sec_bg_i = function () {
		var t = new eui.Image();
		this.sec_bg = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "ie_common_1_png";
		t.verticalCenter = 0;
		t.width = 414;
		return t;
	};
	_proto.sec_cur_img_i = function () {
		var t = new eui.Image();
		this.sec_cur_img = t;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(15,11,271,0);
		t.source = "ie_common_2_png";
		t.verticalCenter = -1;
		t.width = 460;
		t.x = 460;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 112;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 787.5;
		t.y = 216.2;
		t.elementsContent = [this.itemnum1_i()];
		return t;
	};
	_proto.itemnum1_i = function () {
		var t = new eui.Group();
		this.itemnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -60.5;
		t.width = 53.2;
		t.x = 110;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 112;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 1130;
		t.y = 195;
		t.elementsContent = [this.itemnum2_i()];
		return t;
	};
	_proto.itemnum2_i = function () {
		var t = new eui.Group();
		this.itemnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 90;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 112;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 652;
		t.y = 326;
		t.elementsContent = [this.itemnum3_i()];
		return t;
	};
	_proto.itemnum3_i = function () {
		var t = new eui.Group();
		this.itemnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 38;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 112;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 319.5;
		t.y = 209;
		t.elementsContent = [this.itemnum4_i()];
		return t;
	};
	_proto.itemnum4_i = function () {
		var t = new eui.Group();
		this.itemnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -20.5;
		t.width = 53.2;
		t.x = -62;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.height = 112;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 550.1;
		t.y = 225.2;
		t.elementsContent = [this.itemnum5_i()];
		return t;
	};
	_proto.itemnum5_i = function () {
		var t = new eui.Group();
		this.itemnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -4;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Group();
		this.item6 = t;
		t.height = 112;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 203.5;
		t.y = 296.2;
		t.elementsContent = [this.itemnum6_i()];
		return t;
	};
	_proto.itemnum6_i = function () {
		var t = new eui.Group();
		this.itemnum6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Group();
		this.item7 = t;
		t.height = 112;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 451.5;
		t.y = 304.2;
		t.elementsContent = [this.itemnum7_i()];
		return t;
	};
	_proto.itemnum7_i = function () {
		var t = new eui.Group();
		this.itemnum7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 0;
		return t;
	};
	_proto.item8_i = function () {
		var t = new eui.Group();
		this.item8 = t;
		t.height = 112;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 57.5;
		t.y = 246.2;
		t.elementsContent = [this.itemnum8_i()];
		return t;
	};
	_proto.itemnum8_i = function () {
		var t = new eui.Group();
		this.itemnum8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -22;
		return t;
	};
	_proto.item9_i = function () {
		var t = new eui.Group();
		this.item9 = t;
		t.height = 112;
		t.name = "9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 998;
		t.y = 322;
		t.elementsContent = [this.itemnum9_i()];
		return t;
	};
	_proto.itemnum9_i = function () {
		var t = new eui.Group();
		this.itemnum9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = 87.5;
		t.width = 53.2;
		t.x = 2;
		return t;
	};
	_proto.item10_i = function () {
		var t = new eui.Group();
		this.item10 = t;
		t.height = 112;
		t.name = "10";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 908;
		t.y = 254;
		t.elementsContent = [this.itemnum10_i()];
		return t;
	};
	_proto.itemnum10_i = function () {
		var t = new eui.Group();
		this.itemnum10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 84;
		return t;
	};
	_proto.item11_i = function () {
		var t = new eui.Group();
		this.item11 = t;
		t.height = 112;
		t.name = "11";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 1200;
		t.y = 310;
		t.elementsContent = [this.itemnum11_i()];
		return t;
	};
	_proto.itemnum11_i = function () {
		var t = new eui.Group();
		this.itemnum11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -14.5;
		t.width = 53.2;
		t.x = -58;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 20;
		t.y = 584;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 150;
		t.y = 584;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 280;
		t.y = 582;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 410;
		t.y = 584;
		return t;
	};
	_proto.opt5_i = function () {
		var t = new eui.Group();
		this.opt5 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 542;
		t.y = 584;
		return t;
	};
	_proto.opt6_i = function () {
		var t = new eui.Group();
		this.opt6 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 672;
		t.y = 584;
		return t;
	};
	_proto.opt7_i = function () {
		var t = new eui.Group();
		this.opt7 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 804;
		t.y = 584;
		return t;
	};
	_proto.opt8_i = function () {
		var t = new eui.Group();
		this.opt8 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 932;
		t.y = 584;
		return t;
	};
	_proto.opt9_i = function () {
		var t = new eui.Group();
		this.opt9 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1064;
		t.y = 584;
		return t;
	};
	_proto.opt10_i = function () {
		var t = new eui.Group();
		this.opt10 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1192;
		t.y = 584;
		return t;
	};
	return IT_Math_1_1_7_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_1/IT_Math_1_1_8_Skin.exml'] = window.IT_Math_1_1_8_Skin = (function (_super) {
	__extends(IT_Math_1_1_8_Skin, _super);
	function IT_Math_1_1_8_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","itemnum1","item1","itemnum2","item2","itemnum3","item3","itemnum4","item4","itemnum5","item5","opt1","opt2","opt3","opt4","opt5","opt6","opt7","opt8","opt9","opt10","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_1_8_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.opt5_i(),this.opt6_i(),this.opt7_i(),this.opt8_i(),this.opt9_i(),this.opt10_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor10_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it_math_1_1_bg8_png";
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i(),this._Image3_i(),this._Image4_i(),this.ie_top_star_i(),this.sec_bg_i(),this.sec_cur_img_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 1178;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "ie_common_5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 143;
		t.x = 1000;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.source = "ie_common_4_png";
		t.visible = false;
		t.width = 34;
		t.x = 1020;
		t.y = 34.5;
		return t;
	};
	_proto.ie_top_star_i = function () {
		var t = new eui.Label();
		this.ie_top_star = t;
		t.anchorOffsetX = 0;
		t.text = "999";
		t.visible = false;
		t.width = 84;
		t.x = 1064;
		t.y = 36;
		return t;
	};
	_proto.sec_bg_i = function () {
		var t = new eui.Image();
		this.sec_bg = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "ie_common_1_png";
		t.verticalCenter = 0;
		t.width = 414;
		return t;
	};
	_proto.sec_cur_img_i = function () {
		var t = new eui.Image();
		this.sec_cur_img = t;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(15,11,271,0);
		t.source = "ie_common_2_png";
		t.verticalCenter = -1;
		t.width = 460;
		t.x = 460;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Group();
		this.item1 = t;
		t.height = 112;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 909.5;
		t.y = 224.2;
		t.elementsContent = [this.itemnum1_i()];
		return t;
	};
	_proto.itemnum1_i = function () {
		var t = new eui.Group();
		this.itemnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -60.5;
		t.width = 53.2;
		t.x = 110;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Group();
		this.item2 = t;
		t.height = 112;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 1134;
		t.y = 219;
		t.elementsContent = [this.itemnum2_i()];
		return t;
	};
	_proto.itemnum2_i = function () {
		var t = new eui.Group();
		this.itemnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 90;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Group();
		this.item3 = t;
		t.height = 112;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 70;
		t.y = 226;
		t.elementsContent = [this.itemnum3_i()];
		return t;
	};
	_proto.itemnum3_i = function () {
		var t = new eui.Group();
		this.itemnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 38;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Group();
		this.item4 = t;
		t.height = 112;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 345.5;
		t.y = 209;
		t.elementsContent = [this.itemnum4_i()];
		return t;
	};
	_proto.itemnum4_i = function () {
		var t = new eui.Group();
		this.itemnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -20.5;
		t.width = 53.2;
		t.x = -62;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Group();
		this.item5 = t;
		t.height = 112;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 560.1;
		t.y = 273.2;
		t.elementsContent = [this.itemnum5_i()];
		return t;
	};
	_proto.itemnum5_i = function () {
		var t = new eui.Group();
		this.itemnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -4;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 20;
		t.y = 584;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 150;
		t.y = 584;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 280;
		t.y = 582;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 410;
		t.y = 584;
		return t;
	};
	_proto.opt5_i = function () {
		var t = new eui.Group();
		this.opt5 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 542;
		t.y = 584;
		return t;
	};
	_proto.opt6_i = function () {
		var t = new eui.Group();
		this.opt6 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 672;
		t.y = 584;
		return t;
	};
	_proto.opt7_i = function () {
		var t = new eui.Group();
		this.opt7 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 804;
		t.y = 584;
		return t;
	};
	_proto.opt8_i = function () {
		var t = new eui.Group();
		this.opt8 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 932;
		t.y = 584;
		return t;
	};
	_proto.opt9_i = function () {
		var t = new eui.Group();
		this.opt9 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1064;
		t.y = 584;
		return t;
	};
	_proto.opt10_i = function () {
		var t = new eui.Group();
		this.opt10 = t;
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 114;
		t.x = 1192;
		t.y = 584;
		return t;
	};
	return IT_Math_1_1_8_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_1/IT_Math_1_1_9_Skin.exml'] = window.IT_Math_1_1_9_Skin = (function (_super) {
	__extends(IT_Math_1_1_9_Skin, _super);
	function IT_Math_1_1_9_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","optnum5","opt5","rect_g_1","rect_g_2","circleBtn","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_1_9_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.opt5_i(),this.rect_g_1_i(),this.rect_g_2_i(),this.circleBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor10_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it_math_1_1_bg9_png";
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i(),this._Image3_i(),this._Image4_i(),this.ie_top_star_i(),this.sec_bg_i(),this.sec_cur_img_i()];
		return t;
	};
	_proto.ie_top_help_i = function () {
		var t = new eui.Image();
		this.ie_top_help = t;
		t.height = 55;
		t.source = "ie_common_7_png";
		t.visible = false;
		t.width = 73;
		t.x = 30;
		t.y = 23;
		return t;
	};
	_proto.ie_top_submit_i = function () {
		var t = new eui.Image();
		this.ie_top_submit = t;
		t.height = 86;
		t.source = "ie_common_6_png";
		t.verticalCenter = 0;
		t.width = 138;
		t.x = 1178;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "ie_common_5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 143;
		t.x = 1000;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.source = "ie_common_4_png";
		t.visible = false;
		t.width = 34;
		t.x = 1020;
		t.y = 34.5;
		return t;
	};
	_proto.ie_top_star_i = function () {
		var t = new eui.Label();
		this.ie_top_star = t;
		t.anchorOffsetX = 0;
		t.text = "999";
		t.visible = false;
		t.width = 84;
		t.x = 1064;
		t.y = 36;
		return t;
	};
	_proto.sec_bg_i = function () {
		var t = new eui.Image();
		this.sec_bg = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "ie_common_1_png";
		t.verticalCenter = 0;
		t.width = 414;
		return t;
	};
	_proto.sec_cur_img_i = function () {
		var t = new eui.Image();
		this.sec_cur_img = t;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(15,11,271,0);
		t.source = "ie_common_2_png";
		t.verticalCenter = -1;
		t.width = 460;
		t.x = 460;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 112;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 1043.5;
		t.y = 346.2;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -82.5;
		t.width = 53.2;
		t.x = 8;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 112;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 1144;
		t.y = 209;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -86.5;
		t.width = 53.2;
		t.x = 90;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 112;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 250;
		t.y = 310;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = 38;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 112;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 605.5;
		t.y = 331;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -20.5;
		t.width = 53.2;
		t.x = -62;
		return t;
	};
	_proto.opt5_i = function () {
		var t = new eui.Group();
		this.opt5 = t;
		t.height = 112;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116;
		t.x = 730.1;
		t.y = 217.2;
		t.elementsContent = [this.optnum5_i()];
		return t;
	};
	_proto.optnum5_i = function () {
		var t = new eui.Group();
		this.optnum5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53.2;
		t.verticalCenter = -90.5;
		t.width = 53.2;
		t.x = -4;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 163;
		t.x = 970;
		t.y = 627;
		return t;
	};
	_proto.rect_g_2_i = function () {
		var t = new eui.Group();
		this.rect_g_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 293.5;
		t.width = 745;
		t.x = 220;
		t.y = 609;
		return t;
	};
	_proto.circleBtn_i = function () {
		var t = new eui.Group();
		this.circleBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 144;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 286;
		t.width = 144;
		t.x = 1150;
		t.y = 589;
		return t;
	};
	return IT_Math_1_1_9_Skin;
})(eui.Skin);