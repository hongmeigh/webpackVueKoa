const basePath = 'http://localhost:3008';
import HTTP from '@lib/http';

export function homeAjax() {
    return HTTP.get(`${basePath}/hh`);
}