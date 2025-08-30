"use client"

import { cvData } from "@/lib/cv-data"
import { Card, CardContent } from "@/components/ui/card"
import { Presentation, Calendar, MapPin, Tag } from "lucide-react"

export function ConferencesSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Conferences & Scientific Seminars</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cvData.conferences.map((conference, index) => (
              <Card
                key={index}
                className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Presentation className="h-6 w-6 text-secondary" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{conference.type}</span>
                      </div>

                      <h3 className="font-semibold text-foreground mb-3 leading-tight">{conference.title}</h3>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span>{conference.date}</span>
                        </div>

                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{conference.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
