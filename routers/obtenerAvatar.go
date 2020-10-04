package routers

import (
	"github.com/chcardonat/twittor/bd"
	"io"
	"net/http"
	"os"
)

func ObtenerAvatar (w http.ResponseWriter,r *http.Request){
	ID := r.URL.Query().Get("id")
	if len(ID)<1{
		http.Error(w, "Debe enviar el parámetro id", http.StatusBadRequest)
		return
	}

	perfil, err := bd.BuscoPerfil(ID)
	if err != nil{
		http.Error(w, "Usuario no encontrado", http.StatusBadRequest)
		return
	}

	openFile, err := os.Open("uploads/avatars/" + perfil.Avatar)
	if err != nil{
		http.Error(w, "Imagen no encontrada", http.StatusBadRequest)
		return
	}

	_, err = io.Copy(w,openFile)
	if err != nil{
		http.Error(w, "Error al copiar la imagen", http.StatusBadRequest)
		return
	}
}
