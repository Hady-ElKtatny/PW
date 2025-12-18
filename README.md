# The Competency Bridge - Personal Portfolio

This is a responsive, single-page Next.js application created to document the entrepreneurial venture, "The Competency Bridge."

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Deploying to Firebase

This project is configured for deployment to Firebase Hosting.

1.  **Install Firebase CLI**:
    If you haven't already, install the Firebase CLI globally:
    ```bash
    npm install -g firebase-tools
    ```

2.  **Login to Firebase**:
    ```bash
    firebase login
    ```

3.  **Initialize Firebase**:
    If this is the first time you are deploying this project, you might need to initialize Firebase.
    ```bash
    firebase init hosting
    ```
    When prompted, select "Use an existing project" and choose your Firebase project. The `firebase.json` is already configured for a Next.js app.

4.  **Deploy**:
    To deploy your site, run:
    ```bash
    firebase deploy --only hosting
    ```

Firebase will automatically build and deploy your Next.js application.
