import React from 'react';
import img from './img/ishaq.jpg'

function EncounterContent() {
    return (
        <div className="encounterContentWrapper">
            <div className="encounerHeader">
                <h4>Encounters</h4>
                <div className="sectionsWrapper">
                    <div className="leftSection">
                        <div className="leftSection-img">
                           <img src={img} alt={"encounterImage"} />
                        </div>
                        <div className="leftSection-LikeButton">
                           <h6> Like</h6>
                        </div>

                        <div className="leftSection-MessageButton">
                            <h6>Message</h6>
                        </div>
                        <div className="leftSection-DeleteButton">
                            <h6>Delete</h6>
                        </div>
                    </div>
                    <div className="rightSection">
                            <div className="rightSection-one">
                                <p>Sani Austine <span>.</span> <span>27</span> <span>.</span></p>
                                <p>Nigeria, <span>Kaduna</span></p>
                                <div className="rightSection-icons">
                                    <div className="gender-icon">
                                        Gender
                                    </div>
                                    <div className="status-icon">
                                        Status
                                    </div>
                                    <div className="category-icon">
                                        Category
                                    </div>
                                </div>
                            </div>
                            <div className="rightSection-two">
                                <div className="sex">Sex:</div>
                                <div className="status">Status</div>
                                <div className="value">--</div>                              
                                <div className="value">--</div>
                                <div className="iam-lokingFor">I am looking for</div>
                                <div className="religon">Religion</div>
                                <div className="valu">--</div>                               
                                <div className="value">--</div>
                            </div>
                            <div className="rightSection-three">
                            <p>Description</p>
                                <p>You love yourself</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EncounterContent
