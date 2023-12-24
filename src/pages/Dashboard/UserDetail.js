import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function UserDetail() {
    const {id} = useParams();
    const location = useLocation();
    const [user, setUser] = useState(location.state);

    console.log(location);

    useEffect(() => {   
        if(!user?.id){

            fetch(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`)
            .then(res => res.json())
            .then((data) => setUser(data));
            
        }                           
            
    }, [id, user]);
  return (
    <div>
            <h2>Kullanıcı Detayları</h2>

            {
                    user && <pre>{JSON.stringify(user,null,2)}</pre>
            }
            <Link to={`/users/${Number(id) + 1 }`}>Sonraki Kullanıcı</Link>
            <br />
            <Link to={`/users/${Number(id) - 1 }`}>Önceki Kullanıcı</Link>
    </div>
  )
}

export default UserDetail
