import React, {Component} from 'react';
import './App.css';

class Newsletter extends Component {
  constructor(props){
    super(props);
    this.state={isHide:false};
    this.hideBar = this.hideBar.bind(this)
  }

  hideBar(){
    let {isHide} = this.state;
    window.scrollY < 300 && this.prev ?
    !isHide && this.setState({isHide:true})
    :
    isHide && this.setState({isHide:false})
    this.prev = window.scrollY;
  }

  componentDidMount(){
      window.addEventListener('scroll',this.hideBar);
  }
  componentWillUnmount(){
       window.removeEventListener('scroll',this.hideBar);
  }
  
  render() {
    let classHide=this.state.isHide?"newsletterhide":""
      return (
        <div className={classHide+"newsletter-container"}>
          <div className="newsletter-details">
            <h3 style={{margin:0, fontSize:"0.9em"}}>
              Get latest updates in web technologies
            </h3>
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
            <button className="newsletter-button">
              Count me in!
            </button>
          </div>
        </div>
    );
  }
}

export default Newsletter;