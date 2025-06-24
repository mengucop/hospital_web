<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
    <style>
        /* Global Styles */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f7fafc;
            color: #4A5568;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            margin-top: 50px;
        }

        header h1 {
            font-size: 2.5rem;
            color: #2D3748;
            margin-bottom: 10px;
        }

        header p {
            font-size: 1.25rem;
            color: #4A5568;
            margin-bottom: 30px;
        }

        /* Team Members Section */
        .team-members {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            justify-content: start;
            margin-top: 50px;
        }

        .team-member {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 280px;
            text-align: left;
            transition: transform 0.3s ease-in-out;
        }

        .team-member:hover {
            transform: scale(1.05);
        }

        .team-member img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
        }

        .team-member h3 {
            font-size: 1.5rem;
            color: #2D3748;
            margin-bottom: 5px;
        }

        .team-member p {
            font-size: 1rem;
            color: #718096;
        }

        .team-member .role {
            font-weight: bold;
            color: #4CAF50;
        }

        /* Project Overview Section */
        .project-overview {
            margin-top: 50px;
        }

        .project-overview h2 {
            font-size: 2rem;
            color: #2D3748;
            margin-bottom: 15px;
        }

        .project-overview p {
            font-size: 1.25rem;
            color: #4A5568;
            margin-bottom: 20px;
        }

        .project-overview ul {
            font-size: 1.1rem;
            color: #4A5568;
            margin-top: 15px;
            list-style-type: square;
            padding-left: 20px;
        }

    </style>
</head>
<body>

    <div class="container">
        <header>
            <h1>Meet the Team</h1>
            <p>We are a dedicated group of students from class RCDCS2515B, enrolled in the ICT602 – Mobile Technology and Development course. Our team is committed to creating innovative solutions through teamwork, creativity, and technical expertise.</p>
        </header>

        <section class="team-members">
            <div class="team-member">
                <img src="yusof.png" alt="Yusof Abbad Bin Abdul Aziz">
                <h3>Yusof Abbad Bin Abdul Aziz</h3>
                <h3>2023262184</h3>
                <p class="role">Lead Developer & Project Manager</p>
                <p>Yusof is the backbone of our project, steering the development process and overseeing the team's efforts. His passion for mobile and web technologies drives the technical aspects of our app, ensuring it's robust and user-friendly.</p>
            </div>
            <div class="team-member">
                <img src="imran1.png" alt="Muhammad Imran Bin Mohamad Tarmizi">
                <h3>Muhammad Imran Bin Mohamad Tarmizi</h3>
                <h3>2023627612</h3>
                <p class="role">UI/UX Designer</p>
                <p>Imran brings the vision to life with his design expertise. He focuses on creating intuitive, aesthetically pleasing interfaces that enhance user experience while making sure everything is easy to navigate.</p>
            </div>
            <div class="team-member">
                <img src="harris.png" alt="Muhammad Harris Bin Pairus">
                <h3>Muhammad Harris Bin Pairus</h3>
                <h3>2023679774</h3>
                <p class="role">Mobile app Developer</p>
                <p>Harris is responsible for the critical back-end structure of our project. His work ensures that the app runs smoothly, handling everything from databases to server-side interactions.</p>
            </div>
            <div class="team-member">
                <img src="imran2.png" alt="Muhammad Imran Bunyamin Bin Mohd Suder">
                <h3>Muhammad Imran Bunyamin Bin Mohd Suder</h3>
                <h3>2023643264</h3>
                <p class="role">Developer</p>
                <p>Imran focuses on building the mobile application, turning ideas into functional and engaging mobile features. His skills ensure that the app is compatible across a range of devices and platforms.</p>
            </div>
            <div class="team-member">
                <img src="asyraf.png" alt="Asyraf Ammar Bin Mahadi">
                <h3>Asyraf Ammar Bin Mahadi</h3>
                <h3>2023286158</h3>
                <p class="role">Database & System Architect</p>
                <p>Asyraf ensures our apps database is secure, efficient, and scalable. His expertise in system architecture allows our project to handle future growth and maintain optimal performance.</p>
            </div>
        </section>

        <section class="project-overview">
            <h2>About Our Project</h2>
            <p>This project is a product of our teamwork and the skills we've developed throughout our course. Through rigorous research, collaboration, and problem-solving, we have built a functional web and efficient mobile application</p>
            <p>Our app is designed with a focus on user experience, simplicity, and efficiency. Here’s a closer look at what we’ve accomplished:</p>
            <ul>
                <li>End-to-end mobile app development</li>
                <li>Responsive user interface for all screen sizes</li>
                <li>Database architecture with scalable backend</li>
                <li>Real-world application solving practical problems</li>
                <li>Optimized performance and speed for a seamless experience</li>
            </ul>
            <p>Working on this project was a fantastic learning opportunity, and we hope you enjoy exploring the app as much as we enjoyed creating it!</p>
        </section>
    </div>

</body>
</html>
