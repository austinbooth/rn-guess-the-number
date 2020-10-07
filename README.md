# Guess the Number React Native Mobile App

Welcome to my 'Guess the Number' app. I built this so I could learn the fundamentals about React Native. This app also uses Expo to provide access to the native APIs on iOS and Android, as well as an easy way to test the app on a real device.

## Prerequisites, Installation & Running the app

### Prerequisites

To run this on your machine, you will need Node.js installed on your machine.

To install Node, go to: https://nodejs.org/en/download/ \
 The version required is a minimum of v. 13.8.0

### Installation

These instructions will get you a copy of the project up and running on your local machine and either iOS or Android device for development and testing purposes.

1. Clone a copy of the repository on your machine using the below command:

```javascript
git clone https://github.com/austinbooth/rn-guess-the-number.git
```

2. In the project directory, install the required dependencies:

```javascript
npm install
```

### Running the app

1. To run the project on a localserver, run:

```javascript
npm start
```

This runs Metro Bundler on a local server, which should open in a new browser window. Metro Bundler takes all of the files used by React and React Native and compiles them into a single file. If you're interested in learning more about what Metro Bundler does, then [this link is a good introduction](https://medium.com/@rishabh0297/role-of-metro-bundler-in-react-native-24d178c7117e).<br />

2. To get the app running on your local device you will need the Expo app. You can download this from either the iOS App Store or Google Play for Android.

3. Once you have the Expo app installed on your device, you can use the QR code displayed both in the terminal and in the broswer by Metro Bundler.
   - If you are on iOS then you just need to scan the QR code using the camera app and then click the 'Open in Expo' popup.
   - If you're on Android then you will need to scan the QR code in the Expo app.
