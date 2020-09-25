package routers

import (
	"encoding/json"
	"github.com/chcardonat/twittor/bd"
	"github.com/chcardonat/twittor/models"
	"net/http"
	"time"
)

func GraboTweet (w http.ResponseWriter, r *http.Request){
	var mensaje models.Tweet
	err := json.NewDecoder(r.Body).Decode(&mensaje)

	registro := models.GraboTweet{
		UserId: IDUsuario,
		Mensaje: mensaje.Mensaje,
		Fecha: time.Now(),
	}

	_, status, err := bd.InsertoTweet(registro)
	if err != nil{
		http.Error(w, "Ocurrió un error al intentar insertar el registro, reintente neuvamente" + err.Error(), 400)
		return
	}

	if status == false{
		http.Error(w, "No se ha logrado insertar el tweet", 400)
		return
	}

	w.WriteHeader(http.StatusCreated)

	
}