(this["webpackJsonpmy-first-tv-app"] = this["webpackJsonpmy-first-tv-app"] || []).push([
	[0], {
		103: function(module, __webpack_exports__, __webpack_require__) {
			"use strict";
			var E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13),
				react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),
				_Page_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(108),
				_DetailPage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(107),
				_Format_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32),
				axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31),
				axios__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__),
				App = function(_React$Component) {
					function App(_) {
						var e;
						return Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this, App), (e = Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this, Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this, _))).state = {
							page0: {
								id: 0,
								className: "page header",
								children: [{
									type: "button",
									data: {
										PageId: 0,
										RowId: 1,
										gutter: [24, 32],
										span: 4,
										btnClass: "header-btn",
										onclick: e.requestData.bind(Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),
										value: ["\u7535\u5f71", "\u56fd\u5267", "\u97e9\u5267", "\u7f8e\u5267", "\u5f85\u5b9a", "\u5f85\u5b9a"]
									}
								}]
							},
							page1: {
								id: 1,
								hasRenderer: !1,
								className: "page display",
								children: [{
									type: "divider",
									text: "影院热映"
								}, {
									hasRequest: !1,
									type: "card",
									description: "2020\u6700\u65b0\u7535\u5f71",
									url: "http://www.wfrmyy.com/label/front.html",
									data: {
										gutter: [24, 32],
										PageId: 1,
										RowId: 1,
										span: 4,
										value: [],
										cardCount: 6
									}
								}, {
									type: "divider",
									text: "2020"
								}, {
									hasRequest: !1,
									type: "card",
									description: "2020\u6700\u65b0\u7535\u5f71",
									url: "http://www.wfrmyy.com/ttshow/1--2020.html",
									data: {
										gutter: [24, 32],
										PageId: 1,
										RowId: 2,
										span: 4,
										value: [],
										cardCount: 6
									}
								}]
							},
							page2: {
								id: 2,
								hasRenderer: !1,
								className: "page hidden",
								children: [{
									type: "divider",
									text: "2020"
								}, {
									hasRequest: !1,
									type: "card",
									description: "\u56fd\u8bed2020\u6700\u65b0\u7535\u89c6\u5267",
									url: "http://www.wfrmyy.com/ttshow/13--2020.html",
									data: {
										gutter: [24, 32],
										PageId: 2,
										RowId: 1,
										span: 4,
										value: [],
										cardCount: 6
									}
								}]
							},
							page3: {
								id: 3,
								hasRenderer: !1,
								className: "page hidden",
								children: [{
									type: "divider",
									text: "2020"
								}, {
									hasRequest: !1,
									type: "card",
									description: "2020\u5e74\u97e9\u5267",
									url: "https://www.hanjutv.com/v_all/list-catid-7-year-2020.html",
									data: {
										gutter: [24, 32],
										PageId: 3,
										RowId: 1,
										span: 4,
										value: [],
										cardCount: 6
									}
								}, {
									type: "divider",
									text: "2019"
								}, {
									hasRequest: !1,
									type: "card",
									description: "2019\u5e74\u97e9\u5267",
									url: "https://www.hanjutv.com/v_all/list-catid-7-year-2019.html",
									data: {
										gutter: [24, 32],
										PageId: 3,
										RowId: 2,
										span: 4,
										value: [],
										cardCount: 6
									}
								}, {
									type: "divider",
									text: "2018"
								}, {
									hasRequest: !1,
									type: "card",
									description: "2018\u5e74\u97e9\u5267",
									url: "https://www.hanjutv.com/v_all/list-catid-7-year-2018.html",
									data: {
										gutter: [24, 32],
										PageId: 3,
										RowId: 3,
										span: 4,
										value: [],
										cardCount: 6
									}
								}, {
									type: "divider",
									text: "2017"
								}, {
									hasRequest: !1,
									type: "card",
									description: "2017\u5e74\u97e9\u5267",
									url: "https://www.hanjutv.com/v_all/list-catid-7-year-2017.html",
									data: {
										gutter: [24, 32],
										PageId: 3,
										RowId: 4,
										span: 4,
										value: [],
										cardCount: 6
									}
								}]
							},
							page4: {
								id: 4,
								hasRenderer: !1,
								className: "page hidden",
								children: [{
									type: "divider",
									text: "\u79d1\u5e7b\u52a8\u4f5c"
								}, {
									hasRequest: !1,
									type: "card",
									description: "\u7f8e\u5267\u79d1\u5e7b\u52a8\u4f5c",
									url: "https://www.meiju22.com/new/Mlist/Mju13.html",
									data: {
										gutter: [24, 32],
										PageId: 4,
										RowId: 1,
										span: 4,
										value: [],
										cardCount: 6
									}
								}, {
									type: "divider",
									text: "\u60ac\u7591\u70e7\u8111"
								}, {
									hasRequest: !1,
									type: "card",
									description: "\u7f8e\u5267\u60ac\u7591\u70e7\u8111",
									url: "https://www.meiju22.com/new/Mlist/Mju14.html",
									data: {
										gutter: [24, 32],
										PageId: 4,
										RowId: 2,
										span: 4,
										value: [],
										cardCount: 6
									}
								}, {
									type: "divider",
									text: "\u559c\u5267\u9752\u6625"
								}, {
									hasRequest: !1,
									type: "card",
									description: "\u7f8e\u5267\u559c\u5267\u9752\u6625",
									url: "https://www.meiju22.com/new/Mlist/Mju15.html",
									data: {
										gutter: [24, 32],
										PageId: 4,
										RowId: 3,
										span: 4,
										value: [],
										cardCount: 6
									}
								}, {
									type: "divider",
									text: "\u52a8\u6f2b\u5361\u901a"
								}, {
									hasRequest: !1,
									type: "card",
									description: "\u7f8e\u5267\u52a8\u6f2b\u5361\u901a",
									url: "https://www.meiju22.com/new/Mlist/Mju3.html",
									data: {
										gutter: [24, 32],
										PageId: 4,
										RowId: 4,
										span: 4,
										value: [],
										cardCount: 6
									}
								}]
							},
							page5: {
								id: 5,
								hasRenderer: !1,
								className: "page hidden",
								children: [{
									type: "divider",
									text: "page-5"
								}]
							},
							page6: {
								id: 6,
								hasRenderer: !1,
								className: "page hidden",
								children: [{
									type: "divider",
									text: "page-6"
								}]
							},
							pageVideoDetail: {
								id: 100,
								scrollTop: 0,
								data: {
									PageId: 100,
									RowId: 1,
									gutter: [16, 8],
									span: 2,
									btnClass: "page-btn",
									onclick: function() {
										return alert(1)
									},
									info: {
										date: "",
										director: "",
										firstPlay: "",
										series: "",
										update_time: "",
										role: "",
										introduce: ""
									},
									value: [],
									url: []
								}
							},
							pageVideoPlay: {}
						}, e
					}
					return Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(App, _React$Component), Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App, [{
						key: "requestData",
						value: function() {
							var _ = parseInt(document.querySelector(".header").querySelector(".focus").id.match(/btn-(\d+)/)[1]);
							_ = "page" + _;
							var e = document.querySelector(".display").id.replace("-", "");
							if (_ !== e || !this.state.page1.hasRenderer) {
								this.state[e].className = "page hidden";
								var a = this.state[_];
								if (a.className = "page display", this.setState(this.state), !a.hasRenderer) {
									var t = a.children.length;
									this.getData(a, _, t)
								}
							}
						}
					}, {
						key: "getData",
						value: function(_, e, a) {
							var t = this;
							if (0 === a) return _.hasRenderer = !0, void this.setState(this.state);
							var r = _.children.length,
								l = _.children[r - a];
							if ("card" !== l.type || l.hasRequest) setTimeout((function() {
								t.getData(_, e, a - 1)
							}), 1e3);
							else {
								l.hasRequest = !0;
								var n = l.url.split(".")[1];
								console.log([r - a, l.url, "\u5f00\u59cb\u83b7\u53d6\u5f71\u89c6\u5217\u8868"]), axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(l.url).then((function(s) {
									console.log([r - a, l.url, "\u6210\u529f\u83b7\u53d6\u5f71\u89c6\u5217\u8868"]), l.data.value = _Format_js__WEBPACK_IMPORTED_MODULE_9__.a.getMovieList(s.data, n);
									var i = l.data.value.length;
									i -= i % (24 / l.data.span), l.data.cardCount = i, t.setState(t.state, (function() {
										t.updateCard(e, r - a)
									})), setTimeout((function() {
										t.getData(_, e, a - 1)
									}), 1e3)
								}))
							}
						}
					}, {
						key: "updateCard",
						value: function updateCard(PageId, childIndex) {
							var _this3 = this,
								page = this.state[PageId];
							PageId = PageId.match(/\d+/)[0];
							var RowId = (childIndex + 1) / 2,
								cardCount = page.children[childIndex].data.cardCount,
								value = page.children[childIndex].data.value,
								cardRowChildLen = document.querySelector("#page-".concat(PageId, "-row-").concat(RowId)).children.length;
							if (cardCount === cardRowChildLen) {
								for (var i = 1; i <= cardCount; i++) {
									var data = value[i - 1],
										card = document.querySelector("#page-".concat(PageId, "-row-").concat(RowId, "-card-").concat(i));
									card.setAttribute("name", data.video_src), card.querySelector("img").setAttribute("data-original", data.image_src), card.querySelector(".ant-card-meta-title").innerText = data.title.slice(0, 8), card.querySelector(".ant-card-meta-description").innerText = data.description.slice(0, 10)
								}
								eval('\n                $(function() {\n                    $("#page-'.concat(PageId, "-row-").concat(RowId, ' img").lazyload({effect: "fadeIn"});\n                });\n            '))
							} else setTimeout((function() {
								_this3.updateCard(PageId, childIndex)
							}), 100)
						}
					}, {
						key: "createPages",
						value: function() {
							var _ = this;
							return [0, 1, 2, 3, 4, 5, 6].map((function(e) {
								var a = _.state["page" + e];
								return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Page_js__WEBPACK_IMPORTED_MODULE_7__.a, {
									page: a
								})
							}))
						}
					}, {
						key: "render",
						value: function() {
							return window.app = this, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, this.createPages(), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_DetailPage_js__WEBPACK_IMPORTED_MODULE_8__.a, {
								data: this.state.pageVideoDetail.data
							}))
						}
					}]), App
				}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
			__webpack_exports__.a = App
		},
		104: function(module, __webpack_exports__, __webpack_require__) {
			"use strict";
			var E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13),
				antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77),
				antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_5__),
				antd_lib_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37),
				antd_lib_card__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_6__),
				react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),
				axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31),
				axios__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__),
				_Format_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32),
				Meta = antd_lib_card__WEBPACK_IMPORTED_MODULE_6___default.a.Meta,
				card_body_style = {
					padding: "5px 10px"
				},
				MyCard = function(_React$Component) {
					function MyCard() {
						return Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this, MyCard), Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this, Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(MyCard).apply(this, arguments))
					}
					return Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(MyCard, _React$Component), Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(MyCard, [{
						key: "openDetailPage",
						value: function openDetailPage() {
							window.app.state.pageVideoDetail.data.info = this.props.data.videoInfo, window.app.state.pageVideoDetail.data.value = this.props.data.playInfo.series, window.app.state.pageVideoDetail.data.url = this.props.data.playInfo.url, window.app.state.pageVideoDetail.scrollTop = window.document.body.scrollTop, window.app.setState(window.app.state), eval("\n            document.querySelector('#page-0').style.display = 'none';\n            document.querySelector('.display').style.display = 'none';\n            changeClass.add(document.querySelector('.focus'), 'blur');\n            changeClass.remove(document.querySelector('.focus'), 'focus');\n            document.body.scrollTop = 0; // \u7535\u89c6\n            // document.documentElement.scrollTop = 0;  // \u7535\u8111\n            changeClass.remove(document.querySelector('#page-100'), 'hidden');\n            changeClass.add(document.querySelector('#page-100'), 'display');\n            changeClass.add(document.querySelector('#page-100-row-1-btn-1'), 'focus');\n        ")
						}
					}, {
						key: "getVideoInfo",
						value: function() {
							var _ = this;
							if (0 === this.props.data.videoInfo.length) {
								var e = document.getElementById(this.props.id).getAttribute("name"),
									a = e,
									t = e.split(".")[1];
								console.log([a, "\u5f00\u59cb\u83b7\u53d6\u5f71\u89c6\u8be6\u60c5"]), 
								axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(a).then((function(e) {
									console.log([a, "\u6210\u529f\u83b7\u53d6\u5f71\u89c6\u8be6\u60c5"]);
									a = _Format_js__WEBPACK_IMPORTED_MODULE_9__.a.getMovieDetail(e.data, t);
									_.props.data.videoInfo = a[0];
									_.props.data.playInfo = a[1];
									_.props.data.videoInfo.cover_url = document.getElementById(_.props.id).querySelector("img").src;
									_.props.data.videoInfo.video_name = document.getElementById(_.props.id).querySelector(".ant-card-meta-title").innerText;
									_.openDetailPage();
								}))
							} else this.openDetailPage()
						}
					}, {
						key: "render",
						value: function() {
							return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_6___default.a, {
								id: this.props.id,
								name: "none",
								style: {
									width: "100%"
								},
								bodyStyle: card_body_style,
								onClick: this.getVideoInfo.bind(this) || function() {},
								cover: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
									className: "lazy",
									height: "250",
									"data-original": "",
									src: "blank.png",
									alt: "\u56fe\u7247\u65e0\u6cd5\u52a0\u8f7d"
								})
							}, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Meta, {
								title: "\u65e0",
								description: "\u65e0"
							}))
						}
					}]), MyCard
				}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
			__webpack_exports__.a = MyCard
		},
		107: function(module, __webpack_exports__, __webpack_require__) {
			"use strict";
			var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38),
				antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__),
				antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24),
				antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__),
				antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77),
				antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_2__),
				antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37),
				antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__),
				antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39),
				antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__),
				antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20),
				antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12),
				E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13),
				react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0),
				react__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),
				_App_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68),
				_App_css__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_12__),
				_ButtonRow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48),
				axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31),
				axios__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__),
				_Format_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32),
				DetailPage = function(_React$Component) {
					function DetailPage() {
						return Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.a)(this, DetailPage), Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__.a)(this, Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__.a)(DetailPage).apply(this, arguments))
					}
					return Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__.a)(DetailPage, _React$Component), Object(E_web_my_first_tv_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__.a)(DetailPage, [{
						key: "playVideo",
						value: function playVideo(url) {
							var site = url.split(".")[1];
							if ("wfrmyy" === site) return console.log([url, "\u5f00\u59cb\u64ad\u653e\u89c6\u9891"]), void eval('\n                let playView = plus.webview.create("'.concat(url, '", "playView");\n                playView.setJsFile(\'_www/js/playPage.js\');\n                setTimeout( () => {\n                    playView.show();\n                }, 2500 );\n            '));
							console.log([url, "\u5f00\u59cb\u83b7\u53d6\u89c6\u9891\u5730\u5740"]), axios__WEBPACK_IMPORTED_MODULE_14___default.a.get(url).then((function(res) {
								console.log([url, "\u5f00\u59cb\u64ad\u653e\u89c6\u9891"]), url = _Format_js__WEBPACK_IMPORTED_MODULE_15__.a.getMoviePlayUrl(res.data, site), eval('\n                let playView = plus.webview.create("'.concat(url, '", "playView");\n                setTimeout( () => {\n                    playView.show();\n                }, 300 );\n            '))
							}))
						}
					}, {
						key: "back2main",
						value: function back2main() {
							setTimeout((function() {
								window.document.body.scrollTop = window.app.state.pageVideoDetail.scrollTop
							}), 100), eval("\n            changeClass.remove(document.querySelector('#page-100'), 'display');\n            changeClass.add(document.querySelector('#page-100'), 'hidden');\n            changeClass.remove(document.querySelector('#page-100-row-1-btn-1'), 'focus');\n            document.querySelector('#page-0').style.display = 'block';\n            document.querySelector('.display').style.display = 'block';\n            changeClass.add(document.querySelector('.blur'), 'focus');\n            changeClass.remove(document.querySelector('.blur'), 'blur');\n        ")
						}
					}, {
						key: "click",
						value: function() {
							var _ = window.app.state.pageVideoDetail.data,
								e = _.url,
								a = document.querySelector(".focus").innerText;
							if ("\u8fd4\u56de" === a) this.back2main();
							else {
								var t = _.value.indexOf(a) - 1;
								this.playVideo(e[t])
							}
						}
					}, {
						key: "render",
						value: function() {
							var _ = this.props.data.info;
							return this.props.data.onclick = this.click.bind(this), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
								id: "page-100",
								className: "page hidden"
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
								gutter: [16, 64],
								style: {
									overflow: "hidden"
								}
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
								span: 6
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
								style: {
									position: "relative",
									height: "400px",
									width: "100%",
									borderRadius: "5px"
								},
								src: this.props.data.info.cover_url,
								alt: "\u56fe\u7247\u65e0\u6cd5\u52a0\u8f7d"
							})), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
								span: 18
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a, {
								style: {
									height: "400px",
									backgroundColor: "rgba(30, 61, 74, 1)"
								}
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("table", {
								className: "video-detail-container"
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr", {
								className: "video-detail"
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
								colSpan: "2"
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
								id: "video_name"
							}, _.video_name))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr", {
								className: "video-detail"
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", null, "\u5e74\u4ee3\uff1a"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
								id: "year"
							}, _.date)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", null, "\u5bfc\u6f14\uff1a"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
								id: "director"
							}, _.director.slice(0, 20)))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr", {
								className: "video-detail"
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", null, "\u9996\u64ad\uff1a"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
								id: "firstPlay"
							}, _.firstPlay)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", null, "\u96c6\u6570\uff1a"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
								id: "series"
							}, _.series))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr", {
								className: "video-detail"
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
								colSpan: "2"
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", null, "\u66f4\u65b0\uff1a"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
								id: "update-time"
							}, _.updateTime))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr", {
								className: "video-detail"
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
								colSpan: "2"
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", null, "\u4e3b\u6f14\uff1a"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
								id: "role"
							}, _.role.slice(0, 20)))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr", {
								className: "video-detail"
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td", {
								colSpan: "2"
							}, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", null, "\u5267\u60c5\uff1a"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
								id: "introduce"
							}, _.introduce)))))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ButtonRow_js__WEBPACK_IMPORTED_MODULE_13__.a, {
								data: this.props.data
							}))
						}
					}]), DetailPage
				}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);
			__webpack_exports__.a = DetailPage
		},
		108: function(_, e, a) {
			"use strict";
			a(115);
			var t = a(106),
				r = a.n(t),
				l = a(9),
				n = a(10),
				s = a(14),
				i = a(12),
				c = a(13),
				d = a(0),
				o = a.n(d),
				p = (a(68), a(48)),
				u = (a(38), a(24)),
				E = a.n(u),
				m = (a(39), a(20)),
				P = a.n(m),
				b = a(104),
				O = function(_) {
					function e() {
						return Object(l.a)(this, e), Object(s.a)(this, Object(i.a)(e).apply(this, arguments))
					}
					return Object(c.a)(e, _), Object(n.a)(e, [{
						key: "render",
						value: function() {
							var _ = this.props.data,
								e = _.cardCount % (24 / _.span),
								a = new Array(_.cardCount - e).join(",").split(",").map((function(_, e) {
									return e
								}));
							return o.a.createElement(E.a, {
								gutter: _.gutter,
								id: "page-".concat(_.PageId, "-row-").concat(_.RowId)
							}, a.map((function(e) {
								return o.a.createElement(P.a, {
									className: "gutter-row",
									span: _.span
								}, o.a.createElement(b.a, {
									id: "page-".concat(_.PageId, "-row-").concat(_.RowId, "-card-").concat(e + 1),
									data: {
										videoInfo: [],
										playInfo: []
									}
								}))
							})))
						}
					}]), e
				}(o.a.Component),
				D = function(_) {
					function e() {
						return Object(l.a)(this, e), Object(s.a)(this, Object(i.a)(e).apply(this, arguments))
					}
					return Object(c.a)(e, _), Object(n.a)(e, [{
						key: "createElement",
						value: function(_) {
							return "divider" === _.type ? o.a.createElement(r.a, {
								orientation: "left"
							}, _.text) : "card" === _.type ? o.a.createElement(O, {
								data: _.data
							}) : "button" === _.type ? o.a.createElement(p.a, {
								data: _.data
							}) : void 0
						}
					}, {
						key: "createPage",
						value: function() {
							var _ = this,
								e = this.props.page;
							return o.a.createElement("div", {
								id: "page-" + e.id,
								className: e.className
							}, e.children.map((function(e) {
								return _.createElement(e)
							})))
						}
					}, {
						key: "render",
						value: function() {
							return o.a.createElement(o.a.Fragment, null, " ", this.createPage(), " ")
						}
					}]), e
				}(o.a.Component);
			e.a = D
		},
		109: function(_, e, a) {
			_.exports = a(236)
		},
		114: function(_, e, a) {},
		236: function(_, e, a) {
			"use strict";
			a.r(e);
			var t = a(0),
				r = a.n(t),
				l = a(66),
				n = a.n(l),
				s = (a(114), a(103));
			Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
			n.a.render(r.a.createElement(s.a, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(_) {
				_.unregister()
			}))
		},
		32: function(_, e, a) {
			"use strict";
			var t = a(9),
				r = a(10),
				l = new(function() {
					function _() {
						Object(t.a)(this, _), this.regex = {
							hanjutv: {
								root_url: "https://www.hanjutv.com",
								list: {
									ul: /<ul class="m-list.*?>(.*?)<\/ul>/,
									li: /<li class="m-item">(.*?)<\/li>/g,
									image_src: /data-original="(.*?)"/,
									video_src: /href="(.*?)"/,
									title: /title="(.*?)"/,
									description: /<p class="des">(.*?)<\/p>/
								},
								detail: {
									date: /\u5e74\u4ee3.*?>(.*?)</,
									introduce: /\u7b80\u4ecb.*?>(.*?)</,
									director: /\u5bfc\u6f14.*?>(.*?)</,
									role: /\u4e3b\u6f14.*?>(.*?)</,
									series: /\u96c6\u6570.*?>(.*?)</,
									firstPlay: /\u9996\u64ad.*?>(.*?)</,
									updateTime: /\u66f4\u65b0.*?>(.*?)</,
									playList: /<ul class="juji-list clearfix.*?>(.*?)<\/ul>/
								},
								play: {
									rootUrl: "http:",
									playUrl: /<iframe id="playPath.*?src="(.*?)"/
								}
							},
							meiju22: {
								root_url: "https://www.meiju22.com",
								list: {
									ul: /<ul class="thumbnail-group clearfix">(.*?)<\/ul>/,
									li: /<li>(.*?)<\/li>/g,
									image_src: /data-original="(.*?)"/,
									video_src: /href="(.*?)"/,
									title: /title="(.*?)"/,
									description: /<a href=".*?">(.*?)<\/a>/
								},
								detail: {
									date: /\u53d1\u884c.*?\u5e74\u4efd.*?><a.*?>(.*?)<\/a>.*?<\/p/,
									introduce: /\u5267\u60c5.*label>(.*?)<\/p/,
									director: /\u5bfc\u6f14.*?>(.*?)<\/p/,
									role: /\u4e3b\u6f14.*?>(.*?)<\/li/,
									series: /\u5171(\d+)\u96c6/,
									firstPlay: /\u4e0a\u6620\u65f6\u95f4.*?<span.*?>(.*?)<\/span>/,
									updateTime: /\u66f4\u65b0\u65f6\u95f4.*?>(.*?)</,
									playList: /<ul class="detail-play-list.*?>(.*?)<\/ul>/
								},
								play: {
									rootUrl: "https://www.meiju22.com/ckplayerx/m3u8.php?url=",
									playUrl: /cms_player = \{"yun":true,"url":"(.*?)"/
								}
							},
							wfrmyy: {
								root_url: "http://www.wfrmyy.com",
								list: {
									ul: /<ul class="fed-list-info fed-part-rows">(.*?)<\/ul>/,
									li: /<li class="fed-list-item.*?">(.*?)<\/li>/g,
									image_src: /data-original="(.*?)"/,
									video_src: /href="(.*?)"/,
									title: /<a class="fed-list-title.*?>(.*?)<\/a>/,
									description: /<span class="fed-list-desc.*?>(.*?)<\/span>/
								},
								detail: {
									date: /\u5e74\u4efd\uff1a.*?>(.*?)<\/li>/,
									introduce: /\u7b80\u4ecb.*?>(.*?)</,
									director: /\u5bfc\u6f14\uff1a.*?>(.*?)<\/li>/,
									role: /\u4e3b\u6f14\uff1a.*?>(.*?)<\/li>/,
									series: /\u96c6\u6570.*?>(.*?)</,
									firstPlay: /\u9996\u64ad.*?>(.*?)</,
									updateTime: /\u66f4\u65b0\uff1a.*?>(.*?)<\/li>/,
									playList: /\u64ad\u653e\u96c6\u6570.*?<ul class="fed-part-rows">(.*?)<\/ul>/
								},
								play: {
									rootUrl: "http://www.wfrmyy.com/template/vfed/asset/fed/player.php?id=peer&url=",
									playUrl: /<iframe.*?fed-play-iframe.*src=".*?url=(.*?)">/
								}
							}
						}
					}
					return Object(r.a)(_, [{
						key: "getMovieList",
						value: function(_, e) {
							var a = this.regex[e].list,
								t = this.regex[e].root_url,
								r = _.replace(/(\r|\n|\r\n)/g, " ").match(a.ul)[1].match(a.li);
							return _ = [], r.forEach((function(e) {
								var r = e.match(a.image_src)[1],
									l = t + e.match(a.video_src)[1],
									n = e.match(a.title)[1],
									s = e.match(a.description)[1];
								_.push({
									image_src: r,
									video_src: l,
									title: n,
									description: s
								})
							})), _
						}
					}, {
						key: "getMovieDetail",
						value: function(_, e) {
							_ = _.replace(/(\r|\n|\r\n)/g, " ");
							var a = this.regex[e].detail,
								root_url = this.regex[e].root_url,
								t = {};
							Object.keys(a).forEach((function(e) {
								var r = _.match(a[e]);
								t[e] = r ? r[1].replace(/(<.*?>|&nbsp;)/g, " ") : ""
							}));
							var r = {
								series: ["\u8fd4\u56de"],
								url: []
							};
							return ((_.match(a.playList) || ["", ""])[1].match(/<a .*?>.*?<\/a>/g) || []).forEach((function(_) {
								r.url.push(root_url + _.match(/href="(.*?)"/)[1]), r.series.push(_.match(/<a .*?>(.*?)<\/a/)[1].replace(/([\u4E00-\u9FA5]|HD|BD)/g, ""))
							})), [t, r]
						}
					}, {
						key: "getMoviePlayUrl",
						value: function(_, e) {
							_ = _.replace(/(\r|\n|\r\n|\\)/g, "");
							var a = this.regex[e].play;
							return a.rootUrl + _.match(a.playUrl)[1]
						}
					}]), _
				}());
			e.a = l
		},
		48: function(_, e, a) {
			"use strict";
			a(38);
			var t = a(24),
				r = a.n(t),
				l = (a(39), a(20)),
				n = a.n(l),
				s = a(9),
				i = a(10),
				c = a(14),
				d = a(12),
				o = a(13),
				p = a(0),
				u = a.n(p),
				E = function(_) {
					function e() {
						return Object(s.a)(this, e), Object(c.a)(this, Object(d.a)(e).apply(this, arguments))
					}
					return Object(o.a)(e, _), Object(i.a)(e, [{
						key: "render",
						value: function() {
							var _ = this.props.data,
								e = window.document.querySelector(".tab");
							return e && "\u7535\u5f71" === e.innerText && "\u8fd4\u56de" === _.value[0] ? _.value = ["\u8fd4\u56de", "\u64ad\u653e"] : "\u8fd4\u56de" === _.value.toString() && (_.value = ["\u8fd4\u56de", "\u6682\u65e0\u8d44\u6e90"]), u.a.createElement(r.a, {
								gutter: _.gutter,
								id: "page-".concat(_.PageId, "-row-").concat(_.RowId)
							}, _.value.map((function(e, a) {
								return u.a.createElement(n.a, {
									className: "gutter-row",
									span: _.span
								}, u.a.createElement("div", {
									onClick: _.onclick || function() {},
									className: _.btnClass,
									id: "page-".concat(_.PageId, "-row-").concat(_.RowId, "-btn-").concat(a + 1)
								}, e))
							})))
						}
					}]), e
				}(u.a.Component);
			e.a = E
		},
		68: function(_, e, a) {}
	},
	[
		[109, 1, 2]
	]
]);
//# sourceMappingURL=main.b4cb95ff.chunk.js.map