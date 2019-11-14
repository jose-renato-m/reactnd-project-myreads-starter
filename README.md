# React ND MyReads

Project 1 of [Udacity's React Nanodegree Program](https://www.udacity.com/course/react-nanodegree--nd019).

## For Users

* The goal of the application is to help you manage the state of a list of books. You have the choice between 3 shelves: **\"Currently Reading\"**, **\"Want to read\"** and **\"read\"**.
* You can see the state of the books in the main page (path: \"/\").
* You can search for new books in the \"/search\" page.
* Use the buttons **Reading**, **Want to Read** and **Read** to move the books to another shelf.
* **None** allows you remove the book from every shelves.

## For Developers

### Dependencies

* Install all the project dependencies with `npm install`
* Start the development server with `npm start`
* You will need `react-router-dom`

The component structure is the following:

```
<App />
------<Home />
----------<Book />
------<Search />
----------<Book />
```
* The main state with the list of searched books (result of the search in the search page) and the list of the books (with shelves) displayed in the main page lives in
* has its own state for the query