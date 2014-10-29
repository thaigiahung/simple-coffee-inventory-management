/*! rubix - v1.0.0 - 2014-10-29 [copyright: SketchPixy LLP, email: support@sketchpixy.com] */
(function() {
/*DO NOT MODIFY*/

/*RROUTER*/
var _RTR_=window.RRouter || {};
var Routes =_RTR_.Routes,
    Route=_RTR_.Route,
    Link=_RTR_.Link,
    RoutingContextMixin=_RTR_.RoutingContextMixin;

/*REACTBOOTSTRAP+EXTRAS*/
var _RB32_=window.ReactBootstrap || {};
var Container=_RB32_.Container,
    Grid=_RB32_.Grid,
    Row=_RB32_.Row,
    Col=_RB32_.Col,
    ColMixin=_RB32_.ColMixin,
    Lead=_RB32_.Lead,
    Table=_RB32_.Table,
    Form=_RB32_.Form,
    FormGroup=_RB32_.FormGroup,
    Label=_RB32_.Label,
    Input=_RB32_.Input,
    InputGroup=_RB32_.InputGroup,
    InputGroupAddon=_RB32_.InputGroupAddon,
    InputGroupButton=_RB32_.InputGroupButton,
    Checkbox=_RB32_.Checkbox,
    Radio=_RB32_.Radio,
    Button=_RB32_.Button,
    Textarea=_RB32_.Textarea,
    Select=_RB32_.Select,
    Static=_RB32_.Static,
    Icon=_RB32_.Icon,
    HelpBlock=_RB32_.HelpBlock,
    Img=_RB32_.Img,
    Caret=_RB32_.Caret,
    Dropdown=_RB32_.Dropdown,
    DropdownButton=_RB32_.DropdownButton,
    Menu=_RB32_.Menu,
    MenuItem=_RB32_.MenuItem,
    ButtonGroup=_RB32_.ButtonGroup,
    ButtonToolbar=_RB32_.ButtonToolbar,
    Tab=_RB32_.Tab,
    TabPane=_RB32_.TabPane,
    TabList=_RB32_.TabList,
    TabContent=_RB32_.TabContent,
    TabContainer=_RB32_.TabContainer,
    Nav=_RB32_.Nav,
    NavBar=_RB32_.NavBar,
    NavText=_RB32_.NavText,
    NavLink=_RB32_.NavLink,
    NavItem=_RB32_.NavItem,
    NavForm=_RB32_.NavForm,
    NavBrand=_RB32_.NavBrand,
    NavHeader=_RB32_.NavHeader,
    NavToggle=_RB32_.NavToggle,
    NavButton=_RB32_.NavButton,
    NavContent=_RB32_.NavContent,
    BLink=_RB32_.BLink,
    Breadcrumb=_RB32_.Breadcrumb,
    Page=_RB32_.Page,
    Pager=_RB32_.Pager,
    Pagination=_RB32_.Pagination,
    Badge=_RB32_.Badge,
    BLabel=_RB32_.BLabel,
    Jumbotron=_RB32_.Jumbotron,
    Progress=_RB32_.Progress,
    ProgressGroup=_RB32_.ProgressGroup,
    Media=_RB32_.Media,
    MediaDiv=_RB32_.MediaDiv,
    MediaBody=_RB32_.MediaBody,
    MediaList=_RB32_.MediaList,
    MediaObject=_RB32_.MediaObject,
    MediaHeading=_RB32_.MediaHeading,
    ListGroup=_RB32_.ListGroup,
    ListGroupItem=_RB32_.ListGroupItem,
    ListGroupItemText=_RB32_.ListGroupItemText,
    ListGroupItemHeading=_RB32_.ListGroupItemHeading,
    Well=_RB32_.Well,
    Modal=_RB32_.Modal,
    ModalBody=_RB32_.ModalBody,
    ModalHeader=_RB32_.ModalHeader,
    ModalFooter=_RB32_.ModalFooter,
    ModalManager=_RB32_.ModalManager,
    Panel=_RB32_.Panel,
    PanelBody=_RB32_.PanelBody,
    PanelHeader=_RB32_.PanelHeader,
    PanelFooter=_RB32_.PanelFooter,
    PanelLeft=_RB32_.PanelLeft,
    PanelRight=_RB32_.PanelRight,
    PanelContainer=_RB32_.PanelContainer,
    LoremIpsum=_RB32_.LoremIpsum,
    TimelineView=_RB32_.TimelineView,
    TimelineItem=_RB32_.TimelineItem,
    TimelineHeader=_RB32_.TimelineHeader,
    TimelineIcon=_RB32_.TimelineIcon,
    TimelineAvatar=_RB32_.TimelineAvatar,
    TimelineTitle=_RB32_.TimelineTitle,
    TimelineBody=_RB32_.TimelineBody,
    Accordian=_RB32_.Accordian,
    AccordianPane=_RB32_.AccordianPane,
    AccordianTitle=_RB32_.AccordianTitle,
    AccordianContent=_RB32_.AccordianContent,
    IonTabContainer=_RB32_.IonTabContainer,
    IonTabHead=_RB32_.IonTabHead,
    IonTabBody=_RB32_.IonTabBody,
    IonTab=_RB32_.IonTab,
    IonTabItem=_RB32_.IonTabItem,
    PricingTable=_RB32_.PricingTable,
    PricingFeature=_RB32_.PricingFeature,
    PricingTableBody=_RB32_.PricingTableBody,
    PricingTablePrice=_RB32_.PricingTablePrice,
    PricingTableHeader=_RB32_.PricingTableHeader,
    PricingTableContainer=_RB32_.PricingTableContainer,
    PricingButtonContainer=_RB32_.PricingButtonContainer,
    Alert=_RB32_.Alert,
    AlertLink=_RB32_.AlertLink,
    Tag=_RB32_.Tag,
    Sidebar=_RB32_.Sidebar,
    SidebarNav=_RB32_.SidebarNav,
    SidebarBtn=_RB32_.SidebarBtn,
    SidebarMixin=_RB32_.SidebarMixin,
    SidebarNavItem=_RB32_.SidebarNavItem,
    SidebarControls=_RB32_.SidebarControls,
    SidebarControlBtn=_RB32_.SidebarControlBtn,
    TransitionEndEvent='webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

/*L20N*/
var _RL20n_=window.ReactL20n;
var l20n=_RL20n_.l20n,
    Entity=_RL20n_.Entity;

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	'use strict';

	/* Initialize Locales */
	l20n.initializeLocales('app', {
	  'locales': ['en-US'],
	  'default': 'en-US'
	});

	/* Initializing touch events */
	React.initializeTouchEvents(true);

	/* APP PAGES */
	var blank = __webpack_require__(1);

	/* HÀNG HÓA */
	var product = __webpack_require__(2);
	var inventory = __webpack_require__(3);

	/* ROUTES */
	var routes = (
	  Routes(null, 
	    Route({name: "root", path: "/", view: blank}, 
	      Route({name: "app", path: "app"}, 
	        Route({name: "products", path: "products"}, 
	          Route({name: "product", path: "product", view: product}), 
	          Route({name: "inventory", path: "inventory", view: inventory})
	        )
	      )
	    )
	  )
	);

	Pace.once('hide', function() {
	  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
	});

	var InitializeRouter = function(View) {
	  // cleanup
	  if(window.Rubix) window.Rubix.Cleanup();
	  Pace.restart();
	  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {
	    window.ga('send', 'pageview', {
	     'page': window.location.pathname + window.location.search  + window.location.hash
	    });
	  }

	  React.renderComponent(View(null), document.getElementById('app-container'), function() {
	    // l20n initialized only after everything is rendered/updated
	    l20n.ready();
	    setTimeout(function() {
	      $('body').removeClass('fade-out');
	    }, 500);
	  });
	};

	RRouter.routing = RRouter.HashRouting.start(routes, InitializeRouter);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(4);
	var Sidebar = __webpack_require__(5);
	var Footer = __webpack_require__(6);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 12}, 
	              PanelContainer(null, 
	                Panel(null, 
	                  PanelBody({className: "text-center"}, 
	                    React.DOM.p(null, "BLANK PAGE")
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var Page = React.createClass({displayName: 'Page',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = React.addons.classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes}, 
	        Sidebar(null), 
	        Header(null), 
	        Body(null, 
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Page;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(4);
	var Sidebar = __webpack_require__(5);
	var Footer = __webpack_require__(6);

	var EmployeeRow = React.createClass({displayName: 'EmployeeRow',
	  onClick: function(id) {
	    this.props.toggle(id);
	  },
	  render: function() {
	    var aName="name" + this.props.id;
	    var aPos="pos" + this.props.id;
	    var aOffice="office" + this.props.id;
	    var aAge="age" + this.props.id;
	    var aStart="start" + this.props.id;
	    var aSalary="salary" + this.props.id;
	    var btnName="btnUpdate" + this.props.id;
	    return (
	        React.DOM.tr({id: this.props.id}, 
	          React.DOM.td(null, 
	            Link({href: "#", id: aName, key: this.props.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, 
	              this.props.name
	            )
	          ), 
	          React.DOM.td(null, 
	            Link({href: "#", id: aPos, key: this.props.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, 
	              this.props.pos
	            )
	          ), 
	          React.DOM.td(null, 
	            Link({href: "#", id: aOffice, key: this.props.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, 
	              this.props.office
	            )
	          ), 
	          React.DOM.td(null, 
	            Link({href: "#", id: aAge, key: this.props.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, 
	              this.props.age
	            )
	          ), 
	          React.DOM.td(null, 
	            Link({href: "#", id: aStart, key: this.props.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, 
	              this.props.start
	            )
	          ), 
	          React.DOM.td(null, 
	            Link({href: "#", id: aSalary, key: this.props.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, 
	              this.props.salary
	            )
	          ), 
	          React.DOM.td(null, 
	            Button({id: btnName, outlined: true, bsStyle: "green", onClick: this.onClick.bind(this, this.props.id)}, "Sửa")
	          )
	        )
	    );
	  }
	});

	var CategoryRow = React.createClass({displayName: 'CategoryRow',
	  render: function() {
	    return (
	        React.DOM.option({value: this.props.id}, this.props.name)
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  mixins: [RoutingContextMixin],
	  statics: {
	    counter: 0,
	    getCounter: function() {
	      return 'counter-' + ++Body.counter;
	    }
	  },
	  getInitialState: function() {
	    return {
	      old_id: 0,
	      mode: 'inline',
	      refresh: Body.getCounter() // used to redraw the component
	    };
	  },
	  renderEditable: function() {
	    $('.xeditable').editable({
	      mode: this.state.mode
	    });

	    //Mặc định là disable toàn bộ editatble, khi muốn Edit thì bấm nút Sửa
	    $('.xeditable').editable('disable');
	    
	  },
	  toggleEditable: function(id) {
	    if(this.state.old_id === 0)
	    {
	      $('#'+id+' .editable').editable('toggleDisabled');
	      //Lưu lại id đang được chọn
	      this.setState({old_id: id});      
	    }
	    else if(this.state.old_id === id) //Nếu id được chọn = id cũ nghĩa là click lần 2 (tắt chức năng sửa)
	    {
	      $('#'+id+' .editable').editable('toggleDisabled');
	      this.setState({old_id: 0}); 

	      //TODO: Gọi API update
	      var name = $('#name'+id).text();
	      var pos = $('#pos'+id).text();
	      var office = $('#office'+id).text();
	      var age = $('#age'+id).text();
	      var start = $('#start'+id).text();
	      var salary = $('#salary'+id).text();
	      console.log(name);
	      console.log(pos);
	      console.log(office);
	      console.log(age);
	      console.log(start);
	      console.log(salary);
	    }    
	  },
	  addCategory: function() {
	    vex.dialog.prompt({
	      message: 'Loại sản phẩm',
	      placeholder: 'Tên loại',
	      callback: function(value) {
	        vex.dialog.alert('Callback value: <b>'+value+'</b>');

	        //TODO: gọi API tạo category
	      }
	    });
	  },
	  addProduct: function() {
	    vex.dialog.open({
	      message: 'Nhập thông tin sản phẩm:',
	      input: '' +
	          '<input name="name" type="text" placeholder="Tên" required />' +
	          '<input name="pos" type="text" placeholder="Vị trí" required />' +
	          '<input name="office" type="text" placeholder="Văn phòng" required />' +
	          '<input name="age" type="text" placeholder="Tuổi" required />' +
	          '<input name="start" type="date" placeholder="Ngày bắt đầu" required />' +
	          '<input name="salary" type="text" placeholder="Lương" required />' +
	      '',
	      buttons: [
	          $.extend({}, vex.dialog.buttons.YES, { text: 'Đồng ý' }),
	          $.extend({}, vex.dialog.buttons.NO, { text: 'Hủy bỏ' })
	      ],
	      callback: function (data) {
	        vex.dialog.alert('Tên: ' + data.name + ' Ngày: ' + data.start);

	        //TODO: Gọi API tạo sản phẩm
	      }
	    });
	  },
	  componentDidMount: function() {
	    this.renderEditable();

	    $('#example')
	      .addClass('nowrap')
	      .dataTable({
	        responsive: true,
	        columnDefs: [
	          { targets: [-1, -3], className: 'dt-body-right' }
	        ]
	    });
	  },
	  onClick: function () {
	    var checkedState = this.refs.cat.getChecked();
	        console.log(checkedState === true);

	    var checkedState = this.refs.cat1.getChecked();
	            console.log(checkedState === true);

	    var checkedState = this.refs.display.getChecked();
	        console.log(checkedState === true);

	    var checkedState = this.refs.display1.getChecked();
	            console.log(checkedState === true);

	    var checkedState = this.refs.display2.getChecked();
	            console.log(checkedState === true);
	  },
	  render: function() {
	    var rows = [];
	    var refresh = this.state.refresh;
	    var toggle = this.toggleEditable;
	    this.props.employees.forEach(function(item) { 
	      rows.push(EmployeeRow({toggle: toggle, refresh: refresh, id: item.id, name: item.name, pos: item.pos, office: item.office, age: item.age, start: item.start, salary: item.salary, key: item.id}));
	    });

	    var categories = [];
	    this.props.categories.forEach(function(item) {
	      categories.push(CategoryRow({id: item.id, name: item.name}));
	    });
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 6}, 
	              PanelContainer({noOverflow: true, controlStyles: "bg-green fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-green fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, 
	                            "Sản phẩm"
	                          )
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 6}, 
	                          Form(null, 
	                            FormGroup(null, 
	                              React.DOM.h4(null, "Loại sản phẩm"), 
	                              Button({bsStyle: "green", outlined: true, onClick: this.addCategory}, 
	                                "Thêm"
	                              ), 
	                              Select({id: "dropdownselect", defaultValue: "1"}, 
	                                categories
	                              )
	                            )
	                          )
	                        ), 

	                        Col({xs: 6}, 
	                          Form(null, 
	                            FormGroup(null, 
	                              React.DOM.h4(null, "Thêm mới"), 
	                              Button({bsStyle: "green", outlined: true, onClick: this.addProduct}, 
	                                "Thêm"
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ), 

	            Col({sm: 6}, 
	              PanelContainer({noOverflow: true, controlStyles: "bg-green fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-green fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, "Bộ lọc")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 6}, 
	                          Form(null, 
	                            FormGroup(null, 
	                              React.DOM.h4(null, "Bộ lọc 1"), 
	                              Radio({value: "option1", defaultChecked: true, name: "radio-options"}, 
	                                "Option 1"
	                              ), 
	                              Radio({value: "option2", name: "radio-options"}, 
	                                "Option 2"
	                              ), 
	                              Radio({value: "option3", disabled: true, name: "radio-options"}, 
	                                "Option disabled"
	                              )
	                            )
	                          )
	                        ), 

	                        Col({xs: 6}, 
	                          Form(null, 
	                            FormGroup(null, 
	                              React.DOM.h4(null, "Bộ lọc 2"), 
	                              Radio({value: "option1", defaultChecked: true, name: "radio-options"}, 
	                                "Option 1"
	                              ), 
	                              Radio({value: "option2", name: "radio-options"}, 
	                                "Option 2"
	                              ), 
	                              Radio({value: "option3", disabled: true, name: "radio-options"}, 
	                                "Option disabled"
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ), 

	            Col({xs: 12}, 
	              PanelContainer(null, 
	                Panel(null, 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          Table({id: "example", className: "display", cellSpacing: "0", width: "100%"}, 
	                            React.DOM.thead(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.th(null, "Name"), 
	                                React.DOM.th(null, "Position"), 
	                                React.DOM.th(null, "Office"), 
	                                React.DOM.th(null, "Age"), 
	                                React.DOM.th(null, "Start date"), 
	                                React.DOM.th(null, "Salary"), 
	                                React.DOM.th(null)
	                              )
	                            ), 
	                            React.DOM.tfoot(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.th(null, "Name"), 
	                                React.DOM.th(null, "Position"), 
	                                React.DOM.th(null, "Office"), 
	                                React.DOM.th(null, "Age"), 
	                                React.DOM.th(null, "Start date"), 
	                                React.DOM.th(null, "Salary"), 
	                                React.DOM.th(null)
	                              )
	                            ), 
	                            React.DOM.tbody(null, 
	                              rows
	                            )
	                          ), 
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Page = React.createClass({displayName: 'Page',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes}, 
	        Sidebar(null), 
	        Header(null), 
	        Body({categories: CATEGORIES, employees: EMPLOYEES}, 
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	var CATEGORIES = [
	  {id: '1', name: 'Cafe'},
	  {id: '2', name: 'Sinh tố'},
	  {id: '3', name: 'Nước giải khát'},
	  {id: '4', name: 'Thuốc độc'}
	];

	var EMPLOYEES = [
	  {id: '1', name: 'Airi Satou', pos: 'Accountant', office: 'Tokyo', age: '33', start: '2008/11/28', salary: '$162,700'},
	  {id: '2', name: 'Angelica Ramos', pos: 'Chief Executive Officer (CEO)', office: 'London', age: '47', start: '2009/10/09', salary: '$1,200,000'},
	  {id: '3', name: 'Ashton Cox', pos: 'Junior Technical Author', office: 'San Francisco', age: '66', start: '2009/01/12', salary: '$86,000'},
	  {id: '4', name: 'Bradley Greer', pos: 'Software Engineer', office: 'London', age: '41', start: '2012/10/13', salary: '$132,000'},
	  {id: '5', name: 'Brenden Wagner', pos: 'Software Engineer', office: 'San Francisco', age: '28', start: '2011/06/07', salary: '$206,850'},
	  {id: '6', name: 'Brielle Williamson', pos: 'Integration Specialist', office: 'New York', age: '37', start: '2012/12/02', salary: '$372,000'},
	  {id: '7', name: 'Bruno Nash', pos: 'Software Engineer', office: 'London', age: '57', start: '2011/05/03', salary: '$163,500'},
	  {id: '8', name: 'Caesar Vance', pos: 'Pre-Sales Support', office: 'New York', age: '38', start: '2011/12/12', salary: '$106,450'},
	  {id: '9', name: 'Cara Stevens', pos: 'Sales Assistant', office: 'New York', age: '47', start: '2011/12/06', salary: '$145,600'},
	  {id: '10', name: 'Cedric Kelly', pos: 'Senior Javascript Developer', office: 'Edinburgh', age: '24', start: '2012/03/29', salary: '$433,060'},
	  {id: '11', name: 'Donna Snider', pos: 'Customer Support', office: 'New York', age: '64', start: '2011/01/25', salary: '$112,000'},
	  {id: '12', name: 'Finn Camacho', pos: 'Customer Support', office: 'Tokyo', age: '36', start: '', salary: '$85,600'},
	  {id: '13', name: 'Gavin Joyce', pos: 'Accountant', office: 'San Francisco', age: '28', start: '', salary: '$850,000'},
	  {id: '14', name: 'Fiona Green', pos: 'Customer Support', office: 'London', age: '34', start: '', salary: '$170,750'}
	];

	module.exports = Page;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(4);
	var Sidebar = __webpack_require__(5);
	var Footer = __webpack_require__(6);

	var EmployeeRow = React.createClass({displayName: 'EmployeeRow',
	  onClick: function(id) {
	    this.props.toggle(id);
	  },
	  render: function() {
	    var aName="name" + this.props.id;
	    var aPos="pos" + this.props.id;
	    var aOffice="office" + this.props.id;
	    var aAge="age" + this.props.id;
	    var aStart="start" + this.props.id;
	    var aSalary="salary" + this.props.id;
	    var btnName="btnUpdate" + this.props.id;
	    return (
	        React.DOM.tr({id: this.props.id}, 
	          React.DOM.td(null, 
	            Link({href: "#", id: aName, key: this.props.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, 
	              this.props.name
	            )
	          ), 
	          React.DOM.td(null, 
	            Link({href: "#", id: aPos, key: this.props.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, 
	              this.props.pos
	            )
	          ), 
	          React.DOM.td(null, 
	            Link({href: "#", id: aOffice, key: this.props.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, 
	              this.props.office
	            )
	          ), 
	          React.DOM.td(null, 
	            Link({href: "#", id: aAge, key: this.props.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, 
	              this.props.age
	            )
	          ), 
	          React.DOM.td(null, 
	            Link({href: "#", id: aStart, key: this.props.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, 
	              this.props.start
	            )
	          ), 
	          React.DOM.td(null, 
	            Link({href: "#", id: aSalary, key: this.props.refresh, className: "xeditable", 'data-type': "text", 'data-title': "Enter username"}, 
	              this.props.salary
	            )
	          ), 
	          React.DOM.td(null, 
	            Button({id: btnName, outlined: true, bsStyle: "green", onClick: this.onClick.bind(this, this.props.id)}, "Sửa")
	          )
	        )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  mixins: [RoutingContextMixin],
	  statics: {
	    counter: 0,
	    getCounter: function() {
	      return 'counter-' + ++Body.counter;
	    }
	  },
	  getInitialState: function() {
	    return {
	      old_id: 0,
	      mode: 'inline',
	      refresh: Body.getCounter() // used to redraw the component
	    };
	  },
	  renderEditable: function() {
	    $('.xeditable').editable({
	      mode: this.state.mode
	    });

	    //Mặc định là disable toàn bộ editatble, khi muốn Edit thì bấm nút Sửa
	    $('.xeditable').editable('disable');
	    
	  },
	  toggleEditable: function(id) {
	    if(this.state.old_id === 0)
	    {
	      $('#'+id+' .editable').editable('toggleDisabled');
	      //Lưu lại id đang được chọn
	      this.setState({old_id: id});      
	    }
	    else if(this.state.old_id === id) //Nếu id được chọn = id cũ nghĩa là click lần 2 (tắt chức năng sửa)
	    {
	      $('#'+id+' .editable').editable('toggleDisabled');
	      this.setState({old_id: 0}); 

	      //TODO: Gọi API update
	      var name = $('#name'+id).text();
	      var pos = $('#pos'+id).text();
	      var office = $('#office'+id).text();
	      var age = $('#age'+id).text();
	      var start = $('#start'+id).text();
	      var salary = $('#salary'+id).text();
	      console.log(name);
	      console.log(pos);
	      console.log(office);
	      console.log(age);
	      console.log(start);
	      console.log(salary);
	    }    
	  },
	  componentDidMount: function() {
	    this.renderEditable();

	    $('#example')
	      .addClass('nowrap')
	      .dataTable({
	        responsive: true,
	        columnDefs: [
	          { targets: [-1, -3], className: 'dt-body-right' }
	        ]
	    });
	  },
	  onClick: function () {
	    var checkedState = this.refs.cat.getChecked();
	        console.log(checkedState === true);

	    var checkedState = this.refs.cat1.getChecked();
	            console.log(checkedState === true);

	    var checkedState = this.refs.display.getChecked();
	        console.log(checkedState === true);

	    var checkedState = this.refs.display1.getChecked();
	            console.log(checkedState === true);

	    var checkedState = this.refs.display2.getChecked();
	            console.log(checkedState === true);
	  },
	  render: function() {
	    var rows = [];
	    var refresh = this.state.refresh;
	    var toggle = this.toggleEditable;
	    this.props.employees.forEach(function(item) { 
	      rows.push(EmployeeRow({toggle: toggle, refresh: refresh, id: item.id, name: item.name, pos: item.pos, office: item.office, age: item.age, start: item.start, salary: item.salary, key: item.id}));
	    });
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({sm: 3}, 
	              PanelContainer({noOverflow: true, controlStyles: "bg-green fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-green fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, "Loại hàng hóa")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          Form(null, 
	                            FormGroup(null, 
	                              Checkbox({value: "option1", onClick: this.onClick, name: "checkbox-options", ref: "cat"}, 
	                                "Hàng nhập về"
	                              ), 
	                              Checkbox({value: "option2", onClick: this.onClick, defaultChecked: true, name: "checkbox-options", ref: "cat1"}, 
	                                "Hàng dịch vụ"
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ), 

	            Col({sm: 3}, 
	              PanelContainer({noOverflow: true, controlStyles: "bg-green fg-white"}, 
	                Panel(null, 
	                  PanelHeader({className: "bg-green fg-white"}, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3(null, "Lựa chọn hiển thị")
	                        )
	                      )
	                    )
	                  ), 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          Form(null, 
	                            FormGroup(null, 
	                              Radio({value: "option1", onClick: this.onClick, defaultChecked: true, name: "radio-options", ref: "display"}, 
	                                "Option 1"
	                              ), 
	                              Radio({value: "option2", onClick: this.onClick, name: "radio-options", ref: "display1"}, 
	                                "Option 2"
	                              ), 
	                              Radio({value: "option3", onClick: this.onClick, disabled: true, name: "radio-options", ref: "display2"}, 
	                                "Option disabled"
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            ), 

	            Col({xs: 12}, 
	              PanelContainer(null, 
	                Panel(null, 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          Table({id: "example", className: "display", cellSpacing: "0", width: "100%"}, 
	                            React.DOM.thead(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.th(null, "Name"), 
	                                React.DOM.th(null, "Position"), 
	                                React.DOM.th(null, "Office"), 
	                                React.DOM.th(null, "Age"), 
	                                React.DOM.th(null, "Start date"), 
	                                React.DOM.th(null, "Salary"), 
	                                React.DOM.th(null)
	                              )
	                            ), 
	                            React.DOM.tfoot(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.th(null, "Name"), 
	                                React.DOM.th(null, "Position"), 
	                                React.DOM.th(null, "Office"), 
	                                React.DOM.th(null, "Age"), 
	                                React.DOM.th(null, "Start date"), 
	                                React.DOM.th(null, "Salary"), 
	                                React.DOM.th(null)
	                              )
	                            ), 
	                            React.DOM.tbody(null, 
	                              rows
	                            )
	                          ), 
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Page = React.createClass({displayName: 'Page',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes}, 
	        Sidebar(null), 
	        Header(null), 
	        Body({employees: EMPLOYEES}, 
	          Footer(null)
	        )
	      )
	    );
	  }
	});


	var EMPLOYEES = [
	  {id: '1', name: 'Airi Satou', pos: 'Accountant', office: 'Tokyo', age: '33', start: '2008/11/28', salary: '$162,700'},
	  {id: '2', name: 'Angelica Ramos', pos: 'Chief Executive Officer (CEO)', office: 'London', age: '47', start: '2009/10/09', salary: '$1,200,000'},
	  {id: '3', name: 'Ashton Cox', pos: 'Junior Technical Author', office: 'San Francisco', age: '66', start: '2009/01/12', salary: '$86,000'},
	  {id: '4', name: 'Bradley Greer', pos: 'Software Engineer', office: 'London', age: '41', start: '2012/10/13', salary: '$132,000'},
	  {id: '5', name: 'Brenden Wagner', pos: 'Software Engineer', office: 'San Francisco', age: '28', start: '2011/06/07', salary: '$206,850'},
	  {id: '6', name: 'Brielle Williamson', pos: 'Integration Specialist', office: 'New York', age: '37', start: '2012/12/02', salary: '$372,000'},
	  {id: '7', name: 'Bruno Nash', pos: 'Software Engineer', office: 'London', age: '57', start: '2011/05/03', salary: '$163,500'},
	  {id: '8', name: 'Caesar Vance', pos: 'Pre-Sales Support', office: 'New York', age: '38', start: '2011/12/12', salary: '$106,450'},
	  {id: '9', name: 'Cara Stevens', pos: 'Sales Assistant', office: 'New York', age: '47', start: '2011/12/06', salary: '$145,600'},
	  {id: '10', name: 'Cedric Kelly', pos: 'Senior Javascript Developer', office: 'Edinburgh', age: '24', start: '2012/03/29', salary: '$433,060'},
	  {id: '11', name: 'Donna Snider', pos: 'Customer Support', office: 'New York', age: '64', start: '2011/01/25', salary: '$112,000'},
	  {id: '12', name: 'Finn Camacho', pos: 'Customer Support', office: 'Tokyo', age: '36', start: '', salary: '$85,600'},
	  {id: '13', name: 'Gavin Joyce', pos: 'Accountant', office: 'San Francisco', age: '28', start: '', salary: '$850,000'},
	  {id: '14', name: 'Fiona Green', pos: 'Customer Support', office: 'London', age: '34', start: '', salary: '$170,750'}
	];

	module.exports = Page;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Brand = React.createClass({displayName: 'Brand',
	  render: function() {
	    return this.transferPropsTo(
	      NavHeader(null, 
	        NavBrand({tabIndex: "-1"}, 
	          React.DOM.img({src: "/imgs/logo.png", alt: "rubix", width: "111", height: "28"})
	        )
	      )
	    );
	  }
	});

	var Navigation = React.createClass({displayName: 'Navigation',
	  render: function() {
	    return this.transferPropsTo(
	      NavContent({className: "pull-right"}, 
	        Nav(null, 
	          NavItem({className: "logout", href: "#"}, 
	            Icon({bundle: "fontello", glyph: "off-1"})
	          )
	        )
	      )
	    );
	  }  
	});

	var Header = React.createClass({displayName: 'Header',
	  render: function() {
	    return this.transferPropsTo(
	      Grid({id: "navbar"}, 
	        Row(null, 
	          Col({xs: 12}, 
	            NavBar({fixedTop: true, id: "rubix-nav-header"}, 
	              Container({fluid: true}, 
	                Row(null, 
	                  Col({xs: 3, visible: "xs"}, 
	                    SidebarBtn(null)
	                  ), 
	                  Col({xs: 6, sm: 4}, 
	                    Brand(null)
	                  ), 
	                  Col({xs: 3, sm: 8}, 
	                    Navigation(null)
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Header;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var ApplicationSidebar = React.createClass({displayName: 'ApplicationSidebar',
	  render: function() {
	    return (
	      React.DOM.div(null, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div({className: "sidebar-header"}, "PAGES"), 
	              React.DOM.div({className: "sidebar-nav-container"}, 
	                SidebarNav({style: {marginBottom: 0}}, 
	                  SidebarNavItem({glyph: "icon-fontello-gauge", name: "Blank", href: "/"}), 
	                  SidebarNavItem({glyph: "icon-feather-inbox", name: "Tổng quan", href: "#"}), 
	                  SidebarNavItem({glyph: "icon-outlined-mail-open", name: "Hàng hóa"}, 
	                    SidebarNav(null, 
	                      SidebarNavItem({glyph: "icon-feather-inbox", name: "Danh mục", href: "/app/products/product"}), 
	                      SidebarNavItem({glyph: "icon-dripicons-message", name: "Kiểm kho", href: "/app/products/inventory"})
	                    )
	                  ), 
	                  SidebarNavItem({glyph: "icon-dripicons-message", name: "Giao dịch"}, 
	                    SidebarNav(null, 
	                      SidebarNavItem({glyph: "icon-feather-inbox", name: "Hóa đơn", href: "#"}), 
	                      SidebarNavItem({glyph: "icon-outlined-mail-open", name: "Trả hàng", href: "#"}), 
	                      SidebarNavItem({glyph: "icon-dripicons-message", name: "Nhập hàng", href: "#"}), 
	                      SidebarNavItem({glyph: "icon-outlined-mail-open", name: "Trả hàng nhập", href: "#"}), 
	                      SidebarNavItem({glyph: "icon-dripicons-message", name: "Chuyển hàng", href: "#"})
	                    )
	                  ), 
	                  SidebarNavItem({glyph: "icon-outlined-mail-open", name: "Đối tác"}, 
	                    SidebarNav(null, 
	                      SidebarNavItem({glyph: "icon-feather-inbox", name: "Khách hàng", href: "#"}), 
	                      SidebarNavItem({glyph: "icon-outlined-mail-open", name: "Nhà cung cấp", href: "#"})
	                    )
	                  ), 
	                  SidebarNavItem({glyph: "icon-dripicons-message", name: "Sổ quỹ", href: "#"}), 
	                  SidebarNavItem({glyph: "icon-dripicons-message", name: "Báo cáo"}, 
	                    SidebarNav(null, 
	                      SidebarNavItem({glyph: "icon-feather-inbox", name: "Bán hàng", href: "#"}), 
	                      SidebarNavItem({glyph: "icon-outlined-mail-open", name: "Hàng hóa", href: "#"}), 
	                      SidebarNavItem({glyph: "icon-dripicons-message", name: "Tài chính", href: "#"}), 
	                      SidebarNavItem({glyph: "icon-outlined-mail-open", name: "Công nợ", href: "#"}), 
	                      SidebarNavItem({glyph: "icon-dripicons-message", name: "Cuối ngày", href: "#"})
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var DummySidebar = React.createClass({displayName: 'DummySidebar',
	  render: function() {
	    return (
	      Grid(null, 
	        Row(null, 
	          Col({xs: 12}, 
	            React.DOM.div({className: "sidebar-header"}, "DUMMY SIDEBAR"), 
	            LoremIpsum({query: "1p"})
	          )
	        )
	      )
	    );
	  }
	});

	var SidebarSection = React.createClass({displayName: 'SidebarSection',
	  render: function() {
	    return this.transferPropsTo(
	      React.DOM.div({id: "sidebar"}, 
	        React.DOM.div({id: "avatar"}, 
	          Grid(null, 
	            Row({className: "fg-white"}, 
	              Col({xs: 4, collapseRight: true}, 
	                React.DOM.img({src: "/imgs/avatars/avatar0.png", width: "40", height: "40"})
	              ), 
	              Col({xs: 8, collapseLeft: true, id: "avatar-col"}, 
	                React.DOM.div({style: {top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}, "Anna Sanchez"), 
	                React.DOM.div(null, 
	                  Progress({id: "demo-progress", value: 30, min: 0, max: 100, color: "#ffffff"}), 
	                  Link({href: "#"}, Icon({id: "demo-icon", bundle: "fontello", glyph: "lock-5"}))
	                )
	              )
	            )
	          )
	        ), 
	        SidebarControls(null, 
	          SidebarControlBtn({bundle: "fontello", glyph: "docs", key: 0}), 
	          SidebarControlBtn({bundle: "fontello", glyph: "chat-1", key: 1}), 
	          SidebarControlBtn({bundle: "fontello", glyph: "chart-pie-2", key: 2}), 
	          SidebarControlBtn({bundle: "fontello", glyph: "th-list-2", key: 3}), 
	          SidebarControlBtn({bundle: "fontello", glyph: "bell-5", key: 4})
	        ), 
	        React.DOM.div({id: "sidebar-container"}, 
	          Sidebar({key: 0, active: true}, 
	            ApplicationSidebar(null)
	          ), 
	          Sidebar({key: 1}, 
	            DummySidebar(null)
	          ), 
	          Sidebar({key: 2}, 
	            DummySidebar(null)
	          ), 
	          Sidebar({key: 3}, 
	            DummySidebar(null)
	          ), 
	          Sidebar({key: 4}, 
	            DummySidebar(null)
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = SidebarSection;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Footer = React.createClass({displayName: 'Footer',
	  getInitialState: function() {
	    return {
	      version: 0
	    };
	  },
	  componentDidMount: function() {
	    this.setState({
	      version: document.getElementsByTagName('body')[0].getAttribute('data-version')
	    });
	  },
	  render: function() {
	    return (
	      React.DOM.div(null, 
	        Grid({gutterBottom: true}), 
	        Grid({id: "footer", className: "text-center"}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div(null, "© 2014 Your Company Name Here - v", this.state.version)
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Footer;


/***/ }
/******/ ])
})();