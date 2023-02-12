import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import AvaliableShowDisplay from './AvaliableShowDisplay';

const AvailableProduct = () => {
    const { user} = useContext(AuthContext);

    const url = `https://handler-car-server-sumanta62.vercel.app/available?email=${user?.email}`
    
    const { data: myAvailable= [] } = useQuery({
        queryKey: ['myAvailable', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authoraization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        },
    })

   
    return (
        <div className='bg-gray-200 text-black'>
        <div className='py-12 w-10/12 m-auto'>
            <div className='text-center mb-8'>
                <h2 className="text-3xl md:text-4xl font-bold ">Advertisements Product</h2>
                <p>If cars say a lot about who we are, this one will say I'm perfect!<br /> Liking what I can see in the rearview mirror!</p>
            </div>
            <div className='md:flex justify-center gap-6 '>
                {
                    myAvailable.map(avaliabale => <AvaliableShowDisplay
                        key={avaliabale._id}
                        avaliabale={avaliabale}
                       
                    >
                    </AvaliableShowDisplay>)
                }
            </div>

        </div>
    </div>
    );
};

export default AvailableProduct;