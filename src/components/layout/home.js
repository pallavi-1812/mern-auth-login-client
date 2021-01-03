import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

const Home = () => {

    const { userData } = useContext(UserContext);

    return (
        <div className="row heading">
            {userData.user ? <p>Hello {userData.user.displayName}!You are logged in!</p>
                : <p>
                    A full-stack app with user authentication via
            passport and JWTs</p>
            }
        </div>
    );
}

export default Home;