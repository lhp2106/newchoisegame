

//var signup = null;

var SignUp = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("SignUp");
            this.createLayout(this,"shadow",cc.p(640,370),null,cc.size(1920,1280),true);
            this.shadow.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            this.shadow.setBackGroundColor(cc.color.BLACK);
            this.shadow.setBackGroundColorOpacity(180);
            this.createLayout(this,"SignUp",cc.p(640,370),null,cc.size(1280,720),false);

            this.createImage(this.SignUp, "bg_sign_up", cc.p(640, 388), res_SignUp + "bg_signUp.png", cc.size(801, 534));
            this.createImage(this.SignUp, "txl_sign_up", cc.p(742, 579), res_SignUp + "tle_reg.png", cc.size(347, 43));
            this.createButton(this.SignUp,"bt_close",SignUp.CLOSE,cc.p(1000,579),true,res_SignUp + "b_close.png",res_SignUp + "b_close.png",ccui.Widget.PLIST_TEXTURE);

            this.createImage(this.SignUp, "sp_username_reg", cc.p(745,494), res_login_scene + "bg_edit.png", cc.size(301, 56));
            this.createEditBox(this.SignUp,"ed_username_reg",cc.p(745,494),"","Tên tài khoản",fontArial.fontName,22,cc.size(280,56),null,cc.TEXT_ALIGNMENT_CENTER,16);
            this.ed_username_reg.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_username_reg.setFontColor(cc.color.BLACK);

            this.createImage(this.SignUp, "sp_nickname_reg", cc.p(745,425), res_login_scene + "bg_edit.png", cc.size(301, 56));
            this.createEditBox(this.SignUp,"ed_nickname_reg",cc.p(745,425),"","Tên nhân vật",fontArial.fontName,22,cc.size(280,56),null,cc.TEXT_ALIGNMENT_CENTER,16);
            this.ed_nickname_reg.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_nickname_reg.setFontColor(cc.color.BLACK);

            this.createImage(this.SignUp, "sp_pass_reg", cc.p(745,358), res_login_scene + "bg_edit.png", cc.size(301, 56));
            this.createEditBox(this.SignUp,"ed_pass_reg",cc.p(745,358),"","Mật khẩu",fontArial.fontName,22,cc.size(280,56),null,cc.TEXT_ALIGNMENT_CENTER,16);
            this.ed_pass_reg.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_pass_reg.setFontColor(cc.color.BLACK);

            this.createImage(this.SignUp, "sp_captcha", cc.p(679,284), res_login_scene + "bg_edit_s.png", cc.size(167, 56));
            this.createEditBox(this.SignUp,"ed_captcha",cc.p(679,284),"","Nhập mã",fontArial.fontName,22,cc.size(147,56),null,cc.TEXT_ALIGNMENT_CENTER,5);
            this.ed_captcha.setPlaceholderFontColor(cc.color.GRAY);
            this.ed_captcha.setFontColor(cc.color.BLACK);

            if (!cc.sys.isNative) {
                this.ed_username_reg.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_nickname_reg.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_pass_reg.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);
                this.ed_captcha.setTextAlign(cc.TEXT_ALIGNMENT_LEFT);

                this.ed_username_reg.nextTabFocus = this.ed_nickname_reg;
                this.ed_nickname_reg.nextTabFocus = this.ed_pass_reg;
                this.ed_pass_reg.nextTabFocus = this.ed_captcha;
                this.ed_captcha.nextTabFocus = this.ed_username_reg;
            }

            this.createButton(this.SignUp,"bt_refresh",SignUp.BTN_REFRESH,cc.p(874,284),true,res_SignUp + "b_refresh.png",res_SignUp + "b_refresh.png",ccui.Widget.PLIST_TEXTURE);

            this.createImage(this.SignUp, "sp_ckb_reg", cc.p(770,237), res_SignUp + "tx_dksd.png", cc.size(331, 21));
            this.createCheckBox(this.SignUp, "ckb_reg", cc.p(562, 237), true, res_SignUp + "/ck.png", res_SignUp + "/ck.png", res_SignUp + "/cked.png", res_SignUp + "/ck.png", res_SignUp + "/cked.png");

            this.createButton(this.SignUp,"bt_create_acc",SignUp.BTN_CREATE,cc.p(735,171),true,res_SignUp + "b_create.png",res_SignUp + "b_create.png",ccui.Widget.PLIST_TEXTURE);
            this.bt_create_acc.setTitleText("TẠO TÀI KHOẢN");
            this.bt_create_acc.setTitleFontName(fontTahomaB.fontName);
            this.bt_create_acc.setTitleFontSize(25);
            //this.createText(this.bt_create_acc, "lb_create_acc", cc.p(this.bt_create_acc.width/2, this.bt_create_acc.height/2), "TẠO TÀI KHOẢN", fontTahomaB.fontName, 25);

            this.SignUp.runAction(cc.sequence(cc.scaleTo(0.05,1.1), cc.delayTime(0.1), cc.scaleTo(0.10,1)));
        },

        onEnter: function(){
            this._super();

        },

        onButtonRelease: function (button, id) {
            switch (id) {
                case SignUp.CLOSE:
                    this.destroyBase();
                    break;

            }
        },

        destroyBase : function (){
            this.removeAllChildren(true);
            loginscene.signUp = null;
        }
    }
)

SignUp.CLOSE = 1;
SignUp.BTN_REFRESH = 2;
SignUp.BTN_CREATE = 3;

