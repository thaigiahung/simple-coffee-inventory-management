/** @jsx React.DOM */

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var EmployeeRow = React.createClass({
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
        <tr id={this.props.id}>
          <td>
            <Link href='#' id={aName} key={this.props.refresh} className='xeditable' data-type='text' data-title='Enter username'>
              {this.props.name}
            </Link>
          </td>
          <td>
            <Link href='#' id={aPos} key={this.props.refresh} className='xeditable' data-type='text' data-title='Enter username'>
              {this.props.pos}
            </Link>
          </td>
          <td>
            <Link href='#' id={aOffice} key={this.props.refresh} className='xeditable' data-type='text' data-title='Enter username'>
              {this.props.office}
            </Link>
          </td>
          <td>
            <Link href='#' id={aAge} key={this.props.refresh} className='xeditable' data-type='text' data-title='Enter username'>
              {this.props.age}
            </Link>
          </td>
          <td>
            <Link href='#' id={aStart} key={this.props.refresh} className='xeditable' data-type='text' data-title='Enter username'>
              {this.props.start}
            </Link>
          </td>
          <td>
            <Link href='#' id={aSalary} key={this.props.refresh} className='xeditable' data-type='text' data-title='Enter username'>
              {this.props.salary}
            </Link>
          </td>
          <td>
            <Button id={btnName} outlined bsStyle='green' onClick={this.onClick.bind(this, this.props.id)}>Sửa</Button>
          </td>
        </tr>
    );
  }
});

var Body = React.createClass({
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
      rows.push(<EmployeeRow toggle={toggle} refresh={refresh} id={item.id} name={item.name} pos={item.pos} office={item.office} age={item.age} start={item.start} salary={item.salary} key={item.id}/>);
    });
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={3}>
              <PanelContainer noOverflow controlStyles='bg-green fg-white'>
                <Panel>
                  <PanelHeader className='bg-green fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Loại hàng hóa</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Form>                            
                            <FormGroup>
                              <Checkbox value='option1' onClick={this.onClick} name='checkbox-options' ref='cat'>
                                Hàng nhập về
                              </Checkbox>
                              <Checkbox value='option2' onClick={this.onClick} defaultChecked name='checkbox-options' ref='cat1'>
                                Hàng dịch vụ
                              </Checkbox>
                            </FormGroup>
                          </Form>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>

            <Col sm={3}>
              <PanelContainer noOverflow controlStyles='bg-green fg-white'>
                <Panel>
                  <PanelHeader className='bg-green fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Lựa chọn hiển thị</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Form>
                            <FormGroup>
                              <Radio value='option1' onClick={this.onClick} defaultChecked name='radio-options' ref="display">
                                Option 1
                              </Radio>
                              <Radio value='option2' onClick={this.onClick} name='radio-options' ref="display1">
                                Option 2
                              </Radio>
                              <Radio value='option3' onClick={this.onClick} disabled name='radio-options' ref="display2">
                                Option disabled
                              </Radio>
                            </FormGroup>
                          </Form>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>

            <Col xs={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Table id='example' className='display' cellSpacing='0' width='100%'>
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tfoot>
                              <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                <th></th>
                              </tr>
                            </tfoot>
                            <tbody>
                              {rows}
                            </tbody>
                          </Table>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        {this.props.children}
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Page = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = classSet({
      'container-open': this.state.open
    });
    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body employees={EMPLOYEES}>
          <Footer />
        </Body>
      </Container>
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
