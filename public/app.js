const STORAGE_KEY = "stayflow-demo-state-v2";

const initialState = {
  selectedPropertyId: 1,
  selectedMember: "Maria",
  selectedIssueId: 1,
  selectedOwnerName: "Costa Homes",
  activeProfile: "coordinador",
  filters: {
    status: "Todas",
    owner: "Todos",
    zone: "Todas",
  },
  company: {
    name: "CostaSur Gestión Vacacional",
    city: "Málaga",
    email: "operaciones@costasur.demo",
  },
  baseChecklist: ["Baño revisado", "Cocina lista", "Ropa de cama cambiada", "Fotos finales recibidas"],
  team: [
    {
      name: "Maria",
      role: "Limpieza",
      zone: "Soho y Pedregalejo",
      focus: "Cerrar limpiezas antes de las entradas tempranas.",
      color: ["#dff5eb", "#167c5b"],
    },
    {
      name: "Lucía",
      role: "Recepción",
      zone: "Centro",
      focus: "Preparar cuna y coordinar check-ins.",
      color: ["#e3f0fb", "#2f6f9f"],
    },
    {
      name: "Nora",
      role: "Limpieza",
      zone: "Teatinos",
      focus: "Terminar limpieza y reportar termo.",
      color: ["#fff0d9", "#a96513"],
    },
    {
      name: "Rafa",
      role: "Mantenimiento",
      zone: "Malagueta",
      focus: "Confirmar técnico de aire acondicionado.",
      color: ["#ffe3df", "#b3261e"],
    },
  ],
  properties: [
    {
      id: 1,
      name: "Soho Loft 2B",
      zone: "Soho",
      status: "Por Entrar",
      next: "Entrada hoy 15:30",
      owner: "Maria limpia - Lucia recibe",
      guest: "Ana Ribeiro",
      address: "Calle Casas de Campos 18, 2B",
      capacity: 2,
      ownerName: "Inversora Soho SL",
      keyCode: "LOCK-2048",
      defaultResponsible: "Maria",
      checkout: "Hoy 11:00",
      checkin: "Hoy 15:30",
      note: "Limpieza urgente y reposición de amenities antes de la llegada.",
      visual: "linear-gradient(135deg, #dff5eb, #8ecbb5)",
    },
    {
      id: 2,
      name: "Centro Histórico A1",
      zone: "Centro",
      status: "Ocupada",
      next: "Salida mañana 10:00",
      owner: "Lucía responsable",
      guest: "Mark Jensen",
      address: "Calle Granada 41, A1",
      capacity: 4,
      ownerName: "Familia Rivas",
      keyCode: "KEYBOX-17",
      defaultResponsible: "Lucía",
      checkout: "Mañana 10:00",
      checkin: "Viernes 17:00",
      note: "Huésped solicita cuna. Revisar disponibilidad antes de recepción.",
      visual: "linear-gradient(135deg, #e3f0fb, #93bfe4)",
    },
    {
      id: 3,
      name: "Malagueta Sea View",
      zone: "Malagueta",
      status: "Incidencia",
      next: "Técnico pendiente",
      owner: "Rafa mantenimiento",
      guest: "Laura Martín",
      address: "Paseo Marítimo Pablo Ruiz Picasso 7",
      capacity: 3,
      ownerName: "Costa Homes",
      keyCode: "PORTAL-8821",
      defaultResponsible: "Rafa",
      checkout: "Hoy 12:00",
      checkin: "Mañana 16:00",
      note: "Aire acondicionado reportado. Falta confirmar visita técnica.",
      visual: "linear-gradient(135deg, #ffe3df, #f6a39c)",
    },
    {
      id: 4,
      name: "Pedregalejo Casa",
      zone: "Pedregalejo",
      status: "Lista",
      next: "Entrada mañana 18:00",
      owner: "Fotos verificadas",
      guest: "Sophie Durand",
      address: "Calle Bolivia 92",
      capacity: 6,
      ownerName: "Casa Pedregalejo CB",
      keyCode: "LLAVE-FISICA",
      defaultResponsible: "Maria",
      checkout: "Ayer 10:30",
      checkin: "Mañana 18:00",
      note: "Vivienda revisada. Fotos y checklist completos.",
      visual: "linear-gradient(135deg, #dff5eb, #65bc93)",
    },
    {
      id: 5,
      name: "Teatinos Studio",
      zone: "Teatinos",
      status: "En Limpieza",
      next: "Revisar termo",
      owner: "Nora limpia",
      guest: "Pablo Navas",
      address: "Avenida Plutarco 12",
      capacity: 2,
      ownerName: "Teatinos Rent",
      keyCode: "SMART-5532",
      defaultResponsible: "Nora",
      checkout: "Hoy 10:00",
      checkin: "Hoy 19:00",
      note: "Nora está limpiando. Pidió revisar foto del termo.",
      visual: "linear-gradient(135deg, #fff0d9, #ecc27f)",
    },
    {
      id: 6,
      name: "Huelin Playa 3C",
      zone: "Huelin",
      status: "Por Salir",
      next: "Salida hoy 12:00",
      owner: "Asignación pendiente",
      guest: "Marta López",
      address: "Calle Pacífico 28, 3C",
      capacity: 5,
      ownerName: "Costa Homes",
      keyCode: "PENDIENTE",
      defaultResponsible: "Maria",
      checkout: "Hoy 12:00",
      checkin: "Sábado 16:00",
      note: "Falta confirmar llave con propietario antes de asignar limpieza.",
      visual: "linear-gradient(135deg, #e7e8ff, #aaaeea)",
    },
  ],
  tasks: [
    {
      id: 1,
      title: "Asignar limpieza",
      property: "Soho Loft 2B",
      detail: "Entrada 15:30",
      owner: "Maria",
      status: "Pendiente",
      type: "Limpieza",
      checklist: [
        { id: "soho-bano", label: "Baño revisado", done: false },
        { id: "soho-cocina", label: "Cocina lista", done: false },
        { id: "soho-ropa", label: "Ropa de cama cambiada", done: false },
        { id: "soho-fotos", label: "Fotos finales recibidas", done: false },
      ],
      evidence: [],
    },
    {
      id: 2,
      title: "Confirmar técnico",
      property: "Malagueta Sea View",
      detail: "Aire acondicionado",
      owner: "Rafa",
      status: "Pendiente",
      type: "Incidencia",
    },
    {
      id: 3,
      title: "Limpieza completa",
      property: "Teatinos Studio",
      detail: "Nora - 45 min restantes",
      owner: "Nora",
      status: "En curso",
      type: "Limpieza",
      checklist: [
        { id: "teatinos-bano", label: "Baño revisado", done: true },
        { id: "teatinos-cocina", label: "Cocina lista", done: true },
        { id: "teatinos-foto", label: "Foto del termo enviada", done: false },
        { id: "teatinos-suelo", label: "Suelo y terraza revisados", done: false },
      ],
      evidence: [{ id: "ev-termo", label: "Termo", tone: "warning" }],
    },
    {
      id: 4,
      title: "Preparar cuna",
      property: "Centro Histórico A1",
      detail: "Antes de las 16:00",
      owner: "Lucía",
      status: "En curso",
      type: "Recepción",
    },
    {
      id: 5,
      title: "Falta llave",
      property: "Huelin Playa 3C",
      detail: "Esperando a propietario",
      owner: "Sin asignar",
      status: "Bloqueado",
      type: "Tarea",
    },
    {
      id: 6,
      title: "Fotos recibidas",
      property: "Pedregalejo Casa",
      detail: "Lista para entrada",
      owner: "Maria",
      status: "Completado",
      type: "Limpieza",
      checklist: [
        { id: "pedregalejo-bano", label: "Baño revisado", done: true },
        { id: "pedregalejo-cocina", label: "Cocina lista", done: true },
        { id: "pedregalejo-fotos", label: "Fotos recibidas", done: true },
        { id: "pedregalejo-amenities", label: "Amenities repuestos", done: true },
      ],
      evidence: [
        { id: "ev-salon", label: "Salón", tone: "success" },
        { id: "ev-bano", label: "Baño", tone: "success" },
      ],
    },
    {
      id: 7,
      title: "Check-out revisado",
      property: "Centro Histórico A1",
      detail: "Sin daños",
      owner: "Lucía",
      status: "Completado",
      type: "Tarea",
    },
  ],
  issues: [
    {
      id: 1,
      title: "Aire acondicionado sin confirmar",
      property: "Malagueta Sea View",
      detail: "Entrada mañana 16:00",
      priority: "high",
      status: "Abierta",
      owner: "Rafa",
      action: "Asignar técnico",
      evidence: [{ id: "issue-ac", label: "A/C", tone: "issue" }],
    },
    {
      id: 2,
      title: "Falta reposición de amenities",
      property: "Soho Loft 2B",
      detail: "Limpieza pendiente",
      priority: "medium",
      status: "Abierta",
      owner: "Maria",
      action: "Marcar comprado",
      evidence: [],
    },
    {
      id: 3,
      title: "Revisar foto del termo",
      property: "Teatinos Studio",
      detail: "Nora enviada hace 8 min",
      priority: "low",
      status: "En curso",
      owner: "Nora",
      action: "Ver detalle",
      evidence: [{ id: "issue-termo", label: "Termo", tone: "warning" }],
    },
  ],
};

let state = loadSavedState();

const statusStyles = {
  Libre: ["#e3f0fb", "#2f6f9f"],
  Ocupada: ["#eef4f1", "#43514c"],
  "Por Entrar": ["#fff0d9", "#a96513"],
  "Por Salir": ["#e7e8ff", "#4f55a6"],
  "En Limpieza": ["#e3f0fb", "#2f6f9f"],
  Lista: ["#dff5eb", "#167c5b"],
  Incidencia: ["#ffe3df", "#b3261e"],
};

const statuses = Object.keys(statusStyles);
const taskColumns = ["Pendiente", "En curso", "Bloqueado", "Completado"];
const demoProfiles = {
  coordinador: {
    label: "Coordinador",
    member: "Maria",
    title: "Coordinación operativa",
    subcopy: "Entradas, salidas, limpiezas e incidencias en una sola vista.",
    copy: "Vista completa para revisar el día, asignar responsables y cerrar riesgos.",
    allowedViews: ["dashboard", "presentacion", "agenda", "propiedades", "tareas", "equipo", "movil", "incidencias", "configuracion"],
    defaultView: "dashboard",
    actions: [
      ["Presentación", "presentacion"],
      ["Agenda", "agenda"],
      ["Tareas", "tareas"],
      ["Incidencias", "incidencias"],
    ],
  },
  limpieza: {
    label: "Limpieza",
    member: "Maria",
    title: "Trabajo en campo",
    subcopy: "Checklist, fotos y tareas abiertas para el equipo de limpieza.",
    copy: "Maria ve lo que tiene que ejecutar hoy, marca checklist y envía evidencias antes de cerrar una vivienda.",
    allowedViews: ["dashboard", "movil", "tareas", "equipo", "propiedades"],
    defaultView: "movil",
    filters: { owner: "Maria" },
    actions: [
      ["Mis tareas", "movil"],
      ["Tablero", "tareas"],
      ["Viviendas", "propiedades"],
    ],
  },
  recepcion: {
    label: "Recepción",
    member: "Lucía",
    title: "Entradas y huéspedes",
    subcopy: "Agenda de check-ins, notas importantes y viviendas listas para recibir.",
    copy: "Recepción se enfoca en entradas, solicitudes especiales, llaves y estado previo al check-in.",
    allowedViews: ["dashboard", "agenda", "propiedades", "tareas", "movil"],
    defaultView: "agenda",
    filters: { owner: "Lucía" },
    actions: [
      ["Agenda", "agenda"],
      ["Mis tareas", "movil"],
      ["Propiedades", "propiedades"],
    ],
  },
  mantenimiento: {
    label: "Mantenimiento",
    member: "Rafa",
    title: "Incidencias y bloqueos",
    subcopy: "Problemas asignados, prioridad y seguimiento hasta resolver.",
    copy: "Mantenimiento entra directo a incidencias, ve evidencias y actualiza el estado del problema.",
    allowedViews: ["dashboard", "incidencias", "tareas", "movil", "propiedades"],
    defaultView: "incidencias",
    filters: { owner: "Rafa" },
    actions: [
      ["Incidencias", "incidencias"],
      ["Mis tareas", "movil"],
      ["Viviendas", "propiedades"],
    ],
  },
  propietario: {
    label: "Propietario",
    member: "Maria",
    title: "Vista limitada para propietario",
    subcopy: "Estado de viviendas, preparación y riesgos sin exponer la operativa interna.",
    copy: "Sirve para mostrar el potencial futuro de reportes: estado, próxima entrada y avisos relevantes.",
    allowedViews: ["dashboard", "propiedades"],
    defaultView: "propiedades",
    actions: [
      ["Ver propiedades", "propiedades"],
      ["Resumen", "dashboard"],
    ],
  },
};
const guidedSteps = [
  {
    view: "dashboard",
    profile: "coordinador",
    title: "1. Controlar el día",
    text: "Empieza en Hoy: entradas, salidas, limpiezas y riesgos. Esta es la vista que usa coordinación para saber dónde mirar primero.",
  },
  {
    view: "agenda",
    profile: "recepcion",
    title: "2. Ordenar entradas y salidas",
    text: "Agenda muestra el día por horas. Aquí se detectan limpiezas urgentes, check-ins próximos y riesgos antes de que llegue el huésped.",
  },
  {
    view: "movil",
    profile: "limpieza",
    title: "3. Ejecutar desde el móvil",
    text: "El equipo ve solo sus tareas. Puede iniciar trabajos, marcar checklist y añadir evidencias sin entrar al panel completo.",
  },
  {
    view: "tareas",
    profile: "coordinador",
    title: "4. Cerrar limpieza con control",
    text: "El tablero permite iniciar, bloquear o completar tareas. Las limpiezas no se cierran si falta checklist o evidencia final.",
  },
  {
    view: "incidencias",
    profile: "mantenimiento",
    title: "5. Resolver riesgos",
    text: "Incidencias centraliza problemas con prioridad, responsable, evidencias y estado: abierta, en curso o resuelta.",
  },
  {
    view: "propiedades",
    profile: "propietario",
    title: "6. Informar al propietario",
    text: "La vista de propietario muestra estado, proximos movimientos y avisos sin exponer la operativa interna del equipo.",
  },
];
let guidedStepIndex = 0;
const propertyGrid = document.querySelector("#propertyGrid");
const propertyDetail = document.querySelector("#propertyDetail");
const ownerReport = document.querySelector("#ownerReport");
const taskBoard = document.querySelector("#taskBoard");
const issueList = document.querySelector("#issueList");
const issueDetail = document.querySelector("#issueDetail");
const agendaList = document.querySelector("#agendaList");
const agendaSummary = document.querySelector("#agendaSummary");
const teamTabs = document.querySelector("#teamTabs");
const teamGrid = document.querySelector("#teamGrid");
const memberPanel = document.querySelector("#memberPanel");
const mobileWorkerTabs = document.querySelector("#mobileWorkerTabs");
const mobileWorkerName = document.querySelector("#mobileWorkerName");
const mobileWorkSummary = document.querySelector("#mobileWorkSummary");
const mobileWorkList = document.querySelector("#mobileWorkList");
const globalStatusFilter = document.querySelector("#globalStatusFilter");
const globalOwnerFilter = document.querySelector("#globalOwnerFilter");
const globalZoneFilter = document.querySelector("#globalZoneFilter");
const filterResultCount = document.querySelector("#filterResultCount");
const clearFiltersButton = document.querySelector("#clearFilters");
const toastRegion = document.querySelector("#toastRegion");
const mobileStartTaskButton = document.querySelector("#mobileStartTask");
const languageButton = document.querySelector("#languageButton");
const filters = document.querySelectorAll(".filter");
const propertyFilterBar = document.querySelector(".property-section .filters");
const viewSections = document.querySelectorAll(".view-section");
const navItems = document.querySelectorAll(".nav-item");
const viewLinks = document.querySelectorAll(".link-button[href^='#']");
const guidedDemo = document.querySelector("#guidedDemo");
const guidedTitle = document.querySelector("#guidedTitle");
const guidedText = document.querySelector("#guidedText");
const guidedProgressBar = document.querySelector("#guidedProgressBar");
const guidedStepCount = document.querySelector("#guidedStepCount");
const startGuidedDemoButton = document.querySelector("#startGuidedDemo");
const closeGuidedDemoButton = document.querySelector("#closeGuidedDemo");
const prevGuidedStepButton = document.querySelector("#prevGuidedStep");
const nextGuidedStepButton = document.querySelector("#nextGuidedStep");
const pageTitle = document.querySelector("#pageTitle");
const pageSubcopy = document.querySelector("#pageSubcopy");
const activeProfileSelect = document.querySelector("#activeProfileSelect");
const profileModeLabel = document.querySelector("#profileModeLabel");
const profileModeTitle = document.querySelector("#profileModeTitle");
const profileModeCopy = document.querySelector("#profileModeCopy");
const profileQuickActions = document.querySelector("#profileQuickActions");
const companyNameInput = document.querySelector("#companyName");
const companyCityInput = document.querySelector("#companyCity");
const companyEmailInput = document.querySelector("#companyEmail");
const zoneSettings = document.querySelector("#zoneSettings");
const teamSettings = document.querySelector("#teamSettings");
const baseChecklistSettings = document.querySelector("#baseChecklistSettings");
const newZoneInput = document.querySelector("#newZoneInput");
const newMemberInput = document.querySelector("#newMemberInput");
const newChecklistInput = document.querySelector("#newChecklistInput");
const taskModal = document.querySelector("#taskModal");
const taskForm = document.querySelector("#taskForm");
const taskPropertySelect = document.querySelector("#taskPropertySelect");
const openTaskModalButton = document.querySelector("#openTaskModal");

function getSelectedProperty() {
  return state.properties.find((property) => property.id === state.selectedPropertyId) || state.properties[0];
}

function getActiveProfile() {
  return demoProfiles[state.activeProfile] || demoProfiles.coordinador;
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getProfileMemberName(profile = getActiveProfile()) {
  if (!profile.member) return state.selectedMember;
  const profileMember = normalizeText(profile.member);
  return state.team.find((member) => normalizeText(member.name).includes(profileMember))?.name || profile.member;
}

function getOwnerNames() {
  return [...new Set(state.properties.map((property) => property.ownerName).filter(Boolean))].sort();
}

function getSelectedOwnerName() {
  const owners = getOwnerNames();
  if (!owners.length) return "";
  if (!owners.includes(state.selectedOwnerName)) {
    state.selectedOwnerName = owners[0];
  }
  return state.selectedOwnerName;
}

function getOwnerProperties() {
  const ownerName = getSelectedOwnerName();
  return state.properties.filter((property) => property.ownerName === ownerName);
}

function getOwnerIssues(ownerProperties = getOwnerProperties()) {
  const propertyNames = ownerProperties.map((property) => property.name);
  return state.issues.filter((issue) => propertyNames.includes(issue.property) && issue.status !== "Resuelta");
}

function getStatusStyle(status) {
  return statusStyles[status] || statusStyles.Libre;
}

function showToast(title, message, tone = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${tone}`;
  const heading = document.createElement("strong");
  const body = document.createElement("span");
  heading.textContent = title;
  body.textContent = message;
  toast.append(heading, body);
  toastRegion.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3400);
}

function cloneState(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadSavedState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? migrateState(JSON.parse(saved)) : cloneState(initialState);
  } catch (error) {
    return cloneState(initialState);
  }
}

function migrateState(savedState) {
  const base = cloneState(initialState);
  return {
    ...base,
    ...savedState,
    activeProfile: ["coordinador", "limpieza", "recepcion", "mantenimiento", "propietario"].includes(savedState.activeProfile)
      ? savedState.activeProfile
      : base.activeProfile,
    filters: { ...base.filters, ...(savedState.filters || {}) },
    selectedOwnerName: savedState.selectedOwnerName || base.selectedOwnerName,
    company: { ...base.company, ...(savedState.company || {}) },
    baseChecklist: savedState.baseChecklist?.length ? savedState.baseChecklist : base.baseChecklist,
    team: savedState.team?.length ? savedState.team : base.team,
    properties: savedState.properties?.length ? savedState.properties : base.properties,
    tasks: savedState.tasks?.length ? savedState.tasks : base.tasks,
    issues: savedState.issues?.length ? savedState.issues : base.issues,
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetDemoState() {
  state = cloneState(initialState);
  localStorage.removeItem(STORAGE_KEY);
  renderAll();
  showView("dashboard");
  showToast("Demo restaurada", "Los datos volvieron al estado inicial.");
}

function normalizeView(view) {
  const cleanView = (view || "dashboard").replace("#", "");
  if (cleanView === "hoy") return "dashboard";
  return cleanView || "dashboard";
}

function showView(view, updateHash = true) {
  const nextView = normalizeView(view);
  const exists = [...viewSections].some((section) => section.dataset.view === nextView);
  const profile = getActiveProfile();
  const requestedView = exists ? nextView : profile.defaultView;
  const activeView = profile.allowedViews.includes(requestedView) ? requestedView : profile.defaultView;

  viewSections.forEach((section) => {
    section.hidden = section.dataset.view !== activeView;
  });

  navItems.forEach((item) => {
    const itemView = normalizeView(item.getAttribute("href"));
    item.hidden = !profile.allowedViews.includes(itemView);
    item.classList.toggle("active", itemView === activeView);
  });

  if (updateHash) {
    const nextHash = activeView === "dashboard" ? "#dashboard" : `#${activeView}`;
    if (window.location.hash !== nextHash) {
      history.pushState(null, "", nextHash);
    }
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderGuidedStep() {
  const step = guidedSteps[guidedStepIndex];
  if (step.profile && state.activeProfile !== step.profile) {
    state.activeProfile = step.profile;
    const profile = getActiveProfile();
    const memberName = getProfileMemberName(profile);
    state.selectedMember = memberName;
    state.filters = { status: "Todas", owner: profile.filters?.owner ? memberName : "Todos", zone: "Todas" };
    renderAll();
  }
  guidedTitle.textContent = step.title;
  guidedText.textContent = step.text;
  guidedStepCount.textContent = `${guidedStepIndex + 1}/${guidedSteps.length}`;
  guidedProgressBar.style.width = `${((guidedStepIndex + 1) / guidedSteps.length) * 100}%`;
  prevGuidedStepButton.disabled = guidedStepIndex === 0;
  nextGuidedStepButton.textContent = guidedStepIndex === guidedSteps.length - 1 ? "Cerrar" : "Siguiente";
  showView(step.view);
}

function openGuidedDemo() {
  guidedStepIndex = 0;
  guidedDemo.hidden = false;
  renderGuidedStep();
  showToast("Demo guiada iniciada", "Sigue los pasos para presentar StayFlow.");
}

function closeGuidedDemo() {
  guidedDemo.hidden = true;
}

function getFilteredProperties() {
  return state.properties.filter((property) => {
    const statusMatch = state.filters.status === "Todas" || property.status === state.filters.status;
    const zoneMatch = state.filters.zone === "Todas" || property.zone === state.filters.zone;
    const ownerMatch =
      state.filters.owner === "Todos" ||
      property.owner.includes(state.filters.owner) ||
      state.tasks.some((task) => task.property === property.name && task.owner === state.filters.owner);

    return statusMatch && zoneMatch && ownerMatch;
  });
}

function getFilteredTasks() {
  return state.tasks.filter((task) => {
    const property = findPropertyByName(task.property);
    const statusMatch = state.filters.status === "Todas" || property?.status === state.filters.status || task.status === state.filters.status;
    const zoneMatch = state.filters.zone === "Todas" || property?.zone === state.filters.zone;
    const ownerMatch = state.filters.owner === "Todos" || task.owner === state.filters.owner;

    return statusMatch && zoneMatch && ownerMatch;
  });
}

function renderProperties() {
  const visible = state.activeProfile === "propietario" ? getOwnerProperties() : getFilteredProperties();
  if (visible.length && !visible.some((property) => property.id === state.selectedPropertyId)) {
    state.selectedPropertyId = visible[0].id;
  }
  ownerReport.hidden = state.activeProfile !== "propietario";

  propertyGrid.innerHTML = visible
    .map((property) => {
      const [statusBg, statusColor] = getStatusStyle(property.status);
      const selectedClass = property.id === state.selectedPropertyId ? "selected" : "";
      return `
        <article class="property-card ${selectedClass}" data-property-id="${property.id}">
          <div class="property-visual" style="--visual-bg: ${property.visual}">
            <span>${property.zone}</span>
          </div>
          <div class="property-body">
            <div class="property-title">
              <h3>${property.name}</h3>
            </div>
            <span class="status-pill" style="--status-bg: ${statusBg}; --status-color: ${statusColor}">
              ${property.status}
            </span>
            <div>
              <div class="property-next">${property.next}</div>
              <div class="property-meta">${property.owner}</div>
              <div class="property-meta">${property.capacity || 2} plazas · ${property.defaultResponsible || "Sin responsable"}</div>
            </div>
            <div class="property-actions">
              <button class="mini-button" type="button" data-action="select" data-property-id="${property.id}">Abrir</button>
              ${state.activeProfile === "propietario" ? "" : `<button class="mini-button" type="button" data-action="quick-ready" data-property-id="${property.id}">Lista</button>`}
            </div>
          </div>
        </article>
      `;
    })
    .join("") || `<div class="empty-state">No hay viviendas con estos filtros.</div>`;
}

function renderPropertyDetail() {
  const property = getSelectedProperty();
  const [statusBg, statusColor] = getStatusStyle(property.status);

  if (state.activeProfile === "propietario") {
    const relatedIssues = state.issues.filter((issue) => issue.property === property.name && issue.status !== "Resuelta");
    propertyDetail.innerHTML = `
      <p class="eyebrow">Reporte propietario</p>
      <h3>${property.name}</h3>
      <span class="status-pill" style="--status-bg: ${statusBg}; --status-color: ${statusColor}">
        ${property.status}
      </span>
      <div class="owner-detail-grid">
        <div><span>Proxima entrada</span><strong>${property.checkin || "-"}</strong></div>
        <div><span>Proxima salida</span><strong>${property.checkout || "-"}</strong></div>
        <div><span>Capacidad</span><strong>${property.capacity || 2} plazas</strong></div>
        <div><span>Zona</span><strong>${property.zone}</strong></div>
      </div>
      <div class="detail-note">
        <strong>Estado operativo</strong><br />
        ${property.next}. ${property.status === "Lista" ? "La vivienda figura preparada para la próxima estancia." : "El equipo mantiene seguimiento operativo."}
      </div>
      <div class="detail-note">
        <strong>Avisos visibles</strong><br />
        ${
          relatedIssues.length
            ? relatedIssues.map((issue) => `${issue.title} (${issue.status})`).join("<br />")
            : "Sin incidencias abiertas visibles para propietario."
        }
      </div>
    `;
    return;
  }

  propertyDetail.innerHTML = `
    <p class="eyebrow">Detalle</p>
    <h3>${property.name}</h3>
    <span class="status-pill" style="--status-bg: ${statusBg}; --status-color: ${statusColor}">
      ${property.status}
    </span>
    <div class="detail-row">
      <label>
        Estado
        <select id="statusSelect">
          ${statuses.map((status) => `<option ${status === property.status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </label>
      <label>
        Zona
        <input id="zoneInput" value="${property.zone}" />
      </label>
    </div>
    <label>
      Dirección
      <input id="addressInput" value="${property.address || ""}" />
    </label>
    <div class="detail-row">
      <label>
        Capacidad
        <input id="capacityInput" type="number" min="1" value="${property.capacity || 2}" />
      </label>
      <label>
        Código de llave
        <input id="keyCodeInput" value="${property.keyCode || ""}" />
      </label>
    </div>
    <div class="detail-row">
      <label>
        Propietario
        <input id="ownerNameInput" value="${property.ownerName || ""}" />
      </label>
      <label>
        Responsable habitual
        <select id="defaultResponsibleInput">
          ${state.team.map((member) => `<option ${member.name === property.defaultResponsible ? "selected" : ""}>${member.name}</option>`).join("")}
        </select>
      </label>
    </div>
    <div class="detail-row">
      <label>
        Check-out
        <input id="checkoutInput" value="${property.checkout}" />
      </label>
      <label>
        Check-in
        <input id="checkinInput" value="${property.checkin}" />
      </label>
    </div>
    <label>
      Responsable
      <input id="ownerInput" value="${property.owner}" />
    </label>
    <div class="detail-note">
      <strong>Nota interna</strong><br />
      ${property.note}
    </div>
    <div class="detail-note">
      <strong>Operativa</strong><br />
      ${property.address || "Sin dirección"} · Llave: ${property.keyCode || "Sin código"} · Propietario: ${property.ownerName || "Sin propietario"}
    </div>
    <div class="detail-actions">
      <button type="button" data-detail-action="cleaning">En limpieza</button>
      <button type="button" data-detail-action="ready">Marcar lista</button>
      <button type="button" data-detail-action="issue">Abrir incidencia</button>
      <button type="button" data-detail-action="save">Guardar cambios</button>
    </div>
  `;
}

function renderTasks() {
  taskBoard.innerHTML = taskColumns
    .map((column) => {
      const items = getFilteredTasks().filter((task) => task.status === column);
      return `
        <div class="task-column" data-task-column="${column}">
          <h3>${column} <span>${items.length}</span></h3>
          ${items
            .map(
              (item) => `
                <article class="task-card" data-task-id="${item.id}">
                  <strong>${item.title}</strong>
                  <span>${item.property}</span>
                  <small>${item.detail}</small>
                  <small>${item.owner}</small>
                  ${renderChecklist(item)}
                  ${item.type === "Limpieza" ? renderEvidenceGallery(item.evidence || [], "task", item.id) : ""}
                  <div class="task-actions">
                    ${renderTaskActions(item)}
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      `;
    })
    .join("");
}

function renderGlobalFilters() {
  const zones = [...new Set(state.properties.map((property) => property.zone))].sort();
  const owners = [...new Set([...state.team.map((member) => member.name), ...state.tasks.map((task) => task.owner)])]
    .filter((owner) => owner !== "Sin asignar")
    .sort();

  globalStatusFilter.innerHTML = ["Todas", ...statuses]
    .map((status) => `<option value="${status}" ${status === state.filters.status ? "selected" : ""}>${status}</option>`)
    .join("");

  globalOwnerFilter.innerHTML = ["Todos", ...owners]
    .map((owner) => `<option value="${owner}" ${owner === state.filters.owner ? "selected" : ""}>${owner}</option>`)
    .join("");

  globalZoneFilter.innerHTML = ["Todas", ...zones]
    .map((zone) => `<option value="${zone}" ${zone === state.filters.zone ? "selected" : ""}>${zone}</option>`)
    .join("");

  filterResultCount.textContent = getFilteredProperties().length;
}

function renderOwnerReport() {
  if (state.activeProfile !== "propietario") {
    ownerReport.hidden = true;
    ownerReport.innerHTML = "";
    return;
  }

  const ownerName = getSelectedOwnerName();
  const ownerProperties = getOwnerProperties();
  const openIssues = getOwnerIssues(ownerProperties);
  const readyCount = ownerProperties.filter((property) => property.status === "Lista").length;
  const occupiedCount = ownerProperties.filter((property) => property.status === "Ocupada").length;
  const nextMovements = ownerProperties.filter((property) => property.checkin || property.checkout).slice(0, 3);

  ownerReport.hidden = false;
  ownerReport.innerHTML = `
    <div class="owner-report-head">
      <div>
        <p class="eyebrow">Reporte propietario</p>
        <h3>${ownerName}</h3>
        <p>Resumen visible para propietario: estado, proximos movimientos y avisos relevantes.</p>
      </div>
      <label>
        Propietario
        <select id="ownerReportSelect">
          ${getOwnerNames().map((name) => `<option value="${name}" ${name === ownerName ? "selected" : ""}>${name}</option>`).join("")}
        </select>
      </label>
    </div>

    <div class="owner-report-metrics">
      <article><span>Viviendas</span><strong>${ownerProperties.length}</strong></article>
      <article><span>Listas</span><strong>${readyCount}</strong></article>
      <article><span>Ocupadas</span><strong>${occupiedCount}</strong></article>
      <article class="${openIssues.length ? "warning" : ""}"><span>Avisos</span><strong>${openIssues.length}</strong></article>
    </div>

    <div class="owner-report-body">
      <section>
        <div class="owner-report-title">
          <h4>Proximos movimientos</h4>
          <button type="button" data-owner-report-action="copy">Copiar resumen</button>
        </div>
        <div class="owner-movement-list">
          ${
            nextMovements.length
              ? nextMovements
                  .map(
                    (property) => `
                      <article>
                        <strong>${property.name}</strong>
                        <span>${property.status} - Entrada: ${property.checkin || "-"} - Salida: ${property.checkout || "-"}</span>
                      </article>
                    `,
                  )
                  .join("")
              : `<div class="empty-state compact">Sin movimientos proximos.</div>`
          }
        </div>
      </section>

      <section>
        <div class="owner-report-title">
          <h4>Avisos operativos</h4>
          <button type="button" data-owner-report-action="pdf">Preparar PDF</button>
        </div>
        <div class="owner-movement-list">
          ${
            openIssues.length
              ? openIssues
                  .map(
                    (issue) => `
                      <article>
                        <strong>${issue.property}</strong>
                        <span>${issue.title} - ${issue.status}</span>
                      </article>
                    `,
                  )
                  .join("")
              : `<div class="owner-ok">Sin incidencias abiertas para este propietario.</div>`
          }
        </div>
      </section>
    </div>
  `;
}

function renderTaskActions(task) {
  if (task.status === "Pendiente") {
    return `
      <button type="button" data-task-action="start" data-task-id="${task.id}">Iniciar</button>
      <button type="button" data-task-action="block" data-task-id="${task.id}">Bloquear</button>
    `;
  }
  if (task.status === "En curso") {
    return `
      <button type="button" data-task-action="complete" data-task-id="${task.id}">Completar</button>
      <button type="button" data-task-action="block" data-task-id="${task.id}">Bloquear</button>
    `;
  }
  if (task.status === "Bloqueado") {
    return `<button type="button" data-task-action="start" data-task-id="${task.id}">Reactivar</button>`;
  }
  return `<button type="button" data-task-action="reopen" data-task-id="${task.id}">Reabrir</button>`;
}

function renderChecklist(task) {
  if (!task.checklist?.length) return "";

  const done = task.checklist.filter((item) => item.done).length;
  const total = task.checklist.length;
  const progress = Math.round((done / total) * 100);

  return `
    <div class="checklist" data-task-id="${task.id}">
      <div class="checklist-head">
        <span>Checklist</span>
        <strong>${done}/${total}</strong>
      </div>
      <div class="checklist-bar" aria-hidden="true">
        <span style="width: ${progress}%"></span>
      </div>
      <div class="checklist-items">
        ${task.checklist
          .map(
            (item) => `
              <label class="checklist-item">
                <input type="checkbox" data-task-id="${task.id}" data-check-id="${item.id}" ${item.done ? "checked" : ""} />
                ${item.label}
              </label>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderEvidenceGallery(items = [], ownerType, ownerId) {
  return `
    <div class="evidence-block">
      <div class="evidence-head">
        <span>Evidencias</span>
        <strong>${items.length}</strong>
      </div>
      <div class="evidence-gallery">
        ${
          items.length
            ? items
                .map(
                  (item) => `
                    <div class="evidence-thumb ${item.tone || "success"}">
                      <span>${item.label}</span>
                    </div>
                  `,
                )
                .join("")
            : `<div class="evidence-empty">Sin fotos</div>`
        }
      </div>
      <button class="evidence-button" type="button" data-evidence-owner="${ownerType}" data-evidence-id="${ownerId}">
        Añadir foto
      </button>
    </div>
  `;
}

function renderIssues() {
  const selectedIssue = getSelectedIssue();
  issueList.innerHTML = state.issues
    .map(
      (issue) => `
        <article class="issue-row ${issue.priority} ${issue.id === selectedIssue?.id ? "selected" : ""}" data-issue-id="${issue.id}">
          <div>
            <strong>${issue.title}</strong>
            <span>${issue.property} - ${issue.detail}</span>
            <small>${issue.status} - ${issue.owner}</small>
          </div>
          <button type="button" data-issue-action="open" data-issue-id="${issue.id}">Abrir</button>
        </article>
      `,
    )
    .join("");

  renderIssueDetail();
}

function getSelectedIssue() {
  return state.issues.find((issue) => issue.id === state.selectedIssueId) || state.issues[0];
}

function renderIssueDetail() {
  const issue = getSelectedIssue();
  if (!issue) {
    issueDetail.innerHTML = `<div class="empty-state">No hay incidencias abiertas.</div>`;
    return;
  }

  const property = findPropertyByName(issue.property);
  issueDetail.innerHTML = `
    <p class="eyebrow">Detalle</p>
    <h3>${issue.title}</h3>
    <div class="issue-badges">
      <span class="issue-status">${issue.status}</span>
      <span class="issue-priority ${issue.priority}">${formatPriority(issue.priority)}</span>
    </div>
    <div class="detail-row">
      <label>
        Estado
        <select id="issueStatusSelect">
          ${["Abierta", "En curso", "Resuelta"].map((status) => `<option ${status === issue.status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </label>
      <label>
        Responsable
        <select id="issueOwnerSelect">
          ${state.team.map((member) => `<option ${member.name === issue.owner ? "selected" : ""}>${member.name}</option>`).join("")}
        </select>
      </label>
    </div>
    <div class="detail-note">${issue.property} - ${issue.detail}</div>
    <div class="detail-note">Vivienda: ${property ? property.status : "Sin propiedad asociada"}</div>
    ${renderEvidenceGallery(issue.evidence || [], "issue", issue.id)}
    <div class="issue-actions">
      <button type="button" data-issue-detail-action="take">Tomar</button>
      <button type="button" data-issue-detail-action="progress">En curso</button>
      <button type="button" data-issue-detail-action="resolve">Resolver</button>
      <button type="button" data-issue-detail-action="reopen">Reabrir</button>
      <button type="button" data-issue-detail-action="save">Guardar</button>
    </div>
  `;
}

function formatPriority(priority) {
  if (priority === "high") return "Alta";
  if (priority === "medium") return "Media";
  return "Baja";
}

function getAgendaEvents() {
  return [
    {
      time: "10:00",
      kind: "Salida",
      property: "Teatinos Studio",
      title: "Salida de Pablo Navas",
      detail: "Limpieza asignada a Nora. Revisar termo antes de cerrar.",
      action: "open",
    },
    {
      time: "11:00",
      kind: "Salida",
      property: "Soho Loft 2B",
      title: "Salida y limpieza urgente",
      detail: "Entrada nueva a las 15:30. Todavía sin responsable claro.",
      action: "startCleaning",
    },
    {
      time: "12:00",
      kind: "Salida",
      property: "Huelin Playa 3C",
      title: "Salida pendiente de llaves",
      detail: "Si no se confirma la llave, bloquear tarea y avisar.",
      action: "risk",
    },
    {
      time: "13:30",
      kind: "Entrada",
      property: "Centro Histórico A1",
      title: "Recepción con solicitud especial",
      detail: "Lucía recibe. Preparar cuna antes de la llegada.",
      action: "open",
    },
    {
      time: "14:00",
      kind: "Riesgo",
      property: "Malagueta Sea View",
      title: "Aire acondicionado sin confirmar",
      detail: "Técnico pendiente. Entrada mañana a las 16:00.",
      action: "risk",
    },
    {
      time: "15:30",
      kind: "Entrada",
      property: "Soho Loft 2B",
      title: "Check-in próximo",
      detail: "La vivienda debe estar lista y verificada antes de esta hora.",
      action: "open",
    },
    {
      time: "18:00",
      kind: "Entrada",
      property: "Pedregalejo Casa",
      title: "Entrada sin riesgo",
      detail: "Fotos y checklist completos. Vivienda lista.",
      action: "open",
    },
  ];
}

function renderAgenda() {
  const events = getAgendaEvents();
  const counts = events.reduce((acc, event) => {
    acc[event.kind] = (acc[event.kind] || 0) + 1;
    return acc;
  }, {});

  agendaSummary.innerHTML = ["Salida", "Limpieza", "Entrada", "Riesgo"]
    .filter((kind) => counts[kind])
    .map((kind) => `<span>${counts[kind]} ${kind}</span>`)
    .join("");

  agendaList.innerHTML = events
    .map(
      (event) => `
        <article class="agenda-event" data-kind="${event.kind}">
          <div class="agenda-time">${event.time}</div>
          <div class="agenda-kind">${event.kind}</div>
          <div class="agenda-copy">
            <strong>${event.title}</strong>
            <span>${event.property} - ${event.detail}</span>
          </div>
          <div class="agenda-actions">
            <button type="button" data-agenda-action="open" data-property-name="${event.property}">Abrir</button>
            ${event.action === "startCleaning" ? `<button type="button" data-agenda-action="start-cleaning" data-property-name="${event.property}">Iniciar limpieza</button>` : ""}
            ${event.action === "risk" ? `<button type="button" data-agenda-action="risk" data-property-name="${event.property}">Marcar riesgo</button>` : ""}
          </div>
        </article>
      `,
    )
    .join("");
}

function getTasksForMember(memberName) {
  return state.tasks.filter((task) => task.owner === memberName);
}

function renderTeamTabs() {
  teamTabs.innerHTML = state.team
    .map(
      (member) => `
        <button class="team-tab ${member.name === state.selectedMember ? "active" : ""}" type="button" data-member="${member.name}">
          ${member.name}
        </button>
      `,
    )
    .join("");
}

function renderTeamGrid() {
  teamGrid.innerHTML = state.team
    .map((member) => {
      const memberTasks = getTasksForMember(member.name);
      const pending = memberTasks.filter((task) => task.status === "Pendiente").length;
      const active = memberTasks.filter((task) => task.status === "En curso").length;
      const blocked = memberTasks.filter((task) => task.status === "Bloqueado").length;
      return `
        <article class="member-card ${member.name === state.selectedMember ? "selected" : ""}" data-member="${member.name}">
          <div class="member-head">
            <div class="avatar" style="--avatar-bg: ${member.color[0]}; --avatar-color: ${member.color[1]}">${member.name.slice(0, 2)}</div>
            <div>
              <strong>${member.name}</strong>
              <span>${member.role}</span>
            </div>
          </div>
          <div class="member-meta">${member.zone}</div>
          <div class="member-stats">
            <div class="member-stat"><strong>${pending}</strong><span>Pend.</span></div>
            <div class="member-stat"><strong>${active}</strong><span>Curso</span></div>
            <div class="member-stat"><strong>${blocked}</strong><span>Bloq.</span></div>
          </div>
          <div class="member-focus">${member.focus}</div>
        </article>
      `;
    })
    .join("");
}

function renderMemberPanel() {
  const member = state.team.find((item) => item.name === state.selectedMember) || state.team[0];
  const tasks = getTasksForMember(member.name);
  const openTasks = tasks.filter((task) => task.status !== "Completado");

  memberPanel.innerHTML = `
    <p class="eyebrow">Mis tareas</p>
    <h3>${member.name}</h3>
    <small>${member.role} - ${member.zone}</small>
    <div class="detail-note">${member.focus}</div>
    <div class="member-task-list">
      ${
        openTasks.length
          ? openTasks
              .map(
                (task) => `
                  <article class="member-task">
                    <strong>${task.title}</strong>
                    <span>${task.property}</span>
                    <small>${task.status} - ${task.detail}</small>
                    ${renderChecklist(task)}
                    ${task.type === "Limpieza" ? renderEvidenceGallery(task.evidence || [], "task", task.id) : ""}
                    <div class="member-task-actions">
                      ${renderTaskActions(task)}
                    </div>
                  </article>
                `,
              )
              .join("")
          : `<div class="detail-note">No tiene tareas abiertas. Buen momento para reasignar o revisar incidencias.</div>`
      }
    </div>
  `;
}

function renderMobileWork() {
  const member = state.team.find((item) => item.name === state.selectedMember) || state.team[0];
  const tasks = getTasksForMember(member.name).filter((task) => task.status !== "Completado");
  const pending = tasks.filter((task) => task.status === "Pendiente").length;
  const active = tasks.filter((task) => task.status === "En curso").length;
  const blocked = tasks.filter((task) => task.status === "Bloqueado").length;

  mobileWorkerTabs.innerHTML = state.team
    .map(
      (item) => `
        <button class="team-tab ${item.name === state.selectedMember ? "active" : ""}" type="button" data-member="${item.name}">
          ${item.name}
        </button>
      `,
    )
    .join("");

  mobileWorkerName.textContent = member.name;
  mobileWorkSummary.innerHTML = `
    <div><strong>${pending}</strong><span>Pend.</span></div>
    <div><strong>${active}</strong><span>Curso</span></div>
    <div><strong>${blocked}</strong><span>Bloq.</span></div>
  `;

  mobileWorkList.innerHTML = tasks.length
    ? tasks
        .map(
          (task) => `
            <article class="mobile-work-card">
              <strong>${task.title}</strong>
              <span>${task.property}</span>
              <small>${task.status} - ${task.detail}</small>
              ${renderChecklist(task)}
              ${task.type === "Limpieza" ? renderEvidenceGallery(task.evidence || [], "task", task.id) : ""}
              <div class="mobile-work-actions">
                ${renderTaskActions(task)}
              </div>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-state">No hay tareas abiertas para ${member.name}.</div>`;
}

function renderSettings() {
  companyNameInput.value = state.company.name;
  companyCityInput.value = state.company.city;
  companyEmailInput.value = state.company.email;

  const zones = [...new Set(state.properties.map((property) => property.zone))].sort();
  zoneSettings.innerHTML = zones
    .map(
      (zone) => `
        <div class="settings-row">
          <div>
            <strong>${zone}</strong>
            <span>${state.properties.filter((property) => property.zone === zone).length} vivienda(s)</span>
          </div>
          <button type="button" data-settings-action="remove-zone" data-value="${zone}">Quitar</button>
        </div>
      `,
    )
    .join("");

  teamSettings.innerHTML = state.team
    .map(
      (member) => `
        <div class="settings-row">
          <div>
            <strong>${member.name}</strong>
            <span>${member.role} - ${member.zone}</span>
          </div>
          <button type="button" data-settings-action="remove-member" data-value="${member.name}">Quitar</button>
        </div>
      `,
    )
    .join("");

  baseChecklistSettings.innerHTML = state.baseChecklist
    .map(
      (item) => `
        <div class="settings-row">
          <div>
            <strong>${item}</strong>
            <span>Punto base de limpieza</span>
          </div>
          <button type="button" data-settings-action="remove-check" data-value="${item}">Quitar</button>
        </div>
      `,
    )
    .join("");
}

function renderTaskPropertyOptions() {
  taskPropertySelect.innerHTML = state.properties
    .map((property) => `<option value="${property.name}">${property.name}</option>`)
    .join("");
  taskPropertySelect.value = getSelectedProperty().name;
}

function renderProfileControls() {
  const profile = getActiveProfile();
  const memberName = getProfileMemberName(profile);

  activeProfileSelect.innerHTML = Object.entries(demoProfiles)
    .map(([key, item]) => `<option value="${key}" ${key === state.activeProfile ? "selected" : ""}>${item.label}</option>`)
    .join("");

  pageTitle.textContent = state.activeProfile === "coordinador" ? "Hoy en StayFlow" : profile.title;
  pageSubcopy.textContent = profile.subcopy;
  profileModeLabel.textContent = `Modo demo - ${profile.label}`;
  profileModeTitle.textContent = state.activeProfile === "coordinador" ? "Coordinación operativa" : `${profile.title} (${memberName})`;
  profileModeCopy.textContent = profile.copy;
  openTaskModalButton.hidden = state.activeProfile === "propietario";
  propertyFilterBar.hidden = state.activeProfile === "propietario";

  profileQuickActions.innerHTML = profile.actions
    .map(([label, view]) => `<button class="ghost-button" type="button" data-profile-view="${view}">${label}</button>`)
    .join("");
}

function applyProfile(profileKey, targetView) {
  state.activeProfile = demoProfiles[profileKey] ? profileKey : "coordinador";
  const profile = getActiveProfile();
  const memberName = getProfileMemberName(profile);
  state.selectedMember = memberName;
  state.filters = { status: "Todas", owner: "Todos", zone: "Todas" };
  if (profile.filters?.owner) {
    state.filters.owner = memberName;
  }
  renderAll();
  showView(targetView || profile.defaultView);
  showToast("Perfil activo", `Vista de ${profile.label} preparada para la demo.`);
}

function renderSummary() {
  const countByStatus = (status) => state.properties.filter((property) => property.status === status).length;
  const activeCleanings = state.tasks.filter((task) => task.type === "Limpieza" && task.status !== "Completado").length;
  document.querySelector(".metric-card:nth-child(3) strong").textContent = activeCleanings;
  document.querySelector(".metric-card.warning strong").textContent = state.issues.filter((issue) => issue.status !== "Resuelta").length;
}

function renderAll() {
  saveState();
  renderProfileControls();
  renderGlobalFilters();
  renderOwnerReport();
  renderProperties();
  renderPropertyDetail();
  renderTasks();
  renderIssues();
  renderAgenda();
  renderTeamTabs();
  renderTeamGrid();
  renderMemberPanel();
  renderMobileWork();
  renderSettings();
  renderTaskPropertyOptions();
  renderSummary();
}

function updateSelectedProperty(updates) {
  const property = getSelectedProperty();
  Object.assign(property, updates);
  renderAll();
}

function createIssue({ title, property, detail, priority = "medium", owner = "Rafa", status = "Abierta", action = "Asignar" }) {
  const issue = {
    id: Date.now() + state.issues.length,
    title,
    property,
    detail,
    priority,
    owner,
    status,
    action,
  };
  state.issues.unshift(issue);
  state.selectedIssueId = issue.id;
  return issue;
}

function findPropertyByName(name) {
  return state.properties.find((property) => property.name === name);
}

function updateTaskStatus(taskId, nextStatus) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;

  if (task.type === "Limpieza" && nextStatus === "Completado" && !isChecklistComplete(task)) {
    showToast("Checklist incompleto", `${task.property} todavía tiene puntos pendientes.`, "warning");
    return;
  }

  task.status = nextStatus;
  const property = findPropertyByName(task.property);

  if (property && task.type === "Limpieza" && nextStatus === "En curso") {
    property.status = "En Limpieza";
    property.next = "Limpieza en curso";
    property.owner = `${task.owner} limpia`;
  }

  if (property && task.type === "Limpieza" && nextStatus === "Completado") {
    property.status = "Lista";
    property.next = "Lista para próxima entrada";
    property.owner = "Checklist completado";
  }

  if (property && nextStatus === "Bloqueado") {
    property.status = "Incidencia";
    property.next = "Tarea bloqueada";
    if (!state.issues.some((issue) => issue.title === `Bloqueo: ${task.title}` && issue.property === property.name)) {
      createIssue({
        title: `Bloqueo: ${task.title}`,
        property: property.name,
        detail: task.detail,
        priority: "medium",
        owner: task.owner === "Sin asignar" ? "Rafa" : task.owner,
        action: "Resolver",
      });
    }
  }

  renderAll();
  const tone = nextStatus === "Bloqueado" ? "warning" : "success";
  showToast(`Tarea ${nextStatus.toLowerCase()}`, `${task.title} - ${task.property}`, tone);
}

function isChecklistComplete(task) {
  return !task.checklist?.length || task.checklist.every((item) => item.done);
}

function toggleChecklistItem(taskId, checkId, checked) {
  const task = state.tasks.find((item) => item.id === taskId);
  const check = task?.checklist?.find((item) => item.id === checkId);
  if (!task || !check) return;

  check.done = checked;
  renderAll();

  const done = task.checklist.filter((item) => item.done).length;
  const total = task.checklist.length;
  if (done === total) {
    showToast("Checklist completo", `${task.property} ya puede marcarse como lista.`);
  } else {
    showToast("Checklist actualizado", `${done}/${total} puntos completados en ${task.property}.`);
  }
}

function createDefaultCleaningChecklist(propertyName) {
  const key = propertyName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return state.baseChecklist.map((label, index) => ({
    id: `${key}-${index}`,
    label,
    done: false,
  }));
}

function addEvidence(ownerType, ownerId) {
  if (ownerType === "task") {
    const task = state.tasks.find((item) => item.id === Number(ownerId));
    if (!task) return;
    task.evidence = task.evidence || [];
    const label = `Foto ${task.evidence.length + 1}`;
    task.evidence.push({ id: `ev-${task.id}-${Date.now()}`, label, tone: "success" });
    const photoCheck = task.checklist?.find((item) => item.label.toLowerCase().includes("foto"));
    if (photoCheck) photoCheck.done = true;
    renderAll();
    showToast("Foto añadida", `${task.property} tiene ${task.evidence.length} evidencia(s).`);
  }

  if (ownerType === "issue") {
    const issue = state.issues.find((item) => item.id === Number(ownerId));
    if (!issue) return;
    issue.evidence = issue.evidence || [];
    const label = `Foto ${issue.evidence.length + 1}`;
    issue.evidence.push({ id: `ev-issue-${issue.id}-${Date.now()}`, label, tone: issue.priority === "high" ? "issue" : "warning" });
    renderAll();
    showToast("Evidencia añadida", `${issue.title} tiene ${issue.evidence.length} foto(s).`, "warning");
  }
}

function handleEvidenceClick(event) {
  const button = event.target.closest("[data-evidence-owner]");
  if (!button) return false;
  addEvidence(button.dataset.evidenceOwner, button.dataset.evidenceId);
  return true;
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.filters.status = button.dataset.filter;
    renderAll();
  });
});

navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    showView(item.getAttribute("href"));
  });
});

viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showView(link.getAttribute("href"));
  });
});

activeProfileSelect.addEventListener("change", (event) => {
  applyProfile(event.target.value);
});

profileQuickActions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-profile-view]");
  if (!button) return;
  showView(button.dataset.profileView);
});

window.addEventListener("popstate", () => {
  showView(window.location.hash || "dashboard", false);
});

globalStatusFilter.addEventListener("change", (event) => {
  state.filters.status = event.target.value;
  filters.forEach((button) => button.classList.toggle("active", button.dataset.filter === state.filters.status));
  renderAll();
});

globalOwnerFilter.addEventListener("change", (event) => {
  state.filters.owner = event.target.value;
  renderAll();
});

globalZoneFilter.addEventListener("change", (event) => {
  state.filters.zone = event.target.value;
  renderAll();
});

clearFiltersButton.addEventListener("click", () => {
  state.filters = {
    status: "Todas",
    owner: "Todos",
    zone: "Todas",
  };
  filters.forEach((button) => button.classList.toggle("active", button.dataset.filter === "Todas"));
  renderAll();
  showToast("Filtros limpiados", "Vuelves a ver toda la operativa.");
});

propertyGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const card = event.target.closest(".property-card");
  if (!button && !card) return;

  const propertyId = Number((button || card).dataset.propertyId || card.dataset.propertyId);
  state.selectedPropertyId = propertyId;

  if (button?.dataset.action === "quick-ready") {
    updateSelectedProperty({ status: "Lista", next: "Lista para próxima entrada", owner: "Checklist completado" });
    showToast("Vivienda lista", `${getSelectedProperty().name} quedó preparada para la próxima entrada.`);
    return;
  }

  renderAll();
});

propertyDetail.addEventListener("change", (event) => {
  if (event.target.id === "statusSelect") {
    updateSelectedProperty({ status: event.target.value });
    showToast("Estado actualizado", `${getSelectedProperty().name} ahora está en ${event.target.value}.`);
  }
});

propertyDetail.addEventListener("click", (event) => {
  const action = event.target.dataset.detailAction;
  if (!action) return;

  const property = getSelectedProperty();
  if (action === "cleaning") {
    updateSelectedProperty({ status: "En Limpieza", next: "Limpieza en curso", owner: "Equipo asignado" });
    showToast("Limpieza iniciada", `${property.name} pasó a En Limpieza.`);
  }
  if (action === "ready") {
    updateSelectedProperty({ status: "Lista", next: "Lista para próxima entrada", owner: "Checklist completado" });
    showToast("Vivienda lista", `${property.name} quedó preparada para el próximo huésped.`);
  }
  if (action === "issue") {
    updateSelectedProperty({ status: "Incidencia", next: "Incidencia abierta" });
    createIssue({
      title: "Nueva incidencia pendiente",
      property: property.name,
      detail: "Revisar y asignar responsable",
      priority: "medium",
      owner: "Rafa",
      action: "Asignar",
    });
    renderAll();
    showToast("Incidencia creada", `${property.name} pasó a estado Incidencia.`, "issue");
  }
  if (action === "save") {
    updateSelectedProperty({
      zone: document.querySelector("#zoneInput").value,
      address: document.querySelector("#addressInput").value,
      capacity: Number(document.querySelector("#capacityInput").value) || 1,
      keyCode: document.querySelector("#keyCodeInput").value,
      ownerName: document.querySelector("#ownerNameInput").value,
      defaultResponsible: document.querySelector("#defaultResponsibleInput").value,
      checkout: document.querySelector("#checkoutInput").value,
      checkin: document.querySelector("#checkinInput").value,
      owner: document.querySelector("#ownerInput").value,
    });
    showToast("Cambios guardados", `${property.name} actualizado correctamente.`);
  }
});

ownerReport.addEventListener("change", (event) => {
  if (event.target.id !== "ownerReportSelect") return;
  state.selectedOwnerName = event.target.value;
  const firstProperty = getOwnerProperties()[0];
  if (firstProperty) state.selectedPropertyId = firstProperty.id;
  renderAll();
  showToast("Reporte actualizado", `Viendo reporte de ${state.selectedOwnerName}.`);
});

ownerReport.addEventListener("click", (event) => {
  const button = event.target.closest("[data-owner-report-action]");
  if (!button) return;

  const ownerName = getSelectedOwnerName();
  if (button.dataset.ownerReportAction === "copy") {
    showToast("Resumen preparado", `Texto breve de ${ownerName} listo para compartir en la demo.`);
  }
  if (button.dataset.ownerReportAction === "pdf") {
    showToast("PDF futuro", "La exportacion real quedaria para la version con backend.", "warning");
  }
});

taskBoard.addEventListener("click", (event) => {
  if (handleEvidenceClick(event)) return;
  const button = event.target.closest("button");
  if (!button) return;

  const taskId = Number(button.dataset.taskId);
  const action = button.dataset.taskAction;
  if (action === "start") updateTaskStatus(taskId, "En curso");
  if (action === "complete") updateTaskStatus(taskId, "Completado");
  if (action === "block") updateTaskStatus(taskId, "Bloqueado");
  if (action === "reopen") updateTaskStatus(taskId, "Pendiente");
});

taskBoard.addEventListener("change", (event) => {
  if (event.target.matches(".checklist-item input")) {
    toggleChecklistItem(Number(event.target.dataset.taskId), event.target.dataset.checkId, event.target.checked);
  }
});

function handleTaskActionClick(event) {
  const button = event.target.closest("button");
  if (!button) return false;

  const taskId = Number(button.dataset.taskId);
  const action = button.dataset.taskAction;
  if (!taskId || !action) return false;

  if (action === "start") updateTaskStatus(taskId, "En curso");
  if (action === "complete") updateTaskStatus(taskId, "Completado");
  if (action === "block") updateTaskStatus(taskId, "Bloqueado");
  if (action === "reopen") updateTaskStatus(taskId, "Pendiente");
  return true;
}

teamTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  state.selectedMember = button.dataset.member;
  renderAll();
});

teamGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".member-card");
  if (!card) return;
  state.selectedMember = card.dataset.member;
  renderAll();
});

memberPanel.addEventListener("click", (event) => {
  if (handleEvidenceClick(event)) return;
  handleTaskActionClick(event);
});

memberPanel.addEventListener("change", (event) => {
  if (event.target.matches(".checklist-item input")) {
    toggleChecklistItem(Number(event.target.dataset.taskId), event.target.dataset.checkId, event.target.checked);
  }
});

mobileWorkerTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  state.selectedMember = button.dataset.member;
  renderAll();
});

mobileWorkList.addEventListener("click", (event) => {
  if (handleEvidenceClick(event)) return;
  handleTaskActionClick(event);
});

mobileWorkList.addEventListener("change", (event) => {
  if (event.target.matches(".checklist-item input")) {
    toggleChecklistItem(Number(event.target.dataset.taskId), event.target.dataset.checkId, event.target.checked);
  }
});

mobileStartTaskButton.addEventListener("click", () => {
  const task = state.tasks.find((item) => item.property === "Soho Loft 2B" && item.type === "Limpieza" && item.status !== "Completado");
  if (!task) {
    showToast("Sin tareas abiertas", "La limpieza de Soho Loft 2B ya no está pendiente.");
    return;
  }
  updateTaskStatus(task.id, "En curso");
});

languageButton.addEventListener("click", () => {
  showToast("Idioma activo: español", "La traducción ES/EN está prevista para una siguiente versión.");
});

document.querySelector("#resetDemo").addEventListener("click", () => {
  resetDemoState();
});

startGuidedDemoButton.addEventListener("click", () => {
  openGuidedDemo();
});

closeGuidedDemoButton.addEventListener("click", () => {
  closeGuidedDemo();
});

prevGuidedStepButton.addEventListener("click", () => {
  guidedStepIndex = Math.max(0, guidedStepIndex - 1);
  renderGuidedStep();
});

nextGuidedStepButton.addEventListener("click", () => {
  if (guidedStepIndex === guidedSteps.length - 1) {
    closeGuidedDemo();
    showToast("Demo guiada cerrada", "Puedes seguir explorando la app.");
    return;
  }
  guidedStepIndex += 1;
  renderGuidedStep();
});

document.querySelector("#saveSettings").addEventListener("click", () => {
  state.company.name = companyNameInput.value.trim() || state.company.name;
  state.company.city = companyCityInput.value.trim() || state.company.city;
  state.company.email = companyEmailInput.value.trim() || state.company.email;
  renderAll();
  showToast("Configuración guardada", "Los ajustes base quedaron actualizados.");
});

document.querySelector("#addZone").addEventListener("click", () => {
  const zone = newZoneInput.value.trim();
  if (!zone) return;
  if (!state.properties.some((property) => property.zone === zone)) {
    state.properties.push({
      id: Date.now(),
      name: `Nueva vivienda ${zone}`,
      zone,
      status: "Libre",
      next: "Sin movimientos",
      owner: "Sin asignar",
      guest: "",
      address: "Dirección pendiente",
      capacity: 2,
      ownerName: "Propietario pendiente",
      keyCode: "Pendiente",
      defaultResponsible: state.team[0]?.name || "Sin asignar",
      checkout: "-",
      checkin: "-",
      note: "Vivienda creada desde configuración para demo.",
      visual: "linear-gradient(135deg, #eef4f1, #cbd8d2)",
    });
  }
  newZoneInput.value = "";
  renderAll();
  showToast("Zona añadida", `${zone} quedó disponible en la demo.`);
});

document.querySelector("#addMember").addEventListener("click", () => {
  const name = newMemberInput.value.trim();
  if (!name) return;
  if (!state.team.some((member) => member.name === name)) {
    state.team.push({
      name,
      role: "Operaciones",
      zone: "General",
      focus: "Revisar tareas asignadas del día.",
      color: ["#eef4f1", "#43514c"],
    });
  }
  newMemberInput.value = "";
  renderAll();
  showToast("Responsable añadido", `${name} ya aparece en Equipo y Móvil.`);
});

document.querySelector("#addChecklistItem").addEventListener("click", () => {
  const item = newChecklistInput.value.trim();
  if (!item) return;
  if (!state.baseChecklist.includes(item)) {
    state.baseChecklist.push(item);
  }
  newChecklistInput.value = "";
  renderAll();
  showToast("Checklist actualizado", `${item} se añadió como punto base.`);
});

document.querySelector("#configuracion").addEventListener("click", (event) => {
  const button = event.target.closest("[data-settings-action]");
  if (!button) return;
  const action = button.dataset.settingsAction;
  const value = button.dataset.value;

  if (action === "remove-zone") {
    showToast("Zona protegida", "Las zonas con viviendas asociadas no se eliminan en esta demo.", "warning");
  }
  if (action === "remove-member") {
    if (state.tasks.some((task) => task.owner === value)) {
      showToast("Responsable en uso", "No se elimina porque tiene tareas asignadas.", "warning");
      return;
    }
    state.team = state.team.filter((member) => member.name !== value);
    renderAll();
    showToast("Responsable eliminado", `${value} ya no aparece en el equipo.`);
  }
  if (action === "remove-check") {
    state.baseChecklist = state.baseChecklist.filter((item) => item !== value);
    renderAll();
    showToast("Checklist actualizado", `${value} se quitó del checklist base.`);
  }
});

agendaList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const property = findPropertyByName(button.dataset.propertyName);
  if (!property) return;

  state.selectedPropertyId = property.id;

  if (button.dataset.agendaAction === "open") {
    renderAll();
    showView("propiedades");
    showToast("Vivienda abierta", `${property.name} seleccionada desde agenda.`);
  }

  if (button.dataset.agendaAction === "start-cleaning") {
    const task = state.tasks.find((item) => item.property === property.name && item.type === "Limpieza" && item.status !== "Completado");
    if (task) {
      updateTaskStatus(task.id, "En curso");
    } else {
      state.tasks.unshift({
        id: Date.now(),
        title: "Limpieza rápida",
        property: property.name,
        detail: "Creada desde agenda",
        owner: "Sin asignar",
        status: "En curso",
        type: "Limpieza",
        checklist: createDefaultCleaningChecklist(property.name),
        evidence: [],
      });
      property.status = "En Limpieza";
      property.next = "Limpieza en curso";
      renderAll();
      showToast("Limpieza iniciada", `${property.name} pasó a En Limpieza.`);
    }
  }

  if (button.dataset.agendaAction === "risk") {
    property.status = "Incidencia";
    property.next = "Riesgo marcado desde agenda";
    createIssue({
      title: "Riesgo marcado desde agenda",
      property: property.name,
      detail: "Revisar antes del próximo movimiento",
      priority: "medium",
      owner: "Rafa",
      action: "Asignar",
    });
    renderAll();
    showToast("Riesgo marcado", `${property.name} pasó a Incidencia.`, "warning");
  }
});

issueList.addEventListener("click", (event) => {
  const row = event.target.closest(".issue-row");
  if (!row) return;
  state.selectedIssueId = Number(row.dataset.issueId);
  renderAll();
});

issueDetail.addEventListener("change", (event) => {
  const issue = getSelectedIssue();
  if (!issue) return;
  if (event.target.id === "issueStatusSelect") {
    updateIssue(issue.id, { status: event.target.value });
  }
  if (event.target.id === "issueOwnerSelect") {
    updateIssue(issue.id, { owner: event.target.value });
  }
});

issueDetail.addEventListener("click", (event) => {
  if (handleEvidenceClick(event)) return;
  const action = event.target.dataset.issueDetailAction;
  const issue = getSelectedIssue();
  if (!action || !issue) return;

  if (action === "take") {
    updateIssue(issue.id, { owner: state.selectedMember, status: "En curso" });
    showToast("Incidencia tomada", `${state.selectedMember} asume ${issue.property}.`, "warning");
  }
  if (action === "progress") {
    updateIssue(issue.id, { status: "En curso" });
    showToast("Incidencia en curso", `${issue.title} sigue en seguimiento.`, "warning");
  }
  if (action === "resolve") {
    updateIssue(issue.id, { status: "Resuelta" });
    const property = findPropertyByName(issue.property);
    if (property && property.status === "Incidencia") {
      property.status = "Lista";
      property.next = "Incidencia resuelta";
    }
    showToast("Incidencia resuelta", `${issue.property} queda sin riesgo activo.`);
    renderAll();
  }
  if (action === "reopen") {
    updateIssue(issue.id, { status: "Abierta" });
    const property = findPropertyByName(issue.property);
    if (property) {
      property.status = "Incidencia";
      property.next = "Incidencia reabierta";
    }
    showToast("Incidencia reabierta", `${issue.property} vuelve a seguimiento.`, "issue");
    renderAll();
  }
  if (action === "save") {
    updateIssue(issue.id, {
      status: document.querySelector("#issueStatusSelect").value,
      owner: document.querySelector("#issueOwnerSelect").value,
    });
    showToast("Incidencia guardada", `${issue.title} actualizada correctamente.`);
  }
});

function updateIssue(issueId, updates) {
  const issue = state.issues.find((item) => item.id === issueId);
  if (!issue) return;
  Object.assign(issue, updates);
  renderAll();
}

document.querySelector("#openTaskModal").addEventListener("click", () => {
  taskModal.hidden = false;
  renderTaskPropertyOptions();
  showToast("Nueva tarea", "Completa los datos y guarda la tarea.");
});

document.querySelector("#closeTaskModal").addEventListener("click", () => {
  taskModal.hidden = true;
});

document.querySelector("#cancelTaskModal").addEventListener("click", () => {
  taskModal.hidden = true;
});

taskModal.addEventListener("click", (event) => {
  if (event.target === taskModal) {
    taskModal.hidden = true;
  }
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(taskForm);
  const type = data.get("type");
  const title = data.get("title");
  const property = data.get("property");
  const owner = data.get("owner");
  const priority = data.get("priority");
  const note = data.get("note");

  if (type === "Incidencia") {
    createIssue({
      title,
      property,
      detail: `${owner} - ${note}`,
      priority: priority === "alta" ? "high" : priority === "baja" ? "low" : "medium",
      owner,
      action: "Asignar",
    });
    const targetProperty = state.properties.find((item) => item.name === property);
    if (targetProperty) targetProperty.status = "Incidencia";
    showToast("Incidencia creada", `${property} queda marcada para seguimiento.`, "issue");
  } else {
    state.tasks.unshift({
      id: Date.now(),
      title: `${type}: ${title}`,
      property,
      detail: `${owner} - ${note}`,
      owner,
      status: "Pendiente",
      type,
      checklist: type === "Limpieza" ? createDefaultCleaningChecklist(property) : undefined,
      evidence: type === "Limpieza" ? [] : undefined,
    });
    showToast("Tarea creada", `${type}: ${title}`);
  }

  taskModal.hidden = true;
  renderAll();
});

renderAll();
showView(window.location.hash || "dashboard", false);
