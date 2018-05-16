React Bookmarks:

This is my app, Bookmark Buddy, created with React. 

Before actually writing any code, I had a good idea of what I wanted to create and how the basic code would be structured. First I wanted the basic functionality of adding items to a list, so I created two components, the first being the Bookmark list, which would render the second component, the bookmark items. As you can tell from my later commits, instead of rendering the whole list in the bookmark lists component I moved the <ul> to the list, and mapped the items to each <li>, whilst passing the props along. 
Before that, In the bookmark list is where I decided to handle my submissions and change in state for the main form. 
Above these methods I have two component lifecycle methods, which store the items to the local storage, for the bookmarks to persist page reloads.
One of the more challenging aspects towards the end of the challenge was to include an edit function. For this, first I wanted to change the boolean state of an item which I did with toggleEditItem. In the return you can see I then had a conditional which rendered different jsx based on the state (isEdit?). The main handleedit function is in bookmarklist. 
In terms of design I wanted something very minimal but nice to look at - having 4 unique shades for each button, a simple background gradient, and two complimentary fonts together. There is also some basic responsive design, which would certainly be more apparent if the page included other items. 

Improvements that could be made: 

- Once edited, the item jumps to the top of the list. 
- the bookmark validation is not great - the package I'e used doesn't seem fully work - however I tried with regex and had problems with that too. Will fix. 
- I am using flex reverse column, instead of reversing the the items array when mapping to listitems. For this simple app I believe it's not too bad, but could cause issues in larger applications. 



