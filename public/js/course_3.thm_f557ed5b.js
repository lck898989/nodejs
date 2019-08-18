
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
                generateEUI.skins = {};generateEUI.paths['resource/gamemain/game_skins/Interactive/IE3/IExercises3_1_Skin.exml'] = window.IExercises3_1_Skin = (function (_super) {
	__extends(IExercises3_1_Skin, _super);
	function IExercises3_1_Skin() {
		_super.call(this);
		this.skinParts = ["rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IExercises3_1_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.rect_g_1_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor6_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it3_s1_bg1_png";
		t.x = 0;
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
		t.x = 738;
		t.y = 422;
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
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 130;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.optnum1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_a_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 278;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.optnum2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_b_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 426;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this.optnum3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_c_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 574;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this.optnum4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_d_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	return IExercises3_1_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Interactive/IE3/IExercises3_10_Skin.exml'] = window.IExercises3_10_Skin = (function (_super) {
	__extends(IExercises3_10_Skin, _super);
	function IExercises3_10_Skin() {
		_super.call(this);
		this.skinParts = ["rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IExercises3_10_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.rect_g_1_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor6_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie3_s1_bg4_png";
		t.x = 71.5;
		t.y = 110;
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
		t.x = 818;
		t.y = 236;
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
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 130;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.optnum1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_a_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 278;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.optnum2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_b_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 426;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this.optnum3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_c_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 574;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this.optnum4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_d_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	return IExercises3_10_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Interactive/IE3/IExercises3_4_Skin.exml'] = window.IExercises3_4_Skin = (function (_super) {
	__extends(IExercises3_4_Skin, _super);
	function IExercises3_4_Skin() {
		_super.call(this);
		this.skinParts = ["rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IExercises3_4_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.rect_g_1_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor6_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie3_s1_bg1_png";
		t.x = 71.5;
		t.y = 70;
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
		t.x = 734;
		t.y = 472;
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
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 130;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.optnum1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_a_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 278;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.optnum2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_b_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 426;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this.optnum3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_c_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 574;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this.optnum4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_d_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	return IExercises3_4_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Interactive/IE3/IExercises3_7_Skin.exml'] = window.IExercises3_7_Skin = (function (_super) {
	__extends(IExercises3_7_Skin, _super);
	function IExercises3_7_Skin() {
		_super.call(this);
		this.skinParts = ["rect_g_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","optnum1","opt1","optnum2","opt2","optnum3","opt3","optnum4","opt4","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IExercises3_7_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.rect_g_1_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i(),this.opt4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor6_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie3_s1_bg2_png";
		t.x = 71.5;
		t.y = 110;
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
		t.x = 814;
		t.y = 236;
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
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 130;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.optnum1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_a_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum1_i = function () {
		var t = new eui.Group();
		this.optnum1 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 278;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.optnum2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_b_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum2_i = function () {
		var t = new eui.Group();
		this.optnum2 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 426;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this.optnum3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_c_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum3_i = function () {
		var t = new eui.Group();
		this.optnum3 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	_proto.opt4_i = function () {
		var t = new eui.Group();
		this.opt4 = t;
		t.height = 122;
		t.width = 233;
		t.x = 1038;
		t.y = 574;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this.optnum4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_d_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "ie3_commmon_1_png";
		t.verticalCenter = 0;
		t.x = 52;
		return t;
	};
	_proto.optnum4_i = function () {
		var t = new eui.Group();
		this.optnum4 = t;
		t.anchorOffsetX = 0;
		t.height = 57;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 112;
		return t;
	};
	return IExercises3_7_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Interactive/IE3/IExercises3_A2_Skin.exml'] = window.IExercises3_A2_Skin = (function (_super) {
	__extends(IExercises3_A2_Skin, _super);
	function IExercises3_A2_Skin() {
		_super.call(this);
		this.skinParts = ["img1","img2","rect_g_1","rect_1","ie_top_help","ie_top_submit","ie_top_star","sec_bg","sec_cur_img","group_top","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = IExercises3_A2_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.img1_i(),this.img2_i(),this._Image5_i(),this.rect_g_1_i(),this.rect_1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 950;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it1_s1_cor9_png";
		t.verticalCenter = 0;
		t.width = 1800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 750;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "it3_a1_bg2_png";
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "it3_a2_img3_png";
		t.x = 542;
		t.y = 166;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "it3_a2_img3_png";
		t.x = 663;
		t.y = 166;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 70.5;
		t.anchorOffsetY = 123;
		t.source = "it3_a2_img1_png";
		t.x = 851.5;
		t.y = 289;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 70.5;
		t.anchorOffsetY = 123;
		t.source = "it3_a2_img1_png";
		t.x = 971.5;
		t.y = 289;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "it3_a2_img2_png";
		t.x = 1045;
		t.y = 444;
		return t;
	};
	_proto.rect_g_1_i = function () {
		var t = new eui.Group();
		this.rect_g_1 = t;
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 44;
		t.height = 88;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 87;
		t.x = 1183;
		t.y = 702;
		return t;
	};
	_proto.rect_1_i = function () {
		var t = new eui.Rect();
		this.rect_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 364;
		t.visible = false;
		t.width = 328;
		t.x = 995;
		t.y = 376;
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
		t.elementsContent = [this.ie_top_help_i(),this.ie_top_submit_i(),this._Image6_i(),this._Image7_i(),this.ie_top_star_i(),this.sec_bg_i(),this.sec_cur_img_i()];
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
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "ie_common_5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 143;
		t.x = 1000;
		return t;
	};
	_proto._Image7_i = function () {
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
	return IExercises3_A2_Skin;
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
})(eui.Skin);