import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'id',
      type: 'number',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'username',
      type: 'string',
      
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'url',
    }),
    defineField({
      name: 'bio',
      type: 'text',
    }),
    // defineField({
    //   name: 'image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    // defineField({
    //   name: 'bio',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'block',
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       lists: [],
    //     }),
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: 'name',
      // media: 'image',
    },
  },
})
