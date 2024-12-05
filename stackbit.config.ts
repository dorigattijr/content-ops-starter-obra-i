import { Model } from '@stackbit/types';

export const IniciarProjetoPage: Model = {
    type: 'page',
    name: 'IniciarProjetoPage',
    label: 'Iniciar Projeto',
    fields: [
        { name: 'title', type: 'string', required: true },
        { name: 'description', type: 'text', required: true },
        { name: 'materials', type: 'list', items: { type: 'string' } }
    ]
};
