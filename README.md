# **Parts App**

## Running the app

- First start the server at https://github.com/fast-radius/fe-challenge
- Run the following commands
  ```
  yarn
  yarn start
  ```
- That's it! Every time afterward you just need to run `yarn`

## Design decisions

- Create-react-app was used to stand the project up for sake of saving time.
- I chose to maintain state of pagination at the `App` component level since we also need to make network requests based on the page we are attempting to view.
- Typically I'd also persist the page number as a query param for sharing links but I cut it out of scope for this project.
- I broke out our network requests into a services file. This will usually become a directory with files representing different models we can interact with on the server.
- Tests, components, styles and utils all get their own folders to more easily keep track of things. In a sufficiently large application I'd also have a `views` folder to handle the top level "views" which represent which page the user is viewing. I'd also be using a router in that case.
- I am very new to Jest and testing-library react but I'm currently taking a course on it. Due to this I ran out of time to be able to complete sufficient tests.
- I had to edit the server a bit to get this to work.
  - The ending index was not calculated correctly and was causing only 4 pages to be returned
  - Due to CORS, the fetch API does not allow me to access some of the additional headers set by the server such as the total number of entries and total pages. I added `totalPages` to the body of the request instead.
