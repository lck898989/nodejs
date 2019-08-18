
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
                generateEUI.skins = {};generateEUI.paths['resource/gamemain/game_skins/Interactive/IE_Math_1_5/IE_Math_1_5_1_Skin.exml'] = window.IE_Math_1_2_1_Skin = (function (_super) {
	__extends(IE_Math_1_2_1_Skin, _super);
	function IE_Math_1_2_1_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","group_top","opt1","opt2"];
		
		this.height = 708;
		this.width = 1002;
		this.elementsContent = [this._Group1_i(),this.opt1_i(),this.opt2_i()];
	}
	var _proto = IE_Math_1_2_1_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 708;
		t.width = 1002;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i()];
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
		t.source = "ie_math_1_2_bg1_png";
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
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 178;
		t.x = 572;
		t.y = 544;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 178;
		t.x = 768;
		t.y = 544;
		return t;
	};
	return IE_Math_1_2_1_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Interactive/IE_Math_1_5/IE_Math_1_5_2_Skin.exml'] = window.IE_Math_1_2_2_Skin = (function (_super) {
	__extends(IE_Math_1_2_2_Skin, _super);
	function IE_Math_1_2_2_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","group_top","opt1","opt2","opt3","opt4"];
		
		this.height = 708;
		this.width = 1002;
		this.elementsContent = [this._Group1_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i()];
	}
	var _proto = IE_Math_1_2_2_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 708;
		t.width = 1002;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i()];
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
		t.source = "ie_math_1_2_bg2_png";
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
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 133;
		t.x = 561;
		t.y = 512;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 133;
		t.x = 711;
		t.y = 512;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 133;
		t.x = 561;
		t.y = 586;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 133;
		t.x = 712;
		t.y = 585;
		return t;
	};
	return IE_Math_1_2_2_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Interactive/IE_Math_1_5/IE_Math_1_5_3_Skin.exml'] = window.IE_Math_1_2_3_Skin = (function (_super) {
	__extends(IE_Math_1_2_3_Skin, _super);
	function IE_Math_1_2_3_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","group_top","opt1","opt2"];
		
		this.height = 708;
		this.width = 1002;
		this.elementsContent = [this._Group1_i(),this.opt1_i(),this.opt2_i()];
	}
	var _proto = IE_Math_1_2_3_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 708;
		t.width = 1002;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i()];
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
		t.source = "ie_math_1_2_bg3_png";
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
		t.anchorOffsetX = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 199;
		t.x = 492;
		t.y = 560;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.anchorOffsetX = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 199;
		t.x = 712;
		t.y = 560;
		return t;
	};
	return IE_Math_1_2_3_Skin;
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
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_2/IT_Math_1_2_1_Skin.exml'] = window.IT_Math_1_2_1_Skin = (function (_super) {
	__extends(IT_Math_1_2_1_Skin, _super);
	function IT_Math_1_2_1_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_2_1_Skin.prototype;

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
		t.source = "it_math_1_2_bg1_png";
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
		t.x = 168;
		t.y = 570;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 760;
		t.y = 570;
		return t;
	};
	return IT_Math_1_2_1_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_2/IT_Math_1_2_10_Skin.exml'] = window.IT_Math_1_2_10_Skin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_2/IT_Math_1_2_2_Skin.exml'] = window.IT_Math_1_2_2_Skin = (function (_super) {
	__extends(IT_Math_1_2_2_Skin, _super);
	function IT_Math_1_2_2_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_2_2_Skin.prototype;

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
		t.source = "it_math_1_2_bg2_png";
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
		t.x = 130;
		t.y = 570;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 764;
		t.y = 570;
		return t;
	};
	return IT_Math_1_2_2_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_2/IT_Math_1_2_3_Skin.exml'] = window.IT_Math_1_2_3_Skin = (function (_super) {
	__extends(IT_Math_1_2_3_Skin, _super);
	function IT_Math_1_2_3_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_2_3_Skin.prototype;

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
		t.source = "it_math_1_2_bg3_png";
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
		t.x = 148;
		t.y = 568;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 764;
		t.y = 568;
		return t;
	};
	return IT_Math_1_2_3_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_2/IT_Math_1_2_4_Skin.exml'] = window.IT_Math_1_2_4_Skin = (function (_super) {
	__extends(IT_Math_1_2_4_Skin, _super);
	function IT_Math_1_2_4_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_2_4_Skin.prototype;

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
		t.source = "it_math_1_2_bg4_png";
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
		t.x = 144;
		t.y = 568;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 764;
		t.y = 568;
		return t;
	};
	return IT_Math_1_2_4_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_2/IT_Math_1_2_5_Skin.exml'] = window.IT_Math_1_2_5_Skin = (function (_super) {
	__extends(IT_Math_1_2_5_Skin, _super);
	function IT_Math_1_2_5_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","opt3","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_2_5_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i()];
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
		t.source = "it_math_1_2_bg5_png";
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
		t.x = 10;
		t.y = 574;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 448;
		t.y = 574;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 886;
		t.y = 574;
		return t;
	};
	return IT_Math_1_2_5_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_2/IT_Math_1_2_6_Skin.exml'] = window.IT_Math_1_2_6_Skin = (function (_super) {
	__extends(IT_Math_1_2_6_Skin, _super);
	function IT_Math_1_2_6_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_2_6_Skin.prototype;

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
		t.source = "it_math_1_2_bg6_png";
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
		t.x = 168;
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
		t.x = 760;
		t.y = 550;
		return t;
	};
	return IT_Math_1_2_6_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_2/IT_Math_1_2_7_Skin.exml'] = window.IT_Math_1_2_7_Skin = (function (_super) {
	__extends(IT_Math_1_2_7_Skin, _super);
	function IT_Math_1_2_7_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_2_7_Skin.prototype;

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
		t.source = "it_math_1_2_bg7_png";
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
	return IT_Math_1_2_7_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_2/IT_Math_1_2_8_Skin.exml'] = window.IT_Math_1_2_8_Skin = (function (_super) {
	__extends(IT_Math_1_2_8_Skin, _super);
	function IT_Math_1_2_8_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_2_8_Skin.prototype;

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
		t.source = "it_math_1_2_bg8_png";
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
		t.source = "ie_common_8_png";
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
	return IT_Math_1_2_8_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_2/IT_Math_1_2_9_Skin.exml'] = window.IT_Math_1_2_9_Skin = (function (_super) {
	__extends(IT_Math_1_2_9_Skin, _super);
	function IT_Math_1_2_9_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_2_9_Skin.prototype;

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
		t.source = "it_math_1_2_bg9_png";
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
	return IT_Math_1_2_9_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_4/IT_Math_1_4_1_Skin.exml'] = window.IT_Math_1_4_1_Skin = (function (_super) {
	__extends(IT_Math_1_4_1_Skin, _super);
	function IT_Math_1_4_1_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_4_1_Skin.prototype;

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
		t.source = "it_math_1_4_1_png";
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
		t.x = 102;
		t.y = 564;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 694;
		t.y = 564;
		return t;
	};
	return IT_Math_1_4_1_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_4/IT_Math_1_4_2_Skin.exml'] = window.IT_Math_1_4_2_Skin = (function (_super) {
	__extends(IT_Math_1_4_2_Skin, _super);
	function IT_Math_1_4_2_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_4_2_Skin.prototype;

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
		t.source = "it_math_1_4_3_png";
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
		t.x = 102;
		t.y = 565;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 694;
		t.y = 565;
		return t;
	};
	return IT_Math_1_4_2_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_4/IT_Math_1_4_3_Skin.exml'] = window.IT_Math_1_4_3_Skin = (function (_super) {
	__extends(IT_Math_1_4_3_Skin, _super);
	function IT_Math_1_4_3_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_4_3_Skin.prototype;

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
		t.source = "it_math_1_4_5_png";
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
		t.x = 102;
		t.y = 565;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 694;
		t.y = 565;
		return t;
	};
	return IT_Math_1_4_3_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_4/IT_Math_1_4_4_Skin.exml'] = window.IT_Math_1_4_4_Skin = (function (_super) {
	__extends(IT_Math_1_4_4_Skin, _super);
	function IT_Math_1_4_4_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","opt3","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_4_4_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i()];
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
		t.source = "it_math_1_4_7_png";
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
		t.x = 10;
		t.y = 569;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 446;
		t.y = 569;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 888;
		t.y = 571;
		return t;
	};
	return IT_Math_1_4_4_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it_math_1_4/IT_Math_1_4_5_Skin.exml'] = window.IT_Math_1_4_5_Skin = (function (_super) {
	__extends(IT_Math_1_4_5_Skin, _super);
	function IT_Math_1_4_5_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","opt1","opt2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IT_Math_1_4_5_Skin.prototype;

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
		t.source = "it_math_1_4_9_png";
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
		t.x = 102;
		t.y = 566;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 432;
		t.x = 694;
		t.y = 566;
		return t;
	};
	return IT_Math_1_4_5_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it1/ITraining1_11_Skin.exml'] = window.ITraining1_11_Skin = (function (_super) {
	__extends(ITraining1_11_Skin, _super);
	function ITraining1_11_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining1_11_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_bg6_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 715;
		t.y = 427;
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
	return ITraining1_11_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it1/ITraining1_14_Skin.exml'] = window.ITraining1_14_Skin = (function (_super) {
	__extends(ITraining1_14_Skin, _super);
	function ITraining1_14_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining1_14_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_bg7_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 754;
		t.y = 427;
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
	return ITraining1_14_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it1/ITraining1_15_Skin.exml'] = window.ITraining1_15_Skin = (function (_super) {
	__extends(ITraining1_15_Skin, _super);
	function ITraining1_15_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining1_15_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_bg8_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 754;
		t.y = 427;
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
	return ITraining1_15_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it1/ITraining1_2_Skin.exml'] = window.ITraining1_2_Skin = (function (_super) {
	__extends(ITraining1_2_Skin, _super);
	function ITraining1_2_Skin() {
		_super.call(this);
		this.skinParts = ["optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining1_2_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor3_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_bg1_png";
		t.y = 21;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 94;
		t.y = 570;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 387;
		t.y = 570;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 680;
		t.y = 570;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 973;
		t.y = 570;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 94;
		t.y = 570;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 387;
		t.y = 570;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 680;
		t.y = 570;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 973;
		t.y = 570;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
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
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i(),this._Image7_i(),this._Image8_i(),this.ie_top_star_i(),this.sec_bg_i(),this.sec_cur_img_i()];
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
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "ie_common_5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 143;
		t.x = 1000;
		return t;
	};
	_proto._Image8_i = function () {
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
	return ITraining1_2_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it1/ITraining1_3_Skin.exml'] = window.ITraining1_3_Skin = (function (_super) {
	__extends(ITraining1_3_Skin, _super);
	function ITraining1_3_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining1_3_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor3_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_bg2_png";
		t.y = 21;
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
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 94;
		t.y = 570;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 387;
		t.y = 570;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 680;
		t.y = 570;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 973;
		t.y = 570;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 94;
		t.y = 570;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 387;
		t.y = 570;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 680;
		t.y = 570;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 973;
		t.y = 570;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	return ITraining1_3_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it1/ITraining1_4_Skin.exml'] = window.ITraining1_4_Skin = (function (_super) {
	__extends(ITraining1_4_Skin, _super);
	function ITraining1_4_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining1_4_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor3_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_bg3_png";
		t.y = 21;
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
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 94;
		t.y = 570;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 387;
		t.y = 570;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 680;
		t.y = 570;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 973;
		t.y = 570;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 94;
		t.y = 570;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 387;
		t.y = 570;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 680;
		t.y = 570;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 973;
		t.y = 570;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	return ITraining1_4_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it1/ITraining1_6_Skin.exml'] = window.ITraining1_6_Skin = (function (_super) {
	__extends(ITraining1_6_Skin, _super);
	function ITraining1_6_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining1_6_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor3_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_bg4_png";
		t.y = 21;
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
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 94;
		t.y = 570;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 387;
		t.y = 570;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 680;
		t.y = 570;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "it1_s1_common_1_png";
		t.x = 973;
		t.y = 570;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 94;
		t.y = 570;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 387;
		t.y = 570;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 680;
		t.y = 570;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 263;
		t.x = 973;
		t.y = 570;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 46;
		t.y = 11;
		return t;
	};
	return ITraining1_6_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/it1/ITraining1_8_Skin.exml'] = window.ITraining1_8_Skin = (function (_super) {
	__extends(ITraining1_8_Skin, _super);
	function ITraining1_8_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining1_8_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_bg5_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 669;
		t.y = 426;
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
	return ITraining1_8_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It2/ITraining2_1_Skin.exml'] = window.ITraining2_1_Skin = (function (_super) {
	__extends(ITraining2_1_Skin, _super);
	function ITraining2_1_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining2_1_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it2_s1_bg1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 664;
		t.y = 427;
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
	return ITraining2_1_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It2/ITraining2_2_Skin.exml'] = window.ITraining2_2_Skin = (function (_super) {
	__extends(ITraining2_2_Skin, _super);
	function ITraining2_2_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining2_2_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it2_s1_bg2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 624;
		t.y = 427;
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
	return ITraining2_2_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It2/ITraining2_3_Skin.exml'] = window.ITraining2_3_Skin = (function (_super) {
	__extends(ITraining2_3_Skin, _super);
	function ITraining2_3_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining2_3_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it2_s1_bg3_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 624;
		t.y = 427;
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
	return ITraining2_3_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It2/ITraining2_4_Skin.exml'] = window.ITraining2_4_Skin = (function (_super) {
	__extends(ITraining2_4_Skin, _super);
	function ITraining2_4_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining2_4_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it2_s1_bg4_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 664;
		t.y = 427;
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
	return ITraining2_4_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It2/ITraining2_5_Skin.exml'] = window.ITraining2_5_Skin = (function (_super) {
	__extends(ITraining2_5_Skin, _super);
	function ITraining2_5_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining2_5_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it2_s1_bg5_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 664;
		t.y = 427;
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
	return ITraining2_5_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It2/ITraining2_6_Skin.exml'] = window.ITraining2_6_Skin = (function (_super) {
	__extends(ITraining2_6_Skin, _super);
	function ITraining2_6_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining2_6_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it2_s1_bg6_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 755;
		t.y = 427;
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
	return ITraining2_6_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It2/ITraining2_7_Skin.exml'] = window.ITraining2_7_Skin = (function (_super) {
	__extends(ITraining2_7_Skin, _super);
	function ITraining2_7_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining2_7_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it2_s1_bg7_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 754;
		t.y = 427;
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
	return ITraining2_7_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It3/ITraining3_1_Skin.exml'] = window.ITraining3_1_Skin = (function (_super) {
	__extends(ITraining3_1_Skin, _super);
	function ITraining3_1_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","rect_g_1","rect_g_2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining3_1_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.rect_g_1_i(),this.rect_g_2_i()];
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
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it3_s_bg1_png";
		t.y = 21;
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
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 130;
		t.y = 564;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 422;
		t.y = 564;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 712;
		t.y = 564;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 1004;
		t.y = 564;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 91.5;
		t.anchorOffsetY = 67;
		t.height = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 183;
		t.x = 947.5;
		t.y = 348;
		return t;
	};
	_proto.rect_g_2_i = function () {
		var t = new eui.Group();
		this.rect_g_2 = t;
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 87;
		t.x = 920.5;
		t.y = 343;
		return t;
	};
	return ITraining3_1_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It3/ITraining3_2_Skin.exml'] = window.ITraining3_2_Skin = (function (_super) {
	__extends(ITraining3_2_Skin, _super);
	function ITraining3_2_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","rect_g_1","rect_g_2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining3_2_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.rect_g_1_i(),this.rect_g_2_i()];
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
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it3_s_bg2_png";
		t.y = 21;
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
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 130;
		t.y = 564;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 422;
		t.y = 564;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 712;
		t.y = 564;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 1004;
		t.y = 564;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 91.5;
		t.anchorOffsetY = 67;
		t.height = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 183;
		t.x = 947.5;
		t.y = 348;
		return t;
	};
	_proto.rect_g_2_i = function () {
		var t = new eui.Group();
		this.rect_g_2 = t;
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 87;
		t.x = 920.5;
		t.y = 343;
		return t;
	};
	return ITraining3_2_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It3/ITraining3_3_Skin.exml'] = window.ITraining3_3_Skin = (function (_super) {
	__extends(ITraining3_3_Skin, _super);
	function ITraining3_3_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","rect_g_1","rect_g_2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining3_3_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.rect_g_1_i(),this.rect_g_2_i()];
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
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it3_s_bg3_png";
		t.y = 21;
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
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 130;
		t.y = 564;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 422;
		t.y = 564;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 712;
		t.y = 564;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 1004;
		t.y = 564;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 91.5;
		t.anchorOffsetY = 67;
		t.height = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 183;
		t.x = 947.5;
		t.y = 348;
		return t;
	};
	_proto.rect_g_2_i = function () {
		var t = new eui.Group();
		this.rect_g_2 = t;
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 87;
		t.x = 920.5;
		t.y = 343;
		return t;
	};
	return ITraining3_3_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It3/ITraining3_4_Skin.exml'] = window.ITraining3_4_Skin = (function (_super) {
	__extends(ITraining3_4_Skin, _super);
	function ITraining3_4_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","rect_g_1","rect_g_2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining3_4_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.rect_g_1_i(),this.rect_g_2_i()];
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
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it3_s_bg4_png";
		t.y = 21;
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
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 130;
		t.y = 564;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 422;
		t.y = 564;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 712;
		t.y = 564;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 1004;
		t.y = 564;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 91.5;
		t.anchorOffsetY = 67;
		t.height = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 183;
		t.x = 937.5;
		t.y = 348;
		return t;
	};
	_proto.rect_g_2_i = function () {
		var t = new eui.Group();
		this.rect_g_2 = t;
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 87;
		t.x = 920.5;
		t.y = 343;
		return t;
	};
	return ITraining3_4_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It3/ITraining3_5_Skin.exml'] = window.ITraining3_5_Skin = (function (_super) {
	__extends(ITraining3_5_Skin, _super);
	function ITraining3_5_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","rect_g_1","rect_g_2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining3_5_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.rect_g_1_i(),this.rect_g_2_i()];
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
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it3_s_bg5_png";
		t.y = 21;
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
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 130;
		t.y = 564;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 422;
		t.y = 564;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 712;
		t.y = 564;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 1004;
		t.y = 564;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 91.5;
		t.anchorOffsetY = 67;
		t.height = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 183;
		t.x = 947.5;
		t.y = 338;
		return t;
	};
	_proto.rect_g_2_i = function () {
		var t = new eui.Group();
		this.rect_g_2 = t;
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 87;
		t.x = 920.5;
		t.y = 343;
		return t;
	};
	return ITraining3_5_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It3/ITraining3_6_Skin.exml'] = window.ITraining3_6_Skin = (function (_super) {
	__extends(ITraining3_6_Skin, _super);
	function ITraining3_6_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","rect_g_1","rect_g_2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining3_6_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.rect_g_1_i(),this.rect_g_2_i()];
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
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it3_s_bg6_png";
		t.y = 21;
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
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 130;
		t.y = 564;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 422;
		t.y = 564;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 712;
		t.y = 564;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 1004;
		t.y = 564;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 91.5;
		t.anchorOffsetY = 67;
		t.height = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 183;
		t.x = 952.5;
		t.y = 348;
		return t;
	};
	_proto.rect_g_2_i = function () {
		var t = new eui.Group();
		this.rect_g_2 = t;
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 87;
		t.x = 920.5;
		t.y = 343;
		return t;
	};
	return ITraining3_6_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It3/ITraining3_7_Skin.exml'] = window.ITraining3_7_Skin = (function (_super) {
	__extends(ITraining3_7_Skin, _super);
	function ITraining3_7_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","rect_g_1","rect_g_2","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining3_7_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i(),this.rect_g_1_i(),this.rect_g_2_i()];
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
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it3_s_bg7_png";
		t.y = 21;
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
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 130;
		t.y = 564;
		t.elementsContent = [this.optnum1_i()];
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 422;
		t.y = 564;
		t.elementsContent = [this.optnum2_i()];
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 712;
		t.y = 564;
		t.elementsContent = [this.optnum3_i()];
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 157;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 1004;
		t.y = 564;
		t.elementsContent = [this.optnum4_i()];
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 116;
		t.width = 168;
		t.x = 25;
		t.y = 14;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 91.5;
		t.anchorOffsetY = 67;
		t.height = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 183;
		t.x = 942.5;
		t.y = 343;
		return t;
	};
	_proto.rect_g_2_i = function () {
		var t = new eui.Group();
		this.rect_g_2 = t;
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 87;
		t.x = 920.5;
		t.y = 343;
		return t;
	};
	return ITraining3_7_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It4/ITraining4_1_Skin.exml'] = window.ITraining4_1_Skin = (function (_super) {
	__extends(ITraining4_1_Skin, _super);
	function ITraining4_1_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining4_1_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it4_s1_bg1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 755;
		t.y = 427;
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
	return ITraining4_1_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It4/ITraining4_2_Skin.exml'] = window.ITraining4_2_Skin = (function (_super) {
	__extends(ITraining4_2_Skin, _super);
	function ITraining4_2_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining4_2_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it4_s1_bg2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 754;
		t.y = 427;
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
	return ITraining4_2_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It4/ITraining4_3_Skin.exml'] = window.ITraining4_3_Skin = (function (_super) {
	__extends(ITraining4_3_Skin, _super);
	function ITraining4_3_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining4_3_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it4_s1_bg3_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 755;
		t.y = 427;
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
	return ITraining4_3_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It4/ITraining4_4_Skin.exml'] = window.ITraining4_4_Skin = (function (_super) {
	__extends(ITraining4_4_Skin, _super);
	function ITraining4_4_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining4_4_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it4_s1_bg4_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 755;
		t.y = 427;
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
	return ITraining4_4_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It4/ITraining4_5_Skin.exml'] = window.ITraining4_5_Skin = (function (_super) {
	__extends(ITraining4_5_Skin, _super);
	function ITraining4_5_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining4_5_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it4_s1_bg5_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 754;
		t.y = 427;
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
	return ITraining4_5_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It4/ITraining4_6_Skin.exml'] = window.ITraining4_6_Skin = (function (_super) {
	__extends(ITraining4_6_Skin, _super);
	function ITraining4_6_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining4_6_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it4_s1_bg6_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 755;
		t.y = 427;
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
	return ITraining4_6_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Training/It4/ITraining4_7_Skin.exml'] = window.ITraining4_7_Skin = (function (_super) {
	__extends(ITraining4_7_Skin, _super);
	function ITraining4_7_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img0","delBtn","rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = ITraining4_7_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img0_i(),this.delBtn_i(),this.rect_g_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor4_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it4_s1_bg7_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Group();
		this.img1 = t;
		t.height = 125;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 134;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Group();
		this.img2 = t;
		t.height = 125;
		t.name = "2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 134;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Group();
		this.img3 = t;
		t.height = 125;
		t.name = "3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 134;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Group();
		this.img4 = t;
		t.height = 125;
		t.name = "4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 284;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Group();
		this.img5 = t;
		t.height = 125;
		t.name = "5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 284;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Group();
		this.img6 = t;
		t.height = 125;
		t.name = "6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 284;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Group();
		this.img7 = t;
		t.height = 125;
		t.name = "7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 434;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Group();
		this.img8 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1052;
		t.y = 434;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Group();
		this.img9 = t;
		t.height = 125;
		t.name = "8";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 1187;
		t.y = 434;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Group();
		this.img0 = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 917;
		t.y = 584;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Group();
		this.delBtn = t;
		t.height = 125;
		t.name = "0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 252;
		t.x = 1054;
		t.y = 584;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 59;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 154;
		t.x = 754;
		t.y = 427;
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
	return ITraining4_7_Skin;
})(eui.Skin);