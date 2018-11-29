React = require('react')


const Projects = (props) => {

    return(
    <div>

                <div className="card-body text-center">
                    <h4 className="card-title">Moody.io</h4>
                    <p className="card-text">An AI-powered journal built in Node.js that gives users the abilty to identify trends in their mood over time.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://hellomoody.herokuapp.com" className="card-link">Learn More</a>
                </div>

                <div className="card-body text-center">
                    <h4 className="card-title">The Focus App</h4>
                    <p className="card-text">A full-stack Jasvascript app built with React that keeps users on track with their goals with perosnalized text-messages.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://thefocusapp.herokuapp.com" className="card-link">Learn More</a>
                </div>

                <div className="card-body text-center">
                    <h4 className="card-title">The Signal Project</h4>
                    <p className="card-text">My personal blog and newsletter centered around living a purposeful life.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://thesignalproject.com/" className="card-link">Learn More</a>
                </div>
    </div>
                )
}

module.exports = Projects