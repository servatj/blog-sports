export interface Video {
  title: string;
  publishedAt: string;
  likes: number;
  url: string;
}

export interface YoutuberVideos {
  channelId: string;
  videos: Video[];
}

export const getLatestYoutuberVideos = async (): Promise<YoutuberVideos> => {
  const mock =  {
    "channelId": "UCx21d-Z0VXT0gfUgs6BbDDQ",
    "videos": [
      {
        "title": "LA CULPA DE QUE EL BARÇA NO TENGA FAIRPLAY NO ES DE TEBAS, ES DE LAPORTA.",
        "thumbnail": "https://i.ytimg.com/vi/rN8br3nd0UU/default.jpg",
        "publishedAt": "2024-12-29T17:04:33Z",
        "likes": 83,
        "url": "https://www.youtube.com/watch?v=rN8br3nd0UU"
      },
      {
        "title": "¡SINVERGÜENZAS! NO PODEMOS INSCRIBIR Y YA ESTÁN HABLANDO DE FICHAR EN EL MERCADO DE INVIERNO",
        "thumbnail": "https://i.ytimg.com/vi/7zZ2yvmlBcY/default.jpg",
        "publishedAt": "2024-12-29T13:35:00Z",
        "likes": 638,
        "url": "https://www.youtube.com/watch?v=7zZ2yvmlBcY"
      },
      {
        "title": "A TRES DIAS DE HACER EL MAYOR RIDICULO DE LA HISTORIAL DEL CLUB  - LAPORTA ARREGLA ESTO COMO SEA",
        "thumbnail": "https://i.ytimg.com/vi/WMqKnnusT4Y/default.jpg",
        "publishedAt": "2024-12-29T12:04:02Z",
        "likes": 706,
        "url": "https://www.youtube.com/watch?v=WMqKnnusT4Y"
      },
      {
        "title": "¿EL BARCELONISMO NO APRENDIÓ NADA DE LA ÉPOCA BARTOMEU? ¿VOLVEREMOS A REPETIR LOS MISMOS ERRORES?",
        "thumbnail": "https://i.ytimg.com/vi/D4Ra9Ireu1o/default.jpg",
        "publishedAt": "2024-12-28T21:00:06Z",
        "likes": 902,
        "url": "https://www.youtube.com/watch?v=D4Ra9Ireu1o"
      },
      {
        "title": "OS IBA A TROLEAR Y ME HA SALIDO MAL",
        "thumbnail": "https://i.ytimg.com/vi/e5rmaCMlE98/default.jpg",
        "publishedAt": "2024-12-28T19:25:00Z",
        "likes": 847,
        "url": "https://www.youtube.com/watch?v=e5rmaCMlE98"
      }
    ]
  }

  return mock;
}