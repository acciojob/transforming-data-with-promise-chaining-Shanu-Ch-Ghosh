//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
    // Get the number from the input
    const inputNumber = parseFloat(document.getElementById('ip').value);
    
    if (isNaN(inputNumber)) {
        document.getElementById('output').textContent = 'Please enter a valid number';
        return;
    }
    
    // Create the first promise
    const initialPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputNumber);
        }, 2000);
    });
    
    // Chain the promises
    initialPromise
        .then(number => {
            document.getElementById('output').textContent = `Result: ${number}`;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(number * 2);
                }, 1000);
            });
        })
        .then(number => {
            document.getElementById('output').textContent = `Result: ${number}`;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(number - 3);
                }, 1000);
            });
        })
        .then(number => {
            document.getElementById('output').textContent = `Result: ${number}`;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(number / 2);
                }, 1000);
            });
        })
        .then(number => {
            document.getElementById('output').textContent = `Result: ${number}`;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(number + 10);
                }, 1000);
            });
        })
        .then(number => {
            document.getElementById('output').textContent = `Final Result: ${number}`;
        })
        .catch(error => {
            document.getElementById('output').textContent = `Error: ${error}`;
        });
});
