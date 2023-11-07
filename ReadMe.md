# We Connect Challenge

LinkedIn Invite Func.onality End-to-End Test
To achieve your goal of tes2ng the invite func2onality of LinkedIn, you can create an end-toend
test with the following sec2ons:

1. Leading Profiles:
   Read a list of profile links from an Excel or text file located in the project.
   Alterna2vely, you can integrate an API that provides this list.
2. Login to LinkedIn:
   Retrieve the LinkedIn email and password from environment variables (.env file) for secure
   and automated login.
3. Visit Each Profile Page:
   Implement a page naviga2on mechanism to visit each profile page.
   Handle errors, such as profiles that are not found.
4. Connect to Profile:
   Manage the connec2on process, considering that you may already be linked to some
   profiles.
   Add a customizable message to new connec2ons, with the op2on to store the message in a
   config file.
5. Generate a Report:
   Create a report to track the results of the test.
   The report can be in the form of a text file or CSV and should include the following
   informa2on:
   The number of profiles processed successfully.
   The number of profiles that failed during the process.

Tes.ng Framework:
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
// Handle errors for profiles that are not found
} catch (error) {
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
genera2ng a report. You can implement this pseudocode using the tes2ng framework of
your choice.
This approach allows you to automate the process of invi2ng profiles on LinkedIn, ensuring
that you can easily track the results and manage errors as needed.
Upload your code to a Git repository and send us the link.
