const quizData = [
  {
    question:
      "<h2>1.- ¿Cuál de los siguientes enunciados describe un objetivo de prueba válido?</h2> " +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) Demostrar que no hay defectos no corregidos en el sistema sujeto a prueba.",
        value: "a",
      },
      {
        text: "b) Demostrar que no se producirán fallos tras la implementación del sistema en producción.",
        value: "b",
      },
      {
        text: "c) Reducir el nivel de riesgo del objeto de prueba y generar confianza en el nivel de calidad.",
        value: "c",
      },
      {
        text: "d) Comprobar que no existen combinaciones de entradas no probadas.",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>2.- ¿Cuál de las siguientes opciones es un ejemplo de actividades de prueba que contribuyen al éxito?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) La participación de probadores durante varias actividades del ciclo de vida de desarrollo del software (CVDS) ayudará a detectar defectos en los productos software.",
        value: "a",
      },
      {
        text: "b) Los probadores intentan no molestar a los desarrolladores mientras codifican, para que éstos escriban un código de mejor calidad.",
        value: "b",
      },
      {
        text: "c) Los probadores que colaboran con los usuarios finales ayudan a mejorar la calidad de los informes de defectos durante la integración de componentes y las pruebas de sistemas.",
        value: "c",
      },
      {
        text: "d) Los probadores certificados diseñan casos de prueba mucho mejores que los probadores no certificados.",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>3.- Usted ha sido asignado como probador a un equipo que está desarrollando un nuevo sistema de forma incremental. Ha notificado que no se han realizado cambios en los casos de prueba de regresión existentes durante varias iteraciones y que no se han identificado nuevos defectos de regresión. Su jefe está contento, pero usted no. <br>¿Qué principio de prueba explica su escepticismo?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Las pruebas se desgastan.",
        value: "a",
      },
      {
        text: "b)	Falacia de la ausencia de errores.",
        value: "b",
      },
      {
        text: "c)	Los defectos se agrupan.",
        value: "c",
      },
      {
        text: "d)	Es imposible realizar pruebas exhaustivas",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>4.- Usted trabaja en un equipo que desarrolla una aplicación móvil para hacer pedidos de comida. En la iteración actual el equipo decidió implementar la funcionalidad de pago.<br> ¿Cuál de las siguientes actividades forma parte del análisis de prueba?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Estimar que probar la integración con el servicio de pago llevará 8 días-persona.",
        value: "a",
      },
      {
        text: "b)	Decidir que el equipo debe probar si es posible compartir correctamente el pago entre muchos usuarios.",
        value: "b",
      },
      {
        text: "c)	Utilizar el análisis del valor frontera (AVF) para obtener los datos de prueba para los casos de prueba que comprueban el procesamiento correcto del pago para el importe mínimo permitido a pagar.",
        value: "c",
      },
      {
        text: "d)	Analizar la discrepancia entre el resultado real y el resultado esperado tras ejecutar un caso de prueba que comprueba el proceso de pago con tarjeta de crédito e informar de un defecto.",
        value: "d",
      },
    ],
    correct: ["b"],
  },

  {
    question:
      "<h2>5.- ¿Cuáles de los siguientes factores (del I al V) tienen una influencia SIGNIFICATIVA en el proceso de prueba?</h2>" +
      "<br>I.	El ciclo de vida de desarrollo de software (SDLC)." +
      "<br>II.	El número de defectos detectados en proyectos anteriores." +
      "<br>III.	Los riesgos de producto identificados" +
      "<br>IV.	Los nuevos requisitos normativos obligatorios." +
      "<br>V.	El número de probadores certificados en la organización." +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	I, II tienen una influencia significativa; III, IV, V no la tienen.",
        value: "a",
      },
      {
        text: "b)	I, III, IV tienen una influencia significativa; II, V no la tienen.",
        value: "b",
      },
      {
        text: "c)	II, IV, V tienen una influencia significativa; I, III no la tienen.",
        value: "c",
      },
      {
        text: "d)	III, V tienen una influencia significativa; I, II, IV no la tienen",
        value: "d",
      },
    ],
    correct: ["b"],
  },

  {
    question:
      "<h2>6.- ¿Cuáles DOS de las siguientes tareas pertenecen PRINCIPALMENTE a un rol de prueba?</h2>" +
      "<br>Seleccionar DOS opciones.",
    options: [
      {
        text: "a)	Configurar entornos de prueba.",
        value: "a",
      },
      {
        text: "b)	Mantener la lista de trabajo acumulado del producto (“backlog”).",
        value: "b",
      },
      {
        text: "c)	Diseñar soluciones para nuevos requisitos.",
        value: "c",
      },
      {
        text: "d)	Crear el plan de prueba.",
        value: "d",
      },
      {
        text: "e)	Informar sobre la cobertura alcanzada.",
        value: "e",
      },
    ],
    correct: ["a", "d"],
  },
  {
    question:
      "<h2>7.- ¿Cuáles de las siguientes competencias (I-V) son las MÁS importantes en un probador?</h2>" +
      "<br>I.	Tener conocimiento del dominio." +
      "<br>II.	Crear una visión del producto." +
      "<br>III.	Ser un buen jugador de equipo." +
      "<br>IV.	Planificar y organizar el trabajo del equipo." +
      "<br>V.	Pensamiento crítico." +
      "<br><br>Seleccionar UNA opción.",

    options: [
      {
        text: "a)	II y IV son importantes; I, III y V no lo son.",
        value: "a",
      },
      {
        text: "b)	I, III y V son importantes; II y IV no lo son.",
        value: "b",
      },
      {
        text: "c)	I, II y V son importantes; III y IV no lo son.",
        value: "c",
      },
      {
        text: "d)	III y IV son importantes; I, II y V no lo son.",
        value: "d",
      },
    ],
    correct: ["b"],
  },

  {
    question:
      "<h2>8.- ¿Cómo queda reflejado el enfoque de equipo completo en las interacciones entre probadores y representantes de negocio?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Los representantes de negocio deciden los enfoques de automatización de la prueba.",
        value: "a",
      },
      {
        text: "b)	Los probadores ayudan a los representantes de negocio a definir la estrategia de prueba.",
        value: "b",
      },
      {
        text: "c)	Los representantes de negocio no forman parte del enfoque de equipo completo.",
        value: "c",
      },
      {
        text: "d)	Los probadores ayudan a los representantes de negocio a crear pruebas de aceptación adecuadas.",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      '<h2>9.- Tenga en cuenta la siguiente regla: "para cada actividad del ciclo de vida de desarrollo de software (SDLC) existe una actividad de prueba correspondiente". ¿En qué modelos de CVDS se cumple esta regla?</h2>' +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Sólo en modelos CVDS secuenciales.",
        value: "a",
      },
      {
        text: "b)	Sólo en modelos CVDS iterativos.",
        value: "b",
      },
      {
        text: "c)	Sólo en modelos CVDS iterativos e incrementales.",
        value: "c",
      },
      {
        text: "d)	En modelos CVDS secuenciales, incrementales e iterativos.",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>10.- ¿Cuál de los siguientes enunciados describe MEJOR el enfoque de desarrollo guiado por prueba de aceptación (ATDD)?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	En	ATDD, los criterios de aceptación suelen	crearse basándose en el formato dado/cuando/entonces (“given/when/then”).",
        value: "a",
      },
      {
        text: "b)	En ATDD, los casos de prueba se crean principalmente en la prueba de componente y están orientados al código.",
        value: "b",
      },
      {
        text: "c)	En ATDD, se crean pruebas basadas en criterios de aceptación para impulsar el desarrollo del software correspondiente.",
        value: "c",
      },
      {
        text: "d)	En ATDD, las pruebas se basan en el comportamiento deseado del software, lo que facilita su comprensión por parte de los miembros del equipo.",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>11.- ¿Cuál de las siguientes opciones NO es un ejemplo del enfoque de desplazamiento a la izquierda?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Revisar los requisitos de usuario antes de que sean aceptados formalmente por los implicados.",
        value: "a",
      },
      {
        text: "b)	Escribir una prueba de componente antes de escribir el código correspondiente.",
        value: "b",
      },
      {
        text: "c)	Ejecutar una prueba de eficiencia de desempeño de un componente durante la prueba de componente.",
        value: "c",
      },
      {
        text: "d)	Redactar un script de prueba antes de establecer el proceso de gestión de la configuración.",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>12.- ¿Cuál de los siguientes argumentos utilizaría para convencer a su jefe de que organice retrospectivas al final de cada ciclo de entrega?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Las retrospectivas son muy populares hoy en día y los clientes agradecerían que las añadiéramos a nuestros procesos.",
        value: "a",
      },
      {
        text: "b)	Organizar retrospectivas ahorrará dinero a la organización porque los representantes de los usuarios finales no proporcionan retroalimentación inmediata sobre el producto.",
        value: "b",
      },
      {
        text: "c)	Los puntos débiles del proceso identificados durante la retrospectiva pueden analizarse y servir como lista de tareas para el programa de mejora continua del proceso de la organización.",
        value: "c",
      },
      {
        text: "d)	Las retrospectivas abrazan cinco valores, incluido el coraje y el respeto, que son cruciales para mantener la mejora continua en la organización.",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>13.- ¿Qué tipos de fallos (1-4) se ajustan MEJOR a qué niveles de prueba (A-D)?</h2>" +
      "<br>1. Fallos en el comportamiento del sistema cuando se desvía de las necesidades de negocio del usuario." +
      "<br>2. Fallos en la comunicación entre componentes." +
      "<br>3. Fallos en la lógica de un módulo." +
      "<br>4. Fallos en la implementación incorrecta de las reglas de negocio." +
      "<br><br>A.	Prueba de componente." +
      "<br>B.	Prueba de integración de componentes." +
      "<br>C.	Prueba de sistema." +
      "<br>D.	Prueba de aceptación." +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	1B, 2A, 3D, 4C.",

        value: "a",
      },
      {
        text: "b)	1D, 2B, 3C, 4A.",
        value: "b",
      },
      {
        text: "c)	1D, 2B, 3A, 4C.",

        value: "c",
      },
      {
        text: "d)	1C, 2B, 3A, 4D.",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h3>14.- Usted está probando una historia de usuario con tres criterios de aceptación: CA1, CA2 y CA3. CA1 está cubierto por el caso de prueba CP1, CA2 por CP2, y CA3 por CP3. La historia de ejecución de prueba tuvo tres ejecuciones de prueba en tres versiones consecutivas del software como se indica a continuación:" +
      "Las pruebas se repiten una vez que se informa de que se han corregido todos los defectos encontrados en la realización de prueba y de que está disponible una nueva versión del software.</h3>" +
      "<br><img src='imgs/pregunta14.png' alt='Ejemplo de prueba' style='max-width: 100%; height: auto;' />" +
      "<br><br>¿Cuáles de las pruebas anteriores se ejecutan como prueba de regresión?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Sólo 4, 7, 8, 9.",
        value: "a",
      },
      {
        text: "b)	Sólo 5, 7",
        value: "b",
      },

      {
        text: "c)	Sólo 4, 6, 8, 9.",
        value: "c",
      },
      {
        text: "d)	Sólo 5, 6. ",
        value: "d",
      },
    ],
    correct: ["b"],
  },
  {
    question:
      "<h2>15.- ¿Cuál de las opciones siguientes NO es una ventaja de la prueba estática?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Tener una gestión de defectos menos costosa debido a la facilidad de detectar defectos más tarde en el SDLC.",
        value: "a",
      },
      {
        text: "b)	Corregir los defectos encontrados durante la prueba estática es generalmente mucho menos costoso que corregir los defectos encontrados durante la prueba dinámica.",
        value: "b",
      },
      {
        text: "c)	Encontrar defectos de código que no se habrían encontrado con pruebas dinámicas.",
        value: "c",
      },
      {
        text: "d)	Detectar carencias e incoherencias en los requisitos.",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>16.- ¿Cuál de las siguientes opciones es una ventaja de la retroalimentación temprana y frecuente?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Mejora el proceso de prueba para futuros proyectos.",
        value: "a",
      },
      {
        text: "b)	Obliga a los clientes a priorizar sus requisitos en función de los riesgos acordados.",
        value: "b",
      },
      {
        text: "c)	Es la única forma de medir la calidad de los cambios.",
        value: "c",
      },
      {
        text: "d)	Ayuda a evitar malentendidos sobre los requisitos.",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>17.- Las revisiones que se utilizan en su organización presentan las siguientes características:</h2>" +
      "<br>•	Cuentan con el rol de escriba." +
      "<br>•	El objetivo principal es evaluar la calidad." +
      "<br>•	La reunión está liderada por el autor del producto de trabajo." +
      "<br>•	Hay una preparación individual." +
      "<br>•	Se elabora un informe de revisión." +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Revisión informal.",
        value: "a",
      },
      {
        text: "b)	Revisión guiada.",
        value: "b",
      },
      {
        text: "c)	Revisión técnica.",
        value: "c",
      },
      {
        text: "d)	Inspección",
        value: "d",
      },
    ],
    correct: ["b"],
  },

  //AQUÍ NO SE SABE BIEN LAS RESPUESTAS A LAS PREGUNTAS--------------------------------------------------

  {
    question:
      "<h2>18.- ¿Cuál de estos enunciados NO es un factor que contribuye al éxito de las revisiones?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Los participantes deben dedicar un tiempo adecuado a la revisión.",
        value: "a",
      },
      {
        text: "b)	Dividir los productos de trabajo grandes en partes pequeñas para que el esfuerzo requerido sea menos intenso.",
        value: "b",
      },
      {
        text: "c)	Los participantes deben evitar comportamientos que puedan indicar aburrimiento, exasperación u hostilidad hacia otros participantes.",
        value: "c",
      },
      {
        text: "d)	Los fallos encontrados deben reconocerse, valorarse y tratarse objetivamente.",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>19.- Cuál de las siguientes opciones es una característica de las técnicas de prueba basadas en la experiencia?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Los casos de prueba se crean a partir de información de diseño detallada.",
        value: "a",
      },
      {
        text: "b)	Los elementos probados en la sección de código de la interfaz se utilizan para medir la cobertura.",
        value: "b",
      },
      {
        text: "c)	Las técnicas se basan en gran medida en los conocimientos del probador sobre el software y el dominio del negocio.",
        value: "c",
      },
      {
        text: "d)	Los casos de prueba se utilizan para identificar desviaciones con respecto a los requisitos.",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>20.- Estás probando un formulario de búsqueda de pisos simplificado que sólo tiene dos criterios de búsqueda:</h2>" +
      "<br>•	Piso (con tres opciones posibles: planta baja; primer piso; segundo piso o superior)." +
      "<br>•	Tipo de jardín (con tres opciones posibles: sin jardín; jardín pequeño; jardín grande)." +
      "<br><br>Sólo los pisos de la planta baja pueden tener jardín. El formulario tiene incorporado un mecanismo de validación que no le permitirá utilizar los criterios de búsqueda que infrinjan esta regla." +
      "<br><br>Cada prueba tiene dos valores de entrada: planta y tipo de jardín. Desea aplicar la partición de equivalencia (PE) para cubrir cada planta y cada tipo de jardín en sus pruebas." +
      "<br><br>¿Cuál es el número mínimo de casos de prueba para alcanzar el 100% de cobertura PE?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "3",
        value: "a",
      },
      {
        text: "4",
        value: "b",
      },
      {
        text: "5",
        value: "c",
      },
      {
        text: "6",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>21.- Está probando un sistema que calcula la nota final del curso para un alumno determinado. </h2>" +
      "<br>•	0 - 50 puntos: suspenso" +
      "<br>•	51 - 60 puntos: regular" +
      "<br>•	61 - 70 puntos: satisfactorio" +
      "<br>•	71 - 80 puntos: bien" +
      "<br>•	81 - 90 puntos: muy bien" +
      "<br>•	91 - 100 puntos: excelente" +
      "<br><br>Usted ha preparado el siguiente conjunto de casos de prueba:" +
      "<br><img src='imgs/pregunta21.png' alt='Ejemplo de prueba' style='max-width: 100%; height: auto;' />" +
      "<br><br>¿Cuál es la cobertura del análisis del valor frontera (AVF) de 2 valores para el resultado final que se consigue con los casos de prueba existentes?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	50%",
        value: "a",
      },
      {
        text: "b)	60%",
        value: "b",
      },
      {
        text: "c)	33,3%",
        value: "c",
      },
      {
        text: "d)	100%",
        value: "d",
      },
    ],
    correct: ["b"],
  },
  {
    question:
      "<h2>22.- Su tienda favorita de alquiler diario de bicicletas acaba de introducir un nuevo sistema de gestión de las relaciones con los clientes y le ha pedido a usted, uno de sus socios más fieles, que lo pruebe. </h2>" +
      "<br>Las prestaciones implementadas son las siguientes:" +
      "<br><br>•	Cualquiera puede alquilar una bicicleta, pero los socios obtienen un descuento del 20%." +
      "<br>•	Sin embargo, si no se cumple el plazo de devolución, el descuento deja de estar disponible." +
      "<br>•	Después de 15 alquileres, los socios reciben un regalo: una camiseta." +
      "<br><br>La tabla de decisión que describe las prestaciones implementadas tiene el siguiente aspecto:" +
      "<br><img src='imgs/pregunta22.png' alt='Ejemplo de prueba' style='max-width: 100%; height: auto;' />" +
      "<br><br>Basándose ÚNICAMENTE en la descripción de las prestaciones del sistema de gestión de relaciones con los clientes, ¿cuál de las reglas anteriores describe una situación imposible?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	R4",
        value: "a",
      },
      {
        text: "b)	R2",
        value: "b",
      },
      {
        text: "c) R6",
        value: "c",
      },
      {
        text: "d)	R8",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>23.- Usted prueba un sistema cuyo ciclo de vida está modelado por el diagrama de transición de estado que se muestra a continuación. El sistema comienza en el estado INICIO y termina su operación en el estado APAGADO.</h2>" +
      "<br><img src='imgs/pregunta23.png' alt='Ejemplo de prueba' style='max-width: 100%; height: auto;' />" +
      "<br><br>¿Cuál es el número MÍNIMO de casos de prueba para lograr una cobertura de transiciones válidas?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "4",
        value: "a",
      },
      {
        text: "2",
        value: "b",
      },
      {
        text: "7",
        value: "c",
      },
      {
        text: "3",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>24.- Su juego de prueba logró una cobertura de sentencia del 100%. ¿Cuál es la consecuencia de este hecho?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Cada instrucción del código que contiene un defecto se ha ejecutado al menos una vez.",
        value: "a",
      },
      {
        text: "b)	Cualquier juego de prueba que contenga más casos de prueba que su juego de prueba también alcanzará una cobertura de sentencia del 100%.",
        value: "b",
      },
      {
        text: "c)	Cada camino del código se ha ejecutado al menos una vez.",
        value: "c",
      },
      {
        text: "d)	Cada combinación de valores de entrada se ha probado al menos una vez.",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>25.- ¿Cuál de las siguientes opciones NO es correcta con respecto a la prueba de caja blanca?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Durante la prueba de caja blanca se tiene en cuenta toda la implementación del software.",
        value: "a",
      },
      {
        text: "b)	Las métricas de cobertura de caja blanca pueden ayudar a identificar pruebas adicionales para aumentar la cobertura de código.",
        value: "b",
      },
      {
        text: "c)	Las técnicas de prueba de caja blanca pueden utilizarse en pruebas estáticas.",
        value: "c",
      },
      {
        text: "d)	La prueba de caja blanca puede ayudar a identificar lagunas en la implementación de requisitos.",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>26.- ¿Cuál de las siguientes opciones describe MEJOR el concepto de predicción de errores?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	La predicción de errores requiere replicar rápidamente la tarea de desarrollo para identificar el tipo de equivocación que podría cometer un desarrollador",
        value: "a",
      },
      {
        text: "b)	La predicción de errores implica utilizar su experiencia personal en el desarrollo y los errores que cometió como desarrollador.",
        value: "b",
      },
      {
        text: "c)	La predicción de errores requiere que imagine que es el usuario del objeto de prueba y que adivine los errores que podría cometer al interactuar con él.",
        value: "c",
      },
      {
        text: "d)	La predicción de errores implica utilizar sus conocimientos y experiencia sobre los defectos encontrados en el pasado y los errores típicos cometidos por los desarrolladores.",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>27.- En su proyecto se ha producido un retraso en la entrega de una nueva aplicación y la ejecución de la prueba ha comenzado con retraso, pero usted tiene un conocimiento muy detallado del dominio y buenas competencias analíticas. La lista completa de requisitos aún no se ha compartido con el equipo, pero la dirección pide que se presenten algunos resultados de la prueba.</h2>" +
      "<br>¿Qué técnica de prueba encaja MEJOR en esta situación?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Prueba basada en lista de comprobación.",
        value: "a",
      },
      {
        text: "b)	Predicción de errores.",
        value: "b",
      },
      {
        text: "c)	Prueba exploratoria.",
        value: "c",
      },
      {
        text: "d)	Prueba de rama.",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>28.- ¿Cuál de las siguientes opciones describe MEJOR la forma en que se pueden documentar los criterios de aceptación?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Realizar retrospectivas para determinar las necesidades reales de los implicados con respecto a una historia de usuario dada.",
        value: "a",
      },
      {
        text: "b)	Utilizar el formato dado/cuando/entonces (“given/when/then“) para describir un ejemplo de condición de prueba relacionada con una historia de usuario determinada.",
        value: "b",
      },
      {
        text: "c)	Utilizar la comunicación verbal para reducir el riesgo de que los demás malinterpreten los criterios de aceptación.",
        value: "c",
      },
      {
        text: "d)	Documentar los riesgos relacionados con una historia de usuario dada en un plan de prueba para facilitar la prueba basada en el riesgo de una historia de usuario dada.",
        value: "d",
      },
    ],
    correct: ["b"],
  },
  {
    question:
      "<h2>29.- Tenga en cuenta la siguiente historia de usuario:</h2>" +
      "<br>COMO Editor" +
      "<br>QUIERO revisar el contenido antes de que se publique" +
      "<br>PARA asegurarme de que la gramática es correcta" +
      "<br><br>y sus criterios de aceptación:" +
      '<br><br>•	El usuario puede iniciar sesión en el sistema de gestión de contenidos con el rol de "Editor".' +
      "<br>•	El editor puede ver las páginas de contenido existentes." +
      "<br>•	El editor puede editar el contenido de la página." +
      "<br>•	El editor puede añadir comentarios." +
      "<br>•	El editor puede guardar cambios." +
      '<br>•	El editor puede reasignar el rol de "propietario del contenido" para realizar actualizaciones.' +
      "<br><br>¿Cuál de las siguientes opciones es el MEJOR ejemplo de prueba desarrollo guiado por prueba de aceptación (ATDD) para esta historia de usuario?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Probar si el editor puede guardar el documento después de borrar el contenido de la página.",
        value: "a",
      },
      {
        text: "b)	Probar si el propietario del contenido puede iniciar sesión y realizar actualizaciones del contenido.",
        value: "b",
      },
      {
        text: "c)	Probar si el editor puede programar el contenido editado para su publicación.",
        value: "c",
      },
      {
        text: "d)	Probar si el editor puede reasignar a otro editor para realizar actualizaciones.",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>30.- ¿De qué forma los probadores aportan valor a la planificación de la iteración y entrega?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Los probadores determinan la prioridad de las historias de usuario que hay que desarrollar.",
        value: "a",
      },
      {
        text: "b)	Los probadores se concentran sólo en los aspectos funcionales del sistema que se va a probar.",
        value: "b",
      },
      {
        text: "c)	Los probadores participan en la identificación detallada del riesgo y en la evaluación del riesgo de las historias de usuario.",
        value: "c",
      },
      {
        text: "d)	Los probadores garantizan la entrega de software de alta calidad mediante un diseño de prueba temprano durante la planificación de la entrega.",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>31.- ¿Cuáles DOS de las siguientes opciones son criterios de salida para probar un sistema?</h2>" +
      "<br>Seleccionar DOS opciones.",
    options: [
      {
        text: "a)	La preparación del entorno de prueba.",
        value: "a",
      },
      {
        text: "b)	La capacidad de iniciar sesión en el objeto de prueba por parte del probador.",
        value: "b",
      },
      {
        text: "c)	Haber alcanzado la densidad de defectos estimada.",
        value: "c",
      },
      {
        text: "d)	Los requisitos se traducen al formato dado/cuando/entonces (“given/when/then”).",
        value: "d",
      },
      {
        text: "e)	Las pruebas de regresión se encuentran automatizadas",
        value: "e",
      },
    ],
    correct: ["c", "e"],
  },
  {
    question:
      "<h2>32.- Su equipo utiliza la técnica de estimación de tres puntos para estimar el esfuerzo de prueba de una nueva prestación de alto riesgo. Se realizaron las siguientes estimaciones:</h2>" +
      "<br>Seleccionar UNA opción." +
      "<br><br>•	estimación más optimista: 2 horas-persona." +
      "<br>•	estimación más probable 11 horas-persona." +
      "<br>•	estimación más pesimista 14 personas-hora." +
      "<br><br>¿Cuál es la estimación final?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	9 horas-persona.",
        value: "a",
      },
      {
        text: "b)	14 horas-persona.",
        value: "b",
      },
      {
        text: "c)	11 horas-persona.",
        value: "c",
      },
      {
        text: "d)	10 horas-persona.",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>33.- Usted está probando una aplicación móvil que permite a los usuarios encontrar un restaurante cercano en función del tipo de comida que desean comer. Tenga en cuenta la siguiente lista de casos de prueba, prioridades (es decir, un número menor significa una mayor prioridad) y dependencias:</h2>" +
      "<br><img src='imgs/pregunta33.png' alt='Ejemplo de prueba' style='max-width: 100%; height: auto;' />" +
      "<br><br>¿Cuál de los siguientes casos de prueba debe ejecutarse en tercer lugar?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	CP 003",
        value: "a",
      },
      {
        text: "b)	CP 005",
        value: "b",
      },
      {
        text: "c)	CP 002",
        value: "c",
      },
      {
        text: "d)	CP 001",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>34.- Tenga en cuenta las siguientes categorías de prueba (1-4) y los cuadrantes de prueba ágil (A-D):</h2>" +
      "<br>1.	Prueba de usabilidad" +
      "<br>2.	Prueba de componente" +
      "<br>3.	Prueba funcional" +
      "<br>4.	Prueba de fiabilidad" +
      "<br><br>A.	Cuadrante de prueba ágil Q1: de cara a la tecnología, apoya al equipo de desarrollo." +
      "<br>B.	Cuadrante de prueba ágil Q2: de cara al negocio, apoya al equipo de desarrollo." +
      "<br>C.	Cuadrante de prueba ágil Q3: de cara al negocio, critica el producto." +
      "<br>D.	Cuadrante de prueba ágil Q4: de cara a la tecnología, critica el producto." +
      "<br><br>¿Cómo se corresponden las categorías de prueba con los cuadrantes de prueba ágil?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	1C, 2A, 3B, 4D",
        value: "a",
      },
      {
        text: "b)	1D, 2A, 3C, 4B",
        value: "b",
      },
      {
        text: "c)	1C, 2B, 3D, 4A",
        value: "c",
      },
      {
        text: "d)	1D, 2B, 3C, 4A",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>35.- Durante un análisis del riesgo se identificó y evaluó el siguiente riesgo:</h2>" +
      "<br>-	Riesgo: El tiempo de respuesta es muy prolongado para generar un informe." +
      "<br>-	Probabilidad del riesgo: media; impacto del riesgo: alto." +
      "<br>-  Respuesta al riesgo:" +
      "<br>&nbsp;&nbsp;&nbsp;•	Un equipo de prueba independiente realiza pruebas de rendimiento durante la prueba de sistema" +
      "<br>&nbsp;&nbsp;&nbsp;•  Una muestra seleccionada de usuarios finales realiza pruebas de aceptación alfa y beta antes de la entrega. " +
      "<br><br>	¿Qué medida se propone tomar en respuesta a este riesgo analizado?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Aceptación del riesgo.",
        value: "a",
      },
      {
        text: "b)	Plan de contingencia.",
        value: "b",
      },
      {
        text: "c)	Mitigación del riesgo.",
        value: "c",
      },
      {
        text: "d)	Transferencia del riesgo.",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>36.- ¿Qué herramienta puede utilizar un equipo ágil para mostrar la cantidad de trabajo que se ha completado y la cantidad de trabajo total restante para una iteración determinada?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Criterios de aceptación.",
        value: "a",
      },
      {
        text: "b)	Informe de defecto.",
        value: "b",
      },
      {
        text: "c)	Informe de compleción de la prueba.",
        value: "c",
      },
      {
        text: "d)	Gráfico de quemado.",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>37.- Usted necesita actualizar uno de los guiones de prueba automatizados para que se ajuste a un nuevo requisito. ¿Qué proceso indica que debe crear una nueva versión del guion de prueba en el repositorio de pruebas?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Gestión de la trazabilidad.",
        value: "a",
      },
      {
        text: "b)	Gestión de la configuración",
        value: "b",
      },
      {
        text: "c)	Prueba de mantenimiento.",
        value: "c",
      },
      {
        text: "d)	Ingeniería de requisitos.",
        value: "d",
      },
    ],
    correct: ["b"],
  },
  {
    question:
      "<h2>38.- Usted ha recibido el siguiente informe de defecto de los desarrolladores en el que se indica que la anomalía descrita en este informe de prueba no es reproducible.</h2>" +
      "<br><h3>La aplicación se bloquea</h3>" +
      "<h3>03-Mayo-2022 – Juan Piedra Seca - Rechazado</h3>" +
      '<h3>La aplicación se bloquea tras introducir "Entrada de prueba: $ä" en el campo Nombre de la pantalla de creación de un nuevo usuario. Intenté cerrar la sesión, iniciar sesión con la cuenta test_admin01, mismo problema. Probado con otras cuentas de administrador de prueba, mismo problema. No se ha recibido ningún mensaje de error; el registro (véase adjunto) contiene una notificación de error crítico. Basándose en el caso de prueba TC-1305, la aplicación debería aceptar la entrada proporcionada y crear el usuario. Por favor, corrija con alta prioridad, esta prestación está relacionada con REQ-0012, que es un nuevo requisito de negocio crítico.</h3>' +
      "<br>¿Qué información crítica falta en este informe de prueba que hubiera sido útil para los desarrolladores?" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Resultado esperado y resultado real.",
        value: "a",
      },
      {
        text: "b)	Referencias y estado de los defectos.",
        value: "b",
      },
      {
        text: "c)	Entorno de prueba y elemento de prueba.",
        value: "c",
      },
      {
        text: "d)	Prioridad y severidad.",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>39.- ¿A qué actividad de prueba da soporte una herramienta de preparación de datos de prueba?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Monitorización y control de prueba.",
        value: "a",
      },
      {
        text: "b)	Análisis y diseño de la prueba.",
        value: "b",
      },
      {
        text: "c)	Implementación y ejecución de la prueba.",
        value: "c",
      },
      {
        text: "d)	Compleción de la prueba.",
        value: "d",
      },
    ],
    correct: ["b"],
  },
  {
    question:
      "<h2>40.- ¿Qué elemento identifica correctamente un riesgo potencial de realizar la automatización de la prueba?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Puede introducir regresiones desconocidas en producción.",
        value: "a",
      },
      {
        text: "b)	Es posible que no se dediquen suficientes esfuerzos al mantenimiento del producto de prueba.",
        value: "b",
      },
      {
        text: "c)	Puede que no se confíe lo suficiente en las herramientas de prueba y los productos de prueba asociados.",
        value: "c",
      },
      {
        text: "d)	Puede reducir el tiempo asignado a la prueba manual.",
        value: "d",
      },
    ],
    correct: ["b"],
  },
];
document.getElementById("question-text").innerHTML = question.question;
