echo "\nList Users\n"
curl -X GET http://127.0.0.1:3333

echo "\nCreate User\n"
Create=$(curl --silent -X POST  \
    --data-binary '{ "name": "Pedro" }' \
    http://127.0.0.1:3333/create)

echo $Create

echo "\nDelete User\n"
ID=$(echo $Create | jq .id)
curl -X DELETE http://127.0.0.1:3333/delete?id=$ID
