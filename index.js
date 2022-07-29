/*   
		 ____       _            _                      __        __   _     
	 ___|  _ \ ___ | | ___ _ __ | | __ _ _   _          \ \      / /__| |__  
	/ __| |_) / _ \| |/ _ \ '_ \| |/ _` | | | |  _____   \ \ /\ / / _ \ '_ \ 
	\__ \  _ < (_) | |  __/ |_) | | (_| | |_| | |_____|   \ V  V /  __/ |_) |
	|___/_| \_\___/|_|\___| .__/|_|\__,_|\__, |            \_/\_/ \___|_.__/ 
						|_|            		|_|	Version 1.0 - By SkyX [ID FR]                               
*/

const path = require('path');
const express = require('express');
const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	return response.sendFile('public/index.html', { root: '.' });
});

app.get('/auth/discord', (request, response) => {
	return response.sendFile('public/dashboard.html', { root: '.' });
});

const port = '53134';
app.listen(port, () => console.log(`Server started at http://localhost:${port} !`));