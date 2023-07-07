import React from 'react'

function Footer() {
  let linkStyl={
    'textDecoraiton':'none',
  }
  return (
    <div className='bg-dark text-white p-5'>
      <h5 className='text-center'>Developers Association</h5>
      <hr></hr>
      <div className='d-flex justify-content-around'>
      <div><h6>Developers</h6>
      <p>Sathvik Kunuru</p>
      </div>
      <div><h6>Contact Us</h6>
      <p><a href='tel:7569438573' style={linkStyl}>call Me</a></p>
      <p><a href='mailto:kunurusathvik@gmail.com' style={linkStyl}>Write A mail</a></p>
      </div>
      </div>
    </div>

  )
}

export default Footer