const basePath = 'http://localhost:3008';
import HTTP from '@lib/http';

export function homeAjax() {
    return HTTP.get(`${basePath}/hh`);
}
export function addEngWord(data) {
    return HTTP.post(`${basePath}/add`, data);
}
export function modifyWord(data) {
    return HTTP.post(`${basePath}/modify`, data);
}
export function deleteWord(data) {
    return HTTP.post(`${basePath}/delete`, data);
}
export function queryWord() {
    return HTTP.get(`${basePath}/query/list`);
}