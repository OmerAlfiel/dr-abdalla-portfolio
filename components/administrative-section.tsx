"use client"

import { useState } from "react"
import { cvData } from "@/lib/cv-data"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Calendar } from "lucide-react"

export function AdministrativeSection() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  // Separate current and past positions
  const currentPositions = cvData.administrative.filter((item) => item.period.toLowerCase().includes("present"))
  const pastPositions = cvData.administrative.filter((item) => !item.period.toLowerCase().includes("present"))

  const renderPositions = (positions: typeof cvData.administrative, title: string) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-foreground mb-6">{title}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {positions.map((item, index) => (
          <Card key={index} className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2 leading-tight">{item.title}</h4>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Administrative Work & Committees</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          {currentPositions.length > 0 && renderPositions(currentPositions, "Current Positions")}

          {pastPositions.length > 0 && renderPositions(pastPositions, "Past Positions")}
        </div>
      </div>
    </section>
  )
}
