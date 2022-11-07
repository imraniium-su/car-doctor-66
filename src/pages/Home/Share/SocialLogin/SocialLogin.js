import React, { useContext } from 'react';
import { setAuthToken } from '../../../../apiservice/auth';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSingin } = useContext(AuthContext);
    const handleGooglesingin = () => {
        googleSingin()
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <p className='text-center'>Social login</p>
            <p className='text-center'>
                <button onClick={handleGooglesingin} className='btn btn-ghost '>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;