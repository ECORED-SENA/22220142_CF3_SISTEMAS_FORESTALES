<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Presentación de resultados
    p.mb-5 Antes de estructurar un Sistema de Información Geográfica SIG, siempre es necesario que se realicen algunos de los siguientes cuestionamientos:
    .row.justify-content-center.mb-5
      .col-md-6
        SlyderF(columnas="col-12")
          .tarjeta.color-primario.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/31.svg' alt='AvatarTop' style='width: 177px')
              .col-6
                p.text-center.text-white.mb-0 ¿Qué se quiere planificar?
          .tarjeta.color-primario.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/31.svg' alt='AvatarTop' style='width: 177px')
              .col-6
                p.text-center.text-white.mb-0 ¿Qué tipo de información requiere para la toma de decisiones?
          .tarjeta.color-primario.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/31.svg' alt='AvatarTop' style='width: 177px')
              .col-6
                p.text-center.text-white.mb-0 ¿En qué medida el SIG ayuda a lograr los objetivos deseados?
          .tarjeta.color-primario.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/31.svg' alt='AvatarTop' style='width: 177px')
              .col-6
                p.text-center.text-white.mb-0 ¿Cuáles son las actividades que se apoyaran con el uso de un SIG?
          .tarjeta.color-primario.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/31.svg' alt='AvatarTop' style='width: 177px')
              .col-6
                p.text-center.text-white.mb-0 ¿Quién será el usuario de la información generada por SIG?
          .tarjeta.color-primario.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/31.svg' alt='AvatarTop' style='width: 177px')
              .col-6
                p.text-center.text-white.mb-0 ¿Qué se necesita para lograr los resultados esperados en términos de información y tiempo?
    p.mb-5 Cada respuesta que se dé, dará origen a un tipo de información específica que se desea obtener después de estructurar un SIG, con este tipo de herramientas se pueden obtener planos, mapas, bases de datos, tablas, imágenes, recursos WEB, etc.; cualquier tipo de información geográfica digital y también análoga mediante procesos de impresión.
      br
      br
      | En el caso específico de la aplicación de SIG a los sistemas forestales y agroecológicos, dependiendo de los objetivos del proyecto y del usuario final, se pueden generar diferentes productos geográficos, bien sea para el cumplimiento de requisitos legales ante autoridades locales, regionales o nacionales o simplemente como insumo para la planificación de nuestros sistemas productivos.
      br
      br
      | Uno de los productos más usuales obtenidos a partir de un SIG, son los mapas, hecho por el cual se profundizará a continuación sobre este tema. 
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Composición de mapas
    p.mb-5 Según la Asociación Cartográfica Internacional un mapa es la representación convencional gráfica de fenómenos concretos o abstractos, localizados en la tierra o en cualquier parte del universo (IGN, s.f., p.11).  Esta representación, generalmente se realiza sobre un plano bidimensional, y conserva la posición relativa de su localización. 
    SlyderB.mb-5(:datos="datosSlyder")
    p.mb-5 Una vez identificados los elementos del mapa, se procede a realizar la composición o salida gráfica teniendo en cuenta las siguientes consideraciones:
    .row.mb-5
      .col-lg-4.mb-3
        .tarjeta.color-primario.p-5.h-100
          img(src='@/assets/curso/38.svg' alt='AvatarTop' style='width: 80px').mb-3
          h5 Simbología
          p Se definen los estilos y colores de las capas con las cuales se va a realizar la composición, en el entorno SIG.
      .col-lg-4.mb-3
        .tarjeta.color-secundario.p-5.h-100
          img(src='@/assets/curso/39.svg' alt='AvatarTop' style='width: 80px').mb-3
          h5 Etiquetado
          p Se ubican los nombres o atributos que se quiere que aparezcan en el cuerpo del mapa al igual que su ubicación, tipo de letra, color, estilo.
      .col-lg-4.mb-3
        .tarjeta.bg--1-claro.p-5.h-100
          img(src='@/assets/curso/40.svg' alt='AvatarTop' style='width: 80px').mb-3
          h5 Catalogo de Objetos
          p Es importante destacar que cuando se trata de generación de cartografía oficial, cada entidad define la forma en la que se deben presentar los mapas; es una guía en donde definen los estilos, colores, tipos y tamaños de letras, tipos y tamaños de líneas, símbolos, etc., con los cuales se debe representar a cada uno de los elementos geográficos del mapa. 
    p.mb-5 En el Software QGIS, en las propiedades de la capa (layer properties) se encuentra la ruta para configurar la simbología y etiquetas del mapa de la siguiente forma:
    .row.mb-5.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              h5 Ventana de propiedades de capa en QGIS
              p Definida la simbología y etiquetas de las capas, se abre la ventana de composición de mapas, mediante el icono de la barra de menús de la interfase de QGIS, desplegándose esta interfase.
            .col-md-6
              figure
                img(src='@/assets/curso/41.jpg', alt='Texto que describa la imagen')
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/42.jpg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h5 Ventana de composición de mapas en QGIS 3.16
              p Definida la simbología y etiquetas de las capas, se abre la ventana de composición de mapas, mediante el icono de la barra de menús de la interfase de QGIS, desplegándose la interfase correspondiente.
          .row
            .col-md-6.mb-4.mb-md-0
              h5 Ventana de composición de mapas en QGIS 3.16
              p En la interfase de composición se comienza a realizar la distribución espacial de los elementos del mapa, inicialmente se selecciona el tamaño de la página, el software brinda un amplio menú de tamaños, según las normas internacionales, o se puede configurar el tamaño deseado de acuerdo a las necesidades del trabajo.
            .col-md-6
              figure
                img(src='@/assets/curso/43.jpg', alt='Texto que describa la imagen')
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/44.jpg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h5 Composición Final 
              p Cuando se selecciona el  tamaño del papel deseado, se empieza a agregar las capas, la grilla de coordenadas, la rosa de los vientos, los símbolos, la leyenda hasta tener completo el mapa listo para impresión. En la mayoría de software SIG, la composición se puede exportar en diferentes formatos, siendo los más comunes PDF  y JPG. 
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Presentación de Informes
    .row.mb-5.align-items-center
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/45.jpg')
      .col-lg-6(data-aos='fade-left')
        p Un informe SIG, es un documento en el cual se presenta de forma narrativa, los resultados del proyecto y está compuesto por texto, mapas, gráficos, tablas, etc.; pueden corresponder a avances del proyecto, y su periocidad depende de las características propias del trabajo. 
          br
          br
          |Estos informes pueden elaborarse en cualquier procesador de texto, pero en la actualidad los softwares SIG también incorporan herramientas, que permiten de manera organizada y lógica presentar este tipo de información.
          br
          br
          |En el Software QGIS 3.16, se ingresa a la barra de menús, en la pestaña “proyecto”, se encuentra la opción “Nuevo informe”, esta corresponde a la herramienta generador de informes, con la cual se puede ingresar y organizar la información que se requiera presentar. 
    .separador.mb-5
    #t_2_3.titulo-tercero.color-acento-contenido
      h2 2.3 Empaquetado del proyecto
    p.mb-5 A medida que los usuarios de diferentes disciplinas utilizan y acceden cada vez más al uso de software SIG, se hace necesario tener una forma de compartir fácilmente la información generada en el software. Cada software genera un tipo de archivo, por ejemplo, un archivo de Microsoft Word tiene extensión .doc.; un archivo de Excel se guarda con extensión .xls, y es muy fácil compartir este archivo por cualquier medio electrónico y abrirlo en cualquier dispositivo. A continuación, se presenta la forma de empaquetado de la información en SIG. 
    .tarjeta.bg--2-claro.p-5
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="1")
          .col-md-12.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/46.jpg', alt='Texto que describa la imagen')
          .col-md-12
            p Los softwares SIG, también tienen su propia extensión de guardado de proyectos, el software ArcGis por ejemplo, genera archivos con extensión. mxd y QGIS genera archivos con extensión. qgz o .qgs, como se muestra en el siguiente ejemplo:
        .row(titulo="2").align-items-center
          .col-md-6
            p Estos softwares, conectan capas (vectoriales o ráster) que están almacenadas en ficheros disponibles en la computadora personal y al momento de abrir el proyecto carga normalmente conservando las últimas ediciones realizadas.
              br
              br
              |En la imagen se aprecian las diferentes capas cargadas en el proyecto, incluida su simbología.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/47.jpg', alt='Texto que describa la imagen')
        .row(titulo="3").align-items-center
          .col-md-6
            p Al momento de compartir el archivo y abrirlo en otro equipo, aparece un cuadro de dialogo que indica error en el cargue de las capas.  
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/48.jpg', alt='Texto que describa la imagen')
        .row(titulo="4").align-items-center
          .col-md-6
            p Para evitar estos inconvenientes, los softwares SIG han incorporado herramientas o complementos que permiten comprimir los proyectos con todas sus capas, para poder compartirlos sin que haya perdida de información; esta acción dentro de los SIG se conoce como Empaquetado de mapas y permite compartir estos documentos completos con otros usuarios. 
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/49.jpg', alt='Texto que describa la imagen')
        .row(titulo="5").align-items-center
          .col-md-6
            p En el caso de QGIS, por ser software libre, incorpora complementos gratuitos que ayudan para la realización de este proceso; en la figura se puede apreciar dos opciones que se tienen para el empaquetado de los proyectos SIG. 
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/50.jpg', alt='Texto que describa la imagen')
        







</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'De acuerdo al IGN (s.f) existen diferentes tipos de mapas, dependiendo de la escala se puede encontrar mapas de escala pequeña (escalas menores a 1:100.000) que me representan grandes superficies como países, departamentos, y su nivel de detalle es muy bajo.',
        imagen: require('@/assets/curso/32.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Existen, mapas de escala grande (escalas mayores a 1:10.000), que representan zonas pequeñas como los que se requieren para el caso de sistemas forestales y agroecológicos, los cuales brindan información a nivel de finca; y también se puede encontrar los planos (escalas mayores a 1:2.000), denominados así, por no considerar la forma esférica de la tierra',
        imagen: require('@/assets/curso/33.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Según su propósito, podemos encontrar mapas topográficos, los cuales representan los diferentes elementos (vías, ríos, relieve, entidades territoriales) de un determinado lugar; y, mapas temáticos, que describen características específicas de un territorio (relieve, suelos geología, geomorfología, entre otros).',
        imagen: require('@/assets/curso/34.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Debe tener como primera medida una grilla de coordenadas (plantas o elipsoidales), las cuales están referidas a un sistema de referencia de coordenadas, que nos dan la posición absoluta de la entidad geográfica.',
        imagen: require('@/assets/curso/35.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'La escala, este elemento representa la relación de proporcionalidad entre las dimensiones reales de la entidad geográfica y las dimensiones de su correspondiente modelo en el mapa; únicamente con la escala, se puede realizar la lectura e interpretación de dimensiones de los elementos geográficos. ',
        imagen: require('@/assets/curso/36.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Los últimos elementos de un mapa que se citan son los símbolos y los nombres (Toponimia); estos elementos son indispensables para la lectura e interpretación de los mapas. Los primeros se pueden encontrar agrupados como convenciones o como parte de la leyenda y los segundos hacen parte propiamente dicha del espacio que se está representando. ',
        imagen: require('@/assets/curso/37.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.animation-text

  .text
    position: relative
    width: 200px
    p
      position: absolute
      bottom: 0
      left: 0
      animation: animationText 10s ease-in-out infinite


@keyframes animationText
  0%
    .texto1
      p
        display: none
    .texto2
      p
        display: block
  50%
    .texto1
      p
        display: none
    .texto2
      p
        display: none
  100%
    .texto1
      p
        display: block
    .texto2
      p
        display: none
.slyder__btn
  background-color: #ABE8C7
  &:hover
    background-color: #80DCAB
.tarjeta.color-primario
  h5, p
    color: $color-sistema-texto
.separador
  background-image: url(../assets/curso/separador.png)
  background-repeat: no-repeat
  background-position: center
  background-size: cover
  height: 184px
  width: 100%
.fa-chevron-right:before , .fa-chevron-left:before
  font-size: 40px
  color: #34BD74
</style>
