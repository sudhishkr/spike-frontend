import React, { Component } from 'react';

class Team extends Component {
    render() {
        return(
            <section class="bg-light" id="team">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading text-uppercase">Our Team</h2>
                            <h3 class="section-subheading text-muted"></h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="img/team/sudhish_kasaba_ramesh.jpg" alt=""></img>
                                <h4>Sudhish Kasaba Ramesh</h4>
                                <p class="text-muted">Product & Operations</p>
                                <ul class="list-inline social-buttons">
                                    <li class="list-inline-item">
                                        <a href="https://twitter.com/sudhishkr" target="_blank">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://www.linkedin.com/in/sudhishkr" target="_blank">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="img/team/surya_rajasekaran.jpeg" alt=""></img>
                                <h4>Surya Rajasekaran</h4>
                                <p class="text-muted">Designer</p>
                                <ul class="list-inline social-buttons">
                                    <li class="list-inline-item">
                                        <a href="https://www.instagram.com/surya_rajasekaran" target="_blank">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://www.linkedin.com/in/suryarajasekaran" target="_blank">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="img/team/shreedhar_pawar.jpg" alt=""></img>
                                <h4>Shreedhar Pawar</h4>
                                <p class="text-muted">Developer</p>
                                <ul class="list-inline social-buttons">
                                    <li class="list-inline-item">
                                        <a href="https://twitter.com/ShreedharPawar" target="_blank">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://www.linkedin.com/in/shreedhar-pawar-b8199654/" target="_blank">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;