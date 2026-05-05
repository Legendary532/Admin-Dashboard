document.addEventListener("DOMContentLoaded", function () {
    const sideMenu = document.querySelector("aside");
    const menuBtn = document.querySelector("#menu-toggle-btn");  // Hamburger icon
    const closeBtn = document.querySelector("#close-btn");      // Close button
    const menuToggleBtn = document.querySelector("#menu-toggle-btn"); // Menu toggle button
    const themeToggler = document.querySelector('.theme-toggler');

    // Check localStorage for theme preference and apply it
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme-variables');
        themeToggler.querySelector('i:nth-child(1)').classList.add('active');
        themeToggler.querySelector('i:nth-child(2)').classList.add('active');
    } else {
        document.body.classList.remove('dark-theme-variables');
        themeToggler.querySelector('i:nth-child(1)').classList.remove('active');
        themeToggler.querySelector('i:nth-child(2)').classList.remove('active');
    }

    // Toggle dark mode and light mode
    themeToggler.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-theme-variables');

        // Save the theme preference to localStorage
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
            themeToggler.querySelector('i:nth-child(1)').classList.add('active');
            themeToggler.querySelector('i:nth-child(2)').classList.add('active');
        } else {
            localStorage.setItem('theme', 'light');
            themeToggler.querySelector('i:nth-child(1)').classList.remove('active');
            themeToggler.querySelector('i:nth-child(2)').classList.remove('active');
        }
    });

    // Show the side menu when the hamburger icon is clicked
    menuToggleBtn.addEventListener('click', () => {
        sideMenu.classList.remove('hide');
        sideMenu.classList.add('show');  // Show the side menu
        closeBtn.style.display = 'block'; // Show close button
        menuToggleBtn.style.display = 'none';  // Hide hamburger icon
    });

    // Hide the side menu when the close button is clicked
    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('show');
        sideMenu.classList.add('hide');  // Hide the side menu
        closeBtn.style.display = 'none'; // Hide close button
        menuToggleBtn.style.display = 'block'; // Show hamburger icon
    });
    
    // Orders table population (your existing logic)
    const orders = [
        {
            productName: 'Foldable Mini Drone',
            productNumber: '85631',
            paymentStatus: 'Due',
            shipping: 'Pending'
        },
        {
            productName: 'LARVENDER KF102 Drone',
            productNumber: '36378',
            paymentStatus: 'Refunded',
            shipping: 'Declined'
        },
        {
            productName: 'Ruko F11 Pro Drone',
            productNumber: '49347',
            paymentStatus: 'Due',
            shipping: 'Pending'
        },
        {
            productName: 'Drone with Camera Drone',
            productNumber: '96996',
            paymentStatus: 'Paid',
            shipping: 'Delivered'
        },
        {
            productName: 'GPS 4k Drone',
            productNumber: '22821',
            paymentStatus: 'Paid',
            shipping: 'Delivered'
        },
        {
            productName: 'DJI Air 25',
            productNumber: '81475',
            paymentStatus: 'Paid',
            shipping: 'Delivered'
        },
        {
            productName: 'Lozenge Drone',
            productNumber: '00482',
            paymentStatus: 'Paid',
            shipping: 'Delivered'
        }
    ];

    // Populate orders in the table
    orders.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
            <td class="primary">Details</td>
        `;
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
    });
});
