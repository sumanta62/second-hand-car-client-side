import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../../Spinner/Spinner';
import Categary from './Categary';
import './Catagory.css'
import bgImg from '../../../../Images/catagogy/pexels-albin-berlin-919073.jpg'

const CarCategories = () => {
    const { data: categaries = [], isLoading } = useQuery({
        queryKey: ['categarie'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allCategary`)
            const data = await res.json()
            return data;
        }
    })
console.log(categaries);
    if(isLoading){
        return <Spinner></Spinner>
    }

    return (
        <div className='CarCategoriesSection py-14 ' style={{backgroundImage:`url(${bgImg})`,}}>
            <div className="container m-auto w-11/12 text-white ">
                <div className='text-center'>
                    <h1 className="text-4xl font-bold pb-2">Our Category</h1>
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