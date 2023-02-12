import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';


const BookingModal = ({carBooking, setCarBooking}) => {
   const { user } = useContext(AuthContext);

    const handlerBookSubmit = event =>{
        event.preventDefault();
        const from = event.target;
        const mettingLocations= from.mettingLocations.value;
        const phone = from.phone.value;

        const booking ={
            prodiuct_name:carBooking.prodiuct_name,
            author_Name: user.displayName,
            price: carBooking.resale_price,
            email: user.email,
            phone,
            mettingLocations,
            img: carBooking.img,
        }
        
        fetch(`https://handler-car-server-sumanta62.vercel.app/bookings`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
           
            body: JSON.stringify(booking)
        })
        .then(res =>res.json())
        .then(data => {
            if(data.acknowledged){
                setCarBooking(null);
                toast.success("Booking Confirm");
            }
            else{
                toast.error(data.message);
            }
        })

    }

    return (
        <div >
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative text-black">
                <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{carBooking?.name}</h3>
                    <form onSubmit={handlerBookSubmit}  className="space-y-6 pt-8">
                        <div className="space-y-1 text-sm">
                            <input type="text" name="displayName" id="date" disabled defaultValue={user?.displayName}  className="w-full text-base px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input type="email" disabled defaultValue={user?.email}  name="email" id="Email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                        <input type="text" name="price" disabled  id="name" defaultValue={carBooking?.resale_price} placeholder="Full Name" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" />
                        </div>
                       
                        <div className="space-y-1 text-sm">
                            <input type="text" name="phone" id="phone" placeholder="Phone Number" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" required/>
                        </div>
                        <div className="space-y-1 text-sm">
                            <input type="text" name="mettingLocations" id="mettingLocations" placeholder="meeting location" className="w-full px-4 py-3 rounded-md border border-black dark:text-black focus:dark:border-violet-400" required/>
                        </div>
                        <button type='submit' className=" bg-orange-500 btn hover:bg-orange-500 block w-full p-3 text-center font-bold rounded-lg text-white ">BOOK NOW</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;