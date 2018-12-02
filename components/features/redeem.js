const React = require('react')
const TokenForm = require('../tokenform')
const System1 = require('../coverletters/system1')


const Redeem = (props) => {
    let redeemData = 'redeem value is '+props.token
    if (props.token==null) {
        return(<div>
            <TokenForm changeHandler = {props.changeHandler} submitFun={props.submitFun}/>
            {/*<button onClick={()=>{props.callback(props.token)}}>Token</button>*/}
        </div>)
    } else if(props.token=='cover letter'){
        return(<div>Hello Sir</div>) 
    } else if(props.token=='asdf') {
        return(<div>Access Granted, You've reached the Easter Egg.</div>)
    } else if(props.token =='Tina') {
        return(<div>Hey Tina! I love you :)</div>)
    } else if(props.token == 'system1') {
        return(<System1/>)
    } else {
        return (<div>Invalid Token {props.token}</div>)
    }
}

module.exports = Redeem