import React from "react";
import { connect } from "react-redux";
import FeedPage from "../FeedPage";

const mapStateToProps = state => ({
  stories: state.stories
});

const MainView = props => {
  var background_image = require("../../../public/img/food_poisoning6.jpg");
  return (
    <section>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        // content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <title>FoodSpy</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/mdb.min.css" rel="stylesheet" />
      <link href="css/style.min.css" rel="stylesheet" />
      <div
        class="view full-page-intro"
        style={{
          backgroundImage: "url(" + background_image + ")",
          marginTop: 90
        }}
        // style="background-image: url('https://mdbootstrap.com/img/Photos/Others/images/78.jpg'); "
      >
        <div class="container">
          <div class="row wow fadeIn">
            <div class="col-md-6 mb-6 white-text text-center text-md-left">
              <h1
                style={{
                  fontFamily: "Century Gothic",
                  marginTop: 70,
                  marginLeft: 150,
                  fontSize: 30,
                  color: "#013401"
                }}
                class="display"
              >
                Your Personal Food Inspector in your pockets
              </h1>

              {/* <hr class="hr-light" /> */}

              {/* <p>
                <strong>Best & free guide of responsive web design</strong>
              </p>

              <p class="mb-4 d-none d-md-block">
                <strong>
                  The most comprehensive tutorial for the Bootstrap 4. Loved by
                  over 500 000 users. Video and written versions available.
                  Create your own, stunning website.
                </strong>
              </p>

              <a
                target="_blank"
                href="https://mdbootstrap.com/bootstrap-tutorial/"
                class="btn btn-indigo btn-lg"
              >
                Start free tutorial
                <i class="fa fa-graduation-cap ml-2" />
              </a> */}
            </div>

            <div
              style={{ marginTop: 20, marginBottom: 100 }}
              class="col-md-12 col-xl-5 mb-6"
            >
              <div class="card">
                <div class="card-body">
                  <form name="">
                    <h3 class="dark-grey-text text-center">
                      <strong>Report:</strong>
                    </h3>
                    <hr />

                    <div class="md-form">
                      <i class="fa fa-user prefix grey-text" />
                      <input type="text" id="form2" class="form-control" />
                      <label for="form3">Your name</label>
                    </div>
                    <div class="md-form">
                      <i class="fa fa-envelope prefix grey-text" />
                      <input type="text" id="form2" class="form-control" />
                      <label for="form2">Your email</label>
                    </div>

                    <div class="md-form">
                      <i class="fa fa-pencil prefix grey-text" />
                      <textarea type="text" id="form2" class="md-textarea" />
                      <label for="form8">Your message</label>
                    </div>

                    <div class="text-center">
                      <button class="btn btn-blue">Send</button>
                      {/* <hr />
                      <fieldset class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="checkbox1"
                        />
                        <label
                          for="checkbox1"
                          class="form-check-label dark-grey-text"
                        >
                          Subscribe me to the newsletter
                        </label>
                      </fieldset> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3
        class="h3 text-center mb-5"
        style={{
          marginTop: 30,
          fontFamily: "Century Gothic",
          fontWeight: "bold",
          color: "#013401"
        }}
      >
        Recent Reports
      </h3>

      <FeedPage stories={props.stories} />

      {/* </div>
        </div> */}
      {/* <div class="col-lg-6 col-md-12">
          <p class="h5 text-center mb-4">FoodSpy at your rescue</p>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/cXTThxoywNQ"
              allowfullscreen
            />
          </div>
        </div> }
      </div> */}
      <script src="js/jquery-3.3.1.min.js" />
      <script src="js/popper.min.js" />
      <script src="js/bootstrap.min.js" />
      <script src="js/mdb.min.js" />
      <script />
    </section>
  );
};

export default connect(
  mapStateToProps,
  () => ({})
)(MainView);
