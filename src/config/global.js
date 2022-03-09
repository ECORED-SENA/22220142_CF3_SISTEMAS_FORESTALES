export default {
  global: {
    componenteFormativo: 'Validación de resultados y presentación de informes.',
    descripcionCurso:
      'En este componente se abordará la temática sobre evaluación de la información geográfica, comprobación de calidad en la información y presentación final de resultados del Sistema de Información Geográfica (SIG).',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Control de calidad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Verificación de topologías',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Comprobación información atributiva',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ajustes de Información',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Presentación de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Composición de mapas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Presentación de Informes',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Empaquetado del proyecto',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Sintesis',
      //   nombreRuta: 'sintesis',
      // },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alonso, D. (2021). Cómo empaquetar mapas en QGIS 3 para compartir nuestros proyectos. Mappinggis.',
      link: 'https://mappinggis.com/2016/07/empaquetar-mapas-qgis/',
    },
    {
      referencia:
        'Ariza-López, Francisco & García-Balboa, José. (2018). Normas sobre la calidad en información geográfica (ISO 19113, ISO 19114, ISO 19138, ISO 2859 e ISO 3951). Mapping, ISSN 1131-9100. 68-83.',
      link:
        'https://www.researchgate.net/publication/28209111_Normas_sobre_la_calidad_en_informacion_geografica_ISO_19113_ISO_19114_ISO_19138_ISO_2859_e_ISO_3951',
    },
    {
      referencia:
        'Ariza-López F.J., García-Balboa, J.L., Rodríguez-Avi, J., Robledo J., (2018). Guía general para la evaluación de la exactitud posicional de datos espaciales. Proyecto: Propuesta de adopción de metodologías y procedimientos empleados para la evaluación de la calidad de la información geográfica para los Estados Miembros del IPGH (Proyectos Panamericanos de Asistencia Técnica –2018 "Agenda del IPGH 2010-2020"). ',
      link:
        'http://publicaciones.ipgh.org/publicaciones-ocasionales/Guia_Evaluacion_Exactitud_Posicional_Datos_Espaciales.pdf',
    },
    {
      referencia:
        'Ariza, F. J., & Rodríguez, A. F. (2019). Calidad en datos geográficos, geoservicios y productores de datos: análisis crítico. Revista Cartográfica, 97, 105–143.',
      link: 'https://revistasipgh.org/index.php/rcar/article/download/178/185/',
    },
    {
      referencia:
        'Castro, A. (2014). La evaluación de la exactitud posicional de la información geográfica según los estándares en uso. Revista IPGH, 11.',
      link:
        'https://www.revistasipgh.org/index.php/rcar/article/download/478/496/',
    },
    {
      referencia:
        'Decreto 3851 de 2006. [Presidencia de la República de Colombia]. Por el cual se organiza un sistema de aseguramiento de la calidad, almacenamiento y consulta de la información básica colombiana y se dictan otras disposiciones. Noviembre 2 de 2006. ',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1688890',
    },
    {
      referencia: 'Esri (s.f). Fundamentos de topología.',
      link:
        'https://pro.arcgis.com/es/pro-app/latest/help/data/topologies/topology-basics.htm',
    },
    {
      referencia: 'Icontec (2010). NTC 5043.',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=es-ES&Q=D326B1BF0080B69E33CB031F00945AED&Req=',
    },
    {
      referencia: 'IGAC (s.f). ¿Qué son los mapas?.',
      link: 'https://www.igac.gov.co/es/contenido/que-son-los-mapas',
    },
    {
      referencia: 'IGN (s.f.). Conceptos Cartográficos.',
      link:
        'https://www.ign.es/web/resources/cartografiaEnsenanza/conceptosCarto/descargas/Conceptos_Cartograficos_def.pdf',
    },
    {
      referencia:
        'Miguel, O.(2014).La evaluación de la exactitud posicional de la información geográfica según los estándares en uso. Revista cartográfica, 90, 81-96. ',
      link:
        'https://www.revistasipgh.org/index.php/rcar/article/download/478/496/',
    },
  ],
  glosario: [
    {
      termino: 'Arco',
      significado:
        'En un mapa, forma definida por una serie conectada de pares de coordenadas x, y únicos. Un arco puede ser recto o curvo.',
    },
    {
      termino: 'Calidad',
      significado:
        'Grado en el que un conjunto de características inherentes cumple con los requisitos',
    },
    {
      termino: 'Capa',
      significado:
        'Una capa en los entornos de los Sistemas de Información Geográfica, es un fichero, o parte de un fichero, que contiene información espacial de una sola variable, pudiendo contener información espacial y temática.',
    },
    {
      termino: 'Escala',
      significado:
        'La escala del mapa se define como la relación de proporcionalidad que existe entre una distancia medida en el terreno y su correspondiente medida en el mapa.',
    },
    {
      termino: 'IDEAM',
      significado:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales',
    },
    {
      termino: 'IGAC',
      significado: 'Instituto Geográfico Agustín Codazzi',
    },
    {
      termino: 'Informacion Geografica',
      significado:
        'Información relativa a fenómenos asociados implícita o explícitamente con una ubicación relativa a la Tierra',
    },
    {
      termino: 'Metadatos',
      significado:
        'Los metadatos describen las características de los datos. Una forma sencilla de definirlos sería la siguiente: “los metadatos son datos acerca de los datos”. Estos proveen información (general o detallada) estructurada y organizada sobre un conjunto de datos, contienen elementos que describen su semántica, calidad, autor, modo de identificación, restricciones de uso, mantenimiento, sistema de referencia y contenido, entre otros.',
    },
    {
      termino: 'Nodo',
      significado:
        'En una cobertura, el punto inicial o final de un arco, vinculado topológicamente a todos los arcos que se encuentran allí.',
    },
    {
      termino: 'Segmento',
      significado:
        'Describe a la porción de una recta que está delimitada por dos puntos',
    },
    {
      termino: 'SGC',
      significado: 'Servicio Geológico Colombiano',
    },
    {
      termino: 'Toponimia',
      significado:
        'Aude al análisis y el significado de los nombres propios que denominan lugares.',
    },
    {
      termino: 'Vertice',
      significado:
        'Uno de un conjunto de pares de coordenadas ordenadas x, y que define la forma de una línea o entidad poligonal.',
    },
  ],
  complementario: [
    {
      texto:
        'Castro, A. (2014). La evaluación de la exactitud posicional de la información geográfica según los estándares en uso. Revista Cartográfica 90.',
      tipo: 'Articulo',
      link:
        'https://www.revistasipgh.org/index.php/rcar/article/download/478/496/',
    },
    {
      texto:
        'IPGH. (2016). La calidad de la Información Geográfica en América Latina. Nosolosig.Com.',
      tipo: 'Articulo',
      link:
        'https://www.nosolosig.com/noticias/713-la-calidad-de-la-informacion-geografica-en-america-latina',
    },
    {
      texto:
        'Mastergis. (2021). Diseñador de Impresión con QGIS [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/upBKtm5y0Gc',
    },
    {
      texto:
        'Silvherinformatica.  (2020). Corregir errores topológicos de capas vectoriales en QGIS 3x. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=lMC1DBgLLMY',
    },
    {
      texto:
        'Alonso, D. (2021). Cómo empaquetar mapas en QGIS 3 para compartir nuestros proyectos. Mappinggis. ',
      tipo: 'Articulo',
      link: 'https://mappinggis.com/2016/07/empaquetar-mapas-qgis/',
    },
    {
      texto:
        'https://www.esri.com/ (2021). Tres representaciones fundamentales de capas de información geográfica. Arcgis.Com.',
      tipo: 'Articulo',
      link:
        'https://resources.arcgis.com/es/help/getting-started/articles/026n0000000n000000.htm',
    },
    {
      texto:
        'Prieto, L. (2019). Generación de informes en QGIS (I). Asociación Geinnova. ',
      tipo: 'Articulo',
      link:
        'https://geoinnova.org/blog-territorio/generacion-de-informes-en-qgis-i/',
    },
    {
      texto: 'gabri. (2021). ¿Qué es un mapa? Acolita.com. ',
      tipo: 'Articulo',
      link: 'https://acolita.com/que-es-un-mapa/',
    },
    {
      texto:
        'Alonso, D. (2015). Cómo encontrar y corregir errores de topología en QGIS 3. Mappinggis.com.',
      tipo: 'Articulo ',
      link: 'https://mappinggis.com/2015/03/correccion-de-topologia-en-qgis/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Eduardo Álava Arévalo',
        cargo: 'Instructor',
        centro:
          'Centro Internacional de Producción Limpia Lope - Regional Nariño',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Paula Andrea Taborda Ruiz',
        cargo: '',
        centro: '',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
