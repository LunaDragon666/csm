# Community Science Museum
Please read through this ReadMe-file before checking out this prototype version of the website and its content, for better understanding of the website's functions, navigation and its purpose. It is also recommended to read throughout the report, before visiting the website that accompanies in the submission folder of the semester project.
## Website's folders and their functions
There's some comprehensive descriptions of the folders and files for the website build on mobile-first principle and responsive design in mind. The files that belong to this folder that are not embedded in the "subfolders" of this folder are the main page (index.html) and the css files that belong to it (style.css) with this ReadMe-file. Media-file contains collections of media queries that is a css-file used to modify different screen sizes in one and same website to be embedded for index.html.
I tried to put all media queries in one and the same css file, but think some of the "data" that belonged to the index page was overwritten, and therefore did not work for me. Therefore I couldn't test out properly for myself the benefits to gather all media queries in one and the same file, based on the time and knowlegde I had left.
However, in this project I think it was easier for me to have my own media queries for each subpage located at the very bottom of their css files, because I experienced that in this way I had a better overview of each simple media query in relation to where on the page they are located - since I can easily get "lost" or in some cases "loose track" in coding.
### CSS
In this case I have arranged the CSS files somewhat differently than what I have done before. Now all html pages have their own css files under the same name and their own media queries for them, with the exception of items that are repeated across the site that are @imported from the subfolder ``featured`` (variables.css, nav.css, headers.css and footer.css) to split the code into smaller, more manageable ways to make it simpler for me to track when needed.
### Pages
This folder contains all subpages of the website in html files that have their own css files (found in the css folder), which belongs to the main navigation field of the main page. The subpages that accompanies the main page consists of the following:
#### Visit.html
Information about what you can find when we visit the museum and other practical information to think about before visiting Community Science Museum. 
#### Exhibitions.html
Overview of all permanent exhibitions the museum has and arranges, where themes are placed in alphabetical order. If we click on one of the "exhibition themes" from the homepage, we'll be sent to this subpage. 
#### About.html
An about-page for Community Science Museum that presents offers and services they have to offer to us users. What they can provide to us users is informed (mainly for children, teachers- and researchers). 
#### Workplace.html
A subpage that informs about the "career opportunities" that exist at the Community Science Museum, in addition to the idea of being able to make a donation to the museum. 
#### Contact.html
This page leads directly to the contact form, where form validation are added. CSS Grid are used in this case to build the way form looks, that also could be done with flexbox. 
