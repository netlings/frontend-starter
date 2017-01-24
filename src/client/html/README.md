# HTML Assets
If you are using gulp-starter with another platform that handles markup, delete this folder and the `tasks.html` config in `gulpfile.js/config.json`, and don't forget to [configure BrowserSync to watch your platform's template files](https://browsersync.io/docs/options/#option-files) for changes!

If you are using gulp-starter as a standalone static site builder, this is where your markup goes. I've provided a few [Nunjucks](https://mozilla.github.io/nunjucks/) folders and files to get you started:

- **layouts:** A basic Nunjucks layout file
- **macros:** Contains a helpers file.
- **shared:** A folder to put shared partials.
- **index.html:** Hello world! Uses `layouts/default.html`.

### Tasks and Files
```
tools/tasks/build.html.ts
```
Robust templating with [Nunjucks](https://mozilla.github.io/nunjucks/). Nunjucks is nearly identical in syntax to Twig (PHP), and replaces Swig (and Twig-like js templating language), which is no longer maintained.

A global config file is set up at [src/config.json](src/config.json), is read in by the `html` task, and exposes the properties to your html templates.

This config file also allows you the add assets like Stylesheets and Javascript that are injected in various places in HTML using (gulp-inject) [https://www.npmjs.com/package/gulp-inject]. 

Example:

```json
{ "src": "node_modules/jquery/dist/jquery.js", "inject": "footer" }
``` 

In above example, `src` specify the path of the Jquery library file from the project root folder. `inject` specify the location in HTML file where this Javascript file will be injected.



