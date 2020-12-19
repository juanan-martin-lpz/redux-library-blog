const INCREMENTAR = 'INCREMENTAR';
const DECREMENTAR = 'DECREMENTAR';

export interface Action {
    type: string;
}

export const IncrementarAction: Action = {
    type: INCREMENTAR
};

export const DecrementarAction: Action = {
    type: DECREMENTAR
};
