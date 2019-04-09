import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "./navbar";

class FrontPage extends Component {
  constructor(props) {
    super(props);
  
    if(this.props.authentication === false){
        alert("You must be logged in to view this page")
        this.props.history.replace('/login')
    }
  }


render(){
    return (
        <div>
            <NavBar></NavBar>
        <div className="blogContainer">
            <h1>Welcome!</h1>
            <div className="posts">
                <div className="post">
                    <img src="https://images.reference.com/reference-production-images/question/aq/pretty-cat-names_a598a430bfa5ce3.jpg?width=760&height=411&fit=crop"></img>
                    <p><b>James:</b> BEST CAT</p>
                </div>
                <div className="post">
                    <a href="https://ieeexplore.ieee.org/document/8220474#full-text-section">All About the Equifax Breach!</a>
                    <p><b>Security_Buff:</b> Check this out!</p>
                </div>
                <div className="post">
                    <img src="https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/640x958/gallery-1504289153-delish-cheesy-garlic-butter-potatoes-pinterest-still003.jpg?resize=640:*"
                    />
                    <p><b>The_Grey:</b> A friend was telling me all different ways
                    to make potatoes, but I didn't quite believe them. . .</p>
                </div>
                <div className="post">
                    <img src="https://cdn.squaremile.com/gallery/5af1b472e8770.jpeg"></img>
                    <p><b>Mini_Might:</b> So here's some pictures from my latest day of training!</p>
                </div>
                <div className="post">
                    <img src ="https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_1229%2Cy_0%2Cw_2712%2Ch_3616%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5b7ac48b4db3d70020c01c13%252Fshutterstock_1081879181.jpg"></img>
                    <p><b>James:</b> WHO'S A GOOD BOY????</p>
                </div>
                <div className="post">
                    <img src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny85NTcvb3JpZ2luYWwvc3BhY2UuanBn"></img>
                    <p><b>Not_Spider_Man:</b> Er-- I don't think I should have internet here??</p>
                </div>
            </div>
        </div>
        </div>
    )
}

}

export default withRouter(FrontPage);
