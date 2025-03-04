import React, { useState } from "react";
import "../styles/teams.css";
import picture1 from "../assets/1.webp";
import picture2 from "../assets/2.webp";
import picture3 from "../assets/3.webp";

const teamsData = [
    {
        id: 1,
        name: "Команда 1",
        description: `Tokyo Ghoul is set in an alternate reality where ghouls, creatures that look like normal people but can only survive by eating human flesh, live among the human population in secrecy, hiding their true nature in order to evade pursuit from the authorities. Ghouls have powers including enhanced strength, speed, endurance and regenerative abilities—a regular ghoul produces 4–7 times more kinetic energy in their muscles than a normal human; they also have several times the RC cells, a cell that flows like blood and can become solid instantly. A ghoul's skin is resistant to ordinary piercing weapons, and it has at least one special predatory organ called a Kagune (赫子), which it can manifest and use as a weapon during combat. Another distinctive trait of ghouls is that when they are excited or hungry, the color of their sclera in both eyes turns black and their irises red. This mutation is known as kakugan.
        Tokyo Ghoul is set in an alternate reality where ghouls, creatures that look like normal people but can only survive by eating human flesh, live among the human population in secrecy, hiding their true nature in order to evade pursuit from the authorities. Ghouls have powers including enhanced strength, speed, endurance and regenerative abilities—a regular ghoul produces 4–7 times more kinetic energy in their muscles than a normal human; they also have several times the RC cells, a cell that flows like blood and can become solid instantly. A ghoul's skin is resistant to ordinary piercing weapons, and it has at least one special predatory organ called a Kagune (赫子), which it can manifest and use as a weapon during combat. Another distinctive trait of ghouls is that when they are excited or hungry, the color of their sclera in both eyes turns black and their irises red. This mutation is known as kakugan.
        Tokyo Ghoul is set in an alternate reality where ghouls, creatures that look like normal people but can only survive by eating human flesh, live among the human population in secrecy, hiding their true nature in order to evade pursuit from the authorities. Ghouls have powers including enhanced strength, speed, endurance and regenerative abilities—a regular ghoul produces 4–7 times more kinetic energy in their muscles than a normal human; they also have several times the RC cells, a cell that flows like blood and can become solid instantly. A ghoul's skin is resistant to ordinary piercing weapons, and it has at least one special predatory organ called a Kagune (赫子), which it can manifest and use as a weapon during combat. Another distinctive trait of ghouls is that when they are excited or hungry, the color of their sclera in both eyes turns black and their irises red. This mutation is known as kakugan.
        Tokyo Ghoul is set in an alternate reality where ghouls, creatures that look like normal people but can only survive by eating human flesh, live among the human population in secrecy, hiding their true nature in order to evade pursuit from the authorities. Ghouls have powers including enhanced strength, speed, endurance and regenerative abilities—a regular ghoul produces 4–7 times more kinetic energy in their muscles than a normal human; they also have several times the RC cells, a cell that flows like blood and can become solid instantly. A ghoul's skin is resistant to ordinary piercing weapons, and it has at least one special predatory organ called a Kagune (赫子), which it can manifest and use as a weapon during combat. Another distinctive trait of ghouls is that when they are excited or hungry, the color of their sclera in both eyes turns black and their irises red. This mutation is known as kakugan.`,
        image: picture1
    },
    {
        id: 2,
        name: "Команда 2",
        description: "Bleach is the generic name for any chemical product that is used industrially or domestically to remove color from (i.e. to whiten) fabric or fiber (in a process called bleaching) or to disinfect after cleaning. It often refers specifically to a dilute solution of sodium hypochlorite, also called.",
        image: picture2
    },
    {
        id: 3,
        name: "Команда 3",
        description: "Blue Lock (Japanese: ブルーロック, Hepburn: Burū Rokku) (stylized as BLUELOCK) is a Japanese manga series written by Muneyuki Kaneshiro and illustrated by Yusuke Nomura [ja]. It has been serialized in Kodansha's Weekly Shōnen Magazine since August 2018, with its chapters collected in 32 tankōbon volumes as of December 2024.",
        image: picture3
    },
    {
        id: 4,
        name: "Команда 4",
        description: "Blue Lock (Japanese: ブルーロック, Hepburn: Burū Rokku) (stylized as BLUELOCK) is a Japanese manga series written by Muneyuki Kaneshiro and illustrated by Yusuke Nomura [ja]. It has been serialized in Kodansha's Weekly Shōnen Magazine since August 2018, with its chapters collected in 32 tankōbon volumes as of December 2024.",
        image: picture3
    },
    {
        id: 5,
        name: "Команда 5",
        description: "Bleach is the generic name for any chemical product that is used industrially or domestically to remove color from (i.e. to whiten) fabric or fiber (in a process called bleaching) or to disinfect after cleaning. It often refers specifically to a dilute solution of sodium hypochlorite, also called.",
        image: picture2
    },
    {
        id: 6,
        name: "Команда 6",
        description: "Tokyo Ghoul is set in an alternate reality where ghouls, creatures that look like normal people but can only survive by eating human flesh, live among the human population in secrecy, hiding their true nature in order to evade pursuit from the authorities. Ghouls have powers including enhanced strength, speed, endurance and regenerative abilities—a regular ghoul produces 4–7 times more kinetic energy in their muscles than a normal human; they also have several times the RC cells, a cell that flows like blood and can become solid instantly. A ghoul's skin is resistant to ordinary piercing weapons, and it has at least one special predatory organ called a Kagune (赫子), which it can manifest and use as a weapon during combat. Another distinctive trait of ghouls is that when they are excited or hungry, the color of their sclera in both eyes turns black and their irises red. This mutation is known as kakugan. ",
        image: picture1
    },
    {
        id: 7,
        name: "Команда 7",
        description: "Bleach is the generic name for any chemical product that is used industrially or domestically to remove color from (i.e. to whiten) fabric or fiber (in a process called bleaching) or to disinfect after cleaning. It often refers specifically to a dilute solution of sodium hypochlorite, also called.",
        image: picture2
    }
];

const Teams = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [direction, setDirection] = useState(0); 

    const nextSlide = () => {
        setDirection(1);
        setActiveSlide((prev) => (prev === teamsData.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveSlide((prev) => (prev === 0 ? teamsData.length - 1 : prev - 1));
    };

    return (
        <div className="teams">
            <div className="slider">
                <button className="prev-button" onClick={prevSlide}>◀</button>
                {teamsData.map((team, index) => (
                    <img
                        key={team.id}
                        src={team.image}
                        alt={team.name}
                        className={
                            index === activeSlide
                                ? "active"
                                : index === (activeSlide - 1 + teamsData.length) % teamsData.length
                                ? "prev"
                                : "next"
                        }
                    />
                ))}
                <button className="next-button" onClick={nextSlide}>▶</button>
            </div>

            <div className="team-info">
                <h2>{teamsData[activeSlide].name}</h2>
                <p>{teamsData[activeSlide].description}</p>
            </div>
        </div>
    );
};

export default Teams;