import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
     <MDBFooter bgColor='info' className='text-white text-center text-lg-left mt-4'>
      <MDBContainer className='p-4 text-center'>
        <MDBRow>
          <MDBCol  className=''>
            <h5 className='text-uppercase'>E-Cart</h5>

            <p>
            E-Cart is your one-stop destination for the latest and greatest products. 
          We offer fast delivery, secure payments, and exceptional customer service
            </p>
          </MDBCol>
          
          
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          E-Cart.com
        </a>
      </div>
    </MDBFooter>
      
    </>
  )
}

export default Footer
