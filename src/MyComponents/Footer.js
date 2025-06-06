import React from 'react'


const Footer = () => {
  let footerStyle = {
      position: 'absolute',
      top: 'auto',
      width: '100%',
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; Taskify
      </p>
    </footer>
  )
}

export default Footer
