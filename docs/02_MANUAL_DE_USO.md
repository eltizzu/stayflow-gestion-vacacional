# StayFlow - Manual De Uso

Ultima actualizacion: 2026-05-14

## Regla de mantenimiento

Este manual debe actualizarse cada vez que se anada, cambie o elimine una pantalla, boton, estado, perfil, flujo o accion importante.

## Que es StayFlow

StayFlow es una herramienta para coordinar la operativa diaria de viviendas turisticas: entradas, salidas, limpiezas, responsables, tareas e incidencias.

## Perfiles previstos

La demo actual incluye un selector de perfil en la parte superior. Al cambiarlo, StayFlow adapta el titulo, el foco de la pantalla, la navegacion lateral y algunos filtros para que la presentacion sea mas clara.

### Coordinador

Puede ver todo el panel, revisar el estado de todas las viviendas, asignar tareas, cambiar estados, crear incidencias y desbloquear problemas.

### Responsable de limpieza

Puede ver sus tareas del dia, iniciar una limpieza, marcarla como completada o avisar si hay un problema.

### Responsable de recepcion

Debe ver entradas, solicitudes especiales, estado de la vivienda y tareas de check-in.

### Responsable de mantenimiento

Debe ver incidencias asignadas, detalles del problema y marcar avances o resolucion.

### Administrador

Perfil futuro. Podria gestionar usuarios, permisos, propiedades, integraciones y configuracion general.

### Propietario

Perfil simulado de demo. Ve una experiencia limitada centrada en el estado de las viviendas y el resumen general, sin acceso a tareas internas, configuracion ni incidencias completas.

## Estados de vivienda

- Libre: vivienda sin ocupacion ni bloqueo operativo inmediato.
- Ocupada: hay huesped dentro.
- Por Entrar: hay una entrada proxima y la vivienda requiere preparacion o verificacion.
- Por Salir: hay una salida pendiente o reciente.
- En Limpieza: el equipo esta limpiando o preparando la vivienda.
- Lista: vivienda revisada y preparada para el proximo huesped.
- Incidencia: hay un problema que puede afectar la operativa o la experiencia del huesped.

## Pantallas y secciones

StayFlow funciona por vistas. La barra lateral permite cambiar de modulo y ver solo la seccion elegida.

Vistas actuales:

- Hoy.
- Agenda.
- Propiedades.
- Tareas.
- Equipo.
- Movil.
- Incidencias.
- Configuracion.

### Panel de hoy

Muestra el resumen rapido del dia:

- Entradas.
- Salidas.
- Limpiezas.
- Riesgos.

Sirve para que el coordinador sepa donde mirar primero.

En la vista Hoy tambien se muestran los filtros globales, lo importante del dia y una vista movil de ejemplo.

### Lo importante de hoy

Lista de eventos prioritarios. Ejemplos:

- Salida con limpieza urgente.
- Recepcion con solicitud especial.
- Incidencia tecnica.
- Limpieza completada.

### Filtros globales

Permiten enfocar la operativa sin cambiar de pantalla.

Filtros actuales:

- Estado: muestra viviendas y tareas relacionadas con un estado concreto.
- Responsable: muestra viviendas y tareas relacionadas con una persona.
- Zona: muestra viviendas y tareas de una zona concreta.

Tambien muestra cuantas viviendas quedan visibles con los filtros aplicados.

Boton actual:

- Limpiar: vuelve a mostrar toda la operativa.

### Mensajes de confirmacion

StayFlow muestra avisos breves cuando una accion importante se completa.

Ejemplos:

- Tarea iniciada.
- Tarea completada.
- Vivienda lista.
- Incidencia creada.
- Riesgo marcado.
- Filtros limpiados.

Estos mensajes ayudan a confirmar que la accion se aplico correctamente sin obligar al usuario a buscar el cambio manualmente.

### Selector de idioma

El boton ES indica que la demo esta actualmente en espanol.

Por ahora muestra un aviso informando que la traduccion ES/EN esta prevista para una siguiente version.

### Persistencia de demo

La demo guarda cambios en el navegador.

Se conservan al recargar:

- Estados de viviendas.
- Tareas.
- Checklists.
- Evidencias.
- Incidencias.

Boton actual:

- Restaurar demo: devuelve los datos al estado inicial para volver a presentar o probar desde cero.

### Demo guiada

El boton Demo guiada abre un recorrido interactivo de 6 pasos. Durante el recorrido, StayFlow cambia tambien el perfil activo para mostrar el producto como lo usaria cada rol.

Pasos actuales:

1. Controlar el dia.
2. Ordenar entradas y salidas.
3. Ejecutar desde el movil.
4. Cerrar limpieza con control.
5. Resolver riesgos.
6. Informar al propietario.

Cada paso cambia automaticamente a la vista correspondiente y muestra una explicacion breve para presentar el producto.

### Selector de perfil

El selector Perfil permite preparar la demo para una persona concreta:

- Coordinador: muestra todas las secciones.
- Limpieza: muestra una experiencia centrada en Maria y sus tareas.
- Recepcion: muestra una experiencia centrada en agenda, entradas y tareas de Lucia.
- Mantenimiento: muestra una experiencia centrada en incidencias y tareas de Rafa.
- Propietario: muestra solo resumen y propiedades, ocultando la operativa interna.

Acciones rapidas del perfil:

- Agenda.
- Tareas.
- Incidencias.
- Mis tareas.
- Propiedades.
- Resumen.

Estas acciones cambian directamente a la vista mas importante para el perfil elegido.

### Configuracion

La vista Configuracion permite ajustar datos base de la demo.

Secciones actuales:

- Empresa: nombre comercial, ciudad base y email operativo.
- Zonas: areas de trabajo.
- Equipo: responsables.
- Checklist: puntos base de limpieza.

Acciones actuales:

- Guardar configuracion.
- Anadir zona.
- Anadir responsable.
- Anadir punto de checklist.
- Quitar responsable si no tiene tareas asignadas.
- Quitar punto de checklist base.

Las zonas con viviendas asociadas estan protegidas en esta demo para no romper datos existentes.

### Agenda del dia

Ordena el dia por horas.

Cada evento puede mostrar:

- Hora.
- Tipo de evento.
- Vivienda.
- Descripcion.
- Acciones rapidas.

Acciones actuales:

- Abrir: selecciona la vivienda relacionada.
- Iniciar limpieza: pasa la vivienda a En Limpieza.
- Marcar riesgo: pasa la vivienda a Incidencia y crea una incidencia.

### Propiedades

Muestra las viviendas en tarjetas visuales.

Cada tarjeta muestra:

- Nombre.
- Zona.
- Estado.
- Proxima accion.
- Responsable o nota corta.

Acciones actuales:

- Abrir: muestra el detalle de esa vivienda.
- Lista: marca rapidamente la vivienda como lista.

En perfil Propietario, la vista Propiedades cambia de enfoque:

- Muestra un reporte por propietario.
- Permite seleccionar el propietario.
- Muestra numero de viviendas, listas, ocupadas y avisos.
- Muestra proximos movimientos.
- Muestra avisos operativos visibles.
- Oculta acciones internas como marcar lista, iniciar limpieza o abrir incidencia.

Botones actuales en reporte:

- Copiar resumen: simula preparar un texto breve para compartir.
- Preparar PDF: indica que la exportacion real queda para una version con backend.

### Detalle de vivienda

Permite revisar o modificar datos operativos:

- Estado.
- Zona.
- Direccion.
- Capacidad.
- Codigo de llave.
- Propietario.
- Responsable habitual.
- Check-out.
- Check-in.
- Responsable.
- Nota.

Botones actuales:

- En limpieza: cambia la vivienda a En Limpieza.
- Marcar lista: cambia la vivienda a Lista.
- Abrir incidencia: cambia la vivienda a Incidencia y crea una incidencia.
- Guardar cambios: guarda los campos editados.

La informacion de direccion, llave, propietario y responsable habitual sirve como referencia operativa para coordinacion y equipo en campo.

En perfil Propietario, el detalle de vivienda es de solo lectura y muestra:

- Estado.
- Proxima entrada.
- Proxima salida.
- Capacidad.
- Zona.
- Estado operativo visible.
- Avisos abiertos visibles para propietario.

### Tareas

El tablero tiene cuatro columnas:

- Pendiente.
- En curso.
- Bloqueado.
- Completado.

Acciones actuales:

- Iniciar: mueve una tarea pendiente a En curso.
- Completar: mueve una tarea en curso a Completado.
- Bloquear: mueve una tarea a Bloqueado y crea una incidencia si corresponde.
- Reactivar: mueve una tarea bloqueada a En curso.
- Reabrir: mueve una tarea completada a Pendiente.

Si una tarea de tipo Limpieza se inicia, la vivienda pasa a En Limpieza.

Si una tarea de tipo Limpieza se completa, la vivienda pasa a Lista.

### Checklist de limpieza

Las tareas de limpieza pueden tener checklist.

Cada checklist muestra:

- Puntos pendientes.
- Puntos completados.
- Barra de progreso.

Ejemplos:

- Baño revisado.
- Cocina lista.
- Ropa de cama cambiada.
- Amenities repuestos.
- Fotos finales recibidas.

Una limpieza no deberia completarse si el checklist esta incompleto. En ese caso, StayFlow muestra un aviso de checklist pendiente.

### Evidencias y fotos simuladas

Las tareas de limpieza y las incidencias pueden mostrar evidencias.

En la demo actual, las evidencias son simuladas. Sirven para representar fotos o comprobantes sin subir archivos reales todavia.

Cada bloque de evidencias muestra:

- Numero de fotos/evidencias.
- Miniaturas simuladas.
- Boton Anadir foto.

En limpiezas, anadir una foto puede marcar automaticamente el punto de checklist relacionado con fotos finales.

En incidencias, las evidencias ayudan a dejar constancia del problema o de la resolucion.

### Incidencias

Muestra problemas o riesgos que requieren seguimiento.

Cada incidencia muestra:

- Titulo.
- Vivienda.
- Detalle.
- Estado.
- Prioridad.
- Responsable.
- Accion sugerida.

Estados actuales:

- Abierta: todavia necesita revision.
- En curso: alguien ya la esta gestionando.
- Resuelta: dejo de ser un riesgo activo.

Acciones actuales:

- Abrir: selecciona la incidencia.
- Tomar: asigna la incidencia al responsable activo y la pasa a En curso.
- En curso: marca que ya se esta gestionando.
- Resolver: marca la incidencia como Resuelta y, si la vivienda estaba en Incidencia, la pasa a Lista.
- Reabrir: vuelve a marcar la vivienda como Incidencia.
- Guardar: guarda estado y responsable.

### Equipo

Muestra los responsables del dia.

Cada responsable puede mostrar:

- Nombre.
- Rol.
- Zona principal.
- Foco operativo del dia.
- Cantidad de tareas pendientes, en curso y bloqueadas.
- Tareas abiertas asignadas.

Acciones actuales:

- Elegir responsable desde las pestanas superiores.
- Elegir responsable desde su tarjeta.
- Ver sus tareas abiertas.
- Iniciar, completar, bloquear, reactivar o reabrir tareas desde el panel del responsable.

### Vista movil operativa

La vista movil muestra como puede trabajar una persona del equipo desde el telefono.

Permite:

- Elegir responsable.
- Ver tareas abiertas.
- Ver resumen de pendientes, en curso y bloqueadas.
- Marcar checklist.
- Anadir evidencias.
- Iniciar, completar, bloquear, reactivar o reabrir tareas.

## Como crear una tarea

1. Pulsar Nueva tarea.
2. Elegir el tipo: Tarea, Incidencia, Limpieza o Recepcion.
3. Escribir el titulo.
4. Elegir la vivienda.
5. Elegir responsable.
6. Elegir prioridad.
7. Escribir una nota.
8. Pulsar Guardar.

Si se crea como Incidencia, la vivienda pasa a estado Incidencia.

## Como usar filtros

1. Ir a la barra Filtros.
2. Elegir Estado, Responsable o Zona.
3. Revisar el contador de viviendas visibles.
4. Ver propiedades y tareas filtradas.
5. Pulsar Limpiar para volver a la vista completa.

## Como gestionar una limpieza

1. Ir a Tareas o Agenda del dia.
2. Buscar la tarea de limpieza.
3. Pulsar Iniciar.
4. La vivienda pasa a En Limpieza.
5. Marcar los puntos del checklist.
6. Anadir fotos finales si corresponde.
7. Cuando termine, pulsar Completar.
8. Si el checklist esta completo, la vivienda pasa a Lista.

Tambien puede hacerse desde Equipo:

1. Ir a Equipo.
2. Elegir el responsable.
3. Buscar la tarea asignada.
4. Pulsar Iniciar o Completar.
5. StayFlow actualiza el tablero y el estado de la vivienda.

## Como marcar una incidencia

Opcion desde vivienda:

1. Abrir una propiedad.
2. Pulsar Abrir incidencia.
3. La vivienda pasa a Incidencia.
4. Se agrega un registro en Incidencias.

Opcion desde agenda:

1. Ir a Agenda del dia.
2. Pulsar Marcar riesgo en el evento correspondiente.
3. La vivienda pasa a Incidencia.
4. Se crea una incidencia.

## Como resolver una incidencia

1. Ir a Incidencias.
2. Abrir la incidencia.
3. Revisar estado, responsable y detalle.
4. Pulsar En curso si alguien ya la esta gestionando.
5. Anadir evidencia si hace falta.
6. Pulsar Resolver cuando el problema este cerrado.
7. Si la vivienda estaba en Incidencia, StayFlow la marca como Lista.

## Pendientes del manual

- Documentar permisos cuando existan usuarios reales.
- Documentar integraciones cuando se anadan.
- Documentar persistencia de datos cuando exista base de datos.
