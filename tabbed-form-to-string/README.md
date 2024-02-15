# tabbed-form-to-string

## What you were expecting
The `TabbedForm` should be able to handle a child component that returns an array of React elements.

## What happened instead
The `TabbedForm` does throw the following error:
```
Cannot read properties of undefined (reading 'toString')
```

## Steps to reproduce / Related code
- Clone this repository: https://github.com/syn-marketing/ra-issues
- Navigate to the directory that is named after the headline of this file
- Start react-admin within the `yarn dev`
- This will launch a modified version of the react-admin tutorial interface.

Read the commented lines in [PostEdit.tsx](./src/PostEdit.tsx) for the reproduction of the issue.

## Other information
/

## Environment

* React-admin version: v4.16.10
* Last version that did not exhibit the issue (if applicable): /
* React version: ^18.2.0
* Browser: Chrome
* Stack trace (in case of a JS error): 

```
Uncaught TypeError: Cannot read properties of undefined (reading 'toString')

    at FormTab (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:183474:25)
    at PostEditForm
    at div
    at http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:7671:53
    at div
    at http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:7671:53
    at div
    at http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:7671:53
    at Tabs4 (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:91232:17)
    at TabbedFormTabs (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:183229:25)
    at RenderedRoute (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:24472:5)
    at Routes (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:24794:15)
    at div
    at http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:7671:53
    at TabbedFormView (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:183278:25)
    at form
    at FormGroupsProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:38350:24)
    at FormProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:31527:21)
    at LabelPrefixContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:36681:22)
    at RecordContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:29317:24)
    at OptionalRecordContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:29722:20)
    at Form2 (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:38744:25)
    at TabbedForm (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:183545:26)
    at div
    at http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:7671:53
    at Paper2 (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:45711:17)
    at http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:7671:53
    at Card2 (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:67739:17)
    at div
    at div
    at http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:7671:53
    at EditView (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:182984:23)
    at RecordContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:29317:24)
    at SaveContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:28927:24)
    at EditContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:29755:24)
    at EditBase (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:29781:24)
    at Edit (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:183074:3)
    at PostEdit
    at RenderedRoute (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:24472:5)
    at Routes (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:24794:15)
    at ResourceContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:36134:24)
    at Resource (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:36140:23)
    at RenderedRoute (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:24472:5)
    at Routes (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:24794:15)
    at Suspense
    at ErrorBoundary2 (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:95798:35)
    at div
    at main
    at div
    at div
    at http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:7671:53
    at Layout (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:96190:20)
    at div
    at RenderedRoute (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:24472:5)
    at Routes (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:24794:15)
    at CoreAdminRoutes (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:36017:3)
    at RenderedRoute (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:24472:5)
    at Routes (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:24794:15)
    at CoreAdminUI (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:36081:20)
    at div
    at http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:7671:53
    at ScopedCssBaseline2 (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:82162:17)
    at AdminUI (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:188153:18)
    at ThemeProvider2 (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:13021:15)
    at ThemeProvider3 (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:13108:15)
    at ThemeProvider4 (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:43607:12)
    at ThemeProvider5 (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:93584:24)
    at ResourceDefinitionContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:35643:18)
    at NotificationContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:25863:24)
    at I18nContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:25941:18)
    at Router (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:24737:15)
    at HistoryRouter2 (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:26363:23)
    at InternalRouter (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:26403:24)
    at BasenameContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:26383:24)
    at AdminRouter (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:26389:22)
    at QueryClientProvider2 (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:23490:22)
    at PreferencesEditorContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:35559:24)
    at StoreContextProvider (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:25751:20)
    at CoreAdminContext (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:35670:28)
    at AdminContext (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:188189:21)
    at Admin (http://localhost:5173/node_modules/.vite/deps/react-admin.js?v=0005fae7:188472:28)
    at App

React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary2.
```
