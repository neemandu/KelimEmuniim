(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/iCS":
/*!***********************************************************************************************!*\
  !*** ./src/app/main-screen/user-related/user-related-dialog/user-related-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: UserRelatedDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRelatedDialogComponent", function() { return UserRelatedDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_related_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-related-dialog.component.html */ "S4hl");
/* harmony import */ var _user_related_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-related-dialog.component.css */ "vlfj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "8Pk3");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "Ytyx");






var UserRelatedDialogComponent = /** @class */ (function () {
    function UserRelatedDialogComponent() {
    }
    UserRelatedDialogComponent.prototype.ngOnInit = function () {
    };
    UserRelatedDialogComponent.prototype.tabChanged = function (event) {
        this.loginChild.resetForms();
        this.registerChild.resetForms();
    };
    UserRelatedDialogComponent.ctorParameters = function () { return []; };
    UserRelatedDialogComponent.propDecorators = {
        loginChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], { static: false },] }],
        registerChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], { static: false },] }]
    };
    UserRelatedDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-related-dialog',
            template: _raw_loader_user_related_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_related_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UserRelatedDialogComponent);
    return UserRelatedDialogComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dneeman\source\repos\KelimEmuniim\src\main.ts */"zUnb");


/***/ }),

/***/ "16Yq":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/bottom-bar/bottom-bar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar fixed-bottom navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Fixed bottom</a>\r\n</nav>");

/***/ }),

/***/ "1C82":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/pack-content-page/random-card-reveal-dialog/random-card-reveal-dialog.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"d-flex\"> -->\r\n<div class=\"content\">\r\n  <button type=\"button\" class=\"btn btn-light\" [disabled]=\"index == data.length\" (click)=\"nextCard()\">\r\n    <mat-icon class=\"btn-icon\">chevron_right\r\n    </mat-icon>\r\n  </button>\r\n\r\n  <!-- <app-card class=\"card-pre-reveal\" [cardContent]=\"selectedCard\"> -->\r\n  <app-card [ngClass]=\"{'card-pre-reveal': true, 'card-reveal': cardLoaded}\"  [cardContent]=\"selectedCard\" [flipped]=\"true\" (loaded)=\"cardLoaded=true\">\r\n  </app-card>\r\n\r\n  <button type=\"button\" class=\"btn btn-light\" [disabled]=\"index == 0\" (click)=\"prevCard()\">\r\n    <mat-icon class=\"btn-icon\">chevron_left</mat-icon>\r\n  </button>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "1p0z":
/*!***************************************************!*\
  !*** ./src/app/main-screen/nav/nav.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\r\n  margin-left: 2px;\r\n}\r\n\r\n.btn-icon {\r\n  margin-right: 5px;\r\n}\r\n\r\n#nav-buttons {\r\n  margin: 5px 10px 5px 0px;\r\n}\r\n\r\n.sticky-top {\r\n  z-index: 1000;\r\n  margin-bottom: 5px;\r\n  margin-top: -1px;\r\n}\r\n\r\nimg {\r\n  height: 4rem;\r\n  margin: 5px;\r\n}\r\n\r\n#logo {\r\n  /* margin: 10px 10px; */\r\n  background-color: white;\r\n  text-align: center;\r\n  /* color: #fdcd00; */\r\n}\r\n\r\nh1 {\r\n  letter-spacing: 1px;\r\n  margin: 10px 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zY3JlZW4vbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2NyZWVuL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5idG4taWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiNuYXYtYnV0dG9ucyB7XHJcbiAgbWFyZ2luOiA1cHggMTBweCA1cHggMHB4O1xyXG59XHJcblxyXG4uc3RpY2t5LXRvcCB7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICAvKiBtYXJnaW46IDEwcHggMTBweDsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogY29sb3I6ICNmZGNkMDA7ICovXHJcbn1cclxuXHJcbmgxIHtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIG1hcmdpbjogMTBweCAxNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "1sQv":
/*!**********************************************************************************************!*\
  !*** ./src/app/main-screen/user-related/user-related-dialog/register/register.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  font-family: 'rubik';\r\n}\r\n\r\n.mat-form-field {\r\n  text-align: right;\r\n}\r\n\r\n.option-btn {\r\n  margin-left: 10px;\r\n  height: 39px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  font-weight: 500;\r\n  font-size: large;\r\n  transition: color .15s ease-in-out, background-color .15s ease-in-out;\r\n}\r\n\r\n#login-button {\r\n  background: #ffa800;\r\n  color: white;\r\n}\r\n\r\n#login-button:enabled:hover {\r\n  background: #e69900;\r\n  color: white;\r\n}\r\n\r\n#login-button:enabled:active {\r\n  background: #db9200;\r\n  color: white;\r\n}\r\n\r\n#login-button:disabled {\r\n  background: #e0e0e0;\r\n  color: rgb(102, 102, 102);\r\n}\r\n\r\na {\r\n  /* font-family: 'rubik'; */\r\n  font-size: 1rem;\r\n}\r\n\r\nmat-progress-bar {\r\n  margin: 10px 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zY3JlZW4vdXNlci1yZWxhdGVkL3VzZXItcmVsYXRlZC1kaWFsb2cvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFFQUFxRTtBQUN2RTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2NyZWVuL3VzZXItcmVsYXRlZC91c2VyLXJlbGF0ZWQtZGlhbG9nL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogJ3J1YmlrJztcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm9wdGlvbi1idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGhlaWdodDogMzlweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNsb2dpbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmE4MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbG9naW4tYnV0dG9uOmVuYWJsZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlNjk5MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbG9naW4tYnV0dG9uOmVuYWJsZWQ6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGI5MjAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2xvZ2luLWJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG59XHJcblxyXG5hIHtcclxuICAvKiBmb250LWZhbWlseTogJ3J1YmlrJzsgKi9cclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbm1hdC1wcm9ncmVzcy1iYXIge1xyXG4gIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "41Pl":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Shared Components/card/card.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column\">\r\n  <div>\r\n    <div [ngClass]=\"{'flip-box-inner': true, 'flip': flipped}\">\r\n      <div class=\"flip-box-front\">\r\n        <img src=\"/assets/Mentor Cards Back.png\" [ngClass]=\"{'img-unselected': !selected, 'img-selected': selected}\"\r\n          (contextmenu)=\"onRightClick();\">\r\n      </div>\r\n      <div class=\"flip-box-back\">\r\n        <img (load)=\"imgLoaded()\" [ngClass]=\"{'img-unselected': !selected, 'img-selected': selected}\"\r\n          src={{cardContent.imgUrl}} data-src={{cardContent.imgUrl}} (contextmenu)=\"onRightClick();\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <img (load)=\"imgLoaded()\" [ngClass]=\"{'img-unselected': !selected, 'img-selected': selected}\" src={{cardContent.imgUrl}}> -->\r\n  <span *ngIf=\"index\" class=\"badge badge-pill badge-light\">{{index}}</span>\r\n</div>\r\n");

/***/ }),

/***/ "4F3A":
/*!***********************************************************************************************!*\
  !*** ./src/app/Pages/pack-content-page/cards-reveal-dialog/cards-reveal-dialog.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  direction: rtl;\r\n}\r\n\r\napp-card {\r\n  max-width: 25vw;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.card-pre-reveal {\r\n  margin: 10px 10px;\r\n  max-height: 85vh;\r\n  /* visibility: hidden; */\r\n  opacity: 0;\r\n  transition: opacity 0.5s linear;\r\n}\r\n\r\n.card-reveal {\r\n  /* visibility: visible; */\r\n  opacity: 1;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n\r\n  app-card {\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvcGFjay1jb250ZW50LXBhZ2UvY2FyZHMtcmV2ZWFsLWRpYWxvZy9jYXJkcy1yZXZlYWwtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9wYWNrLWNvbnRlbnQtcGFnZS9jYXJkcy1yZXZlYWwtZGlhbG9nL2NhcmRzLXJldmVhbC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcblxyXG5hcHAtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAyNXZ3O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY2FyZC1wcmUtcmV2ZWFsIHtcclxuICBtYXJnaW46IDEwcHggMTBweDtcclxuICBtYXgtaGVpZ2h0OiA4NXZoO1xyXG4gIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5jYXJkLXJldmVhbCB7XHJcbiAgLyogdmlzaWJpbGl0eTogdmlzaWJsZTsgKi9cclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBhcHAtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "5Pwp":
/*!**********************************************************************************************!*\
  !*** ./src/app/Pages/pack-content-page/cards-reveal-dialog/cards-reveal-dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CardsRevealDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsRevealDialogComponent", function() { return CardsRevealDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cards_reveal_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cards-reveal-dialog.component.html */ "sLs8");
/* harmony import */ var _cards_reveal_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards-reveal-dialog.component.css */ "4F3A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





var CardsRevealDialogComponent = /** @class */ (function () {
    function CardsRevealDialogComponent(data) {
        this.data = data;
        this.loadedCards = 0;
    }
    CardsRevealDialogComponent.prototype.ngOnInit = function () {
        // console.log("CardsRevealDialogComponent -> constructor -> data", this.data)
    };
    CardsRevealDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
    ]; };
    CardsRevealDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-cards-reveal-dialog',
            template: _raw_loader_cards_reveal_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_cards_reveal_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], CardsRevealDialogComponent);
    return CardsRevealDialogComponent;
}());



/***/ }),

/***/ "5cIs":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-page/home-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"content\">\r\n  <div *ngIf=\"!mobile\" id=\"filters\" class=\"float-right d-flex flex-column\">\r\n    <!-- <h3 id=\"filter-by-text\">סינון לפי:</h3> -->\r\n    <!-- <mat-divider></mat-divider> -->\r\n    <h1 style=\"text-align: center;\">סינון וחיפוש</h1>\r\n    <h3 id=\"filter-by-options-title\">חיפוש</h3>\r\n    <mat-form-field>\r\n      <mat-label>הקלד מילת מפתח, נושא...</mat-label>\r\n      <input #filterText matInput type=\"text\" autocomplete=\"off\" [(ngModel)]=\"freeTextFilterSelected\"\r\n        (keyup)=\"filterPacks()\">\r\n      <button mat-button [ngStyle]=\"{'visibility': filterText.value ? 'visible' : 'hidden'}\" matSuffix mat-icon-button\r\n        aria-label=\"Clear\" (click)=\"freeTextFilterSelected = ''; filterPacks()\">\r\n        <mat-icon style=\"font-family: 'Material Icons';\">close</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n    <!-- <mat-divider></mat-divider> --><br>\r\n    <h3 id=\"filter-by-options-title\">קטגוריות</h3>\r\n    <mat-selection-list #categories (selectionChange)=\"filterPacks()\" [(ngModel)]=\"selectedCategories\">\r\n      <mat-list-option disableRipple style=\"direction: ltr;\" *ngFor=\"let category of allCategories\" [value]=\"category\">\r\n        {{category}}\r\n      </mat-list-option>\r\n    </mat-selection-list>\r\n    <!-- <mat-divider></mat-divider> --><br>\r\n    <h3 id=\"filter-by-options-title\">המועדפים שלי</h3>\r\n    <mat-selection-list #favorites (selectionChange)=\"filterPacks()\" [(ngModel)]=\"selectedFavorites\">\r\n      <mat-list-option disableRipple style=\"direction: ltr;\" *ngFor=\"let fav of getAllFavoritesDesc()\" [value]=\"fav\">\r\n        {{fav}}\r\n      </mat-list-option>\r\n    </mat-selection-list>\r\n    <!-- <mat-divider></mat-divider> -->\r\n    <!-- <h3 id=\"filter-by-options-title\">מותגים</h3>\r\n  <mat-selection-list #categories>\r\n    <mat-list-option disableRipple style=\"direction: ltr;\" *ngFor=\"let category of allCategories\">\r\n      {{category}}\r\n    </mat-list-option>\r\n  </mat-selection-list> -->\r\n  </div>\r\n  <!-- <div [ngClass]=\"{'item-hidden': true, 'item-reveal': loadedPacks == allPacks.length}\" class=\"d-flex flex-row flex-wrap\"> -->\r\n  <h1 style=\"text-align: center; margin-left: 14rem;\">הערכות שלנו</h1>\r\n  <div class=\"d-flex flex-row flex-wrap\">\r\n    <app-pack [ngClass]=\"{'item': true}\" *ngFor=\"let packInfo of allPacks\" [packInfo]=\"packInfo\"\r\n      (loaded)=\"packLoaded()\">\r\n    </app-pack>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "6GJD":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main-screen/user-related/user-related-dialog/forgot-password/forgot-password.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "Swou");
/* harmony import */ var _forgot_password_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.component.css */ "ywwK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.ctorParameters = function () { return []; };
    ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-forgot-password',
            template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_forgot_password_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "6u/D":
/*!****************************************************************************************!*\
  !*** ./src/app/main-screen/user-related/user-related-dialog/login/login.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  font-family: 'rubik';\r\n}\r\n\r\n.mat-form-field {\r\n  text-align: right;\r\n}\r\n\r\n.option-btn {\r\n  margin-left: 10px;\r\n  height: 39px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  font-weight: 500;\r\n  font-size: large;\r\n  transition: color .15s ease-in-out, background-color .15s ease-in-out;\r\n}\r\n\r\n#login-button {\r\n  background: #ffa800;\r\n  color: white;\r\n}\r\n\r\n#login-button:enabled:hover {\r\n  background: #e69900;\r\n  color: white;\r\n}\r\n\r\n#login-button:enabled:active {\r\n  background: #db9200;\r\n  color: white;\r\n}\r\n\r\n#login-button:disabled {\r\n  background: #e0e0e0;\r\n  color: rgb(102, 102, 102);\r\n}\r\n\r\na {\r\n  /* font-family: 'rubik'; */\r\n  font-size: 1rem;\r\n}\r\n\r\nmat-progress-bar {\r\n    margin: 10px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zY3JlZW4vdXNlci1yZWxhdGVkL3VzZXItcmVsYXRlZC1kaWFsb2cvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFFQUFxRTtBQUN2RTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2NyZWVuL3VzZXItcmVsYXRlZC91c2VyLXJlbGF0ZWQtZGlhbG9nL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogJ3J1YmlrJztcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm9wdGlvbi1idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGhlaWdodDogMzlweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNsb2dpbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmE4MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbG9naW4tYnV0dG9uOmVuYWJsZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlNjk5MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbG9naW4tYnV0dG9uOmVuYWJsZWQ6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGI5MjAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2xvZ2luLWJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG59XHJcblxyXG5hIHtcclxuICAvKiBmb250LWZhbWlseTogJ3J1YmlrJzsgKi9cclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbm1hdC1wcm9ncmVzcy1iYXIge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "8Pk3":
/*!***************************************************************************************!*\
  !*** ./src/app/main-screen/user-related/user-related-dialog/login/login.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "y7H1");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "6u/D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
        // emailRegex = '^[A-Za-z0-9._%+-]+@intel.com$';
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.forgotPasswordForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
        });
        this.hidePW = true;
        this.login = true;
        this.showLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    /**
     * Reset both forms and go back to login form (Parents order after tab change)
     */
    LoginComponent.prototype.resetForms = function () {
        this.loginForm.reset();
        this.forgotPasswordForm.reset();
        this.login = true;
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        this.showHideLoading();
    };
    LoginComponent.prototype.onForgotPasswordSubmit = function () {
        this.showHideLoading();
    };
    LoginComponent.prototype.showHideLoading = function () {
        this.showLoading = !this.showLoading;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "8cOZ":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Shared Components/pack/pack-back.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <h1>תיאור חפיסה</h1>\r\n  <p>קטגוריות: {{packInfo.categories}}</p>\r\n  <p>תגיות: {{packInfo.tags}}</p>\r\n");

/***/ }),

/***/ "8emt":
/*!********************************************************!*\
  !*** ./src/app/Pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-page.component.html */ "5cIs");
/* harmony import */ var _home_page_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.component.css */ "zZ8R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Objects_packs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Objects/packs */ "piHL");
/* harmony import */ var src_app_Services_cards_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/cards.service */ "qDHm");
/* harmony import */ var src_app_Services_overlay_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/overlay-spinner.service */ "dHjZ");








var HomePageComponent = /** @class */ (function () {
    // selectedTags: string[] = [];
    function HomePageComponent(cardsService, overlaySpinnerService) {
        this.cardsService = cardsService;
        this.overlaySpinnerService = overlaySpinnerService;
        this.Subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.allPacks = [];
        this.allCategories = [];
        this.allFavorites = [];
        //Filters
        this.freeTextFilterSelected = '';
        this.selectedCategories = [];
        this.selectedFavorites = [];
        this.overlaySpinnerService.changeOverlaySpinner(true);
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('resize', function () { _this.mobile = window.screen.width <= 600; });
        this.mobile = window.screen.width <= 600;
        this.loadedPacks = 0;
        this.Subscription.add(this.cardsService.favoriteChangeEmmiter.subscribe(function (favorites) {
            _this.allFavorites = favorites;
        }));
        if (!this.cardsService.allPacks) {
            var allPacksSub = this.cardsService.getAllCardPacks().subscribe(function (res) {
                allPacksSub.unsubscribe();
                _this.allPacks = res.body.map(function (body) {
                    body.categories.forEach(function (category) {
                        if (!_this.allCategories.includes(category))
                            _this.allCategories.push(category);
                    });
                    return new src_app_Objects_packs__WEBPACK_IMPORTED_MODULE_5__["PackInfo"]().deseralize(body);
                });
                // console.log("HomePageComponent -> ngOnInit -> this.allPacks", this.allPacks)
                _this.cardsService.allPacks = _this.allPacks.map(function (pack) { return pack; });
                _this.cardsService.allCategories = _this.allCategories.map(function (category) { return category; });
                _this.allFavorites = _this.cardsService.favorites;
            }, function (error) {
                var snackBarRef = _this.cardsService._snackBar.open('שגיאה במשיכת חפיסות הקלפים, נסו שנית', 'רענן', {
                    duration: 20000,
                });
                snackBarRef.onAction().subscribe(function () {
                    window.location.reload();
                });
            });
        }
        else {
            this.allPacks = this.cardsService.allPacks;
            this.allCategories = this.cardsService.allCategories;
            this.allFavorites = this.cardsService.favorites;
        }
    };
    HomePageComponent.prototype.packLoaded = function () {
        this.loadedPacks++;
        if (this.loadedPacks == this.allPacks.length) {
            this.overlaySpinnerService.changeOverlaySpinner(false);
        }
    };
    HomePageComponent.prototype.getAllFavoritesDesc = function () {
        var _this = this;
        return this.cardsService.allPacks ? (this.cardsService.allPacks.filter(function (pack) { return _this.allFavorites.includes(pack.id); })).map(function (pack) { return pack.description; }) : (this.allPacks.filter(function (pack) { return _this.allFavorites.includes(pack.id); })).map(function (pack) { return pack.description; });
    };
    HomePageComponent.prototype.filterPacks = function () {
        this.loadedPacks = 0;
        this.allPacks = this.cardsService.allPacks.map(function (pack) { return pack; });
        if (this.freeTextFilterSelected !== '') {
            this.freeTextFilter();
        }
        if (this.selectedCategories.length != 0) {
            this.categoryFilter();
        }
        if (this.selectedFavorites.length != 0) {
            this.favoritesFilter();
        }
        // console.log("HomePageComponent -> filterPacks -> this.allPacks", this.allPacks)
    };
    HomePageComponent.prototype.freeTextFilter = function () {
        var _this = this;
        this.allPacks = this.allPacks.filter(function (pack) {
            if (pack.description.includes(_this.freeTextFilterSelected))
                return true;
            pack.categories.forEach(function (category) {
                if (category.includes(_this.freeTextFilterSelected))
                    return true;
            });
            pack.tags.forEach(function (tag) {
                if (tag.includes(_this.freeTextFilterSelected))
                    return true;
            });
            return false;
        });
    };
    HomePageComponent.prototype.categoryFilter = function () {
        var _this = this;
        this.allPacks = this.allPacks.filter(function (pack) {
            var res = false;
            pack.categories.forEach(function (category) {
                if (_this.selectedCategories.includes(category)) {
                    res = true;
                }
            });
            return res;
        });
    };
    HomePageComponent.prototype.favoritesFilter = function () {
        var _this = this;
        this.allPacks = this.allPacks.filter(function (pack) {
            return _this.selectedFavorites.includes(pack.description);
        });
    };
    HomePageComponent.prototype.ngOnDestroy = function () {
        this.Subscription.unsubscribe();
    };
    HomePageComponent.ctorParameters = function () { return [
        { type: src_app_Services_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"] },
        { type: src_app_Services_overlay_spinner_service__WEBPACK_IMPORTED_MODULE_7__["OverlaySpinnerService"] }
    ]; };
    HomePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home-page',
            template: _raw_loader_home_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_home_page_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"], src_app_Services_overlay_spinner_service__WEBPACK_IMPORTED_MODULE_7__["OverlaySpinnerService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "96ug":
/*!**********************************************************!*\
  !*** ./src/app/Pages/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-page.component.html */ "D81x");
/* harmony import */ var _about_page_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page.component.css */ "U3E1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent.ctorParameters = function () { return []; };
    AboutPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-about-page',
            template: _raw_loader_about_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_about_page_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "9NvR":
/*!***********************************************************!*\
  !*** ./src/app/Shared Components/pack/pack.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  /* padding: 5px; */\r\n  /* width: 10vw; */\r\n  width: 10rem;\r\n  height: auto;\r\n  box-shadow: 0.25em 0.25em 0px 0px rgb(255 255 255), 0.25em 0.25em 0px 1px #ddd, 0.5em 0.5em 0px 0px rgb(255 255 255), 0.5em 0.5em 0px 1px #ddd;\r\n  transition: box-shadow 0.2s ease-out;\r\n}\r\n\r\nimg:hover {\r\n  box-shadow: 0.4em 0.4em 0px 0px rgb(255 255 255), 0.4em 0.4em 0px 1px #ddd, 0.8em 0.8em 0px 0px rgb(255 255 255), 0.8em 0.8em 0px 1px #ddd;\r\n}\r\n\r\n#pack-buttons {\r\n  margin-top: 5px;\r\n  /* margin-top: 14.2rem; */\r\n  position: relative;\r\n}\r\n\r\n#pack-icons {\r\n  margin-top: 8px;\r\n}\r\n\r\nmat-icon {\r\n  /* margin: 0px 5px 0px 5px; */\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n#pack-desc {\r\n  text-align: center;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n::ng-deep .tooltip-class {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n/* \r\n.flip-card {\r\n  width: 10rem;\r\n}\r\n\r\n.flip-card-inner {\r\n  position: relative;\r\n  transition: transform 0.8s;\r\n  transform-style: preserve-3d;\r\n}\r\n\r\n.flip-card:hover .flip-card-inner {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n.flip-card-front,\r\n.flip-card-back {\r\n  position: absolute;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n\r\n.flip-card-back {\r\n  transform: rotateY(180deg);\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkIENvbXBvbmVudHMvcGFjay9wYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWiw4SUFBOEk7RUFDOUksb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsMElBQTBJO0FBQzVJOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHIiwiZmlsZSI6InNyYy9hcHAvU2hhcmVkIENvbXBvbmVudHMvcGFjay9wYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC8qIHBhZGRpbmc6IDVweDsgKi9cclxuICAvKiB3aWR0aDogMTB2dzsgKi9cclxuICB3aWR0aDogMTByZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDAuMjVlbSAwLjI1ZW0gMHB4IDBweCByZ2IoMjU1IDI1NSAyNTUpLCAwLjI1ZW0gMC4yNWVtIDBweCAxcHggI2RkZCwgMC41ZW0gMC41ZW0gMHB4IDBweCByZ2IoMjU1IDI1NSAyNTUpLCAwLjVlbSAwLjVlbSAwcHggMXB4ICNkZGQ7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5pbWc6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAuNGVtIDAuNGVtIDBweCAwcHggcmdiKDI1NSAyNTUgMjU1KSwgMC40ZW0gMC40ZW0gMHB4IDFweCAjZGRkLCAwLjhlbSAwLjhlbSAwcHggMHB4IHJnYigyNTUgMjU1IDI1NSksIDAuOGVtIDAuOGVtIDBweCAxcHggI2RkZDtcclxufVxyXG5cclxuI3BhY2stYnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8qIG1hcmdpbi10b3A6IDE0LjJyZW07ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jcGFjay1pY29ucyB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgLyogbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7ICovXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3BhY2stZGVzYyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC50b29sdGlwLWNsYXNzIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLyogXHJcbi5mbGlwLWNhcmQge1xyXG4gIHdpZHRoOiAxMHJlbTtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtZnJvbnQsXHJcbi5mbGlwLWNhcmQtYmFjayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1iYWNrIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufSAqL1xyXG4iXX0= */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    direction: rtl;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG59Il19 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseurl: "https://seo4gndjt8.execute-api.eu-west-2.amazonaws.com/",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D81x":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/about-page/about-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>about-page works!</p>\r\n");

/***/ }),

/***/ "DuOs":
/*!*************************************************************!*\
  !*** ./src/app/Pages/pack-content-page/transition-group.ts ***!
  \*************************************************************/
/*! exports provided: TransitionGroupItemDirective, TransitionGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionGroupItemDirective", function() { return TransitionGroupItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionGroupComponent", function() { return TransitionGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var TransitionGroupItemDirective = /** @class */ (function () {
    function TransitionGroupItemDirective(elRef) {
        this.el = elRef.nativeElement;
    }
    TransitionGroupItemDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    TransitionGroupItemDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[transition-group-item]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TransitionGroupItemDirective);
    return TransitionGroupItemDirective;
}());

var TransitionGroupComponent = /** @class */ (function () {
    function TransitionGroupComponent() {
    }
    TransitionGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.refreshPosition('prevPos');
        this.items.changes.subscribe(function (items) {
            items.forEach(function (item) {
                item.prevPos = item.newPos || item.prevPos;
            });
            items.forEach(_this.runCallback);
            _this.refreshPosition('newPos');
            items.forEach(_this.applyTranslation);
            // force reflow to put everything in position
            var offSet = document.body.offsetHeight;
            _this.items.forEach(_this.runTransition.bind(_this));
        });
    };
    TransitionGroupComponent.prototype.runCallback = function (item) {
        if (item.moveCallback) {
            item.moveCallback();
        }
    };
    TransitionGroupComponent.prototype.runTransition = function (item) {
        if (!item.moved) {
            return;
        }
        var cssClass = this.class + '-move';
        var el = item.el;
        var style = el.style;
        el.classList.add(cssClass);
        style.transform = style.WebkitTransform = style.transitionDuration = '';
        el.addEventListener('transitionend', item.moveCallback = function (e) {
            if (!e || /transform$/.test(e.propertyName)) {
                el.removeEventListener('transitionend', item.moveCallback);
                item.moveCallback = null;
                el.classList.remove(cssClass);
            }
        });
    };
    TransitionGroupComponent.prototype.refreshPosition = function (prop) {
        this.items.forEach(function (item) {
            item[prop] = item.el.getBoundingClientRect();
        });
    };
    TransitionGroupComponent.prototype.applyTranslation = function (item) {
        item.moved = false;
        var dx = item.prevPos.left - item.newPos.left;
        var dy = item.prevPos.top - item.newPos.top;
        if (dx || dy) {
            item.moved = true;
            var style = item.el.style;
            style.transform = style.WebkitTransform = 'translate(' + dx + 'px,' + dy + 'px)';
            style.transitionDuration = '0s';
        }
    };
    TransitionGroupComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['transition-group',] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [TransitionGroupItemDirective,] }]
    };
    TransitionGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[transition-group]',
            template: '<ng-content></ng-content>'
        })
    ], TransitionGroupComponent);
    return TransitionGroupComponent;
}());



/***/ }),

/***/ "H5t6":
/*!*******************************************************************!*\
  !*** ./src/app/Shared Components/Pipes/tooltip-list-view.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: TooltipListViewPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipListViewPipe", function() { return TooltipListViewPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var TooltipListViewPipe = /** @class */ (function () {
    function TooltipListViewPipe() {
    }
    TooltipListViewPipe.prototype.transform = function (value) {
        return value.join(', ');
    };
    TooltipListViewPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'tooltipListView'
        })
    ], TooltipListViewPipe);
    return TooltipListViewPipe;
}());



/***/ }),

/***/ "HVu8":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/user-related/user-related-dialog/register/register.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterSubmit()\">\r\n  <div class=\"d-flex flex-column\">\r\n    <mat-form-field>\r\n      <mat-label>שם פרטי</mat-label>\r\n      <input autocomplete=\"off\" formControlName=\"name\" matInput>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>שם משפחה</mat-label>\r\n      <input autocomplete=\"off\" formControlName=\"lastName\" matInput>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>אימייל</mat-label>\r\n      <input autocomplete=\"off\" formControlName=\"username\" matInput>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>סיסמא</mat-label>\r\n      <input autocomplete=\"off\" (keyup)=\"test()\" formControlName=\"password\" matInput\r\n        [type]=\"hidePW ? 'password' : 'text'\">\r\n      <button mat-icon-button matSuffix (click)=\"hidePW = !hidePW\" [attr.aria-label]=\"'Hide password'\"\r\n        [attr.aria-pressed]=\"hidePW\">\r\n        <mat-icon style=\"font-family: 'Material Icons';\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n    <button type=\"submit\" class=\"option-btn\" id=\"login-button\" [disabled]=\"!registerForm.valid\">הרשם</button>\r\n  </div>\r\n</form>\r\n<mat-progress-bar [ngStyle]=\"{'visibility': showLoading ? 'visible' : 'hidden'}\" mode=\"query\"></mat-progress-bar>\r\n");

/***/ }),

/***/ "HdoV":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/shopping-cart-page/shopping-cart-page.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>shopping-cart-page works!</p>\r\n");

/***/ }),

/***/ "INcU":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/main-screen.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <app-nav></app-nav>\r\n\r\n  <div class=\"overlay\" *ngIf=\"showSpinner\">\r\n    <div class=\"spinner-wrapper\">\r\n      <app-overlay-spinner></app-overlay-spinner>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n  <!-- <app-bottom-bar></app-bottom-bar> -->\r\n");

/***/ }),

/***/ "JI10":
/*!*****************************************************************!*\
  !*** ./src/app/main-screen/bottom-bar/bottom-bar.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2NyZWVuL2JvdHRvbS1iYXIvYm90dG9tLWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Jrl7":
/*!***************************************************************************!*\
  !*** ./src/app/main-screen/overlay-spinner/overlay-spinner.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spinner {\r\n    margin-right: 10px;\r\n}\r\n.color-1 {\r\n  color: #40BF62;\r\n}\r\n.color-2 {\r\n  color: #3EBBA7;\r\n}\r\n.color-3 {\r\n  color: #3B8FB0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zY3JlZW4vb3ZlcmxheS1zcGlubmVyL292ZXJsYXktc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1zY3JlZW4vb3ZlcmxheS1zcGlubmVyL292ZXJsYXktc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5jb2xvci0xIHtcclxuICBjb2xvcjogIzQwQkY2MjtcclxufVxyXG5cclxuLmNvbG9yLTIge1xyXG4gIGNvbG9yOiAjM0VCQkE3O1xyXG59XHJcblxyXG4uY29sb3ItMyB7XHJcbiAgY29sb3I6ICMzQjhGQjA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "LSYR":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/shopping-cart-page/shopping-cart-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShoppingCartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartPageComponent", function() { return ShoppingCartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shopping_cart_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shopping-cart-page.component.html */ "HdoV");
/* harmony import */ var _shopping_cart_page_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-cart-page.component.css */ "LpIl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ShoppingCartPageComponent = /** @class */ (function () {
    function ShoppingCartPageComponent() {
    }
    ShoppingCartPageComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartPageComponent.ctorParameters = function () { return []; };
    ShoppingCartPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-shopping-cart-page',
            template: _raw_loader_shopping_cart_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_shopping_cart_page_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ShoppingCartPageComponent);
    return ShoppingCartPageComponent;
}());



/***/ }),

/***/ "LpIl":
/*!***************************************************************************!*\
  !*** ./src/app/Pages/shopping-cart-page/shopping-cart-page.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3Nob3BwaW5nLWNhcnQtcGFnZS9zaG9wcGluZy1jYXJ0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "O2Wm":
/*!*******************************************************!*\
  !*** ./src/app/main-screen/main-screen.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* app-nav {\r\n    top: 0;\r\n    position: fixed;\r\n    width: 100%;\r\n}\r\n\r\napp-bottom-bar {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n} */\r\n\r\n.overlay {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 0px;\r\n  z-index: 1000;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.spinner-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 25rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zY3JlZW4vbWFpbi1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztHQVVHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYWluLXNjcmVlbi9tYWluLXNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYXBwLW5hdiB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYXBwLWJvdHRvbS1iYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0gKi9cclxuXHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNwaW5uZXItd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyNXJlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "RWqR":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/nav/nav.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"logo\">\r\n  <img src=\"/assets/Logo.png\">\r\n</div>\r\n\r\n<nav class=\"nav navbar-light align-items-center justify-content-center sticky-top\" style=\"background-color: white;\">\r\n  <div id=\"nav-buttons\">\r\n    <!-- <button type=\"button\" class=\"btn btn-light\">\r\n      <mat-icon matBadge=\"15\" clsas=\"btn-icon\" routerLink=\"/shopping-cart-page\">shopping_cart</mat-icon>\r\n    </button> -->\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=loginRegister()>התחברות\\הרשמה</button>\r\n    <button type=\"button\" class=\"btn btn-light\" routerLink=\"/home-page\">מסך הבית</button>\r\n    <!-- <button type=\"button\" class=\"btn btn-light\" routerLink=\"/about-page\">עלינו</button> -->\r\n    <button type=\"button\" class=\"btn btn-light\">עלינו</button>\r\n  </div>\r\n  <!-- <div id=\"logo\">\r\n    <h1><b>Mentor</b>Cards</h1>\r\n  </div> -->\r\n</nav>\r\n");

/***/ }),

/***/ "RXvd":
/*!***********************************************************************************************************!*\
  !*** ./src/app/Pages/pack-content-page/random-card-reveal-dialog/random-card-reveal-dialog.component.css ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  direction: rtl;\r\n}\r\n\r\napp-card {\r\n  max-width: 25vw;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n}\r\n\r\n.card-pre-reveal {\r\n  margin: 10px 10px;\r\n  max-height: 85vh;\r\n  opacity: 0;\r\n  transition: opacity 0.3s linear;\r\n}\r\n\r\n.card-reveal {\r\n  opacity: 1;\r\n  /* transition: opacity 0.7s linear; */\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .content {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    justify-content: center;\r\n  }\r\n\r\n  app-card {\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvcGFjay1jb250ZW50LXBhZ2UvcmFuZG9tLWNhcmQtcmV2ZWFsLWRpYWxvZy9yYW5kb20tY2FyZC1yZXZlYWwtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvcGFjay1jb250ZW50LXBhZ2UvcmFuZG9tLWNhcmQtcmV2ZWFsLWRpYWxvZy9yYW5kb20tY2FyZC1yZXZlYWwtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBkaXJlY3Rpb246IHJ0bDtcclxufVxyXG5cclxuYXBwLWNhcmQge1xyXG4gIG1heC13aWR0aDogMjV2dztcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkLXByZS1yZXZlYWwge1xyXG4gIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDg1dmg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyO1xyXG59XHJcblxyXG4uY2FyZC1yZXZlYWwge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLyogdHJhbnNpdGlvbjogb3BhY2l0eSAwLjdzIGxpbmVhcjsgKi9cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBhcHAtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "RyhK":
/*!*********************************!*\
  !*** ./src/app/Objects/card.ts ***!
  \*********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    // constructor($imgUrl: string) {
    // 	this.imgUrl = $imgUrl;
    // }
    function Card() {
    }
    Card.prototype.deseralize = function (input) {
        Object.assign(this, input);
        return this;
    };
    return Card;
}());



/***/ }),

/***/ "S4hl":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/user-related/user-related-dialog/user-related-dialog.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"overlay\" *ngIf=\"showSpinner\">\r\n  <div class=\"spinner-wrapper\">\r\n    <app-overlay-spinner></app-overlay-spinner>\r\n  </div>\r\n</div> -->\r\n\r\n<mat-tab-group (selectedTabChange)=\"tabChanged($event)\" mat-align-tabs=\"center\" dynamicHeight>\r\n  <mat-tab label=\"התחברות\">\r\n    <!-- <ng-template matTabContent> -->\r\n    <app-login></app-login>\r\n    <!-- </ng-template> -->\r\n  </mat-tab>\r\n  <mat-tab label=\"הרשמה\">\r\n    <ng-template matTabContent>\r\n      <app-register></app-register>\r\n    </ng-template>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n");

/***/ }),

/***/ "Swou":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/user-related/user-related-dialog/forgot-password/forgot-password.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>forgot-password works!</p>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'KelimEmuniim';
    }
    AppComponent.ctorParameters = function () { return []; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "U3E1":
/*!***********************************************************!*\
  !*** ./src/app/Pages/about-page/about-page.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Bootstrap -->\r\n<!-- CSS -->\r\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css\"\r\n  integrity=\"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2\" crossorigin=\"anonymous\">\r\n<!-- jQuery and Bootstrap Bundle (includes Popper) -->\r\n<script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"\r\n  integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js\"\r\n  integrity=\"sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx\" crossorigin=\"anonymous\"></script>\r\n\r\n<!-- Flip Card Css\r\n    https://www.w3schools.com/howto/howto_css_flip_card.asp -->\r\n<!-- Deck CSS\r\n  https://codepen.io/pouretrebelle/pen/eYmeVjR -->\r\n\r\n<app-main-screen></app-main-screen>\r\n\r\n");

/***/ }),

/***/ "WW1U":
/*!**************************************************************************!*\
  !*** ./src/app/main-screen/overlay-spinner/overlay-spinner.component.ts ***!
  \**************************************************************************/
/*! exports provided: OverlaySpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlaySpinnerComponent", function() { return OverlaySpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_overlay_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./overlay-spinner.component.html */ "fA7J");
/* harmony import */ var _overlay_spinner_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay-spinner.component.css */ "Jrl7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var OverlaySpinnerComponent = /** @class */ (function () {
    function OverlaySpinnerComponent() {
    }
    OverlaySpinnerComponent.prototype.ngOnInit = function () {
    };
    OverlaySpinnerComponent.ctorParameters = function () { return []; };
    OverlaySpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-overlay-spinner',
            template: _raw_loader_overlay_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_overlay_spinner_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], OverlaySpinnerComponent);
    return OverlaySpinnerComponent;
}());



/***/ }),

/***/ "XM1/":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/pack-content-page/pack-content-page.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  font-family: 'rubik';\r\n}\r\n\r\n.nav {\r\n  background-color: #ffffffd4;\r\n  /* opacity: 1; */\r\n}\r\n\r\napp-card {\r\n  margin: 10px 10px;\r\n  width: 10rem;\r\n  /* height: min-content; */\r\n}\r\n\r\n.nav-buttons {\r\n  margin: 5px 10px 5px 0px;\r\n}\r\n\r\n.bottom-nav {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  bottom: 0;\r\n  width: 100%;\r\n  margin-top: 15px;\r\n  transform: translateY(0px);\r\n  transition: transform 0.3s linear, opacity 0.3s linear;\r\n}\r\n\r\n.bottom-nav-hidden {\r\n  transform: translateY(3rem);\r\n  opacity: 0;\r\n  /* transition: transform 0.3s linear; */\r\n}\r\n\r\n.option-btn {\r\n  margin-left: 10px;\r\n  height: 39px;\r\n  border-radius: 5px;\r\n  /* background: white; */\r\n  border: none;\r\n  /* color: #ffa800; */\r\n  font-weight: 500;\r\n  font-size: large;\r\n  transition: color .15s ease-in-out, background-color .15s ease-in-out;\r\n}\r\n\r\n.top-option-btn {\r\n  background: white;\r\n  color: #ffa800;\r\n}\r\n\r\n.top-option-btn:hover {\r\n  background: #fff5e2\r\n}\r\n\r\n.top-option-btn:active {\r\n  background: #ffebc4;\r\n}\r\n\r\n.bottom-option-btn {\r\n  opacity: 1;\r\n  background: #ffa800;\r\n  color: white;\r\n}\r\n\r\n/* .bottom-option-btn:disabled {\r\n  background: #d8d8d8;\r\n  color: rgb(160 160 160);\r\n} */\r\n\r\n.bottom-option-btn:enabled:hover {\r\n  background: #e69900;\r\n  color: white;\r\n}\r\n\r\n.bottom-option-btn:enabled:active {\r\n  background: #db9200;\r\n  color: white;\r\n}\r\n\r\np {\r\n  margin: 10px;\r\n  font-size: 1rem;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  p {\r\n    margin: 10px;\r\n    font-size: inherit;\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvcGFjay1jb250ZW50LXBhZ2UvcGFjay1jb250ZW50LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxRUFBcUU7QUFDdkU7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9wYWNrLWNvbnRlbnQtcGFnZS9wYWNrLWNvbnRlbnQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdydWJpayc7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZkNDtcclxuICAvKiBvcGFjaXR5OiAxOyAqL1xyXG59XHJcblxyXG5hcHAtY2FyZCB7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIC8qIGhlaWdodDogbWluLWNvbnRlbnQ7ICovXHJcbn1cclxuXHJcbi5uYXYtYnV0dG9ucyB7XHJcbiAgbWFyZ2luOiA1cHggMTBweCA1cHggMHB4O1xyXG59XHJcblxyXG4uYm90dG9tLW5hdiB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBsaW5lYXIsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5ib3R0b20tbmF2LWhpZGRlbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgbGluZWFyOyAqL1xyXG59XHJcblxyXG4ub3B0aW9uLWJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvKiBiYWNrZ3JvdW5kOiB3aGl0ZTsgKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLyogY29sb3I6ICNmZmE4MDA7ICovXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnRvcC1vcHRpb24tYnRuIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogI2ZmYTgwMDtcclxufVxyXG5cclxuLnRvcC1vcHRpb24tYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmNWUyXHJcbn1cclxuXHJcbi50b3Atb3B0aW9uLWJ0bjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmViYzQ7XHJcbn1cclxuXHJcbi5ib3R0b20tb3B0aW9uLWJ0biB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBiYWNrZ3JvdW5kOiAjZmZhODAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogLmJvdHRvbS1vcHRpb24tYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZDhkOGQ4O1xyXG4gIGNvbG9yOiByZ2IoMTYwIDE2MCAxNjApO1xyXG59ICovXHJcblxyXG4uYm90dG9tLW9wdGlvbi1idG46ZW5hYmxlZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2U2OTkwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ib3R0b20tb3B0aW9uLWJ0bjplbmFibGVkOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2RiOTIwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "YMsp":
/*!******************************************************!*\
  !*** ./src/app/main-screen/main-screen.component.ts ***!
  \******************************************************/
/*! exports provided: MainScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainScreenComponent", function() { return MainScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_screen_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main-screen.component.html */ "INcU");
/* harmony import */ var _main_screen_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-screen.component.css */ "O2Wm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _Services_overlay_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/overlay-spinner.service */ "dHjZ");






var MainScreenComponent = /** @class */ (function () {
    function MainScreenComponent(overlaySpinnerService) {
        this.overlaySpinnerService = overlaySpinnerService;
        // @HostListener('window:keyup', ['$event'])
        // keyEvent(event: KeyboardEvent) {
        //   console.log("keyEvent -> event", event)
        //   if (event.key === 'PrintScreen') {
        //     event.preventDefault()
        //     return false;
        //   }
        // }
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.showSpinner = true;
    }
    MainScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.add(this.overlaySpinnerService.changeOverlaySpinnerEmmiter.subscribe(function (show) { return _this.showSpinner = show; }));
    };
    MainScreenComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    MainScreenComponent.ctorParameters = function () { return [
        { type: _Services_overlay_spinner_service__WEBPACK_IMPORTED_MODULE_5__["OverlaySpinnerService"] }
    ]; };
    MainScreenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-main-screen',
            template: _raw_loader_main_screen_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_main_screen_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_overlay_spinner_service__WEBPACK_IMPORTED_MODULE_5__["OverlaySpinnerService"]])
    ], MainScreenComponent);
    return MainScreenComponent;
}());



/***/ }),

/***/ "Ytyx":
/*!*********************************************************************************************!*\
  !*** ./src/app/main-screen/user-related/user-related-dialog/register/register.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "HVu8");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "1sQv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.hidePW = true;
        this.showLoading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    /**
     * Reset form (Parents order after tab change)
     */
    RegisterComponent.prototype.resetForms = function () {
        this.registerForm.reset();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        this.showHideLoading();
    };
    RegisterComponent.prototype.showHideLoading = function () {
        this.showLoading = !this.showLoading;
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-register',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Shared_Components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Shared Components/card/card.component */ "mt5E");
/* harmony import */ var _Shared_Components_pack_pack_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shared Components/pack/pack.component */ "vG/6");
/* harmony import */ var _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-screen/main-screen.component */ "YMsp");
/* harmony import */ var _main_screen_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-screen/nav/nav.component */ "zwpB");
/* harmony import */ var _main_screen_bottom_bar_bottom_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-screen/bottom-bar/bottom-bar.component */ "imCV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _Shared_Components_Pipes_tooltip_list_view_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Shared Components/Pipes/tooltip-list-view.pipe */ "H5t6");
/* harmony import */ var _Pages_pack_content_page_cards_reveal_dialog_cards_reveal_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Pages/pack-content-page/cards-reveal-dialog/cards-reveal-dialog.component */ "5Pwp");
/* harmony import */ var _Pages_pack_content_page_random_card_reveal_dialog_random_card_reveal_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Pages/pack-content-page/random-card-reveal-dialog/random-card-reveal-dialog.component */ "pLnJ");
/* harmony import */ var _Pages_pack_content_page_transition_group__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Pages/pack-content-page/transition-group */ "DuOs");
/* harmony import */ var _main_screen_overlay_spinner_overlay_spinner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main-screen/overlay-spinner/overlay-spinner.component */ "WW1U");
/* harmony import */ var _main_screen_user_related_user_related_dialog_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main-screen/user-related/user-related-dialog/forgot-password/forgot-password.component */ "6GJD");
/* harmony import */ var _main_screen_user_related_user_related_dialog_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main-screen/user-related/user-related-dialog/login/login.component */ "8Pk3");
/* harmony import */ var _main_screen_user_related_user_related_dialog_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main-screen/user-related/user-related-dialog/register/register.component */ "Ytyx");
/* harmony import */ var _main_screen_user_related_user_related_dialog_user_related_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main-screen/user-related/user-related-dialog/user-related-dialog.component */ "/iCS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _Pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Pages/home-page/home-page.component */ "8emt");
/* harmony import */ var _Pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Pages/about-page/about-page.component */ "96ug");
/* harmony import */ var _Pages_shopping_cart_page_shopping_cart_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Pages/shopping-cart-page/shopping-cart-page.component */ "LSYR");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _Pages_pack_content_page_pack_content_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Pages/pack-content-page/pack-content-page.component */ "j3Qr");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");




// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports'; 
// Amplify.configure(awsconfig);


















//Material

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _Shared_Components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _Shared_Components_pack_pack_component__WEBPACK_IMPORTED_MODULE_7__["PackComponent"],
                _Shared_Components_pack_pack_component__WEBPACK_IMPORTED_MODULE_7__["PackBackComponent"],
                _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_8__["MainScreenComponent"],
                _main_screen_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _main_screen_bottom_bar_bottom_bar_component__WEBPACK_IMPORTED_MODULE_10__["BottomBarComponent"],
                _Pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_25__["HomePageComponent"],
                _Pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_26__["AboutPageComponent"],
                _Pages_shopping_cart_page_shopping_cart_page_component__WEBPACK_IMPORTED_MODULE_27__["ShoppingCartPageComponent"],
                _Pages_pack_content_page_pack_content_page_component__WEBPACK_IMPORTED_MODULE_29__["PackContentPageComponent"],
                _Shared_Components_Pipes_tooltip_list_view_pipe__WEBPACK_IMPORTED_MODULE_13__["TooltipListViewPipe"],
                _Pages_pack_content_page_cards_reveal_dialog_cards_reveal_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CardsRevealDialogComponent"],
                _main_screen_overlay_spinner_overlay_spinner_component__WEBPACK_IMPORTED_MODULE_17__["OverlaySpinnerComponent"],
                _Pages_pack_content_page_random_card_reveal_dialog_random_card_reveal_dialog_component__WEBPACK_IMPORTED_MODULE_15__["RandomCardRevealDialogComponent"],
                _Pages_pack_content_page_transition_group__WEBPACK_IMPORTED_MODULE_16__["TransitionGroupComponent"],
                _Pages_pack_content_page_transition_group__WEBPACK_IMPORTED_MODULE_16__["TransitionGroupItemDirective"],
                _main_screen_user_related_user_related_dialog_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _main_screen_user_related_user_related_dialog_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _main_screen_user_related_user_related_dialog_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"],
                _main_screen_user_related_user_related_dialog_user_related_dialog_component__WEBPACK_IMPORTED_MODULE_21__["UserRelatedDialogComponent"]
            ],
            imports: [
                // MDBBootstrapModule.forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                //Material
                _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__["MatDividerModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_35__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatFormFieldModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__["MatTabsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_Pages_pack_content_page_cards_reveal_dialog_cards_reveal_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CardsRevealDialogComponent"], _Pages_pack_content_page_random_card_reveal_dialog_random_card_reveal_dialog_component__WEBPACK_IMPORTED_MODULE_15__["RandomCardRevealDialogComponent"], _main_screen_user_related_user_related_dialog_user_related_dialog_component__WEBPACK_IMPORTED_MODULE_21__["UserRelatedDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "cXJi":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Shared Components/pack/pack.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column\">\r\n  <h3 id=\"pack-desc\">{{packInfo.description}}</h3>\r\n  <img routerLink=\"/pack-view/{{packInfo.id}}\" (load)=\"imgLoaded()\" src={{packInfo.imgUrl}}\r\n    matTooltip=\"קטגוריות: {{packInfo.categories | tooltipListView}} | תגיות: {{packInfo.tags | tooltipListView}}\"\r\n    matTooltipShowDelay=\"1000\" [matTooltipClass]=\"{'tooltip-class' : true}\" class='clickable'd>\r\n\r\n\r\n  <div id=\"pack-buttons\" class=\"d-flex justify-content-between\">\r\n    <div id=\"pack-icons\">\r\n      <mat-icon *ngIf=\"this.fav\" matRipple [matRippleRadius]=\"10\" [matRippleUnbounded]=\"true\"\r\n        [matRippleColor]=\"fav ? '#b3b3b357' : '#ff757569'\" (click)=\"addRemoveFavorite()\"\r\n        [ngStyle]=\"{'color': '#ff5454'}\">favorite</mat-icon>\r\n      <mat-icon *ngIf=\"!this.fav\" matRipple [matRippleRadius]=\"10\" [matRippleUnbounded]=\"true\"\r\n        [matRippleColor]=\"fav ? '#b3b3b357' : '#ff757569'\" (click)=\"addRemoveFavorite()\"\r\n        [ngStyle]=\"{'color': '#a0a0a0'}\">favorite_border</mat-icon>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dHjZ":
/*!*****************************************************!*\
  !*** ./src/app/Services/overlay-spinner.service.ts ***!
  \*****************************************************/
/*! exports provided: OverlaySpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlaySpinnerService", function() { return OverlaySpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var OverlaySpinnerService = /** @class */ (function () {
    function OverlaySpinnerService() {
        this.show = true;
        this.changeOverlaySpinnerEmmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    OverlaySpinnerService.prototype.changeOverlaySpinner = function (show) {
        if (this.show != show) {
            this.changeOverlaySpinnerEmmiter.emit(show);
            this.show = show;
        }
    };
    OverlaySpinnerService.ctorParameters = function () { return []; };
    OverlaySpinnerService.propDecorators = {
        changeOverlaySpinnerEmmiter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    OverlaySpinnerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], OverlaySpinnerService);
    return OverlaySpinnerService;
}());



/***/ }),

/***/ "eanZ":
/*!****************************************************************!*\
  !*** ./src/app/Shared Components/pack/pack-back.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  /* width: 10vw; */\r\n  width: 10rem;\r\n  height: auto;\r\n  /* margin: 10px 10px; */\r\n}\r\n\r\n#pack-buttons {\r\n  margin-top: 5px;\r\n  position: relative;\r\n}\r\n\r\n#pack-icons {\r\n  margin-top: 8px;\r\n}\r\n\r\nmat-icon {\r\n  margin: 0px 5px 0px 5px;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n#pack-desc {\r\n  text-align: center;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.flip-card {\r\n  width: 10rem;\r\n}\r\n\r\n/* This container is needed to position the front and back side */\r\n\r\n.flip-card-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  transition: transform 0.8s;\r\n  transform-style: preserve-3d;\r\n}\r\n\r\n/* Do an horizontal flip when you move the mouse over the flip box container */\r\n\r\n.flip-card:hover .flip-card-inner {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n/* Position the front and back side */\r\n\r\n.flip-card-front, .flip-card-back {\r\n  position: absolute;\r\n  width: 100%;\r\n  -webkit-backface-visibility: hidden; /* Safari */\r\n  backface-visibility: hidden;\r\n}\r\n\r\n/* Style the back side */\r\n\r\n.flip-card-back {\r\n  background-color: dodgerblue;\r\n  color: white;\r\n  transform: rotateY(180deg);\r\n  height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkIENvbXBvbmVudHMvcGFjay9wYWNrLWJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxpRUFBaUU7O0FBQ2pFO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUEsOEVBQThFOztBQUM5RTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQ0FBbUMsRUFBRSxXQUFXO0VBQ2hELDJCQUEyQjtBQUM3Qjs7QUFFQSx3QkFBd0I7O0FBQ3hCO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvU2hhcmVkIENvbXBvbmVudHMvcGFjay9wYWNrLWJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIC8qIHdpZHRoOiAxMHZ3OyAqL1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLyogbWFyZ2luOiAxMHB4IDEwcHg7ICovXHJcbn1cclxuXHJcbiNwYWNrLWJ1dHRvbnMge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNwYWNrLWljb25zIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBtYXJnaW46IDBweCA1cHggMHB4IDVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jcGFjay1kZXNjIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuLmZsaXAtY2FyZCB7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG59XHJcblxyXG4vKiBUaGlzIGNvbnRhaW5lciBpcyBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cclxuLmZsaXAtY2FyZC1pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xyXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xyXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLyogU2FmYXJpICovXHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgYmFjayBzaWRlICovXHJcbi5mbGlwLWNhcmQtYmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "fA7J":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/overlay-spinner/overlay-spinner.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner spinner-grow color-1\" role=\"status\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"spinner spinner-grow color-2\" role=\"status\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"spinner spinner-grow color-3\" role=\"status\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n");

/***/ }),

/***/ "i85I":
/*!***********************************************************!*\
  !*** ./src/app/Shared Components/card/card.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  width: 100%;\r\n}\r\n\r\n.img-unselected {\r\n  border: 2px solid #ddd;\r\n  border-radius: 4px;\r\n  transition: border 0.1s linear ;\r\n}\r\n\r\n.img-selected {\r\n  border: 4px solid #ffcf00;\r\n  border-radius: 4px;\r\n  transition: border 0.1s linear ;\r\n}\r\n\r\n.badge-light {\r\n  font-size: 0.8rem;\r\n  background-color: #efefef;\r\n}\r\n\r\n.flip-box-inner {\r\n  transition: transform 0.8s;\r\n  transform-style: preserve-3d;\r\n}\r\n\r\n.flip {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n.flip-box-front {\r\n  position: absolute;\r\n  -webkit-backface-visibility: hidden;\r\n  /* Safari */\r\n  backface-visibility: hidden;\r\n}\r\n\r\n.flip-box-back {\r\n  transform: rotateY(180deg);\r\n  -webkit-backface-visibility: hidden;\r\n  /* Safari */\r\n  backface-visibility: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkIENvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9TaGFyZWQgQ29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWctdW5zZWxlY3RlZCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMXMgbGluZWFyIDtcclxufVxyXG5cclxuLmltZy1zZWxlY3RlZCB7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmY2YwMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMXMgbGluZWFyIDtcclxufVxyXG5cclxuLmJhZGdlLWxpZ2h0IHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZmxpcC1ib3gtaW5uZXIge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5mbGlwIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLmZsaXAtYm94LWZyb250IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLyogU2FmYXJpICovXHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uZmxpcC1ib3gtYmFjayB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLyogU2FmYXJpICovXHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "imCV":
/*!****************************************************************!*\
  !*** ./src/app/main-screen/bottom-bar/bottom-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: BottomBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomBarComponent", function() { return BottomBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bottom_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bottom-bar.component.html */ "16Yq");
/* harmony import */ var _bottom_bar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bottom-bar.component.css */ "JI10");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent() {
    }
    BottomBarComponent.prototype.ngOnInit = function () {
    };
    BottomBarComponent.ctorParameters = function () { return []; };
    BottomBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-bottom-bar',
            template: _raw_loader_bottom_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_bottom_bar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BottomBarComponent);
    return BottomBarComponent;
}());



/***/ }),

/***/ "j3Qr":
/*!************************************************************************!*\
  !*** ./src/app/Pages/pack-content-page/pack-content-page.component.ts ***!
  \************************************************************************/
/*! exports provided: PackContentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackContentPageComponent", function() { return PackContentPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pack_content_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pack-content-page.component.html */ "rhoX");
/* harmony import */ var _pack_content_page_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pack-content-page.component.css */ "XM1/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Objects_packs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Objects/packs */ "piHL");
/* harmony import */ var src_app_Services_cards_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/cards.service */ "qDHm");
/* harmony import */ var src_app_Services_overlay_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/overlay-spinner.service */ "dHjZ");
/* harmony import */ var _cards_reveal_dialog_cards_reveal_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cards-reveal-dialog/cards-reveal-dialog.component */ "5Pwp");
/* harmony import */ var _random_card_reveal_dialog_random_card_reveal_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./random-card-reveal-dialog/random-card-reveal-dialog.component */ "pLnJ");











var PackContentPageComponent = /** @class */ (function () {
    function PackContentPageComponent(route, cardsService, dialog, overlaySpinnerService) {
        var _this = this;
        this.route = route;
        this.cardsService = cardsService;
        this.dialog = dialog;
        this.overlaySpinnerService = overlaySpinnerService;
        this.selectedCards = [];
        this.loadedCards = 0;
        this.flipped = false;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.overlaySpinnerService.changeOverlaySpinner(true);
    }
    PackContentPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.overlaySpinnerService.changeOverlaySpinner(true);
        var packByIdSub = this.cardsService.getPackById(this.id).subscribe(function (res) {
            packByIdSub.unsubscribe();
            _this.pack = new src_app_Objects_packs__WEBPACK_IMPORTED_MODULE_6__["PackContent"]().deseralize(res.body);
            console.log("ngOnInit -> this.pack", _this.pack);
        }, function (error) {
            var snackBarRef = _this.cardsService._snackBar.open('שגיאה במשיכת חפיסת הקלפים, נסו שנית', 'רענן', {
                duration: 20000,
            });
            snackBarRef.onAction().subscribe(function () {
                window.location.reload();
            });
        });
    };
    PackContentPageComponent.prototype.cardSelected = function (card, index) {
        if (this.selectedCards.includes(card)) {
            this.selectedCards.splice(this.selectedCards.findIndex(function (existingCard) { return existingCard == card; }), 1);
            card.index = undefined;
        }
        else {
            if (this.selectedCards.length < 5)
                this.selectedCards.push(card);
            else {
                this.cardsService._snackBar.open('יש לבחור עד 5 קלפים', '', {
                    duration: 1500,
                    panelClass: ['rtl-snackbar']
                });
            }
            card.index = index;
        }
    };
    PackContentPageComponent.prototype.shuffle = function () {
        this.selectedCards = [];
        this.pack.cards.sort(function () { return Math.random() - 0.5; });
    };
    PackContentPageComponent.prototype.openChosenCardsModal = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.maxHeight = '85vh';
        dialogConfig.data = this.selectedCards;
        var dialogRef = this.dialog.open(_cards_reveal_dialog_cards_reveal_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CardsRevealDialogComponent"], dialogConfig);
        var dialogSub = dialogRef.afterClosed().subscribe(function () {
            dialogSub.unsubscribe();
        });
    };
    PackContentPageComponent.prototype.openRandomCardsModal = function () {
        var _this = this;
        if (this.flipped) {
            this.flipped = !this.flipped;
        }
        this.shuffle();
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.maxHeight = '85vh';
        dialogConfig.data = this.pack.cards;
        this.sleep(800).then(function () {
            var dialogRef = _this.dialog.open(_random_card_reveal_dialog_random_card_reveal_dialog_component__WEBPACK_IMPORTED_MODULE_10__["RandomCardRevealDialogComponent"], dialogConfig);
            var dialogSub = dialogRef.afterClosed().subscribe(function () {
                dialogSub.unsubscribe();
            });
        });
    };
    PackContentPageComponent.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    PackContentPageComponent.prototype.cardLoaded = function () {
        this.loadedCards++;
        if (this.loadedCards == this.pack.cards.length) {
            this.overlaySpinnerService.changeOverlaySpinner(false);
        }
    };
    PackContentPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_Services_cards_service__WEBPACK_IMPORTED_MODULE_7__["CardsService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: src_app_Services_overlay_spinner_service__WEBPACK_IMPORTED_MODULE_8__["OverlaySpinnerService"] }
    ]; };
    PackContentPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-pack-content-page',
            template: _raw_loader_pack_content_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_pack_content_page_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_Services_cards_service__WEBPACK_IMPORTED_MODULE_7__["CardsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_Services_overlay_spinner_service__WEBPACK_IMPORTED_MODULE_8__["OverlaySpinnerService"]])
    ], PackContentPageComponent);
    return PackContentPageComponent;
}());



/***/ }),

/***/ "mt5E":
/*!**********************************************************!*\
  !*** ./src/app/Shared Components/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card.component.html */ "41Pl");
/* harmony import */ var _card_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component.css */ "i85I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Objects_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Objects/card */ "RyhK");





var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.selected = false;
        this.flipped = true;
        this.cardSelectedEmmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    CardComponent.prototype.ngOnInit = function () {
        // console.log("CardComponent -> card", this.cardContent)
    };
    CardComponent.prototype.imgLoaded = function () {
        this.loaded.emit();
    };
    CardComponent.prototype.onRightClick = function () {
        return false;
    };
    CardComponent.ctorParameters = function () { return []; };
    CardComponent.propDecorators = {
        cardContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        flipped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cardSelectedEmmiter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-card',
            template: _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_card_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "pLnJ":
/*!**********************************************************************************************************!*\
  !*** ./src/app/Pages/pack-content-page/random-card-reveal-dialog/random-card-reveal-dialog.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RandomCardRevealDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomCardRevealDialogComponent", function() { return RandomCardRevealDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_random_card_reveal_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./random-card-reveal-dialog.component.html */ "1C82");
/* harmony import */ var _random_card_reveal_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random-card-reveal-dialog.component.css */ "RXvd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





var RandomCardRevealDialogComponent = /** @class */ (function () {
    function RandomCardRevealDialogComponent(data) {
        this.data = data;
        this.index = 0;
        this.cardLoaded = false;
    }
    RandomCardRevealDialogComponent.prototype.ngOnInit = function () {
        this.selectedCard = this.data[this.index];
    };
    RandomCardRevealDialogComponent.prototype.nextCard = function () {
        if (this.index < this.data.length) {
            this.selectedCard = this.data[++this.index];
            this.cardLoaded = false;
        }
    };
    RandomCardRevealDialogComponent.prototype.prevCard = function () {
        if (this.index > 0) {
            this.selectedCard = this.data[--this.index];
            this.cardLoaded = false;
        }
    };
    RandomCardRevealDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
    ]; };
    RandomCardRevealDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-random-card-reveal-dialog',
            template: _raw_loader_random_card_reveal_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_random_card_reveal_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], RandomCardRevealDialogComponent);
    return RandomCardRevealDialogComponent;
}());



/***/ }),

/***/ "piHL":
/*!**********************************!*\
  !*** ./src/app/Objects/packs.ts ***!
  \**********************************/
/*! exports provided: PackInfo, PackContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackInfo", function() { return PackInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackContent", function() { return PackContent; });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "RyhK");

var PackInfo = /** @class */ (function () {
    function PackInfo() {
    }
    PackInfo.prototype.deseralize = function (input) {
        Object.assign(this, input);
        return this;
    };
    return PackInfo;
}());

var PackContent = /** @class */ (function () {
    function PackContent() {
    }
    PackContent.prototype.deseralize = function (input) {
        Object.assign(this, input);
        this.cards = input.cards.map(function (card) { return new _card__WEBPACK_IMPORTED_MODULE_0__["Card"]().deseralize(card); });
        return this;
    };
    return PackContent;
}());



/***/ }),

/***/ "qDHm":
/*!*******************************************!*\
  !*** ./src/app/Services/cards.service.ts ***!
  \*******************************************/
/*! exports provided: CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");





var CardsService = /** @class */ (function () {
    function CardsService(http, _snackBar) {
        this.http = http;
        this._snackBar = _snackBar;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseurl;
        this.apiControllerName = 'dev/';
        this.headerDict = {
            'Content-Type': 'application/json',
        };
        this.favoriteChangeEmmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.allCategories = [];
        this.favorites = [];
        var favs = localStorage.getItem("MentorCardFavorites");
        if (favs) {
            this.favorites = favs.split(',');
            this.favoriteChangeEmmiter.emit(this.favorites);
        }
    }
    CardsService.prototype.addRemoveFavorite = function (id) {
        if (this.favorites.includes(id)) {
            this.favorites.splice(this.favorites.findIndex(function (favId) { return favId == id; }), 1);
        }
        else {
            this.favorites.push(id);
        }
        localStorage.setItem("MentorCardFavorites", this.favorites.join(','));
        this.favoriteChangeEmmiter.emit(this.favorites);
        return this.isFavorite(id);
    };
    CardsService.prototype.isFavorite = function (id) {
        return this.favorites.includes(id);
    };
    CardsService.prototype.getPackById = function (id) {
        return this.http.get(this.baseURL + this.apiControllerName + 'cards?id=' + id, { headers: this.headerDict });
    };
    CardsService.prototype.getAllCardPacks = function () {
        return this.http.get(this.baseURL + this.apiControllerName + 'allcards', { headers: this.headerDict });
    };
    CardsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    CardsService.propDecorators = {
        favoriteChangeEmmiter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    CardsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], CardsService);
    return CardsService;
}());



/***/ }),

/***/ "rhoX":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/pack-content-page/pack-content-page.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 style=\"text-align: center\">{{pack.description}}</h1>\r\n<div class=\"d-flex justify-content-center nav-buttons \">\r\n  <button type=\"button\" class=\"option-btn top-option-btn\" (click)=\"shuffle()\">ערבב</button>\r\n  <button type=\"button\" class=\"option-btn top-option-btn\" (click)=\"flipped = !flipped; selectedCards = []\">הפוך\r\n    חפיסה</button>\r\n  <button type=\"button\" class=\"option-btn top-option-btn\" (click)=\"openRandomCardsModal()\">הצג קלף אקראי</button>\r\n</div>\r\n<div *ngIf=\"pack\" [transition-group]=\"'flip-list'\" class=\"d-flex flex-row justify-content-center flex-wrap\">\r\n  <app-card\r\n    [ngClass]=\"{'clickable': true, 'shuffle-item': true, 'item-hidden': true, 'item-reveal': loadedCards == pack.cards.length}\"\r\n    *ngFor=\"let card of pack.cards; let i = index\" transition-group-item [cardContent]=\"card\"\r\n    [selected]=\"selectedCards.includes(card)\" [index]=\"i+1\" [flipped]=\"flipped\" (click)=\"cardSelected(card, i+1)\"\r\n    (loaded)=\"cardLoaded()\">\r\n  </app-card>\r\n</div>\r\n\r\n<nav *ngIf=\"loadedCards==pack.cards.length\"\r\n  [ngClass]=\"{'nav navbar-light d-flex justify-content-between align-items-center bottom-nav': true, 'bottom-nav-hidden':selectedCards.length == 0}\">\r\n  <div class=\"nav-buttons\">\r\n    <!-- <button type=\"button\" class=\"option-btn\" (click)=\"shuffle()\">ערבב</button>\r\n    <button type=\"button\" class=\"option-btn\" (click)=\"flipped = !flipped; selectedCards = []\">הפוך חפיסה</button>\r\n    <button type=\"button\" class=\"option-btn\" (click)=\"openRandomCardsModal()\">הצג קלף אקראי</button> -->\r\n    <button type=\"button\" [ngClass]=\"{'option-btn bottom-option-btn':true}\" [disabled]=\"selectedCards.length == 0\"\r\n      (click)=\"openChosenCardsModal()\">הצג\r\n      קלפים שנבחרו</button>\r\n    <button type=\"button\" [ngClass]=\"{'option-btn bottom-option-btn':true}\" (click)=\"selectedCards = []\"\r\n      [disabled]=\"selectedCards.length == 0\">איפוס\r\n      בחירה</button>\r\n    <!-- [ngClass]=\"{'option-btn':true, 'bottom-nav-hidden': selectedCards.length == 0}\" -->\r\n  </div>\r\n  <div id=\"amountChosen\">\r\n    <p>{{selectedCards.length}}/5 קלפים נבחרו</p>\r\n  </div>\r\n  </nav>\r\n");

/***/ }),

/***/ "rzrB":
/*!****************************!*\
  !*** ./src/aws-exports.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
var awsmobile = {
  "aws_project_region": "eu-west-2",
  "aws_cognito_identity_pool_id": "eu-west-2:6970d4d4-d3d5-4c48-857b-09db57731a4d",
  "aws_cognito_region": "eu-west-2",
  "aws_user_pools_id": "eu-west-2_1hTBskpq6",
  "aws_user_pools_web_client_id": "tpjsm8pefd5l9dncfec9ahfks",
  "oauth": {}
};
/* harmony default export */ __webpack_exports__["default"] = (awsmobile);

/***/ }),

/***/ "sLs8":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/pack-content-page/cards-reveal-dialog/cards-reveal-dialog.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n  <!-- <app-card [ngClass]=\"{'card': true, 'card-reveal': loadedCards == data.length}\" [ngStyle]=\"{'visibility': loadedCards == data.length ? 'visible' : 'hidden'}\" class=\"card\" -->\r\n  <app-card [ngClass]=\"{'card-pre-reveal': true, 'card-reveal': loadedCards == data.length}\" \r\n    *ngFor=\"let card of data\" [cardContent]=\"card\" [index]=\"card.index\" [flipped]=\"true\" (loaded)=\"loadedCards=loadedCards+1;\">\r\n  </app-card>\r\n</div>\r\n");

/***/ }),

/***/ "vG/6":
/*!**********************************************************!*\
  !*** ./src/app/Shared Components/pack/pack.component.ts ***!
  \**********************************************************/
/*! exports provided: PackComponent, PackBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackComponent", function() { return PackComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackBackComponent", function() { return PackBackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pack_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pack.component.html */ "cXJi");
/* harmony import */ var _pack_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pack.component.css */ "9NvR");
/* harmony import */ var _raw_loader_pack_back_component_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./pack-back.component.html */ "8cOZ");
/* harmony import */ var _pack_back_component_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pack-back.component.css */ "eanZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_Objects_packs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Objects/packs */ "piHL");
/* harmony import */ var src_app_Services_cards_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/cards.service */ "qDHm");









var PackComponent = /** @class */ (function () {
    function PackComponent(cardsService) {
        this.cardsService = cardsService;
        this.Subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.fav = false;
    }
    PackComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("packInfo", this.packInfo)
        this.Subscription.add(this.cardsService.favoriteChangeEmmiter.subscribe(function (favorites) {
            _this.fav = favorites.includes(_this.packInfo.id);
        }));
        this.fav = this.cardsService.isFavorite(this.packInfo.id);
    };
    PackComponent.prototype.addRemoveFavorite = function () {
        this.fav = this.cardsService.addRemoveFavorite(this.packInfo.id);
    };
    PackComponent.prototype.imgLoaded = function () {
        this.loaded.emit();
    };
    PackComponent.prototype.ngOnDestroy = function () {
        this.Subscription.unsubscribe();
    };
    PackComponent.ctorParameters = function () { return [
        { type: src_app_Services_cards_service__WEBPACK_IMPORTED_MODULE_8__["CardsService"] }
    ]; };
    PackComponent.propDecorators = {
        packInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        loaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
    };
    PackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-pack',
            template: _raw_loader_pack_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_pack_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_cards_service__WEBPACK_IMPORTED_MODULE_8__["CardsService"]])
    ], PackComponent);
    return PackComponent;
}());

var PackBackComponent = /** @class */ (function () {
    function PackBackComponent() {
    }
    PackBackComponent.prototype.ngOnInit = function () {
        console.log(this.packInfo);
    };
    PackBackComponent.ctorParameters = function () { return []; };
    PackBackComponent.propDecorators = {
        packInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
    PackBackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-pack-back',
            template: _raw_loader_pack_back_component_html__WEBPACK_IMPORTED_MODULE_3__["default"],
            styles: [_pack_back_component_css__WEBPACK_IMPORTED_MODULE_4__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PackBackComponent);
    return PackBackComponent;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/about-page/about-page.component */ "96ug");
/* harmony import */ var _Pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/home-page/home-page.component */ "8emt");
/* harmony import */ var _Pages_pack_content_page_pack_content_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/pack-content-page/pack-content-page.component */ "j3Qr");
/* harmony import */ var _Pages_shopping_cart_page_shopping_cart_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/shopping-cart-page/shopping-cart-page.component */ "LSYR");







var routes = [
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
    { path: 'home-page', component: _Pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: 'shopping-cart-page', component: _Pages_shopping_cart_page_shopping_cart_page_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartPageComponent"] },
    { path: 'about-page', component: _Pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"] },
    { path: 'pack-view/:id', component: _Pages_pack_content_page_pack_content_page_component__WEBPACK_IMPORTED_MODULE_5__["PackContentPageComponent"] },
    { path: '**', redirectTo: '/home-page' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vlfj":
/*!************************************************************************************************!*\
  !*** ./src/app/main-screen/user-related/user-related-dialog/user-related-dialog.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-tab {\r\n    transition: width 2s, height 2s\r\n}\r\n\r\n.mat-tab-group {\r\n  direction: rtl;\r\n  transition: width 2s, height 2s\r\n}\r\n\r\n::ng-deep.mat-tab-body {\r\n  margin-top: 10px;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 0px;\r\n  z-index: 1000;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.spinner-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 25rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zY3JlZW4vdXNlci1yZWxhdGVkL3VzZXItcmVsYXRlZC1kaWFsb2cvdXNlci1yZWxhdGVkLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtFQUNFLGNBQWM7RUFDZDtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYWluLXNjcmVlbi91c2VyLXJlbGF0ZWQvdXNlci1yZWxhdGVkLWRpYWxvZy91c2VyLXJlbGF0ZWQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdGFiIHtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDJzLCBoZWlnaHQgMnNcclxufVxyXG5cclxuLm1hdC10YWItZ3JvdXAge1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDJzLCBoZWlnaHQgMnNcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC10YWItYm9keSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3Bpbm5lci13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDI1cmVtO1xyXG59Il19 */");

/***/ }),

/***/ "y7H1":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/user-related/user-related-dialog/login/login.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"login\">\r\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\" *ngIf=\"login\">\r\n    <div class=\"d-flex flex-column\">\r\n      <mat-form-field>\r\n        <mat-label>אימייל</mat-label>\r\n        <input autocomplete=\"off\" formControlName=\"username\" matInput color=\"primary\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-label>סיסמא</mat-label>\r\n        <input autocomplete=\"off\" formControlName=\"password\" matInput\r\n          [type]=\"hidePW ? 'password' : 'text'\">\r\n        <button mat-icon-button matSuffix (click)=\"hidePW = !hidePW\">\r\n          <mat-icon style=\"font-family: 'Material Icons';\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </button>\r\n      </mat-form-field>\r\n      <button type=\"submit\" class=\"option-btn\" id=\"login-button\" [disabled]=\"!loginForm.valid\">התחבר</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div *ngIf=\"!login\">\r\n  <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onForgotPasswordSubmit()\">\r\n    <div class=\"d-flex flex-column\">\r\n      <mat-form-field>\r\n        <mat-label>אימייל</mat-label>\r\n        <input autocomplete=\"off\" formControlName=\"username\" matInput>\r\n      </mat-form-field>\r\n      <button type=\"submit\" class=\"option-btn\" id=\"login-button\" [disabled]=\"!forgotPasswordForm.valid\">שחזר סיסמא</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<mat-progress-bar [ngStyle]=\"{'visibility': showLoading ? 'visible' : 'hidden'}\" mode=\"query\"></mat-progress-bar>\r\n<!-- <br> -->\r\n<mat-divider></mat-divider>\r\n<br>\r\n<div id=\"formFooter\">\r\n  <a class=\"underlineHover\" style=\"cursor: pointer;\" *ngIf=\"login\" (click)=\"login = !login; loginForm.reset()\">שכחת סיסמא?</a>\r\n  <a class=\"underlineHover\" style=\"cursor: pointer;\" *ngIf=\"!login\" (click)=\"login = !login; forgotPasswordForm.reset()\">התחברות</a>\r\n</div>\r\n");

/***/ }),

/***/ "ywwK":
/*!************************************************************************************************************!*\
  !*** ./src/app/main-screen/user-related/user-related-dialog/forgot-password/forgot-password.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2NyZWVuL3VzZXItcmVsYXRlZC91c2VyLXJlbGF0ZWQtZGlhbG9nL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aws-exports */ "rzrB");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "AytR");






aws_amplify__WEBPACK_IMPORTED_MODULE_2__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_3__["default"]);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zZ8R":
/*!*********************************************************!*\
  !*** ./src/app/Pages/home-page/home-page.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  font-family: 'rubik';\r\n  font-size: inherit;\r\n}\r\n\r\n#content {\r\n  margin-top: 1rem;\r\n}\r\n\r\napp-pack {\r\n  margin: 15px 25px;\r\n}\r\n\r\n#filters {\r\n  max-width: 15%;\r\n  min-width: 10%;\r\n  word-break: keep-all;\r\n  margin-left: 10px;\r\n}\r\n\r\n#filter-by-text {\r\n  text-align: right;\r\n  margin: 0px 10px 0px 0px;\r\n}\r\n\r\n#filter-by-options-title {\r\n  text-align: right;\r\n  margin: 5px 10px 0px 0px;\r\n  font-weight: 700;\r\n}\r\n\r\n:host ::ng-deep .mat-list-item-content {\r\n  /* padding-right: 10px; */\r\n  text-align: right;\r\n}\r\n\r\nmat-form-field {\r\n  text-align: right;\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.mat-list-base .mat-list-item,\r\n.mat-list-base .mat-list-option {\r\n  height: 35px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogJ3J1YmlrJztcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5hcHAtcGFjayB7XHJcbiAgbWFyZ2luOiAxNXB4IDI1cHg7XHJcbn1cclxuXHJcbiNmaWx0ZXJzIHtcclxuICBtYXgtd2lkdGg6IDE1JTtcclxuICBtaW4td2lkdGg6IDEwJTtcclxuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuI2ZpbHRlci1ieS10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbiNmaWx0ZXItYnktb3B0aW9ucy10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luOiA1cHggMTBweCAwcHggMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcclxuICAvKiBwYWRkaW5nLXJpZ2h0OiAxMHB4OyAqL1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSxcclxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiB7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "zwpB":
/*!**************************************************!*\
  !*** ./src/app/main-screen/nav/nav.component.ts ***!
  \**************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav.component.html */ "RWqR");
/* harmony import */ var _nav_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component.css */ "1p0z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _user_related_user_related_dialog_user_related_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-related/user-related-dialog/user-related-dialog.component */ "/iCS");






var NavComponent = /** @class */ (function () {
    function NavComponent(dialog) {
        this.dialog = dialog;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.loginRegister = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.maxHeight = '85vh';
        var dialogRef = this.dialog.open(_user_related_user_related_dialog_user_related_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UserRelatedDialogComponent"], dialogConfig);
        var dialogSub = dialogRef.afterClosed().subscribe(function () {
            dialogSub.unsubscribe();
        });
    };
    NavComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-nav',
            template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_nav_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map