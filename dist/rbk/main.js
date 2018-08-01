(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wowjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wowjs */ "./node_modules/wowjs/dist/wow.js");
/* harmony import */ var wowjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wowjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.wow = new wowjs__WEBPACK_IMPORTED_MODULE_1__["WOW"]();
        this.wow.init();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _modules_routing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/routing/routing.module */ "./src/app/modules/routing/routing.module.ts");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _components_home_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/tabs/tabs.component */ "./src/app/components/home/tabs/tabs.component.ts");
/* harmony import */ var _components_home_layout_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/layout/main/main.component */ "./src/app/components/home/layout/main/main.component.ts");
/* harmony import */ var _components_home_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/nav/nav.component */ "./src/app/components/home/nav/nav.component.ts");
/* harmony import */ var _components_home_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/footer/footer.component */ "./src/app/components/home/footer/footer.component.ts");
/* harmony import */ var _components_home_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/layout/header/header.component */ "./src/app/components/home/layout/header/header.component.ts");
/* harmony import */ var _components_home_layout_admission_admission_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/layout/admission/admission.component */ "./src/app/components/home/layout/admission/admission.component.ts");
/* harmony import */ var _components_home_layout_outcomes_outcomes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/layout/outcomes/outcomes.component */ "./src/app/components/home/layout/outcomes/outcomes.component.ts");
/* harmony import */ var _components_home_layout_program_program_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/layout/program/program.component */ "./src/app/components/home/layout/program/program.component.ts");
/* harmony import */ var _components_home_layout_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/layout/curriculum/curriculum.component */ "./src/app/components/home/layout/curriculum/curriculum.component.ts");
/* harmony import */ var _components_home_layout_main_what_what_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/layout/main/what/what.component */ "./src/app/components/home/layout/main/what/what.component.ts");
/* harmony import */ var _components_home_layout_main_why_why_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/layout/main/why/why.component */ "./src/app/components/home/layout/main/why/why.component.ts");
/* harmony import */ var _components_home_layout_main_counter_counter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/layout/main/counter/counter.component */ "./src/app/components/home/layout/main/counter/counter.component.ts");
/* harmony import */ var _components_home_layout_main_people_people_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/home/layout/main/people/people.component */ "./src/app/components/home/layout/main/people/people.component.ts");
/* harmony import */ var _components_home_layout_main_hiring_hiring_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/layout/main/hiring/hiring.component */ "./src/app/components/home/layout/main/hiring/hiring.component.ts");
/* harmony import */ var _components_home_layout_partners_partners_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/layout/partners/partners.component */ "./src/app/components/home/layout/partners/partners.component.ts");
/* harmony import */ var _components_home_layout_outcomes_who_who_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home/layout/outcomes/who/who.component */ "./src/app/components/home/layout/outcomes/who/who.component.ts");
/* harmony import */ var _components_home_layout_outcomes_where_where_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/home/layout/outcomes/where/where.component */ "./src/app/components/home/layout/outcomes/where/where.component.ts");
/* harmony import */ var _components_home_layout_volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/home/layout/volunteer/volunteer.component */ "./src/app/components/home/layout/volunteer/volunteer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_home_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"],
                _components_home_layout_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _components_home_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _components_home_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _components_home_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _components_home_layout_admission_admission_component__WEBPACK_IMPORTED_MODULE_13__["AdmissionComponent"],
                _components_home_layout_outcomes_outcomes_component__WEBPACK_IMPORTED_MODULE_14__["OutcomesComponent"],
                _components_home_layout_program_program_component__WEBPACK_IMPORTED_MODULE_15__["ProgramComponent"],
                _components_home_layout_curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_16__["CurriculumComponent"],
                _components_home_layout_main_what_what_component__WEBPACK_IMPORTED_MODULE_17__["WhatComponent"],
                _components_home_layout_main_why_why_component__WEBPACK_IMPORTED_MODULE_18__["WhyComponent"],
                _components_home_layout_main_counter_counter_component__WEBPACK_IMPORTED_MODULE_19__["CounterComponent"],
                _components_home_layout_main_people_people_component__WEBPACK_IMPORTED_MODULE_20__["PeopleComponent"],
                _components_home_layout_main_hiring_hiring_component__WEBPACK_IMPORTED_MODULE_21__["HiringComponent"],
                _components_home_layout_partners_partners_component__WEBPACK_IMPORTED_MODULE_22__["PartnersComponent"],
                _components_home_layout_outcomes_who_who_component__WEBPACK_IMPORTED_MODULE_23__["WhoComponent"],
                _components_home_layout_outcomes_where_where_component__WEBPACK_IMPORTED_MODULE_24__["WhereComponent"],
                _components_home_layout_volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_25__["VolunteerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _modules_routing_routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"],
                _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/home/footer/footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n    background: linear-gradient(#cc2b5e, #fc6767);\n    width: 100vw;\n}\n.social {\n    display: flex;\n    justify-content: center;\n}\n.social-link {\n    display: flex;\n    width: 10%;\n    flex-direction: row;\n    margin: 50px 0;\n}\n.social-link i, .up i {\n    color: #ff539E;\n    background: white;\n    border-radius: 50%;\n    padding: 10px;\n}\n.social-link i:hover, .up i:hover {\n    color: white;\n    background: #FA05AF;\n    box-shadow: 0px 1px 20px deeppink;\n}\n@media(max-width: 768px) {\n    .social-link {\n        margin: 50px 20px;\n    }    \n}"

/***/ }),

/***/ "./src/app/components/home/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/home/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <div class=\"container p-5\">\n    <h4 class=\"text-white text-center\">\n      Follow Us On\n    </h4>\n    <ul class=\"social\">\n      <li class=\"social-link\">\n        <a href=\"\">\n          <i class=\"fab fa-twitter\"></i>\n        </a>\n      </li>\n      <li class=\"social-link\">\n        <a href=\"\">\n          <i class=\"fab fa-facebook\"></i>\n\n        </a>\n      </li>\n\n      <li class=\"social-link\">\n        <a href=\"\">\n          <i class=\"fab fa-instagram\"></i>\n        </a>  \n      </li>\n\n      <li class=\"social-link\">\n        <a href=\"\">\n          <i class=\"fab fa-linkedin\"></i>\n        </a>  \n      </li>\n\n    </ul>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/home/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/home/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/home/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/home/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed {\n    position: fixed;\n    top: 0;\n    z-index: 2;\n    left: 0;\n    width: 101%;\n}\n\n.tabs {\n    position: relative;\n    top: 60px;\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-nav class=\"fixed\"></app-nav> -->\n<app-tabs></app-tabs>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/admission/admission.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/layout/admission/admission.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img {\n    max-width: 400px;\n}\n\n.m-card {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 2fr;\n        grid-template-columns: 1fr 2fr;\n    margin: 20px;\n    padding: 20px;\n}\n\n.card-text {\n    padding: 20px;\n}\n\n.head {\n    margin: 10%;\n}\n\n@media(max-width: 768px) {\n    .m-card {\n        -ms-grid-columns: 100%;\n            grid-template-columns: 100%;\n    }\n}\n"

/***/ }),

/***/ "./src/app/components/home/layout/admission/admission.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/home/layout/admission/admission.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [bg]=\"'bg2'\" [header]=\"{title: 'Admissions', text: 'Get after your dream !'}\"></app-header>\n\n<div class=\"head m-4\">\n    <h1>what would you need to\n        <span>succeed</span>\n    </h1>\n</div>\n\n<div class=\"container\">\n\n    <!-- the first card -->\n    <mat-card class=\"border-r m-4 animated slower infinite pulse\">\n        <mat-card-content class=\"m-card\">\n            <img src=\"https://source.unsplash.com/random\" alt=\"\" class=\"card-img\">\n            <p class=\"card-text\">In order for you to succeed, we’d like to know a bit more about you. Our Admissions gate is designed for you\n                to test yourself and see if you have what it takes. Ranging from mindset to technical ability, the Admissions\n                tests will require your full attention and time.</p>\n\n        </mat-card-content>\n    </mat-card>\n\n\n    <!-- the 2nd card -->\n    <mat-card class=\"border-r m-4 animated slower infinite pulse\">\n        <mat-card-content class=\"m-card\">\n\n            <img src=\"https://source.unsplash.com/random\" alt=\"\" class=\"card-img\">\n            <p class=\"card-text\">Anyone can apply for our eXtreme Learning program ! All you have to do is pass our Admissions tests. These tests\n                can last anywhere between 2 to 3 months depending on the effort you put in. Once you’ve crossed those hurdles,\n                you earn the right to an interview. All the information and answers you provide are confidential and will\n                not be shared with anyone but you !</p>\n        </mat-card-content>\n    </mat-card>\n\n\n    <!-- the 3rd card -->\n    <mat-card class=\"border-r m-4 animated slower infinite pulse\">\n        <mat-card-content class=\"m-card\">\n            <img src=\"https://source.unsplash.com/random\" alt=\"\" class=\"card-img\">\n            <p class=\"card-text\">We graduate the best software programmers this side of the hemisphere if not the world ! It takes grit, passion,\n                dedication and commitment to finish the course and begin a prosperous and fulfilling life. Before you are\n                officially admitted to the Program, you’ll have to commit to 16-hour days for 4 months in order to graduate\n                as a Silicon Valley grade software engineer.</p>\n\n        </mat-card-content>\n    </mat-card>\n\n    <!-- expectations -->\n    <div class=\"head m-4\">\n        <h1>what you can\n            <span>Expect</span>\n        </h1>\n    </div>\n\n\n    <mat-card class=\"border-r m-4 animated slower infinite pulse\">\n        <mat-card-content class=\"m-card\"></mat-card-content>\n\n        <img src=\"https://source.unsplash.com/random\" alt=\"\" class=\"card-img\">\n        <p class=\"card-text\">\n            200 questions that you must complete. These will help us to get to know you 250 to 300 online lessons that you must successfully\n            complete and pass Yes. It sounds hard, we know. But if you can do this, you can do anything !\n        </p>\n    </mat-card>\n</div>\n\n\n<!-- apply now -->\n<!-- expectations -->\n<div class=\"head\">\n    <h1 class=\"bg-dark\">Are you ready to change your\n        <span>Life?</span>\n    </h1>\n    <button class=\"btn btn-primary animated infinite pulse\">Apply Now!\n        <i class=\"fa fa-arrow-right\"></i>\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/components/home/layout/admission/admission.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/home/layout/admission/admission.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionComponent", function() { return AdmissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdmissionComponent = /** @class */ (function () {
    function AdmissionComponent() {
    }
    AdmissionComponent.prototype.ngOnInit = function () {
        console.log();
    };
    AdmissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admission',
            template: __webpack_require__(/*! ./admission.component.html */ "./src/app/components/home/layout/admission/admission.component.html"),
            styles: [__webpack_require__(/*! ./admission.component.css */ "./src/app/components/home/layout/admission/admission.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdmissionComponent);
    return AdmissionComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/curriculum/curriculum.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/home/layout/curriculum/curriculum.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid {\n    max-width: 1200px;\n    list-style: none;\n    text-align: center;\n    display: -ms-grid;\n    display: grid;\n    margin: 0 auto;\n    -ms-grid-columns: 50% 50%;\n        grid-template-columns: 50% 50%;\n}\n\n@media(max-width: 768px) {\n    .grid {\n        -ms-grid-columns: 100%;\n            grid-template-columns: 100%;\n    }\n}\n\n.head {\n    margin-top: 14%;\n    max-height: 100%;\n    overflow: hidden;\n    width: 100%;\n}\n\n.wrapper {\n    overflow: hidden;\n}\n\n/* Common style */\n\n.grid figure {\n    position: relative;\n    float: left;\n    overflow: hidden;\n    margin: 10px 1%;\n    min-width: 320px;\n    max-width: 600px;\n    max-height: 360px;\n    width: 100%;\n    text-align: center;\n    cursor: pointer;\n}\n\n@media(max-width: 768px) {\n    .grid figure {\n        width: 100%;\n    }\n}\n\n.grid figure img {\n    position: relative;\n    display: block;\n    min-height: 400px;\n    opacity: 0.6;\n}\n\n.grid figure figcaption {\n    padding: 2em;\n    color: #fff;\n    text-transform: uppercase;\n    font-size: 1.25em;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n}\n\n.grid figure figcaption::before,\n.grid figure figcaption::after {\n    pointer-events: none;\n}\n\n.grid figure figcaption,\n.grid figure figcaption>a {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.hiring-wrap {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n    background: white !important;\n    margin: 50px auto;\n    border-radius: 10px;\n}\n\n@media(max-width: 786px) {\n    .hiring-wrap {\n        -ms-grid-columns: 1fr 1fr 1fr;\n            grid-template-columns: 1fr 1fr 1fr;\n    }\n}\n\n.tech {\n    width: 80px;\n    margin: 20px;\n}\n\n/* Anchor will cover the whole item by default */\n\n/* For some effects it will show as a button */\n\n.grid figure figcaption>a {\n    z-index: 1000;\n    text-indent: 200%;\n    white-space: nowrap;\n    font-size: 0;\n    opacity: 0;\n}\n\n.grid figure h2 {\n    word-spacing: -0.15em;\n    font-weight: 300;\n}\n\n.grid figure h2 span {\n    font-weight: 800;\n}\n\n.grid figure h2,\n.grid figure p {\n    margin: 0;\n}\n\n.grid figure p {\n    letter-spacing: 1px;\n    font-size: 65.5%;\n}\n\nfigure.effect-lily img {\n    max-width: none;\n    width: calc(100% + 50px);\n    opacity: 0.5;\n    transition: opacity 0.35s, -webkit-transform 0.35s;\n    transition: opacity 0.35s, transform 0.35s;\n    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\n    -webkit-transform: translate3d(-40px, 0, 0);\n    transform: translate3d(-40px, 0, 0);\n}\n\nfigure.effect-lily figcaption {\n    text-align: left;\n}\n\nfigure.effect-lily figcaption>div {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    padding: 2em;\n    width: 100%;\n    height: 50%;\n}\n\nfigure.effect-lily h2,\nfigure.effect-lily p {\n    -webkit-transform: translate3d(0, 340px, 0);\n    transform: translate3d(0, 340px, 0);\n}\n\nfigure.effect-lily h2 {\n    transition: -webkit-transform 0.35s;\n    transition: transform 0.35s;\n    transition: transform 0.35s, -webkit-transform 0.35s;\n}\n\nfigure.effect-lily p {\n    color: rgba(255, 255, 255, 0.8);\n    opacity: 0;\n    transition: opacity 0.2s, -webkit-transform 0.35s;\n    transition: opacity 0.2s, transform 0.35s;\n    transition: opacity 0.2s, transform 0.35s, -webkit-transform 0.35s;\n}\n\nfigure.effect-lily:hover img,\nfigure.effect-lily:hover p {\n    opacity: 8;\n}\n\nfigure.effect-lily:hover img,\nfigure.effect-lily:hover h2,\nfigure.effect-lily:hover p {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-lily:hover p {\n    transition-delay: 0.05s;\n    transition-duration: 0.35s;\n}\n\n/* sadie */\n\nfigure.effect-sadie figcaption::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to bottom, rgba(72, 76, 97, 0) 0%, rgba(72, 76, 97, 0.8) 75%);\n    content: '';\n    opacity: 0;\n    -webkit-transform: translate3d(0, 50%, 0);\n    transform: translate3d(0, 50%, 0);\n}\n\nfigure.effect-sadie h2 {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    color: #ccc;\n    transition: color 0.35s, -webkit-transform 0.35s;\n    transition: transform 0.35s, color 0.35s;\n    transition: transform 0.35s, color 0.35s, -webkit-transform 0.35s;\n    -webkit-transform: translate3d(0, -50%, 0);\n    transform: translate3d(0, -50%, 0);\n}\n\nfigure.effect-sadie figcaption::before,\nfigure.effect-sadie p {\n    transition: opacity 0.35s, -webkit-transform 0.35s;\n    transition: opacity 0.35s, transform 0.35s;\n    transition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\n}\n\nfigure.effect-sadie p {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    line-height: 2;\n    opacity: 0;\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n}\n\nfigure.effect-sadie:hover h2 {\n    color: #fff;\n    -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);\n    transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);\n}\n\nfigure.effect-sadie:hover figcaption::before,\nfigure.effect-sadie:hover p {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}"

/***/ }),

/***/ "./src/app/components/home/layout/curriculum/curriculum.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/home/layout/curriculum/curriculum.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [bg]=\"'bg5'\" [header]=\"{title: 'Curriculum', text: 'The famous Hack Reactor curriculum will make you a ninja programmer!'}\"></app-header>\n\n<div class=\"wrapper\">\n\n    <div class=\"container\">\n        <mat-card class=\"p-3 border-r\">\n            <p>\n                RBK’s Xtreme Learning Program will make you a confident, autonomous and fully capable software engineer. Our curriculum is\n                always under revision to make sure that you are armed with the latest techniques and technologies. In the\n                beginning, you’ll feel like a thousand people are speaking to you at the same time. Suddenly, you’ll be building\n                projects using your newly acquired knowledge. When you’re done, you will easily wrestle any problem and build\n                applications you never thought possible!\n            </p>\n        </mat-card>\n\n\n\n        <div class=\"head sec\">\n            <h3 class=\"text-white bg-dark\">The program is divided into two\n                <span>Phases</span>\n            </h3>\n        </div>\n\n        <div class=\"grid mb-5\">\n            <figure class=\"effect-lily\">\n                <h4 class=\"text-white bg-dark p-2 \">Phase 1</h4>\n                <img src=\"../../../../../assets/RBK/future.jpg\" alt=\"img12\" />\n                <figcaption>\n                    <div>\n                        <p>During this phase, you will learn the basic fundamentals of programming and higher order concepts\n                            using JavaScript.</p>\n                    </div>\n                </figcaption>\n            </figure>\n            <figure class=\"effect-lily\">\n                <h4 class=\"text-white bg-dark p-2\">Phase 2</h4>\n                <img src=\"../../../../../assets/RBK/future.jpg\" alt=\"img1\" />\n                <figcaption>\n                    <div>\n                        <p>You’ll take part in two-day sprints where each sprint covers a new different concept from a different\n                            section of web development.</p>\n                    </div>\n                </figcaption>\n            </figure>\n        </div>\n\n\n        <div class=\"head sec mt-5\">\n            <h3 class=\"text-white bg-dark\">And the phase two is divided into two\n                <span>Stages</span>\n            </h3>\n        </div>\n\n\n        <div class=\"grid mb-5\">\n            <figure class=\"effect-sadie\">\n                <img src=\"../../../../../assets/RBK/code.jpeg\" alt=\"img02\" />\n                <figcaption>\n                    <h2>Junior\n                        <span>Stage</span>\n                    </h2>\n                    <p>|Fundamentals of computer science |Full Stack JavaScript Development |Flying Solo Week</p>\n                </figcaption>\n            </figure>\n            <figure class=\"effect-sadie\">\n                <img src=\"../../../../../assets/RBK/code.jpeg\" alt=\"img14\" />\n                <figcaption>\n                    <h2>Senior\n                        <span>Stage</span>\n                    </h2>\n                    <p>|Application Design and planing |Application Development</p>\n                </figcaption>\n            </figure>\n        </div>\n\n\n        <div class=\"head sec mt-5\">\n            <h3 class=\"text-white bg-dark\">The technologies you will\n                <span>practice</span>\n            </h3>\n        </div>\n\n        <mat-card class=\"tech-wrap bg-white container\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/4rt.jpg\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/ajax.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/algorithems.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/angular.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/api.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/backbone.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/bootstrap-social-logo.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/css-logo.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/express.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/GitHub-Mark.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/heroku.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/HTML_Logo.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/javascript.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/jquery-logo-png--800.gif\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/mongodb.png\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/mysql.svg\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/node.jpg\" alt=\"\">\n            <img class=\"tech\" src=\"../../../../../assets/RBK/React.png\" alt=\"\">\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/layout/curriculum/curriculum.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/home/layout/curriculum/curriculum.component.ts ***!
  \***************************************************************************/
/*! exports provided: CurriculumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumComponent", function() { return CurriculumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurriculumComponent = /** @class */ (function () {
    function CurriculumComponent() {
    }
    CurriculumComponent.prototype.ngOnInit = function () {
    };
    CurriculumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-curriculum',
            template: __webpack_require__(/*! ./curriculum.component.html */ "./src/app/components/home/layout/curriculum/curriculum.component.html"),
            styles: [__webpack_require__(/*! ./curriculum.component.css */ "./src/app/components/home/layout/curriculum/curriculum.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CurriculumComponent);
    return CurriculumComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/header/header.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/home/layout/header/header.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\n    width: 100%;\n    height: 700px;\n}\n\n\n.header-text {\n    color: #ddd;\n    text-align: center; \n}\n\n\n.title {\n    color: #fff;\n    text-align: center; \n    font-weight: bold;\n}\n\n\n.header-image {\n    height: 60px;\n    margin: 100px;\n}\n\n\n.bg1 {\n    background: url(https://awllpaper.com/wp-content/uploads/2018/03/dark-pink-flower-wallpaper-colorful-flowers-dark-background-16164.jpg);\n    background-attachment: fixed;\n    background-size: cover;\n    background-repeat: no-repeat;\n\n}\n\n\n.bg2 {\n    background: url('20180216_tent_ARLT-004.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    background-repeat: no-repeat;\n    \n}\n\n\n.bg3 {\n    background: url('20180216_tent_ARLT-008.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    background-repeat: no-repeat;\n    \n}\n\n\n.bg4 {\n    background: url('curr.JPG');\n    background-attachment: fixed;\n    background-size: cover;\n    background-repeat: no-repeat;\n    \n}\n\n\n.bg5 {\n    background: url('nada.JPG');\n    background-attachment: fixed;\n    background-size: cover;\n    background-repeat: no-repeat;\n    \n}\n\n\n.bg6 {\n    background: url('company.png');\n    background-attachment: fixed;\n    background-size: cover;\n    background-repeat: no-repeat;\n    \n}\n\n\n.bg7 {\n    background: url('cohort3.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    background-repeat: no-repeat;\n    \n}\n\n\n.header-image {\n    max-width: 200px;\n}\n\n\nheader {\n    overflow: hidden;\n}"

/***/ }),

/***/ "./src/app/components/home/layout/header/header.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/home/layout/header/header.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"hero\" [ngClass]=\"bg\">\n    <div class=\"d-flex justify-content-center\">\n      <img src=\"{{ header.img }}\" alt=\"\" class=\"header-image\">\n    </div>\n    <h1 class=\"title\">{{ header.title }}</h1>\n    <div class=\"text-center\">\n      <h5 class=\"header-text\">\n        {{ header.text }}\n      </h5>\n      <button class=\"btn btn-primary animated infinite pulse\">Apply\n        <i class=\"fa fa-arrow-right\"></i>\n      </button>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/components/home/layout/header/header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/home/layout/header/header.component.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(data) {
        this.data = data;
        this.bg = 'bg1';
        this.header = {
            text: '',
            img: '',
            title: ''
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "bg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "header", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/home/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/home/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/main/counter/counter.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/home/layout/main/counter/counter.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".counter {\n    min-height: 200px;\n    overflow: hidden;\n    background: linear-gradient(#cc2b5e, #fc6767);\n    background-attachment: fixed;\n}\n\n.numbers {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 25% 25% 25% 25%;\n        grid-template-columns: 25% 25% 25% 25%;\n}\n\nh5 {\n    font-size: 14px;\n}\n\n@media(max-width: 768px) {\n    .numbers {\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-columns: 100%;\n            grid-template-columns: 100%;\n    }\n}\n\n"

/***/ }),

/***/ "./src/app/components/home/layout/main/counter/counter.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/home/layout/main/counter/counter.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"counter\">\n  <div class=\"container\">\n    <div class=\"numbers p-3\">\n\n      <div class=\"num text-white text-center\">\n        <h3 class=\"hire wow animated rotateIn slow\">13K</h3>\n        <h5 class=\"wow animated slow flipInX\">cups of coffee</h5>\n        <div>\n          <i class=\"fa fa-coffee\"></i>\n        </div>\n      </div>\n\n      <div class=\"num text-white text-center\">\n        <h3 class=\"hire wow animated rotateIn slow delay-1s\">12</h3>\n        <h5 class=\"wow animated slow flipInX\">Awesome Staff Members</h5>\n        <div>\n          <i class=\"fa fa-users\"></i>\n        </div>\n      </div>\n\n      <div class=\"num text-white text-center\">\n        <h3 class=\"hire wow animated rotateIn slow delay-2s\">10K+</h3>\n        <h5 class=\"wow animated slow flipInX\">Hacking Hours</h5>\n        <div>\n          <i class=\"fa fa-clock\"></i>\n        </div>\n      </div>\n\n      <div class=\"num text-white text-center\">\n        <h3 class=\"hire wow animated rotateIn slow delay-3s\">105</h3>\n        <h5 class=\"wow animated slow flipInX\">Graduated Software Engineer</h5>\n        <div>\n          <i class=\"fa fa-user\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/home/layout/main/counter/counter.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/layout/main/counter/counter.component.ts ***!
  \**************************************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/components/home/layout/main/counter/counter.component.html"),
            styles: [__webpack_require__(/*! ./counter.component.css */ "./src/app/components/home/layout/main/counter/counter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/main/hiring/hiring.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/home/layout/main/hiring/hiring.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n    max-width: 150px;\n}\n.container {\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n"

/***/ }),

/***/ "./src/app/components/home/layout/main/hiring/hiring.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/layout/main/hiring/hiring.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head m-4\">\n  <h1 class=\"text-secondary\">Our\n    <span>Supporters</span>\n  </h1>\n</div>\n<div class=\"container m-4\">\n  <div>\n    <img src=\"../../../../../../assets/RBK/express.png\" alt=\"\" class=\"img wow animated rotateIn slow\">\n  </div>\n  <div>\n    <img src=\"../../../../../../assets/RBK/express.png\" alt=\"\" class=\"img wow animated rotateIn slow delay-1s\">\n  </div>\n  <div>\n    <img src=\"../../../../../../assets/RBK/express.png\" alt=\"\" class=\"img wow animated rotateIn slow delay-2s\">\n  </div>\n  <div>\n    <img src=\"../../../../../../assets/RBK/express.png\" alt=\"\" class=\"img wow animated rotateIn slow delay-3s\">\n  </div>\n  <div>\n    <img src=\"../../../../../../assets/RBK/express.png\" alt=\"\" class=\"img wow animated rotateIn slow delay-4s\">\n  </div>\n  <div>\n    <img src=\"../../../../../../assets/RBK/express.png\" alt=\"\" class=\"img wow animated rotateIn slow delay-5s\">\n  </div>\n  <div>\n    <img src=\"../../../../../../assets/RBK/express.png\" alt=\"\" class=\"img wow animated rotateIn slow delay-5s\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/layout/main/hiring/hiring.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/home/layout/main/hiring/hiring.component.ts ***!
  \************************************************************************/
/*! exports provided: HiringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiringComponent", function() { return HiringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HiringComponent = /** @class */ (function () {
    function HiringComponent() {
    }
    HiringComponent.prototype.ngOnInit = function () {
    };
    HiringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hiring',
            template: __webpack_require__(/*! ./hiring.component.html */ "./src/app/components/home/layout/main/hiring/hiring.component.html"),
            styles: [__webpack_require__(/*! ./hiring.component.css */ "./src/app/components/home/layout/main/hiring/hiring.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HiringComponent);
    return HiringComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/main/main.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/home/layout/main/main.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/layout/main/main.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/home/layout/main/main.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [bg]=\"'bg1'\" [header]=\"{text: 'THE Coding Boot Camp Of The Middle East.', img: 'assets/RBK/RBK-white.png' }\"></app-header>\n\n<div class=\"container\">\n    <app-what></app-what>\n</div>\n<app-counter></app-counter>\n<app-why></app-why>\n<app-people></app-people>\n<app-hiring></app-hiring>"

/***/ }),

/***/ "./src/app/components/home/layout/main/main.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/home/layout/main/main.component.ts ***!
  \***************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/home/layout/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/home/layout/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/main/people/people.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/home/layout/main/people/people.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    background: linear-gradient(#ff4c7c, #993a44);\n    background-attachment: fixed;\n    margin: 10px;\n}\n\n.mat-card-image {\n    background-image: url('esraa.JPG');\n    background-size: cover;\n    background: white;\n}\n\n.cards {\n    display: -ms-grid;\n    display: grid;\n    overflow: hidden;\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n}\n\n@media(max-width: 920px) {\n\n    .cards {\n        -ms-grid-columns: 1fr;\n            grid-template-columns: 1fr;\n        margin: 20px 0;\n    }\n}"

/***/ }),

/***/ "./src/app/components/home/layout/main/people/people.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/layout/main/people/people.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n  <h1>What people\n    <span>say ?</span>\n  </h1>\n</div>\n\n<div class=\"cards\">\n  <mat-card class=\"card wow animated slow flipInY\">\n    <mat-card-header>\n      <mat-card-title>Nama Name</mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"../../../../../../assets/RBK/esraa.JPG\" alt=\"\">\n    <mat-card-content>\n      <p>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, laborum?\n      </p>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card class=\"card wow animated slow flipInY\">\n    <mat-card-header>\n      <mat-card-title>Nama Name</mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"../../../../../../assets/RBK/esraa.JPG\" alt=\"\">\n    <mat-card-content>\n      <p>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, laborum?\n      </p>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card class=\"card wow animated slow flipInY\">\n    <mat-card-header>\n      <mat-card-title>Nama Name</mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"../../../../../../assets/RBK/esraa.JPG\" alt=\"\">\n    <mat-card-content>\n      <p>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, laborum?\n      </p>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/home/layout/main/people/people.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/home/layout/main/people/people.component.ts ***!
  \************************************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeopleComponent = /** @class */ (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/components/home/layout/main/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/components/home/layout/main/people/people.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/main/what/what.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/home/layout/main/what/what.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/layout/main/what/what.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/layout/main/what/what.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"head wow animated slow fadeIn\">\n  <h1>What is <span>RBK ?</span></h1>\n</div>\n<mat-card class=\"m-2 wow animated slow fadeIn\">\n  <img mat-card-image src=\"../../../../../../assets/RBK/guys.jpg\" alt=\"Photo of a Shiba Inu\">\n    <p>\n      Reboot Camp is the coding boot camp of the middle east\n      from zero to hero in four months\n    </p>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/home/layout/main/what/what.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/home/layout/main/what/what.component.ts ***!
  \********************************************************************/
/*! exports provided: WhatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatComponent", function() { return WhatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhatComponent = /** @class */ (function () {
    function WhatComponent() {
    }
    WhatComponent.prototype.ngOnInit = function () {
    };
    WhatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-what',
            template: __webpack_require__(/*! ./what.component.html */ "./src/app/components/home/layout/main/what/what.component.html"),
            styles: [__webpack_require__(/*! ./what.component.css */ "./src/app/components/home/layout/main/what/what.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhatComponent);
    return WhatComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/main/why/why.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/home/layout/main/why/why.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-content {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 50% 50%;\n        grid-template-columns: 50% 50%;\n}\n\n.card-text {\n    margin: 20px;\n    font-size: 20px;\n}\n\n.m-card {\n    margin: 20px;\n}\n\nhr {\n    background: darkgrey;\n    margin: 0px;\n}\n\n.cards-why {\n    overflow: hidden;\n}\n\n@media(max-width: 768px) {\n    .card-content {\n        -ms-grid-columns: 100%;\n            grid-template-columns: 100%;\n    }\n}"

/***/ }),

/***/ "./src/app/components/home/layout/main/why/why.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/home/layout/main/why/why.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"why\" class=\"container\">\n  <div class=\"head wow animated slow fadeIn\">\n    <h1>Why\n      <span>RBK?</span>\n    </h1>\n  </div>\n\n  <div class=\"cards-why\">\n\n    <!-- the first card -->\n    <mat-card class=\"m-card border-r wow animated slow slideInRight\">\n      <mat-card-header>\n        <mat-card-title>\n          In the MENA region\n        </mat-card-title>\n      </mat-card-header>\n      <hr>\n      <mat-card-content class=\"card-content\">\n        <img src=\"../../../../../../assets/RBK/unemployed.jpg\" alt=\"\" class=\"card-img\">\n        <p class=\"card-text\">the unemployment rate is a staggering 30%. Of those, 50% are aged between 19 and 24 and the general consensus is that\n          there are no jobs to be found. That information is incorrect !</p>\n        </mat-card-content>\n      </mat-card>\n      \n      <!-- the 2 card -->\n      <mat-card class=\"m-card border-l wow animated slow slideInLeft\">\n        <mat-card-header>\n          <mat-card-title>\n            What RebootKamp Jordan strives for is simple\n          </mat-card-title>\n    </mat-card-header>\n    <hr>\n    <mat-card-content class=\"card-content\">\n      <img src=\"../../../../../../assets/RBK/cohort3.jpg\" alt=\"\" class=\"card-img\">\n      <p class=\"card-text\">Although our interests reside mainly in the low-income Jordanian and refugee demographics, our aim is to help anyone\n        become a proponent of peace and advancement by empowering them with the tools needed for a successful and fruitful\n        life.</p>\n      </mat-card-content>\n    </mat-card>\n    \n    <!-- the 3 card -->\n    <mat-card class=\"m-card border-r wow animated slow slideInRight\">\n      <mat-card-header>\n        <mat-card-title>\n          There is an immediate need\n        </mat-card-title>\n      </mat-card-header>\n      <hr>\n      <mat-card-content class=\"card-content\">\n        <img src=\"../../../../../../assets/RBK/cohort4.jpg\" alt=\"\" class=\"card-img\">\n        <p class=\"card-text\">for 8.2 Million software developers in the world There is an immediate need for 8.2 Million software developers in\n          the world, and that’s just for 2019 ! In Jordan alone, about 3000 software developers are needed every year. Tech\n          jobs are plentiful, but there aren’t enough qualified software engineers to go round. And this is where we come</p>\n        </mat-card-content>\n      </mat-card>\n      \n      <!-- the 4 card -->\n      <mat-card class=\"m-card border-l wow animated slow slideInLeft\">\n    <mat-card-header>\n      <mat-card-title>\n        what we do is\n      </mat-card-title>\n    </mat-card-header>\n    <hr>\n    <mat-card-content class=\"card-content\">\n      <img src=\"../../../../../../assets/RBK/company.png\" alt=\"\" class=\"card-img\">\n      <p class=\"card-text\">\n        We impart essential technical and non-technical skills mandated by industry for anyone to take part in the 4th industrial\n        revolution as a Software Developer.</p>\n      </mat-card-content>\n    </mat-card>\n    \n    <!-- the 5 card -->\n    <mat-card class=\"m-card border-r wow animated slow slideInRight\">\n      <mat-card-header>\n        <mat-card-title>\n          There are no restrictions\n        </mat-card-title>\n      </mat-card-header>\n      <hr>\n      <mat-card-content class=\"card-content\">\n        <img src=\"../../../../../../assets/RBK/guys.jpg\" alt=\"\" class=\"card-img\">\n        <p class=\"card-text\">\n          There are no age restrictions. There are no educational restrictions. There are no nationality restrictions, and there are\n          no religious restrictions. However, and since 70% of educated women remain unemployed in the region, we stipulate\n          that each class is 50% female</p>\n        </mat-card-content>\n      </mat-card>\n      \n      <!-- the 6 card -->\n      <mat-card class=\"m-card border-l wow animated slow slideInLeft\">\n    <mat-card-header>\n      <mat-card-title>\n        In a co-habitation environment\n      </mat-card-title>\n    </mat-card-header>\n    <hr>\n    <mat-card-content class=\"card-content\">\n      <img src=\"../../../../../../assets/RBK/cohort2.jpg\" alt=\"\" class=\"card-img\">\n      <p class=\"card-text\">\n        and a 16-week period, we take candidates from Zero to Hero by using what is arguably the best software development curriculum\n        in the world developed by our partners at Hack Reactor.</p>\n      </mat-card-content>\n    </mat-card>\n    \n    <!-- the 7 card -->\n    <mat-card class=\"m-card border-r wow animated slow slideInRight\">\n      <mat-card-header>\n        <mat-card-title>\n          This is the future\n        </mat-card-title>\n      </mat-card-header>\n      <hr>\n      <mat-card-content class=\"card-content\">\n        <img src=\"../../../../../../assets/RBK/future.jpg\" alt=\"\" class=\"card-img\">\n        <p class=\"card-text\">\n          The world is heading towards an infrastructure driven by code Everything will require coding, from construction to medical\n          surgery. There is no escaping this</p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n    </section>"

/***/ }),

/***/ "./src/app/components/home/layout/main/why/why.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/home/layout/main/why/why.component.ts ***!
  \******************************************************************/
/*! exports provided: WhyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyComponent", function() { return WhyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhyComponent = /** @class */ (function () {
    function WhyComponent() {
    }
    WhyComponent.prototype.ngOnInit = function () {
    };
    WhyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-why',
            template: __webpack_require__(/*! ./why.component.html */ "./src/app/components/home/layout/main/why/why.component.html"),
            styles: [__webpack_require__(/*! ./why.component.css */ "./src/app/components/home/layout/main/why/why.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhyComponent);
    return WhyComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/outcomes/outcomes.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/home/layout/outcomes/outcomes.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".counter {\n    min-height: 200px;\n    overflow: hidden;\n    background: linear-gradient(#cc2b5e, #fc6767);\n    background-attachment: fixed;\n}\n\n\nh5 {\n    font-size: 14px;\n}\n\n"

/***/ }),

/***/ "./src/app/components/home/layout/outcomes/outcomes.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/home/layout/outcomes/outcomes.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [bg]=\"'bg4'\" [header]=\"{title: 'Outcomes', text: 'These are our results, which we are proud of!'}\"></app-header>\n\n\n<!-- counter -->\n<section class=\"counter\">\n    <div class=\"container\">\n        <div class=\"numbers p-3 row\">\n\n            <div class=\"num text-white text-center col-lg-3 col-md-12\">\n                <h3 class=\"hire wow animated rotateIn slower delay-2s\">97%</h3>\n                <h5 class=\"wow animated slower flipInX\">Hiring rate</h5>\n                <div>\n                    <i class=\"fa fa-user-tie\"></i>\n                </div>\n            </div>\n\n            <div class=\"num text-white text-center col-lg-3 col-md-12\">\n                <h3 class=\"hire wow animated rotateIn slower delay-3s\">803JD</h3>\n                <h5 class=\"wow animated slower flipInX\">Average salary</h5>\n                <div>\n                    <i class=\"fa fa-money-bill-alt\"></i>\n                </div>\n            </div>\n\n            <div class=\"num text-white text-center col-lg-3 col-md-12\">\n                <h3 class=\"hire wow animated rotateIn slower delay-4s\">2.5 Months</h3>\n                <h5 class=\"wow animated slower flipInX\">Average hiring time</h5>\n                <div>\n                    <i class=\"fa fa-calendar\"></i>\n                </div>\n            </div>\n\n            <div class=\"num text-white text-center col-lg-3 col-md-12\">\n                <h3 class=\"hire wow animated rotateIn slower delay-5s\"> 25 </h3>\n                <h5 class=\"wow animated slower flipInX\"> Average graduates Age </h5>\n                <div>\n                    <i class=\"fa fa-user\"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<nav class=\"container-fluid mt-5\" id=\"header\">\n    <mat-tab-group>\n        <mat-tab>\n            <ng-template mat-tab-label class=\"tab\">\n                <i class=\"fas fa-users\"></i>\n                Who are our graduates ?\n            </ng-template>\n            <app-who></app-who>\n        </mat-tab>\n\n        <mat-tab>\n            <ng-template mat-tab-label class=\"tab\">\n                <i class=\"fas fa-user-md\"></i>\n                What they are working ?\n            </ng-template>\n            <app-where></app-where>\n        </mat-tab>\n\n    </mat-tab-group>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/home/layout/outcomes/outcomes.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/home/layout/outcomes/outcomes.component.ts ***!
  \***********************************************************************/
/*! exports provided: OutcomesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutcomesComponent", function() { return OutcomesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutcomesComponent = /** @class */ (function () {
    function OutcomesComponent() {
    }
    OutcomesComponent.prototype.ngOnInit = function () {
    };
    OutcomesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-outcomes',
            template: __webpack_require__(/*! ./outcomes.component.html */ "./src/app/components/home/layout/outcomes/outcomes.component.html"),
            styles: [__webpack_require__(/*! ./outcomes.component.css */ "./src/app/components/home/layout/outcomes/outcomes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OutcomesComponent);
    return OutcomesComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/outcomes/where/where.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/home/layout/outcomes/where/where.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hiring-wrap {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n    background: white;\n    margin: 50px auto;\n    border-radius: 10px;\n}\n\nimg {\n    width: 100px;\n    margin: 10%;\n}\n\n.company {\n    mix-blend-mode: multiply;\n}\n\n.company:hover {\n    -webkit-animation: jackInTheBox 1s ease-in-out;\n            animation: jackInTheBox 1s ease-in-out;\n}\n\n@-webkit-keyframes jackInTheBox {\n    from {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      -webkit-transform-origin: center bottom;\n      transform-origin: center bottom;\n    }\n    to {\n      -webkit-transform: scale(1.3);\n      transform: scale(1.3);\n    }\n  }\n\n@keyframes jackInTheBox {\n    from {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      -webkit-transform-origin: center bottom;\n      transform-origin: center bottom;\n    }\n    to {\n      -webkit-transform: scale(1.3);\n      transform: scale(1.3);\n    }\n  }"

/***/ }),

/***/ "./src/app/components/home/layout/outcomes/where/where.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/home/layout/outcomes/where/where.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"m-4\">\n  <mat-card-content>\n    <img src=\"https://source.unsplash.com/random\" alt=\"\">\n    <p>\n      Our graduates have a 98% employment level within 6 months of graduation ! But most find a job within 2.5 months with a great\n      company.\n    </p>\n  </mat-card-content>\n</mat-card>\n\n\n<mat-card class=\"hiring-wrap container\">\n  <div class=\"company\">\n    <img  src=\"../../../../../../assets/RBK/hiring/ArabiaWeather.jpg\" alt=\"\">\n  </div>\n\n  <div class=\"company\">\n    <img  src=\"../../../../../../assets/RBK/hiring/britecore-logo.png\" alt=\"\">\n  </div>\n  <div class=\"company\">\n    <img  src=\"../../../../../../assets/RBK/hiring/expedia-logo.png\" alt=\"\">\n  </div>\n\n  <div class=\"company\">\n    <img  src=\"../../../../../../assets/RBK/hiring/ihorizonslogo.png\" alt=\"\">\n  </div>\n\n  <div class=\"company\">\n    <img  src=\"../../../../../../assets/RBK/hiring/logo.jpg\" alt=\"\">\n  </div>\n\n  <div class=\"company\">\n    <img  src=\"../../../../../../assets/RBK/hiring/logo_white.png\" alt=\"\">\n  </div>\n\n  <div class=\"company\">\n    <img  src=\"../../../../../../assets/RBK/hiring/MadfooatCom-Logo-01.jpg\" alt=\"\">\n  </div>\n\n  <div class=\"company\">\n    <img  src=\"../../../../../../assets/RBK/hiring/MXD_website.jpg\" alt=\"\">\n  </div>\n\n  <div class=\"company\">\n    <img  src=\"../../../../../../assets/RBK/hiring/open_souq.png\" alt=\"\">\n  </div>\n\n  <div class=\"company\">\n    <img  src=\"../../../../../../assets/RBK/hiring/souq_website.jpg\" alt=\"\">\n  </div>\n\n  <div class=\"company\">\n    <img  src=\"../../../../../../assets/RBK/hiring/standard-logo.png\" alt=\"\">\n  </div>\n\n  <div class=\"company\">\n    <img  src=\"../../../../../../assets/RBK/hiring/team5.png\" alt=\"\">\n  </div>\n\n</mat-card>"

/***/ }),

/***/ "./src/app/components/home/layout/outcomes/where/where.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/layout/outcomes/where/where.component.ts ***!
  \**************************************************************************/
/*! exports provided: WhereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhereComponent", function() { return WhereComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhereComponent = /** @class */ (function () {
    function WhereComponent() {
    }
    WhereComponent.prototype.ngOnInit = function () {
    };
    WhereComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-where',
            template: __webpack_require__(/*! ./where.component.html */ "./src/app/components/home/layout/outcomes/where/where.component.html"),
            styles: [__webpack_require__(/*! ./where.component.css */ "./src/app/components/home/layout/outcomes/where/where.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhereComponent);
    return WhereComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/outcomes/who/who.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/home/layout/outcomes/who/who.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-content {\n    margin: 25px;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 5fr;\n        grid-template-columns: 1fr 5fr;\n}\n\n.mat-card {\n    margin: 25px;\n}\n\n.mat-card-content b {\n    color: #ff2b5e;\n}\n\n.main-card-img {\n    max-width: 100%;\n}\n\n@media(max-width: 768px) {\n    .mat-card-content {\n        -ms-grid-columns: 1fr;\n            grid-template-columns: 1fr;\n    }\n}"

/***/ }),

/***/ "./src/app/components/home/layout/outcomes/who/who.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/home/layout/outcomes/who/who.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"m-4\">\n  <ul class=\"list-inline\">\n    <li class=\"list-inline-item font-weight-bold text-uppercase text-rbk\">\n      <i class=\"fa fa-calendar\"></i> To date, we have graduated 4 Cohorts (classes)\n    </li>\n    <li class=\"list-inline-item float-right font-weight-bold\">\n      <i class=\"fa fa-map-marker\"></i> Amman Jo\n    </li>\n  </ul>\n</mat-card>\n\n<div class=\"container\">\n\n  <mat-card>\n      <img src=\"https://source.unsplash.com/random\" alt=\"\" class=\"main-card-img\">\n      <p class=\"p-3\">\n        Some graduates came to us with no university degrees, and some did not even finish high school. Some didn’t know they had\n        a passion for coding, but they did. Most came here without a positive outlook on the future, and now they do. It’s\n        a life changing experience because you’re not just taught how to get a job, you’re taught how to grow and keep increasing\n        your income as you become the leader you’ve always wanted to be.\n      </p>\n  </mat-card>\n\n  <div class=\"head\">\n    <h4 class=\"text-white\">Check out the\n      <span> success stories </span>\n      this could be you in 4 months.\n    </h4>\n  </div>\n\n  <div *ngFor=\"let grad of alumni\">\n    <mat-card class=\"shadow animated slower infinite\">\n      <mat-card-content class=\"content\">\n        <div>\n          <img src=\"{{ grad.image }}\" alt=\"\" class=\"rounded\">\n          <h6 class=\"m-2 text-align\">{{ grad.name }}</h6>\n        </div>\n        <div>\n          <p>\n            <i class=\"fa fa-calendar\"></i>\n            <b>Graduated</b> {{ grad.day }}\n          </p>\n          <p>\n            {{ grad.was }}\n          </p>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/layout/outcomes/who/who.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/layout/outcomes/who/who.component.ts ***!
  \**********************************************************************/
/*! exports provided: WhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoComponent", function() { return WhoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhoComponent = /** @class */ (function () {
    function WhoComponent() {
        this.alumni = [
            {
                name: 'Tawfik',
                image: 'assets/RBK/Tawfic-150x150.jpg',
                day: 'cohort1',
                was: 'Full Stack Developer at Souq.com before RBK, he was Designer Damascus, Syria'
            },
            {
                name: 'Fatima',
                image: 'assets/RBK/fatima-150x150.jpg',
                day: 'cohort1',
                was: 'Program manager at RBK before RBK, she was unemployed Aleppo, Syria'
            },
            {
                name: 'Mohammad',
                image: 'assets/RBK/MohamadBakri-150x150.jpg',
                day: 'cohort1',
                was: 'Software Engineer at BriteCore before RBK, he was a cashier Amman,Jordan'
            },
            {
                name: 'Ishraq',
                image: 'assets/RBK/Ishraq-150x150.jpg',
                day: 'cohort1',
                was: 'Software Developer at Optimiza before RBK, she was developer Amman, Jordan'
            }
        ];
    }
    WhoComponent.prototype.ngOnInit = function () { };
    WhoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-who',
            template: __webpack_require__(/*! ./who.component.html */ "./src/app/components/home/layout/outcomes/who/who.component.html"),
            styles: [__webpack_require__(/*! ./who.component.css */ "./src/app/components/home/layout/outcomes/who/who.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhoComponent);
    return WhoComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/partners/partners.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/home/layout/partners/partners.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin: 20px auto;\n}\n\n.mat-card {\n    margin: 10px;\n    height: 200px;\n    \n}\n\n.bg-2 {\n    background: linear-gradient(90deg, #bc4e9c, #f80759)\n    \n}\n\n.clr-3 {\n    color: linear-gradient(90deg, #DA4453, #89216B)\n    \n}\n\ni {\n    font-size: 2em;\n    color: #f80759;\n}\n\nh4 {\n    font-size: 1em;\n}\n\n.grid {\n\tposition: relative;\n    clear: both;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n\tmargin: 0 auto;\n\tpadding: 1em 0 4em;\n\tmax-width: 90%;\n\tlist-style: none;\n\ttext-align: center;\n}\n\n@media(max-width: 768px) {\n    .grid {\n        -ms-grid-columns: 1fr;\n            grid-template-columns: 1fr;\n    }\n}\n\n/* Common style */\n\n.grid figure {\n\tposition: relative;\n\tfloat: left;\n\toverflow: hidden;\n\tmargin: 10px 1%;\n\tmin-width: 320px;\n\tmax-width: 97%;\n\tmax-height: 500px;\n\twidth: 100%;\n\theight: auto;\n\tbackground: #3085a3;\n\ttext-align: center;\n\tcursor: pointer;\n}\n\n.grid figure img {\n\tposition: relative;\n\tdisplay: block;\n\tmin-height: 100%;\n\tmax-width: 100%;\n\topacity: 0.8;\n}\n\n.grid figure figcaption {\n\tpadding: 2em;\n\tcolor: #fff;\n\ttext-transform: uppercase;\n\tfont-size: 1.25em;\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden;\n}\n\n.grid figure figcaption::before,\n.grid figure figcaption::after {\n\tpointer-events: none;\n}\n\n.grid figure figcaption,\n.grid figure figcaption > a {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n/* Anchor will cover the whole item by default */\n\n/* For some effects it will show as a button */\n\n.grid figure figcaption > a {\n\tz-index: 1000;\n\ttext-indent: 200%;\n\twhite-space: nowrap;\n\tfont-size: 0;\n\topacity: 0;\n}\n\n.grid figure h2 {\n\tword-spacing: -0.15em;\n\tfont-weight: 300;\n}\n\n.grid figure h2 span {\n\tfont-weight: 800;\n}\n\n.grid figure h2,\n.grid figure p {\n\tmargin: 0;\n}\n\n.grid figure p {\n\tletter-spacing: 1px;\n\tfont-size: 68.5%;\n}\n\n/* Individual effects */\n\n/*---------------*/\n\n/***** Julia *****/\n\n/*---------------*/\n\nfigure.effect-julia {\n\tbackground: #2f3238;\n}\n\nfigure.effect-julia img {\n\tmax-width: none;\n\theight: 400px;\n\ttransition: opacity 1s, -webkit-transform 1s;\n\ttransition: opacity 1s, transform 1s;\n\ttransition: opacity 1s, transform 1s, -webkit-transform 1s;\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden;\n}\n\nfigure.effect-julia figcaption {\n\ttext-align: left;\n}\n\nfigure.effect-julia h2 {\n\tposition: relative;\n\tpadding: 0.5em 0;\n}\n\nfigure.effect-julia p {\n\tdisplay: inline-block;\n\tmargin: 0 0 0.25em;\n\tpadding: 0.4em 1em;\n\tbackground: rgba(255,255,255,0.9);\n\tcolor: #2f3238;\n\ttext-transform: none;\n\tfont-weight: 500;\n\tfont-size: 75%;\n\ttransition: opacity 0.35s, -webkit-transform 0.35s;\n\ttransition: opacity 0.35s, transform 0.35s;\n\ttransition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\n\t-webkit-transform: translate3d(-360px,0,0);\n\ttransform: translate3d(-360px,0,0);\n}\n\nfigure.effect-julia p:first-child {\n\ttransition-delay: 0.15s;\n}\n\nfigure.effect-julia p:nth-of-type(2) {\n\ttransition-delay: 0.1s;\n}\n\nfigure.effect-julia p:nth-of-type(3) {\n\ttransition-delay: 0.05s;\n}\n\nfigure.effect-julia:hover p:first-child {\n\ttransition-delay: 0s;\n}\n\nfigure.effect-julia:hover p:nth-of-type(2) {\n\ttransition-delay: 0.05s;\n}\n\nfigure.effect-julia:hover p:nth-of-type(3) {\n\ttransition-delay: 0.1s;\n}\n\nfigure.effect-julia:hover img {\n\topacity: 0.4;\n\t-webkit-transform: scale3d(1.1,1.1,1);\n\ttransform: scale3d(1.1,1.1,1);\n}\n\nfigure.effect-julia:hover p {\n\topacity: 1;\n\t-webkit-transform: translate3d(0,0,0);\n\ttransform: translate3d(0,0,0);\n}\n\nfigure.effect-steve {\n\tz-index: auto;\n\toverflow: visible;\n\tbackground: #000;\n}\n\nfigure.effect-steve:before,\nfigure.effect-steve h2:before {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: -1;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #000;\n\tcontent: '';\n\ttransition: opacity 0.35s;\n}\n\nfigure.effect-steve:before {\n\tbox-shadow: 0 3px 30px rgba(0,0,0,0.8);\n\topacity: 0;\n}\n\nfigure.effect-steve figcaption {\n\tz-index: 1;\n}\n\nfigure.effect-steve img {\n\topacity: 1;\n\ttransition: -webkit-transform 0.35s;\n\ttransition: transform 0.35s;\n\ttransition: transform 0.35s, -webkit-transform 0.35s;\n\t-webkit-transform: perspective(1000px) translate3d(0,0,0);\n\ttransform: perspective(1000px) translate3d(0,0,0);\n}\n\nfigure.effect-steve h2,\nfigure.effect-steve p {\n\tbackground: #fff;\n\tcolor: #2d434e;\n}\n\nfigure.effect-steve h2 {\n\tposition: relative;\n\tmargin-top: 2em;\n\tpadding: 0.25em;\n}\n\nfigure.effect-steve h2:before {\n\tbox-shadow: 0 1px 10px rgba(0,0,0,0.5);\n}\n\nfigure.effect-steve p {\n\tmargin-top: 1em;\n\tpadding: 0.5em;\n\tfont-weight: 800;\n\topacity: 0;\n\ttransition: opacity 0.35s, -webkit-transform 0.35s;\n\ttransition: opacity 0.35s, transform 0.35s;\n\ttransition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\n\t-webkit-transform: scale3d(0.9,0.9,1);\n\ttransform: scale3d(0.9,0.9,1);\n}\n\nfigure.effect-steve:hover:before {\n\topacity: 1;\n}\n\nfigure.effect-steve:hover img {\n\t-webkit-transform: perspective(1000px) translate3d(0,0,21px);\n\ttransform: perspective(1000px) translate3d(0,0,21px);\n}\n\nfigure.effect-steve:hover h2:before {\n\topacity: 0;\n}\n\nfigure.effect-steve:hover p {\n\topacity: 1;\n\t-webkit-transform: scale3d(1,1,1);\n\ttransform: scale3d(1,1,1);\n}\n"

/***/ }),

/***/ "./src/app/components/home/layout/partners/partners.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/home/layout/partners/partners.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [bg]=\"'bg6'\" [header]=\"{title: 'Partners', text: 'Meet our partners'}\"></app-header>\n\n\n<div class=\"grid\">\n    <figure class=\"effect-steve\">\n        <img src=\"https://source.unsplash.com/random\" alt=\"img29\" />\n        <figcaption>\n            <h5> <i class=\"fas fa-gavel\"></i>\n                \n                <span>Legal Partners</span>\n            </h5>\n            <p>when you click you will see the partners below</p>\n            <a href=\"#\">View more</a>\n        </figcaption>\n    </figure>\n    <figure class=\"effect-steve\">\n        <img src=\"https://source.unsplash.com/random\" alt=\"img33\" />\n        <figcaption>\n            <h5><i class=\"fas fa-laptop\"></i>\n                \n                <span>Technical Partners</span>\n            </h5>\n            <p>when you click you will see the partners below</p>\n            <a href=\"#\">View more</a>\n        </figcaption>\n    </figure>\n    <figure class=\"effect-steve\">\n        <img src=\"https://source.unsplash.com/random\" alt=\"img33\" />\n        <figcaption>\n            <h5><i class=\"fas fa-dollar-sign\"></i>\n                <span>Financial Partners</span>\n            </h5>\n            <p>when you click you will see the partners below</p>\n            <a href=\"#\">View more</a>\n        </figcaption>\n    </figure>\n</div>"

/***/ }),

/***/ "./src/app/components/home/layout/partners/partners.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/home/layout/partners/partners.component.ts ***!
  \***********************************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/components/home/layout/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.css */ "./src/app/components/home/layout/partners/partners.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/program/program.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/layout/program/program.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img {\n    max-width: 400px;\n}\n\n.container {\n    overflow: hidden;\n}\n\n.m-card {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 2fr;\n        grid-template-columns: 1fr 2fr;\n    margin: 20px;\n    padding: 20px;\n}\n\n.card-text {\n    padding: 20px;\n}\n\n.head {\n    margin: 10%;\n}\n\n@media(max-width: 768px) {\n    .m-card {\n        -ms-grid-columns: 100%;\n            grid-template-columns: 100%;\n    }\n}\n"

/***/ }),

/***/ "./src/app/components/home/layout/program/program.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/home/layout/program/program.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [bg]=\"'bg3'\" [header]=\"{title: 'The Program', text: 'This is RBK campers journey for 4 months!'}\"></app-header>\n<div class=\"container\">\n\n    <div class=\"head m-4\">\n        <h1>The\n            <span class=\"bg-2\">PROGRAM</span>\n        </h1>\n    </div>\n\n    <!-- the first card -->\n    <mat-card class=\"border-r m-4\">\n        <mat-card-content>\n            <p class=\"card-text\">The main course of the Program is structured around the world famous Hack Reactor curriculum. However, at RBK,\n                we will also work on your communication, teamwork, leadership, critical thinking and creativity skills. Just\n                as importantly, we will enhance your stress levels by pushing you to your maximum limit.</p>\n        </mat-card-content>\n    </mat-card>\n\n    <div class=\"m-5\" *ngFor=\"let article of articles\">\n        <mat-card class=\"border-r animated slower infinite pulse\">\n            <mat-card-header>\n                <mat-card-title>\n                    {{ article.title }}\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content class=\"m-card\">\n                <img src=\"https://source.unsplash.com/random\" alt=\"\" class=\"card-img\">\n                <p class=\"card-text\">{{ article.text }}</p>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/layout/program/program.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/home/layout/program/program.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramComponent", function() { return ProgramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgramComponent = /** @class */ (function () {
    function ProgramComponent() {
        this.articles = [
            {
                title: 'What we aim for',
                // tslint:disable-next-line:max-line-length
                text: ' The main course of the Program is structured around the world famous Hack Reactor curriculum. However, at RBK, we will also work on your communication, teamwork, leadership, critical thinking and creativity skills. Just as importantly, we will enhance your stress levels by pushing you to your maximum limit.'
            },
            {
                title: 'A Sample of the Principles You’ll Learn',
                // tslint:disable-next-line:max-line-length
                text: 'Data structures, Algorithms, jQuery, HTML/CSS, Ajax, Backbone, APIs, React, NodeJS, Databases, Deployment, MEAN stack development, Angular and more. Much more.'
            },
            {
                title: 'The Schedule',
                // tslint:disable-next-line:max-line-length
                text: 'You will start the first month doing 8 hours a day (6 days a week) at RBK’s campus as a final test before you embark on your software development special forces course. This will last three months where you will use your blood, sweat and tears to make it, and help others to cross the finish line with you.'
            },
            {
                title: ' CLASS DESCRIPTION',
                // tslint:disable-next-line:max-line-length
                text: 'In your class, or what we call Cohort (a group, or a gang of friends), you’ll find men and women from Jordan, Iraq, Syria,Romania, Lebanon, Palestine, …, etc. You’ll also find Christians, Muslims, Hindus, non-believers, and manyothers. But they all want to code! Some are cool, some are serious, some are funny and some are geeks. Butby the time you’re done, they will all be a part of your life forever. A new family … A family you will alwaysbe able to count on. This is not a traditional classroom, and you will not be learning the way you have beennormally leaning. It’s hard yes. But it’s fun. And it’s cool.'
            },
            {
                title: 'A TYPICAL DAY @ RBK CAMPUS',
                // tslint:disable-next-line:max-line-length
                text: 'Expect to kick off with the class coordinator who’ll ask about your previous day. They’ll encourage you to getenough sleep so you can be productive. They’ll also give you a toy problem (small challenge based on whatyou’ve learned so far). You’ll get a break that most students use to brainstorm solutions with each other.Everyone has a different approach to solving something! Then you’ll get a little lecture from the tech teamthat’s usually more of an introduction to the day’s material or an explanation of a main concept that youmight be applying. You’ll hear the lecturer say “Guys ! Back to hacking!”. You’ll hack in pairs and everytwo days you’ll get a different teammate. You’ll keep hacking until it’s lunch time ! You’ll also be encouragedto take regular breaks, maybe a quick walk just to unplug. After lunch you’ll take part in a 5-minute publiclightning talk where you can talk about any topic that interests you. On many occasions, this will be followedby a talk from one of the hiring partners telling you about their company.   You’ll continue hacking untilit’s unplugging hour. This is your de-stress hour. Sometimes we do yoga, sometimes we meditate, or go fora group walk … And sometimes we paint, sing or even dance. Anything to keep us away from screens ! You’llcontinue hacking until the end of the day with a dinner break. Finally, you’ll say goodbye and dream of yourbed.'
            },
            {
                title: 'INSTRUCTIONAL TEAM',
                // tslint:disable-next-line:max-line-length
                text: 'Our instructors, or facilitators as we like to call them, are exceptionally well armed to convey the curriculum and impart their overall knowledge. Most of them are RBK graduates who have been retained for their remarkable shine, their proven dedication and observed passion to enhance the communities in which they exist, the classroom being one. Having shed their own blood, sweat and tears, they are truly qualified to understand what each student is going through especially from a non-technical point of view. The stress, the emotional roller-coaster and the constant pressure is no stranger. They have been there. And they know how to guide you through it. Throughout your journey, you will be supported by our Tech Mentor who will give you hints as to where the right doors are. If you’re feeling down, want to give up and break something, then talk to our class counsellor. Don’t be shy, they also take care of our staff !'
            },
            {
                title: 'VISITING TECH MENTORS',
                // tslint:disable-next-line:max-line-length
                text: 'Don’t be surprised if you see a western guy or girl @ RBK. We have an exchange program whereby highly experienced developers come from all over the world to share their experience and help you get in-depth understanding of what you’re learning and how to apply it. They take time off from their work and fly to Jordan just to be with you, share your culture and learn how to pronounce your name !'
            },
            {
                title: 'HOUSING, TRANSPORTATION AND MEALS',
                // tslint:disable-next-line:max-line-length
                text: 'RBK provides 3 meals a day, local transportation (Greater Amman area) and housing for those living more than 1 hour away. Housing is limited and only available to those living outside Amman. It is available on a first come, first served basis. RBK does not provide stipends to students.'
            },
            {
                title: 'HAVING FUN (SOCIAL NIGHTS & EVENTS)',
                // tslint:disable-next-line:max-line-length
                text: 'Every end of week ends with a bang ! Water-balloon fights, relaxing in a candle-lit garden, BBQ, music, or bring your own instrument, bowling, AR games, movies, …, etc., is how we wrap up a hard week’s work.'
            },
            {
                title: 'TUITION',
                // tslint:disable-next-line:max-line-length
                text: 'The cost of the program is 5,700 JoD and is payable upon final approval for admission to the program. Although we offer scholarships as they become available, we also have understandings with financial institutions that are willing to grant you a loan which you can pay back comfortably when you start your first job. If we recommend you, your loan is guaranteed.'
            }
        ];
    }
    ProgramComponent.prototype.ngOnInit = function () { };
    ProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-program',
            template: __webpack_require__(/*! ./program.component.html */ "./src/app/components/home/layout/program/program.component.html"),
            styles: [__webpack_require__(/*! ./program.component.css */ "./src/app/components/home/layout/program/program.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgramComponent);
    return ProgramComponent;
}());



/***/ }),

/***/ "./src/app/components/home/layout/volunteer/volunteer.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/layout/volunteer/volunteer.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/layout/volunteer/volunteer.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/home/layout/volunteer/volunteer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [bg]=\"'bg7'\" [header]=\"{title: 'Volunteer', text: 'Volunteer '}\"></app-header>\n"

/***/ }),

/***/ "./src/app/components/home/layout/volunteer/volunteer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/home/layout/volunteer/volunteer.component.ts ***!
  \*************************************************************************/
/*! exports provided: VolunteerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerComponent", function() { return VolunteerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VolunteerComponent = /** @class */ (function () {
    function VolunteerComponent() {
    }
    VolunteerComponent.prototype.ngOnInit = function () {
    };
    VolunteerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-volunteer',
            template: __webpack_require__(/*! ./volunteer.component.html */ "./src/app/components/home/layout/volunteer/volunteer.component.html"),
            styles: [__webpack_require__(/*! ./volunteer.component.css */ "./src/app/components/home/layout/volunteer/volunteer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VolunteerComponent);
    return VolunteerComponent;
}());



/***/ }),

/***/ "./src/app/components/home/nav/nav.component.css":
/*!*******************************************************!*\
  !*** ./src/app/components/home/nav/nav.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand {\n    background: rgba(0, 0, 0, .5);\n    width: 100vw;\n}\n\n.brand img {\n    width: 100px;\n    mix-blend-mode: screen;\n    float: right;\n}\n\n.nav-arrow i {\n    font-size: 20px;\n    color: #82115E;\n    background: white;\n    padding: 10px;\n    border-radius: 50%;\n    margin: 0 20px;\n}\n\n.nav-arrow i:hover {\n    background-color: #ff0379;\n    color: white;\n}\n"

/***/ }),

/***/ "./src/app/components/home/nav/nav.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/home/nav/nav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"row w-100\">\n    <div class=\"brand p-2\">\n      <a href=\"#\">\n        <img src=\"../../../assets/RBK/rbk.png\" class=\"\">\n      </a>\n      <a href=\"#header\" class=\"nav-arrow\">\n        <i class=\"fa fa-arrow-up\"></i>\n      </a>\n      <a href=\"#footer\" class=\"nav-arrow\">\n        <i class=\"fa fa-arrow-down\"></i>\n      </a>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/home/nav/nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/home/nav/nav.component.ts ***!
  \******************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/home/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/home/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/home/tabs/tabs.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/home/tabs/tabs.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  min-height: 100vh;\n}\n"

/***/ }),

/***/ "./src/app/components/home/tabs/tabs.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/home/tabs/tabs.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"container-fluid\" id=\"header\">\n  <mat-tab-group>\n    <mat-tab>\n      <ng-template mat-tab-label class=\"tab\">\n        <i class=\"fas fa-home\"></i>\n        Home\n      </ng-template>\n      <app-main></app-main>\n    </mat-tab>\n\n    <mat-tab>\n      <ng-template mat-tab-label class=\"tab\">\n        <i class=\"fas fa-sign\"></i>\n        Admission\n      </ng-template>\n      <app-admission></app-admission>\n    </mat-tab>\n    <mat-tab>\n      <ng-template mat-tab-label class=\"tab\">\n        <i class=\"fas fa-calendar-alt\"></i>\n        Program\n      </ng-template>\n      <app-program></app-program>\n    </mat-tab>\n    <mat-tab>\n      <ng-template mat-tab-label class=\"tab\">\n        <i class=\"fas fa-users\"></i>\n        Outcomes\n      </ng-template>\n      <app-outcomes></app-outcomes>\n    </mat-tab>\n    <mat-tab>\n      <ng-template mat-tab-label class=\"tab\">\n        <i class=\"fas fa-desktop\"></i>\n        Curriculum\n      </ng-template>\n      <app-curriculum></app-curriculum>\n    </mat-tab>\n\n    <mat-tab>\n      <ng-template mat-tab-label class=\"tab\">\n        <i class=\"fas fa-handshake\"></i>\n        Partners\n      </ng-template>\n      <app-partners></app-partners>\n    </mat-tab>\n\n    <mat-tab>\n      <ng-template mat-tab-label class=\"tab\">\n        <i class=\"fas  fa-hands\"></i>\n        Volunteer\n      </ng-template>\n      <app-volunteer></app-volunteer>\n    </mat-tab>\n  </mat-tab-group>\n</nav>"

/***/ }),

/***/ "./src/app/components/home/tabs/tabs.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/home/tabs/tabs.component.ts ***!
  \********************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent(data) {
        this.data = data;
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/components/home/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/components/home/tabs/tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/modules/material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ],
            exports: [
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/routing/routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/routing/routing.module.ts ***!
  \***************************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ahmad/Desktop/rbk-material/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map