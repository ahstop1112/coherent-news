This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Coherent FE Tech Test - Perry Cheung

In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Project Description
It is a simple News App which is using News API and using React + Redux + SASS + WEBPACK. 
- Users can type the keywords in the search bar, it will return the data which contains the keywords in New York Times and Washington Post. 
- Users can select the Dropdown with different "Sort Type" and it will sort the current news.
- It support on Desktop / Tablet / Mobile.

### News API.
- Getting Data from New York Times and The Washington Post
  https://newsapi.org/v2/everything?q=&domains=washingtonpost.com,nytimes.com&pageSize=100&sortBy=publishedAt
  
- Getting Data with different keywords from New York Times and Washington Post
  https://newsapi.org/v2/everything?q={keyword}&domains=washingtonpost.com,nytimes.com&pageSize=100&sortBy=publishedAt
  
  
### React + Redux Flow
1. When Page loaded, it will load the latest news from the API action, e.g. fetchCurrentNews().
2. User click the Search Button, it will call the API action, e.g. fetchCurrentNews(keyword).
4. If it returns data from API, using dispatch method to store the "currentNewsData" in the store (global State). E.g.
      dispatch({
          type: FETCH_CURRENT_NEWS,
          currentNewsData: response.data
      });
3. If it return null or empty, it will show the Server Response Message under the form
4. MainContainer will detect the global state data is updated and pass the updated data to child components, e.g. NewsPreviewContainer.
5. Users can scroll the page and it will load 10 more news and calling the function loadMoreNews().
6. Users can select different sort type to sort the news by different sort type, e.g. publishedAt.
