//import jaelyn from "./asset/jaelyn.png";
import myr from "./asset/Jaelyn.jpg";
import zach from "./asset/ZacharyMcCann.jpg"
import danielle from "./asset/danielle.png"
import bryan from "./asset/bryan.jpg"
import justin from "./asset/justin.jpg"

import './css/App.css';
import './css/staff.css';

const Staff = () => {
    return (
        <div className="container">
            <h1>SoarCS Staff Members</h1>
            <div className="container">
                <div className="staff">
                    <img src={myr} alt="jaelyn" id="staff-picture"></img>
                    <h2>Jaelyn Dones</h2>
                    <p><b>Description:</b><br />I'm Jaelyn (also known as Jaelyn the great) and this will be my second year at UML, however, in terms of academics, I have junior status from taking summer classes and AP classes in high school. This is my first summer being a staff member of SoarCS and I am a SoarCS alum from 2020. As a part of Engaging Computing Group, this summer I was onboarded with the MYR development team and will be contributing to (and debugging) the MYR technology we used in our first week of SoarCS. I co-run a 3D printing business so in my free time, I am either picking out filament, packing up orders, or procrastinating by playing CS:GO. I am also an assistant tech supervisor at my local staples so I'm pretty good with computer hardware and software. </p>
                    <p><b>Favorite Technologies:</b><br />Windows 10 Bloatware Removal Tools & 3D Printing Technologies (of course)</p>
                </div>
                <hr />
                <div className="staff">
                    <img src={danielle} alt="danielle"id="staff-picture"></img>
                    <h2>Danielle Wattman</h2>
                    <p><b>Description:</b><br />I'm Danielle, and I'll be a sophomore this semester. It's my first year as a SoarCS staff member, and I'm a fellow SoarCS 2020 alum with Bryan and Jaelyn. My favorite personal project is an (unfinished) recreation of Boom Blox in virtual reality. I also enjoy making apps in Android Studio, and I hope to publish something one day, be it a game or a productivity app. In my spare time, I am most likely knitting while watching anime and/or listening to music.</p>
                    <p><b>Favorite Technologies:</b><br />Unity</p>
                </div>
                <hr />
                <div className="staff">
                    <img src={justin} alt="Justin" id="staff-picture"></img>
                    <h2>Justin Lu</h2>
                    <p><b>Description:</b><br/>Hi, my name is Justin. I'm a rising senior at UML. This is my third year being part of a SoarCS. Also, I'm a research assistant at the Engaging Computing Group, responsible for the development of MYR. In my spare time, I like to listen to music, play games, and do programming! Right now, I'm into graphical programming with C++ and OpenGL📺</p>
                    <p><b>Favorite Technologies:</b><br/>OpenGL,WebGL,HTML,JS,VSCode</p>
                </div>
                <hr />
                <div className="staff">
                    <img src={zach} alt="zach" id="staff-picture"></img>
                    <h2>Zach McCann</h2>
                    <p><b>Description:</b><br />I’m Zach, and I’m going into my third year at UML. This is my second year on SoarCS staff, as well as in Fred’s lab ECG (Engaging Computing Group). In addition to SoarCS, another ECG project I am heavily involved with is the Groundwater Analysis project, a collaboration between ECG and Professor James Heiss of the Environmental Science department. This is also my second year working on that project. I have a passion to see practical real-world applications for mathematics and computing, so working with ECG is a dream come true! In my free time, I love to go hiking, backpacking, and camping. I’ve hiked the entire MA section of the Appalachian Trail, as well as 90 miles of the VT section. I’d love to thru-hike the AT one day!</p>
                    <p><b>Favorite Technologies:</b><br />Ubuntu</p>
                </div>
                <hr />
                <div className="staff">
                    <img src={bryan} alt="bryan" id="staff-picture"></img>
                    <h2>Bryan Montalvan</h2>
                    <p><b>Description:</b><br />Hello everyone my name is Bryan and I am a rising Sophomore here at UMASS Lowell. I enjoy web dev, working out, and swimming!</p>
                    <p><b>Favorite Technologies:</b><br />VS Code, HTML/CSS</p>
                </div>
            </div>
        </div>
    );
}

export default Staff;