rmdir "./migrations" -Force -Recurse
echo rm -R -f ./migrations
pipenv run init
mysql -u root -p -e "DROP DATABASE markettika_db;"
mysql -u root -p -e "CREATE DATABASE markettika_db;"
pipenv run migrate
pipenv run upgrade