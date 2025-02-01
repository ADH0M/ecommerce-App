import  { useLayoutEffect } from 'react';
import { useLocation, useParams } from 'react-router';

const Sections = () => {
    const params = useParams() || 1 ;
    const location =useLocation() ;
    const getLocation = new URLSearchParams(location.search);
    const categoryName  =getLocation.get('category');
    const descript  = getLocation.get('des');

    
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[location]);

  return (
    <section>
        <div className='my-4 mx-3'>
            <div className='p-2'>
                <h3 className='text-2xl font-semibold text-violet-400 capitalize'>{categoryName ||'shop' }</h3>
                <p className='text-sm text-gray-800/40 capitalize mt-2 '>{descript ||'description'}</p>

            </div>
            <div className='p-2'>
                <p>image </p>
                <span>page id {params.id}</span>
            </div>
        </div>
    </section>
  )
}

export default Sections