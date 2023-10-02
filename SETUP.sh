#!/bin/bash

# Wechsel zum Verzeichnis, in dem sich das "db"-Verzeichnis befindet
cd "$(dirname "$0")/db"

# Ruf das Skript "MySQL_Server_Docker_SETUP.sh" auf (wenn es ausführbar ist)
if [ -x "MySQL_Server_Docker_SETUP.sh" ]; then
    ./MySQL_Server_Docker_SETUP.sh
else
    # Falls das Skript nicht ausführbar ist, kannst du es ausführen, indem du bash verwendest:
    # bash MySQL_Server_Docker_SETUP.sh
    echo "MySQL_Server_Docker_SETUP.sh is not executable. Please make it executable and run it manually."
fi

echo "MySQL Docker container has been started successfully."

# Gehe zurück zum übergeordneten Verzeichnis
cd ..

# Führe die Docker-Compose-Befehle aus
docker-compose build
docker-compose up