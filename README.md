<div align="center">
  <h1>Angular TailwindCSS Authentication Theme</h1>
</div>

Start building an authentication-based application with this **Open Source** Angular and TailwindCSS Authentication Theme. You don't have to worry about any boiler-plate styling, everything is already built for you! It is ready to go so you can start integrating your authentication service.

Keep reading for more information about how to get the best out of this awesome theme! Almost all development was done live on my Twitch stream May 11th-May 14th 2020 which you can check out [here](https://www.twitch.tv/jacobneterer).

View this starter live [here](https://angular-tailwindcss-auth-theme.jacobneterer.com/login)! This is not hooked up to an authentication service, so type in anything into the username and password field to "log in"! 😀

[![Netlify Status](https://api.netlify.com/api/v1/badges/365f6427-3103-4cdb-bd9a-24984a0f075e/deploy-status)](https://app.netlify.com/sites/angular-tailwindcss-auth-theme/deploys)

## 🚀 Quick start
These instructions assume you already have a development environment set up with Angular already installed. If not, please follow their setup directions [here](https://angular.io/guide/setup-local).

### Clone the repository and install dependencies
Using the command line:
```shell
# clone the repository
git clone https://github.com/jneterer/angular-tailwindcss-auth-theme.git
cd angular-tailwindcss-auth-theme
# install dependencies
npm install
# start local development server
ng serve
```
## TailwindCSS Configuration

TailwindCSS makes configuring styles for your application super easy. If you haven't already, check out their [documentation](https://tailwindcss.com). I followed this [great tutorial](https://dev.to/seankerwin/angular-8-tailwind-css-guide-3m45) on how to add TailwindCSS to your Angular app.

The key file with all of your custom configuration for TailwindCSS can be found in the `tailwind.config.js` file. If you open it, you will see we provide custom styles and overrides for:

* box shadow
* inset (top, right, bottom, left)
* colors - you can change default application colors here
* linear gradient directions
* linear gradient colors
* repeating linear gradient colors
* repeating linear gradient lengths

I also use a plugin to generate gradient styles called `tailwindcss-gradients`. It made generating these gradient styles so easy, check out their [documentation](https://www.npmjs.com/package/tailwindcss-gradients).

This application also uses SCSS for styling. If you don't know about SCSS, go check out their [documentation](https://sass-lang.com/). It basically allows us to write CSS better.

If you open the `src/styles.scss` you can see we import the TailwindCSS base, components, and utilities styles. **Please Note**, you **must** import custom styles **before** you import utilities. This had me stuck for 30 minutes one day. Here you can see I've imported both the settings and components files.

I chose to move all component style sheets to the `src/styles/components` directory because they need access to the TailwindCSS classes. If I left them in their own relative component directories, they would not have access. And since I define a lot of styles for elements that require a lot of TailwindCSS classes in `.scss` files rather than in the `.html`, I felt it was best to go ahead and just add them all the the components directory.

Additionally, you will find a lot of settings for the app in files under the settings directory.

* `elements.scss` - styling for global elements
* `forms.scss` - styling for forms
* `mixins.scss` - reusable styles known in the SCSS world as mixins

## Icons

I chose to go with [ZondIcons](http://www.zondicons.com/) as the icon set. It is free and just AWESOME. All of their icons (as of May 15, 2020) are imported into the `src/assets/icons` directory. Feel free to remove any as you see fit.

I use a really great npm package for displaying icons called [angular-svg-icon](https://www.npmjs.com/package/angular-svg-icon). I also created a reusable component for displaying icons in the `src/app/shared/components/zon-icon` directory. It lets you provide an icon name and color for the icon and it will do all the heavy lifting for you. So far you can pass in for color either 'default' or 'white', but if you want to add additional colors you can create them in its corresponding style sheet in `src/styles/components/shared/zond-icon.scss`.

## Application Structure

Here I am going to go over various parts of the application that I've made so you can make the most of this project. If you want to understand my directory structure better, check out my blog post on my [standard folder structure](https://medium.com/@jacobneterer/angular-my-standard-folder-structure-1fac4f0252de).

## `src/app/contracts`

In this directory I've defined various data contracts (interfaces) for the application. Feel free to edit those (like the user contract, just used for example purposes).

## `src/app/core`

Here I have the foundational components of the application. Say you clone this repository but you want to add a home page, this would be a great place for it.

## `src/app/private`

This is where any components behind authentication are stored. You can see from the `app-routing.component.ts` file that I have lazy loaded the private module, that way the code for this module is not exposed until the user has access. Only components behind authentication should be added here.

I also took the liberty of creating a guard for any routes in the `private-routing.module.ts`. You can use that to guard those pages (right now always returns true).

### `/about`

About has some general information on the theme and also serves as an example page. You can delete that from the project.

## `src/app/shared`

This directory has a lot of great reusable items.

### `/components`

Within the components directory I've defined two reusable components:

* link - is a reusable component for creating internal and external links
* zond-icon - a reusable component for rendering icons

### `/services`

Here you can find reusable services for the application. I would only put service code here that you don't mind it being exposed to anonymous users. I would not put any business logic here. You should create a separate services directory in the private directory so it is lazy loaded.

* `content.service.ts` - contains any content-based data. I use it to store an observable that has the value of the current and previous url. We use that data to show a navigation button as active or inactive if the user is on it's page.

### `/templates`

Templates contains any component extensions you want to add. In this case I create one for forms. Unlike Angular-based styling frameworks like Angular Material, TailwindCSS cannot automatically detect form errors and show them. I found that I was rewriting this code in each component that had a form, so I created this extension.

If you want to use this extension, simply write `extends FormTemplate` in your component class and call `super()` in it's constructor. In the template you will find default error messages. You can override these with your own in the component that implements this template. If you have other errors you want to handle, you can add messages for those and add validation in the `getErrorMessage` function.

### `/validators`

Here lives any custom form validators. In it I've created a `must-match` form field validator that validates two fields are equal. This is used for the password and confirm password form fields.

### `/shared.module.ts`

Lastly, in this module I have imported and exported any modules that might be required throughout the application. For example: rather than having to import `FormsModule` and `ReactiveFormsModule` in each module that requires forms, I simply import and export them here and import only `SharedModule` wherever they're needed.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
