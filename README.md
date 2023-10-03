# programmentwurf-gruppe-2

programmentwurf-gruppe-2 created by GitHub Classroom

# Allgemeine Informationen zum Projekt

Social Network mit dem Namen Students4Students. Es handelt sich um ein Social Network für Studenten an der DHBW Stuttgart. Mit Students4Students können die Studenten sich untereinander vernetzen und alle Probleme rund um des Studierendenlebends lösen.

#Beschreibung der Funktionen des Programms
To be continued...

# Wie läuft die Einrichtung des Repositories ab?

#Welche externen Bibliotheken werden benötigt & Wie bringt man das Projekt zum laufen?
Zur Ausführung muss Docker auf dem Zielrechner installiert worden sein.
Innerhalb des Terminals sollte nun der Befehl docker-compose up ausgeführt werden. Das startet das Frontend und das Backend

Nun muss noch die Datenbank aktiviert werden, dafür in den Ordner in dem die Datenb ank hinterlegt wurde wechseln und innerhalb des Terminals folgende Befehle starten:

1. docker build -t mysql_server .
2. docker run --name mysql_server_container -p 3306:3306 -d mysql_server
