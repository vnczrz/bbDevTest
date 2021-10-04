import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UuidService {
  //source- https://stackoverflow.com/questions/52836247/how-to-generate-uuid-in-angular
  // ids: string[]: This is a list of all unique ids stored in the service to ensure uniqueness.
  public ids: string[] = [];

  constructor() { }
  
  // generate(): string: This method will generate and return a unique id as a string; Output: E.g. bec331aa-1566-1f59-1bf1-0a709be9a710
  public generate(): string {
    let isUnique = false;
    let tempId = '';

    while (!isUnique) {
      tempId = this.generator();
      if (!this.idExists(tempId)) {
        isUnique = true;
        this.ids.push(tempId);
      }
    }

    return tempId;
  }

  // remove(id: string): void: This method will remove a given id from the stored ids' array.
  public remove(id: string): void {
    const index = this.ids.indexOf(id);
    this.ids.splice(index, 1);
  }

  private generator(): string {
    const isString = `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`;

    return isString;
  }

  private idExists(id: string): boolean {
    return this.ids.includes(id);
  }

  private S4(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
}
