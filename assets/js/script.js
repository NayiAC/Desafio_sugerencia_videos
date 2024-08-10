let IIFE = (() => {
  let setVideo = (url, id) => {
      document.getElementById(id).setAttribute("src", url)
  }

  return {
      setVideo
  }
})()

class Multimedia {
  #url
  constructor(url) {
      this.#url = url
  }

  get url() {
      return this.#url
  }

  set url(newUrl) {
      this.#url = newUrl
  }

  setInicio() {
      return 'Este metodo es para realizar un cambio en la URL del video'
  }
}

class Reproductor extends Multimedia {
  #id
  constructor(url, id) {
      super(url)
      this.#id = id
  }
  playMultimedia() {
      IIFE.setVideo(this.url,this.#id)
  }
  setInicio(seg){
      let nuevoUrl =`${this.url}&amp;start=${seg}`
      IIFE.setVideo(nuevoUrl,this.#id)
  }
}

const musica = new Reproductor("https://www.youtube.com/embed/QW2KGkg3D9U?si=JOE4vC9IMFByjRIZ","musica")
const pelicula = new Reproductor("https://www.youtube.com/embed/50WebnnpIfw?si=cFlWMK-bK5gfe-PY","peliculas")
const serie = new Reproductor("https://www.youtube.com/embed/wJDAZPCDRaQ?si=WcdhLJsjAwVW2f7J","series")

musica.playMultimedia()
pelicula.playMultimedia()
serie.playMultimedia()

pelicula.setInicio(30)