---
title: "Youwish"
date: "2023-06-01"
slug: "projects/youwish"
type: "Web development"
github: "https://github.com/juliadyrdal/youwish-frontend"
url: "https://youwish-frontend.onrender.com"
order: 1
icon: "bookmark"
tech: ["Vue", "Nuxt", "Tailwindcss", "Node.js", "Express"]
description: "Youwish is a web application where users can save products from online stores in a wishlist. The items are saved in storage, so users can come back later and view them, open the external product URL, or remove the item from the list."
---

::Heading 
#heading 
Youwish Web Application
::

::Links
#links

    :::WebLink
    #link
    [View web application](https://youwish-frontend.onrender.com)
    :::

    :::GithubLink
    #link
    [View on Github](https://github.com/juliadyrdal/youwish-frontend)
    :::

    :::GithubLink
    #link
    [View API on Github](https://github.com/juliadyrdal/product-data-api)
    :::

::

::SectionHeading
#text
Project overview
::

::SectionCopy
#text
Youwish is a web application where users can save products from online stores in a wishlist. The items are saved in storage, so users can come back later and view them, open the external product URL, or remove the item from the list.
::

::SectionHeading
#text
Technical description
::

::SectionCopy
#text
The frontend is built with Vuejs composition api, and Nuxt with SSR. Pinia is used for tracking the wishlist items, but also the state of UI elements, such as the 'add item' modal. A vue composable is used to fetch product metadata asynchronously from the server, and added to the wishlist store with a Pinia action. The backend is built with Nodejs and the Express framework. When a GET request is made to the api/meta endpoint, metascraper runs a function to first scrape the HTML of the provided URL, and then extract the relevant metadata and respond with an object if there are no errors.
::

::SectionHeading
#text
Technical challenges
::

::SectionCopy
#text
I chose to use the external library metascraper over a web scraper like Cheerio of Puppeteer as the different conventions used by online stores made it too difficult and time consuming to try to cover all of them.
::

::SectionHeading
#text
Roadmap
::

::SectionListHeading
#heading
UX enhancements
#text
- Empty state with CTA when no items have been saved to wishlist.
- Warning dialog box after clicking 'remove item'.
- Make 'add item' module more intuitive by hiding the input field after clicking 'find item' button, and then showing a loading animation, before finally displaying the results.
- Error state whewn product is not found or is sold out, both in the 'add item' module and in the wishlist.
::

::SectionListHeading
#heading
Features
#text
- Ability to create multiple wishlists and decide which wishlist to add a new item to.
- Save wishlists and items to a MongoDB database,
- Implement authentication with Auth0.
::