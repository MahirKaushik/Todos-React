import React from 'react';

//import proptypes to use them for default props and to define proptypes


import propTypes from 'prop-types'

// we need to write props inside brackets to use them

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">


    {/* we used title variable through props.title here */}



    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
      {(props.searchBar)?
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:"To add search Bar use True value"
      }
    </div>
  </div>
</nav>
    </div>
  )
}


// here we define the type of prop that we are using so if there is any buig infuture it will be caught easily

Header.propTypes={
  title: propTypes.string,
  searchBar :propTypes.bool.isRequired
}

//If the values of props are not given we can define some default props that must be used in place of them

Header.defaultProps={
  title:'Add title here',
  searchBar:true

}

