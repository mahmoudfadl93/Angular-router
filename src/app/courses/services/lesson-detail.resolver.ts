import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LessonDetail } from '../model/lesson-detail';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';


@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {

  constructor(private courses: CoursesService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<LessonDetail> {
  console.log("🚀 ~ file: lesson-detail.resolver.ts ~ line 17 ~ LessonDetailResolver ~ route", route)

    const courseUrl = route.parent.params['courseUrl'],
      lessonSeqNo = route.paramMap.get("lessonSeqNo");
      console.log("🚀 ~ file: lesson-detail.resolver.ts ~ line 20 ~ LessonDetailResolver ~ lessonSeqNo", lessonSeqNo)
      console.log("🚀 ~ file: lesson-detail.resolver.ts ~ line 19 ~ LessonDetailResolver ~ courseUrl", courseUrl)

    return this.courses.loadLessonDetail(courseUrl, lessonSeqNo);
  }


}
