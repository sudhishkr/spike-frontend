import MainView from "./MainView";
import NavbarFeatures from "./Navbar";
import HowItWorks from "./Howitworks";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";

const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })
});

class Home extends React.Component {
  componentWillMount() {
    this.props.onLoad(agent.Stories.all());
  }

  render() {
    return (
      <div className="">
        <div>
          <div>
            <NavbarFeatures />
            <MainView />
            {/* <HowItWorks /> */}
            <HowItWorks />
            {/* <RecentReports />
            <Footer /> */}
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
