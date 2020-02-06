import { Action } from '@ngrx/store';


// Declaro el tipo de Action
export const SET_FILTRO = '[Filter] Set Filtro';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

// la clase para manejar la Action
export class SetFiltroAction implements Action {

    readonly type = SET_FILTRO;

    constructor( public filtro: filtrosValidos) {}
    
}

// exportar los tipo de acciones válidas
export type acciones = SetFiltroAction;