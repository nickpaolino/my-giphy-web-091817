# My Giphy

###### **[Click here](https://esmeryjose.github.io/my-giphy/) to see the final version of the website you have to create**.

## Project goals:

* Interact with the Giphy API
* Create a form that will toggle between two modes:
  * **Search:** given a search word and a limit it will return to you that
    amount of gifs that matched the search word
  * **Trending:** given a limit it will return to you that amount of the top
    trending gifs
* Render the requested gifs
* Allow users to collect their favorite gifs
* Validate the forms
* BONUS: Make the project work with only 5 components (This excludes components
  that come from UI styling libraries like Material-UI)
* BONUS: Style your project using
  [Material UI](https://semantic-ui.com/views/card.html) and make it look
  identical to the [deployed website](https://esmeryjose.github.io/my-giphy/).

## Project requirements:

* Fetch data every time the user types into the an text box
* Functional and container components.(You will need to use both more than once)
* Components using state and props
* Re-renders based on client-side events

## What we have so far:

* Nothing... once you fork this repo you will notice that there isn't much code
  to start you off, that's part of the challenge. We have a completed version
  for you to play with, your job is to re-create this website,
  [click here to see it](https://esmeryjose.github.io/my-giphy/).

## How to use the Giphy API:

Using the Giphy API is actually quite simple!
[sign up here](https://developers.giphy.com/). Go to your upper right hand
corner and click **Log in**. At the bottom of the login form there is a message
that says **"Don't Have An Account? Ew. Join Giphy!"**, click there and sign-up;
it only takes a few seconds!. After signing up
[click here](https://developers.giphy.com/), click on **Create an App**, it
should be on the upper right hand side. It will prompt you to give your app a
name and a description. Fill in those text boxes and click the **Create New
App** button on the lower right hand side. That's it! your api key will appear
on your dashboard in your giphy account.

### How to do fetch request to the Giphy API?

If you dont feel the need to read this instructions you can get the
documentation [here](https://developers.giphy.com/docs/). Clik on **Code
Examples** on your left hand side.

* First store your api key in a variable, along with the url. We do this because
  we will reuse it for the **search** & **trending**.

```
const KEY = "SOME-API-KEY";
const URL = `https://api.giphy.com/v1/gifs/`;
```

* We interpolate the URL and the API key into the fetch.

```
fetch(`${URL}search?api_key=${KEY}`)
```

* NOTICE: after we interpolate the key into the string we use the **&**, this
  allows us to give it another parameter. In order to pass it parameters for the
  search we will use the **q=**. After you should interpolate what the use
  searched for.

```
const search = "the-user-search"
fetch(`${URL}search?api_key=${KEY}&q=${search}`)
```

* We will follow the same procedure for the limit, instead of using **q=**, we
  will use **limit=**. Then we will interpolate the limit that the user picked.

```
const search = "the-user-search"
const limit = "5"
fetch(`${URL}search?api_key=${KEY}&q=${search}&limit=${limit}`)
```
