# We-Conect Challenge

## Run

```
npm install
```

Cypress open

```
npm run cy:o
```

Cypress run:

```
npm run cy:r
```

## Solution

Choose some linkedIn profiles, wrong profiles URL, and wrong URLs.

> Use Cypress for testing.

#### Steps:

1. Read URLs from a csv file before all tests.

2. Read custom message from a txt file before all tests.

3. login to linkedIn:

    - visit login page of linkedIn
    - type username and password
    - submit and login

4. check profiles URL one by one and handle error if URL was wrong or profile not exists

5. if a URL was correct, check if pending or is already a connection, ignore and go to next step

6. click on connection button and write custom message and send invitation

7. after finishing the loop, write results to a file, results includes:
    - New connections successfullly sent
    - Invalid URLs
    - Invalid Profiles
    - Profile already is a connection
    - Total number of profiles proceed successfully
    - Total number of profoles that fails during the process

## Challenge

LinkedIn Invite Functionality End-to-End Test
To achieve your goal of testing the invite functionality of LinkedIn, you can create an end-to-end
test with the following sections:

1. Leading Profiles:
   Read a list of profile links from an Excel or text file located in the project.
   Alternatively, you can integrate an API that provides this list.
2. Login to LinkedIn:
   Retrieve the LinkedIn email and password from environment variables (.env file) for secure
   and automated login.
3. Visit Each Profile Page:
   Implement a page navigation mechanism to visit each profile page.
   Handle errors, such as profiles that are not found.
4. Connect to Profile:
   Manage the connection process, considering that you may already be linked to some
   profiles.
   Add a customizable message to new connections, with the option to store the message in a
   config file.
5. Generate a Report:
   Create a report to track the results of the test.
   The report can be in the form of a text file or CSV and should include the following
   information:
   The number of profiles processed successfully.
   The number of profiles that failed during the process.

Testing Framework:
You have the flexibility to choose any tes2ng framework that you are comfortable with or
that aligns with your project requirements.
Here is a high-level overview of how you can structure and approach this task:

```
// Pseudocode for the LinkedIn Invite Func5onality Test

// 1. Leading Profiles
const profileLinks = readProfileLinksFromFileOrAPI();

// 2. Login to LinkedIn
const { email, password } = readLoginCreden5alsFromEnv();
loginToLinkedIn(email, password);

// 3. Visit Each Profile Page
for (const profileLink of profileLinks) {
   try {
      visitProfilePage(profileLink);
   } catch (error) {
      // Handle errors for profiles that are not found
      handleProfileNotFoundError(profileLink);
   }

   // 4. Connect to Profile
   if (!isAlreadyConnected(profileLink)) {
      sendConnec5onRequest(profileLink, configMessage);
   } else {
      handleAlreadyConnectedProfile(profileLink);
   }
}
// 5. Generate a Report
generateTestReport(profileLinks.length, failedProfiles);
// Close the LinkedIn session
closeLinkedInSession();
```

In this pseudocode, you can see the logical flow of the test, including handling errors and
generating a report. You can implement this pseudocode using the tes2ng framework of
your choice.
This approach allows you to automate the process of inviting profiles on LinkedIn, ensuring
that you can easily track the results and manage errors as needed.
Upload your code to a Git repository and send us the link.
