package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

/* DevueloTweets es la estructura con la que devolveremos los tweets*/
type DevuelvoTweets struct {
	ID primitive.ObjectID `bson:"_id" json:"_id,omitempty"`
	UserID string `bson:"userid" json:"userId,omitempty"`
	Mensaje string  `bson:"mensaje" json:"mensaje,omitempty"`
	Fecha time.Time `bson:"fecha" json:"fecha,omitempty"`
}


