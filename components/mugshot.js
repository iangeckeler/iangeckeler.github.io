const React = require('react')

const picStyle = {
    maxHeight:'200px',
    maxWidth: '200px',
    borderRadius:'50%'
}

class Mugshot extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name
    }

    render() {
        return(
            <div className="container mugshot">
            <div className='row'>
                <div className = 'col-sm-12 text-center'>   
                    <img className='img-fluid mx-auto d-block mb-0' src='src/prof_photo.jpg' style={picStyle}></img>
                </div> 
                <div className='col-sm-12 text-center pt-0 mt-0'>    
                    <b><h1 className='title mt-0 mb-0 pt-0 mb-0'>Ian Geckeler</h1></b>
                </div>


                
            </div>
            </div>
            )
    }
}

module.exports = Mugshot