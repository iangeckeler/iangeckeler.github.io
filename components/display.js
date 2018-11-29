React = require('react')
const About = require('./features/about')
const Redeem = require('./features/redeem')
const Highlights = require('./features/highlights')
const Projects = require('./features/projects')

const Display = (props)=>{
    if(props.filterStatus=='about'){
        return(<About />)
    } else if(props.filterStatus =='highlights') {
        return(<Highlights/>)
    } else if(props.filterStatus=='projects') {
        return(<Projects/>)
    } else if(props.filterStatus=='redeem'){
        return(<Redeem changeHandler = {props.changeHandler} submitFun = {props.submitFun} callback={props.callback} token={props.token}/>)
    } else {
        return null
    }


    
}


{/* <div>
        {
            props.currentObject.titles.map((title,index)=>{
                return (<div key = {index}>
                    <Card title={title}></Card>
                    <button onClick={props.blurbCallback(title)}>Click Me for {title}</button>
                    </div>)
        })
    }
    </div> */}

module.exports = Display;