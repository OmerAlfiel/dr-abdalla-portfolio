"use client"

import { cvData } from "@/lib/cv-data"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Mail, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function AboutSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedEmail(text)
      setTimeout(() => setCopiedEmail(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <section className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Personal Data</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-border shadow-lg animate-fade-in-up">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Personal Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">Date and Place of Birth</p>
                          <p className="font-medium text-foreground">{cvData.personal.birth}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">Current Location</p>
                          <p className="font-medium text-foreground">Saudi Arabia</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      {cvData.personal.emails.map((email) => (
                        <div key={email} className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{email}</p>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(email)}
                            className="h-8 w-8 p-0"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          {copiedEmail === email && <span className="text-xs text-primary font-medium">Copied!</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Section */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Brief Biography</h3>
                <p className="text-muted-foreground leading-relaxed text-balance">
                  Dr. Abdalla Ibrahim Abdalla Musa is a dedicated researcher specializing in Computer Science and
                  Machine Learning, currently serving as a Lecturer at Qassim University. He holds a PhD in Computer
                  Science from Omdurman Islamic University and brings extensive expertise in image processing,
                  cybersecurity, and software engineering to his academic and research endeavors.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
