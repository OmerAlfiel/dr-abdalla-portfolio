"use client"

import { cvData } from "@/lib/cv-data"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Code, Database, Cpu } from "lucide-react"

const getIconForCourse = (code: string, title: string) => {
  if (title.toLowerCase().includes("programming") || title.toLowerCase().includes("matlab")) {
    return Code
  }
  if (title.toLowerCase().includes("database") || code.includes("131")) {
    return Database
  }
  if (title.toLowerCase().includes("system") || title.toLowerCase().includes("network")) {
    return Cpu
  }
  return BookOpen
}

export function TeachingSection() {
  // Group courses by type/level
  const appliedCollegeCourses = cvData.teaching.filter((course) =>
    course.title.toLowerCase().includes("applied college"),
  )
  const scienceCollegeCourses = cvData.teaching.filter((course) =>
    course.title.toLowerCase().includes("science college"),
  )
  const generalCourses = cvData.teaching.filter(
    (course) =>
      !course.title.toLowerCase().includes("applied college") &&
      !course.title.toLowerCase().includes("science college"),
  )

  const renderCourseGroup = (courses: typeof cvData.teaching, title: string) => {
    if (courses.length === 0) return null

    return (
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-6">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => {
            const Icon = getIconForCourse(course.code, course.title)
            return (
              <Card
                key={index}
                className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded">
                          {course.code}
                        </span>
                      </div>

                      <h4 className="font-semibold text-foreground leading-tight">{course.title}</h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Teaching Activities</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Courses taught at Qassim University across different colleges and departments
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {renderCourseGroup(appliedCollegeCourses, "Applied College Courses")}

          {renderCourseGroup(scienceCollegeCourses, "Science College Courses")}

          {renderCourseGroup(generalCourses, "General Courses")}
        </div>
      </div>
    </section>
  )
}
