const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        />
      </div>
      <h1 className="name">Kiran V</h1>
      <p className="para">
        Vishnu institute of computer education and technology,Bhimavaram.
      </p>
      <div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        />
      </div>
    </div>
  </div>
ReactDOM.render(element, document.getElementById('root'))