export const sampleBoardCollection = {
    'board': [{
        'title': 'Dashboard',
        'structure': '4-4-4-4/8-4-4',
        'id': 8,
        'boardInstanceId': 1,
        'rows': [
            
            {
                'columns': [
                    {
                        'styleClass': 'eight wide',
                        'gadgets': [
                            {
                                'componentType': 'ServiceListGadgetComponent',
                                'name': 'Service Status',
                                'description': 'Monitors Service Status',
                                'icon': 'images/service.png',
                                'instanceId': 1500343727872,
                                'tags': [
                                    {
                                        'facet': 'List',
                                        'name': 'health'
                                    }
                                ],
                                'config': {
                                    'propertyPages': [
                                        {
                                            'displayName': 'Run',
                                            'groupId': 'run',
                                            'position': 10,
                                            'properties': [
                                                {
                                                    'value': 'Devappliance - Process Monitor',
                                                    'key': 'endpoint',
                                                    'label': 'API Endpoints',
                                                    'required': false,
                                                    'order': 2,
                                                    'controlType': 'dynamicdropdown'
                                                },
                                                {
                                                    'value': 'Service Status',
                                                    'key': 'title',
                                                    'label': 'Title',
                                                    'required': false,
                                                    'order': 1,
                                                    'controlType': 'textbox'
                                                },
                                                {
                                                    'value': 999,
                                                    'key': 'instanceId',
                                                    'required': false,
                                                    'order': -1,
                                                    'controlType': 'hidden'
                                                }
                                            ]
                                        },
                                        {
                                            'displayName': 'List',
                                            'groupId': 'chart',
                                            'position': 11,
                                            'properties': [
                                                {
                                                    'value': true,
                                                    'key': 'chart_properties',
                                                    'label': 'Show chart details',
                                                    'required': false,
                                                    'order': 3,
                                                    'controlType': 'checkbox'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    ]
};

