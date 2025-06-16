export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Políticas comerciales y acuerdos internacionales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teorías y estrategias de política comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto e importancia de la política comercial',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Teorías de la política comercial',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Instrumentos de la política comercial internacional',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Acuerdos y tratados internacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de acuerdos comerciales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Impacto de los tratados comerciales en la economía global',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Retos y oportunidades de la política comercial internacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Principales retos de la política comercial',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Oportunidades para la integración económica',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Tosoni, G.A. & Sanchium, T-B. (2023). Hacia una política comercial inclusiva para América Latina en la pospandemia. Problemas del Desarrollo. Revista Latinoamericana de Economía , 54(214), 23-47.  ',
      link: 'https://doi.org/10.22201/iiec.20078951e.2023.214.69996',
    },
    {
      referencia:
        'Casanova Montero, A. R. & Zuaznábar Morales, I. R. (2018). El comercio internacional: teorías y políticas. Editorial Universo Sur.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/120836',
    },
    {
      referencia:
        'Granato, L. (2010). Protección del inversor extranjero y arbitraje internacional en los Tratados Bilaterales de Inversión. CAEI - Centro argentino de estudios internacionales.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/27248',
    },
    {
      referencia:
        'Moscoso Cuaresma, R. (Il.), Acosta Mantaro, J. (Il.) & Pardavé Aquino, R. (Il.). (2021). Integración económica: estrategias peruanas para la internacionalización. Universidad Peruana de Ciencias Aplicadas (UPC).   ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/201829',
    },
    {
      referencia:
        'Zaelke, D. (2002). Comercio internacional y medio ambiente: derecho, economía y política. Espacio Editorial.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/118509',
    },
    {
      referencia:
        'Reza, G. A. D. L. (2006). Integración económica en América Latina: hacia una comunidad regional en el siglo XXI. Plaza y Valdés (México). ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/36712 ',
    },
  ],
  glosario: [
    {
      termino: 'Apertura comercial',
      significado:
        'Reducción de barreras al comercio, para fomentar la integración de mercados y mejorar la competitividad económica.',
    },
    {
      termino: 'Barreras no arancelarias',
      significado:
        'Regulaciones que limitan el comercio sin aplicar impuestos, como normas técnicas, sanitarias o restricciones cuantitativas.',
    },
    {
      termino: 'Comercio estratégico',
      significado:
        'Teoría que sugiere la intervención del Estado para fortalecer industrias claves en mercados globales competitivos.',
    },
    {
      termino: 'Competencia desleal',
      significado:
        'Prácticas comerciales que otorgan ventajas injustas, como subsidios excesivos o <em>dumping</em>.',
    },
    {
      termino: 'Cuotas de importación',
      significado:
        'Límite a la cantidad de un producto extranjero que puede ingresar a un país, en un período determinado.',
    },
    {
      termino: 'Diplomacia económica',
      significado:
        'Uso de la política comercial para establecer relaciones internacionales y negociar acuerdos favorables.',
    },
    {
      termino: 'Industria naciente',
      significado:
        'Sectores emergentes que requieren protección estatal, para consolidarse, antes de competir a nivel global.',
    },
    {
      termino: 'Integración económica',
      significado:
        'Proceso en el que los países eliminan barreras comerciales y coordinan políticas económicas.',
    },
    {
      termino: 'Interdependencia comercial',
      significado:
        'Relación económica en la que los países dependen mutuamente para el suministro de bienes y servicios.',
    },
    {
      termino: 'Medidas de retorsión',
      significado:
        'Acciones comerciales impuestas en respuesta a barreras o restricciones, impuestas por otros países.',
    },
    {
      termino: 'Mercado común',
      significado:
        'Tipo de integración económica que permite libre circulación de bienes, servicios, capitales y personas, entre países miembros.',
    },
    {
      termino: 'Normas técnicas',
      significado:
        'Regulaciones que establecen estándares de calidad, seguridad y desempeño, para bienes y servicios.',
    },
    {
      termino: 'Política industrial',
      significado:
        'Estrategia gubernamental para fomentar el desarrollo y la competitividad, de sectores productivos estratégicos.',
    },
    {
      termino: 'Reglas de origen',
      significado:
        'Criterios que determinan el país de procedencia de un producto, para aplicar tratados comerciales.',
    },
    {
      termino: 'Salvaguardias comerciales',
      significado:
        'Medidas temporales para restringir importaciones y proteger a las industrias nacionales, de crisis comerciales.',
    },
    {
      termino: 'Sustitución de importaciones',
      significado:
        'Estrategia para reducir la dependencia de bienes extranjeros, mediante la producción nacional.',
    },
    {
      termino: 'Unión aduanera',
      significado:
        'Integración comercial donde los países eliminan barreras internas y adoptan políticas arancelarias comunes, frente a terceros.',
    },
  ],
}
