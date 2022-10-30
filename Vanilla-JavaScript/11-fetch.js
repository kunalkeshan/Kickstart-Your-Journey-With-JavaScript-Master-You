/**
 * Fetch API
 * (use your browser for the best experience)
 * (open the pages/10.html file in your browser)
 * An built feature in browser JavaScript to access data from some location that is not 
 * with us.
 */

/**
 * Basic syntax
 * fetch("url to the location")
 * Return a promise
 */

const root = document.getElementById("root");

// Using Promise chaining (then...then..catch)
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            root.innerHTML += `
                <div class="bg-white p-2 rounded-lg max-w-[60%] mx-auto text-[#9095A0]">
                    <h3 class="text-xl">${data[i].title}</h3>
                    <p class="text-xs">${data[i].body}</p>
                </div>
            `
        }
    })
    .catch((error) => {
        console.log(error)
        root.innerText = `
            Unable to fetch information ❌.
            Error: ${error.message}
        `
    })

// Using async / await keywords based functions
// const populatePosts = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
//         for (let i = 0; i < data.length; i++) {
//             root.innerHTML += `
//                 <div class="bg-white p-2 rounded-lg max-w-[60%] mx-auto text-[#9095A0]">
//                     <h3 class="text-xl">${data[i].title}</h3>
//                     <p class="text-xs">${data[i].body}</p>
//                 </div>
//             `
//         }
//     } catch (error) {
//         console.log(error);
//         root.innerText = `
//             Unable to fetch information ❌.
//             Error: ${error.message}
//         `
//     }
// }

// populatePosts();