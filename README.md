# movie-planner

This is an app to help you plan out the perfect summer movie watching schedule. The city of Chicago does a fantastic job of bringing the big screen out into the many parks all across the city. But there are so many movies to choose from! With our app you can search through the extensive list of movies being shown and curate your own personal schedule.

We were able to pull a list of all of the movies being shown from the City of Chicago website. This data provides the following information about the screening: title of the movie, the rating of the movie, whether there will be close captions or not, day of the week of the screening, date, the name of the park and the park address, and the park phone number. All of this data we've saved into a SQL database called movie_planner_db in a movie_showings table. From this information, we have pulled just the day of the week, date, title of the movie, name of the park and the movie rating to display on our page.

On our site, we have designed it to be able to take the massive movie list for the entire summer and scale it down into a personalized scheduler. By scrolling through the list of movies provided by the City of Chicago, you can click on the "add" button to move the movie screening to your own personal list. Your movie will then appear on the right side of the screen along with all of the other movies you have selected. If you accidentily add a movie, or realize you will no longer be attending a specific screening, you can click on the "remove" button to clear it out. This movie will be moved back to the original master list with the other movie screenings you haven't chosen.

After you have your own personalized schedule of movies chosen, we've provided some more information to help you maximize your movie watching experience. We've provided a map that displays the location of all of the movies throughout Chicago. To help sort your movies, each one is color coded to match a different movie rating. This is also a good way to help see if there are any movie screenings that will be close to you that you may want to add into your list.

We have 2 major projects being worked on that will go into the next release. The first is to enable filters to help sort through the master list of movies. This will enable the user to be able to more swiftly put together their own schedule of movies they would like to attend. We've provided an example of what this would look like with the day of the week filter, and we would extend this to include filters for movie rating, date and possibly location as well. The next feature that would be part of the release would be a comment section where you would be able to provide tips for other movie goers. A sample of what this would look like is included at the bottom of the page. This would be helpful for people who have not attended any screenings yet, and more veteran movie goers could help out by providing advice that they've found helpful in the past.


### Dependencies

- Express
- Body Parser
- Express-Handlebars
- Handlebars
- Handlebars Intl
- Method Override
- MySQL
