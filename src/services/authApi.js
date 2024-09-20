// Function to log in
export async function loginUser (credentials) {
        // Send a POST request with credentials
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        // Parse the JSON response
        const data = await response.json();

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(data.error);
        }
        return data;
}
