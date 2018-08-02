# Rendition table issue with `onRowClick`

This is a sample project to reproduce https://github.com/resin-io-modules/rendition/issues/534

# Run 

`yarn install`

`yarn start`

# Reproduce

Once the app is running 
1. Click any of the rows THEN you'll see row data on the right
2. Sort the name column
3. Click the same row you clicked in step 1 THEN you'll see the same data even after sorting. 
