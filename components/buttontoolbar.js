const React = require('react')
const rbs = require('react-bootstrap')

const ButtonToolbar = rbs.ButtonToolbar;
const Button = rbs.Button;

const toolbarStyle = {
    fontFamily: 'Press Start 2P'
};

const ButtonBar = (props) => {

    return (

        <div className='container-fluid buttonBar pt-3' style={toolbarStyle}>
        <div className = 'row'>

                <div className='col-lg-3 col-sm-6 col-xs-12 text-center mx-auto p-1'>
                <button className = 'btn' id='focusID' onClick={props.allHandler}>About Me</button>
                
                </div>
                <div className='col-lg-3 col-sm-6 col-xs-12 text-center mx-auto p-1'>
                <button className = 'btn' onClick={props.dataHandler}>Highlights</button>
                
                </div>

            <div className='col-lg-3 col-sm-6 col-xs-12 text-center mx-auto p-1'>
                <button className = 'btn' onClick={props.projectsHandler}>Projects</button>

            </div>
            <div className='col-lg-3 col-sm-6 col-xs-12 text-center mx-auto p-1'>
            <button className = 'btn' onClick={props.otherHandler}>Redeem Token</button>

            </div>

        </div>
        </div>
)
}

        

module.exports = ButtonBar