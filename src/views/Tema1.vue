<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Control de calidad de la información
    .row.mb-5.align-items-center
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/0.jpg')
      .col-lg-6(data-aos='fade-left')
        p La información geográfica y/o espacial, junto con la información atributiva de las entidades, compilada en base de datos, son los insumos base para todo trabajo que se realice en el entorno de un Sistema de Información Geográfico (SIG); <b>su calidad es esencial para que el trabajo sea significativo y proporcione resultados consistentes y realmente útiles.</b> 
          br
          br
          |En este sentido, dentro de los SIG, se refiere el concepto de <b>información geográfica de calidad</b>, cuando los datos espaciales logran satisfacer las necesidades de cliente y permiten alcanzar los objetivos esperados por un proyecto determinado.
    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-secundario.p-4.rounded-0.d-flex.align-items-center.flex-wrap.justify-content-center
          img(src='@/assets/curso/1.svg' style='width: 30%').me-3
          p.mb-0(style='width: 60%')
            b El concepto de calidad en la información geográfica ha cobrado tanto valor en la actualidad, que la <em>International Organization for Standardization</em> (ISO) posee un grupo de normas contempladas dentro de la familia ISO 19100, que abordan estos tópicos de manera específica. 
    .row.mb-5.justify-content-center
      .col-lg-12(data-aos='zoom-in-up'): img(src='@/assets/curso/51.svg')

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.bg--1-claro.p-5.rounded-0.d-flex.position-relative
          img(src='@/assets/curso/2.svg' style='position: absolute; top: -15%; left: 5%; width: 250px').d-none.d-xl-block
          .row.align-items-center.justify-content-end
            .col-xl-8
              p.mb-0
                b  En Colombia, estas normas han sido adaptadas por el ICONTEC, mediante la norma NTC 5043, Conceptos Básicos de la Calidad de los Datos Geográficos, que normaliza la información geográfica del país. 
    p.mb-5 Por otra parte, en el país, a partir de la expedición del <b>decreto 3851 de 2006</b>, se conformó un sistema administrativo de información oficial básica, denominado <b>Infraestructura Colombiana de Datos</b>, y definió como uno de sus principales componentes a la ICDE (Infraestructura Colombiana de Datos Espaciales).
    .row.mb-5.justify-content-center
      .col-lg-8(data-aos='zoom-in-up'): img(src='@/assets/curso/3.svg')
    p.mb-5 Es estos momentos, la información geográfica producida y publicada oficialmente por entidades del estado como el IGAC, IDEAM, SGC entre otros; ya cuenta con estándares de calidad, que garantizan un buen nivel de confiabilidad y se encuentra disponible para la descarga desde sus servidores en diversos formatos vectoriales y por medio de enlaces.
      br
      br
      |En el marco de la calidad de los datos geográficos, existen varios elementos, Ariza y García (2018) proponen un modelo basado en distintos aspectos de la calidad, los denominados elementos de la calidad (por ejemplo, exactitud posicional absoluta, exactitud posicional relativa, comisiones y omisiones, corrección de la clasificación, etc.) (p.111).
    .row.mb-5.justify-content-center
      .col-lg-8(data-aos='zoom-in-up'): img(src='@/assets/curso/4.svg')
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.bg--1-claro.p-5.rounded-0.d-flex.position-relative
          img(src='@/assets/curso/5.svg' style='position: absolute; top: -5%; left: 5%; width: 210px').d-none.d-xl-block
          .row.align-items-center.justify-content-end
            .col-xl-9
              p.mb-0
                b Para el caso de la estructuración de SIG para sistemas forestales y agroecológicos, por tratarse de proyectos de pequeña escala los errores en los datos pueden estar referidos a las relaciones entre objetos espaciales (Topología), información atributiva y a temas de precisión posicional, por lo cual su calidad estará enfocada principalmente en esos aspectos, claro está, sin desconocer la importancia que tiene la normalización en la calidad de la información geográfica.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Verificación de topologías
    .row.mb-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/6.jpg')
      .col-lg-6(data-aos='fade-left')
        p Los Sistemas de Información Geográfica (SIG), utilizan modelos geométricos (puntos, líneas y polígonos) para realizar una abstracción de cualquier aspecto de la realidad, siempre con el objetivo de capturar y procesar dicha información para la toma de decisiones para los diferentes proyectos que se realicen.
          br
          br
          |Toda entidad geográfica, modelada geométricamente, está referida por dos tipos de localizaciones, una absoluta, que está dada por sus coordenadas de acuerdo a un sistema de referencia de coordenadas externo y una relativa, que nos habla de su relación con los demás elementos del entorno. Esta relación de una entidad con las demás entidades en el entorno, es lo que se denomina TOPOLOGÍA.
    p.mb-5 La topología especifica cómo las entidades geográficas representadas por puntos, líneas y polígonos, comparten su geometría permitiendo conocer las relaciones de coherencia y continuidad de las capas; estas relaciones se definen por unas reglas de vecindad, denominadas reglas topológicas, y se pueden aplicar entre varias capas o también dentro de una misma capa,  ya sean puntos con puntos, líneas con líneas, polígonos con polígonos, puntos con líneas, puntos con polígonos y líneas con polígonos, y son de utilidad para: 
    .row.mb-5.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-4
            .tarjeta.tarjeta-icono.bg--1-claro-2.p-4.h-100
              .tarjeta-icono__icono.d-flex.justify-content-center.align-items-center.mb-3
                img(src='@/assets/curso/7.svg')
                img(src='@/assets/curso/8.svg')
              p.text-center Definir la forma en que las entidades <br> comparten la geometría. 
          .col-lg-4
            .tarjeta.tarjeta-icono.bg--1-claro-2.p-4.h-100
              .tarjeta-icono__icono.d-flex.justify-content-center.align-items-center.mb-3
                img(src='@/assets/curso/7.svg')
                img(src='@/assets/curso/8.svg')
              p.text-center Precisar las reglas de<br> integridad de datos.
          .col-lg-4
            .tarjeta.tarjeta-icono.bg--1-claro-2.p-4.h-100
              .tarjeta-icono__icono.d-flex.justify-content-center.align-items-center.mb-3
                img(src='@/assets/curso/7.svg')
                img(src='@/assets/curso/8.svg')
              p.text-center Realizar análisis espaciales.
    p.mb-5 Según Alonso (2019), las capas deben responder a tres conceptos topológicos principales:
    .row.mb-5.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-4
            .tarjeta.tarjeta-icono.bg--3-claro.p-4.h-100
              .tarjeta-icono__icono.d-flex.justify-content-center.align-items-center.mb-3
                img(src='@/assets/curso/9.svg')
                img(src='@/assets/curso/10.svg')
              h4.text-center Conectividad: 
              p.text-center Los arcos se conectan entre sí en los nodos.
          .col-lg-4
            .tarjeta.tarjeta-icono.bg--3-claro.p-4.h-100
              .tarjeta-icono__icono.d-flex.justify-content-center.align-items-center.mb-3
                img(src='@/assets/curso/9.svg')
                img(src='@/assets/curso/10.svg')
              h4.text-center Definición de área: 
              p.text-center Los arcos que se conectan para circundar un área definen un polígono.
          .col-lg-4
            .tarjeta.tarjeta-icono.bg--3-claro.p-4.h-100
              .tarjeta-icono__icono.d-flex.justify-content-center.align-items-center.mb-3
                img(src='@/assets/curso/9.svg')
                img(src='@/assets/curso/10.svg')
              h4.text-center Contigüidad:
              p.text-center Los polígonos son contiguos entre sí si tienen un arco en común.
    p.mb-5 En este sentido, cuando realizamos procesos de vectorización de entidades, es posible cometer faltas de conectividad, de definición de áreas y/o continuidad que dan lugar a algunos de los errores topológicos más frecuentes dentro de los SIG, en el siguiente video se pueden identificar de forma detallada.
    .bg-video.p-4.mb-5
      .row.justify-content-center
        .col-lg-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/onzHJ0hSmjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-5
      .col-lg-3
        .tarjeta.tarjetas-img-up.p-4.color-secundario.h-100.d-flex.align-items-center
          .tarjetas-img-up__img
            img(src='@/assets/curso/11.jpg')
          p.text-center.p-3 En el caso que se tenga entidades de tipo lineal, por ejemplo, cuando se realiza la vectorización de redes como vías, ríos, etc., se puede enfrentar a la generación de arcos colgantes, y se pueden generar como consecuencia de un subtrazo también conocido como <em>undershoot</em>, por ejemplo en donde no hay conexión de nodos.
      .col-lg-3
        .tarjeta.tarjetas-img-up.p-4.color-primario.h-100.d-flex.align-items-center
          .tarjetas-img-up__img
            img(src='@/assets/curso/12.jpg')
          p.text-center.p-3 Cuando se generan arcos colgantes, se evidencia una superposición de líneas o sobretrazo en ingles denominado <em>overshoot</em>
      .col-lg-3
        .tarjeta.tarjetas-img-up.p-4.color-acento-contenido.h-100.d-flex.align-items-center
          .tarjetas-img-up__img
            img(src='@/assets/curso/13.jpg')
          p.text-center.p-3 Otro error típico, que se comete cuando se digitalizan elementos lineales es la creación de pseudonodos, en este caso no hay afectación de la geometría de la capa, pero si genera error cuando se realizan geoprocesos de análisis espacial. 
      .col-lg-3
        .tarjeta.tarjetas-img-up.p-4.color-acento-botones.h-100.d-flex.align-items-center
          .tarjetas-img-up__img
            img(src='@/assets/curso/14.jpg')
          p.text-center.p-3 Esta es la forma correcta como deben quedar digitalizadas las redes con la debida conexión de nodos; buscando la conectividad para la realización del análisis espacial respectivo. 
    p.mb-5 Todo este tipo de errores que se pueden presentar, afectan la calidad de la información geográfica, por tal motivo antes de realizar análisis y generación final de productos es necesario solventarlos; algunos de estos errores no se pueden detectar a simple vista, por lo que es necesario acudir a herramientas que tienen los softwares SIG para facilitar el proceso.
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-5: img(src='@/assets/curso/15.jpg')
      .col-lg-5: p En el caso del <em>software</em> QGIS, cuenta con un complemento gratuito denominado comprobador de topología, el cual se puede instalar desde el menú principal en la pestaña “Complementos”, esta herramienta ayuda a realizar un análisis de la capa deseada y muestra los errores de acuerdo a la regla topológica que se selecciona.
        br
        br
        |Con el uso de esta herramienta, se pueden identificar los sectores donde haya errores y mediante un proceso de edición corregir para generar una información geográfica de calidad.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Comprobación información atributiva
    p.mb-5 La información atributiva representa las características de las entidades geográficas, viene organizada en tablas denominadas tabla de atributos, las cuales están constituidas por filas y columnas; las filas se denominan registros y las columnas campos.
      br
      br
      |A continuación, se presenta un recurso que evidencia el registro de esta información así:
    .tarjeta.bg--4-claro.p-3.rounded-0.text-small.mb-5
      #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
        .carousel-indicators
          button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
        .carousel-inner
          .row.justify-content-center
            .col-lg-8
              .carousel-item.active
                .row.justify-content-center.align-items-center.g-5
                  .col-lg-5
                    p  Los campos pueden almacenar diferentes tipos de datos, números enteros, números reales (decimales), textos entre otros. 
                  .col-lg-6: img(src='@/assets/curso/16.png')
              .carousel-item
                .row.justify-content-center.align-items-center.g-5
                  .col-lg-6
                    p El tipo de campo se elige de acuerdo a la información que se desee almacenar de la entidad, por ejemplo para describir nombres se usa campos tipo texto o cadena.
                      br
                      br
                      |Para el cálculo de geometrías como áreas, longitudes, perímetros por tratarse de variables cuantitativas continuas, el tipo de campo a utilizar es el de número decimal.
                      br
                      br
                      |Para variables cuantitativas discretas como por ejemplo códigos, aplica número entero y se utilizaran de 32 bit o 64 bits, dependiendo de la longitud del número y la cantidad de memoria que se proyecte emplear.
                  .col-lg-6: img(src='@/assets/curso/17.png')
              .carousel-item
                .row.justify-content-center.align-items-center.g-5
                  .col-lg-5
                    p Los tipos de campo Booleano se utilizan cuando la información del atributo corresponde a datos lógicos o binarios.
                      br
                      br
                      |Los tipos Objeto binario (BLOB) aplican cuando la información atributiva de la entidad geográfica corresponde a datos almacenados como una secuencia larga de números binarios, son útiles para almacenar elementos, como imágenes o multimedia. 
                  .col-lg-6: img(src='@/assets/curso/18.png')
              .carousel-item
                .row.justify-content-center.align-items-center.g-5
                  .col-lg-5
                    p Durante la realización de trabajos con SIG, es corriente errar cuando se registra información atributiva de una entidad, por ejemplo, si se estuvieran definiendo las coberturas y usos del suelo de una finca, textualmente un campo denominado “Pastos” y otro campo denominado “pastos”, corresponderían a la misma unidad, pero el <em>software</em> lo toma como dos unidades diferentes.  Desde el punto de vista cartográfico, las dos unidades son iguales, pero cuando se utiliza herramientas de análisis espacial, por ejemplo, herramientas de selección, los dos campos aparecen diferentes . 
                  .col-lg-6: img(src='@/assets/curso/19.png')
              .carousel-item
                .row.justify-content-center.align-items-center.g-5
                  .col-lg-5
                    p La variación de los valores cuando se selecciona tipos de campos diferentes, el campo “Area_ha”, corresponde a la superficie de los lotes en hectáreas, en este caso se selección el tipo de campo “Número decimal”, con una precisión de dos (2) cifras decimales y corresponde al valor real del área.  
                      br
                      br
                      |En el otro caso el campo “Area_entero”, el tipo de campo seleccionado es “Numero entero” y valor calculado se aproxima al valor entero inmediatamente superior.
                  .col-lg-6: img(src='@/assets/curso/20.png')
              .carousel-item
                .row.justify-content-center.align-items-center.g-5
                  .col-lg-5
                    p Es importante  la selección del tipo de campo, si lo que se requiere es el cálculo de geometrías, como áreas, perímetros, longitudes, coordenadas, el tipo de campo seleccionado debe corresponder a número decimal, puesto que son variables continuas, en caso contrario la información aparecería sesgada desvirtuando la información generada. 
                  .col-lg-6: img(src='@/assets/curso/21.png')
                    
                
        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.visually-hidden Previous
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Ajustes de Información
    .row.mb-5.align-items-center
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/22.jpg')
      .col-lg-6(data-aos='fade-left')
        p Tanto los errores topológicos como la información atributiva se pueden ajustar activando la herramienta de edición, se pueden reescribir los campos, redibujar las entidades con el fin de realizar las correcciones respectivas y poder generar una información geográfica de calidad.
          br
          br
          |Existe otro error que tiene que ver con la Precisión Posicional; la precisión de la ubicación espacial también llamada precisión posicional, de las entidades geográficas de un SIG, es un valor cuantificable que representa la diferencia de ubicación entre dos capas de entidades geográficas o entre una capa y la realidad; en otras palabras se refiere a la exactitud de la posición de los datos espaciales en un sistema de referencia expresado por Ariza, García, Rodríguez  & Robledo (2018);  y puede variar mucho dependiendo de las fuentes de información de donde se obtengan los datos.
    p.mb-5 Ariza et al (2018), expresan exactitud a partir de la siguiente ecuación:
    .row.mb-5.justify-content-center
      .col-lg-8
        .cajon.color-primario.bg--1-claro.p-4.mb-4.text-center
          img(src='@/assets/curso/23.svg' style='width: 42px').m-auto
          .h5 Exactitud = Veracidad + Precisión
          p En donde la Veracidad, corresponde a un valor medio del sesgo y la precisión se considera a nivel de un conjunto de datos 
    p.mb-5 En un <b>SIG, existen diferentes fuentes de información, primarias y secundarias</b>, en el siguiente recurso se revisan elementos adicionales para su entendimiento. 
    .row.mb-5.justify-content-center
      .col-lg-6.mb-3
        .tarjeta.tarjetas-img-up.color-acento-contenido--borde.bg--3-claro.h-100.p-4
          .tarjetas-img-up__img
            img(src='@/assets/curso/24.jpg')
          img(src='@/assets/curso/25.svg' style='width: 158px').m-auto.mb-3
          p.text-center Las primarias se refiere a sistemas forestales y/o agroecológicos, corresponde a información levantada directamente en campo, bien sea mediante levantamientos topográficos de precisión o mediante navegadores GPS, y la exactitud depende del nivel de precisión de los equipos utilizados, y puede variar desde unos milímetros hasta varios metros, según sea el caso.
      .col-lg-6.mb-3
        .tarjeta.tarjetas-img-up.color-acento-contenido--borde.bg--3-claro.h-100.p-4
          .tarjetas-img-up__img
            img(src='@/assets/curso/26.jpg')
          img(src='@/assets/curso/27.svg' style='width: 158px').m-auto.mb-3
          p.text-center Cuando se toman fuentes secundarias, bien sea a partir de fotografías aéreas, planos, mapas o imágenes satelitales, al momento de digitalizar esa información y convertirla en vectores, suelen generarse errores, que, dependiendo de la escala de trabajo, pueden variar entre uno y varios metros. 
    p.mb-5 En ambos casos, la exactitud, tanto horizontal como vertical, es apreciable de acuerdo a la escala en la cual se esté trabajando, Miguel (2014), nos presenta unos valores admisibles para diferentes escalas absolutas, tanto horizontal como verticalmente, ver tablas 1 y 2. 
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1 
      span Exactitud absoluta horizontal
    .row.mb-5.justify-content-center
      .col-lg-10
        img(src='@/assets/curso/28.svg')
        figcaption Nota. Tomada de Miguel, O. (2014, p.91).
    .titulo-sexto.color-acento-contenido
      h5 Tabla 2
      span Exactitud absoluta vertical
    .row.mb-5.justify-content-center
      .col-lg-10
        img(src='@/assets/curso/29.svg')
        figcaption Nota. Tomada de Miguel, O. (2014, p.91).
    .row.mb-5.justify-content-center.align-items-center
          .col-lg-10
            .tarjeta.color-acento-botones.p-5.rounded-0.d-flex.position-relative
              img(src='@/assets/curso/30.svg' style='position: absolute; top: -1%; left: 3%; width: 310px').d-none.d-xl-block
              .row.align-items-center.justify-content-end
                .col-xl-8
                  p.mb-0.text-white
                    b Los errores de precisión posicional son apreciables dependiendo de la escala de trabajo del proyecto, en escalas pequeñas se puede decir que son imperceptibles, pero en escalas grandes si pueden disminuir la calidad de los datos geográficos y se requiere en muchos casos hacer los ajustes respectivos en campo. 





















</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
.tarjeta.color-primario
  p
    color: $color-sistema-texto
</style>
