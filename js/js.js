function toggleMenu() {
    var bars = document.querySelectorAll('.mobile-bars .bars');
    bars.forEach(bar => {
        bar.classList.toggle('rotate');
    });

    var sidebars = document.querySelectorAll('.dashboar-bar'); // corrected selector

    sidebars.forEach(sidebar => {
        sidebar.classList.toggle('side-bar-show');
    });

}

    function openSettings() {
        var div = document.getElementById('create-settings');
        if (div.style.display === 'flex') {
            div.style.display = 'none';
        } else {
            div.style.display = 'flex';
        }
    }

    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.classList.add("active");
    }
    
    // Show the default tab on page load
    document.getElementById("tab1").style.display = "block";
    document.getElementsByClassName("tablink")[0].classList.add("active");