/** @jsx React.DOM */

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var ChartContainer = React.createClass({
  render: function() {
    return (
      <PanelContainer noOverflow>
        <Panel>
          <PanelBody style={{padding: 25}} className='text-center'>
            <h4>{this.props.name}</h4>
            <div id={this.props.id}></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
});

var Body = React.createClass({
  componentDidMount: function() {
    (function() {
      // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
      var tax_data = [
           {"period": "2011 Q3", "licensed": 3407, "sorned": 660},
           {"period": "2011 Q2", "licensed": 3351, "sorned": 629},
           {"period": "2011 Q1", "licensed": 3269, "sorned": 618},
           {"period": "2010 Q4", "licensed": 3246, "sorned": 661},
           {"period": "2009 Q4", "licensed": 3171, "sorned": 676},
           {"period": "2008 Q4", "licensed": 3155, "sorned": 681},
           {"period": "2007 Q4", "licensed": 3226, "sorned": 620},
           {"period": "2006 Q4", "licensed": 3245, "sorned": null},
           {"period": "2005 Q4", "licensed": 3289, "sorned": null}
      ];
      Morris.Line({
        element: 'hero-graph',
        data: tax_data,
        xkey: 'period',
        ykeys: ['licensed', 'sorned'],
        labels: ['Licensed', 'Off the road']
      });

      Morris.Donut({
        element: 'hero-donut',
        data: [
          {label: 'Jam', value: 25 },
          {label: 'Frosted', value: 40 },
          {label: 'Custard', value: 25 },
          {label: 'Sugar', value: 10 }
        ],
        formatter: function (y) { return y + "%" }
      });

      Morris.Area({
        element: 'hero-area',
        data: [
          {period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647},
          {period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
          {period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
          {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
          {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
          {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
          {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
          {period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
          {period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
          {period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
        ],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto'
      });

      Morris.Bar({
        element: 'hero-bar',
        data: [
          {device: 'iPhone', geekbench: 136},
          {device: 'iPhone 3G', geekbench: 137},
          {device: 'iPhone 3GS', geekbench: 275},
          {device: 'iPhone 4', geekbench: 380},
          {device: 'iPhone 4S', geekbench: 655},
          {device: 'iPhone 5', geekbench: 1571}
        ],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto'
      });
    })();
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={6} collapseRight>
              <ChartContainer id='hero-graph' name="Jaguar 'E' Type vehicles in the UK" />
              <ChartContainer id='hero-area' name='Quarterly Apple iOS device unit sales' />
            </Col>
            <Col sm={6}>
              <ChartContainer id='hero-bar' name='iPhone CPU benchmarks' />
              <ChartContainer id='hero-donut' name='Donut Flavours' />
            </Col>
          </Row>
        </Grid>
        {this.props.children}
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var MorrisJSPage = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = classSet({
      'container-open': this.state.open
    });
    return this.transferPropsTo(
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body>
          <Footer />
        </Body>
      </Container>
    );
  }
});

module.exports = MorrisJSPage;