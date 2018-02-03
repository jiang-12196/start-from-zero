import { Store, msg } from 'iflux';
import { fromJS } from 'immutable';
import { fetchGithub } from './webapi';

const appStore = Store({
    name: '',
    githubInfo: {},
});

msg.on('updateName', (name) => {
    appStore.cursor().set('name', name);
});
  
msg.on('submit', async () => {
    const data = await fetchGithub(name);
    appStore.cursor.set('githubInfo', fromJS(data));
});

export default appStore;