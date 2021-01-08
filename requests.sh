echo "\nList Users\n"
curl -X GET http://127.0.0.1:3333

echo "\nCreate User\n"
curl -X POST http://127.0.0.1:3333/create


echo "\nDelete User\n"
curl -X DELETE http://127.0.0.1:3333/delete?id=3
