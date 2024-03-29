import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../../Spinner/Spinner';
import Categary from './Categary';
import './Catagory.css'

const CarCategories = () => {
    const { data: categaries = [], isLoading } = useQuery({
        queryKey: ['categarie'],
        queryFn: async () => {
            const res = await fetch(`https://handler-car-server-sumanta62.vercel.app/allCategary`)
            const data = await res.json()
            return data;
        }
    })
    if(isLoading){
        return <Spinner></Spinner>
    }

    return (
        <div id='Services' className='CarCategoriesSection py-16 '>
            <div className="container m-auto w-11/12 ">
                <div className='text-center'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-2">Our <span className='text-orange-500'>Services</span></h1>
                    <p className='text-sm'>Our staff has the knowledge and experience to get you into br the <br /> financing program that fits your budget and needs.</p>
                </div>

                <div className='max-w-6xl mt-8 mx-auto grid flex-cols md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        categaries.map(categary =>
                            <Categary
                                key={categary._id}
                                categary={categary}
                            ></Categary>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CarCategories;