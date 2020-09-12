package bd

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
)

//MongoCN es el objeto a la conexión a la base de datos
var MongoCN = ConectarBD()
var clientOptions = options.Client().ApplyURI("mongodb+srv://chcardonat:chcardonat@cluster0.mmkwt.mongodb.net/twittor?retryWrites=true&w=majority")

//ConectarBD es la función que me permite conectar la base de datos
func ConectarBD() *mongo.Client {
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil{
		log.Fatal(err.Error())
		return client
	}
	err = client.Ping(context.TODO(), nil)
	if err != nil{
		log.Fatal(err.Error())
		return client
	}
	log.Println("Conexión exitosa por la BD")
	return client
}

//ChequeoConection es el ping a la base de datos
func ChequeoConection() int{
	err := MongoCN.Ping(context.TODO(), nil)
	if err != nil{
		return 0
	}
	return 1
}