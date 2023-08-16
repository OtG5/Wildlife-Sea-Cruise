"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Oscar Perez
      Date: 8/15/2023  

      Filename: script.js
*/
// Run once the page is loaded and ready
$( () => {

   $("li.submenu")
   .mouseover(e => {
      $(e.currentTarget).children("ul").show();
   })
   
   .mouseout(e => {
      $(e.currentTarget).children("ul").hide();
   });
 
});




                                                