import React from "react";

const HowItWorks = () => {
  {
    return (
      <div>
        <h3
          class="h3 text-center mb-5"
          style={{
            marginTop: 30,
            fontFamily: "Century Gothic",
            fontWeight: "bold",
            color: "#013401"
          }}
        >
          How It Works
        </h3>

        <div
          class="row"
          style={{ marginLeft: 30, fontFamily: "Century Gothic" }}
        >
          <div class="col-md-3">
            <img
              src={require("../../../public/img/you_eat.jpg")}
              alt="boohoo"
              className="img-responsive"
              style={{
                marginLeft: 150,
                flex: 1,
                alignSelf: "stretch",
                width: 150,
                height: 150,
                marginBottom: 20
              }}
            />
            <h5
              style={{
                marginLeft: 100
              }}
              class="feature-title"
            >
              You Eat in a Restuarant
            </h5>
            <p class="grey-text" />
          </div>
          {/* </div>

              <div style="height:30px" />

              <div class="row">
                <div class="col-1 mr-3">
                  <i class="fa fa-book fa-2x blue-text" />
          </div> */}
          <div class="col-md-3">
            <img
              src={require("../../../public/img/vomitting_2.jpg")}
              alt="boohoo"
              className="img-responsive"
              style={{
                marginLeft: 50,
                flex: 1,
                alignSelf: "stretch",
                width: 200,
                height: 200,
                marginBottom: -30
              }}
            />
            <h5
              style={{
                marginLeft: 0
              }}
              class="feature-title"
            >
              If you get poisoned
            </h5>
            <p class="grey-text" />
          </div>
          {/* </div>

              <div style="height:30px" />

              <div class="row">
                <div class="col-1 mr-3">
                  <i class="fa fa-graduation-cap fa-2x cyan-text" />
                </div> */}
          <div class="col-md-3">
            <img
              src={require("../../../public/img/reportonphone.jpg")}
              alt="boohoo"
              className="img-responsive"
              style={{
                marginLeft: -60,
                flex: 1,
                alignSelf: "stretch",
                width: 230,
                height: 150,
                marginBottom: 20
              }}
            />
            <h5 class="feature-title">You report</h5>
            <p class="grey-text" />
          </div>
          {/* </div>

              <div class="row">
                <div class="col-1 mr-3">
                  <i class="fa fa-graduation-cap fa-2x cyan-text" />
                </div> */}
          <div class="col-md-3">
            <img
              src={require("../../../public/img/dashboard_metrics2.jpg")}
              alt="boohoo"
              className="img-responsive"
              style={{
                marginTop: 25,
                marginLeft: 60,
                flex: 1,
                alignSelf: "stretch",
                width: 170,
                height: 130,
                marginBottom: 20
              }}
            />
            <h5 class="feature-title">We monitor and send alerts</h5>
            <p class="grey-text" />
          </div>
        </div>
      </div>
    );
  }
};

export default HowItWorks;
