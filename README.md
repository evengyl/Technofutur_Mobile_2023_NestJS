### Pour désinstaller Eslint prettier qui dans sa version actuelle pose des soucis de code en dev
* taper la ligne suivante ```npm uninstall --save-dev eslint-config-prettier eslint-plugin-prettier```
* redémarrer le vscode


### Pour installer typeOrm et ses packages liés, ainsi que le driver mssql
* petite doc utile pour ça https://www.tutorialspoint.com/typeorm/typeorm_quick_guide.htm#
* npm install --save @nestjs/typeorm typeorm mssql
* pour ceux qui souhaite utilsé mysql -> npm install mysql2