import { Component, OnInit } from '@angular/core';
import Api, { IGuild } from 'src/api';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  guilds: IGuild[] = [];

  constructor() {}

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.hash);
    const token = params.get('access_token');
    if (token) {
      window.localStorage.setItem('token', token);
      window.location.replace('/');
    }

    Api.getGuilds()
      .then((guilds) => (this.guilds = guilds))
      .catch((err) => console.error(err));
  }
}
