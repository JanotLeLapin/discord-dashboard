import axios from 'axios';
import { environment } from './environments/environment';

export interface IGuild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: number;
  features: string[];
  permissions_new: string;
}

export default class Api {
  static getGuilds(): Promise<IGuild[]> {
    return new Promise<IGuild[]>(async (resolve, reject) => {
      try {
        const guilds = await axios.get(environment.API_ENDPOINT + 'guilds', {
          headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('token'),
          },
        });
        resolve(guilds.data);
      } catch (err) {
        reject(err);
      }
    });
  }
}
