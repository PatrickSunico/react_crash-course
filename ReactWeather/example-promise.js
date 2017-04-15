function getTempPromise(location) {
    // function that returns a new promise once getTempPromise is called
    return new Promise(function(resolve, reject) {
        // call resolve or reject can only be called once when or if the statement is true 

        // if success add the temp data
        resolve(79);
        // else if fail reject 
        reject('City Not Found');
    });
}
// then - Attaches callbacks for the resolution and/or rejection of the Promise.
// then can be attached to function call for sucess and error handling
getTempPromise('Philadelphia').then(
    // success
    function(temp) {
        // console.log(location);
        console.log('Promise Success', temp);
    },
    // error 
    function(err) {
        console.log('Promise Error', err);
    }
);

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        // return ((typeof a == (a) && b == Number(b)) ? resolve(a + b) : reject('NaN'));
        return (typeof a == 'number' && typeof b == 'number') ? resolve(a + b) : reject('NaN');
    });
}

addPromise(2, 10).then(
    function(number) {
        console.log('Promise Success', number);
    },
    function(err) {
        console.log('Promise Error', err);
    }
);