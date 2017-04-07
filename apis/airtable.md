# Using Airtable to create APIs

[Airtable](https://airtable.com/) is a mobile app which you can use to maintain databases on your mobile, so it's a good way to add data to a database when you're on the move (it includes templates for databases for the gym and for a 'soccer club', for example, so you can update it with the miles you ran at the gym, or the goals that your team scored). 

You can also access that data from the website, and via an API.

First, you need to upload your data. You can do this, once logged in, by creating a new database from the homepage (click on **New Base** and select *Import a spreadsheet*). Now to find the API for that database...

## Airtable's API documentation

You access the Airtable APIs at [airtable.com/api](https://airtable.com/api). If you're logged in you will see an API for each database you're maintaining on Airtable. Click on any one of them to see the documentation for that API - very cleverly, it personalises the documentation so the example code relates to the fields and tables in your database.

Each of your databases has a unique code. So, for example, the documentation for an app with the code `app9D1ESoRbtPB3aW` would be:

`https://airtable.com/app9D1ESoRbtPB3aW/api/docs`

## Creating an API key

You will need to create a key for your APIs on the accounts page at [airtable.com/account](https://airtable.com/account). Be aware that if you use this in any code that is public, other people will be able to see your API key and use it too. If that happens, you can come back to your account and click *Regenerate key* to create a new one.

This key will need to be included in any requests you make to the API. For example, the URL to get a list of the contents of the table `Players` from the database `app9D1ESoRbtPB3aW` is:

`https://api.airtable.com/v0/app9D1ESoRbtPB3aW/Players?api_key=key4OXulLRUuqaLLN`

Let's drill down a bit more into that URL...

## The URL structure in the Airtable API

The API is used by forming URLs to request information from the database. The structure of those URLs is relatively predictable:

* All URLs start with `https://api.airtable.com/v0/`
* This is followed by the code for the database, e.g. `app9D1ESoRbtPB3aW`
* Then a slash, and the name of the table in that database you want to query, e.g. `/Players`
* If you want to drill down to a particular *record* in that table, you add another slash and the id for that entry, e.g. `/rec2QTLc5yBaYD1lm`
* Then we have a question mark, which marks the start of the *query* to that table: `?`
* Next we have the key: `api_key=key4OXulLRUuqaLLN`
* You can add other arguments to your query, for example: `&maxRecords=1` will limit the results to the number specified. Other arguments include `sort` and `fields`: the documentation will give more details.

Try out some URLs using the guidance above and the documentation. You should be able to see the contents of your database in JSON format.

## Putting it into JavaScript

