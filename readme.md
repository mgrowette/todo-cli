# todo-cli-migrow

A command line interface used to track to do items in a software project. Use the cli to create todo items, list todo items, mark a todo item as complete, and remove a todo item.

##Installation

```
npm i todo-cli-migrow -g
```

##Usage

```
mkdir my-project
cd my-project
todo init
todo read a book
todo take a nap
todo drink a beer
todo ls
```

## Commands

### initialize todo list

Creates a **todos.json** file within the current directory. Use when you wish to start a new list. If **todos.json** already exists, `todo init` will not do anything.

```
todo init
```

###Add a todo

Adds a todo item to your list of todos.

```
todo add <some text>
```

**examples**

```
todo add feed the cats
```

### List todos

List all todos in your todo list.

```
todo ls
```

### Mark todo complete

Toggle a todo item as completed

```
todo check <todo ID GOES HERE>
```

**Example**

Mraks the 2nd todo item as complete or not complete

```
todo check 2
```

### Remove todos

deletes a specific todo by providing the todo id.

```
todo rm <TODO ID GOES HERE>
```

**Example**

```
todo rm 1
```

## Future Features

* Show percent of todos completed
* Assign a todo to a person
* Record the data and time completed
* Export the todo items to github as issues
* Export to trello as a list
