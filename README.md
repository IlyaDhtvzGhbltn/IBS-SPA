# IBS-SPA 


## US


### Using

This is a simple **Angular** application. Contains 2 pages. 
One is public with a login form. 
And one protected one with a list of products.
The authorization server and the data server are **different** servers.
Server addresses are specified in the **environment.ts** file.
On the main page there is a list for changing the language.
Additional tests have been written for the **login-form.component** component.


#### Successful authorization

If the entered data is successfully validated, the user will be redirected to the product page.
Also, the token will be saved in local storage and will be sent in the header with each subsequent request.
After successful validation, the user cannot open the form with login and password.
Instead, it will be automatically redirected to a private area.

#### Failed authorization

If the data is entered incorrectly, the user will see a message.
When trying to open a protected URL, the user will be redirected to the login page.


### TODO

- Access-token expiration implementing
- Refresh-token handling
- More tests


## DE


### Die Nutzung

Dies ist eine einfache Angular-Anwendung. Enthält 2 Seiten.
Die erste Seite ist öffentlich, der zweite ist geschützt.
Der Autorisierungsserver und der Datenserver sind **unterschiedliche** Server.
Serveradressen werden in der **environment.ts** angegeben.
Auf der Hauptseite gibt es eine Liste zum Ändern der Sprache.
Für die Komponente **login-form.component** wurden zusätzliche Tests geschrieben.


#### Erfolgreiche Autorisierung

Bei erfolgreicher Validierung der eingegebenen Daten wird der Nutzer auf die Produktseite weitergeleitet.
Außerdem wird das Token im lokalen Speicher gespeichert und bei jeder weiteren Anfrage im Header gesendet.
Darüber hinaus wird das Token im lokalen Speicher gespeichert und bei jeder weiteren Anfrage im Header gesendet.
Nach erfolgreicher Validierung kann der Benutzer das Formular nicht mit Login und Passwort öffnen.
Stattdessen wird es automatisch in einen privaten Bereich weitergeleitet.

#### Failed authorization

Wenn die Daten falsch eingegeben werden, wird dem Benutzer eine Meldung angezeigt.
Beim Versuch, eine geschützte URL zu öffnen, wird der Benutzer zur Anmeldeseite weitergeleitet.


### TODO

- Implementierung des Ablaufs des Zugriffstokens
- Refresh-Token-Handhabung
- Mehr Tests


### Docker commands

- **docker build -t ibs-spa .**
- **docker run -d -p 8080:80 ibs-spa**
