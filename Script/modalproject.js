var lastModal;

function changeClass(modalType) {
    document.getElementById("modal-c").className = modalType;
    document.body.classList.add("body-opened");
}

function returnBody(modalType) {
    document.body.classList.remove("body-opened");
}

function openModal(projectId) {
    changeClass('modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClick);
}

function openModalAbout(projectId) {
    changeClass('about-modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClickAbout);
}

function openModalDemo(projectId) {
    changeClass('demo-modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClickDemo);
}

function closeModal() {
    var modal = document.getElementById("myModal");
    var youtubeVideo = document.getElementById("youtubeVideo");
    returnBody();

    youtubeVideo.src = "";
    window.removeEventListener('click', outsideClick);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function closeModalAbout() {
    var modal = document.getElementById("myModal");

    returnBody();

    window.removeEventListener('click', outsideClickAbout);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function closeModalDemo() {
    var modal = document.getElementById("myModal");
    var youtubeVideo = document.getElementById("youtubeVideo");
    returnBody();

    youtubeVideo.src = "";
    window.removeEventListener('click', outsideClickDemo);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function outsideClick(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModal();
    }
}

function outsideClickAbout(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModalAbout();
    }
}

function outsideClickDemo(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModalDemo();
    }
}

function getProjectContent(projectId) {

    var videoId; // Set the YouTube video ID for each project
    var projectContent;

    // Determine the video ID and project information based on the selected project
    switch (projectId) {
        case 'about':
            videoId = '';
            projectContent = `
                            <div class="about-title-bg">
                                <h2 class="project-title">About me</h2>
                            </div>
                         

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>
                                I’m a Game Programmer with a B.Tech in Computer Science (Games and Graphics) at Chandigarh University. With a solid foundation in C#, C++, and Unity, I specialize in 2D and 3D game development, gameplay mechanics, and enemy AI. I've worked on projects like Grave Shooter, Bullet Bros, and Dungeon Diver, and gained industry experience through internships at Redfaux Games and Wizveda Technologies. <br><br>

Alongside development, I’ve contributed as a Graphics Head for IEEE CUSB and a designer for GDG Chandigarh, blending creativity with technical skills. I’m passionate about building engaging, interactive experiences and enjoy working in collaborative environments.                                    </p>
                                </div>
                            </div>

                            <div class="project-stack">
                                <h2>Stack</h2>
                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/unity.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/csharp.png">
                                </a>                             

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/clanguage.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/construct3.png">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModalAbout()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'demo':
            videoId = 'X4AbyjhvVHM?si=X_6ZS1wjPM4crLG3';
            projectContent = `
                            <div class="demo-title-bg">
                                <h2 class="project-title">Demo reel</h2>
                            </div>

                            <div class="demo-video-BG">
                            <div class="demo-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>
Welcome! This is my demo reel showcasing a selection of my game development projects, highlighting the skills and creativity I've applied across different platforms. I hope you enjoy watching and feel inspired by the work!                                    </p>
                                </div>
                            </div>

                            <div class="demo-close">
                                <span onclick="closeModalDemo()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;

        case 'project1':
            videoId = 'cj8bF3dKHIc';
            projectContent = `
                            <div class="title-bg">
                                <h2 class="project-title">Dungeon Diver</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Dungeon crawler, Rouguelike game where you fight mosters in dungeon to collect money and upgrade the character abilities. Fight your way throught the maze like dungeon to find and fight the evil lich, save the villagers and uncover the mysteries of the dungeon.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>

                                <a href="https://jerryrigg.itch.io/dungeon-diver" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Itch.png" alt="Itch">
                                </a>

                                <a href="https://www.linkedin.com/posts/riggdev_unity-gamedevelopment-indiegame-activity-7215342294835552256-iRKS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjtUzUBxFYEcjaxCa_ORXEaoCN6DwLq0uE" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Linkedin.png" alt="Linkedin">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project2':
            videoId = 'P9u9ualbrMU';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Bullet Bros</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Step back into a couch multiplayer with your friend and outcompete them with your skills in an entirely destructable world. Each player starts with a unique character with unique gun abilities. Every death randomizes the ability and sends you back in combat.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>

                                <a href="https://jerryrigg.itch.io/bulletbros" target="_blank" class="social-icon device" style="margin-left: 0px">
                                    <img src="Images/Itch.png" alt="Itch">
                                </a>
                                <a href="https://globalgamejam.org/games/2024/bulletbros-6" target="_blank" class="social-icon device" style="margin-left: 0px">
                                    <img src="Images/unity.png" alt="GameJam">
                                </a>
                                <a href="https://www.linkedin.com/posts/riggdev_bulletbros-by-krishanshu-activity-7218634228958134275-IPsp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjtUzUBxFYEcjaxCa_ORXEaoCN6DwLq0uE" target="_blank" class="social-icon device" style="margin-left: 0px">
                                    <img src="Images/Linkedin.png" alt="Linkedin">
                                </a>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project3':
            videoId = '7gN_NdDX8IQ';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Grave Buster</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Single Player point and click shooter where you stop zombies from getting to your treasure. Now, how long can you survive?</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>


                                <a href="https://jerryrigg.itch.io/grave-buster" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Itch.png" alt="Itch">
                                </a>

                                <a href="https://www.linkedin.com/posts/riggdev_grave-buster-by-jerryrigg-activity-7214608207896301568-LnZp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjtUzUBxFYEcjaxCa_ORXEaoCN6DwLq0uE" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Linkedin.png" alt="Linkedin">
                                </a>
                             
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project4':
            videoId = 'TTuAY8idYdw';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Golfin</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Play a simple Golf game with smooth realistic physics based mechanics.</p>
                                </div>
                            </div>

                           
                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>                                
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project5':
            videoId = '_763vbBq-Uo';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Bomb Survivor</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                     <p>Simple Hypercasual game, avoid bombs, throw grenade and molotovs and collect different weapons along the way.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>                                
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project6':
            videoId = 'Jtj8wSF2upw';
            projectContent = `
                         <div class="title-bg">
                                <h2 class="project-title">Car Racers</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Compete with cars to reach the finish line first make sure to not overspeed, you just might spin out.</p>
                                </div>
                            </div>

         
                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>                                
                            </div>                

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
    }


    return projectContent;
}

