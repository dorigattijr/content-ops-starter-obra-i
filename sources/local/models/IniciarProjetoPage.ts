import { defineModel } from '@stackbit/types';

export const CustomPage = defineModel({
    type: 'page',
    name: 'CustomPage',
    label: 'Página Personalizada',
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Título',
            required: true
        },
        {
            type: 'string',
            name: 'description',
            label: 'Descrição'
        },
        {
            type: 'markdown',
            name: 'content',
            label: 'Conteúdo'
        }
    ]
});

export default CustomPage;
