document.querySelector("#changeTheme").addEventListener("click", () => {
    if (localStorage.getItem('theme') == "dark") {
        document.querySelector("html").setAttribute('theme', localStorage.getItem('theme'));
        localStorage.setItem('theme', 'light');
    }
    else {
        document.querySelector("html").setAttribute('theme', localStorage.getItem('theme'));
        localStorage.setItem('theme', 'dark');
    }
})