import subjectMetadataToFilterMapper from 'src/utils/subject-metadata-to-filter-mapper'

describe('subjectMetadataToFilterMapper', () => {
  it('should map metadata to a category filter map', () => {
    const metadata = {
      attributes: [
        {
          name: 'filters',
          attributes: [
            {
              name: 'biobank',
              label: 'Biobank',
              categoricalOptions: [
                {
                  id: 'id1',
                  label: 'label1'
                }
              ]
            },
            {
              name: 'age_years',
              label: 'Age in years'
            },
            {
              name: 'sex',
              label: 'Sex',
              enumOptions: ['male', 'female']
            },
            {
              name: 'smoking',
              label: 'Smoking?'
            },
            {
              name: 'data_type',
              label: 'Data types',
              attributes: [
                {
                  name: 'wbcc',
                  label: 'Whole bloodcell count'
                }
              ]
            }
          ]
        }
      ]
    }

    const actual = subjectMetadataToFilterMapper(metadata)
    const expected = {
      biobank: {
        filterType: 'dropdown',
        id: 'biobank',
        label: 'Biobank',
        options: [{
          id: 'id1',
          label: 'label1',
          value: 'id1'
        }]
      },
      age_years: {
        filterType: 'range',
        id: 'age_years',
        label: 'Age in years',
        options: {
          min: 0,
          max: 120
        }
      },
      sex: {
        filterType: 'checkbox-row',
        id: 'sex',
        label: 'Sex',
        options: [
          {
            id: 'male',
            label: 'male',
            value: 'male'
          },
          {
            id: 'female',
            label: 'female',
            value: 'female'
          }
        ]
      },
      smoking: {
        filterType: 'checkbox-row',
        id: 'smoking',
        label: 'Smoking?',
        options: [
          {
            id: 'yes',
            label: 'Yes',
            value: true
          },
          {
            id: 'no',
            label: 'No',
            value: false
          }
        ]
      },
      data_type: {
        filterType: 'checkbox-list',
        id: 'data_type',
        label: 'Data types',
        options: [{
          id: 'wbcc',
          label: 'Whole bloodcell count',
          value: 'wbcc'
        }]
      }
    }

    expect(actual).to.deep.equal(expected)
  })
})
