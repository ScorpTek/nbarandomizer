python3 -m venv venv
source venv/bin/activate
pip install flask flask_sqlalchemy flask_login openai
export FLASK_APP=app.py
flask run

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
nvm use node
npm install react react-router-dom
npm start
