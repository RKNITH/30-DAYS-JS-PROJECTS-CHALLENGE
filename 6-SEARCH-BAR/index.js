// document.addEventListener('DOMContentLoaded', () => {
//     const btn = document.getElementById('btn');
//     const inp = document.getElementById('inp');
//     const display = document.querySelector('.display');

//     const contents = [
//         { id: 'force', value: "newton" },
//         { id: 'mass', value: "kilogram" },
//         { id: 'time', value: "second" },
//         { id: 'velocity', value: "meter per second" },
//         { id: 'length', value: "meter" },
//         { id: 'current', value: "ampere" },
//         { id: 'acceleration', value: "meter per second square" },
//         { id: 'work', value: "joule" },
//     ];

//     // Function to display content
//     const displayContent = (items) => {
//         display.innerHTML = '';
//         items.forEach(cont => {
//             const item = document.createElement('div');
//             item.classList.add('content-item');
//             item.innerHTML = `<strong>${cont.id}:</strong> ${cont.value}`;
//             display.appendChild(item);
//         });
//     };

//     // Display initial content
//     displayContent(contents);

//     // Add search functionality
//     btn.addEventListener('click', () => {
//         const query = inp.value.toLowerCase();
//         const filteredContents = contents.filter(cont =>
//             cont.id.toLowerCase().includes(query) ||
//             cont.value.toLowerCase().includes(query)
//         );
//         displayContent(filteredContents);
//     });

//     // Optionally add real-time search as user types
//     inp.addEventListener('input', () => {
//         const query = inp.value.toLowerCase();
//         const filteredContents = contents.filter(cont =>
//             cont.id.toLowerCase().includes(query) ||
//             cont.value.toLowerCase().includes(query)
//         );
//         displayContent(filteredContents);
//     });
// });




document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const inp = document.getElementById('inp');
    const display = document.querySelector('.display');

    const contents = [
        { id: 'force', value: "newton" },
        { id: 'mass', value: "kilogram" },
        { id: 'time', value: "second" },
        { id: 'velocity', value: "meter per second" },
        { id: 'length', value: "meter" },
        { id: 'current', value: "ampere" },
        { id: 'acceleration', value: "meter per second square" },
        { id: 'work', value: "joule" },
    ];

    // Function to display content
    const displayContent = (items) => {
        display.innerHTML = '';
        items.forEach(cont => {
            const item = document.createElement('div');
            item.classList.add('content-item');
            item.innerHTML = `<strong>${cont.id}:</strong> ${cont.value}`;
            display.appendChild(item);
        });
    };

    // Display initial content
    displayContent(contents);

    // adding search functionality

    btn.addEventListener('click', () => {
        const query = inp.value.toLowerCase()
        const filterContent = contents.filter((con) =>
            con.id.toLowerCase().includes(query) ||
            con.value.toLowerCase().includes(query)
        )
        displayContent(filterContent)

    })

    // real time searching

    inp.addEventListener('input', () => {
        const query = inp.value.toLowerCase()
        const filterContent = contents.filter((con) =>
            con.id.toLowerCase().includes(query) ||
            con.value.toLowerCase().includes(query)
        )
        displayContent(filterContent)

    })
















})












































