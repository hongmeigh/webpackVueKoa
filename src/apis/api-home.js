const basePath = 'http://localhost:3008';
import HTTP from '@lib/http';

export function homeAjax() {
    return HTTP.get(`${basePath}/hh`);
}
export function addEngWord() {
    return HTTP.get(`${basePath}/add`);
}
export function queryWord() {
    return HTTP.get(`${basePath}/query/list`);
}