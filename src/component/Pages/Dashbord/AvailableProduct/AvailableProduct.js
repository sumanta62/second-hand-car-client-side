import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import AvaliableShowDisplay from './AvaliableShowDisplay';

const AvailableProduct = () => {
    const { user } = useContext(AuthContext);

    const url = `https://handler-car-server.vercel.app/available`

    const { data: myAvailable = [] } = useQuery({
        queryKey: ['myAvailable', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        },
    })
    // console.log(myAvailable)


    return (
        <div className='pt-10 text-black'>
            <div className='py-12 w-10/12 m-auto'>
                <div className='text-center mb-8'>
                    <h2 className="text-3xl md:text-4xl font-bold ">Advertisements Product</h2>
                    <p>If cars say a lot about who we are, this one will say I'm perfect!<br /> Liking what I can see in the rearview mirror!</p>
                </div>
                <div className='md:grid grid-cols-2 justify-center gap-6 space-y-6 md:space-y-0'>
                    {
                        myAvailable?.map(avaliabale => <AvaliableShowDisplay
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