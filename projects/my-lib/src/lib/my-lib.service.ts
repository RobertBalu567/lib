import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyLibService {
  constructor() {}

  libMethod(): string {
    return 'Hello from MyLibService!';
  }
}
