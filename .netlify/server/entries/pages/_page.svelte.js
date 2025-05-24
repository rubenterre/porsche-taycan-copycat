import { I as store_get, G as escape_html, J as attr, K as unsubscribe_stores, C as pop, z as push, M as ensure_array_like, N as attr_class, O as stringify } from "../../chunks/index.js";
import "clsx";
import { w as writable } from "../../chunks/index2.js";
function Footer($$payload) {
  $$payload.out += `<footer class="footer svelte-eve0ek"><div class="footer__container"><div class="footer__logo svelte-eve0ek"><a href="/" class="footer__a"><img class="footer__img svelte-eve0ek" src="porsche-logo.svg" alt="Logo de Porsche"/></a></div> <hr class="svelte-eve0ek"/> <div class="footer__credits svelte-eve0ek"><p class="footer__p svelte-eve0ek">© 2025 Porsche Ibérica, S.A.</p> <a class="footer__a--legal svelte-eve0ek" href="#" target="_blank" rel="noopener noreferrer">Aviso Legal</a> <a class="footer__a--legal svelte-eve0ek" href="#" target="_blank" rel="noopener noreferrer">Política de cookies</a> <a class="footer__a--legal svelte-eve0ek" href="#" target="_blank" rel="noopener noreferrer">Otros Países</a> <a class="footer__a--legal svelte-eve0ek" href="#" target="_blank" rel="noopener noreferrer">Open Source Software Notice</a> <a class="footer__a--legal svelte-eve0ek" href="#" target="_blank" rel="noopener noreferrer">Sistema de Denuncia de Irregularidades</a></div></div></footer>`;
}
function Header($$payload) {
  $$payload.out += `<header class="header svelte-1opga4u"><nav class="header__nav svelte-1opga4u"><div class="header__menu"><button class="header__button svelte-1opga4u"><img class="header__img--menu svelte-1opga4u" src="/icons/menu-icon.svg" alt="Icono de menu de navegación"/> <p class="header__p svelte-1opga4u">Menú</p></button></div> <div class="header__logo"><a href="/"><picture><source srcset="porsche-logo-small.webp" media="(max-width: 540px)"/> <img src="porsche-logo.svg" alt="Logo de Porsche" class="header__img--logo svelte-1opga4u"/></picture></a></div> <div class="header__user"><a href="#"><img class="header__img--user svelte-1opga4u" src="/icons/user-icon.svg" alt="Icono de perfil de usuario"/></a></div></nav></header>`;
}
const datosCompartidos = writable(null);
function Details($$payload, $$props) {
  push();
  var $$store_subs;
  const datosAlternativa = {
    aceleracion: "4,8",
    potenciaKw: "300",
    potenciaCv: "408",
    velocidad: "230"
  };
  if (store_get($$store_subs ??= {}, "$datosCompartidos", datosCompartidos)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<section class="details svelte-bzc0i5"><div class="details__container svelte-bzc0i5"><div class="details__details svelte-bzc0i5"><div class="details__card svelte-bzc0i5"><div class="details__numbers svelte-bzc0i5"><h1 class="details__h1 svelte-bzc0i5">${escape_html(store_get($$store_subs ??= {}, "$datosCompartidos", datosCompartidos).aceleracion)}</h1> <p class="details__p--units svelte-bzc0i5">S</p></div> <p class="details__p">Aceleración 0-100 km/h con Launch Control</p></div> <div class="details__card svelte-bzc0i5"><div class="details__numbers svelte-bzc0i5"><h1 class="details__h1 svelte-bzc0i5">${escape_html(store_get($$store_subs ??= {}, "$datosCompartidos", datosCompartidos).potenciaKw)}</h1> <p class="details__p--units svelte-bzc0i5">Kw</p> <p class="details__p--units svelte-bzc0i5">/</p> <h1 class="details__h1 svelte-bzc0i5">${escape_html(store_get($$store_subs ??= {}, "$datosCompartidos", datosCompartidos).potenciaCv)}</h1> <p class="details__p--units svelte-bzc0i5">CV</p></div> <p class="details__p">Potencia máxima (kW)/Potencia máxima (CV)</p></div> <div class="details__card svelte-bzc0i5"><div class="details__numbers svelte-bzc0i5"><h1 class="details__h1 svelte-bzc0i5">${escape_html(store_get($$store_subs ??= {}, "$datosCompartidos", datosCompartidos).velocidad)}</h1> <p class="details__p--units svelte-bzc0i5">km/h</p></div> <p class="details__p">Velocidad máxima</p></div> <button class="details__button svelte-bzc0i5">Todos los detalles técnicos</button></div> <div class="details__car svelte-bzc0i5"><img class="details__img svelte-bzc0i5"${attr("src", store_get($$store_subs ??= {}, "$datosCompartidos", datosCompartidos).imagenFrontal)} alt="Imaxe de frente de Porsche Taycan Berlina"/></div></div></section>`;
  } else if (datosAlternativa) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<section class="details svelte-bzc0i5"><div class="details__container svelte-bzc0i5"><div class="details__details svelte-bzc0i5"><div class="details__card svelte-bzc0i5"><div class="details__numbers svelte-bzc0i5"><h1 class="details__h1 svelte-bzc0i5">${escape_html(datosAlternativa.aceleracion)}</h1> <p class="details__p--units svelte-bzc0i5">S</p></div> <p class="details__p">Aceleración 0-100 km/h con Launch Control</p></div> <div class="details__card svelte-bzc0i5"><div class="details__numbers svelte-bzc0i5"><h1 class="details__h1 svelte-bzc0i5">${escape_html(datosAlternativa.potenciaKw)}</h1> <p class="details__p--units svelte-bzc0i5">Kw</p> <p class="details__p--units svelte-bzc0i5">/</p> <h1 class="details__h1 svelte-bzc0i5">${escape_html(datosAlternativa.potenciaCv)}</h1> <p class="details__p--units svelte-bzc0i5">CV</p></div> <p class="details__p">Potencia máxima (kW)/Potencia máxima (CV)</p></div> <div class="details__card svelte-bzc0i5"><div class="details__numbers svelte-bzc0i5"><h1 class="details__h1 svelte-bzc0i5">${escape_html(datosAlternativa.velocidad)}</h1> <p class="details__p--units svelte-bzc0i5">km/h</p></div> <p class="details__p">Velocidad máxima</p></div> <button class="details__button svelte-bzc0i5">Todos los detalles técnicos</button></div> <div class="details__car svelte-bzc0i5"><img class="details__img svelte-bzc0i5" src="/cars/front/frente-taycan-berlina.avif" alt="Imaxe de frente de Porsche Taycan Berlina"/></div></div></section>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
const data = [
  {
    id: "berlina",
    nombre: "Taycan Berlina Deportiva",
    precio: "Desde EUR 106.252,00 PVP Recomendado",
    imagenModelo: "cars/models/taycan-berlina.avif",
    imagenFrontal: "cars/front/frente-taycan-berlina.avif",
    legal: "Consumo eléctrico combinado - WLTP* (intervalo modelo): 19,4 – 16,7 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 16,6 – 14,4 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 16,6 – 13,8 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 17,6 – 14,2 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 22,8 – 18,2 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 593 – 824 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 521 – 680 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
    aceleracion: "4,8",
    potenciaKw: "300",
    potenciaCv: "408",
    velocidad: "230"
  },
  {
    id: "sport-turismo",
    nombre: "Taycan Sport Turismo",
    precio: "Desde EUR 110.000,00 PVP Recomendado",
    imagenModelo: "cars/models/taycan-sport.avif",
    imagenFrontal: "cars/front/frente-taycan-sport.avif",
    legal: "Consumo eléctrico combinado - WLTP* (intervalo modelo): 20,2 – 17,5 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 16,9 – 14,6 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 17,0 – 14,1 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 18,3 – 14,8 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 24,2 – 19,5 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 579 – 811 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 496 – 652 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
    aceleracion: "4,8",
    potenciaKw: "300",
    potenciaCv: "408",
    velocidad: "230"
  },
  {
    id: "cross-turismo",
    nombre: "Taycan Cross Turismo",
    precio: "Desde EUR 115.000,00 PVP Recomendado",
    imagenModelo: "cars/models/taycan-cross.avif",
    imagenFrontal: "cars/front/frente-taycan-cross.avif",
    legal: "Consumo eléctrico combinado - WLTP* (intervalo modelo): 21,4 – 18,7 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 18,8 – 16,7 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 18,4 – 16,1 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 19,6 – 17,1 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 25,8 – 22,5 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 611 – 696 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 532 – 614 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
    aceleracion: "4,7",
    potenciaKw: "320",
    potenciaCv: "435",
    velocidad: "220"
  }
];
function _page($$payload, $$props) {
  push();
  let modeloSeleccionado = data[0];
  const each_array = ensure_array_like(data);
  Header($$payload);
  $$payload.out += `<!----> <main class="hero svelte-1fa4cm6"><section class="hero__container"><div class="hero__background svelte-1fa4cm6"><video class="hero__video svelte-1fa4cm6" muted autoplay loop><source src="videos/video_fondo.mp4" type="video/mp4"/></video> <img class="hero__logo svelte-1fa4cm6" src="taycan_logo.svg" alt="Logo de Porsche Taycan"/> <div class="hero__car svelte-1fa4cm6"><img class="hero__img--car svelte-1fa4cm6"${attr("src", modeloSeleccionado.imagenModelo)}${attr("alt", modeloSeleccionado.nombre)}/></div> <div class="hero__selector svelte-1fa4cm6"><div class="hero__buttons svelte-1fa4cm6"><!--[-->`;
  for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
    let modelo = each_array[idx];
    $$payload.out += `<button${attr_class(`hero__button ${stringify(modeloSeleccionado.id === modelo.id ? "active" : "")}`, "svelte-1fa4cm6")}>${escape_html(modelo.nombre.replace("Taycan ", ""))}</button>`;
  }
  $$payload.out += `<!--]--></div> <div class="hero__details svelte-1fa4cm6"><div class="hero__features svelte-1fa4cm6"><h2 class="hero__h2 svelte-1fa4cm6">${escape_html(modeloSeleccionado.nombre)}</h2> <div class="hero__pill svelte-1fa4cm6"><p class="svelte-1fa4cm6">Eléctrico</p></div> <div class="hero__price"><p class="hero__p--price svelte-1fa4cm6">${escape_html(modeloSeleccionado.precio)}</p></div></div> <div class="hero__config svelte-1fa4cm6"><button class="hero__button--cta svelte-1fa4cm6">Cambiar modelo</button> <button class="hero__button--config svelte-1fa4cm6">Configurar</button> <button class="hero__button--config svelte-1fa4cm6">Compra vehículos nuevos y de ocasión</button></div> <div class="hero__legal svelte-1fa4cm6"><p class="hero__p svelte-1fa4cm6">${escape_html(modeloSeleccionado.legal)}</p> <p class="hero__p svelte-1fa4cm6">1 P.V.P. recomendado para península y Baleares. Incluye transporte, I.V.A. e
								impuesto de matriculación (IEDMT) calculado al tipo estatal aplicable según las
								emisiones de CO2 del vehículo. El IEDMT puede variar en función de la Comunidad
								Autónoma donde se ubique su domicilio. Los precios aquí reflejados pueden sufrir
								modificaciones, y por tanto no son vinculantes.</p></div></div> `;
  Details($$payload);
  $$payload.out += `<!----></div></div></section></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
