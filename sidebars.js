module.exports = {
  someSidebar: {
    Introduction: [
      'introduction'
    ],
    'Getting started': [
      'gettingStarted/agreementOverview',
      'gettingStarted/trialToken',
      'gettingStarted/sandbox'
    ],
    Reference: [
      'reference/contentStructure',
      'reference/lessonAttributes',
      {
        GraphQL : [
          'reference/graphql/gqlOverview',
          'reference/graphql/gqlRequests',
          'reference/graphql/gqlAuthorization',
          'reference/graphql/gqlQueries',
          'reference/graphql/gqlMutations',
          'reference/graphql/gqlReleaseNotes'
        ],
      },
      'reference/assetCalls'
    ],
    Components: [
      {
        Introduction: [
            'components/intro/componentDefinition',
            'components/intro/componentTypes',
        ]
      },
      'components/basic',
      'components/text',
      'components/wrapper',
      'components/image',
      'components/table'
    ],
  },
};
