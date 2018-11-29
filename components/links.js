const React = require('React')

const Links = (props)=>{
    return (
        
        <div className='container-fluid mb-3'>
        <div className='row'>
        <div className='col-md-8 offset-md-2'>


        <div className='row'>
        <div className = 'col-6 col-offset-3 text-center mx-auto'>
            <b>
                <h3 className='title'>Also Me...</h3>
            </b>

        </div>
        </div>

        <div className='row mt-2'>
        <div className = 'col-md-3 text-center mx-auto'>
            <a href='https://github.com/iangeckeler'>Github</a>
        </div>

        <div className = 'col-md-3 text-center mx-auto'>
            <a href='https://medium.com/@iangeckeler'>Medium</a>
        </div>

        <div className = 'col-md-3 text-center mx-auto'>
            <a href='https://www.linkedin.com/in/ian-geckeler-066434103'>LinkedIn</a>
        </div>

        <div className = 'col-md-3 text-center mx-auto'>
            <a href='mailto:ikcgeckeler@gmail.com'>Email</a>
        </div>
        
        </div>

    </div>
    </div>
        </div>
    

    )
}

module.exports = Links