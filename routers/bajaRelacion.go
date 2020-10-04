package routers

import (
	"github.com/chcardonat/twittor/bd"
	"github.com/chcardonat/twittor/models"
	"net/http"
)

//BajaRelacion realiza el borrado de la relacion entre usuarios
func BajarRelacion (w http.ResponseWriter,r *http.Request){
	ID := r.URL.Query().Get("id")
	var t models.Relacion
	t.UsuarioRelacionID = ID
	t.UsuarioID = IDUsuario

	status, err := bd.BorroRelacion(t)
	if err != nil{
		http.Error(w, "Ocurrió un error al borrar relación" + err.Error(), http.StatusBadRequest)
		return
	}

	if status == false{
		http.Error(w, "No se ha logrado  borrar la relación" + err.Error(), http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-type", "application/json")
	w.WriteHeader(http.StatusCreated)
}