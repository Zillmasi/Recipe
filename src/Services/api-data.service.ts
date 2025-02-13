import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
    );
  }

  getAllMeals(cat: string): Observable<any> {
    if (cat == 'all')
      return this.httpClient.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s`
      );

    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
    );
  }

  getDetailsMeal(id:string): Observable<any> {
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
  
}




// }
// getBeefData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=beef`
//   );
// }
// getBreakfastData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=breakfast`
//   );
// }
// getChickenData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
//   );
// }
// getDessertData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert`
//   );
// }

// getGoatData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=Goat`
//   );
// }

// getLambData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=Lamb`
//   );
// }
// getMiscellaneousData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous`
//   );
// }

// getPastaData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta`
//   );
// }
// getPorkData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=pork`
//   );
// }
// getSeafoodData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood`
//   );
// }
// getSideData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?c=side`
//   );
// }
// getStarterData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?c=starter`
//   );
// }
// getVeganData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=Vegan`
//   );
// }
// getVegetarianData(): Observable<any> {
//   return this.httpClient.get(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=Vegetarian`
//   );
// }
