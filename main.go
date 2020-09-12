package main

import (
	"github.com/chcardonat/twittor/bd"
	"github.com/chcardonat/twittor/handlers"
	"log"
)

func main() {
	if bd.ChequeoConection() == 0{
		log.Fatal("Sin conexión a la base de datos")
		return
	}
	handlers.Manejadores()
}
