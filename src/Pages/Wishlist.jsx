import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../Redux/slice/wishlistSlice';
import { addtoCart } from '../Redux/slice/cartSlice';

function Wishlist() {
  const { wishlist } = useSelector(state => state.wishlist); // Updated state reference
  const dispatch = useDispatch()
  const handleCart=(product)=>{

    dispatch(addtoCart(product))
    dispatch(removeFromWishlist(product?.id))

  }

  return (
    <>
      <Header />
      <div style={{ marginTop: "50px" }} className="container-fluid ">
        <Row>
          {wishlist?.length > 0 ? (
            wishlist.map(product => (
              <Card key={product.id} style={{ width: '18rem' }} className='ms-3'>
                <Card.Img variant="top" width={"100%"} src={product?.thumbnail} />
                <Card.Body>
                  <Card.Title>{product?.title.slice(0, 10)}...</Card.Title>
                  <Card.Text>{product?.description.slice(0, 20)}...</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button className="btn btn-light" onClick={()=>dispatch(removeFromWishlist(product?.id))}>
                      <i className="fa-solid fa-trash text-danger"></i>
                    </Button>
                    <Button className="btn btn-light" onClick={()=>handleCart(product)}>
                      <i className="fa-solid fa-cart-plus text-info"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))
          ) : (
           <div className="text-center">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-wishlist-shopping-illustration-download-in-svg-png-gif-file-formats--list-cart-pack-e-commerce-illustrations-3809815.png?f=webp" alt="" />
            <h1 className='text-danger mt-5'>Your wishlist is Empty....</h1>
           </div>
          )}
        </Row>
      </div>
    </>
  );
}

export default Wishlist;
