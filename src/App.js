/**
 * This is the class name and for the corelated section of the page :
 * *  notif-panel               = Notification Panel content
 * *  herosho-section           = Hero-shot Section content
 * *  highlights-panel_grid     = Highlight Panel Grid
 * *                            ==> hp-header_column      = Header section of Highlight Panel
 * *                            ==> hp-body_column        = Body section of Highlight Panel
 * *                            ==> hp-body_container     = Container for body Highlight content
 * *                            ==> hp-content            = 6 content's of Highlight content
 * *  newsletter-container (id) = Sliding Panel
 * *  newsletterhide       (id) = Sliding Panel (when hidden)
 * *  footer                    = Footer content
 */

import React, {Component} from 'react';
import './App.css';


const NotificationPanel = (props) => 
<header>
  <div className="notif-container">
    <div className="notif-details">
      By accessing and using this website, you acknowledge that you have read and understand our <a href=".">Cookie Policy</a>, <a href=".">Privacy Policy</a>, and our <a href=".">Term of Service</a>.
    </div>
    <button onClick={props.onClose} className="notif-button">
      Got it
    </button>
  </div>
</header>;



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isHide:true,
      showNotif: true,
    };
    this.isNewsletterHide = this.isNewsletterHide.bind(this)
  }

  /*
    Show the isNewsletterHide after scrolling 1/3 of page
  */

  isNewsletterHide(){
    let {isHide} = this.state;
    window.scrollY > 500 && this.prev ?
    isHide && this.setState({isHide:false})
    :
    !isHide && this.setState({isHide:false})
    this.prev = window.scrollY;
  }

  /*
    Calling the isNewsletterHide function & Unmount it
  */

  componentDidMount(){
    window.addEventListener('scroll',this.isNewsletterHide);
  }

  componentWillUnmount() {
    window.addEventListener('scroll',this.isNewsletterHide);
  }

  /*
    Close the Notification Panel
  */

  closeNotif = () => {
    this.setState({
      showNotif: false,
    })
    document.getElementsByClassName("notif-panel")[0].style.padding = "0px";
  };

  /*
    Close the Sliding Panel a.k.a Newsletter
  */

  closeNewsletter = () => {
    this.setState({
      isHide: true,
    })
    let newsletterPanel = document.getElementById('newsletter-container')
    if (newsletterPanel.style.display !== "none") {
      newsletterPanel.style.display = "none";
      setTimeout(function() {       
        newsletterPanel.style.display = "fixed";
      }, 100 * 6000);
    }
  };

  render() {
    let classwhenHide=this.state.isHide?"newsletterhide":""
    return (
      <div className="web-container">

        {/* Notification Panel Content */}
        <div className="notif-panel">
          {this.state.showNotif && <NotificationPanel onClose={this.closeNotif} />}
        </div>

        {/* Hero-shot Content */}
        <div className="heroshot-section">
          <div className="logo-container">
            <img src="logo.png" alt="y-logo" className="app-logo"/>
          </div>
          <div className="top-details">
            <h2
              style={{fontWeight:"lighter", marginTop:15, marginBottom:15}}
            >
              Hello! I'm Yonathan Evan
            </h2>
            <h2
             className="top-desc"
             style={{fontSize:"1.2em", marginTop:15, marginBottom:15}}
            >
              Consult, Design, and Develop Websites
            </h2>
            <p
              className="top-p"
              style={{marginTop:15, marginBottom:15}}
            >
              Have something great in mind? Feel free to contact me.
              I'll help you make it happen.
            </p>
            <button className="cta-button">
              Let's make contact
            </button>
          </div>
        </div>
  
        {/* Highlights Panel (HP) Content */}
        <div className="highlights-panel_grid"
          style={{
            backgroundColor:"rgb(230, 230, 230)",
            color:"rgb(60, 60, 60)"
          }}
        >

          {/* HP Header  */}
          <div className="hp-header_column"
            style={{
              marginTop:80,
              marginBottom:60,
            }}
          >
            <h2>
              How Can I Help You?
            </h2>
            <p className="p-hp-header">
              Our work then targeted, best practices outcomes social innovation synergy.
              Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
              program areas scale.
            </p>
          </div>

          {/* HP Body  */}
          <div className="hp-body_column"
            style={{
              marginBottom:80,
            }}
          >
            <div className="hp-body_container">
              <div className="hp_content">
                <h3 style={{margin:0, fontSize:"0.9em"}}>
                  Consult
                  <i 
                    style={{fontSize:"1.5em"}}
                    className="fa-content"
                  >
                    &#xf0e6;
                  </i>
                </h3>
                <p className="p-content">
                  Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.
                </p>
              </div>
              <div className="hp_content">
                <h3 style={{margin:0, fontSize:"0.9em"}}>
                  Design
                  <i 
                    style={{fontSize:"1.5em"}}
                    className="fa-content"
                  >
                    &#xf1fc;
                  </i>
                </h3>
                <p className="p-content">
                  Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.
                </p>
              </div>
              <div className="hp_content">
                <h3 style={{margin:0, fontSize:"0.9em"}}>
                  Develop
                  <i 
                    style={{fontSize:"1.5em"}}
                    className="fa-content"
                  >
                    &#xf1b3;
                  </i>
                </h3>
                <p className="p-content">
                  Revolutionary ciruclar, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.
                </p>
              </div>
              <div className="hp_content">
                <h3 style={{margin:0, fontSize:"0.9em"}}>
                  Marketing
                  <i 
                    style={{fontSize:"1.5em"}}
                    className="fa-content"
                  >
                    &#xf0a1;
                  </i>
                </h3>
                <p className="p-content">
                  Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.
                </p>
              </div>
              <div className="hp_content">
                <h3 style={{margin:0, fontSize:"0.9em"}}>
                  Manage
                  <i 
                    style={{fontSize:"1.5em"}}
                    className="fa-content"
                  >
                    &#xf0ae;
                  </i>
                </h3>
                <p className="p-content">
                  Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.
                </p>
              </div>
              <div className="hp_content">
                <h3 style={{margin:0, fontSize:"0.9em"}}>
                  Evolve
                  <i 
                    style={{fontSize:"1.5em"}}
                    className="fa-content"
                  >
                    &#xf201;
                  </i>
                </h3>
                <p className="p-content">
                  Activate catalzye and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes bit data, fairness, social game-changer.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Sliding Panel (Newsletter) Content */}
        <div 
        id={classwhenHide||"newsletter-container"}
        >
          <div className="newsletter-details">
            <h3 style={{margin:0, fontSize:"0.9em"}}>
              Get latest updates in web technologies
            </h3>
            <i 
              style={{fontSize:"0.6em"}}
              className="fa"
              onClick={this.closeNewsletter}
            >
                &#xf00d;
            </i>
            <p className="p-newsletter">
              I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.
            </p>
          </div>
          <div className="newsletter-form">
            <input 
              name="email" 
              type="email" 
              placeholder="Email address" 
              className="newsletter-input"
            />
            <button 
              className="newsletter-button"
              onClick={this.closeNewsletter}
            >
              Count me in!
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <footer className="footer">
          © 2019 Yonathan Evan. All rights reserved.
        </footer>
      </div>
    );
  }
}

export default App;
