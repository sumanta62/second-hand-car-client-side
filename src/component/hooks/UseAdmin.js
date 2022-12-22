import { useEffect, useState } from "react";


const UseAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [ isAdminLoding, setIsAdminLoding] = useState(true);

    useEffect(() =>{
        if(email){
            fetch(`https://handler-car-server-sumanta62.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data =>{
                setIsAdmin(data.isAdmin);
                setIsAdminLoding(false)
            })
        }
    }, [email])
    return [ isAdmin , isAdminLoding]
};

export default UseAdmin;