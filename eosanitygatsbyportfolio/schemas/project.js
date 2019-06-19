export default {
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'text'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string'
    },
    {
      name: 'secondlink',
      title: 'Second Link',
      type: 'string'
    },
    {
      name: 'url2title',
      title: 'URL 2 Title',
      type: 'string'
    },
    {
      name: 'collaborators',
      title: 'Collaborators',
      type: 'string'
    },
    {
      title: 'ordersorter',
      name: 'ordersorter',
      type: 'number'
      
    }
  ],
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrder',
      by: [
        {field: 'ordersorter', direction: 'asc'}
      ]
    }
  ]
  // ,

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage'
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`
  //     })
  //   }
  // }
}
