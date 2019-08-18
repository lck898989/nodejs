
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
                generateEUI.skins = {};generateEUI.paths['resource/gamemain/game_skins/Interactive/IE4/IExercises4_1_Skin.exml'] = window.IExercises4_1_Skin = (function (_super) {
	__extends(IExercises4_1_Skin, _super);
	function IExercises4_1_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","group_top","opt1","opt2","opt3"];
		
		this.height = 708;
		this.width = 1002;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = IExercises4_1_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 708;
		t.width = 1002;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i()];
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
		t.source = "ie4_s_bg1_png";
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
		t.height = 121;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 74;
		t.y = 534;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 121;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 380;
		t.y = 534;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 121;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 687.5;
		t.y = 534;
		return t;
	};
	return IExercises4_1_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Interactive/IE4/IExercises4_2_Skin.exml'] = window.IExercises4_2_Skin = (function (_super) {
	__extends(IExercises4_2_Skin, _super);
	function IExercises4_2_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","group_top","opt1","opt2","opt3"];
		
		this.height = 708;
		this.width = 1002;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = IExercises4_2_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 708;
		t.width = 1002;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i()];
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
		t.source = "ie4_s_bg2_png";
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
		t.height = 121;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 74;
		t.y = 552;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 121;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 380;
		t.y = 552;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 121;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 687.5;
		t.y = 552;
		return t;
	};
	return IExercises4_2_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/Interactive/IE4/IExercises4_3_Skin.exml'] = window.IExercises4_3_Skin = (function (_super) {
	__extends(IExercises4_3_Skin, _super);
	function IExercises4_3_Skin() {
		_super.call(this);
		this.skinParts = ["ie_top_help","ie_top_submit","group_top","opt1","opt2","opt3"];
		
		this.height = 708;
		this.width = 1002;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = IExercises4_3_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 708;
		t.width = 1002;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_top_i(),this.opt1_i(),this.opt2_i(),this.opt3_i()];
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
		t.source = "ie4_s_bg3_png";
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
		t.height = 121;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 74;
		t.y = 567;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 121;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 380;
		t.y = 567;
		return t;
	};
	_proto.opt3_i = function () {
		var t = new eui.Group();
		this.opt3 = t;
		t.height = 121;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 241;
		t.x = 687.5;
		t.y = 567;
		return t;
	};
	return IExercises4_3_Skin;
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