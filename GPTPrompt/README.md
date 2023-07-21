Given the requirements and assumptions, we will be using Python with Flask for the backend, and JavaScript with React for the frontend. We will also use SQLite for the database, and OpenAI's Python client to interact with the GPT API. 

Here are the core classes, functions, and methods that will be necessary:

1. User class (models.py): Represents a user in the system. It will have methods for password hashing and checking.
2. Prompt class (models.py): Represents a prompt in the system. It will have methods for saving, editing, and deleting prompts.
3. User routes (routes.py): These will handle user registration, login, and password management.
4. Prompt routes (routes.py): These will handle prompt creation, editing, deletion, and viewing history.
5. GPT API interaction (gpt.py): This will handle sending prompts to the GPT API and receiving responses.
6. Parameter adjustment (gpt.py): This will handle adjusting the GPT model's parameters.
7. User interface (App.js): This will handle displaying the user interface and interacting with the backend.

Now, let's start with the "entrypoint" file, which is the main application file in Flask.

app.py
