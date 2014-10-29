/** @jsx React.DOM */

var ApplicationSidebar = React.createClass({
  render: function() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>PAGES</div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}}>
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Blank' href='/' />
                  <SidebarNavItem glyph='icon-feather-inbox' name='Tổng quan' href='#' />
                  <SidebarNavItem glyph='icon-outlined-mail-open' name='Hàng hóa'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Danh mục' href='/app/products/product' />
                      <SidebarNavItem glyph='icon-dripicons-message' name='Kiểm kho' href='/app/products/inventory' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-dripicons-message' name='Giao dịch'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Hóa đơn' href='#' />
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='Trả hàng' href='#' />
                      <SidebarNavItem glyph='icon-dripicons-message' name='Nhập hàng' href='#' />
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='Trả hàng nhập' href='#' />
                      <SidebarNavItem glyph='icon-dripicons-message' name='Chuyển hàng' href='#' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-outlined-mail-open' name='Đối tác'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Khách hàng' href='#' />
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='Nhà cung cấp' href='#' />
                    </SidebarNav>
                  </SidebarNavItem>
                  <SidebarNavItem glyph='icon-dripicons-message' name='Sổ quỹ' href='#' />
                  <SidebarNavItem glyph='icon-dripicons-message' name='Báo cáo'>
                    <SidebarNav>
                      <SidebarNavItem glyph='icon-feather-inbox' name='Bán hàng' href='#' />
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='Hàng hóa' href='#' />
                      <SidebarNavItem glyph='icon-dripicons-message' name='Tài chính' href='#' />
                      <SidebarNavItem glyph='icon-outlined-mail-open' name='Công nợ' href='#' />
                      <SidebarNavItem glyph='icon-dripicons-message' name='Cuối ngày' href='#' />
                    </SidebarNav>
                  </SidebarNavItem>
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

var DummySidebar = React.createClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
});

var SidebarSection = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <div id='sidebar'>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/avatars/avatar0.png' width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>Anna Sanchez</div>
                <div>
                  <Progress id='demo-progress' value={30} min={0} max={100} color='#ffffff'/>
                  <Link href='#'><Icon id='demo-icon' bundle='fontello' glyph='lock-5' /></Link>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <SidebarControls>
          <SidebarControlBtn bundle='fontello' glyph='docs' key={0} />
          <SidebarControlBtn bundle='fontello' glyph='chat-1' key={1} />
          <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' key={2} />
          <SidebarControlBtn bundle='fontello' glyph='th-list-2' key={3} />
          <SidebarControlBtn bundle='fontello' glyph='bell-5' key={4} />
        </SidebarControls>
        <div id='sidebar-container'>
          <Sidebar key={0} active>
            <ApplicationSidebar />
          </Sidebar>
          <Sidebar key={1}>
            <DummySidebar />
          </Sidebar>
          <Sidebar key={2}>
            <DummySidebar />
          </Sidebar>
          <Sidebar key={3}>
            <DummySidebar />
          </Sidebar>
          <Sidebar key={4}>
            <DummySidebar />
          </Sidebar>
        </div>
      </div>
    );
  }
});

module.exports = SidebarSection;
