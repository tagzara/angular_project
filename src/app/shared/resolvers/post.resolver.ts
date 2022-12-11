import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "src/app/api.service";
import { IPost } from "../interfaces/post";

@Injectable({
    providedIn: 'root'
})

export class PostResolver implements Resolve<IPost | null> {
    constructor(private apiService: ApiService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPost | null | Observable<IPost> | Promise<IPost> {
        const postId = route.params['id'];
        if (!postId) {
            this.router.navigate(['/post/recent']);
            return null;
        }

        return this.apiService.loadPost(postId);
    }


}