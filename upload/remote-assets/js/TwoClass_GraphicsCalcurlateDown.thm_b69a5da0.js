
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
                generateEUI.skins = {};generateEUI.paths['resource/gamemain/game_skins/ClassOverScene/GetStarScene_Skin.exml'] = window.GetStarScene_Skin = (function (_super) {
	__extends(GetStarScene_Skin, _super);
	function GetStarScene_Skin() {
		_super.call(this);
		this.skinParts = ["lightImg","starImg","goImg"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GetStarScene_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i(),this.lightImg_i(),this.starImg_i(),this.goImg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "star_bg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lightImg_i = function () {
		var t = new eui.Image();
		this.lightImg = t;
		t.anchorOffsetX = 599;
		t.anchorOffsetY = 510;
		t.source = "star_light_png";
		t.x = 781;
		t.y = 549.51;
		return t;
	};
	_proto.starImg_i = function () {
		var t = new eui.Image();
		this.starImg = t;
		t.horizontalCenter = 0;
		t.source = "star_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.goImg_i = function () {
		var t = new eui.Image();
		this.goImg = t;
		t.source = "main_btn_out_png";
		t.x = 1394.88;
		t.y = 1177.88;
		return t;
	};
	return GetStarScene_Skin;
})(eui.Skin);generateEUI.paths['resource/gamemain/game_skins/CommonDlg/CommonButton_Skin.exml'] = window.CommonButton_Skin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page10Scene/TwoClass_GraphicsCalcurlateDown_Page10Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page10Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page10Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page10Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page10Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg10_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_1_png";
		t.x = 232;
		t.y = 1060;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_2_png";
		t.x = 346;
		t.y = 1060;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_3_png";
		t.x = 474;
		t.y = 1062;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_4_png";
		t.x = 604;
		t.y = 1060;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_5_png";
		t.x = 725;
		t.y = 1062;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_6_png";
		t.x = 854;
		t.y = 1062;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_7_png";
		t.x = 980;
		t.y = 1060;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_8_png";
		t.x = 1106;
		t.y = 1064;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_9_png";
		t.x = 1224;
		t.y = 1062;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_10_png";
		t.x = 1340;
		t.y = 1060;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 130.21;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 260.42;
		t.x = 892.21;
		t.y = 148.86;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page10Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page11Scene/TwoClass_GraphicsCalcurlateDown_Page11Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page11Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page11Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page11Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page11Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg11_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_1_png";
		t.x = 232;
		t.y = 1060;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_2_png";
		t.x = 346;
		t.y = 1060;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_3_png";
		t.x = 474;
		t.y = 1062;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_4_png";
		t.x = 604;
		t.y = 1060;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_5_png";
		t.x = 725;
		t.y = 1062;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_6_png";
		t.x = 854;
		t.y = 1062;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_7_png";
		t.x = 980;
		t.y = 1060;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_8_png";
		t.x = 1106;
		t.y = 1064;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_9_png";
		t.x = 1224;
		t.y = 1062;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_10_png";
		t.x = 1340;
		t.y = 1060;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 130.21;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 260.42;
		t.x = 892.21;
		t.y = 148.86;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page11Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page12Scene/TwoClass_GraphicsCalcurlateDown_Page12Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page12Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page12Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page12Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","group0","group1","group2","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page12Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.group0_i(),this.group1_i(),this.group2_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg12_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.source = "TwoClass_GraphicsCalcurlateDown_big_page_scene12_json.TwoClass_GraphicsCalcurlateDown_12_3";
		t.x = 237.95;
		t.y = 318;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.source = "TwoClass_GraphicsCalcurlateDown_big_page_scene12_json.TwoClass_GraphicsCalcurlateDown_12_2";
		t.x = 237.95;
		t.y = 317;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.source = "TwoClass_GraphicsCalcurlateDown_big_page_scene12_json.TwoClass_GraphicsCalcurlateDown_12_1";
		t.x = 237.95;
		t.y = 318;
		return t;
	};
	_proto.group0_i = function () {
		var t = new eui.Group();
		this.group0 = t;
		t.height = 200;
		t.width = 200;
		t.x = 998.73;
		t.y = 345.04;
		return t;
	};
	_proto.group1_i = function () {
		var t = new eui.Group();
		this.group1 = t;
		t.height = 200;
		t.width = 200;
		t.x = 1001.13;
		t.y = 574.74;
		return t;
	};
	_proto.group2_i = function () {
		var t = new eui.Group();
		this.group2 = t;
		t.height = 200;
		t.width = 200;
		t.x = 1000.52;
		t.y = 790.78;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page12Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page13Scene/TwoClass_GraphicsCalcurlateDown_Page13Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page13Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page13Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page13Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","rect1","rect2","rect3","rect4","rect5","rect6","rect7","rect8","rect9","rect10","rect11","rect12","rect13","rect14","rect15","rect16","rect17","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page13Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i(),this.rect1_i(),this.rect2_i(),this.rect3_i(),this.rect4_i(),this.rect5_i(),this.rect6_i(),this.rect7_i(),this.rect8_i(),this.rect9_i(),this.rect10_i(),this.rect11_i(),this.rect12_i(),this.rect13_i(),this.rect14_i(),this.rect15_i(),this.rect16_i(),this.rect17_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg13_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_1_png";
		t.x = 230;
		t.y = 1246;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_2_png";
		t.x = 344;
		t.y = 1246;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_3_png";
		t.x = 472;
		t.y = 1248;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_4_png";
		t.x = 602;
		t.y = 1246;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_5_png";
		t.x = 723;
		t.y = 1248;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_6_png";
		t.x = 852;
		t.y = 1248;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_7_png";
		t.x = 978;
		t.y = 1246;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_8_png";
		t.x = 1104;
		t.y = 1250;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_9_png";
		t.x = 1222;
		t.y = 1248;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_10_png";
		t.x = 1338;
		t.y = 1246;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 130.21;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 260.42;
		t.x = 806.21;
		t.y = 186.86;
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 815.64;
		t.y = 367.41;
		return t;
	};
	_proto.rect2_i = function () {
		var t = new eui.Rect();
		this.rect2 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 1033.2;
		t.y = 367.41;
		return t;
	};
	_proto.rect3_i = function () {
		var t = new eui.Rect();
		this.rect3 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 1264.44;
		t.y = 367.41;
		return t;
	};
	_proto.rect4_i = function () {
		var t = new eui.Rect();
		this.rect4 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 815.03;
		t.y = 507.71;
		return t;
	};
	_proto.rect5_i = function () {
		var t = new eui.Rect();
		this.rect5 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 1032.59;
		t.y = 507.71;
		return t;
	};
	_proto.rect6_i = function () {
		var t = new eui.Rect();
		this.rect6 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 1263.83;
		t.y = 507.71;
		return t;
	};
	_proto.rect7_i = function () {
		var t = new eui.Rect();
		this.rect7 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 815.03;
		t.y = 650.12;
		return t;
	};
	_proto.rect8_i = function () {
		var t = new eui.Rect();
		this.rect8 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 1032.59;
		t.y = 650.12;
		return t;
	};
	_proto.rect9_i = function () {
		var t = new eui.Rect();
		this.rect9 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 1263.83;
		t.y = 650.12;
		return t;
	};
	_proto.rect10_i = function () {
		var t = new eui.Rect();
		this.rect10 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 814.42;
		t.y = 790.42;
		return t;
	};
	_proto.rect11_i = function () {
		var t = new eui.Rect();
		this.rect11 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 1031.98;
		t.y = 790.42;
		return t;
	};
	_proto.rect12_i = function () {
		var t = new eui.Rect();
		this.rect12 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 1263.22;
		t.y = 790.42;
		return t;
	};
	_proto.rect13_i = function () {
		var t = new eui.Rect();
		this.rect13 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 363.79;
		t.y = 967.09;
		return t;
	};
	_proto.rect14_i = function () {
		var t = new eui.Rect();
		this.rect14 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 588.9;
		t.y = 967.09;
		return t;
	};
	_proto.rect15_i = function () {
		var t = new eui.Rect();
		this.rect15 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 794.4;
		t.y = 967.09;
		return t;
	};
	_proto.rect16_i = function () {
		var t = new eui.Rect();
		this.rect16 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 1010.23;
		t.y = 967.09;
		return t;
	};
	_proto.rect17_i = function () {
		var t = new eui.Rect();
		this.rect17 = t;
		t.anchorOffsetX = 89.21;
		t.anchorOffsetY = 60;
		t.fillAlpha = 0;
		t.height = 120;
		t.width = 178.42;
		t.x = 1251.83;
		t.y = 968.61;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page13Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page14Scene/TwoClass_GraphicsCalcurlateDown_Page14Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page14Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page14Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page14Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page14Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg14_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page14Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page1Scene/TwoClass_GraphicsCalcurlateDown_Page1Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page1Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page1Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page1Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page1Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg1_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page1Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page2Scene/TwoClass_GraphicsCalcurlateDown_Page2Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page2Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page2Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page2Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page2Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg2_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_1_png";
		t.x = 230;
		t.y = 1240;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_2_png";
		t.x = 344;
		t.y = 1240;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_3_png";
		t.x = 472;
		t.y = 1242;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_4_png";
		t.x = 602;
		t.y = 1240;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_5_png";
		t.x = 723;
		t.y = 1242;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_6_png";
		t.x = 852;
		t.y = 1242;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_7_png";
		t.x = 978;
		t.y = 1240;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_8_png";
		t.x = 1104;
		t.y = 1244;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_9_png";
		t.x = 1222;
		t.y = 1242;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_10_png";
		t.x = 1338;
		t.y = 1240;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 170;
		t.x = 841.44;
		t.y = 189.27;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page2Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page3Scene/TwoClass_GraphicsCalcurlateDown_Page3Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page3Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page3Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page3Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","rect1","rect2","rect3","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page3Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i(),this.rect1_i(),this.rect2_i(),this.rect3_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg3_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_1_png";
		t.x = 230;
		t.y = 1240;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_2_png";
		t.x = 344;
		t.y = 1240;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_3_png";
		t.x = 472;
		t.y = 1242;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_4_png";
		t.x = 602;
		t.y = 1240;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_5_png";
		t.x = 723;
		t.y = 1242;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_6_png";
		t.x = 852;
		t.y = 1242;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_7_png";
		t.x = 978;
		t.y = 1240;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_8_png";
		t.x = 1104;
		t.y = 1244;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_9_png";
		t.x = 1222;
		t.y = 1242;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_10_png";
		t.x = 1338;
		t.y = 1240;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 170;
		t.x = 869.44;
		t.y = 189.27;
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 230;
		t.x = 485;
		t.y = 979.27;
		return t;
	};
	_proto.rect2_i = function () {
		var t = new eui.Rect();
		this.rect2 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 230;
		t.x = 796.44;
		t.y = 979.27;
		return t;
	};
	_proto.rect3_i = function () {
		var t = new eui.Rect();
		this.rect3 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 230;
		t.x = 1069.44;
		t.y = 979.27;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page3Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page4Scene/TwoClass_GraphicsCalcurlateDown_Page4Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page4Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page4Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page4Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","t1","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","rect1","rect2","rect3","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page4Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.t1_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i(),this.rect1_i(),this.rect2_i(),this.rect3_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg4_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Image();
		this.t1 = t;
		t.source = "TwoClass_GraphicsCalcurlateDown_big_page_scene4_json.TwoClass_GraphicsCalcurlateDown_4_1";
		t.visible = false;
		t.x = 412.09;
		t.y = 281.83;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_1_png";
		t.x = 230;
		t.y = 1240;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_2_png";
		t.x = 344;
		t.y = 1240;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_3_png";
		t.x = 472;
		t.y = 1242;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_4_png";
		t.x = 602;
		t.y = 1240;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_5_png";
		t.x = 723;
		t.y = 1242;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_6_png";
		t.x = 852;
		t.y = 1242;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_7_png";
		t.x = 978;
		t.y = 1240;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_8_png";
		t.x = 1104;
		t.y = 1244;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_9_png";
		t.x = 1222;
		t.y = 1242;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_10_png";
		t.x = 1338;
		t.y = 1240;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 109;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 218;
		t.x = 814.09;
		t.y = 201.83;
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 230;
		t.x = 503;
		t.y = 1019.27;
		return t;
	};
	_proto.rect2_i = function () {
		var t = new eui.Rect();
		this.rect2 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 230;
		t.x = 814.44;
		t.y = 1019.27;
		return t;
	};
	_proto.rect3_i = function () {
		var t = new eui.Rect();
		this.rect3 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 230;
		t.x = 1087.44;
		t.y = 1019.27;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page4Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page5Scene/TwoClass_GraphicsCalcurlateDown_Page5Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page5Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page5Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page5Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","rect1","rect2","rect3","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page5Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i(),this.rect1_i(),this.rect2_i(),this.rect3_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg5_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_1_png";
		t.x = 230;
		t.y = 1244;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_2_png";
		t.x = 344;
		t.y = 1244;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_3_png";
		t.x = 472;
		t.y = 1246;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_4_png";
		t.x = 602;
		t.y = 1244;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_5_png";
		t.x = 723;
		t.y = 1246;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_6_png";
		t.x = 852;
		t.y = 1246;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_7_png";
		t.x = 978;
		t.y = 1244;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_8_png";
		t.x = 1104;
		t.y = 1248;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_9_png";
		t.x = 1222;
		t.y = 1246;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_10_png";
		t.x = 1338;
		t.y = 1244;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 109;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 218;
		t.x = 847.44;
		t.y = 199.83;
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 230;
		t.x = 503;
		t.y = 1021.27;
		return t;
	};
	_proto.rect2_i = function () {
		var t = new eui.Rect();
		this.rect2 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 230;
		t.x = 816.44;
		t.y = 1021.27;
		return t;
	};
	_proto.rect3_i = function () {
		var t = new eui.Rect();
		this.rect3 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 230;
		t.x = 1089.44;
		t.y = 1019.27;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page5Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page6Scene/TwoClass_GraphicsCalcurlateDown_Page6Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page6Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page6Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page6Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","t1","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","rect1","rect2","rect3","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page6Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.t1_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i(),this.rect1_i(),this.rect2_i(),this.rect3_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg6_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Image();
		this.t1 = t;
		t.source = "TwoClass_GraphicsCalcurlateDown_big_page_scene6_json.TwoClass_GraphicsCalcurlateDown_6_1";
		t.x = 432;
		t.y = 298;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_1_png";
		t.x = 230;
		t.y = 1244;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_2_png";
		t.x = 344;
		t.y = 1244;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_3_png";
		t.x = 472;
		t.y = 1246;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_4_png";
		t.x = 602;
		t.y = 1244;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_5_png";
		t.x = 723;
		t.y = 1246;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_6_png";
		t.x = 852;
		t.y = 1246;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_7_png";
		t.x = 978;
		t.y = 1244;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_8_png";
		t.x = 1104;
		t.y = 1248;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_9_png";
		t.x = 1222;
		t.y = 1246;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_10_png";
		t.x = 1338;
		t.y = 1244;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 109;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 218;
		t.x = 847.44;
		t.y = 199.83;
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 230;
		t.x = 503;
		t.y = 1021.27;
		return t;
	};
	_proto.rect2_i = function () {
		var t = new eui.Rect();
		this.rect2 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 230;
		t.x = 816.44;
		t.y = 1021.27;
		return t;
	};
	_proto.rect3_i = function () {
		var t = new eui.Rect();
		this.rect3 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 230;
		t.x = 1089.44;
		t.y = 1019.27;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page6Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page7Scene/TwoClass_GraphicsCalcurlateDown_Page7Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page7Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page7Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page7Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","t1","t2","t3","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page7Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.t1_i(),this.t2_i(),this.t3_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg7_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Image();
		this.t1 = t;
		t.source = "TwoClass_GraphicsCalcurlateDown_big_page_scene7_json.TwoClass_GraphicsCalcurlateDown_7_1";
		t.x = 436.91;
		t.y = 442.27;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.source = "TwoClass_GraphicsCalcurlateDown_big_page_scene7_json.TwoClass_GraphicsCalcurlateDown_7_1";
		t.x = 765.83;
		t.y = 276.29;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Image();
		this.t3 = t;
		t.source = "TwoClass_GraphicsCalcurlateDown_big_page_scene7_json.TwoClass_GraphicsCalcurlateDown_7_1";
		t.x = 607.48;
		t.y = 608.96;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_1_png";
		t.x = 230;
		t.y = 1019.76;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_2_png";
		t.x = 344;
		t.y = 1019.76;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_3_png";
		t.x = 472;
		t.y = 1021.76;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_4_png";
		t.x = 602;
		t.y = 1019.76;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_5_png";
		t.x = 723;
		t.y = 1021.76;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_6_png";
		t.x = 852;
		t.y = 1021.76;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_7_png";
		t.x = 978;
		t.y = 1019.76;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_8_png";
		t.x = 1104;
		t.y = 1023.76;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_9_png";
		t.x = 1222;
		t.y = 1021.76;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_10_png";
		t.x = 1338;
		t.y = 1019.76;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 64;
		t.fillAlpha = 0;
		t.height = 128;
		t.width = 200;
		t.x = 1198.83;
		t.y = 146;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page7Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page8Scene/TwoClass_GraphicsCalcurlateDown_Page8Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page8Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page8Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page8Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page8Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg8_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_1_png";
		t.x = 232;
		t.y = 1060;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_2_png";
		t.x = 346;
		t.y = 1060;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_3_png";
		t.x = 474;
		t.y = 1062;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_4_png";
		t.x = 604;
		t.y = 1060;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_5_png";
		t.x = 725;
		t.y = 1062;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_6_png";
		t.x = 854;
		t.y = 1062;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_7_png";
		t.x = 980;
		t.y = 1060;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_8_png";
		t.x = 1106;
		t.y = 1064;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_9_png";
		t.x = 1224;
		t.y = 1062;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_10_png";
		t.x = 1340;
		t.y = 1060;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 109;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 218;
		t.x = 1199;
		t.y = 145.83;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page8Scene_Skin;
})(eui.Skin);generateEUI.paths['resource/TwoClass_GraphicsCalcurlateDown/game_skins/TwoClass_GraphicsCalcurlateDown_Page9Scene/TwoClass_GraphicsCalcurlateDown_Page9Scene_Skin.exml'] = window.TwoClass_GraphicsCalcurlateDown_Page9Scene_Skin = (function (_super) {
	__extends(TwoClass_GraphicsCalcurlateDown_Page9Scene_Skin, _super);
	function TwoClass_GraphicsCalcurlateDown_Page9Scene_Skin() {
		_super.call(this);
		this.skinParts = ["img_bg","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","rect0","group"];
		
		this.height = 1348;
		this.width = 1562;
		this.elementsContent = [this.group_i()];
	}
	var _proto = TwoClass_GraphicsCalcurlateDown_Page9Scene_Skin.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.elementsContent = [this.img_bg_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.rect0_i()];
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TwoClass_GraphicsCalcurlateDown_page_scene_bg9_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_1_png";
		t.x = 232;
		t.y = 1060;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_2_png";
		t.x = 346;
		t.y = 1060;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_3_png";
		t.x = 474;
		t.y = 1062;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_4_png";
		t.x = 604;
		t.y = 1060;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_5_png";
		t.x = 725;
		t.y = 1062;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_6_png";
		t.x = 854;
		t.y = 1062;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_7_png";
		t.x = 980;
		t.y = 1060;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_8_png";
		t.x = 1106;
		t.y = 1064;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_9_png";
		t.x = 1224;
		t.y = 1062;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 67;
		t.source = "TwoClass_GraphicsCalcurlateDown_Preload_12_10_png";
		t.x = 1340;
		t.y = 1060;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 130.21;
		t.anchorOffsetY = 80;
		t.fillAlpha = 0;
		t.height = 160;
		t.width = 260.42;
		t.x = 892.21;
		t.y = 148.86;
		return t;
	};
	return TwoClass_GraphicsCalcurlateDown_Page9Scene_Skin;
})(eui.Skin);