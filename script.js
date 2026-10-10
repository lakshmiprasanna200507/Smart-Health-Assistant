(() => {
  'use strict';

  const STORAGE = {
    medicines: 'pulse-desk-medicines',
    appointments: 'pulse-desk-appointments',
    profile: 'pulse-desk-profile',
    savedResources: 'pulse-desk-saved-resources',
    theme: 'pulse-desk-theme'
  };

  const resources = [
    {
      id: 'sleep', category: 'sleep', categoryLabel: 'Sleep', icon: 'moon-star', readTime: '4 min read',
      title: 'Healthy sleep habits',
      summary: 'A few practical ways to make rest more regular, calmer, and easier to protect.',
      body: '<p>Sleep needs vary from person to person, but consistent routines can make it easier to notice what helps you rest. Think of this as a gentle checklist, not a rulebook.</p><h3>Try a small reset</h3><ul><li>Keep a regular wind-down window when possible.</li><li>Make your room comfortable, quiet, and as dark as practical.</li><li>Limit caffeine late in the day if you notice it affects your sleep.</li><li>If sleep problems persist or affect daily life, speak with a qualified healthcare professional.</li></ul><p>Avoid using a general guide to self-diagnose. A clinician can help explore persistent sleep concerns in context.</p>',
      sourceName: 'World Health Organization — Sleep', sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/sleep'
    },
    {
      id: 'hydration', category: 'nutrition', categoryLabel: 'Nutrition', icon: 'droplets', readTime: '3 min read',
      title: 'Hydration, simply',
      summary: 'Understand everyday fluid habits without chasing a one-size-fits-all number.',
      body: '<p>Hydration needs can change with activity, weather, diet, age, and health conditions. Rather than following a single universal target, pay attention to thirst and the advice that applies to you.</p><h3>Make it easier</h3><ul><li>Keep water available during your normal day.</li><li>Include water-rich foods such as fruits and vegetables.</li><li>Take extra care in hot conditions or during activity.</li><li>If you have a condition that changes fluid needs, follow your clinician’s guidance.</li></ul>',
      sourceName: 'World Health Organization — Healthy diet', sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet'
    },
    {
      id: 'balanced-diet', category: 'nutrition', categoryLabel: 'Nutrition', icon: 'salad', readTime: '5 min read',
      title: 'A balanced plate',
      summary: 'A flexible look at variety, moderation, and making nutritious choices feel practical.',
      body: '<p>Balanced eating is about patterns over time, not a perfect meal. Variety helps bring different nutrients and makes eating more enjoyable.</p><h3>Helpful anchors</h3><ul><li>Include a mix of vegetables, fruits, whole grains, and protein sources.</li><li>Choose minimally processed foods often, while leaving room for enjoyment.</li><li>Notice how portions and timing fit your routine rather than copying someone else’s plan.</li><li>For allergies, pregnancy, medical conditions, or specific goals, seek qualified nutrition advice.</li></ul>',
      sourceName: 'World Health Organization — Healthy diet', sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet'
    },
    {
      id: 'movement', category: 'movement', categoryLabel: 'Movement', icon: 'footprints', readTime: '4 min read',
      title: 'Movement that fits your day',
      summary: 'Ideas for adding comfortable movement without turning wellbeing into a performance metric.',
      body: '<p>Regular physical activity can support overall wellbeing. The best starting point is often a form of movement you can do safely and repeat.</p><h3>Start where you are</h3><ul><li>Break up long periods of sitting with short movement breaks.</li><li>Choose activities that match your current comfort and ability.</li><li>Build gradually and pause if something feels painful or unusual.</li><li>Ask a professional for tailored guidance if you have a health concern or are returning after an injury.</li></ul>',
      sourceName: 'World Health Organization — Physical activity', sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity'
    },
    {
      id: 'stress', category: 'wellbeing', categoryLabel: 'Wellbeing', icon: 'cloud-sun', readTime: '4 min read',
      title: 'Everyday stress support',
      summary: 'Grounding ideas for a busy day, with a clear reminder that support is available when needed.',
      body: '<p>Stress is a common response to demands, but it can become difficult to manage. Small pauses, social connection, and a predictable routine can be useful starting points.</p><h3>Try one low-pressure action</h3><ul><li>Name the next single task instead of holding the whole day at once.</li><li>Take a slow breath and relax your shoulders before moving on.</li><li>Talk to someone you trust when a problem feels too large to hold alone.</li><li>If stress is persistent, overwhelming, or affecting safety, seek professional support.</li></ul>',
      sourceName: 'World Health Organization — Mental health', sourceUrl: 'https://www.who.int/health-topics/mental-health'
    },
    {
      id: 'hygiene', category: 'prevention', categoryLabel: 'Prevention', icon: 'hand-wash', readTime: '3 min read',
      title: 'Personal hygiene basics',
      summary: 'Simple habits that can help reduce the spread of germs in everyday settings.',
      body: '<p>Good hygiene habits are practical actions that help protect you and the people around you. Local guidance may vary depending on the situation.</p><h3>Everyday reminders</h3><ul><li>Wash hands with soap and water at useful moments, such as before eating.</li><li>Cover coughs and sneezes and dispose of tissues appropriately.</li><li>Keep frequently touched surfaces reasonably clean.</li><li>Follow public health guidance during outbreaks or specific exposure situations.</li></ul>',
      sourceName: 'World Health Organization — Hand hygiene', sourceUrl: 'https://www.who.int/teams/integrated-health-services/infection-prevention-control/hand-hygiene'
    },
    {
      id: 'checkups', category: 'prevention', categoryLabel: 'Prevention', icon: 'stethoscope', readTime: '4 min read',
      title: 'Routine checkups',
      summary: 'Why preventive conversations are personal, and how to prepare useful questions.',
      body: '<p>Preventive care depends on age, history, location, risk factors, and the guidance of a healthcare professional. A routine visit is an opportunity to ask questions and review what is relevant to you.</p><h3>Prepare for a visit</h3><ul><li>Write down symptoms, questions, and changes you have noticed.</li><li>Bring an accurate list of medicines and personal notes.</li><li>Ask which screenings or vaccinations are appropriate for you.</li><li>Confirm the follow-up plan and when to seek help sooner.</li></ul>',
      sourceName: 'World Health Organization — Primary health care', sourceUrl: 'https://www.who.int/health-topics/primary-health-care'
    },
    {
      id: 'when-help', category: 'wellbeing', categoryLabel: 'Wellbeing', icon: 'triangle-alert', readTime: '3 min read',
      title: 'When to seek professional help',
      summary: 'A plain-language reminder to avoid relying on a dashboard when something feels urgent.',
      body: '<p>General information cannot tell you what a symptom means. A qualified professional can assess your situation with the right context.</p><h3>Reach out when</h3><ul><li>A new or worsening concern is affecting daily life.</li><li>You are unsure whether a situation is urgent or safe to manage alone.</li><li>You need guidance tailored to a condition, medicine, age, pregnancy, or injury.</li><li>There is immediate danger: contact local emergency services directly.</li></ul>',
      sourceName: 'World Health Organization — Health topics', sourceUrl: 'https://www.who.int/health-topics'
    }
  ];

  const defaultState = {
    medicines: [],
    appointments: [],
    profile: { name: 'Lakshmiprasanna' },
    savedResources: [],
    theme: 'dark'
  };

  const state = {
    medicines: readStorage(STORAGE.medicines, defaultState.medicines),
    appointments: readStorage(STORAGE.appointments, defaultState.appointments),
    profile: readStorage(STORAGE.profile, defaultState.profile),
    savedResources: readStorage(STORAGE.savedResources, defaultState.savedResources),
    theme: localStorage.getItem(STORAGE.theme) || defaultState.theme,
    activeView: 'dashboard',
    medicineFilter: 'upcoming',
    appointmentFilter: 'upcoming',
    calendarCursor: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    selectedCalendarDate: dateKey(new Date()),
    pendingConfirm: null,
    activeResource: null
  };

  if (state.profile?.name === 'Jordan Doe') {
    state.profile.name = 'Lakshmiprasanna';
    localStorage.setItem(STORAGE.profile, JSON.stringify(state.profile));
  }

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  function readStorage(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value ?? fallback;
    } catch (error) {
      return fallback;
    }
  }

  function persist() {
    localStorage.setItem(STORAGE.medicines, JSON.stringify(state.medicines));
    localStorage.setItem(STORAGE.appointments, JSON.stringify(state.appointments));
    localStorage.setItem(STORAGE.profile, JSON.stringify(state.profile));
    localStorage.setItem(STORAGE.savedResources, JSON.stringify(state.savedResources));
  }

  function dateKey(date) {
    const d = date instanceof Date ? date : new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function parseDateKey(key) {
    if (!key) return new Date(NaN);
    const [year, month, day] = key.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  function formatDate(key, options = { month: 'short', day: 'numeric', year: 'numeric' }) {
    const date = parseDateKey(key);
    if (Number.isNaN(date.getTime())) return 'Unknown date';
    return new Intl.DateTimeFormat('en', options).format(date);
  }

  function formatTime(time) {
    if (!time) return 'No time set';
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date(2000, 0, 1, hours, minutes);
    return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(date);
  }

  function formatMonth(date) {
    return new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(date);
  }

  function escapeHTML(value = '') {
    return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  }

  function uid(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }

  function isAppointmentPast(appointment) {
    const stamp = new Date(`${appointment.date}T${appointment.time || '23:59'}`).getTime();
    return Number.isFinite(stamp) && stamp < Date.now();
  }

  function sortedAppointments() {
    return [...state.appointments].sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`));
  }

  function upcomingAppointments() {
    return sortedAppointments().filter(appointment => !isAppointmentPast(appointment));
  }

  function initials(name) {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase() || 'JD';
  }

  function refreshIcons() {
    if (window.lucide?.createIcons) window.lucide.createIcons();
  }

  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'error' : ''}`;
    toast.innerHTML = `<i data-lucide="${type === 'error' ? 'circle-alert' : 'check-circle-2'}"></i><span>${escapeHTML(message)}</span>`;
    $('#toastRegion').appendChild(toast);
    refreshIcons();
    window.setTimeout(() => { toast.classList.add('fade-out'); window.setTimeout(() => toast.remove(), 260); }, 3400);
  }

  function updateHeaderDate() {
    const text = new Intl.DateTimeFormat('en', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date());
    const eyebrow = $('.dashboard-intro .eyebrow');
    if (eyebrow) eyebrow.innerHTML = `<span class="eyebrow-line"></span> ${text}`;
  }

  function showView(viewName) {
    const view = $(`#view-${viewName}`);
    if (!view) return;
    state.activeView = viewName;
    $$('.view').forEach(section => {
      const active = section.dataset.view === viewName;
      section.hidden = !active;
      section.classList.toggle('is-visible', active);
    });
    $$('[data-view-link]').forEach(link => link.classList.toggle('is-active', link.dataset.viewLink === viewName));
    const label = ({ dashboard: 'Dashboard', medicines: 'Medicine reminders', appointments: 'My appointments', health: 'Health information', hospitals: 'Nearby hospitals', emergency: 'Emergency access', settings: 'Profile & settings' })[viewName] || 'Dashboard';
    $('#breadcrumbLabel').textContent = label;
    if (viewName === 'health') renderResources();
    if (viewName === 'hospitals') $('#hospitalLocation')?.focus({ preventScroll: true });
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    refreshIcons();
  }

  function closeMobileMenu() {
    $('#sidebar').classList.remove('is-open');
    $('#mobileScrim').classList.remove('is-visible');
  }

  function toggleMobileMenu() {
    const open = $('#sidebar').classList.toggle('is-open');
    $('#mobileScrim').classList.toggle('is-visible', open);
  }

  function renderStats() {
    const today = dateKey(new Date());
    const todayMedicines = state.medicines.filter(medicine => !medicine.completed && (!medicine.startDate || medicine.startDate <= today));
    const upcoming = upcomingAppointments();
    const completed = state.medicines.filter(medicine => medicine.completed);
    const stats = [
      { label: "Today's reminders", value: todayMedicines.length, helper: todayMedicines.length ? 'Personal entries to check' : 'Add a routine to begin', icon: 'pill', tone: 'blue' },
      { label: 'Upcoming visits', value: upcoming.length, helper: upcoming.length ? 'Dates you entered' : 'No visits saved yet', icon: 'calendar-clock', tone: 'teal' },
      { label: 'Completed reminders', value: completed.length, helper: completed.length ? 'Nice work keeping track' : 'Marked done by you', icon: 'circle-check', tone: 'purple' },
      { label: 'Saved resources', value: state.savedResources.length, helper: state.savedResources.length ? 'Reading list on this device' : 'Save a guide to see it here', icon: 'bookmark', tone: 'amber' }
    ];
    $('#dashboardStats').innerHTML = stats.map(stat => `<article class="card stat-card stat-${stat.tone}"><div class="stat-top"><span class="stat-label">${stat.label}</span><span class="stat-icon"><i data-lucide="${stat.icon}"></i></span></div><div class="stat-value">${stat.value}</div><div class="stat-helper">${stat.helper}</div></article>`).join('');
    $('#medicineNavCount').textContent = state.medicines.filter(item => !item.completed).length;
    $('#appointmentNavCount').textContent = upcoming.length;
    $('#medicineHeadingCount').textContent = state.medicines.length;
  }

  function renderActivityChart() {
    const activity = [{ day: 'M', one: 58, two: 34 }, { day: 'T', one: 77, two: 48 }, { day: 'W', one: 45, two: 68 }, { day: 'T', one: 87, two: 42 }, { day: 'F', one: 63, two: 74 }, { day: 'S', one: 37, two: 52 }, { day: 'S', one: 68, two: 79 }];
    $('#activityChart').innerHTML = activity.map(item => `<div class="chart-day" data-day="${item.day}"><span class="chart-bar chart-bar-blue" style="height:${item.one}%"></span><span class="chart-bar chart-bar-teal" style="height:${item.two}%"></span></div>`).join('');
  }

  function renderDashboardAppointments() {
    const target = $('#dashboardAppointments');
    const appointments = upcomingAppointments().slice(0, 3);
    if (!appointments.length) {
      target.innerHTML = `<div class="stack-list-empty"><div><p>No upcoming appointments saved.</p><button class="text-button" type="button" data-action="quick-add-appointment">Add the next visit <i data-lucide="arrow-right"></i></button></div></div>`;
      return;
    }
    target.innerHTML = appointments.map(appointment => `<div class="stack-item"><div class="stack-item-date"><strong>${parseDateKey(appointment.date).getDate()}</strong><span>${new Intl.DateTimeFormat('en', { month: 'short' }).format(parseDateKey(appointment.date))}</span></div><div class="stack-item-copy"><strong>${escapeHTML(appointment.doctor)}</strong><span>${escapeHTML(appointment.hospital)} · ${escapeHTML(appointment.purpose)}</span></div><span class="stack-item-time">${formatTime(appointment.time)}</span></div>`).join('');
  }

  function renderCalendar() {
    const cursor = state.calendarCursor;
    $('#calendarMonthLabel').textContent = formatMonth(cursor);
    const grid = $('#calendarGrid');
    const firstDay = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
    const daysInMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
    const mondayOffset = (firstDay.getDay() + 6) % 7;
    const appointmentDates = new Set(state.appointments.map(appointment => appointment.date));
    const cells = [];
    for (let i = 0; i < mondayOffset; i += 1) cells.push('<span class="calendar-day is-empty" aria-hidden="true"></span>');
    for (let day = 1; day <= daysInMonth; day += 1) {
      const key = dateKey(new Date(cursor.getFullYear(), cursor.getMonth(), day));
      const classes = ['calendar-day'];
      if (key === dateKey(new Date())) classes.push('is-today');
      if (key === state.selectedCalendarDate) classes.push('is-selected');
      if (appointmentDates.has(key)) classes.push('has-appointment');
      cells.push(`<button class="${classes.join(' ')}" type="button" data-calendar-date="${key}" aria-label="${formatDate(key, { month: 'long', day: 'numeric', year: 'numeric' })}${appointmentDates.has(key) ? ', has appointment' : ''}">${day}</button>`);
    }
    grid.innerHTML = cells.join('');
    renderSelectedDate();
  }

  function renderSelectedDate() {
    const label = $('#selectedDateLabel');
    const appointmentBox = $('#selectedDateAppointments');
    if (!state.selectedCalendarDate) { label.textContent = 'Select a date'; appointmentBox.innerHTML = ''; return; }
    label.textContent = formatDate(state.selectedCalendarDate, { weekday: 'short', month: 'short', day: 'numeric' });
    const appointments = sortedAppointments().filter(item => item.date === state.selectedCalendarDate);
    appointmentBox.innerHTML = appointments.length ? appointments.map(item => `<div class="mini-selected-appt"><span class="selected-dot"></span><span><strong>${escapeHTML(item.doctor)}</strong> · ${formatTime(item.time)}</span></div>`).join('') : '<span>No appointments saved for this date.</span>';
  }

  function renderMedicines() {
    const isCompleted = state.medicineFilter === 'completed';
    const medicines = state.medicines.filter(item => Boolean(item.completed) === isCompleted).sort((a, b) => `${a.startDate || '0000-00-00'}T${a.time}`.localeCompare(`${b.startDate || '0000-00-00'}T${b.time}`));
    const target = $('#medicineList');
    if (!medicines.length) {
      const copy = isCompleted ? 'Completed reminders will settle here once you mark one done.' : 'No active reminders yet. Add a personal note to keep the next step visible.';
      target.innerHTML = `<div class="empty-records"><div><div class="empty-record-icon"><i data-lucide="${isCompleted ? 'circle-check' : 'pill'}"></i></div><h3>${isCompleted ? 'Nothing completed yet' : 'Your routine starts here'}</h3><p>${copy}</p>${!isCompleted ? '<button class="button button-primary button-small" type="button" data-action="toggle-medicine-form"><i data-lucide="plus"></i> Add first reminder</button>' : ''}</div></div>`;
      return;
    }
    target.innerHTML = medicines.map(medicine => `<div class="record-row"><div class="record-leading ${medicine.completed ? 'teal' : ''}"><i data-lucide="${medicine.completed ? 'circle-check' : 'pill'}"></i></div><div class="record-main"><strong>${escapeHTML(medicine.name)}</strong><span>${escapeHTML(medicine.instructions)} · ${escapeHTML(medicine.frequency || 'Daily')}${medicine.notes ? ` · ${escapeHTML(medicine.notes)}` : ''}</span></div><div class="record-meta"><span>${formatTime(medicine.time)}</span>${medicine.startDate ? `<small>from ${formatDate(medicine.startDate, { month: 'short', day: 'numeric' })}</small>` : ''}</div><div class="record-actions"><button class="record-action complete" type="button" data-record-action="toggle-medicine" data-record-id="${medicine.id}" aria-label="${medicine.completed ? 'Restore' : 'Mark complete'} ${escapeHTML(medicine.name)}"><i data-lucide="${medicine.completed ? 'rotate-ccw' : 'check'}"></i></button><button class="record-action" type="button" data-record-action="edit-medicine" data-record-id="${medicine.id}" aria-label="Edit ${escapeHTML(medicine.name)}"><i data-lucide="pencil"></i></button><button class="record-action delete" type="button" data-record-action="delete-medicine" data-record-id="${medicine.id}" aria-label="Delete ${escapeHTML(medicine.name)}"><i data-lucide="trash-2"></i></button></div></div>`).join('');
  }

  function renderAppointments() {
    const query = ($('#appointmentSearch')?.value || '').trim().toLowerCase();
    const filtered = sortedAppointments().filter(item => {
      const statusMatches = state.appointmentFilter === 'all' || (state.appointmentFilter === 'past' ? isAppointmentPast(item) : !isAppointmentPast(item));
      const queryMatches = !query || `${item.doctor} ${item.hospital} ${item.purpose}`.toLowerCase().includes(query);
      return statusMatches && queryMatches;
    });
    const target = $('#appointmentList');
    if (!filtered.length) {
      const title = query ? 'No matching appointments' : state.appointmentFilter === 'past' ? 'No past appointments' : 'No appointments saved';
      const copy = query ? 'Try a doctor or clinic name, then clear the search to see all records.' : 'Add a personal record to connect it to the dashboard calendar.';
      target.innerHTML = `<div class="empty-records"><div><div class="empty-record-icon"><i data-lucide="calendar-search"></i></div><h3>${title}</h3><p>${copy}</p>${!query && state.appointmentFilter !== 'past' ? '<button class="button button-primary button-small" type="button" data-action="toggle-appointment-form"><i data-lucide="plus"></i> Add appointment</button>' : ''}</div></div>`;
      return;
    }
    target.innerHTML = filtered.map(appointment => { const past = isAppointmentPast(appointment); return `<div class="record-row"><div class="record-leading ${past ? 'amber' : 'teal'}"><i data-lucide="${past ? 'calendar-check' : 'calendar-clock'}"></i></div><div class="record-main"><strong>${escapeHTML(appointment.doctor)}</strong><span>${escapeHTML(appointment.hospital)} · ${escapeHTML(appointment.purpose)}${appointment.notes ? ` · ${escapeHTML(appointment.notes)}` : ''}</span></div><div class="record-meta"><span>${formatDate(appointment.date, { month: 'short', day: 'numeric', year: 'numeric' })}</span><small>${formatTime(appointment.time)}</small></div><span class="status-chip ${past ? 'past' : ''}"><i data-lucide="${past ? 'history' : 'clock-3'}"></i>${past ? 'Past' : 'Upcoming'}</span><div class="record-actions"><button class="record-action" type="button" data-record-action="edit-appointment" data-record-id="${appointment.id}" aria-label="Edit appointment with ${escapeHTML(appointment.doctor)}"><i data-lucide="pencil"></i></button><button class="record-action delete" type="button" data-record-action="delete-appointment" data-record-id="${appointment.id}" aria-label="Delete appointment with ${escapeHTML(appointment.doctor)}"><i data-lucide="trash-2"></i></button></div></div>`; }).join('');
  }

  function renderResources() {
    const query = ($('#healthSearch')?.value || '').trim().toLowerCase();
    const category = $('#healthCategory')?.value || 'all';
    const filtered = resources.filter(resource => {
      const matchesCategory = category === 'all' || resource.category === category;
      const matchesQuery = !query || `${resource.title} ${resource.summary} ${resource.categoryLabel}`.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
    $('#resourceGrid').innerHTML = filtered.length ? filtered.map(resource => `<article class="resource-card card"><div class="resource-card-top"><div><span class="resource-category">${resource.categoryLabel}</span><div class="resource-icon"><i data-lucide="${resource.icon}"></i></div></div><button class="save-resource ${state.savedResources.includes(resource.id) ? 'is-saved' : ''}" type="button" data-resource-action="save" data-resource-id="${resource.id}" aria-label="${state.savedResources.includes(resource.id) ? 'Remove' : 'Save'} ${escapeHTML(resource.title)}"><i data-lucide="${state.savedResources.includes(resource.id) ? 'bookmark-check' : 'bookmark'}"></i></button></div><h3>${escapeHTML(resource.title)}</h3><p>${escapeHTML(resource.summary)}</p><div class="resource-card-bottom"><span class="resource-time">${resource.readTime}</span><button class="resource-open" type="button" data-resource-action="open" data-resource-id="${resource.id}">Read guide <i data-lucide="arrow-up-right"></i></button></div></article>`).join('') : `<div class="empty-records card" style="grid-column:1/-1"><div><div class="empty-record-icon"><i data-lucide="search-x"></i></div><h3>No guides found</h3><p>Try another keyword or return to all categories.</p></div></div>`;
  }

  function openResource(id) {
    const resource = resources.find(item => item.id === id);
    if (!resource) return;
    state.activeResource = id;
    $('#healthLibraryView').hidden = true;
    $('#articleReader').hidden = false;
    $('#articleContent').innerHTML = `<div class="article-header"><span class="resource-category">${resource.categoryLabel} · ${resource.readTime}</span><h2>${escapeHTML(resource.title)}</h2><p>${escapeHTML(resource.summary)}</p></div><div class="article-body">${resource.body}</div><div class="article-footer"><a class="external-link" href="${resource.sourceUrl}" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link"></i> Read source: ${escapeHTML(resource.sourceName)}</a><button class="button button-secondary button-small" type="button" data-resource-action="save" data-resource-id="${resource.id}"><i data-lucide="${state.savedResources.includes(resource.id) ? 'bookmark-check' : 'bookmark'}"></i> ${state.savedResources.includes(resource.id) ? 'Saved locally' : 'Save for later'}</button></div>`;
    refreshIcons();
  }

  function closeResource() {
    state.activeResource = null;
    $('#articleReader').hidden = true;
    $('#healthLibraryView').hidden = false;
    renderResources();
  }

  function toggleResourceSave(id) {
    if (state.savedResources.includes(id)) {
      state.savedResources = state.savedResources.filter(item => item !== id);
      showToast('Removed from your local reading list.');
    } else {
      state.savedResources.push(id);
      showToast('Saved to your local reading list.');
    }
    persist();
    renderStats();
    if (state.activeResource === id) openResource(id); else renderResources();
    refreshIcons();
  }

  function setFormError(inputId, message) {
    const input = $(`#${inputId}`);
    const field = input?.closest('.field');
    if (!input || !field) return;
    field.classList.toggle('has-error', Boolean(message));
    const error = $(`[data-error-for="${inputId}"]`);
    if (error) error.textContent = message || '';
  }

  function clearFormErrors(form) {
    $$('.field', form).forEach(field => field.classList.remove('has-error'));
    $$('.field-error', form).forEach(error => { error.textContent = ''; });
  }

  function resetMedicineForm() {
    $('#medicineForm').reset();
    $('#medicineId').value = '';
    $('#medicineFormTitle').textContent = 'New medicine reminder';
    clearFormErrors($('#medicineForm'));
  }

  function openMedicineForm(medicine = null) {
    $('#medicineFormCard').hidden = false;
    if (medicine) {
      $('#medicineId').value = medicine.id;
      $('#medicineName').value = medicine.name;
      $('#medicineTime').value = medicine.time;
      $('#medicineStartDate').value = medicine.startDate || '';
      $('#medicineFrequency').value = medicine.frequency || 'Daily';
      $('#medicineInstructions').value = medicine.instructions;
      $('#medicineNotes').value = medicine.notes || '';
      $('#medicineFormTitle').textContent = 'Edit medicine reminder';
    } else {
      resetMedicineForm();
      $('#medicineTime').value = '08:00';
    }
    window.setTimeout(() => $('#medicineName').focus(), 80);
  }

  function closeMedicineForm() { $('#medicineFormCard').hidden = true; resetMedicineForm(); }

  function handleMedicineSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    clearFormErrors(form);
    const values = { id: $('#medicineId').value, name: $('#medicineName').value.trim(), time: $('#medicineTime').value, startDate: $('#medicineStartDate').value, frequency: $('#medicineFrequency').value, instructions: $('#medicineInstructions').value.trim(), notes: $('#medicineNotes').value.trim() };
    let valid = true;
    if (!values.name) { setFormError('medicineName', 'Add the name of your medicine.'); valid = false; }
    if (!values.time) { setFormError('medicineTime', 'Choose a reminder time.'); valid = false; }
    if (!values.instructions) { setFormError('medicineInstructions', 'Enter your own professional instructions.'); valid = false; }
    if (!valid) { showToast('Check the highlighted reminder fields.', 'error'); return; }
    if (values.startDate && !/^\d{4}-\d{2}-\d{2}$/.test(values.startDate)) { setFormError('medicineStartDate', 'Use a valid start date.'); return; }
    const existing = state.medicines.find(item => item.id === values.id);
    if (existing) Object.assign(existing, values); else state.medicines.push({ ...values, id: uid('med'), completed: false, createdAt: Date.now() });
    persist(); renderAll(); closeMedicineForm(); showToast(existing ? 'Reminder updated.' : 'Reminder saved.');
  }

  function resetAppointmentForm() { $('#appointmentForm').reset(); $('#appointmentId').value = ''; $('#appointmentFormTitle').textContent = 'New appointment'; clearFormErrors($('#appointmentForm')); }

  function openAppointmentForm(appointment = null) {
    $('#appointmentFormCard').hidden = false;
    if (appointment) {
      $('#appointmentId').value = appointment.id;
      $('#appointmentDoctor').value = appointment.doctor;
      $('#appointmentHospital').value = appointment.hospital;
      $('#appointmentDate').value = appointment.date;
      $('#appointmentTime').value = appointment.time;
      $('#appointmentPurpose').value = appointment.purpose;
      $('#appointmentNotes').value = appointment.notes || '';
      $('#appointmentFormTitle').textContent = 'Edit appointment';
    } else {
      resetAppointmentForm();
      $('#appointmentDate').value = dateKey(new Date());
      $('#appointmentTime').value = '10:00';
    }
    window.setTimeout(() => $('#appointmentDoctor').focus(), 80);
  }

  function closeAppointmentForm() { $('#appointmentFormCard').hidden = true; resetAppointmentForm(); }

  function handleAppointmentSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    clearFormErrors(form);
    const values = { id: $('#appointmentId').value, doctor: $('#appointmentDoctor').value.trim(), hospital: $('#appointmentHospital').value.trim(), date: $('#appointmentDate').value, time: $('#appointmentTime').value, purpose: $('#appointmentPurpose').value.trim(), notes: $('#appointmentNotes').value.trim() };
    let valid = true;
    [['appointmentDoctor', values.doctor, 'Add a doctor or provider name.'], ['appointmentHospital', values.hospital, 'Add the hospital or clinic.'], ['appointmentDate', values.date, 'Choose an appointment date.'], ['appointmentTime', values.time, 'Choose an appointment time.'], ['appointmentPurpose', values.purpose, 'Add the purpose of the visit.']].forEach(([id, value, message]) => { if (!value) { setFormError(id, message); valid = false; } });
    if (!valid) { showToast('Check the highlighted appointment fields.', 'error'); return; }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(values.date)) { setFormError('appointmentDate', 'Use a valid appointment date.'); return; }
    if (!/^\d{2}:\d{2}$/.test(values.time)) { setFormError('appointmentTime', 'Use a valid appointment time.'); return; }
    const existing = state.appointments.find(item => item.id === values.id);
    if (!existing && values.date < dateKey(new Date())) { setFormError('appointmentDate', 'Choose today or a future date for a new visit.'); showToast('New appointments cannot be dated in the past.', 'error'); return; }
    if (existing) Object.assign(existing, values); else state.appointments.push({ ...values, id: uid('appt'), createdAt: Date.now() });
    persist(); renderAll(); closeAppointmentForm(); showToast(existing ? 'Appointment updated.' : 'Appointment saved locally.');
  }

  function requestConfirmation({ title, copy, confirmText = 'Confirm', icon = 'trash-2', onConfirm }) {
    state.pendingConfirm = onConfirm;
    $('#confirmTitle').textContent = title;
    $('#confirmCopy').textContent = copy;
    $('#confirmAction').textContent = confirmText;
    $('#confirmIcon').innerHTML = `<i data-lucide="${icon}"></i>`;
    $('#modalBackdrop').hidden = false;
    refreshIcons();
    window.setTimeout(() => $('#confirmAction').focus(), 60);
  }

  function closeModal() { state.pendingConfirm = null; $('#modalBackdrop').hidden = true; }

  function handleRecordAction(action, id) {
    if (action === 'toggle-medicine') {
      const medicine = state.medicines.find(item => item.id === id);
      if (!medicine) return;
      medicine.completed = !medicine.completed;
      medicine.completedAt = medicine.completed ? Date.now() : null;
      persist(); renderAll(); showToast(medicine.completed ? 'Reminder marked complete.' : 'Reminder moved back to upcoming.');
    }
    if (action === 'edit-medicine') {
      showView('medicines');
      const medicine = state.medicines.find(item => item.id === id);
      if (medicine) openMedicineForm(medicine);
    }
    if (action === 'delete-medicine') {
      const medicine = state.medicines.find(item => item.id === id);
      if (!medicine) return;
      requestConfirmation({ title: 'Delete this reminder?', copy: `“${medicine.name}” will be removed from this browser.`, confirmText: 'Delete reminder', onConfirm: () => { state.medicines = state.medicines.filter(item => item.id !== id); persist(); renderAll(); showToast('Reminder deleted.'); } });
    }
    if (action === 'edit-appointment') {
      showView('appointments');
      const appointment = state.appointments.find(item => item.id === id);
      if (appointment) openAppointmentForm(appointment);
    }
    if (action === 'delete-appointment') {
      const appointment = state.appointments.find(item => item.id === id);
      if (!appointment) return;
      requestConfirmation({ title: 'Delete this appointment?', copy: `The personal record for ${appointment.doctor} will be removed.`, confirmText: 'Delete appointment', onConfirm: () => { state.appointments = state.appointments.filter(item => item.id !== id); persist(); renderAll(); showToast('Appointment deleted.'); } });
    }
  }

  function handleHospitalSearch(location, fromLocation = false) {
    const clean = location.trim();
    if (!clean) { setFormError('hospitalLocation', 'Enter a city, locality, postal code, or landmark.'); showToast('Add a location to search.', 'error'); return; }
    const query = fromLocation ? `hospitals near ${clean}` : `hospitals near ${clean}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    $('#hospitalResultCard').innerHTML = `<div class="hospital-result"><span class="result-kicker"><i data-lucide="map-pin-check"></i> Search ready</span><h2 class="result-location">Hospitals near ${escapeHTML(clean)}</h2><p class="result-copy">This opens a live map search for the location you chose. The demo does not verify or rank the results itself.</p><div class="result-actions"><a class="button button-primary" href="${url}" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link"></i> Open in Google Maps</a><button class="button button-secondary" type="button" data-action="hospital-reset">New search</button></div><div class="result-meta"><div><strong>Source</strong><span>Google Maps search</span></div><div><strong>Data</strong><span>Live map results</span></div><div><strong>Privacy</strong><span>Search text leaves browser</span></div></div></div>`;
    refreshIcons();
    showToast('Map search link is ready.');
  }

  function useCurrentLocation() {
    if (!navigator.geolocation) { showToast('This browser does not offer location access. Use manual search instead.', 'error'); return; }
    showToast('Asking for location permission…');
    navigator.geolocation.getCurrentPosition(position => { const { latitude, longitude } = position.coords; handleHospitalSearch(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`, true); }, () => showToast('Location access was denied or unavailable. Manual search still works.', 'error'), { enableHighAccuracy: false, timeout: 9000, maximumAge: 60000 });
  }

  function updateNotifications() {
    const upcoming = upcomingAppointments();
    const pending = state.medicines.filter(item => !item.completed);
    const items = [];
    if (pending.length) items.push(`<div class="notification-item"><i data-lucide="pill"></i><span>${pending.length} active reminder${pending.length === 1 ? '' : 's'} in your local routine.</span></div>`);
    if (upcoming.length) items.push(`<div class="notification-item"><i data-lucide="calendar-clock"></i><span>Next visit: ${formatDate(upcoming[0].date, { month: 'short', day: 'numeric' })} at ${formatTime(upcoming[0].time)}.</span></div>`);
    if (!items.length) items.push('<div class="notification-item"><i data-lucide="sparkles"></i><span>All quiet here. Add a personal reminder or appointment when you are ready.</span></div>');
    $('#notificationContent').innerHTML = items.join('');
    $('#notificationDot').hidden = !pending.length && !upcoming.length;
  }

  function renderProfile() {
    const name = state.profile.name || 'Lakshmiprasanna';
    $('#topProfileName').textContent = name;
    $('#topAvatar').textContent = initials(name);
    $('#settingsAvatar').textContent = initials(name);
    $('#profileName').value = name;
  }

  function renderAll() {
    renderStats(); renderActivityChart(); renderDashboardAppointments(); renderCalendar(); renderMedicines(); renderAppointments(); updateNotifications(); renderProfile(); refreshIcons();
  }

  function applyTheme() {
    const isLight = state.theme === 'light';
    document.documentElement.classList.toggle('light-mode', isLight);
    const toggle = $('#themeToggle');
    if (toggle) toggle.checked = isLight;
    const label = $('#themeToggleLabel');
    if (label) label.textContent = isLight ? 'Daylight' : 'Midnight';
  }

  function handleGlobalSearch(value) {
    const query = value.trim();
    if (state.activeView === 'health') { $('#healthSearch').value = query; renderResources(); return; }
    if (state.activeView === 'appointments') { $('#appointmentSearch').value = query; renderAppointments(); return; }
    if (!query) return;
    const match = [{ key: 'medicines', words: 'medicine reminder pill dose' }, { key: 'appointments', words: 'appointment doctor clinic visit calendar' }, { key: 'health', words: 'health information sleep hydration nutrition wellness' }, { key: 'hospitals', words: 'hospital clinic map nearby care' }, { key: 'emergency', words: 'emergency urgent 112 help' }, { key: 'settings', words: 'settings profile privacy' }].find(item => item.words.includes(query.toLowerCase()));
    if (match) { showView(match.key); $('#globalSearch').value = ''; } else showToast('Try a section name or search from Health information.', 'error');
  }

  function bindEvents() {
    document.addEventListener('click', event => {
      const viewLink = event.target.closest('[data-view-link]');
      if (viewLink) { event.preventDefault(); showView(viewLink.dataset.viewLink); return; }
      const actionEl = event.target.closest('[data-action]');
      if (actionEl) {
        const action = actionEl.dataset.action;
        if (action === 'toggle-menu') toggleMobileMenu();
        if (action === 'close-notifications') { $('#notificationPanel').hidden = true; }
        if (action === 'toggle-notifications') { const panel = $('#notificationPanel'); panel.hidden = !panel.hidden; actionEl.setAttribute('aria-expanded', String(!panel.hidden)); }
        if (action === 'quick-add-medicine') { showView('medicines'); openMedicineForm(); }
        if (action === 'quick-add-appointment') { showView('appointments'); openAppointmentForm(); }
        if (action === 'quick-health') showView('health');
        if (action === 'quick-hospitals') showView('hospitals');
        if (action === 'toggle-medicine-form') openMedicineForm();
        if (action === 'close-medicine-form') closeMedicineForm();
        if (action === 'toggle-appointment-form') openAppointmentForm();
        if (action === 'close-appointment-form') closeAppointmentForm();
        if (action === 'calendar-prev') { state.calendarCursor = new Date(state.calendarCursor.getFullYear(), state.calendarCursor.getMonth() - 1, 1); renderCalendar(); }
        if (action === 'calendar-next') { state.calendarCursor = new Date(state.calendarCursor.getFullYear(), state.calendarCursor.getMonth() + 1, 1); renderCalendar(); }
        if (action === 'close-article') closeResource();
        if (action === 'use-location') useCurrentLocation();
        if (action === 'hospital-reset') { $('#hospitalResultCard').innerHTML = `<div class="empty-state empty-state-map"><div class="empty-icon"><i data-lucide="map"></i></div><h3>Your search will appear here</h3><p>We will show the exact search phrase and a direct map action. Live hospital names, addresses, ratings, distances, opening hours, and emergency availability require a configured places provider.</p></div>`; refreshIcons(); }
        if (action === 'emergency-maps') { showView('hospitals'); showToast('Choose a location to open nearby hospitals in a map.'); }
        if (action === 'notification-info') showToast('This demo does not request background notification permission or promise reliable reminders.');
        if (action === 'clear-data') requestConfirmation({ title: 'Clear all local demo data?', copy: 'Medicines, appointments, saved resources, and profile settings will be removed from this browser.', confirmText: 'Clear local data', icon: 'trash-2', onConfirm: () => { state.medicines = []; state.appointments = []; state.savedResources = []; state.profile = { name: 'Lakshmiprasanna' }; state.theme = 'dark'; localStorage.removeItem(STORAGE.theme); persist(); applyTheme(); renderAll(); showToast('Local demo data cleared.'); } });
        if (action === 'help') { showView('settings'); showToast('The settings page includes a short three-step tour and privacy notes.'); }
        if (action === 'logout') showToast('Demo logout is visual only — no account session exists.');
        if (action === 'close-modal') closeModal();
        return;
      }
      const record = event.target.closest('[data-record-action]');
      if (record) { handleRecordAction(record.dataset.recordAction, record.dataset.recordId); return; }
      const calendarDay = event.target.closest('[data-calendar-date]');
      if (calendarDay) { state.selectedCalendarDate = calendarDay.dataset.calendarDate; renderCalendar(); return; }
      const resourceAction = event.target.closest('[data-resource-action]');
      if (resourceAction) { if (resourceAction.dataset.resourceAction === 'open') openResource(resourceAction.dataset.resourceId); if (resourceAction.dataset.resourceAction === 'save') toggleResourceSave(resourceAction.dataset.resourceId); return; }
    });

    $('#medicineForm').addEventListener('submit', handleMedicineSubmit);
    $('#appointmentForm').addEventListener('submit', handleAppointmentSubmit);
    $('#hospitalSearchForm').addEventListener('submit', event => { event.preventDefault(); clearFormErrors(event.currentTarget); handleHospitalSearch($('#hospitalLocation').value); });
    $('#profileForm').addEventListener('submit', event => { event.preventDefault(); const name = $('#profileName').value.trim(); state.profile.name = name || 'Lakshmiprasanna'; persist(); renderProfile(); showToast('Local profile updated.'); });
    $('#themeToggle').addEventListener('change', event => { state.theme = event.target.checked ? 'light' : 'dark'; localStorage.setItem(STORAGE.theme, state.theme); applyTheme(); showToast(`${event.target.checked ? 'Daylight' : 'Midnight'} theme enabled.`); });
    $('#healthSearch').addEventListener('input', renderResources);
    $('#healthCategory').addEventListener('change', renderResources);
    $('#appointmentSearch').addEventListener('input', renderAppointments);
    $('#globalSearch').addEventListener('input', event => { if (!event.target.value) { if (state.activeView === 'health') renderResources(); if (state.activeView === 'appointments') renderAppointments(); } });
    $('#globalSearch').addEventListener('keydown', event => { if (event.key === 'Enter') handleGlobalSearch(event.target.value); });
    document.addEventListener('keydown', event => { if (event.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') { event.preventDefault(); $('#globalSearch').focus(); } if (event.key === 'Escape') { closeModal(); $('#notificationPanel').hidden = true; closeMobileMenu(); } });
    $('#modalBackdrop').addEventListener('click', event => { if (event.target === $('#modalBackdrop')) closeModal(); });
    $('#confirmAction').addEventListener('click', () => { const callback = state.pendingConfirm; closeModal(); if (callback) callback(); });
    $('#mobileScrim').addEventListener('click', closeMobileMenu);
    $$('[data-medicine-filter]').forEach(button => button.addEventListener('click', () => { state.medicineFilter = button.dataset.medicineFilter; $$('[data-medicine-filter]').forEach(item => item.classList.toggle('is-active', item === button)); renderMedicines(); refreshIcons(); }));
    $$('[data-appointment-filter]').forEach(button => button.addEventListener('click', () => { state.appointmentFilter = button.dataset.appointmentFilter; $$('[data-appointment-filter]').forEach(item => item.classList.toggle('is-active', item === button)); renderAppointments(); refreshIcons(); }));
    document.addEventListener('click', event => { if (!event.target.closest('.notification-wrap')) { $('#notificationPanel').hidden = true; } });
  }

  updateHeaderDate();
  applyTheme();
  bindEvents();
  renderAll();
})();
