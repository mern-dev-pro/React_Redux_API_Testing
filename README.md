# Digital Renaissance Code Test

I'm Luuk, Chief Technology Officer at [Digital Renaissance](https://thedigitalrenaissance.io/team).

I wrote this test to get a sense of your:

- Drive
- Speed
- Knowledge
- Communication

So I would like to see you work with:

- SCSS
- React
- Redux
- Fetch API
- TypeScript

I do not want to use too much of your time. Please stop if you feel like this test has taken too long. I designed this test to be relatively quick to do for a senior developer. Partly because you do not need to worry about cross-browser support or the visual appeal of the website. I have also added examples and included various libraries to help speed things up.

I would like to receive a screen recording of you doing the exercise. You can begin recording after you have finished the installation. This is key to understanding your communication skills.

Thank you for giving this test a try, I am open to hear your feedback on it. If you are not hired by us, I do still hope you can find the code I have provided here valuable. Feel free to use it in your projects.

## Installation

1. Run `yarn` to install the dependencies in `package.json`
2. Run `yarn start` to host the website on http://localhost:3000.
3. Run `yarn server` to host the API on http://localhost:8080.
4. Use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) on all files you edited before sending in your code test

## Tasks

1. **Authenticate**

   Use the Fetch API to make a `POST` request to `http://localhost:8080/authenticate` to receive a cookie

   - Add a page where a user can fill in an email and password
   - Add a new HTTP requests to the `useAPI` hook
   - The `POST` body should be JSON containing `email` and `password`

2. **Load data**

   Use the Fetch API to make a `GET` request to `http://localhost:8080/transactions?page=0` to receive data

   - Add a new HTTP requests to the `useAPI` hook
   - Add a `Route` and create a `NavLink` to it
   - Use `useQuery` for keeping track of the currently loaded page
   - When the user arrives on this page:
     - Reset page to 0
     - Remove previously loaded data
     - Send the request
   - Add a "More" button that loads in another page and **adds** the transactions to the table
   - Use spread operator inside of the `addTransactions` Redux reducer

3. **Display data**

   - Put all transactions available in the Redux store in a table
   - Use `Object.values(...).map(...)` inside of your JSX

4. **Delete data**

   Use the Fetch API to make a `GET` request to `http://localhost:8080/transactions/delete/<id>` to remove data

   - Add a new HTTP requests to the `useAPI` hook
   - Add a button on each table row, used to delete the transaction
   - Update the transaction in the Redux store with the API response
   - Do not render the transaction in the table when `deleted === true`

5. **Submit**

   Submit your recording and link to your public repository fork to luuk@thedigitalrenaissance.io
