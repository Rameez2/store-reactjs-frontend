export const getUser = async () => {
    const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage (or other source)

    const response = await fetch(`${process.env.REACT_APP_API_URL}/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Set the Bearer token in the header
        },
    });

    const userData = await response.json();

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error(userData.error);
        }
        throw new Error('Failed to fetch user data');
    }

    return userData;
};
