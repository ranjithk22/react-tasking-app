import React from 'react'

function Header() {
  return (
      <div className='header  container-fluid'>
          <div className='row align-items-center'>
              <div className='col-md-6'>Header</div>
              <div className='col-md-6 d-flex'>
                <ul className='d-flex align-items-center ms-auto'> 
                    <li>Profile</li>
                </ul>
              </div>
          </div>
    </div>
  )
}

export default Header