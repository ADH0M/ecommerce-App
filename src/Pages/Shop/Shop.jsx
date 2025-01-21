
import React, { Suspense } from 'react';


const Slider =React.lazy(()=>import('./Slider'));

const ShopMidSection =React.lazy(()=>import('./ShopMidSection'));

const ShopSection =React.lazy(()=>import('./ShopSection'));

const ShopPage = () => {
  return (
    <>
       <Suspense fallback={<div>loading</div>}>
          <Slider/>
          <Suspense fallback={<div>loading</div>}>
              <ShopMidSection/>
              <ShopSection/>
          </Suspense>
       </Suspense>
         
       

    </>
  )
}

export default ShopPage