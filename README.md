# Community Science Museum
Please read through this ReadMe-file before checking out this prototype version of the website and its content, for better understanding of the website's functions, navigation and its purpose. It is also recommended to read throughout the report, before visiting the website that accompanies in the submission folder of the semester project.
## Website's folders and their functions
There's some comprehensive descriptions of the folders and files for the website build on mobile-first principle and responsive design in mind. The files that belong to this folder that are not embedded in the "subfolders" of this folder are the main page (index.html) and the css files that belong to it (style.css) with this ReadMe-file. Media-file contains collections of media queries that is a css-file used to modify different screen sizes in one and same website to be embedded for index.html.
I tried to put all media queries in one and the same css file, but think some of the "data" that belonged to the index page was overwritten, and therefore did not work for me. Therefore I couldn't test out properly for myself the benefits to gather all media queries in one and the same file, based on the time and knowlegde I had left.
However, in this project I think it was easier for me to have my own media queries for each subpage located at the very bottom of their css files, because I experienced that in this way I had a better overview of each simple media query in relation to where on the page they are located - since I can easily get "lost" or in some cases "loose track" in coding.
### CSS
Here we find all css files that belongs to the html files with the same name as those css-files, which are located inside the pages-folder. While the "main" CSS-file, style.css, are located together with the index.html-file, to distinguish for myself between these main files and the "subfiles" located in the pages- and css folder while I coded this website, in order to be able to modify and customize the styling of each individual html file when needed.
### Images
This section includes all images, including the logo I recreated, that will be included during website construction, which is also taken from the final Adobe XD-prototypes that are located in the Report which links directly to the mobile and desktop version of them. The original images had to be resized so they would not affect too much the website's upload speed. 
#### Logo
The origin of the logo has been redesigned, taken from one of the vector images in the accompanying semester assignment folder we were given in this project (take a look at the last page of my report to see the "original logo").  
### Pages
Last folder contains all subpages of the website in html files that have their own css files (found in the css folder), which belongs to the main navigation field of the main page. The subpages that accompanies the main page consists of the following:
#### Visit.html
Information about what you can find when we visit the museum and other practical information to think about before visiting the museum. 
#### Exhibitions.html
Overview of all permanent exhibitions the museum has and arranges, where themes are placed in alphabetical order.
#### About.html
An about-page for Community Science Museum that presents offers and services they have to offer to us users. What they can provide to us users is informed (mainly for children, teachers- and researchers). 
#### Workplace.html
A subpage that informs about the "career opportunities" that exist at the Community Science Museum, in addition to the idea of being able to make a donation to the museum. 
#### Contact.html
This page leads directly to the contact form, where form validation are added. CSS Grid are used in this case to build the way form looks, that also could be done with flexbox. 
