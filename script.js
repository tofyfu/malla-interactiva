const ramos = [
  // 1er semestre
  { id: 'principios', nombre: 'Principios Matemáticos', semestre: 1, abre: ['biofisica'] },
  { id: 'biocelular', nombre: 'Biología Celular', semestre: 1, abre: ['anatomia'] },
  { id: 'tallerciencias', nombre: 'Taller Integrado de Ciencias', semestre: 1 },
  { id: 'introTM', nombre: 'Introducción a la Tecnología Médica', semestre: 1 },
  { id: 'ingles1', nombre: 'Inglés I', semestre: 1, abre: ['ingles2'] },
  { id: 'comunicacion', nombre: 'Taller de Competencias Comunicativas', semestre: 1 },
  { id: 'electivo1', nombre: 'Electivo Formación General I', semestre: 1, abre: ['electivo2'] },

  // 2do semestre
  { id: 'biofisica', nombre: 'Biofísica', semestre: 2, requisitos: ['principios'], abre: ['estadistica'] },
  { id: 'urgencia', nombre: 'Atención Básica de Urgencia', semestre: 2, abre: ['saludsociedad'] },
  { id: 'biomoleculas', nombre: 'Biomoléculas', semestre: 2, requisitos: ['tallerciencias'], abre: ['bioquimica'] },
  { id: 'anatomia', nombre: 'Anatomía', semestre: 2, requisitos: ['biocelular'], abre: ['fisiologia'] },
  { id: 'ingles2', nombre: 'Inglés II', semestre: 2, requisitos: ['ingles1'] },
  { id: 'electivo2', nombre: 'Electivo Formación General II', semestre: 2, requisitos: ['electivo1'], abre: ['electivo3'] },

  // 3er semestre
  { id: 'estadistica', nombre: 'Estadística y Epidemiología', semestre: 3, requisitos: ['biofisica'] },
  { id: 'histologia', nombre: 'Histología', semestre: 3, abre: ['microbasica'] },
  { id: 'bioquimica', nombre: 'Fundamentos Bioquímica', semestre: 3, requisitos: ['biomoleculas'], abre: ['bioquimica1'] },
  { id: 'fisiologia', nombre: 'Fisiología', semestre: 3, requisitos: ['anatomia'], abre: ['fisiopatologia', 'bioseguridad'] },
  { id: 'saludsociedad', nombre: 'Salud y Sociedad', semestre: 3, requisitos: ['urgencia'] },
  { id: 'electivo3', nombre: 'Electivo Formación General III', semestre: 3, requisitos: ['electivo2'] },

  // 4to semestre
  { id: 'bioseguridad', nombre: 'Bioseguridad y Pre-Analíticos', semestre: 4, requisitos: ['fisiologia'] },
  { id: 'inmunobasica', nombre: 'Inmunología Básica', semestre: 4, abre: ['hematobasica'] },
  { id: 'bioquimica1', nombre: 'Bioquímica Clínica I', semestre: 4, requisitos: ['bioquimica'], abre: ['bioquimica2'] },
  { id: 'fisiopatologia', nombre: 'Fisiopatología', semestre: 4, requisitos: ['fisiologia'], abre: ['diagnosticomolecular'] },
  { id: 'etica', nombre: 'Ética Profesional', semestre: 4 },
  { id: 'persona', nombre: 'Persona y Sentido', semestre: 4 },

  // 5to semestre
  { id: 'microbasica', nombre: 'Microbiología Básica', semestre: 5, requisitos: ['histologia'], abre: ['microclinica', 'parasito'] },
  { id: 'inmunoclinica', nombre: 'Inmunología Clínica', semestre: 5, abre: ['inmunohemo'] },
  { id: 'parasito', nombre: 'Parasitología Clínica', semestre: 5, requisitos: ['microbasica'], abre: ['integrado1'] },
  { id: 'bioquimica2', nombre: 'Bioquímica Clínica II', semestre: 5, requisitos: ['bioquimica1'], abre: ['integrado1'] },
  { id: 'gestion', nombre: 'Gestión de Calidad', semestre: 5 },
  { id: 'electivoI', nombre: 'Electivo I', semestre: 5 },
  { id: 'tallerciencias2', nombre: 'Taller Integrado en Ciencias', semestre: 5 },

  // 6to semestre
  { id: 'microclinica', nombre: 'Microbiología Clínica', semestre: 6, requisitos: ['microbasica'] },
  { id: 'diagnosticomolecular', nombre: 'Diagnóstico Molecular', semestre: 6, requisitos: ['fisiopatologia'] },
  // Repite parasito solo por apertura
  { id: 'parasito2', nombre: 'Parasitología Clínica (Rep)', semestre: 6, requisitos: ['microbasica'] },

  // 7mo semestre
  { id: 'inmunohemo', nombre: 'Inmunohematología', semestre: 7, requisitos: ['inmunoclinica'], abre: ['medtrans'] },
  { id: 'hematobasica', nombre: 'Hematología Básica', semestre: 7, requisitos: ['inmunobasica'], abre: ['hematoclinica'] },
  { id: 'integrado1', nombre: 'Integrado Clínico I', semestre: 7, requisitos: ['bioquimica2', 'parasito'], abre: ['internadomicro', 'internadoquimica'] },
  { id: 'electivoIII', nombre: 'Electivo III', semestre: 7 },

  // 8vo semestre
  { id: 'medtrans', nombre: 'Medicina Transfusional', semestre: 8, requisitos: ['inmunohemo'], abre: ['integrado2'] },
  { id: 'hematoclinica', nombre: 'Hematología Clínica', semestre: 8, requisitos: ['hematobasica'], abre: ['integrado2'] },
  { id: 'metodologia', nombre: 'Metodología de la Investigación', semestre: 8, abre: ['seminario'] },

  // 9° semestre
  { id: 'integrado2', nombre: 'Integrado Clínico II', semestre: 9, requisitos: ['medtrans', 'hematoclinica'], abre: ['internadohema', 'internadotrans'] },
  { id: 'casos', nombre: 'Análisis de Casos Clínicos', semestre: 9 },
  { id: 'empleabilidad', nombre: 'Taller de Empleabilidad', semestre: 9 },
  { id: 'seminario', nombre: 'Seminario de Investigación', semestre: 9, requisitos: ['metodologia'] },

  // 10° semestre
  { id: 'internadomicro', nombre: 'Internado Micro-Parasitología', semestre: 10, requisitos: ['integrado1'] },
  { id: 'internadoquimica', nombre: 'Internado Química Clínica', semestre: 10, requisitos: ['integrado1'] },
  { id: 'internadohema', nombre: 'Internado Hematología Clínica', semestre: 10, requisitos: ['integrado2'] },
  { id: 'internadotrans', nombre: 'Internado Medicina Transfusional', semestre: 10, requisitos: ['integrado2'] }
];

const container = document.getElementById('malla');

function crearRamos() {
  ramos.forEach(ramo => {
    const btn = document.createElement('button');
    btn.className = 'ramo bloqueado';
    btn.textContent = ramo.nombre;
    btn.id = ramo.id;
    btn.disabled = !!ramo.requisitos;

    btn.addEventListener('click', () => toggleRamo(ramo.id));
    container.appendChild(btn);
  });
  actualizarEstado();
}

function toggleRamo(id) {
  const btn = document.getElementById(id);
  if (btn.classList.contains('bloqueado')) return;

  btn.classList.toggle('aprobado');

  actualizarEstado();
}

function actualizarEstado() {
  ramos.forEach(ramo => {
    const btn = document.getElementById(ramo.id);

    if (!btn) return;

    const requisitosOk = !ramo.requisitos || ramo.requisitos.every(id => {
      const r = document.getElementById(id);
      return r && r.classList.contains('aprobado');
    });

    if (requisitosOk) {
      btn.classList.remove('bloqueado');
      btn.disabled = false;
    } else {
      btn.classList.add('bloqueado');
      btn.disabled = true;
    }

    // Si aprobado, desbloquear los siguientes
    if (btn.classList.contains('aprobado') && ramo.abre) {
      ramo.abre.forEach(id => {
        const dest = document.getElementById(id);
        if (dest) dest.classList.remove('bloqueado');
        if (dest) dest.disabled = false;
      });
    }
  });
}

crearRamos();

