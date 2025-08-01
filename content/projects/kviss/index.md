---
title: "Kviss (AI)"
date: "2023-06-01"
slug: "projects/kviss"
type: "Web development"
github: "https://github.com/juliadyrdal/kviss-frontend"
url: "https://kviss-frontend-rv5a.onrender.com"
order: 1
icon: "trophy"
tech: ["Vue", "Nuxt", "Tailwindcss", "Node.js", "Express", "Socket.io"]
description: "'Kviss' is a web application where users can create quizes and play against their friends or test themselves solo. The app leverages AI (GPT-model 4o) to create the quiz for you. Simply enter a theme, level of difficulty, number of questions and invite your friends!"
---

::Heading 
#heading 
Kviss Web Application
::

::Links
#links

    :::WebLink
    #link
    [View web application](https://kviss-frontend-rv5a.onrender.com)
    :::

    :::GithubLink
    #link
    [View frontend on Github](https://github.com/juliadyrdal/kviss-frontend)
    :::

    :::GithubLink
    #link
    [View backend on Github](https://github.com/juliadyrdal/kviss-backend)
    :::

::

::SectionHeading
#text
Project overview
::

::SectionCopy
#text
'Kviss' is a web application where users can create quizes and play against their friends or test themselves solo. The app leverages AI (GPT-model 4o) to create the quiz for you. Simply enter a theme, level of difficulty, number of questions and invite your friends!
::

::SectionCopy
#text
The 'Kviss' quiz app was born when I was living abroad and wanted a way to play quiz games in real time with family. The existing solutions didn't meet our criteria, as 1 person would have to act as the 'quiz master' and we quickly ran out of pre-made quizzes. We also wanted the game to wait for all players to finish a question before moving on to the next question, to increase the feeling of playing 'together'. The game was created to be played with all players on video call together, but works just as well without.  
::

::SectionCopy
#text
From these requirements I created wireframes in Figma. I tried to make the design playful without cluttering the UI.
::

::SectionHeading
#text
Technical description
::

::SectionCopy
#text
The frontend is built with Vue.js with composition API, Nuxt, Pinia for state management and TailwindCSS. The backend is built with Node, the Express framework, Socket.io and Mongoose. Database is MongoDB Atlas. Open AI's GPT-model 4o is used to generate quizzes. 
::

::SectionHeading
#text
Technical challenges
::

::SectionCopy
#text
Getting a consitently formatted response from Open AI's GPT-model 4o was a bit of a challenge. I solved this by giving it a detailed prompt which included an example format, and added logic to extract only the JSON part of the response, as well as validating the structure. Working with Socket.io was challenging as it was new to me and there is a bit om game logic, but I learnt a lot.
::

::SectionHeading
#text
Roadmap
::

::SectionListHeading
#heading
UX enhancements
#text
- [ ] Improve loading message while quiz is being generated.
- [ ] Improve loading indicators between questions.
- [ ] Improve UX on the landing page: users are confused due to too many options. Narrow down to 'Create quiz' and 'Join quiz'.
::

::SectionListHeading
#heading
Features
#text
- [ ] Increase randomness of questions.
::