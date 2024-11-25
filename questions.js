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

  // -------------------------------------------------------PREGUNTAS ADICIONALES MÁS DE 40-------------------------------------------------------------
  {
    question:
      "<h2>41.- El sistema de venta de entradas de cine calcula el tipo de descuento en función del año de nacimiento del cliente (BY) y del año actual (CY) de la siguiente manera:</h2>" +
      "<br>Sea D la diferencia entre CY y BY, es decir, D = CY - BY" +
      '<br>- Si D < 0 luego imprima el mensaje de error "el año de nacimiento no puede ser mayor que año en curso" ' +
      "<br>- Si 0 <= D < 18 luego aplica el descuento para estudiantes" +
      "<br>- Si 18 <= D < 65 entonces no aplica ningún descuento" +
      "<br>- Si D >= 65 luego aplica el descuento para pensionados" +
      "<br><br>Su conjunto de pruebas ya contiene dos casos de prueba: " +
      "<br>BY = 1990, CY = 2020, resultado esperado: sin descuento" +
      "<br>BY = 2030, CY = 2029, resultado esperado: imprimir el mensaje de error" +
      "<br><br>Seleccionar DOS opciones.",
    options: [
      {
        text: "a) BY = 2011 , CY = 2029",
        value: "a",
      },
      {
        text: "b) BY = 2001 , CY = 2065",
        value: "b",
      },
      {
        text: "c) BY = 1900 , CY = 1965",
        value: "c",
      },
      {
        text: "d) BY = 1965 , CY = 1900",
        value: "d",
      },
      {
        text: "e) BY = 2000 , CY = 2000",
        value: "e",
      },
    ],
    correct: ["c", "e"],
  },
  {
    question:
      "<h2>42.- Está probando un sistema de control de temperatura para una instalación de almacenamiento en frío para horticultura.</h2>" +
      "<br>El sistema recibe la temperatura (en grados Celcius completos) como entrada." +
      '<br><br> Si la temperatura está entre 0 y 2 grados inclucive, el sistema muestra el mensaje "temperatura Ok". Para temperaturas más bajas, el sistema muestra el mensaje "temperatura demasiado baja" y para temperaturas más altas muestra el mensaje "temperatura demasiado alta".' +
      "<br><br> Utilizando el análisis de valores límite de dos valores, ¿Cuál de los siguientes conjuntos de entradas de prueba proporciona el nivel más alto de cobertura de valores límite?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) -1, 3",
        value: "a",
      },
      {
        text: "b) -2, 0, 2, 4",
        value: "b",
      },
      {
        text: "c) -1, 0, 2, 3",
        value: "c",
      },
      {
        text: "d) -2, 0, 2, 4",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>43.- Estás diseñando casos de prueba basados en la siguiente tabla de decisiones.</h2>" +
      "<br>Hasta ahora ha diseñado los siguientes casos de prueba:" +
      "<br>-TC1: hombre de 19 años, no registrado y sin experiencia;resultado esperado: categoría A." +
      "<br>-TC2: mujer de 65 años, no registrada y con 5 años de experiencia;resultado esperado: categoría B." +
      "<br>-TC3: hombre de 66 años, registrado y sin experiencia;resultado esperado: categoría C." +
      "<br>-TC4: mujer de 65 años, registrada y con 4 años de experiencia;resultado esperado: categoría D." +
      "<br><br>¿Cuál de los siguientes casos de prueba, cuando se agrega al conjunto de casos de prueba existente, aumentará la cobertura de la tabla de decisiones?" +
      "<br><img src='imgs/pregunta43.png' alt='Ejemplo de prueba' style='max-width: 100%; height: auto;' />" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) Ningún caso de prueba adicional puede aumentar la cobertura de la tabla de decisiones ya lograda.",
        value: "a",
      },
      {
        text: "b) Hombre de 66 años, no registrado y sin experiencia; resultado esperado: categoría B",
        value: "b",
      },
      {
        text: "c) Mujer de 55 años, no registrada y con 2 años de experiencia; resultado esperado: categoría A",
        value: "c",
      },
      {
        text: "d) Mujer de 19 años, registrada y con 5 años de experiencia; resultado esperado: categoría D",
        value: "d",
      },
    ],
    correct: ["b"],
  },
  {
    question:
      "<h2>44.- Está aplicando pruebas de transición estatal al sistema de reserva de habitaciones de hotel modelado por la siguiente tabla de transición estatal, con 4 estado y 5 eventos diferentes:</h2>" +
      '<br>Suponiendo que todos los casos de prueba comienzan en el estado "Requesting", ¿Cuál de los siguientes casos de prueba, representados como secuencias de eventos, logra la cobertura de transiciones válida más alta? ' +
      "<br><br><img src='imgs/pregunta44.png' alt='Ejemplo de prueba' style='max-width: 100%; height: auto;' />" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) NotAvailable, Cancel, ChangeRoom, Available, Pay",
        value: "a",
      },
      {
        text: "b) Available, ChangeRoom, Available, ChangeRoom, NotAvailable",
        value: "b",
      },
      {
        text: "c) NotAvailable, Available, ChangeRoom, NotAvailable, Cancel",
        value: "c",
      },
      {
        text: "d) Available, ChangeRoom, NotAvailable, Available, Pay",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>45.- Quiere aplicar pruebas de rama(decisiones) al código representado por el siguiente gráfico de flujo de control.</h2>" +
      "<br>¿Cuántos elementos de cobertura necesita probar?" +
      "<br><br><img src='imgs/pregunta45.png' alt='Ejemplo de prueba' style='max-width: 100%; height: auto;' />" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) 2",
        value: "a",
      },
      {
        text: "b) 7",
        value: "b",
      },
      {
        text: "c) 8",
        value: "c",
      },
      {
        text: "d) 4",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>46.- ¿Cómo pueden ser útiles las pruebas de caja blanca para respaldar las pruebas de caja negra</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) El análisis de cobertura de caja blanca puede ayudar a los probadores a identificar fragmentos inalcanzables del código fuente.",
        value: "a",
      },
      {
        text: "b) Las pruebas de sucursal incluyen técnicas de prueba de caja negra, por lo que lograr una cobertura total de la sucursal garantiza lograr una cobertura total de cualquier técnica de caja negra",
        value: "b",
      },
      {
        text: "c) Las técnicas de prueba de caja blanca pueden proporcionar elementos de cobertura para las técnicas de caja negra",
        value: "c",
      },
      {
        text: "d) Las medidas de cobertura de caja blanca pueden ayudar a los probadores a evaluar las pruebas de caja negra en términos de la cobertura de código lograda por estas pruebas de caja negra",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>47.- ¿Cuál de los siguientes proporciona el MEJOR ejemplo de un criterio de aceptación orientado a escenarios?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) If(contain(product(23).Name, cart.products())) THEN return FALSE",
        value: "a",
      },
      {
        text: "b) La aplicación debe permitir a los usuarios eliminar su cuenta y todos los datos asociados previa solicitud.",
        value: "b",
      },
      {
        text: "c) El sitio web debe cumplir con los Estándares 508 de Accesibilidad a las TIC y garantizar que todos",
        value: "c",
      },
      {
        text: "d) Cuando un cliente agrega un artículo a su carrito y procede al pago, se le debe solicitar que inicie sesión o cree una cuenta si aún no lo ha hecho.",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>48.- Está utilizando un desarrollo basado en pruebas de aceptación y diseñando casos de prueba basados en la siguiente historia de usuario:</h2>" +
      "<br>Criterios de aceptación:" +
      "<br><br>AC1: Los usuarios regulares tienen acceso a los pisos 1 a 3" +
      "<br>AC2: El piso 4 solo es accesible para usuarios especiales" +
      "<br>AC3: Los usuarios especiales tienen todos los derechos de acceso de los usuarios regulares" +
      "<br><br>¿Qué caso de prueba es el MÁS razonable para probar AC3?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) Verificar que un usuario Regular puede acceder a los pisos 1 y 3",
        value: "a",
      },
      {
        text: "b) Verificar que un usuario Especial puede acceder a los pisos 1,2 y 3",
        value: "b",
      },
      {
        text: "c) Verificar que un usuario Especial puede acceder al piso 5",
        value: "c",
      },
      {
        text: "d) Verificar que un usuario Regular no puede acceder al piso 4",
        value: "d",
      },
    ],
    correct: ["b"],
  },
  {
    question:
      "<h2>49.- ¿Cuál de los siguientes son riesgo del producto?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) Aumento del alcance",
        value: "a",
      },
      {
        text: "b) Reducción de costos",
        value: "b",
      },
      {
        text: "c) Arquitectura deficiente",
        value: "c",
      },
      {
        text: "d) Soporte deficiente de herramientas",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>50.- Dadas las siguientes categorías de herramientas de prueba:</h2>" +
      "<br>i.Herramientas de colaboración" +
      "<br>ii.Herramientas de desarrollo y operaciones" +
      "<br>iii.Herramientas administrativas" +
      "<br>iv.Herramientas de prueba no funcionales" +
      "<br>v.Herramientas de diseño e implementación de pruebas" +
      "<br><br>¿Herramientas de cuáles de las categorías tienen MÁS probabilidades de facilitar la ejecución de la prueba?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) i, v",
        value: "a",
      },
      {
        text: "b) i, iii, v",
        value: "b",
      },
      {
        text: "c) ii, iii, iv",
        value: "c",
      },
      {
        text: "d) ii, iv",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>51.- Está preparando un cronograma de ejercuión de pruebas para ejecutar siete casos de prueba TC 1 a TC 7.</h2>" +
      "<br>La siguiente figura incluye las prioridades de estos casos de prueba(1 = prioridad más alta, 3 = prioridad más baja)." +
      "<br><br>La figura también muestra las dependencias entre casos de prueba mediante flechas. Por ejemplo, la flecha de TC 4 a TC 5 solo se puede ejecutar si TC 4 se ejecutó previamente." +
      "<br><br>¿Qué caso de prueba debería ejecutarse en sexto lugar?" +
      "<br><br><img src='imgs/pregunta51.png' alt='Ejemplo de prueba' style='max-width: 100%; height: auto;' />" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) 2",
        value: "a",
      },
      {
        text: "b) 6",
        value: "b",
      },
      {
        text: "c) 3",
        value: "c",
      },
      {
        text: "d) 5",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>52.- ¿Qué muestra el modelo piramidal de prueba</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) Que las pruebas pueden tener diferente granularidad",
        value: "a",
      },
      {
        text: "b) Que las pruebas pueden depender de otras pruebas",
        value: "b",
      },
      {
        text: "c) Que las pruebas pueden requerir diferentes criterios de cobertura",
        value: "c",
      },
      {
        text: "d) Que las pruebas pueden tener diferentes prioridades",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>53.- ¿Cuál de los siguientes es un ejemplo de cómo el análisis de riesgos del producto puede influir en la minuciosidad y el alcance de las pruebas?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) Monitoreo continuo del riesgo nos permite identificar el riesgo emergente lo antes posible",
        value: "a",
      },
      {
        text: "b) El nivel de riesgo evaluado nos ayuda a seleccionar el rigor de las pruebas",
        value: "b",
      },
      {
        text: "c) La identificación del riesgo nos permite implementar actividades de mitigación del riesgo y reducir el nivel de riesgo",
        value: "c",
      },
      {
        text: "d) El análisis de riesgos nos permite derivar partidas de cobertura",
        value: "d",
      },
    ],
    correct: ["b"],
  },
  {
    question:
      "<h2>54.- ¿Cuál de los siguientes NO es un ejemplo de cómo la gestión de la configuración respalda las pruebas?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) Todos los defectos identificados tienen un estado asignado",
        value: "a",
      },
      {
        text: "b) Todas las especificaciones de requisitos se mencionan de manera inequívoca en los planes de prueba",
        value: "b",
      },
      {
        text: "c) Todas las confirmaciones al repositorio se identifican de forma única y se controlan las versiones",
        value: "c",
      },
      {
        text: "d) Se realiza un seguimiento de todos los cambios en los elementos del entorno de prueba",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>55.- ¿Cuál de las siguientes opciones es MÁS probable que sea un beneficio de la automatización de pruebas</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a) La capacidad de generar casos de prueba sin acceso a la base de prueba",
        value: "a",
      },
      {
        text: "b) El aumento en los tiempos de ejecución de pruebas disponibles con mayor poder de procesamiento",
        value: "b",
      },
      {
        text: "c) La prevención de errores humanos a través de una mayor consistencia y repetibilidad",
        value: "c",
      },
      {
        text: "d) El logro de una mayor cobertura a través de una evaluacion más objetiva",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>56.- ¿Cuáles DOS de las siguientes opciones son métricas comunes utilizadas para informar sobre el nivel de calidad del objeto de prueba?</h2>" +
      "<br>Seleccionar DOS opciones.",
    options: [
      {
        text: "a)	Número de defectos encontrados durante la prueba de sistema.",
        value: "a",
      },
      {
        text: "b)	Esfuerzo total en el diseño de pruebas dividido por el número de casos de prueba diseñados.",
        value: "b",
      },
      {
        text: "c)	Número de procedimientos de prueba ejecutados. ",
        value: "c",
      },
      {
        text: "d)	Número de defectos encontrados dividido por el tamaño de un producto de trabajo. ",
        value: "d",
      },
      {
        text: "e)	Tiempo necesario para reparar un defecto. ",
        value: "e",
      },
    ],
    correct: ["a", "d"],
  },
  {
    question:
      '<h2>57.- Su equipo utiliza el póker de planificación para estimar el esfuerzo de prueba de una nueva prestación solicitada. En su equipo existe la norma de que si no hay tiempo para llegar a un acuerdo total y la variación en los resultados es pequeña, se pueden aplicar reglas como "aceptar el número con más votos".</h2>' +
      "<br>Tras dos rondas, no se alcanzó el consenso, por lo que se inició la tercera ronda. Puede ver los resultados de la estimación de la prueba en la tabla siguiente." +
      "<br><br><img src='imgs/pregunta57.png' alt='Ejemplo de prueba' style='max-width: 100%; height: auto;' />" +
      "<br><br>¿Cuál de las siguientes opciones es el MEJOR ejemplo del siguiente paso?." +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	El propietario de producto tiene que intervenir y tomar una decisión final. ",
        value: "a",
      },
      {
        text: "b)	Aceptar 13 como estimación final de la prueba, ya que cuenta con la mayoría de los votos. ",
        value: "b",
      },
      {
        text: "c)	No se necesitan más acciones. Se ha alcanzado el consenso. ",
        value: "c",
      },
      {
        text: "d)	Eliminar la nueva prestación de la entrega actual porque no se ha alcanzado el consenso. ",
        value: "d",
      },
    ],
    correct: ["b"],
  },
  //-------------------PREGUNTAS ADICIONALES DEL WORD-----------------------
  {
    question:
      "<h2>58.- Se le ha encomendado la tarea de analizar y solucionar las causas de los fallos de un nuevo sistema que se va a entregar.</h2>" +
      "<br>¿Qué actividad está realizando?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Depuración ",
        value: "a",
      },
      {
        text: "b)	Prueba de software. ",
        value: "b",
      },
      {
        text: "c)	Educción de requisitos. ",
        value: "c",
      },
      {
        text: "d)	Gestión de defectos. ",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>59.- En muchas organizaciones de software, el departamento de prueba se denomina departamento de Aseguramiento de la Calidad (QA). ¿Es esta frase correcta o no y por qué?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Es correcta. Probar y Aseguramiento de la Calidad significan exactamente lo mismo. ",
        value: "a",
      },
      {
        text: "b)	Es correcta. Estas denominaciones pueden utilizarse indistintamente porque tanto la prueba como el aseguramiento de la calidad centran sus actividades en los mismos problemas de calidad. ",
        value: "b",
      },
      {
        text: "c)	No es correcto. Las pruebas son algo más; las pruebas incluyen todas las actividades relacionadas con la calidad. El aseguramiento de la calidad se centra en los procesos relacionados con la calidad. ",
        value: "c",
      },
      {
        text: "d)	No es correcto. El aseguramiento de la calidad se concentra en los procesos relacionados con la calidad, mientras que las pruebas se centran en demostrar que un componente o sistema es adecuado para su finalidad y en detectar defectos. ",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>60.- Un teléfono que suena en un cubículo vecino distrae a un programador y le hace programar incorrectamente la lógica que comprueba la frontera superior de una variable de entrada. Más tarde, durante la prueba de sistema, un probador notifica que este campo de entrada acepta valores de entrada no válidos.</h2>" +
      "<br>¿Cuál de las siguientes opciones describe correctamente una frontera superior codificada incorrectamente?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	La causa raíz. ",
        value: "a",
      },
      {
        text: "b)	Un fallo. ",
        value: "b",
      },
      {
        text: "c)	Un error. ",
        value: "c",
      },
      {
        text: "Un defecto ",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>61.- Tener en cuenta los siguientes productos de prueba.</h2>" +
      "<img src='imgs/pregunta61.png' alt='Ejemplo de prueba' style='max-width: 100%; height: auto;' />" +
      "<br>¿Qué actividad de prueba produce este producto de prueba como salida? " +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Planificación de la prueba. ",
        value: "a",
      },
      {
        text: "b)	Monitorización y control de prueba. ",
        value: "b",
      },
      {
        text: "c)	Análisis de prueba. ",
        value: "c",
      },
      {
        text: "d)	Diseño de prueba. ",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>62.- ¿Cuál de las siguientes opciones es el MEJOR ejemplo de cómo la trazabilidad apoya la prueba?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Realizar el análisis de impacto de un cambio dará información sobre la compleción de las pruebas. ",
        value: "a",
      },
      {
        text: "b)	El análisis de la trazabilidad entre los casos de prueba y los resultados de prueba proporcionará información sobre el nivel de riesgo residual estimado. ",
        value: "b",
      },
      {
        text: "c)	Realizar el análisis de impacto de un cambio ayudará a seleccionar los casos de prueba adecuados para la prueba de regresión. ",
        value: "c",
      },
      {
        text: "d)	El análisis de la trazabilidad entre la base de prueba, los objetos de prueba y los casos de prueba ayudará a seleccionar los datos de prueba para lograr la cobertura que se asume del objeto de prueba. ",
        value: "d",
      },
    ],
    correct: ["d"],
  },

  {
    question:
      "<h2>63.- ¿Cuál de las siguientes opciones explica MEJOR una ventaja de la independencia de la prueba?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	El uso de un equipo de prueba independiente permite a la gestión de proyecto asignar la responsabilidad de la calidad del entregable final al equipo de prueba. ",
        value: "a",
      },
      {
        text: "b)	Si se puede permitir un equipo de prueba externo a la organización, entonces hay claras ventajas en cuanto a que este equipo externo no se deja influir tan fácilmente por los asuntos de entrega de la gestión de proyectos y la necesidad de cumplir plazos de entrega estrictos. ",
        value: "b",
      },
      {
        text: "c)	Un equipo de prueba independiente puede trabajar separado de los desarrolladores, no necesita distraerse con los cambios de requisitos del proyecto y puede limitar la comunicación con los desarrolladores a los informes de defectos a través del sistema de gestión de defectos. ",
        value: "c",
      },
      {
        text: "d)	Cuando las especificaciones contienen ambigüedades e incoherencias, se hacen suposiciones sobre su interpretación, y un probador independiente puede ser útil para cuestionar esas suposiciones y la interpretación hecha por el desarrollador. ",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>64.- Usted trabaja como probador en un equipo que sigue el modelo V. ¿Cómo afecta la elección de este modelo de ciclo de vida de desarrollo del software (SDLC) a la cronología de las pruebas?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	La prueba dinámica no puede realizarse al principio del SDLC. ",
        value: "a",
      },
      {
        text: "b)	La prueba estática no puede realizarse al principio del SDLC. ",
        value: "b",
      },
      {
        text: "c)	La planificación de la prueba no puede realizarse al principio del SDLC. ",
        value: "c",
      },
      {
        text: "d)	La prueba de aceptación puede realizarse al principio del SDLC. ",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>65.- ¿Cuáles de las siguientes son ventajas de DevOps?</h2>" +
      "<br>I.	Entrega del producto más rápida y plazo de comercialización más rápido." +
      "<br>II.	Aumenta la necesidad de la prueba manual repetitiva." +
      "<br>III.	Disponibilidad permanente de software ejecutable." +
      "<br>IV.	Reducción del número de pruebas de regresión asociadas a la refactorización de código." +
      "<br>V.	La configuración del marco de trabajo de automatización de la prueba es poco costosa, ya que todo está automatizado." +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	I, II, IV son ventajas; III, V no lo son. ",
        value: "a",
      },
      {
        text: "b)	III, V son ventajas; I, II, IV no lo son. ",
        value: "b",
      },
      {
        text: "c)	I, III son ventajas; II, IV, V no lo son. ",
        value: "c",
      },
      {
        text: "d)	II, IV, V son ventajas; I, III no lo son. ",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>66.- Usted trabaja como probador en un proyecto sobre una aplicación móvil para pedidos de comida para uno de sus clientes. El cliente le ha enviado una lista de requisitos. Uno de ellos, de alta prioridad, establece:</h2>" +
      '<br>                 "El pedido debe procesarse en menos de 10 segundos en el 95% de los casos".' +
      "<br><br>Usted creó un conjunto de casos de prueba en los que se realizaron una serie de pedidos de forma aleatoria, se midió el tiempo de procesamiento y se comprobaron los resultados de la prueba con los requisitos." +
      "<br><br>¿Qué tipo de prueba llevó a cabo? " +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Funcional, porque los casos de prueba cubren el requisito de negocio del usuario para el sistema. ",
        value: "a",
      },
      {
        text: "b)	No funcional, porque mide el rendimiento del sistema. ",
        value: "b",
      },
      {
        text: "c)	Funcional, porque los casos de prueba interactúan con la interfaz de usuario. ",
        value: "c",
      },
      {
        text: "d)	Estructural, porque necesitamos conocer la estructura interna del programa para medir el tiempo de procesamiento del pedido. ",
        value: "d",
      },
    ],
    correct: ["b"],
  },
  {
    question:
      "<h2>67.- La estrategia de pruebas de su organización sugiere que, una vez que se vaya a retirar un sistema, se pruebe la migración de datos. ¿En el marco de qué tipo de prueba es MÁS probable que se realice esta prueba?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Prueba de mantenimiento. ",
        value: "a",
      },
      {
        text: "b)	Prueba de regresión. ",
        value: "b",
      },
      {
        text: "c)	Prueba de componente. ",
        value: "c",
      },
      {
        text: "d)	Prueba de integración. ",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>68.- La siguiente es una lista de productos de trabajo producidos en el ciclo de vida del desarrollo de software (SDLC).</h2>" +
      "<br>  I.	Requisitos " +
      "<br>  II.	Cronograma." +
      "<br>  III.	Presupuesto de la prueba." +
      "<br>  IV.	Código ejecutable de terceros." +
      "<br>  V.	Historias de usuario y sus criterios de aceptación." +
      "<br><br> ¿Cuáles de ellos pueden ser revisados?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	I y IV pueden ser revisados; II, III y V no. ",
        value: "a",
      },
      {
        text: "b)	I, II, III y IV pueden ser revisados; V no. ",
        value: "b",
      },
      {
        text: "c)	I, II, III y V pueden ser revisados; IV no. ",
        value: "c",
      },
      {
        text: "d)	III, IV y V pueden ser revisados; I y II no. ",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>69.- Decida cuáles de los siguientes enunciados (I-V) son correctos para la prueba estática y cuáles son correctos para la prueba dinámica.</h2>" +
      "<br>  I.	Los comportamientos anómalos externos son más fáciles de identificar con esta prueba. " +
      "<br>  II.	Las discrepancias respecto a un estándar de codificación son más fáciles de encontrar con esta prueba." +
      "<br>  III.	Identifica fallos causados por defectos cuando se ejecuta el software." +
      "<br>  IV.	Su objetivo de prueba es identificar los defectos tan pronto como sea posible." +
      "<br>  V.	La falta de cobertura de requisitos de seguridad críticos es más fácil de encontrar y solucionar." +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	I, IV, V son correctas para la prueba estática; II, III son correctas para la prueba dinámica. ",
        value: "a",
      },
      {
        text: "b)	I, III, IV son correctas para la prueba estática; II, V son correctas para la prueba dinámica. ",
        value: "b",
      },
      {
        text: "c)	II, III son correctas para la prueba estática; I, IV, V son correctas para la prueba dinámica. ",
        value: "c",
      },
      {
        text: "d)	II, IV, V son correctas para la prueba estática; I, III, IV son correctas para la prueba dinámica. ",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>70.- ¿Cuál de los siguientes enunciados sobre las revisiones formales es VERDADERO?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Algunas revisiones no requieren más de un rol. ",
        value: "a",
      },
      {
        text: "b)	El proceso de revisión tiene varias actividades. ",
        value: "b",
      },
      {
        text: "c)	La documentación que se va a revisar no se distribuye antes de la reunión de revisión, a excepción del producto de trabajo para tipos de revisión específicos. ",
        value: "c",
      },
      {
        text: "d)	Los defectos encontrados durante la revisión no se informan ya que no se encuentran mediante pruebas dinámicas. ",
        value: "d",
      },
    ],
    correct: ["b"],
  },
  {
    question:
      "<h2>71.- ¿Qué tarea puede asumir la dirección durante una revisión formal?</h2>" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Asumir la responsabilidad general de la revisión. ",
        value: "a",
      },
      {
        text: "b)	Decidir qué se va a revisar. ",
        value: "b",
      },
      {
        text: "c)	Asegurar que las reuniones de revisión se lleven a cabo de forma efectiva y mediar, si es necesario. ",
        value: "c",
      },
      {
        text: "d)	Registrar la información de la revisión, tales como las decisiones de la revisión. ",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>72.- Un sistema de almacenamiento de vino utiliza un dispositivo de control que mide la temperatura T de la bodega (medida en °C, redondeada al grado más próximo) y avisa al usuario si se desvía del valor óptimo de 12, de acuerdo con las siguientes reglas:</h2>" +
      '<br>•	si T = 12, el sistema dice "temperatura óptima".' +
      '<br>•	si T < 12, el sistema dice: "la temperatura es demasiado baja".' +
      '<br>•	si T > 12, el sistema dice: "¡la temperatura es demasiado alta!".' +
      "<br><br>Desea utilizar el análisis del valor frontera (AVF) de 3 puntos para verificar el comportamiento del dispositivo de control. La entrada de prueba es una temperatura en °C proporcionada por el dispositivo." +
      "<br><br>¿Cuál es el conjunto MÍNIMO de entradas de prueba que consigue el 100% de la cobertura deseada?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	11, 12, 13 ",
        value: "a",
      },
      {
        text: "b)	10, 12, 14 ",
        value: "b",
      },
      {
        text: "c)	10, 11, 12, 13, 14 ",
        value: "c",
      },
      {
        text: "d)	10, 11, 13, 14 ",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>73.- ¿Cuál de los siguientes enunciados sobre la prueba de rama es CORRECTO?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Si un programa sólo incluye ramas incondicionales, entonces se puede conseguir un 100% de cobertura de rama sin ejecutar ningún caso de prueba. ",
        value: "a",
      },
      {
        text: "b)	Si los casos de prueba practican todas las ramas incondicionales del código, se consigue un 100% de cobertura de rama. ",
        value: "b",
      },
      {
        text: "c)	Si se consigue un 100% de cobertura de sentencia, entonces también se consigue un 100% de cobertura de rama. ",
        value: "c",
      },
      {
        text: "d)	Si se consigue un 100% de cobertura de rama, entonces se habrán practicado todos los resultados de decisión de cada sentencia de decisión del código. ",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>74.- Usted está probando una aplicación móvil que permite a los clientes acceder y gestionar sus cuentas bancarias. Está ejecutando un juego de prueba que implica la evaluación de cada pantalla, y de cada campo de cada pantalla, con respecto a una lista general de buenas prácticas de interfaz de usuario derivadas de un libro popular sobre el tema que maximiza el atractivo, la facilidad de uso y la accesibilidad para este tipo de aplicaciones.</h2>" +
      "<br>¿Cuál de las siguientes opciones clasifica MEJOR la técnica de prueba que está utilizando?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Caja negra. ",
        value: "a",
      },
      {
        text: "b)	Exploratoria ",
        value: "b",
      },
      {
        text: "c)	Basada en lista de comprobación. ",
        value: "c",
      },
      {
        text: "d)	Predicción de errores. ",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>75.- ¿Cuál de las siguientes opciones describe MEJOR el enfoque colaborativo en la redacción de historias de usuario?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Las historias de usuario son creadas por probadores y desarrolladores y luego aceptadas por los representantes de negocio. ",
        value: "a",
      },
      {
        text: "b)	Las historias de usuario son creadas conjuntamente por representantes de negocio, desarrolladores y probadores. ",
        value: "b",
      },
      {
        text: "c)	Las historias de usuario son creadas por representantes de negocio y verificadas por desarrolladores y probadores. ",
        value: "c",
      },
      {
        text: "d)	Las historias de usuario se crean de forma que sean independientes, negociables, valiosas, estimables, pequeñas y puedan ser objeto de prueba.",
        value: "d",
      },
    ],
    correct: ["b"],
  },
  {
    question:
      "<h2>76.- Tener en cuenta la siguiente parte de un plan de prueba.</h2>" +
      "<br>   La prueba se realizará mediante la prueba de componente y la prueba de integración de componentes. El reglamento exige demostrar que se ha alcanzado un 100% de cobertura de rama para cada componente clasificado como crítico." +
      "<br><br>¿A qué parte del plan de pruebas pertenece esta parte?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Comunicación ",
        value: "a",
      },
      {
        text: "b)	Registro de riesgos. ",
        value: "b",
      },
      {
        text: "c)	Contexto de la prueba. ",
        value: "c",
      },
      {
        text: "d)	Enfoque de prueba. ",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>77.- ¿Cuál de las siguientes opciones NO es verdadera en relación con la pirámide de prueba?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	La pirámide de prueba hace hincapié en tener un mayor número de pruebas en los niveles de prueba inferiores. ",
        value: "a",
      },
      {
        text: "b)	Cuanto más cerca de la cúspide de la pirámide, más formal debería ser su automatización de la prueba. ",
        value: "b",
      },
      {
        text: 'c)	Normalmente, la prueba de componente y la prueba de integración de componentes se automatizan utilizando herramientas basadas en API ("Application Programming Interface - API"). ',
        value: "c",
      },
      {
        text: 'd)	Para la prueba de sistema y la prueba de aceptación, las pruebas automatizadas suelen crearse utilizando herramientas basadas en IGU ("Interfaz Gráfica de Usuario - GUI"). ',
        value: "d",
      },
    ],
    correct: ["b"],
  },
  {
    question:
      '<h2>78.- Durante el análisis del riesgo, el equipo tuvo en cuenta el siguiente riesgo: "El sistema permite un descuento demasiado alto a un cliente". El equipo estimó que el impacto del riesgo era muy alto.</h2>' +
      "<br>¿Qué se puede decir de la probabilidad del riesgo?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	También es muy alta. Un impacto del riesgo alto siempre implica una probabilidad del riesgo alta. ",
        value: "a",
      },
      {
        text: "b)	Es muy baja. Un impacto del riesgo alto siempre implica una probabilidad del riesgo baja. ",
        value: "b",
      },
      {
        text: "c)	No se puede decir nada sobre la probabilidad del riesgo. El impacto del riesgo y la probabilidad del riesgo son independientes. ",
        value: "c",
      },
      {
        text: "d)	La probabilidad del riesgo no es importante con un impacto del riesgo tan alto. No se necesita definirla. ",
        value: "d",
      },
    ],
    correct: ["c"],
  },
  {
    question:
      "<h2>79.- La siguiente lista contiene los riesgos que se han identificado para un nuevo producto software que se va a desarrollar:</h2>" +
      "<br>I.	La dirección traslada a dos probadores experimentados a otro proyecto." +
      "<br>II.	El sistema no cumple los estándares de seguridad física funcional." +
      "<br>III.	El tiempo de respuesta del sistema supera los requisitos de usuario." +
      "<br>IV.	Los implicados tienen expectativas imprecisas." +
      "<br>V.	Las personas discapacitadas tienen problemas al utilizar el sistema." +
      "<br><br>¿Cuáles de ellos son riesgos de proyecto?" +
      "<br><br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	I, IV son riesgos de proyecto; II, III, V no son riesgos de proyecto. ",
        value: "a",
      },
      {
        text: "b)	IV, V son riesgos de proyecto; I, II, III no son riesgos de proyecto. ",
        value: "b",
      },
      {
        text: "c)	I, III son riesgos de proyecto; II, IV, V no son riesgos de proyecto. ",
        value: "c",
      },
      {
        text: "d)	II, V son riesgos de proyecto; I, III, IV no son riesgos de proyecto. ",
        value: "d",
      },
    ],
    correct: ["a"],
  },
  {
    question:
      "<h2>80.- ¿Cuál de los siguientes es un ejemplo de cómo el análisis del riesgo de producto influye en la minuciosidad y el alcance de la prueba?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	El jefe de prueba monitoriza e informa diariamente del nivel de todos los riesgos conocidos para que los implicados puedan tomar una decisión informada sobre la fecha de entrega. ",
        value: "a",
      },
      {
        text: 'b)	Uno de los riesgos identificados fue la "Falta de soporte de bases de datos de código abierto", por lo que el equipo decidió integrar el sistema con una base de datos de código abierto. ',
        value: "b",
      },
      {
        text: "c)	Durante el análisis cuantitativo del riesgo, el equipo estimó el nivel total de todos los riesgos identificados y lo comunicó como riesgo residual total antes de la prueba. ",
        value: "c",
      },
      {
        text: "d)	La evaluación del riesgo puso de manifiesto un nivel muy alto de riesgos de rendimiento, por lo que se decidió realizar pruebas detalladas de eficiencia del rendimiento en una fase temprana del ciclo de vida de desarrollo de software. ",
        value: "d",
      },
    ],
    correct: ["d"],
  },
  {
    question:
      "<h2>81.- ¿Cuál de las siguientes informaciones contenidas en un informe del avance de la prueba es la MENOS útil para los representantes de negocio?</h2>" +
      "<br>Seleccionar UNA opción.",
    options: [
      {
        text: "a)	Impedimentos para la prueba. ",
        value: "a",
      },
      {
        text: "b)	Cobertura de rama alcanzada. ",
        value: "b",
      },
      {
        text: "c)	Avances de la prueba. ",
        value: "c",
      },
      {
        text: "d)	Nuevos riesgos dentro del ciclo de prueba. ",
        value: "d",
      },
    ],
    correct: ["b"],
  },
];
document.getElementById("question-text").innerHTML = question.question;
