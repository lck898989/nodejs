window.skins={};
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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/ClassOverScene/ClassOverScene_Skin.exml'] = window.ClassOverScene_Skin = (function (_super) {
	__extends(ClassOverScene_Skin, _super);
	function ClassOverScene_Skin() {
		_super.call(this);
		this.skinParts = ["img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","img11"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ClassOverScene_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img10_i(),this.img11_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "completescene_bg_png";
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_pen_png";
		t.x = 0;
		t.y = 341.5;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text1_png";
		t.x = 434.5;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text2_png";
		t.x = 711.5;
		t.y = 0;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text3_png";
		t.x = 990.02;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text4_png";
		t.x = 58.99;
		t.y = 0;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text5_png";
		t.x = 250.99;
		t.y = 0;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text6_png";
		t.x = 470.99;
		t.y = 0;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text7_png";
		t.x = 681.5;
		t.y = 0;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text8_png";
		t.x = 882.5;
		t.y = 0;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text9_png";
		t.x = 1086.02;
		t.y = 0;
		return t;
	};
	_proto.img10_i = function () {
		var t = new eui.Image();
		this.img10 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text10_png";
		t.x = 1266.02;
		t.y = 0;
		return t;
	};
	_proto.img11_i = function () {
		var t = new eui.Image();
		this.img11 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "completescene_text11_png";
		t.x = 1466.99;
		t.y = 0;
		return t;
	};
	return ClassOverScene_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/ClassOverScene/ClassSumUpScene_Skin.exml'] = window.ClassSumUpScene_Skin = (function (_super) {
	__extends(ClassSumUpScene_Skin, _super);
	function ClassSumUpScene_Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ClassSumUpScene_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "classsum_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ClassSumUpScene_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/CommonDlg/Dlg_CommonMovie_Skin.exml'] = window.Dlg_CommonMovie_Skin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/game_skins/CommonDlg/Dlg_Promot_Skin.exml'] = window.Dlg_Promot_Skin = (function (_super) {
	__extends(Dlg_Promot_Skin, _super);
	function Dlg_Promot_Skin() {
		_super.call(this);
		this.skinParts = ["contentLab","closeBtn","acceptBtn","cancleBtn"];
		
		this.height = 311;
		this.width = 440;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Dlg_Promot_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 311;
		t.width = 440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.contentLab_i(),this.closeBtn_i(),this.acceptBtn_i(),this.cancleBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 311;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_pop_up_bg_png";
		t.width = 440;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 1;
		t.source = "gray_png";
		t.width = 354;
		t.x = 48;
		t.y = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 44;
		t.source = "main_btn_sure_bg_png";
		t.width = 110;
		t.x = 56;
		t.y = 234;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 44;
		t.source = "common_pop_btn_bg_png";
		t.width = 110;
		t.x = 270;
		t.y = 234;
		return t;
	};
	_proto.contentLab_i = function () {
		var t = new eui.Label();
		this.contentLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.horizontalCenter = 0.5;
		t.lineSpacing = 7;
		t.size = 17;
		t.text = "您现在正在进行测试，确定要暂时退出么？退出后您可进入继续测试";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 329;
		t.y = 125;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Group();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.width = 72;
		t.x = 366;
		t.y = 3;
		return t;
	};
	_proto.acceptBtn_i = function () {
		var t = new eui.Label();
		this.acceptBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.size = 15;
		t.text = "确认";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 68.5;
		t.y = 238;
		return t;
	};
	_proto.cancleBtn_i = function () {
		var t = new eui.Label();
		this.cancleBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.size = 15;
		t.text = "取消";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 85;
		t.x = 282.5;
		t.y = 237;
		return t;
	};
	return Dlg_Promot_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Large/LargePage1_Skin.exml'] = window.LargePage1_Skin = (function (_super) {
	__extends(LargePage1_Skin, _super);
	function LargePage1_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","select4","selectBtn1","selectBtn2","selectBtn3","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LargePage1_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page1scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 274;
		t.y = 435;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 594;
		t.y = 435;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 274;
		t.y = 547.5;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 593;
		t.y = 546;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 274;
		t.y = 435;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 594;
		t.y = 435;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 274;
		t.y = 547.5;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 75;
		t.name = "4";
		t.width = 166;
		t.x = 593;
		t.y = 546;
		return t;
	};
	return LargePage1_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Large/LargePage10_Skin.exml'] = window.LargePage10_Skin = (function (_super) {
	__extends(LargePage10_Skin, _super);
	function LargePage10_Skin() {
		_super.call(this);
		this.skinParts = ["line1","line2","line3","line4","line5","toy_e_1","toy_e_2","toy_e_3","toy_e_4","toy_e_5","toy_s_1","toy_s_3","toy_s_4","toy_s_2","toy_s_5","paintBg"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LargePage10_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.paintBg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page10scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.paintBg_i = function () {
		var t = new eui.Group();
		this.paintBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 488;
		t.width = 786;
		t.x = 121;
		t.y = 148;
		t.elementsContent = [this.line1_i(),this.line2_i(),this.line3_i(),this.line4_i(),this.line5_i(),this.toy_e_1_i(),this.toy_e_2_i(),this.toy_e_3_i(),this.toy_e_4_i(),this.toy_e_5_i(),this.toy_s_1_i(),this.toy_s_3_i(),this.toy_s_4_i(),this.toy_s_2_i(),this.toy_s_5_i()];
		return t;
	};
	_proto.line1_i = function () {
		var t = new eui.Image();
		this.line1 = t;
		t.height = 2;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(14,7,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page10_line_png";
		t.visible = false;
		t.width = 2;
		t.x = 593;
		t.y = 139;
		return t;
	};
	_proto.line2_i = function () {
		var t = new eui.Image();
		this.line2 = t;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page10_line_png";
		t.visible = false;
		t.width = 2;
		t.x = 613;
		t.y = 159;
		return t;
	};
	_proto.line3_i = function () {
		var t = new eui.Image();
		this.line3 = t;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page10_line_png";
		t.visible = false;
		t.width = 2;
		t.x = 623;
		t.y = 169;
		return t;
	};
	_proto.line4_i = function () {
		var t = new eui.Image();
		this.line4 = t;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page10_line_png";
		t.visible = false;
		t.width = 2;
		t.x = 633;
		t.y = 179;
		return t;
	};
	_proto.line5_i = function () {
		var t = new eui.Image();
		this.line5 = t;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page10_line_png";
		t.visible = false;
		t.width = 2;
		t.x = 643;
		t.y = 189;
		return t;
	};
	_proto.toy_e_1_i = function () {
		var t = new eui.Group();
		this.toy_e_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 132.82;
		t.x = 37;
		t.y = 354.58;
		return t;
	};
	_proto.toy_e_2_i = function () {
		var t = new eui.Group();
		this.toy_e_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 99.82;
		t.x = 196;
		t.y = 357.58;
		return t;
	};
	_proto.toy_e_3_i = function () {
		var t = new eui.Group();
		this.toy_e_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 126.82;
		t.x = 327.07;
		t.y = 364.58;
		return t;
	};
	_proto.toy_e_4_i = function () {
		var t = new eui.Group();
		this.toy_e_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 157.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 121.82;
		t.x = 472;
		t.y = 327.58;
		return t;
	};
	_proto.toy_e_5_i = function () {
		var t = new eui.Group();
		this.toy_e_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 113.82;
		t.x = 620.07;
		t.y = 387.58;
		return t;
	};
	_proto.toy_s_1_i = function () {
		var t = new eui.Group();
		this.toy_s_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 107;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 117;
		t.x = 51;
		t.y = 53;
		return t;
	};
	_proto.toy_s_3_i = function () {
		var t = new eui.Group();
		this.toy_s_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 162;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 326;
		t.y = 27;
		return t;
	};
	_proto.toy_s_4_i = function () {
		var t = new eui.Group();
		this.toy_s_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 158;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 133;
		t.x = 452;
		t.y = 31;
		return t;
	};
	_proto.toy_s_2_i = function () {
		var t = new eui.Group();
		this.toy_s_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 107;
		t.x = 194;
		t.y = 28;
		return t;
	};
	_proto.toy_s_5_i = function () {
		var t = new eui.Group();
		this.toy_s_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 176;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 112;
		t.x = 606;
		t.y = 20;
		return t;
	};
	return LargePage10_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Large/LargePage11_Skin.exml'] = window.LargePage11_Skin = (function (_super) {
	__extends(LargePage11_Skin, _super);
	function LargePage11_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","selectBtn1","selectBtn2"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LargePage11_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.selectBtn1_i(),this.selectBtn2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page11scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 191.5;
		t.source = "large_page11_select_png";
		t.visible = false;
		t.width = 169;
		t.x = 257;
		t.y = 449.25;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 191.5;
		t.source = "large_page11_select_png";
		t.visible = false;
		t.width = 169;
		t.x = 609;
		t.y = 449.25;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 191.5;
		t.name = "1";
		t.width = 169;
		t.x = 257;
		t.y = 449.25;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 191.5;
		t.name = "2";
		t.width = 169;
		t.x = 609;
		t.y = 449.25;
		return t;
	};
	return LargePage11_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Large/LargePage12_Skin.exml'] = window.LargePage12_Skin = (function (_super) {
	__extends(LargePage12_Skin, _super);
	function LargePage12_Skin() {
		_super.call(this);
		this.skinParts = ["obj2","obj1","obj3","obj5","obj4","obj6","pos1","pos2","pos3","pos4","pos5","pos6"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LargePage12_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.obj2_i(),this.obj1_i(),this.obj3_i(),this.obj5_i(),this.obj4_i(),this.obj6_i(),this.pos1_i(),this.pos2_i(),this.pos3_i(),this.pos4_i(),this.pos5_i(),this.pos6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page12scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.obj2_i = function () {
		var t = new eui.Image();
		this.obj2 = t;
		t.height = 108.5;
		t.name = "2";
		t.source = "large_page12_toy3_png";
		t.width = 112.5;
		t.x = 444.03;
		t.y = 154;
		return t;
	};
	_proto.obj1_i = function () {
		var t = new eui.Image();
		this.obj1 = t;
		t.height = 107;
		t.name = "1";
		t.source = "large_page12_toy5_png";
		t.width = 111.5;
		t.x = 198.57;
		t.y = 155.5;
		return t;
	};
	_proto.obj3_i = function () {
		var t = new eui.Image();
		this.obj3 = t;
		t.height = 94.5;
		t.name = "3";
		t.source = "large_page12_toy1_png";
		t.width = 109.5;
		t.x = 688.67;
		t.y = 161.75;
		return t;
	};
	_proto.obj5_i = function () {
		var t = new eui.Image();
		this.obj5 = t;
		t.height = 107.5;
		t.name = "5";
		t.source = "large_page12_toy4_png";
		t.width = 109;
		t.x = 444.03;
		t.y = 298.25;
		return t;
	};
	_proto.obj4_i = function () {
		var t = new eui.Image();
		this.obj4 = t;
		t.height = 107.5;
		t.name = "4";
		t.source = "large_page12_toy6_png";
		t.width = 110;
		t.x = 198.57;
		t.y = 298.25;
		return t;
	};
	_proto.obj6_i = function () {
		var t = new eui.Image();
		this.obj6 = t;
		t.height = 94.5;
		t.name = "6";
		t.source = "large_page12_toy2_png";
		t.width = 109.5;
		t.x = 688.67;
		t.y = 298.25;
		return t;
	};
	_proto.pos1_i = function () {
		var t = new eui.Group();
		this.pos1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.97;
		t.touchEnabled = false;
		t.width = 117.36;
		t.x = 122.96;
		t.y = 491.04;
		return t;
	};
	_proto.pos2_i = function () {
		var t = new eui.Group();
		this.pos2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.97;
		t.touchEnabled = false;
		t.width = 117.36;
		t.x = 252.98;
		t.y = 494.42;
		return t;
	};
	_proto.pos3_i = function () {
		var t = new eui.Group();
		this.pos3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.97;
		t.touchEnabled = false;
		t.width = 117.36;
		t.x = 387.03;
		t.y = 493.78;
		return t;
	};
	_proto.pos4_i = function () {
		var t = new eui.Group();
		this.pos4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.97;
		t.touchEnabled = false;
		t.width = 117.36;
		t.x = 518.06;
		t.y = 494.14;
		return t;
	};
	_proto.pos5_i = function () {
		var t = new eui.Group();
		this.pos5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.97;
		t.touchEnabled = false;
		t.width = 117.36;
		t.x = 649.61;
		t.y = 492.54;
		return t;
	};
	_proto.pos6_i = function () {
		var t = new eui.Group();
		this.pos6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.97;
		t.touchEnabled = false;
		t.width = 117.36;
		t.x = 780.61;
		t.y = 491.54;
		return t;
	};
	return LargePage12_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Large/LargePage2_Skin.exml'] = window.LargePage2_Skin = (function (_super) {
	__extends(LargePage2_Skin, _super);
	function LargePage2_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","select4","selectBtn1","selectBtn2","selectBtn3","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LargePage2_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page2scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 276;
		t.y = 435;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 594;
		t.y = 435;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 276;
		t.y = 545.5;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 593;
		t.y = 546;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 274;
		t.y = 435;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 594;
		t.y = 435;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 274;
		t.y = 547.5;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 75;
		t.name = "4";
		t.width = 166;
		t.x = 593;
		t.y = 546;
		return t;
	};
	return LargePage2_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Large/LargePage3_Skin.exml'] = window.LargePage3_Skin = (function (_super) {
	__extends(LargePage3_Skin, _super);
	function LargePage3_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","select4","selectBtn1","selectBtn2","selectBtn3","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LargePage3_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page3scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 276;
		t.y = 435;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 594;
		t.y = 435;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 275;
		t.y = 546.5;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 593;
		t.y = 546;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 274;
		t.y = 435;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 594;
		t.y = 435;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 274;
		t.y = 547.5;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 75;
		t.name = "4";
		t.width = 166;
		t.x = 593;
		t.y = 546;
		return t;
	};
	return LargePage3_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Large/LargePage4_Skin.exml'] = window.LargePage4_Skin = (function (_super) {
	__extends(LargePage4_Skin, _super);
	function LargePage4_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","select4","selectBtn1","selectBtn2","selectBtn3","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LargePage4_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page4scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 275;
		t.y = 437;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 593;
		t.y = 437;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 275;
		t.y = 547.5;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 593;
		t.y = 547;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 274;
		t.y = 435;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 594;
		t.y = 435;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 274;
		t.y = 547.5;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 75;
		t.name = "4";
		t.width = 166;
		t.x = 593;
		t.y = 546;
		return t;
	};
	return LargePage4_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Large/LargePage6_Skin.exml'] = window.LargePage6_Skin = (function (_super) {
	__extends(LargePage6_Skin, _super);
	function LargePage6_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","selectBtn1","selectBtn2","selectBtn3"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LargePage6_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page6scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 706;
		t.y = 223;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 706;
		t.y = 376;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 706;
		t.y = 530.5;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 706;
		t.y = 223;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 706;
		t.y = 376;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 706;
		t.y = 530.5;
		return t;
	};
	return LargePage6_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Large/LargePage7_Skin.exml'] = window.LargePage7_Skin = (function (_super) {
	__extends(LargePage7_Skin, _super);
	function LargePage7_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","select4","selectBtn1","selectBtn2","selectBtn3","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LargePage7_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page7scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 132.5;
		t.source = "large_page13_select_png";
		t.visible = false;
		t.width = 183.5;
		t.x = 121;
		t.y = 484.75;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 132.5;
		t.source = "large_page13_select_png";
		t.visible = false;
		t.width = 183.5;
		t.x = 319;
		t.y = 484.75;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 132.5;
		t.source = "large_page13_select_png";
		t.visible = false;
		t.width = 183.5;
		t.x = 517.73;
		t.y = 484.75;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 132.5;
		t.source = "large_page13_select_png";
		t.visible = false;
		t.width = 183.5;
		t.x = 716.73;
		t.y = 484.75;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 132.5;
		t.name = "1";
		t.width = 183.5;
		t.x = 121;
		t.y = 484.75;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 132.5;
		t.name = "2";
		t.width = 183.5;
		t.x = 319;
		t.y = 484.75;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 132.5;
		t.name = "3";
		t.width = 183.5;
		t.x = 517.73;
		t.y = 484.75;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 132.5;
		t.name = "4";
		t.width = 183.5;
		t.x = 716.73;
		t.y = 484.75;
		return t;
	};
	return LargePage7_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Large/LargePage8_Skin.exml'] = window.LargePage8_Skin = (function (_super) {
	__extends(LargePage8_Skin, _super);
	function LargePage8_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","select4","selectBtn1","selectBtn2","selectBtn3","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LargePage8_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page8scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 214;
		t.source = "large_page8_select_png";
		t.visible = false;
		t.width = 154.5;
		t.x = 144;
		t.y = 451;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 214;
		t.source = "large_page8_select_png";
		t.visible = false;
		t.width = 154.5;
		t.x = 325;
		t.y = 451;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 214;
		t.source = "large_page8_select_png";
		t.visible = false;
		t.width = 154.5;
		t.x = 501.73;
		t.y = 451;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 214;
		t.source = "large_page8_select_png";
		t.visible = false;
		t.width = 154.5;
		t.x = 683.73;
		t.y = 451;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 214;
		t.name = "1";
		t.width = 154.5;
		t.x = 144;
		t.y = 451;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 214;
		t.name = "2";
		t.width = 154.5;
		t.x = 325;
		t.y = 451;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 214;
		t.name = "3";
		t.width = 154.5;
		t.x = 501.73;
		t.y = 451;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 214;
		t.name = "4";
		t.width = 154.5;
		t.x = 683.73;
		t.y = 451;
		return t;
	};
	return LargePage8_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Large/LargePage9_Skin.exml'] = window.LargePage9_Skin = (function (_super) {
	__extends(LargePage9_Skin, _super);
	function LargePage9_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","select4","select5","select6","selectBtn1","selectBtn2","selectBtn3","selectBtn4","selectBtn5","selectBtn6"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = LargePage9_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.select5_i(),this.select6_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.selectBtn4_i(),this.selectBtn5_i(),this.selectBtn6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page9scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 80.5;
		t.source = "large_page9_select_png";
		t.visible = false;
		t.width = 177.5;
		t.x = 215;
		t.y = 437;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 80.5;
		t.source = "large_page9_select_png";
		t.visible = false;
		t.width = 177.5;
		t.x = 432;
		t.y = 437;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 80.5;
		t.source = "large_page9_select_png";
		t.visible = false;
		t.width = 177.5;
		t.x = 651.73;
		t.y = 437;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 80.5;
		t.source = "large_page9_select_png";
		t.visible = false;
		t.width = 177.5;
		t.x = 212.73;
		t.y = 536;
		return t;
	};
	_proto.select5_i = function () {
		var t = new eui.Image();
		this.select5 = t;
		t.height = 80.5;
		t.source = "large_page9_select_png";
		t.visible = false;
		t.width = 177.5;
		t.x = 432;
		t.y = 537;
		return t;
	};
	_proto.select6_i = function () {
		var t = new eui.Image();
		this.select6 = t;
		t.height = 80.5;
		t.source = "large_page9_select_png";
		t.visible = false;
		t.width = 177.5;
		t.x = 652.73;
		t.y = 535;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 80.5;
		t.name = "1";
		t.width = 177.5;
		t.x = 215;
		t.y = 437;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 80.5;
		t.name = "2";
		t.width = 177.5;
		t.x = 432;
		t.y = 437;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 80.5;
		t.name = "3";
		t.width = 177.5;
		t.x = 651.73;
		t.y = 437;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 80.5;
		t.name = "4";
		t.width = 177.5;
		t.x = 212.73;
		t.y = 536;
		return t;
	};
	_proto.selectBtn5_i = function () {
		var t = new eui.Group();
		this.selectBtn5 = t;
		t.height = 80.5;
		t.name = "5";
		t.width = 177.5;
		t.x = 432;
		t.y = 537;
		return t;
	};
	_proto.selectBtn6_i = function () {
		var t = new eui.Group();
		this.selectBtn6 = t;
		t.height = 80.5;
		t.name = "6";
		t.width = 177.5;
		t.x = 652.73;
		t.y = 535;
		return t;
	};
	return LargePage9_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/LoadingScene/Scene_Loading_Land_Skin.exml'] = window.Scene_Loading_Land_Skin = (function (_super) {
	__extends(Scene_Loading_Land_Skin, _super);
	function Scene_Loading_Land_Skin() {
		_super.call(this);
		this.skinParts = ["planLab","diImg","upImg"];
		
		this.height = 768;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Scene_Loading_Land_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 768;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.planLab_i(),this.diImg_i(),this.upImg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 768;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loadingscene_bg_png";
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading_haitun_png";
		t.verticalCenter = -96.5;
		return t;
	};
	_proto.planLab_i = function () {
		var t = new eui.Label();
		this.planLab = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "课件资源加载中---0%";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.visible = false;
		t.y = 565.21;
		return t;
	};
	_proto.diImg_i = function () {
		var t = new eui.Rect();
		this.diImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 60;
		t.horizontalCenter = 0;
		t.strokeColor = 0x4dade1;
		t.strokeWeight = 10;
		t.width = 800;
		t.y = 655;
		return t;
	};
	_proto.upImg_i = function () {
		var t = new eui.Rect();
		this.upImg = t;
		t.fillColor = 0x4dade1;
		t.height = 60;
		t.width = 20;
		t.x = 117.36;
		t.y = 655;
		return t;
	};
	return Scene_Loading_Land_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/LoadingScene/Scene_Loading_Skin.exml'] = window.Scene_Loading_Skin = (function (_super) {
	__extends(Scene_Loading_Skin, _super);
	function Scene_Loading_Skin() {
		_super.call(this);
		this.skinParts = ["planLab","diImg","upImg"];
		
		this.height = 1024;
		this.width = 768;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Scene_Loading_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1024;
		t.width = 768;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.planLab_i(),this.diImg_i(),this.upImg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1024;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loadingscene_bg_png";
		t.width = 768;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading_haitun_png";
		t.y = 203.81;
		return t;
	};
	_proto.planLab_i = function () {
		var t = new eui.Label();
		this.planLab = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "课件资源加载中---0%";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.visible = false;
		t.x = 194.5;
		t.y = 686;
		return t;
	};
	_proto.diImg_i = function () {
		var t = new eui.Rect();
		this.diImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 60;
		t.horizontalCenter = 0;
		t.strokeColor = 0x4dade1;
		t.strokeWeight = 10;
		t.width = 600;
		t.y = 755;
		return t;
	};
	_proto.upImg_i = function () {
		var t = new eui.Rect();
		this.upImg = t;
		t.fillColor = 0x4dade1;
		t.height = 60;
		t.width = 20;
		t.x = 81;
		t.y = 755;
		return t;
	};
	return Scene_Loading_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/MainScene/Assessment_Main_Skin.exml'] = window.Assessment_Main_Skin = (function (_super) {
	__extends(Assessment_Main_Skin, _super);
	function Assessment_Main_Skin() {
		_super.call(this);
		this.skinParts = ["assGroup","soundBtn","resetBtn","mainTitle","main_back_btn","nextImg","nextLab","nextBtn"];
		
		this.height = 768;
		this.width = 1024;
		this.elementsContent = [this._Group1_i(),this._Group2_i()];
	}
	var _proto = Assessment_Main_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.x = 0;
		t.y = 64;
		t.elementsContent = [this.assGroup_i(),this.soundBtn_i(),this.resetBtn_i()];
		return t;
	};
	_proto.assGroup_i = function () {
		var t = new eui.Group();
		this.assGroup = t;
		t.height = 704;
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 704;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.soundBtn_i = function () {
		var t = new eui.Group();
		this.soundBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96.82;
		t.width = 100.39;
		t.x = 68;
		t.y = 15;
		return t;
	};
	_proto.resetBtn_i = function () {
		var t = new eui.Image();
		this.resetBtn = t;
		t.height = 43;
		t.source = "main_btn_reset_png";
		t.visible = false;
		t.width = 45;
		t.x = 935.38;
		t.y = 601.8;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.mainTitle_i(),this.main_back_btn_i(),this.nextBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "white_png";
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mainTitle_i = function () {
		var t = new eui.Label();
		this.mainTitle = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "中班测评题";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.y = 49;
		return t;
	};
	_proto.main_back_btn_i = function () {
		var t = new eui.Image();
		this.main_back_btn = t;
		t.height = 57;
		t.source = "main_btn_back_png";
		t.width = 57;
		t.x = 35;
		t.y = 35;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Group();
		this.nextBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 869;
		t.y = 35;
		t.elementsContent = [this.nextImg_i(),this.nextLab_i()];
		return t;
	};
	_proto.nextImg_i = function () {
		var t = new eui.Image();
		this.nextImg = t;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_btn_bg_png";
		t.width = 120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nextLab_i = function () {
		var t = new eui.Label();
		this.nextLab = t;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "确认提交";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Assessment_Main_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/MainScene/Assessment_Result_Skin.exml'] = window.Assessment_Result_Skin = (function (_super) {
	__extends(Assessment_Result_Skin, _super);
	function Assessment_Result_Skin() {
		_super.call(this);
		this.skinParts = ["nickLab","img_head_default","headImg","rect_mask","scoreLab","costLab","persent1","persent2","persent3","persent4","persent5","raderComp","d1","d2","t1","txt1","t2","txt2","t3","txt3","t4","txt4","t5","txt5","rScroller","main_back_btn"];
		
		this.height = 768;
		this.width = 1024;
		this.elementsContent = [this._Group7_i()];
	}
	var _proto = Assessment_Result_Skin.prototype;

	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 768;
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rScroller_i(),this.main_back_btn_i()];
		return t;
	};
	_proto.rScroller_i = function () {
		var t = new eui.Scroller();
		this.rScroller = t;
		t.height = 768;
		t.scrollPolicyV = "on";
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group6_i();
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 1861;
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1861;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "result_bg_png";
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 98.67;
		t.width = 737.34;
		t.x = 170.66;
		t.y = 54.7;
		t.elementsContent = [this.nickLab_i(),this._Image2_i(),this.img_head_default_i(),this.headImg_i(),this.rect_mask_i()];
		return t;
	};
	_proto.nickLab_i = function () {
		var t = new eui.Label();
		this.nickLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.64;
		t.size = 20;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0xfefefe;
		t.verticalAlign = "middle";
		t.width = 408.84;
		t.x = 222.22;
		t.y = 31.6;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 95;
		t.source = "common_headbg_png";
		t.width = 95;
		t.x = 642;
		t.y = 2;
		return t;
	};
	_proto.img_head_default_i = function () {
		var t = new eui.Image();
		this.img_head_default = t;
		t.height = 85;
		t.source = "common_head_default_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 85;
		t.x = 647;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 85;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 85;
		t.x = 647;
		return t;
	};
	_proto.rect_mask_i = function () {
		var t = new eui.Rect();
		this.rect_mask = t;
		t.ellipseWidth = 90;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 85;
		t.x = 647;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 120;
		t.width = 794;
		t.x = 115;
		t.y = 170;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i(),this.scoreLab_i(),this._Label2_i(),this.costLab_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.source = "result_kuang_bian_png";
		t.width = 794;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.scale9Grid = new egret.Rectangle(20,20,20,20);
		t.source = "result_kuang_png";
		t.width = 784;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 74;
		t.source = "result_kuang_shuxian_png";
		t.width = 1;
		t.x = 392;
		t.y = 18;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.size = 18;
		t.text = "测试成绩";
		t.textColor = 0x333333;
		t.width = 136;
		t.x = 158;
		t.y = 20;
		return t;
	};
	_proto.scoreLab_i = function () {
		var t = new eui.Label();
		this.scoreLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xff654b;
		t.verticalAlign = "middle";
		t.width = 109.33;
		t.x = 142.67;
		t.y = 62;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.size = 18;
		t.text = "测试耗时";
		t.textColor = 0x333333;
		t.width = 136;
		t.x = 555;
		t.y = 20;
		return t;
	};
	_proto.costLab_i = function () {
		var t = new eui.Label();
		this.costLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFF654B;
		t.verticalAlign = "middle";
		t.width = 376.78;
		t.x = 402;
		t.y = 60;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 325;
		t.width = 794;
		t.x = 115;
		t.y = 310;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Label3_i(),this._Label4_i(),this.persent1_i(),this._Label5_i(),this.persent2_i(),this._Label6_i(),this.persent3_i(),this._Label7_i(),this.persent4_i(),this._Label8_i(),this.persent5_i(),this.raderComp_i(),this._Image8_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 325;
		t.scale9Grid = new egret.Rectangle(20,20,20,20);
		t.source = "result_kuang_png";
		t.width = 784;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 53;
		t.scale9Grid = new egret.Rectangle(20,20,20,20);
		t.source = "result_title_bg_png";
		t.width = 116;
		t.x = -20;
		t.y = 38;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 24;
		t.size = 18;
		t.text = "能力评估";
		t.textColor = 0xffffff;
		t.width = 80;
		t.x = 4;
		t.y = 58.5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.size = 18;
		t.text = "数与计算";
		t.textColor = 0x333333;
		t.width = 80;
		t.x = 347;
		t.y = 37;
		return t;
	};
	_proto.persent1_i = function () {
		var t = new eui.Label();
		this.persent1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.size = 18;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0x333333;
		t.width = 80;
		t.x = 420.97;
		t.y = 37;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.size = 18;
		t.text = "生活中的应用";
		t.textColor = 0x333333;
		t.width = 122;
		t.x = 509;
		t.y = 133;
		return t;
	};
	_proto.persent2_i = function () {
		var t = new eui.Label();
		this.persent2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.size = 18;
		t.text = "（12%）";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 509;
		t.y = 150.5;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.size = 18;
		t.text = "逻辑与推理";
		t.textColor = 0x333333;
		t.width = 120;
		t.x = 427;
		t.y = 290;
		return t;
	};
	_proto.persent3_i = function () {
		var t = new eui.Label();
		this.persent3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.size = 18;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 518.98;
		t.y = 287;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.size = 18;
		t.text = "图形与空间";
		t.textColor = 0x333333;
		t.width = 96;
		t.x = 263;
		t.y = 290;
		return t;
	};
	_proto.persent4_i = function () {
		var t = new eui.Label();
		this.persent4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.size = 18;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 353.66;
		t.y = 286.67;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.size = 18;
		t.text = "综合能力";
		t.textColor = 0x333333;
		t.width = 80;
		t.x = 214;
		t.y = 133;
		return t;
	};
	_proto.persent5_i = function () {
		var t = new eui.Label();
		this.persent5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.size = 18;
		t.text = "（12%）";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 86;
		t.x = 209.66;
		t.y = 150.5;
		return t;
	};
	_proto.raderComp_i = function () {
		var t = new eui.Group();
		this.raderComp = t;
		t.height = 193;
		t.width = 200;
		t.x = 298;
		t.y = 66;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 122;
		t.scale9Grid = new egret.Rectangle(20,20,20,20);
		t.source = "result_cao_png";
		t.width = 86;
		t.x = 748;
		t.y = 214;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 771;
		t.width = 794;
		t.x = 115;
		t.y = 660;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this.d1_i(),this.d2_i(),this._Label9_i(),this.t1_i(),this.txt1_i(),this.t2_i(),this.txt2_i(),this.t3_i(),this.txt3_i(),this.t4_i(),this.txt4_i(),this.t5_i(),this.txt5_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 771;
		t.scale9Grid = new egret.Rectangle(20,20,20,20);
		t.source = "result_kuang_png";
		t.width = 794;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 53;
		t.scale9Grid = new egret.Rectangle(20,20,20,20);
		t.source = "result_title_bg_png";
		t.width = 116;
		t.x = -20;
		t.y = 38;
		return t;
	};
	_proto.d1_i = function () {
		var t = new eui.Image();
		this.d1 = t;
		t.height = 157;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "result_gray_bg_png";
		t.width = 794;
		t.x = 5;
		t.y = 219;
		return t;
	};
	_proto.d2_i = function () {
		var t = new eui.Image();
		this.d2 = t;
		t.height = 127;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "result_gray_bg_png";
		t.width = 794;
		t.x = 5;
		t.y = 503;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 24;
		t.size = 18;
		t.text = "测评建议";
		t.textColor = 0xFFFFFF;
		t.width = 80;
		t.x = 4;
		t.y = 58.5;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Label();
		this.t1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 24;
		t.size = 18;
		t.text = "数与计算";
		t.textColor = 0x333333;
		t.width = 80;
		t.x = 66;
		t.y = 116;
		return t;
	};
	_proto.txt1_i = function () {
		var t = new eui.Label();
		this.txt1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.33;
		t.lineSpacing = 5;
		t.size = 15;
		t.text = "待定";
		t.textColor = 0x333333;
		t.width = 689;
		t.x = 66;
		t.y = 146.96;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Label();
		this.t2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 24;
		t.size = 18;
		t.text = "图形与空间";
		t.textColor = 0x333333;
		t.width = 120;
		t.x = 66;
		t.y = 243;
		return t;
	};
	_proto.txt2_i = function () {
		var t = new eui.Label();
		this.txt2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94.33;
		t.lineSpacing = 5;
		t.size = 15;
		t.text = "待定";
		t.textColor = 0x333333;
		t.width = 689;
		t.x = 66;
		t.y = 273.19;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Label();
		this.t3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 24;
		t.size = 18;
		t.text = "逻辑与推理";
		t.textColor = 0x333333;
		t.width = 120;
		t.x = 66;
		t.y = 403;
		return t;
	};
	_proto.txt3_i = function () {
		var t = new eui.Label();
		this.txt3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74.33;
		t.lineSpacing = 5;
		t.size = 15;
		t.text = "待定";
		t.textColor = 0x333333;
		t.width = 689;
		t.x = 66;
		t.y = 430;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Label();
		this.t4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 24;
		t.size = 18;
		t.text = "生活中的应用";
		t.textColor = 0x333333;
		t.width = 122;
		t.x = 66;
		t.y = 526.22;
		return t;
	};
	_proto.txt4_i = function () {
		var t = new eui.Label();
		this.txt4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74.33;
		t.lineSpacing = 5;
		t.size = 15;
		t.text = "待定";
		t.textColor = 0x333333;
		t.width = 689;
		t.x = 66;
		t.y = 555;
		return t;
	};
	_proto.t5_i = function () {
		var t = new eui.Label();
		this.t5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 24;
		t.size = 18;
		t.text = "综合能力";
		t.textColor = 0x333333;
		t.width = 80;
		t.x = 66;
		t.y = 652;
		return t;
	};
	_proto.txt5_i = function () {
		var t = new eui.Label();
		this.txt5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74.33;
		t.lineSpacing = 5;
		t.size = 15;
		t.text = "待定";
		t.textColor = 0x333333;
		t.width = 689;
		t.x = 66;
		t.y = 676;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 1;
		t.scale9Grid = new egret.Rectangle(20,20,20,20);
		t.source = "result_kuang_hengxian_png";
		t.width = 794;
		t.x = 5;
		t.y = 218;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 1;
		t.scale9Grid = new egret.Rectangle(20,20,20,20);
		t.source = "result_kuang_hengxian_png";
		t.width = 794;
		t.x = 5;
		t.y = 375;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 1;
		t.scale9Grid = new egret.Rectangle(20,20,20,20);
		t.source = "result_kuang_hengxian_png";
		t.width = 794;
		t.x = 5;
		t.y = 502;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 1;
		t.scale9Grid = new egret.Rectangle(20,20,20,20);
		t.source = "result_kuang_hengxian_png";
		t.width = 794;
		t.x = 5;
		t.y = 629;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 80.5;
		t.scale9Grid = new egret.Rectangle(20,20,20,20);
		t.source = "result_stone_png";
		t.width = 86;
		t.x = -23;
		t.y = 695.5;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 794;
		t.x = 115;
		t.y = 1431;
		t.elementsContent = [this._Label10_i(),this._Image16_i()];
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87.58;
		t.lineSpacing = 10;
		t.size = 16;
		t.text = "预约课程请关注“海豚思维服务号”\n预约后，我们会有专门的课程顾问联系您，针对孩子的测评结果精准匹配课程";
		t.textAlign = "right";
		t.textColor = 0xc0d8fe;
		t.width = 613.39;
		t.x = 35.91;
		t.y = 85;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 123;
		t.source = "result_qr_code_png";
		t.width = 123;
		t.x = 671;
		t.y = 43;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 225.5;
		t.source = "result_footer_png";
		t.width = 1024;
		t.x = 0;
		t.y = 1635.5;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.source = "result_line_png";
		t.width = 16;
		t.x = 179;
		t.y = 271;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.source = "result_line_png";
		t.width = 16;
		t.x = 845;
		t.y = 271;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.source = "result_line_png";
		t.width = 16;
		t.x = 179;
		t.y = 621;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.source = "result_line_png";
		t.width = 16;
		t.x = 845;
		t.y = 621;
		return t;
	};
	_proto.main_back_btn_i = function () {
		var t = new eui.Image();
		this.main_back_btn = t;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "back_png";
		t.width = 57;
		t.x = 35;
		t.y = 35;
		return t;
	};
	return Assessment_Result_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/MainScene/Scene_Main_Skin.exml'] = window.Scene_Main_Skin = (function (_super) {
	__extends(Scene_Main_Skin, _super);
	var Scene_Main_Skin$Skin1 = 	(function (_super) {
		__extends(Scene_Main_Skin$Skin1, _super);
		function Scene_Main_Skin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","prepage_tab_selected_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","prepage_tab_unable_png")
					])
			];
		}
		var _proto = Scene_Main_Skin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "prepage_tab_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Scene_Main_Skin$Skin1;
	})(eui.Skin);

	var Scene_Main_Skin$Skin2 = 	(function (_super) {
		__extends(Scene_Main_Skin$Skin2, _super);
		function Scene_Main_Skin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","prepage_tab_selected_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","prepage_tab_unable_png")
					])
			];
		}
		var _proto = Scene_Main_Skin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "prepage_tab_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Scene_Main_Skin$Skin2;
	})(eui.Skin);

	var Scene_Main_Skin$Skin3 = 	(function (_super) {
		__extends(Scene_Main_Skin$Skin3, _super);
		function Scene_Main_Skin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","prepage_tab_selected_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","prepage_tab_unable_png")
					])
			];
		}
		var _proto = Scene_Main_Skin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "prepage_tab_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Scene_Main_Skin$Skin3;
	})(eui.Skin);

	var Scene_Main_Skin$Skin4 = 	(function (_super) {
		__extends(Scene_Main_Skin$Skin4, _super);
		function Scene_Main_Skin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","prepage_tab_selected_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","prepage_tab_unable_png")
					])
			];
		}
		var _proto = Scene_Main_Skin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "prepage_tab_normal_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Scene_Main_Skin$Skin4;
	})(eui.Skin);

	function Scene_Main_Skin() {
		_super.call(this);
		this.skinParts = ["prepage_btn","main_back_btn","tabBtn1","tabBtn2","tabBtn3","tabBtn4","tab1","tab2","tab3","tab4"];
		
		this.height = 768;
		this.width = 1024;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = Scene_Main_Skin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 768;
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.main_back_btn_i(),this.tabBtn1_i(),this.tabBtn2_i(),this.tabBtn3_i(),this.tabBtn4_i(),this.tab1_i(),this.tab2_i(),this.tab3_i(),this.tab4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 768;
		t.source = "prepage_bg_png";
		t.width = 1024;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 563.5;
		t.source = "prepage_bg_kuang_png";
		t.width = 665.5;
		t.x = 308;
		t.y = 79;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 63;
		t.width = 218;
		t.x = 526.52;
		t.y = 490.7;
		t.elementsContent = [this._Image3_i(),this.prepage_btn_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "prepage_btn_png";
		t.width = 218;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.prepage_btn_i = function () {
		var t = new eui.Label();
		this.prepage_btn = t;
		t.height = 63;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "开始测评";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 218;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.height = 92;
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "专为各阶段小朋友准备，\n方便了解孩子数学思维实际水平";
		t.textColor = 0x5988c4;
		t.width = 543.12;
		t.x = 394;
		t.y = 130;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73;
		t.lineSpacing = 20;
		t.size = 27;
		t.text = "1.每个测评只有一次机会\n2.家长可以帮助孩子理解题意，请让孩子独立";
		t.textColor = 0x333333;
		t.width = 551.67;
		t.x = 394;
		t.y = 224.15;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.lineSpacing = 20;
		t.size = 27;
		t.text = "思考进行答题";
		t.textColor = 0x333333;
		t.width = 551.67;
		t.x = 414;
		t.y = 315.15;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73;
		t.lineSpacing = 20;
		t.size = 27;
		t.text = "3.测评结果将为孩子后续的学习提供指导\n4.请在安静的环境下作答";
		t.textColor = 0x333333;
		t.width = 551.67;
		t.x = 394;
		t.y = 362.15;
		return t;
	};
	_proto.main_back_btn_i = function () {
		var t = new eui.Image();
		this.main_back_btn = t;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "back_png";
		t.touchEnabled = true;
		t.width = 57;
		t.x = 35;
		t.y = 35;
		return t;
	};
	_proto.tabBtn1_i = function () {
		var t = new eui.Button();
		this.tabBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.currentState = "up";
		t.enabled = true;
		t.height = 66.5;
		t.name = "1";
		t.width = 140;
		t.x = 115;
		t.y = 148;
		t.skinName = Scene_Main_Skin$Skin1;
		return t;
	};
	_proto.tabBtn2_i = function () {
		var t = new eui.Button();
		this.tabBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 66.5;
		t.name = "2";
		t.width = 140;
		t.x = 115;
		t.y = 251;
		t.skinName = Scene_Main_Skin$Skin2;
		return t;
	};
	_proto.tabBtn3_i = function () {
		var t = new eui.Button();
		this.tabBtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 66.5;
		t.name = "3";
		t.width = 140;
		t.x = 115;
		t.y = 354;
		t.skinName = Scene_Main_Skin$Skin3;
		return t;
	};
	_proto.tabBtn4_i = function () {
		var t = new eui.Button();
		this.tabBtn4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 66.5;
		t.name = "4";
		t.width = 140;
		t.x = 115;
		t.y = 457;
		t.skinName = Scene_Main_Skin$Skin4;
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Label();
		this.tab1 = t;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.name = "1";
		t.size = 20;
		t.text = "中班";
		t.textAlign = "center";
		t.textColor = 0x0a0707;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 125;
		t.y = 149;
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Label();
		this.tab2 = t;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.name = "2";
		t.size = 20;
		t.text = "大班";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 125;
		t.y = 252.25;
		return t;
	};
	_proto.tab3_i = function () {
		var t = new eui.Label();
		this.tab3 = t;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.name = "3";
		t.size = 20;
		t.text = "一年级";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 122;
		t.y = 355.25;
		return t;
	};
	_proto.tab4_i = function () {
		var t = new eui.Label();
		this.tab4 = t;
		t.anchorOffsetY = 0;
		t.height = 57;
		t.name = "4";
		t.size = 20;
		t.text = "二年级";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 125;
		t.y = 458.25;
		return t;
	};
	return Scene_Main_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Medium/MediumPage1_Skin.exml'] = window.MediumPage1_Skin = (function (_super) {
	__extends(MediumPage1_Skin, _super);
	function MediumPage1_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","selectBtn1","selectBtn2","selectBtn3"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MediumPage1_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 188;
		t.y = 546;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 429;
		t.y = 546;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 670.73;
		t.y = 546;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 188;
		t.y = 545;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 429;
		t.y = 545;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 670.73;
		t.y = 545;
		return t;
	};
	return MediumPage1_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Medium/MediumPage2_Skin.exml'] = window.MediumPage2_Skin = (function (_super) {
	__extends(MediumPage2_Skin, _super);
	function MediumPage2_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","selectBtn1","selectBtn2","selectBtn3"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MediumPage2_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 188;
		t.y = 546;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 430;
		t.y = 546;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 672;
		t.y = 544;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 166;
		t.x = 188;
		t.y = 547;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 429;
		t.y = 547;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 672;
		t.y = 545;
		return t;
	};
	return MediumPage2_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Medium/MediumPage3_Skin.exml'] = window.MediumPage3_Skin = (function (_super) {
	__extends(MediumPage3_Skin, _super);
	function MediumPage3_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","selectBtn1","selectBtn2","selectBtn3"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MediumPage3_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page3scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 157;
		t.x = 193;
		t.y = 550;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 157;
		t.x = 434;
		t.y = 550;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 157;
		t.x = 676;
		t.y = 549.5;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.name = "1";
		t.width = 157;
		t.x = 193;
		t.y = 550;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.name = "2";
		t.width = 157;
		t.x = 434;
		t.y = 550;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.name = "3";
		t.width = 157;
		t.x = 676;
		t.y = 549.5;
		return t;
	};
	return MediumPage3_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Medium/MediumPage4_Skin.exml'] = window.MediumPage4_Skin = (function (_super) {
	__extends(MediumPage4_Skin, _super);
	function MediumPage4_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select4","select3","selectBtn1","selectBtn2","selectBtn4","selectBtn3"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MediumPage4_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select4_i(),this.select3_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn4_i(),this.selectBtn3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page4scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 138;
		t.source = "page4_select_png";
		t.visible = false;
		t.width = 137;
		t.x = 135.83;
		t.y = 503;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 138;
		t.source = "page4_select_png";
		t.visible = false;
		t.width = 137;
		t.x = 323.1;
		t.y = 503;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 138;
		t.source = "page4_select_png";
		t.visible = false;
		t.width = 137;
		t.x = 696.74;
		t.y = 503;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 138;
		t.source = "page4_select_png";
		t.visible = false;
		t.width = 137;
		t.x = 509.76;
		t.y = 503;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 131.5;
		t.name = "1";
		t.width = 137;
		t.x = 135.83;
		t.y = 503;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 131.5;
		t.name = "2";
		t.width = 137;
		t.x = 323.1;
		t.y = 503;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 131.5;
		t.name = "4";
		t.width = 137;
		t.x = 696.74;
		t.y = 503;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 131.5;
		t.name = "3";
		t.width = 137;
		t.x = 509.76;
		t.y = 503;
		return t;
	};
	return MediumPage4_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Medium/MediumPage5_Skin.exml'] = window.MediumPage5_Skin = (function (_super) {
	__extends(MediumPage5_Skin, _super);
	function MediumPage5_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select4","select3","select2","selectBtn1","selectBtn4","selectBtn3","selectBtn2"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MediumPage5_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select4_i(),this.select3_i(),this.select2_i(),this.selectBtn1_i(),this.selectBtn4_i(),this.selectBtn3_i(),this.selectBtn2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page5scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 187.5;
		t.source = "page5_select_png";
		t.visible = false;
		t.width = 137.5;
		t.x = 163;
		t.y = 430;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 187.5;
		t.source = "page5_select_png";
		t.visible = false;
		t.width = 137.5;
		t.x = 731;
		t.y = 430;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 187.5;
		t.source = "page5_select_png";
		t.visible = false;
		t.width = 137.5;
		t.x = 538;
		t.y = 430;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 187.5;
		t.source = "page5_select_png";
		t.visible = false;
		t.width = 137.5;
		t.x = 351;
		t.y = 430;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 187.5;
		t.name = "1";
		t.width = 137.5;
		t.x = 163;
		t.y = 430;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 187.5;
		t.name = "4";
		t.width = 137.5;
		t.x = 731;
		t.y = 430;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 187.5;
		t.name = "3";
		t.width = 137.5;
		t.x = 539;
		t.y = 430;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 187.5;
		t.name = "2";
		t.width = 137.5;
		t.x = 351;
		t.y = 430;
		return t;
	};
	return MediumPage5_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Medium/MediumPage6_Skin.exml'] = window.MediumPage6_Skin = (function (_super) {
	__extends(MediumPage6_Skin, _super);
	function MediumPage6_Skin() {
		_super.call(this);
		this.skinParts = ["obj2","obj1","obj3","obj5","obj4","pos1","pos2","pos3","pos4","pos5"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MediumPage6_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.obj2_i(),this.obj1_i(),this.obj3_i(),this.obj5_i(),this.obj4_i(),this.pos1_i(),this.pos2_i(),this.pos3_i(),this.pos4_i(),this.pos5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page6scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.obj2_i = function () {
		var t = new eui.Image();
		this.obj2 = t;
		t.height = 150;
		t.name = "2";
		t.source = "page6_toy1_png";
		t.width = 150;
		t.x = 470.5;
		t.y = 122;
		return t;
	};
	_proto.obj1_i = function () {
		var t = new eui.Image();
		this.obj1 = t;
		t.height = 150;
		t.name = "1";
		t.source = "page6_toy2_png";
		t.width = 150;
		t.x = 198;
		t.y = 123;
		return t;
	};
	_proto.obj3_i = function () {
		var t = new eui.Image();
		this.obj3 = t;
		t.height = 150;
		t.name = "3";
		t.source = "page6_toy3_png";
		t.width = 150;
		t.x = 691;
		t.y = 187.5;
		return t;
	};
	_proto.obj5_i = function () {
		var t = new eui.Image();
		this.obj5 = t;
		t.height = 150;
		t.name = "5";
		t.source = "page6_toy4_png";
		t.width = 150;
		t.x = 453;
		t.y = 281.5;
		return t;
	};
	_proto.obj4_i = function () {
		var t = new eui.Image();
		this.obj4 = t;
		t.height = 150;
		t.name = "4";
		t.source = "page6_toy5_png";
		t.width = 150;
		t.x = 193;
		t.y = 274.75;
		return t;
	};
	_proto.pos1_i = function () {
		var t = new eui.Group();
		this.pos1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 196.97;
		t.touchEnabled = false;
		t.width = 136.36;
		t.x = 117.96;
		t.y = 445.04;
		return t;
	};
	_proto.pos2_i = function () {
		var t = new eui.Group();
		this.pos2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 196.97;
		t.touchEnabled = false;
		t.width = 136.36;
		t.x = 280.98;
		t.y = 444.42;
		return t;
	};
	_proto.pos3_i = function () {
		var t = new eui.Group();
		this.pos3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 196.97;
		t.touchEnabled = false;
		t.width = 136.36;
		t.x = 444.03;
		t.y = 443.78;
		return t;
	};
	_proto.pos4_i = function () {
		var t = new eui.Group();
		this.pos4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 196.97;
		t.touchEnabled = false;
		t.width = 136.36;
		t.x = 607.06;
		t.y = 443.14;
		return t;
	};
	_proto.pos5_i = function () {
		var t = new eui.Group();
		this.pos5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 196.97;
		t.touchEnabled = false;
		t.width = 136.36;
		t.x = 771.61;
		t.y = 445.54;
		return t;
	};
	return MediumPage6_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Medium/MediumPage7_Skin.exml'] = window.MediumPage7_Skin = (function (_super) {
	__extends(MediumPage7_Skin, _super);
	function MediumPage7_Skin() {
		_super.call(this);
		this.skinParts = ["obj2","obj1","obj3","obj4","pos1","pos2","pos3","pos4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MediumPage7_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.obj2_i(),this.obj1_i(),this.obj3_i(),this.obj4_i(),this.pos1_i(),this.pos2_i(),this.pos3_i(),this.pos4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page7scene_bg_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.obj2_i = function () {
		var t = new eui.Image();
		this.obj2 = t;
		t.height = 145;
		t.name = "2";
		t.source = "page7_toy3_png";
		t.width = 150;
		t.x = 323.41;
		t.y = 171.25;
		return t;
	};
	_proto.obj1_i = function () {
		var t = new eui.Image();
		this.obj1 = t;
		t.height = 145;
		t.name = "1";
		t.source = "page7_toy4_png";
		t.width = 150;
		t.x = 193.11;
		t.y = 116.34;
		return t;
	};
	_proto.obj3_i = function () {
		var t = new eui.Image();
		this.obj3 = t;
		t.height = 145;
		t.name = "3";
		t.source = "page7_toy2_png";
		t.width = 150;
		t.x = 512;
		t.y = 134.52;
		return t;
	};
	_proto.obj4_i = function () {
		var t = new eui.Image();
		this.obj4 = t;
		t.height = 145;
		t.name = "4";
		t.source = "page7_toy1_png";
		t.width = 150;
		t.x = 740.39;
		t.y = 171.25;
		return t;
	};
	_proto.pos1_i = function () {
		var t = new eui.Group();
		this.pos1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 144;
		t.name = "1";
		t.touchEnabled = false;
		t.width = 150;
		t.x = 345.25;
		t.y = 366.25;
		return t;
	};
	_proto.pos2_i = function () {
		var t = new eui.Group();
		this.pos2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 144;
		t.name = "2";
		t.touchEnabled = false;
		t.width = 150;
		t.x = 493.11;
		t.y = 365.64;
		return t;
	};
	_proto.pos3_i = function () {
		var t = new eui.Group();
		this.pos3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 144;
		t.name = "3";
		t.touchEnabled = false;
		t.width = 150;
		t.x = 344.02;
		t.y = 510.45;
		return t;
	};
	_proto.pos4_i = function () {
		var t = new eui.Group();
		this.pos4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 144;
		t.name = "4";
		t.touchEnabled = false;
		t.width = 150;
		t.x = 493.39;
		t.y = 509.78;
		return t;
	};
	return MediumPage7_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/OneClass/OneClassPage1_Skin.exml'] = window.OneClassPage1_Skin = (function (_super) {
	__extends(OneClassPage1_Skin, _super);
	function OneClassPage1_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","select4","selectBtn1","selectBtn2","selectBtn3","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OneClassPage1_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 274;
		t.y = 435;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 594;
		t.y = 435;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 274;
		t.y = 547.5;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 593;
		t.y = 546;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 274;
		t.y = 435;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 594;
		t.y = 435;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 274;
		t.y = 547.5;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 75;
		t.name = "4";
		t.width = 166;
		t.x = 593;
		t.y = 546;
		return t;
	};
	return OneClassPage1_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/OneClass/OneClassPage10_Skin.exml'] = window.OneClassPage10_Skin = (function (_super) {
	__extends(OneClassPage10_Skin, _super);
	function OneClassPage10_Skin() {
		_super.call(this);
		this.skinParts = ["select1","selectBtn1","select2","selectBtn2","select3","selectBtn3","select4","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OneClassPage10_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.selectBtn1_i(),this.select2_i(),this.selectBtn2_i(),this.select3_i(),this.selectBtn3_i(),this.select4_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "10_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 166;
		t.source = "btnt_png";
		t.visible = false;
		t.width = 280;
		t.x = 184;
		t.y = 195;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 189;
		t.name = "1";
		t.width = 301;
		t.x = 174;
		t.y = 181;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 166;
		t.source = "btnt_png";
		t.visible = false;
		t.width = 280;
		t.x = 550;
		t.y = 193.5;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 189;
		t.name = "2";
		t.width = 301;
		t.x = 540;
		t.y = 179.5;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 166;
		t.source = "btnt_png";
		t.visible = false;
		t.width = 280;
		t.x = 184;
		t.y = 409;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 189;
		t.name = "3";
		t.width = 301;
		t.x = 177;
		t.y = 396;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 166;
		t.source = "btnt_png";
		t.visible = false;
		t.width = 280;
		t.x = 553;
		t.y = 408.5;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 189;
		t.name = "4";
		t.width = 301;
		t.x = 543;
		t.y = 394.5;
		return t;
	};
	return OneClassPage10_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/OneClass/OneClassPage11_Skin.exml'] = window.OneClassPage11_Skin = (function (_super) {
	__extends(OneClassPage11_Skin, _super);
	function OneClassPage11_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","selectBtn1","selectBtn2"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OneClassPage11_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.selectBtn1_i(),this.selectBtn2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "11_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 710;
		t.y = 224;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 709;
		t.y = 473;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 710.33;
		t.y = 224;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 709;
		t.y = 473;
		return t;
	};
	return OneClassPage11_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/OneClass/OneClassPage2_Skin.exml'] = window.OneClassPage2_Skin = (function (_super) {
	__extends(OneClassPage2_Skin, _super);
	function OneClassPage2_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","select4","selectBtn1","selectBtn2","selectBtn3","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OneClassPage2_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "2_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 274;
		t.y = 435;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 594;
		t.y = 435;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 274;
		t.y = 547.5;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 593;
		t.y = 546;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 274;
		t.y = 435;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 594;
		t.y = 435;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 274;
		t.y = 547.5;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 75;
		t.name = "4";
		t.width = 166;
		t.x = 593;
		t.y = 546;
		return t;
	};
	return OneClassPage2_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/OneClass/OneClassPage3_Skin.exml'] = window.OneClassPage3_Skin = (function (_super) {
	__extends(OneClassPage3_Skin, _super);
	function OneClassPage3_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","select4","selectBtn1","selectBtn2","selectBtn3","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OneClassPage3_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "3_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 241;
		t.y = 435;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 611;
		t.y = 435;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 241;
		t.y = 547.5;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 610;
		t.y = 546;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 241;
		t.y = 435;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 611;
		t.y = 435;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 241;
		t.y = 547.5;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 75;
		t.name = "4";
		t.width = 166;
		t.x = 610;
		t.y = 546;
		return t;
	};
	return OneClassPage3_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/OneClass/OneClassPage4_Skin.exml'] = window.OneClassPage4_Skin = (function (_super) {
	__extends(OneClassPage4_Skin, _super);
	function OneClassPage4_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","select4","selectBtn1","selectBtn2","selectBtn3","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OneClassPage4_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "4_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 224;
		t.y = 436;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 594;
		t.y = 436;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 224;
		t.y = 548.5;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 593;
		t.y = 547;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 224;
		t.y = 436;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 594;
		t.y = 436;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 224;
		t.y = 548.5;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 75;
		t.name = "4";
		t.width = 166;
		t.x = 593;
		t.y = 547;
		return t;
	};
	return OneClassPage4_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/OneClass/OneClassPage5_Skin.exml'] = window.OneClassPage5_Skin = (function (_super) {
	__extends(OneClassPage5_Skin, _super);
	function OneClassPage5_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","select4","selectBtn1","selectBtn2","selectBtn3","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OneClassPage5_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.select4_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "5_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 243;
		t.y = 436;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 613;
		t.y = 436;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 243;
		t.y = 548.5;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 612;
		t.y = 547;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 243;
		t.y = 436;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 613;
		t.y = 436;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 243;
		t.y = 548.5;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 75;
		t.name = "4";
		t.width = 166;
		t.x = 612;
		t.y = 547;
		return t;
	};
	return OneClassPage5_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/OneClass/OneClassPage6_Skin.exml'] = window.OneClassPage6_Skin = (function (_super) {
	__extends(OneClassPage6_Skin, _super);
	function OneClassPage6_Skin() {
		_super.call(this);
		this.skinParts = ["select1","selectBtn1","select2","selectBtn2","select3","selectBtn3","select4","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OneClassPage6_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.selectBtn1_i(),this.select2_i(),this.selectBtn2_i(),this.select3_i(),this.selectBtn3_i(),this.select4_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "6_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 101;
		t.source = "btntn_png";
		t.visible = false;
		t.width = 140;
		t.x = 188;
		t.y = 517;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112;
		t.name = "1";
		t.width = 152;
		t.x = 183;
		t.y = 512;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 101;
		t.source = "btntn_png";
		t.visible = false;
		t.width = 140;
		t.x = 351;
		t.y = 517;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112;
		t.name = "2";
		t.width = 152;
		t.x = 346;
		t.y = 512;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 101;
		t.source = "btntn_png";
		t.visible = false;
		t.width = 140;
		t.x = 515;
		t.y = 517;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112;
		t.name = "3";
		t.width = 152;
		t.x = 510;
		t.y = 512;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 101;
		t.source = "btntn_png";
		t.visible = false;
		t.width = 140;
		t.x = 678;
		t.y = 517;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112;
		t.name = "4";
		t.width = 152;
		t.x = 673;
		t.y = 512;
		return t;
	};
	return OneClassPage6_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/OneClass/OneClassPage7_Skin.exml'] = window.OneClassPage7_Skin = (function (_super) {
	__extends(OneClassPage7_Skin, _super);
	function OneClassPage7_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","selectBtn1","selectBtn2","selectBtn3","select4","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OneClassPage7_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i(),this.select4_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "7_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 107;
		t.y = 543;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 321;
		t.y = 544;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 534.73;
		t.y = 544;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 107;
		t.y = 542;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 321;
		t.y = 543;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 534.73;
		t.y = 543;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 747.73;
		t.y = 545;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.height = 75;
		t.name = "4";
		t.width = 166;
		t.x = 747.73;
		t.y = 544;
		return t;
	};
	return OneClassPage7_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/OneClass/OneClassPage8_Skin.exml'] = window.OneClassPage8_Skin = (function (_super) {
	__extends(OneClassPage8_Skin, _super);
	function OneClassPage8_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","selectBtn1","selectBtn2"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OneClassPage8_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.selectBtn1_i(),this.selectBtn2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "8_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 237;
		t.y = 548;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 657;
		t.y = 549;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 237;
		t.y = 547;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 657;
		t.y = 548;
		return t;
	};
	return OneClassPage8_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/OneClass/OneClassPage9_Skin.exml'] = window.OneClassPage9_Skin = (function (_super) {
	__extends(OneClassPage9_Skin, _super);
	function OneClassPage9_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","selectBtn1","selectBtn2","select3","selectBtn3"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = OneClassPage9_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.select3_i(),this.selectBtn3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "9_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 143;
		t.y = 556;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 415;
		t.y = 556;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 143;
		t.y = 555;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 415;
		t.y = 555;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 687;
		t.y = 556;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 687;
		t.y = 555;
		return t;
	};
	return OneClassPage9_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/TwoClass/TwoClassPage1_Skin.exml'] = window.TwoClassPage1_Skin = (function (_super) {
	__extends(TwoClassPage1_Skin, _super);
	function TwoClassPage1_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","selectBtn1","selectBtn2","selectBtn3"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TwoClassPage1_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t_1_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 190;
		t.y = 545.5;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 429;
		t.y = 545.5;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 669;
		t.y = 545.5;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 190;
		t.y = 545.5;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 429;
		t.y = 545.5;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 669;
		t.y = 545.5;
		return t;
	};
	return TwoClassPage1_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/TwoClass/TwoClassPage10_Skin.exml'] = window.TwoClassPage10_Skin = (function (_super) {
	__extends(TwoClassPage10_Skin, _super);
	function TwoClassPage10_Skin() {
		_super.call(this);
		this.skinParts = ["select1","selectBtn1","select2","selectBtn2","select3","selectBtn3","select4","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TwoClassPage10_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.selectBtn1_i(),this.select2_i(),this.selectBtn2_i(),this.select3_i(),this.selectBtn3_i(),this.select4_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t_10_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 162.34;
		t.x = 162.33;
		t.y = 548.99;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "1";
		t.width = 169;
		t.x = 157;
		t.y = 542.33;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 162.34;
		t.x = 338.33;
		t.y = 549.99;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "2";
		t.width = 169;
		t.x = 333;
		t.y = 543.33;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 162.34;
		t.x = 518.33;
		t.y = 550.99;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "3";
		t.width = 169;
		t.x = 513;
		t.y = 544.33;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 162.34;
		t.x = 704.33;
		t.y = 549.32;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "4";
		t.width = 169;
		t.x = 699;
		t.y = 542.66;
		return t;
	};
	return TwoClassPage10_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/TwoClass/TwoClassPage2_Skin.exml'] = window.TwoClassPage2_Skin = (function (_super) {
	__extends(TwoClassPage2_Skin, _super);
	function TwoClassPage2_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","selectBtn1","selectBtn2","selectBtn3"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TwoClassPage2_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t_2_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 190;
		t.y = 518.5;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 429;
		t.y = 518.5;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 669;
		t.y = 518.5;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 190;
		t.y = 518.5;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 429;
		t.y = 518.5;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 669;
		t.y = 518.5;
		return t;
	};
	return TwoClassPage2_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/TwoClass/TwoClassPage3_Skin.exml'] = window.TwoClassPage3_Skin = (function (_super) {
	__extends(TwoClassPage3_Skin, _super);
	function TwoClassPage3_Skin() {
		_super.call(this);
		this.skinParts = ["line1","line2","line3","line4","toy_e_1","toy_e_2","toy_e_3","toy_e_4","toy_s_1","toy_s_3","toy_s_4","toy_s_2","paintBg"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TwoClassPage3_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.paintBg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t_3_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.paintBg_i = function () {
		var t = new eui.Group();
		this.paintBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 488;
		t.width = 786;
		t.x = 121;
		t.y = 148;
		t.elementsContent = [this.line1_i(),this.line2_i(),this.line3_i(),this.line4_i(),this.toy_e_1_i(),this.toy_e_2_i(),this.toy_e_3_i(),this.toy_e_4_i(),this.toy_s_1_i(),this.toy_s_3_i(),this.toy_s_4_i(),this.toy_s_2_i()];
		return t;
	};
	_proto.line1_i = function () {
		var t = new eui.Image();
		this.line1 = t;
		t.height = 2;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(14,7,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page10_line_png";
		t.visible = false;
		t.width = 2;
		t.x = 593;
		t.y = 139;
		return t;
	};
	_proto.line2_i = function () {
		var t = new eui.Image();
		this.line2 = t;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page10_line_png";
		t.visible = false;
		t.width = 2;
		t.x = 613;
		t.y = 159;
		return t;
	};
	_proto.line3_i = function () {
		var t = new eui.Image();
		this.line3 = t;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page10_line_png";
		t.visible = false;
		t.width = 2;
		t.x = 623;
		t.y = 169;
		return t;
	};
	_proto.line4_i = function () {
		var t = new eui.Image();
		this.line4 = t;
		t.height = 45;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "large_page10_line_png";
		t.width = 2;
		t.x = 633;
		t.y = 179;
		return t;
	};
	_proto.toy_e_1_i = function () {
		var t = new eui.Group();
		this.toy_e_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 132.82;
		t.x = 116;
		t.y = 307.58;
		return t;
	};
	_proto.toy_e_2_i = function () {
		var t = new eui.Group();
		this.toy_e_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 122.82;
		t.x = 275;
		t.y = 308.58;
		return t;
	};
	_proto.toy_e_3_i = function () {
		var t = new eui.Group();
		this.toy_e_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 124.82;
		t.x = 420.07;
		t.y = 310.58;
		return t;
	};
	_proto.toy_e_4_i = function () {
		var t = new eui.Group();
		this.toy_e_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 118.82;
		t.x = 561;
		t.y = 311.58;
		return t;
	};
	_proto.toy_s_1_i = function () {
		var t = new eui.Group();
		this.toy_s_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 158;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 119;
		t.x = 120;
		t.y = 39;
		return t;
	};
	_proto.toy_s_3_i = function () {
		var t = new eui.Group();
		this.toy_s_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 162;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 420;
		t.y = 36;
		return t;
	};
	_proto.toy_s_4_i = function () {
		var t = new eui.Group();
		this.toy_s_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 158;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 121;
		t.x = 553;
		t.y = 38;
		return t;
	};
	_proto.toy_s_2_i = function () {
		var t = new eui.Group();
		this.toy_s_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 107;
		t.x = 273;
		t.y = 35;
		return t;
	};
	return TwoClassPage3_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/TwoClass/TwoClassPage4_Skin.exml'] = window.TwoClassPage4_Skin = (function (_super) {
	__extends(TwoClassPage4_Skin, _super);
	function TwoClassPage4_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","selectBtn1","selectBtn2","selectBtn3"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TwoClassPage4_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t_4_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 190;
		t.y = 545.5;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 429;
		t.y = 545.5;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 166;
		t.x = 669;
		t.y = 545.5;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.height = 75;
		t.name = "1";
		t.width = 166;
		t.x = 190;
		t.y = 545.5;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.height = 75;
		t.name = "2";
		t.width = 166;
		t.x = 429;
		t.y = 545.5;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.height = 75;
		t.name = "3";
		t.width = 166;
		t.x = 669;
		t.y = 545.5;
		return t;
	};
	return TwoClassPage4_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/TwoClass/TwoClassPage5_Skin.exml'] = window.TwoClassPage5_Skin = (function (_super) {
	__extends(TwoClassPage5_Skin, _super);
	function TwoClassPage5_Skin() {
		_super.call(this);
		this.skinParts = ["select1","select2","select3","selectBtn1","selectBtn2","selectBtn3"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TwoClassPage5_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.select2_i(),this.select3_i(),this.selectBtn1_i(),this.selectBtn2_i(),this.selectBtn3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t_5_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.anchorOffsetX = 0;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 213;
		t.x = 144;
		t.y = 546.5;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.anchorOffsetX = 0;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 213;
		t.x = 399;
		t.y = 546.5;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.anchorOffsetX = 0;
		t.height = 75;
		t.source = "large_page1_select_png";
		t.visible = false;
		t.width = 213;
		t.x = 668;
		t.y = 546.5;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.anchorOffsetX = 0;
		t.height = 75;
		t.name = "1";
		t.width = 213;
		t.x = 144;
		t.y = 546.5;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.anchorOffsetX = 0;
		t.height = 75;
		t.name = "2";
		t.width = 213;
		t.x = 399;
		t.y = 546.5;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.anchorOffsetX = 0;
		t.height = 75;
		t.name = "3";
		t.width = 213;
		t.x = 668;
		t.y = 546.5;
		return t;
	};
	return TwoClassPage5_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/TwoClass/TwoClassPage6_Skin.exml'] = window.TwoClassPage6_Skin = (function (_super) {
	__extends(TwoClassPage6_Skin, _super);
	function TwoClassPage6_Skin() {
		_super.call(this);
		this.skinParts = ["toy_e_1","toy_e_2","toy_e_3","toy_e_4","toy_s_1","toy_s_3","toy_s_4","toy_s_2","paintBg"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TwoClassPage6_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this.paintBg_i()];
		return t;
	};
	_proto.paintBg_i = function () {
		var t = new eui.Group();
		this.paintBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 527.39;
		t.width = 786;
		t.x = 121;
		t.y = 126.79;
		t.elementsContent = [this.toy_e_1_i(),this.toy_e_2_i(),this.toy_e_3_i(),this.toy_e_4_i(),this.toy_s_1_i(),this.toy_s_3_i(),this.toy_s_4_i(),this.toy_s_2_i()];
		return t;
	};
	_proto.toy_e_1_i = function () {
		var t = new eui.Group();
		this.toy_e_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160.09;
		t.x = 56.91;
		t.y = 387.88;
		return t;
	};
	_proto.toy_e_2_i = function () {
		var t = new eui.Group();
		this.toy_e_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150.09;
		t.x = 228.03;
		t.y = 388.88;
		return t;
	};
	_proto.toy_e_3_i = function () {
		var t = new eui.Group();
		this.toy_e_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 152.09;
		t.x = 392.81;
		t.y = 390.88;
		return t;
	};
	_proto.toy_e_4_i = function () {
		var t = new eui.Group();
		this.toy_e_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 155.18;
		t.x = 567.06;
		t.y = 391.88;
		return t;
	};
	_proto.toy_s_1_i = function () {
		var t = new eui.Group();
		this.toy_s_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 189.82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 143.24;
		t.x = 70;
		t.y = 99.61;
		return t;
	};
	_proto.toy_s_3_i = function () {
		var t = new eui.Group();
		this.toy_s_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 193.82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 145.45;
		t.x = 400.34;
		t.y = 96.61;
		return t;
	};
	_proto.toy_s_4_i = function () {
		var t = new eui.Group();
		this.toy_s_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 189.82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 145.24;
		t.x = 569.67;
		t.y = 98.61;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t_6_jpg";
		t.width = 994;
		t.x = -674;
		t.y = -210;
		return t;
	};
	_proto.toy_s_2_i = function () {
		var t = new eui.Group();
		this.toy_s_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 195.82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 144.88;
		t.x = 235.12;
		t.y = 95.61;
		return t;
	};
	return TwoClassPage6_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/TwoClass/TwoClassPage7_Skin.exml'] = window.TwoClassPage7_Skin = (function (_super) {
	__extends(TwoClassPage7_Skin, _super);
	function TwoClassPage7_Skin() {
		_super.call(this);
		this.skinParts = ["select2","selectBtn2","select1","selectBtn1"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TwoClassPage7_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select2_i(),this.selectBtn2_i(),this.select1_i(),this.selectBtn1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t_7_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 211.34;
		t.x = 604.33;
		t.y = 580.99;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "2";
		t.width = 218;
		t.x = 599;
		t.y = 574.33;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 211.34;
		t.x = 201.33;
		t.y = 581.99;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "1";
		t.width = 218;
		t.x = 196;
		t.y = 575.33;
		return t;
	};
	return TwoClassPage7_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/TwoClass/TwoClassPage8_Skin.exml'] = window.TwoClassPage8_Skin = (function (_super) {
	__extends(TwoClassPage8_Skin, _super);
	function TwoClassPage8_Skin() {
		_super.call(this);
		this.skinParts = ["select1","selectBtn1","select2","selectBtn2","select3","selectBtn3","select4","selectBtn4"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TwoClassPage8_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.selectBtn1_i(),this.select2_i(),this.selectBtn2_i(),this.select3_i(),this.selectBtn3_i(),this.select4_i(),this.selectBtn4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t_8_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 162.34;
		t.x = 155.33;
		t.y = 523.99;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "1";
		t.width = 169;
		t.x = 150;
		t.y = 517.33;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 162.34;
		t.x = 332.33;
		t.y = 522.99;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "2";
		t.width = 169;
		t.x = 327;
		t.y = 516.33;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 162.34;
		t.x = 509.33;
		t.y = 520.99;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "3";
		t.width = 169;
		t.x = 504;
		t.y = 514.33;
		return t;
	};
	_proto.select4_i = function () {
		var t = new eui.Image();
		this.select4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 162.34;
		t.x = 697.33;
		t.y = 521.99;
		return t;
	};
	_proto.selectBtn4_i = function () {
		var t = new eui.Group();
		this.selectBtn4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "4";
		t.width = 169;
		t.x = 692;
		t.y = 515.33;
		return t;
	};
	return TwoClassPage8_Skin;
})(eui.Skin);generateEUI.paths['resource/game_skins/TwoClass/TwoClassPage9_Skin.exml'] = window.TwoClassPage9_Skin = (function (_super) {
	__extends(TwoClassPage9_Skin, _super);
	function TwoClassPage9_Skin() {
		_super.call(this);
		this.skinParts = ["select1","selectBtn1","select2","selectBtn2","select3","selectBtn3"];
		
		this.height = 704;
		this.width = 1024;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = TwoClassPage9_Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 704;
		t.width = 1024;
		t.elementsContent = [this._Image1_i(),this.select1_i(),this.selectBtn1_i(),this.select2_i(),this.selectBtn2_i(),this.select3_i(),this.selectBtn3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 674;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t_9_jpg";
		t.verticalCenter = 0;
		t.width = 994;
		return t;
	};
	_proto.select1_i = function () {
		var t = new eui.Image();
		this.select1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 162.34;
		t.x = 162.33;
		t.y = 548.99;
		return t;
	};
	_proto.selectBtn1_i = function () {
		var t = new eui.Group();
		this.selectBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "1";
		t.width = 169;
		t.x = 157;
		t.y = 542.33;
		return t;
	};
	_proto.select2_i = function () {
		var t = new eui.Image();
		this.select2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 162.34;
		t.x = 402.33;
		t.y = 549.99;
		return t;
	};
	_proto.selectBtn2_i = function () {
		var t = new eui.Group();
		this.selectBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "2";
		t.width = 169;
		t.x = 397;
		t.y = 543.33;
		return t;
	};
	_proto.select3_i = function () {
		var t = new eui.Image();
		this.select3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.34;
		t.source = "btn2_png";
		t.visible = false;
		t.width = 162.34;
		t.x = 643.33;
		t.y = 551.99;
		return t;
	};
	_proto.selectBtn3_i = function () {
		var t = new eui.Group();
		this.selectBtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "3";
		t.width = 169;
		t.x = 638;
		t.y = 545.33;
		return t;
	};
	return TwoClassPage9_Skin;
})(eui.Skin);