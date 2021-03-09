export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6048006bfd6cc0138bbef6a8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-n8e4n3ep',
                  apiId: '60aea9a4-d937-46cd-9218-9095e122b8a5'
                },
                {
                  buildHookId: '6048006b621dd31721c8f523',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8xgev221',
                  apiId: '7b040441-0fe2-4ed3-8096-34dc0aa5e162'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bisrad/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8xgev221.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
