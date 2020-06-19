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
                  buildHookId: '5eec29b02ee05f782a7d6666',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xidfk8bo',
                  apiId: '5dad1f25-8698-45ef-b68a-0478a81eb878'
                },
                {
                  buildHookId: '5eec29b0657ceb8f2af52143',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-k3k8v1nw',
                  apiId: '8d5a5085-f1c9-403a-b363-a3b721d71de3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blgilman81/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-k3k8v1nw.netlify.app', category: 'apps' }
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
