module.exports = {
  'href': '/api/v2/leiden_RP',
  'meta': {
    'href': '/api/v2/leiden_RP',
    'hrefCollection': '/api/v2/leiden_RP',
    'name': 'leiden_RP',
    'label': 'RP',
    'attributes': [
      {
        'href': '/api/v2/leiden_RP/meta/BBMRI_id',
        'fieldType': 'STRING',
        'name': 'BBMRI_id',
        'label': 'BBMRI_id',
        'attributes': [],
        'maxLength': 255,
        'auto': false,
        'nillable': false,
        'readOnly': true,
        'labelAttribute': true,
        'unique': true,
        'visible': true,
        'lookupAttribute': true,
        'isAggregatable': false
      },
      {
        'href': '/api/v2/leiden_RP/meta/filters',
        'fieldType': 'COMPOUND',
        'name': 'filters',
        'label': 'Filters',
        'attributes': [
          {
            'href': '/api/v2/leiden_RP/meta/biobank',
            'fieldType': 'CATEGORICAL',
            'name': 'biobank',
            'label': 'Biobank',
            'attributes': [],
            'refEntity': {
              'href': '/api/v2/leiden_biobanks',
              'hrefCollection': '/api/v2/leiden_biobanks',
              'name': 'leiden_biobanks',
              'label': 'biobanks',
              'attributes': [
                {
                  'href': '/api/v2/leiden_biobanks/meta/id',
                  'fieldType': 'STRING',
                  'name': 'id',
                  'label': 'id',
                  'attributes': [],
                  'maxLength': 255,
                  'auto': false,
                  'nillable': false,
                  'readOnly': true,
                  'labelAttribute': false,
                  'unique': true,
                  'visible': true,
                  'lookupAttribute': true,
                  'isAggregatable': false
                },
                {
                  'href': '/api/v2/leiden_biobanks/meta/abbr',
                  'fieldType': 'STRING',
                  'name': 'abbr',
                  'label': 'abbr',
                  'attributes': [],
                  'maxLength': 255,
                  'auto': false,
                  'nillable': false,
                  'readOnly': false,
                  'labelAttribute': true,
                  'unique': false,
                  'visible': true,
                  'lookupAttribute': true,
                  'isAggregatable': false
                }
              ],
              'labelAttribute': 'abbr',
              'idAttribute': 'id',
              'lookupAttributes': [
                'id',
                'abbr'
              ],
              'isAbstract': false,
              'writable': true,
              'languageCode': 'en'
            },
            'auto': false,
            'nillable': false,
            'readOnly': false,
            'labelAttribute': false,
            'unique': false,
            'visible': true,
            'lookupAttribute': false,
            'isAggregatable': true,
            'categoricalOptions': [
              {
                'id': 'ALPHAOMEGA',
                'label': 'ALPHAOMEGA'
              },
              {
                'id': 'BIOMARCS',
                'label': 'BIOMARCS'
              },
              {
                'id': 'CHARM',
                'label': 'CHARM'
              },
              {
                'id': 'CHECK',
                'label': 'CHECK'
              },
              {
                'id': 'CODAM',
                'label': 'CODAM'
              },
              {
                'id': 'CSF',
                'label': 'CSF'
              },
              {
                'id': 'DMS',
                'label': 'DMS'
              },
              {
                'id': 'DZS_WF',
                'label': 'DZS_WF'
              },
              {
                'id': 'FUNCTGENOMICS',
                'label': 'FUNCTGENOMICS'
              },
              {
                'id': 'GARP',
                'label': 'GARP'
              },
              {
                'id': 'HELIUS',
                'label': 'HELIUS'
              },
              {
                'id': 'LL',
                'label': 'LL'
              },
              {
                'id': 'LLS',
                'label': 'LLS'
              },
              {
                'id': 'MRS',
                'label': 'MRS'
              },
              {
                'id': 'NESDA',
                'label': 'NESDA'
              },
              {
                'id': 'NTR',
                'label': 'NTR'
              },
              {
                'id': 'PAN',
                'label': 'PAN'
              },
              {
                'id': 'PROSPER',
                'label': 'PROSPER'
              },
              {
                'id': 'RAAK',
                'label': 'RAAK'
              },
              {
                'id': 'RS',
                'label': 'RS'
              },
              {
                'id': 'STEMI_GIPS-III',
                'label': 'STEMI_GIPS-III'
              },
              {
                'id': 'TACTICS',
                'label': 'TACTICS'
              },
              {
                'id': 'TOMAAT',
                'label': 'TOMAAT'
              },
              {
                'id': 'UCORBIO',
                'label': 'UCORBIO'
              }
            ]
          },
          {
            'href': '/api/v2/leiden_RP/meta/age',
            'fieldType': 'DECIMAL',
            'name': 'age',
            'label': 'Age',
            'attributes': [],
            'auto': false,
            'nillable': true,
            'readOnly': false,
            'labelAttribute': false,
            'unique': false,
            'visible': true,
            'lookupAttribute': false,
            'isAggregatable': false
          },
          {
            'href': '/api/v2/leiden_RP/meta/sex',
            'fieldType': 'ENUM',
            'name': 'sex',
            'label': 'Sex',
            'attributes': [],
            'enumOptions': [
              'male',
              'female'
            ],
            'maxLength': 255,
            'auto': false,
            'nillable': true,
            'readOnly': false,
            'labelAttribute': false,
            'unique': false,
            'visible': true,
            'lookupAttribute': false,
            'isAggregatable': true
          },
          {
            'href': '/api/v2/leiden_RP/meta/smoking',
            'fieldType': 'BOOL',
            'name': 'smoking',
            'label': 'Ever smoked',
            'attributes': [],
            'auto': false,
            'nillable': true,
            'readOnly': false,
            'labelAttribute': false,
            'unique': false,
            'visible': true,
            'lookupAttribute': false,
            'isAggregatable': true
          },
          {
            'href': '/api/v2/leiden_RP/meta/data_type',
            'fieldType': 'COMPOUND',
            'name': 'data_type',
            'label': 'Data type',
            'attributes': [
              {
                'href': '/api/v2/leiden_RP/meta/genotypes',
                'fieldType': 'BOOL',
                'name': 'genotypes',
                'label': 'Genotypes (Imputed)',
                'attributes': [],
                'auto': false,
                'nillable': true,
                'readOnly': false,
                'labelAttribute': false,
                'unique': false,
                'visible': true,
                'lookupAttribute': false,
                'isAggregatable': true
              },
              {
                'href': '/api/v2/leiden_RP/meta/transcriptome',
                'fieldType': 'BOOL',
                'name': 'transcriptome',
                'label': 'Transcriptome (Illumina RNAseq)',
                'attributes': [],
                'auto': false,
                'nillable': true,
                'readOnly': false,
                'labelAttribute': false,
                'unique': false,
                'visible': true,
                'lookupAttribute': false,
                'isAggregatable': true
              },
              {
                'href': '/api/v2/leiden_RP/meta/metabolome',
                'fieldType': 'BOOL',
                'name': 'metabolome',
                'label': 'Metabolome (Brainshake)',
                'attributes': [],
                'auto': false,
                'nillable': true,
                'readOnly': false,
                'labelAttribute': false,
                'unique': false,
                'visible': true,
                'lookupAttribute': false,
                'isAggregatable': true
              },
              {
                'href': '/api/v2/leiden_RP/meta/wbcc',
                'fieldType': 'BOOL',
                'name': 'wbcc',
                'label': 'Whole bloodcell count',
                'attributes': [],
                'auto': false,
                'nillable': true,
                'readOnly': false,
                'labelAttribute': false,
                'unique': false,
                'visible': true,
                'lookupAttribute': false,
                'isAggregatable': true
              },
              {
                'href': '/api/v2/leiden_RP/meta/wgs',
                'fieldType': 'BOOL',
                'name': 'wgs',
                'label': 'Whole Genome Sequencing (Illumina Hiseq)',
                'attributes': [],
                'auto': false,
                'nillable': true,
                'readOnly': false,
                'labelAttribute': false,
                'unique': false,
                'visible': true,
                'lookupAttribute': false,
                'isAggregatable': true
              },
              {
                'href': '/api/v2/leiden_RP/meta/methylome',
                'fieldType': 'BOOL',
                'name': 'methylome',
                'label': 'Methylome (Illumina 450K)',
                'attributes': [],
                'auto': false,
                'nillable': true,
                'readOnly': false,
                'labelAttribute': false,
                'unique': false,
                'visible': true,
                'lookupAttribute': false,
                'isAggregatable': true
              }
            ],
            'auto': false,
            'nillable': true,
            'readOnly': false,
            'labelAttribute': false,
            'unique': false,
            'visible': true,
            'lookupAttribute': false,
            'isAggregatable': false
          },
          {
            'href': '/api/v2/leiden_RP/meta/age_years',
            'fieldType': 'INT',
            'name': 'age_years',
            'label': 'Age in years',
            'attributes': [],
            'auto': false,
            'nillable': true,
            'readOnly': false,
            'labelAttribute': false,
            'unique': false,
            'visible': true,
            'lookupAttribute': false,
            'isAggregatable': true,
            'expression': 'age'
          }
        ],
        'auto': false,
        'nillable': true,
        'readOnly': false,
        'labelAttribute': false,
        'unique': false,
        'visible': true,
        'lookupAttribute': false,
        'isAggregatable': false
      }
    ],
    'labelAttribute': 'BBMRI_id',
    'idAttribute': 'BBMRI_id',
    'lookupAttributes': [
      'BBMRI_id'
    ],
    'isAbstract': false,
    'writable': true,
    'languageCode': 'en'
  },
  'start': 0,
  'num': 100,
  'total': 26227,
  'nextHref': 'http://localhost:8080/api/v2/leiden_RP?start=100',
  'items': []
}
