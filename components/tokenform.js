const React = require('react')

const inputStyle = {
    color: 'black'
}

const TokenForm = (props) => {
    return(
    <div className='text-center '>
    
    <form className="form-inline justify-content-center" onSubmit={props.submitFun}>
          <div className="form-group mb-2">
            <p className="form-control-plaintext">Enter Here:</p>
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <input name='token' placeholder='Token' className="form-control" onChange={props.changeHandler}/>
          </div>
          <button type="submit" className="btn mb-2">Send</button>
    </form>
    
    </div>)

}

module.exports = TokenForm