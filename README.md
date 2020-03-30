<h1>TaskPanel App</h1>
<h2>About</h2>
<ul>
<li><a href='#general'>General info</a></li>
<li><a href='#goals'>Project goals</a></li>
<li><a href='#dependencies'>Dependencies</a></li>
<li><a href='#setup'>Project setup</a></li>
</ul>
<hr>

<div id='general'>
<h2>General info 💡</h2>
<p>This SPA is designed and developed  basically for persistant data storage and visualisation. Main focus was to create a master-detail SPA using and implementing <code>Firebase</code> and <code>Firestore</code> services and hosting.
</div>
<br>
<div id='goals'>
<h2>Project goals 💎</h2>
<ol>
<li>App Authorization using Firebase Auth✅</li>
<li> Data storage and update using Firestore API✅</li>
<li>Routing / Private routes implementation ✅</li>

</div>
<br>
<div id='dependencies'>
<h2>Dependencies 🛠</h2>
For styling I choosed <code>Material UI</code> lib in couple with <code>CSS in JS</code> approach. Originally this project was bootstrapped with Create React App template.
For global state management I choosed <code>React Context api</code> and <code>useContext</code> hooks. Deployed with Firebase hosting.
<hr/>

        "@material-ui/core": "^4.9.7",
    	"@material-ui/icons": "^4.9.1",
    	"@material-ui/lab": "^4.0.0-alpha.46",
    	"@testing-library/jest-dom": "^4.2.4",
    	"@testing-library/react": "^9.3.2",
    	"@testing-library/user-event": "^7.1.2",
    	"date-fns": "^2.11.1",
    	"firebase": "^7.13.1",
    	"node-sass": "^4.13.1",
    	"react": "^16.13.1",
    	"react-dom": "^16.13.1",
    	"react-router-dom": "^5.1.2",
    	"react-scripts": "3.4.1",
    	"shortid": "^2.2.15"

</div>
<div id='setup'>
<h2>Project Setup 🔌</h2>
<p>Steps to run app localy:</p>
<ul>
<li>
<p> Clone repo to your directory:<p>
<code>
git clone 
</code>
then
<code>
cd [project directory]
</code>
<br>
</li>
<li>
<p> After repository is cloned install dependencies with yarn on npm<p>
<code> yarn </code> or <code>npm install</code>
</li>
<li>
<p> After all You are ready to go! To start app localy:<p>
<code> yarn start </code> or <code>npm start</code>
</li>
<p>Then open:<p>
<code>http://localhost:3000/</code>
<li>
<p> To build project:<p>
<code> yarn build </code> or <code>npm run build</code>
</li>
</ul>
</div>
<br>
