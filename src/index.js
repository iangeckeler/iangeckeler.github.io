const ReactDOM = require('react-dom')
const React = require('react')
const Mugshot = require('../components/mugshot')
const ButtonBar = require('../components/buttontoolbar')
const Display = require('../components/display.js')
const Links = require('../components/links')

class App extends React.Component {
    constructor(props) {
        super(props);
        this.dataObj= ['CoEfficientLabs','Applied Statistics Club','Other'];
        this.projectsObj = ['Moody.io','Other']
        this.dataCopy = ['Coefficiet Labs was an amazing experience all around']
        
        this.portfolioObj = {
            data: {
            titles:['CoEfficientLabs','Applied Statistics Club','Other'],
            copy: ['Coefficient Labs was an amazing experience all around']
        },
        projects: {
            titles: ["moody.io"],
            copy: ['copy']
        }}

        this.state ={
            filterStatus: 'about',
            currentObject:this.portfolioObj.data,
            currentTitles: this.projectsObj,
            objectTitle: 'Moody.io',
            token: null
        }
    }

    tokenSubmit(e) {
        e.preventDefault();
        this.setState({token:this.state.value})
    }

    changeHandler(e) {
        console.log('target value is '+e.target.value)
        this.setState({value: e.target.value})
    }
    
    callback(childData) {
        console.log(childData)
        this.setState({token:childData})
    }


    render() {
        return (
        <div>
            <Mugshot/>


            
                    <div className='divider w-100'></div>
                    <div className = 'container-fluid'> 
                    <div className='row'>
                        <div className = 'col-md-8 offset-md-2'> 
                        <ButtonBar dataHandler= {()=>{
                    this.setState({filterStatus:'highlights', currentObject:this.portfolioObj.data}); console.log(this.state)}} projectsHandler= {()=>{
                        this.setState({filterStatus:'projects', currentObject:this.portfolioObj.projects}); console.log(this.state)}} otherHandler= {()=>{
                            this.setState({filterStatus:'redeem'});}} allHandler= {()=>{
                                this.setState({filterStatus:'about'});}}/>
                        </div>
                    </div>
                    </div>

                    


            <div className='divider w-100'></div>
            <div className='container'>

                <div className = 'row-fluid'>
                    <div className = 'col-md-8 offset-md-2 d-inline-block'>
                    <Display token={this.state.token} changeHandler={this.changeHandler.bind(this)} submitFun= {this.tokenSubmit.bind(this)}filterStatus={this.state.filterStatus} callback={this.callback.bind(this)} currentObject={this.state.currentObject}/>
                    </div>
                </div>

            </div>
            <div className='divider w-100'></div>
            <Links />

                        

        </div>)
    }
}

ReactDOM.render(<App />,document.getElementById('hello'))

