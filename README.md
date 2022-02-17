## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## REQUIREMENTS

Use any framework and libraries you like, but we are the most comfortable in React as it is
what we use at Goodlord. Make sure the project includes some instructions on how to run it as we might not be familiar with the setup.
If there are any questions, do not hesitate to send the question our way.
This should take you about an hour of your time, but feel free to spend a bit more or less
time as you deem necessary.

## EXERCISE

Before tenants can move into a new property we usually need to do a reference check. This
involves gathering information about their employment, income, credit history, previous
tenancies, etc and running it through our referencing checks.
We want you to build a form that captures this information and submits it to our (fictional)
reference api endpoint: https://ref-api.goodlord.co/reference/new.

### Part 1

Create a form that collects the following information and submits it to the api:

- Personal
  - First name
  - Last name
  - Current address
- Employer
  - Employer name
  - Employment start date
  - Employment end date (no end date if current employment)

## Tech Elab

- Set-up project
- Add any required dependencies to make life easier
- Create a basic form
- Add required form areas/fields
  - Person
  - Employer
  - Note: Guarantor section is not in scope of the task
- Submit form to API with POST request
- Handle form errors/validation
- Handle API errors
- Add unit/integration testings

Nice to haves

- Styling
- Linting
- Typescript

## Notes

- Need to clarify with Product Owner if the 'Guarantor' section needs implementing
- Using `formik` instead of using `useState` hooks for cleaner code and speed given time constraints.
- Using `material-ui` for ease of use
- Can't use requested HTTP 1.1 since browser decides this https://stackoverflow.com/questions/56675358/is-there-a-way-to-force-an-xmlhttprequest-to-use-http-1-1
- I get 

## Would have done with more time

- Proper styling to spec
- Created a proper date picker for the date
  - validate the date e.g. startDate not before endDate
  - send in correct format i.e. map from js Date object to 'yyyymmdd' format
- Add unit test for the helper function, api, and components
- Add integration test for the form
- Not hard-code the url, have env variable instead
  - help differentiate between production and non-production urls

## Nice to haves

- Maybe used Formik to map the values to correct form instead of using a mapper util
- Folder restructuring e.g. sub-folder under Form i.e. `components/Form/components/PersonalFieldset/PersonalFieldset.js`

### Notes
- First add multiple employers if employment time is at least 3 years of history
- Calculate total employment time in years
  - Work out the time employment time per employer
  - Sum each employment details employment time
- if employment time is less than 3 years add guarantor section and collect
- Guarantor section - all fields are required: name, address, relationship
  - Relationship, enum Sibling, Employer, Other