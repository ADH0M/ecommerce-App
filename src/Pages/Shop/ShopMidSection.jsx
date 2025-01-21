import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase/Api';
import { useNavigate } from 'react-router';

const ShopMidSection = () => {
    const [img ,setImg ] = useState(null);
    const naviagte = useNavigate();

    useEffect(()=>{
        const getImg = async ()=>{
            try{
                const data = await supabase.from('shopMidSection').select('*')
                setImg(data.data)                
            }catch(err){
                naviagte('/')
            }
        };

        getImg();
    },[naviagte]);

  return (
    <div className='bg-gray-50 w-full container mx-auto p-6  mt-10'>

        {/* low prize and beyoung presents . */}
        <div className='flex   flex-wrap md:flex-nowrap w-full justify-evenly gap-5'>
            {img?.map((item)=>(
                <img src={item.image_Url} 
                alt={item.image_name} key={item.id} className='w-full md:w-[50%] h-[300px] rounded-md object-fill'
                loading='lazy'
                />
                
            ))}
        </div>

        
    </div>
  )
}

export default React.memo(ShopMidSection);