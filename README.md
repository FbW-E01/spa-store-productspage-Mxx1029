# SPA-Store exercise -- Product Data Manager

In this application you see some Product data management logic.
You need to expand this application:

**NOTE** Read all the instructions here before starting :)

1. Create a new Context called "LocaleContext"
2. This LocaleContext has one piece of data; "locale"
3. The "locale" can be "en-us", "en-gb" or "de-de"
4. If the "locale" is "en-us" you should the product price as USD ($)
5. If the "locale" is "en-gb" you should the product price as GBP (£)
6. If the "locale" is "de-de" you should the product price as EUR (€)
7. You don't need to worry about exchange rates. For this app 1$ === 1€ === 1£
8. Allow the user to switch between different locales somehow
9. Allow the user to delete products from the list

---

- **BONUS challenge 1** Store the "locale" with `useReducer` instead of `useState`
- **BONUS challenge 2** Convert the existing ProductsContext to `useReducer`
- **BONUS challenge 3** Generate IDs for the new products inside ProductsContext when you are creating them
- **BONUS challenge 4** Allow the user to sort the list by price or by name

























🦋