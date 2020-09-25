package models

import "time"

/*GraboTweet es el formato o estructura que tendrá nuestro tweet en la base de datos*/
type GraboTweet struct {
	UserId string `bson:"userid" json:"userid,omitempty"`
	Mensaje string `bson:"mensaje" json:"mensaje,omitempty"`
	Fecha time.Time `bson:"fecha" json:"fecha,omitempty"`
}
