package middlew

import (
	"github.com/chcardonat/twittor/bd"
	"net/http"
)

//ChequeoBD es el middleware que me permite conocer el estado de la base de datos
func ChequeoBD(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if bd.ChequeoConection() == 0 {
			http.Error(w, "Conexión perdida con la base de datos", 500)
			return
		}
		next.ServeHTTP(w,r)
	}

}