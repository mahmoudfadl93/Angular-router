import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  course: Course;

  couponCode: string;


  constructor(private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.course = this.route.snapshot.data["course"];
    this.couponCode = this.route.snapshot.queryParamMap.get("couponCode");
    console.log("🚀 ~ file: course.component.ts ~ line 29 ~ CourseComponent ~ course", this.course)
  }

  confirmExit(): boolean {
    return confirm(`Are you sure you want to exit ${this.course.description}?`)
  }
}











