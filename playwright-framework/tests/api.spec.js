const { test, expect } = require('@playwright/test');

var userid = 11
    ;


test('post', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users',)

    data: {
        username: 'siva123';
        email: 'sivaram3@gmail.com'
    }


    expect(response.status()).toBe(201);
    const responsebody = await response.json();
    console.log(responsebody);
    expect(responsebody.username).toBe('siva123'),
        expect(responsebody.email).toBe('sivaram3@gmail.com')

});