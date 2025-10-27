================================================================================
                             TUX FREEDOM v3.1bb
                           Un Juego Dodge 'em up
================================================================================

INDICE
------
1. Historia
2. Requisitos del Sistema
3. Instalacion
4. Sistema de Autenticacion
4. SISTEMA DE AUTENTICACION
6. Mecanicas de Juego
7. Controles
8. Objetos y Power-Ups
9. Sistema de Puntuacion
10. Niveles y Dificultad
11. Consejos y Trucos
12. Creditos

================================================================================
1. HISTORIA
================================================================================

En un mundo digital donde los sistemas operativos privativos intentan dominar
cada rincon del ciberespacio, Tux, la valiente mascota de Linux, se alza como
el ultimo bastión de la libertad del software.

Los sistemas operativos comerciales caen del cielo como lluvia incesante,
buscando atrapar a Tux y acabar con el espiritu del software libre. Pero Tux
no esta solo en esta batalla. Los kernels de Linux aparecen ocasionalmente
para darle poder temporal, y los peces le otorgan fuerzas renovadas para
continuar su lucha.

Tu mision: Ayudar a Tux a sobrevivir 60 segundos en cada uno de los 10 niveles
progresivamente mas dificiles, esquivando los sistemas operativos enemigos y
recolectando los power-ups que apareceran en su camino.

La libertad del software depende de ti. ¡Libera a Tux!

================================================================================
2. REQUISITOS DEL SISTEMA
================================================================================

- Navegador web moderno con soporte HTML5 Canvas
  (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Conexión a internet REQUERIDA (autenticación y guardado de puntajes)
- Resolucion minima de pantalla: 800x600 pixeles
- Soporte de audio (opcional pero recomendado)
- JavaScript habilitado
- Cookies y almacenamiento local habilitados

================================================================================
3. INSTALACION
================================================================================

1. Descarga todos los archivos del juego en una carpeta local
2. Asegurate de mantener la estructura de carpetas intacta:
   - /Resources (contiene imagenes del juego)
   - /Sound/Music (musica de fondo)
   - /Sound/Effects (efectos de sonido)
   - /Fonts (fuente personalizada)
   - /JS (archivos JavaScript del juego y autenticacion)
   - /Styles (hojas de estilo CSS)
3. Abre el archivo index.html con tu navegador preferido
4. Regístrate con un correo electrónico y contraseña
5. ¡Listo para jugar!

NOTA: Requiere conexión a internet para el sistema de autenticación y 
guardado de puntajes. Si el audio no funciona correctamente, verifica 
que tu navegador tenga los permisos de reproducción automática habilitados.

================================================================================
4. SISTEMA DE AUTENTICACION
================================================================================

¡NUEVA FUNCIONALIDAD EN v3.1b! Tux Freedom ahora cuenta con un sistema completo
de autenticación y gestión de usuarios y muchisimos bug fixes.

REGISTRO DE USUARIO
-------------------
1. Abre login.html en tu navegador
2. En la sección "¿No tienes cuenta?" ingresa:
   - Correo electrónico válido
   - Contraseña segura (mínimo 6 caracteres)
3. Presiona "Registrarse"
4. Si el registro es exitoso, serás automáticamente autenticado

INICIO DE SESIÓN
----------------
1. En la sección principal de login.html ingresa:
   - Tu correo electrónico registrado
   - Tu contraseña
2. Presiona "Iniciar sesión"
3. Si las credenciales son correctas, accederás al menú principal

CARACTERÍSTICAS DEL SISTEMA
---------------------------
- Autenticación segura con Firebase
- Sesiones persistentes (no necesitas login frecuente)
- Puntajes asociados a tu cuenta personal
- Códigos de nivel únicos por usuario
- Cierre de sesión desde el botón "SALIR" del menú principal
- Protección automática: si no estás autenticado, serás redirigido al login

SEGURIDAD Y PRIVACIDAD
----------------------
- Las contraseñas están cifradas y protegidas
- Solo se almacena información básica del juego
- Tu progreso y puntajes están seguros en la nube
- Puedes cerrar sesión en cualquier momento

================================================================================
5. MENU PRINCIPAL
================================================================================

IMPORTANTE: El juego requiere autenticación. Primero debes registrarte o 
iniciar sesión desde login.html antes de acceder al menú principal.

Al acceder al juego después de autenticarte, encontraras el logo de TUX FREEDOM 
en la esquina superior izquierda, junto con un panel de botones con las 
siguientes opciones:

NUEVA AVENTURA
--------------
Inicia una partida nueva desde el nivel 1 con 3 vidas y puntuacion en cero.
Todos los records anteriores permanecen guardados en la base de datos.

CONTINUAR AVENTURA
------------------
¡FUNCIONALIDAD PRINCIPAL! Permite continuar tu aventura desde cualquier nivel 
usando códigos únicos. Cada nivel genera un código especial que puedes copiar 
y usar más tarde para continuar exactamente donde lo dejaste. Los códigos se 
muestran en el menú de pausa y puedes copiarlos presionando 'C'. Al usar un 
código, siempre empiezas con 3 vidas y puntuación 0.

INSTRUCCIONES
-------------
Muestra informacion detallada sobre los controles, objetivos y mecanicas del
juego. Puedes volver al menu principal en cualquier momento desde esta pantalla.

DASHBOARD
---------
¡SISTEMA DE PUNTUACIONES ONLINE! Visualiza la tabla de puntajes con los mejores 
records de todos los jugadores registrados. Muestra el usuario y la puntuación 
alcanzada, ordenados de mayor a menor. Los puntajes se guardan automáticamente 
en la nube. Perfecto para competir con amigos y ver quién logra el mejor puntaje.

SALIR
-----
Cierra la sesión actual y regresa a la pantalla de login. Todos los progresos
quedan guardados en tu cuenta.

================================================================================
6. MECANICAS DE JUEGO
================================================================================

OBJETIVO PRINCIPAL
------------------
Sobrevive 60 segundos en cada nivel esquivando los sistemas operativos que
caen del cielo. Completa los 10 niveles para ganar el juego.

VIDAS
-----
Comienzas con 3 vidas. Pierdes una vida cada vez que colisionas con un sistema
operativo enemigo (Windows, MacOS, iOS o MS-DOS). Si pierdes todas tus vidas,
el juego termina.

INVENCIBILIDAD
--------------
Al recoger un kernel de Linux, Tux se vuelve invencible durante 5 segundos.
Durante este tiempo, aparecerá un mensaje parpadeante en pantalla, Tux brillará
con un aura amarilla pulsante, y podrás atravesar los sistemas operativos sin 
recibir daño. ¡NUEVO EN v3.0a! Efecto visual mejorado con resplandor dorado.

NIVELES
-------
El juego consta de 10 niveles. Cada nivel dura 60 segundos y aumenta en
dificultad progresivamente:
- Mayor velocidad de caida de objetos
- Mayor frecuencia de aparicion de enemigos
- Patrones mas complejos de esquiva

CUENTA REGRESIVA
----------------
Al inicio de cada nivel y al reanudar desde pausa, aparecera una cuenta
regresiva de 3 segundos. Durante este tiempo puedes ver el campo de juego
pero no hay movimiento.

PAUSA
-----
Puedes pausar el juego en cualquier momento presionando ESPACIO. La música
se reducirá y aparecerá un mensaje indicando las opciones disponibles.
Durante la pausa puedes ver tu código de nivel actual y copiarlo presionando 
'C' para continuar más tarde desde ese punto exacto.

SISTEMA DE AUTENTICACION
------------------------
¡NUEVO EN v3.1a! El juego ahora cuenta con un sistema completo de autenticación:
- Registro de usuarios con correo electrónico y contraseña
- Inicio de sesión seguro 
- Guardado automático de puntajes en la nube
- Códigos de nivel personalizados por usuario
- Tabla de puntajes global en tiempo real

================================================================================
7. CONTROLES
================================================================================

MOVIMIENTO
----------
Flechas Izquierda/Derecha  - Mueve a Tux horizontalmente
Tecla A / Tecla D          - Movimiento alternativo izquierda/derecha
Tecla W / Tecla S          - (Sin funcion asignada)

SISTEMA
-------
ESPACIO      - Pausar/Reanudar juego
ESCAPE       - Volver al menu principal (solo durante pausa)
C            - ¡NUEVO! Copiar código de nivel al portapapeles (solo durante pausa)
BACKSPACE    - [Funcion secreta de desarrollo]

MENU
----
Click en botones - Navegar por las diferentes opciones del menu
ENTER            - Seleccionar opcion (cuando un boton tiene foco)

================================================================================
8. OBJETOS Y POWER-UPS
================================================================================

ENEMIGOS (evitalos)
-------------------
Windows  - Logo del sistema operativo Windows, cae a velocidad variable
MacOS    - Logo de Apple MacOS, patron de caida impredecible  
iOS      - Logo de iOS, puede aparecer en rafagas
MS-DOS   - Logo clasico de MS-DOS, caida constante

Todos los enemigos te quitan una vida al contacto (excepto si eres invencible).

POWER-UPS (recogelos)
---------------------
Kernel de Linux  - Otorga 5 segundos de invencibilidad + 50 puntos
                   Aparece periodicamente cada 20 segundos aproximadamente

1-UP (Pez)       - Añade una vida extra + 100 puntos
                   Muy raro, aparece cada 30 segundos aproximadamente

================================================================================
9. SISTEMA DE PUNTUACION
================================================================================

Tu puntuacion se muestra constantemente en la esquina superior derecha durante
el juego. Ganas puntos de las siguientes maneras:

- Cada segundo de supervivencia: +10 puntos
- Completar un nivel:            +500 puntos
- Recoger Kernel de Linux:       +50 puntos
- Recoger 1-UP (Pez):            +100 puntos

NUEVO EN v3.1a: Sistema de puntuación en la nube integrado con autenticación. 
Todos tus puntajes se guardan automáticamente en tu cuenta y se muestran en 
la tabla global de mejores puntuaciones. Compite con jugadores de todo el 
mundo y mantén un registro permanente de tus logros.

ESTRATEGIA: La supervivencia es igualmente importante que recoger power-ups.
Mantente vivo el mayor tiempo posible y completa niveles para maximizar tu 
puntuación. ¡Cada segundo cuenta y cada puntaje queda registrado para siempre!

================================================================================
10. NIVELES Y DIFICULTAD
================================================================================

NIVEL 1-2: Tutorial
- Velocidad base de enemigos
- Aparicion espaciada
- Ideal para aprender los controles

NIVEL 3-4: Principiante
- Incremento moderado de velocidad
- Mayor frecuencia de enemigos
- Primeros patrones complejos

NIVEL 5-6: Intermedio
- Velocidad notable de caida
- Enemigos aparecen en grupos
- Requiere reflejos mas rapidos

NIVEL 7-8: Avanzado
- Alta velocidad de objetos
- Patrones densos de enemigos
- Los power-ups son cruciales

NIVEL 9-10: Experto
- Velocidad maxima
- Frecuencia maxima de aparicion
- Solo los mejores jugadores llegan aqui

================================================================================
11. CONSEJOS Y TRUCOS
================================================================================

1. MANTENTE EN MOVIMIENTO
   - No te quedes estatico, siempre busca espacios seguros
   - Anticipa hacia donde caeran los proximos enemigos

2. USA LOS BORDES SABIAMENTE
   - Los extremos de la pantalla son seguros temporalmente
   - Pero cuidado con quedar atrapado

3. PRIORIZA LOS POWER-UPS
   - Un kernel puede salvarte de multiples impactos
   - Los 1-UP son rarisimos, vale la pena el riesgo

4. APRENDE LOS PATRONES
   - Cada nivel tiene cierta predecibilidad
   - Observa y adapta tu estrategia

5. USA LA PAUSA ESTRATEGICAMENTE
   - Toma un respiro si te sientes abrumado
   - Planifica tu siguiente movimiento

6. ADMINISTRA TU INVENCIBILIDAD
   - No desperdicies los segundos de invencibilidad
   - Usala para recolectar mas power-ups o reposicionarte

7. PRACTICA LA PRECISION
   - Movimientos pequeños y controlados son mejores
   - No te sobrepases al esquivar

8. MANTENTE CALMADO
   - El panico lleva a errores
   - Respiracion profunda entre niveles

================================================================================
12. CREDITOS
================================================================================

DESARROLLO
----------
Juego desarrollado con HTML5, CSS3 y JavaScript vanilla
Sistema de sprites y animaciones optimizado para rendimiento

ARTE Y GRAFICOS
---------------
Tux - Mascota oficial de Linux con sprites animados
Sprites de sistemas operativos con propositos educativos
Backgrounds y efectos visuales personalizados
Animación de entrada para Tux 3D decorativo
Efectos visuales de invencibilidad mejorados
Video introductorio en pantalla de login

AUDIO
-----
Musica de fondo original para menu y gameplay
Efectos de sonido retro-inspirados para todas las acciones

HERRAMIENTAS
------------
Desarrollado con tecnologias web estandar (HTML5, CSS3, JavaScript ES6+)
Integración con Firebase para autenticación y base de datos en tiempo real
Compatible con todos los navegadores modernos
Sistema de archivos modular para mejor mantenimiento

AGRADECIMIENTOS
---------------
A la comunidad de software libre por la inspiracion
A todos los jugadores que disfrutan de este pequeno homenaje
A Linus Torvalds y la comunidad Linux

================================================================================

Un videojuego creado por Fredd Anthony (Cruger117)

VERSION: 3.1b
FECHA: OCTUBRE 2025
- Muchos bugs fixes.

CHANGELOG v3.1a:
- ¡NUEVO! Sistema completo de autenticación con Firebase
- ¡NUEVO! Registro e inicio de sesión con correo electrónico y contraseña
- ¡NUEVO! Guardado automático de puntajes en la nube
- ¡NUEVO! Video introductorio en pantalla de login
- ¡NUEVO! Códigos de nivel personalizados por usuario
- ¡NUEVO! Tabla de puntajes global en tiempo real
- ¡NUEVO! Sistema de sesiones persistente
- ¡NUEVO! Función de cierre de sesión desde el menú principal
- Mejorado: Seguridad y persistencia de datos
- Mejorado: Experiencia de usuario más profesional y robusta

CHANGELOG v3.0a:
- ¡NUEVO! Sistema de códigos de nivel: Continúa tu aventura desde cualquier nivel
- ¡NUEVO! Tabla de puntajes completa en el Dashboard
- ¡NUEVO! Efectos visuales de invencibilidad: Aura amarilla pulsante para Tux
- ¡NUEVO! Animación de entrada para Tux 3D decorativo al iniciar
- ¡NUEVO! Funcionalidad de copiado de códigos con tecla 'C' durante pausa
- ¡NUEVO! Interfaz mejorada para "Continuar Aventura" con validación de códigos
- Mejorado: Sistema de puntuación con bordes y sombras consistentes
- Mejorado: Experiencia de usuario más fluida y pulida

CHANGELOG v2.0.4:
- ¡NUEVO! Favicon agregado: Ahora la pestaña del navegador muestra el icono de Tux Freedom

CHANGELOG v2.0.3:
- ¡NUEVO! Sistema de puntuación mejorado: +10 puntos por segundo
- ¡NUEVO! Bonificación de nivel: +500 puntos al completar cada nivel
- Mejorada la experiencia de juego con recompensas constantes
- Actualizada la documentación del sistema de puntuación

¡Gracias por jugar TUX FREEDOM!
Que la libertad del software prevalezca.

================================================================================