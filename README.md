# Notification Badge App

This project is an Ionic Angular app built for the CA3 assignment. It demonstrates a notification badge UI with basic counter logic using Ionic components and TypeScript.

## Project Overview

The app includes:

- A header and toolbar layout using Ionic UI components
- A notification icon with a badge shown in the top-right area
- Two action buttons for counter interaction
- TypeScript logic to increase and reset the notification count

## Features

### Level 1: UI Layout

The interface uses the following Ionic components:

- `ion-header`
- `ion-toolbar`
- `ion-title`
- `ion-icon`
- `ion-badge`
- `ion-button`

UI goals covered:

- Notification badge displayed near the icon
- Action buttons aligned in the main content area
- Clean and simple mobile-friendly layout

### Level 2: Logic Builder

The app maintains a notification counter with TypeScript.

- `notificationCount = 0`
- `increment()` increases the count
- `clear()` resets the count to `0`
- Button clicks are connected with Angular `(click)` event binding

### Level 3: Firebase CRUD

Firebase CRUD integration is listed in the assignment requirement, but it is not implemented in the current project.

Possible CRUD tasks for this level:

- Create a notification record in Firebase
- Read the notification count from Firebase
- Update the notification count in Firebase
- Delete a notification record from Firebase
 

## Run the Project

Clone the project:

```bash
git clone git@github.com:Ngoni-Sendama/Class-Test-Ionic-Framework-with-Firebase.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```
or

```bash
ionic serve
```

Build the project:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Tech Stack

- Ionic Framework
- Angular
- TypeScript
- SCSS

## Assignment Summary

This project fulfills the basic UI and counter logic parts of the Notification Badge App assignment. Firebase-based CRUD operations remain to be added if full Level 3 completion is required.
