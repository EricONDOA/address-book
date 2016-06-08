# Address-book

This README outlines the details of collaborating on this Ember application.

* This app it's a simple address-book, i use that to learn EmberJs framework and i really enjoy .

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`
* `npm install -g json-server`


## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running json-server
//This server need a json file, which contains data that it goes expose in RESTful
// to run this you need to be on the folder which contain the db.json file
* `json-server db.json`
* in console this server would expose the resources.
 * http://localhost:3000/contacts
 * http://localhost:3000/groups

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

