"use client"

import { cvData } from "@/lib/cv-data"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Shield, Network, Database, Cpu } from "lucide-react"

const iconMap: Record<string, any> = {
  "Image Processing": Cpu,
  "Machine Learning": Brain,
  Cybersecurity: Shield,
  Networking: Network,
  "Software Engineering": Code,
  Databases: Database,
}

export function SpecializationSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Specialization & Areas of Interest</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* General Specialization */}
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">General Specialization</h3>
                <p className="text-2xl font-bold text-primary">{cvData.specialization.general}</p>
              </CardContent>
            </Card>

            {/* Specific Specialization */}
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Specific Specialization</h3>
                <p className="text-2xl font-bold text-secondary">{cvData.specialization.specific}</p>
              </CardContent>
            </Card>
          </div>

          {/* Areas of Interest */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Areas of Scientific Interest</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cvData.specialization.interests.map((interest, index) => {
                const Icon = iconMap[interest] || Code
                return (
                  <Card
                    key={interest}
                    className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">{interest}</h4>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
