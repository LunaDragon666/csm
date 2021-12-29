# Community Science Museum
...
## Website's folders 
...
### css
In this case I have arranged the CSS files somewhat differently than what I have done before. Now all html pages have their own css files under the same name and their own media queries for them, with the exception of items that are repeated across the site that are ``@imported`` from the subfolder ``featured`` (variables.css, nav.css, headers.css and footer.css) to split the code into smaller, more manageable code pieces to make it simpler for me to track when needed.
### pages
This folder contains all subpages of the website in html files that have their own css files (found in the css folder), which belongs to the main navigation field of the main page. The subpages that accompanies the main page consists of the following:
#### visit.html
Information about what you can find when we visit the museum and other practical information to think about before visiting Community Science Museum. 
#### exhibitions.html
Overview of all permanent exhibitions the museum has and arranges, where themes are placed in alphabetical order. If we click on one of the "exhibition themes" from the homepage, we'll be sent to this subpage. 
#### about.html
An about-page for Community Science Museum that presents offers and services they have to offer to us users. What they can provide to us users is informed (mainly for children, teachers- and researchers). 
#### workplace.html
A subpage that informs about the "career opportunities" that exist at the Community Science Museum, in addition to the idea of being able to make a donation to the museum. 
#### contact.html
This page leads directly to the contact form, where form validation are added. CSS Grid are used in this case to build the way form looks, that also could be done with flexbox. 
