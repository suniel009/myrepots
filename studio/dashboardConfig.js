export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7183e3a42cb563aab357dd',
                  title: 'Sanity Studio',
                  name: 'myrepots-studio',
                  apiId: '7b84e5c0-8851-47b7-adbb-33e67b24cfc2'
                },
                {
                  buildHookId: '5f7183e30bbae8600e232140',
                  title: 'Blog Website',
                  name: 'myrepots',
                  apiId: 'e5f04b58-2700-41b3-b2c9-c4f2f40fd559'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suniel009/myrepots',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://myrepots.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
