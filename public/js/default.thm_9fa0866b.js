
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
                generateEUI.skins = {};generateEUI.paths['resource/gamemain/game_skins/CommonDlg/CommonButton_Skin.exml'] = window.CommonButton_Skin = (function (_super) {
	__extends(CommonButton_Skin, _super);
	function CommonButton_Skin() {
		_super.call(this);
		this.skinParts = ["imgSrcName"];
		
		this.currentState = "up";
		this.elementsContent = [this.imgSrcName_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("imgSrcName","scaleX",1.1),
					new eui.SetProperty("imgSrcName","scaleY",1.1)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("imgSrcName","x",0),
					new eui.SetProperty("imgSrcName","y",0)
				])
		];
	}
	var _proto = CommonButton_Skin.prototype;

	_proto.imgSrcName_i = function () {
		var t = new eui.Image();
		this.imgSrcName = t;
		t.source = "showBtn_png";
		return t;
	};
	return CommonButton_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/CommonDlg/ComOption_Skin.exml'] = window.ComOption_Skin = (function (_super) {
	__extends(ComOption_Skin, _super);
	function ComOption_Skin() {
		_super.call(this);
		this.skinParts = ["imgSrcName"];
		
		this.currentState = "up";
		this.elementsContent = [this.imgSrcName_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("imgSrcName","x",0),
					new eui.SetProperty("imgSrcName","y",0)
				])
			,
			new eui.State ("selected",
				[
					new eui.SetProperty("imgSrcName","source","pa1_s1_q1_png")
				])
		];
	}
	var _proto = ComOption_Skin.prototype;

	_proto.imgSrcName_i = function () {
		var t = new eui.Image();
		this.imgSrcName = t;
		t.source = "pa1_s1_q5_png";
		return t;
	};
	return ComOption_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/CommonDlg/Dlg_CommonMovie_Skin.exml'] = window.Dlg_CommonMovie_Skin = (function (_super) {
	__extends(Dlg_CommonMovie_Skin, _super);
	function Dlg_CommonMovie_Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Dlg_CommonMovie_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 1348;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1562;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Dlg_CommonMovie_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/CommonDlg/Dlg_IE_Enter_Skin.exml'] = window.Dlg_IE_Enter_Skin = (function (_super) {
	__extends(Dlg_IE_Enter_Skin, _super);
	function Dlg_IE_Enter_Skin() {
		_super.call(this);
		this.skinParts = ["resetImg","continueImg"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Dlg_IE_Enter_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.resetImg_i(),this.continueImg_i()];
		return t;
	};
	_proto.resetImg_i = function () {
		var t = new eui.Image();
		this.resetImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_reset_png";
		t.verticalCenter = 0;
		t.x = 279;
		return t;
	};
	_proto.continueImg_i = function () {
		var t = new eui.Image();
		this.continueImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_continue_png";
		t.verticalCenter = 0;
		t.x = 863;
		return t;
	};
	return Dlg_IE_Enter_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/CommonDlg/Dlg_IE_Right_Skin.exml'] = window.Dlg_IE_Right_Skin = (function (_super) {
	__extends(Dlg_IE_Right_Skin, _super);
	function Dlg_IE_Right_Skin() {
		_super.call(this);
		this.skinParts = ["lightGroup","rightGroup","errorGroup","retryBtn","nextBtn","exitBtn","videoBtn","errorVideoGroup"];
		
		this.height = 700;
		this.width = 850;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Dlg_IE_Right_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 700;
		t.width = 850;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.lightGroup_i(),this.rightGroup_i(),this.errorGroup_i(),this.errorVideoGroup_i()];
		return t;
	};
	_proto.lightGroup_i = function () {
		var t = new eui.Group();
		this.lightGroup = t;
		t.height = 612;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 850;
		return t;
	};
	_proto.rightGroup_i = function () {
		var t = new eui.Group();
		this.rightGroup = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.visible = false;
		t.width = 850;
		t.x = 0;
		t.y = 294;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 170;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_right_img1_png";
		t.width = 500;
		t.x = 147;
		t.y = -148;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 126;
		t.height = 106;
		t.horizontalCenter = 114;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_right_img4_png";
		t.width = 110;
		t.x = 342;
		t.y = -84;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 116;
		t.height = 199;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_right_img3_png";
		t.width = 208;
		t.x = 293;
		t.y = -177;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 131;
		t.height = 106;
		t.horizontalCenter = -123;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_right_img4_png";
		t.width = 110;
		t.x = 342;
		t.y = -84;
		return t;
	};
	_proto.errorGroup_i = function () {
		var t = new eui.Group();
		this.errorGroup = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 850;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 170;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_right_img2_png";
		t.width = 500;
		t.x = 147;
		t.y = -148;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 126;
		t.height = 106;
		t.horizontalCenter = 114;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_right_img5_png";
		t.width = 110;
		t.x = 342;
		t.y = -84;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 116;
		t.height = 199;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_right_img6_png";
		t.width = 208;
		t.x = 293;
		t.y = -177;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 131;
		t.height = 106;
		t.horizontalCenter = -123;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_right_img5_png";
		t.width = 110;
		t.x = 342;
		t.y = -84;
		return t;
	};
	_proto.errorVideoGroup_i = function () {
		var t = new eui.Group();
		this.errorVideoGroup = t;
		t.anchorOffsetX = 0;
		t.height = 700;
		t.horizontalCenter = 0;
		t.width = 850;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Label1_i(),this.retryBtn_i(),this.nextBtn_i(),this.exitBtn_i(),this.videoBtn_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 333;
		t.height = 170;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_right_img2_png";
		t.width = 500;
		t.x = 147;
		t.y = -148;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 459;
		t.height = 106;
		t.horizontalCenter = 114;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_right_img5_png";
		t.width = 110;
		t.x = 342;
		t.y = -84;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.bottom = 449;
		t.height = 199;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_right_img6_png";
		t.width = 208;
		t.x = 293;
		t.y = -177;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = 464;
		t.height = 106;
		t.horizontalCenter = -123;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_right_img5_png";
		t.width = 110;
		t.x = 342;
		t.y = -84;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 66;
		t.source = "ie_common_7_png";
		t.width = 87.6;
		t.x = 381.2;
		t.y = 390;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 56;
		t.size = 34;
		t.text = "视频解析";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 224;
		t.x = 312;
		t.y = 468;
		return t;
	};
	_proto.retryBtn_i = function () {
		var t = new eui.Image();
		this.retryBtn = t;
		t.source = "ie_common_9_png";
		t.x = 92;
		t.y = 550;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Image();
		this.nextBtn = t;
		t.source = "ie_common_10_png";
		t.x = 529;
		t.y = 550;
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new eui.Image();
		this.exitBtn = t;
		t.source = "ie_common_1001_png";
		t.x = 529;
		t.y = 550;
		return t;
	};
	_proto.videoBtn_i = function () {
		var t = new eui.Group();
		this.videoBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 188;
		t.width = 194;
		t.x = 328;
		t.y = 358;
		return t;
	};
	return Dlg_IE_Right_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/CommonDlg/IE_Jumpout_Skin.exml'] = window.IE_Jumpout_Skin = (function (_super) {
	__extends(IE_Jumpout_Skin, _super);
	function IE_Jumpout_Skin() {
		_super.call(this);
		this.skinParts = ["opt1","opt2"];
		
		this.height = 708;
		this.width = 1002;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = IE_Jumpout_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 708;
		t.width = 1002;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.opt1_i(),this.opt2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 709;
		t.scale9Grid = new egret.Rectangle(0,0,0,0);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_v2_img2_png";
		t.width = 1003;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_common_1003_png";
		t.verticalCenter = -92;
		return t;
	};
	_proto.opt1_i = function () {
		var t = new eui.Group();
		this.opt1 = t;
		t.height = 90;
		t.width = 342;
		t.x = 126;
		t.y = 538;
		return t;
	};
	_proto.opt2_i = function () {
		var t = new eui.Group();
		this.opt2 = t;
		t.height = 90;
		t.width = 342;
		t.x = 554;
		t.y = 538;
		return t;
	};
	return IE_Jumpout_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/CommonDlg/IT_fullvideo_Skin.exml'] = window.IT_fullvideo_Skin = (function (_super) {
	__extends(IT_fullvideo_Skin, _super);
	function IT_fullvideo_Skin() {
		_super.call(this);
		this.skinParts = ["anim_play","playBg","vAreaLeft","playBtn","startBtn","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.anim_play_i();
		this.elementsContent = [this.group_base_i()];
		
		eui.Binding.$bindProperties(this, ["playBtn"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleY");
	}
	var _proto = IT_fullvideo_Skin.prototype;

	_proto.anim_play_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim_play = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this.playBg_i(),this.vAreaLeft_i(),this.playBtn_i(),this.startBtn_i()];
		return t;
	};
	_proto.playBg_i = function () {
		var t = new eui.Image();
		this.playBg = t;
		t.height = 950;
		t.horizontalCenter = 0;
		t.source = "ie_v2_bg3_png";
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto.vAreaLeft_i = function () {
		var t = new eui.Group();
		this.vAreaLeft = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 744;
		t.horizontalCenter = 0;
		t.verticalCenter = 2;
		t.width = 1320;
		return t;
	};
	_proto.playBtn_i = function () {
		var t = new eui.Image();
		this.playBtn = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "ie_v_play_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Group();
		this.startBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 704;
		t.width = 1284;
		t.x = 26;
		t.y = 25;
		return t;
	};
	return IT_fullvideo_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/CommonDlg/IT_video_Skin.exml'] = window.IT_video_Skin = (function (_super) {
	__extends(IT_video_Skin, _super);
	function IT_video_Skin() {
		_super.call(this);
		this.skinParts = ["anim_play","playBg","vAreaLeft","vAreaRight","leftbg","rightbg","playBtn","lastTime","answerTime","teacher","startBtn","skipBtn","backBtn","error1","error2","error3","error4","error5","right1","right2","right3","right4","right5","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.anim_play_i();
		this.elementsContent = [this.group_base_i()];
		
		eui.Binding.$bindProperties(this, ["playBtn"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"scaleY");
	}
	var _proto = IT_video_Skin.prototype;

	_proto.anim_play_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim_play = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 800;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this.playBg_i(),this._Image1_i(),this.vAreaLeft_i(),this.vAreaRight_i(),this.leftbg_i(),this.rightbg_i(),this.playBtn_i(),this.answerTime_i(),this.teacher_i(),this.startBtn_i(),this.skipBtn_i(),this.backBtn_i(),this._Image4_i(),this.error1_i(),this.error2_i(),this.error3_i(),this.error4_i(),this.error5_i(),this.right1_i(),this.right2_i(),this.right3_i(),this.right4_i(),this.right5_i()];
		return t;
	};
	_proto.playBg_i = function () {
		var t = new eui.Image();
		this.playBg = t;
		t.height = 950;
		t.horizontalCenter = 0;
		t.source = "ie_v2_bg2_png";
		t.verticalCenter = 0;
		t.width = 1500;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.source = "ie_v2_img1_png";
		t.width = 277;
		t.x = 1041;
		t.y = 297;
		return t;
	};
	_proto.vAreaLeft_i = function () {
		var t = new eui.Group();
		this.vAreaLeft = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 708;
		t.width = 1002;
		t.x = 20;
		t.y = 21;
		return t;
	};
	_proto.vAreaRight_i = function () {
		var t = new eui.Group();
		this.vAreaRight = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 276;
		t.width = 274;
		t.x = 1041;
		t.y = 21;
		return t;
	};
	_proto.leftbg_i = function () {
		var t = new eui.Image();
		this.leftbg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 708;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 1002;
		t.x = 20;
		return t;
	};
	_proto.rightbg_i = function () {
		var t = new eui.Image();
		this.rightbg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 276;
		t.source = "";
		t.width = 274;
		t.x = 1041;
		t.y = 21;
		return t;
	};
	_proto.playBtn_i = function () {
		var t = new eui.Image();
		this.playBtn = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.horizontalCenter = -145;
		t.source = "ie_v_play_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto.answerTime_i = function () {
		var t = new eui.Group();
		this.answerTime = t;
		t.height = 276;
		t.visible = false;
		t.width = 274;
		t.x = 1041;
		t.y = 21;
		t.elementsContent = [this._Image2_i(),this.lastTime_i(),this._Label1_i(),this._Label2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 276;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ie_v2_img1_png";
		t.width = 277;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lastTime_i = function () {
		var t = new eui.Label();
		this.lastTime = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.size = 45;
		t.text = "15";
		t.textAlign = "right";
		t.textColor = 0xfc0702;
		t.verticalAlign = "bottom";
		t.width = 136;
		t.x = 16;
		t.y = 94;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.size = 30;
		t.text = "s";
		t.textAlign = "left";
		t.textColor = 0xFC0702;
		t.verticalAlign = "bottom";
		t.width = 136;
		t.x = 155;
		t.y = 93;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.size = 30;
		t.text = "倒计时";
		t.textAlign = "left";
		t.textColor = 0xFC0702;
		t.verticalAlign = "bottom";
		t.width = 136;
		t.x = 116;
		t.y = 145;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ie_common_time_1_png";
		t.x = 71;
		t.y = 173;
		return t;
	};
	_proto.teacher_i = function () {
		var t = new eui.Label();
		this.teacher = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.horizontalCenter = 508;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "倩倩老师";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -43;
		t.width = 240;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Group();
		this.startBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 596;
		t.width = 996;
		t.x = 26;
		t.y = 25;
		return t;
	};
	_proto.skipBtn_i = function () {
		var t = new eui.Image();
		this.skipBtn = t;
		t.source = "common_skip_png";
		t.x = 926;
		t.y = 640;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Image();
		this.backBtn = t;
		t.skewY = 180;
		t.source = "common_skip_png";
		t.x = 115;
		t.y = 640;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ie_common_1002_png";
		t.x = 1066;
		t.y = 438;
		return t;
	};
	_proto.error1_i = function () {
		var t = new eui.Image();
		this.error1 = t;
		t.height = 65.8;
		t.source = "ie_right_img6_png";
		t.width = 68.6;
		t.x = 1057;
		t.y = 488;
		return t;
	};
	_proto.error2_i = function () {
		var t = new eui.Image();
		this.error2 = t;
		t.height = 65.8;
		t.source = "ie_right_img6_png";
		t.width = 68.6;
		t.x = 1142.6;
		t.y = 488;
		return t;
	};
	_proto.error3_i = function () {
		var t = new eui.Image();
		this.error3 = t;
		t.height = 65.8;
		t.source = "ie_right_img6_png";
		t.width = 68.6;
		t.x = 1228.2;
		t.y = 488;
		return t;
	};
	_proto.error4_i = function () {
		var t = new eui.Image();
		this.error4 = t;
		t.height = 65.8;
		t.source = "ie_right_img6_png";
		t.width = 68.6;
		t.x = 1057;
		t.y = 570.8;
		return t;
	};
	_proto.error5_i = function () {
		var t = new eui.Image();
		this.error5 = t;
		t.height = 65.8;
		t.source = "ie_right_img6_png";
		t.width = 68.6;
		t.x = 1142.6;
		t.y = 570.8;
		return t;
	};
	_proto.right1_i = function () {
		var t = new eui.Image();
		this.right1 = t;
		t.height = 65.8;
		t.source = "ie_right_img4_png";
		t.visible = false;
		t.width = 68.6;
		t.x = 1057;
		t.y = 488;
		return t;
	};
	_proto.right2_i = function () {
		var t = new eui.Image();
		this.right2 = t;
		t.height = 65.8;
		t.source = "ie_right_img4_png";
		t.visible = false;
		t.width = 68.6;
		t.x = 1142.6;
		t.y = 488;
		return t;
	};
	_proto.right3_i = function () {
		var t = new eui.Image();
		this.right3 = t;
		t.height = 65.8;
		t.source = "ie_right_img4_png";
		t.visible = false;
		t.width = 68.6;
		t.x = 1228.2;
		t.y = 488;
		return t;
	};
	_proto.right4_i = function () {
		var t = new eui.Image();
		this.right4 = t;
		t.height = 65.8;
		t.source = "ie_right_img4_png";
		t.visible = false;
		t.width = 68.6;
		t.x = 1057;
		t.y = 570.8;
		return t;
	};
	_proto.right5_i = function () {
		var t = new eui.Image();
		this.right5 = t;
		t.height = 65.8;
		t.source = "ie_right_img4_png";
		t.visible = false;
		t.width = 68.6;
		t.x = 1142.6;
		t.y = 570.8;
		return t;
	};
	return IT_video_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/LS_trainvideo_Skin.exml'] = window.LS_trainvideo_Skin = (function (_super) {
	__extends(LS_trainvideo_Skin, _super);
	function LS_trainvideo_Skin() {
		_super.call(this);
		this.skinParts = ["videoGroup","closeBtn","group_base"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.group_base_i()];
	}
	var _proto = LS_trainvideo_Skin.prototype;

	_proto.group_base_i = function () {
		var t = new eui.Group();
		this.group_base = t;
		t.height = 750;
		t.width = 1334;
		t.elementsContent = [this.videoGroup_i(),this.closeBtn_i()];
		return t;
	};
	_proto.videoGroup_i = function () {
		var t = new eui.Group();
		this.videoGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 708;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1002;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Group();
		this.closeBtn = t;
		t.height = 72;
		t.width = 73;
		t.x = 1183;
		t.y = 21;
		return t;
	};
	return LS_trainvideo_Skin;
})(eui.Skin);