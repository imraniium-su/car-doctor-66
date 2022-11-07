export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    console.log(currentUser);
    // get jwt token
    fetch('https://car-doctor-server-66.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('carDoctor-token', data.token);

        })

}