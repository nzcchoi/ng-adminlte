import { Injectable } from '@angular/core';
import { AdminLteOptions } from "app/admin-lte/admin-lte-options";

@Injectable()
export class AdminLteService {
  options: AdminLteOptions
  constructor(options: AdminLteOptions) {
    this.options = options;
  }
}
