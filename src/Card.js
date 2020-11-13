import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="container">
      <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Used Props for the title....</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>

      {/* <div className="card-body">
        <h5 className="card-title">Card Two</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>

      <div className="card-body">
        <h5 className="card-title">Card Three</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div> */}
    </div>
    </div>
    </div>
  )
}

export default Card
