# StayFlow - Publicacion Web

Ultima actualizacion: 2026-05-21

## Objetivo

Subir StayFlow como sitio publico estatico para que cualquier persona pueda ver la propuesta comercial y probar una demo interactiva con datos ficticios.

## Archivos publicos recomendados

La carpeta `public/` ya contiene una copia limpia para subir al hosting.

Para publicar la web publica minima, subir el contenido de `public/`:

- `index.html`: landing comercial publica.
- `demo.html`: demo interactiva.
- `styles.css`: estilos compartidos.
- `app.js`: logica de la demo.
- `assets/`: logos, favicon y marca.

No es necesario subir la carpeta `docs/` al hosting publico. Los documentos son utiles internamente, pero no hacen falta para que la gente vea y pruebe StayFlow.

Antes de publicar en dominio real, revisar si el correo de contacto de la landing debe cambiarse por una direccion activa.

## Flujo publico

1. La persona entra en `index.html`.
2. Lee el problema, diferenciacion y planes provisionales.
3. Pulsa "Ver demo interactiva" o "Abrir demo".
4. Entra en `demo.html#presentacion`.
5. Puede cambiar perfiles, abrir demo guiada, crear tareas, revisar propiedades e incidencias.
6. Todo lo que toque queda guardado solo en su navegador mediante almacenamiento local.

## Aviso importante

La demo actual no tiene backend, login ni base de datos real.

Por eso:

- No se deben introducir datos reales de huespedes.
- No se deben introducir datos reales de propietarios.
- No se deben introducir direcciones reales.
- No se deben subir ni prometer fotos reales.
- No debe venderse todavia como software productivo listo para operar clientes reales.

## Antes de publicar

Revisar:

- `index.html` abre correctamente como pagina inicial.
- `demo.html` abre correctamente desde la landing.
- Los botones de demo vuelven a `demo.html#presentacion`.
- La demo muestra el aviso de datos ficticios.
- El logo y favicon cargan bien.
- En movil no hay textos superpuestos.

## Despues de publicar

Probar en:

- Escritorio.
- Movil.
- Navegador de incognito.

Usar el documento `08_DISCOVERY_CLIENTES.md` para recoger feedback de gestores reales.
