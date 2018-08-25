import FeedPage from "../FeedPage";
import React from "react";
import { connect } from "react-redux";
import "../../spike.css";

const mapStateToProps = state => ({
  stories: state.stories
});

const MainView = props => {
  return (
    <div id="container">
      <div class="section-content">
        <h1 class="section-header">
          Get in{" "}
          <span
            class="content-header wow fadeIn "
            data-wow-delay="0.2s"
            data-wow-duration="2s"
          >
            {" "}
            Touch with us
          </span>
        </h1>
        <h3>The leading consumer platform for reporting food poisoning.</h3>
      </div>

      <div class="container">
        <form>
          <div class="col-md-6 form-line">
            <div class="form-group">
              <label for="exampleInputUsername">Your name</label>
              <input
                type="text"
                class="form-control"
                id=""
                placeholder=" Enter Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                placeholder=" Enter Email id"
              />
            </div>
            <div class="form-group">
              <label for="telephone">Restuarant Name</label>
              <input
                type="text"
                class="form-control"
                id=""
                placeholder=" Enter Restuarant name"
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="description"> What went bad</label>
              <textarea
                class="form-control"
                id="description"
                placeholder="Enter symptoms and your story"
              />
            </div>
            <div>
              <button type="button" class="btn btn-default submit">
                <i class="fa fa-paper-plane" aria-hidden="true" /> Send Message
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="col-md-9">
        <div className="feed-toggle">
          <ul className="nav nav-pills outline-active">
            <li className="nav-item">
              <a href="" className="nav-link active">
                What are people saying about your city
              </a>
            </li>
          </ul>
        </div>

        <FeedPage stories={props.stories} />
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  () => ({})
)(MainView);
