"use client"

import { useState, useEffect } from "react"
import { CalendarIcon, Clock, CheckCircle2, XCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

interface ConsultationDatePickerProps {
  onDateSelect: (date: Date, time: string) => void
  selectedDate: Date | null
  selectedTime: string
}

export function ConsultationDatePicker({ onDateSelect, selectedDate, selectedTime }: ConsultationDatePickerProps) {
  const [availableDates, setAvailableDates] = useState<Date[]>([])
  const [busyDates, setBusyDates] = useState<Date[]>([])

  useEffect(() => {
    // Generate available dates (next 30 days, excluding weekends and some busy dates)
    const dates: Date[] = []
    const busy: Date[] = []
    const today = new Date()

    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      // Skip Sundays (day 0)
      if (date.getDay() === 0) continue

      // Simulate some busy dates (random)
      if (Math.random() > 0.7) {
        busy.push(date)
      } else {
        dates.push(date)
      }
    }

    setAvailableDates(dates)
    setBusyDates(busy)
  }, [])

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  const isDateAvailable = (date: Date) => {
    return availableDates.some((d) => d.toDateString() === date.toDateString())
  }

  const isDateBusy = (date: Date) => {
    return busyDates.some((d) => d.toDateString() === date.toDateString())
  }

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-2 text-sm">
        <CalendarIcon className="h-4 w-4 text-primary" />
        <span className="font-semibold">Select Your Preferred Date & Time</span>
      </div>

      {/* Date Selection */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Available Dates</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border rounded-lg">
          {availableDates.slice(0, 12).map((date, index) => {
            const isSelected = selectedDate?.toDateString() === date.toDateString()
            const available = isDateAvailable(date)

            return (
              <button
                key={index}
                type="button"
                onClick={() => onDateSelect(date, selectedTime)}
                className={`p-2 rounded-lg text-xs font-medium transition-all duration-200 flex items-center justify-between gap-1 ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : available
                      ? "bg-muted hover:bg-muted/80 hover:scale-105"
                      : "bg-muted/50 opacity-50 cursor-not-allowed"
                }`}
                disabled={!available}
              >
                <span>{formatDate(date)}</span>
                {isSelected && <CheckCircle2 className="h-3 w-3" />}
              </button>
            )
          })}
        </div>

        {/* Busy dates indicator */}
        {busyDates.length > 0 && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <XCircle className="h-3 w-3 text-destructive" />
            <span>{busyDates.length} dates are fully booked</span>
          </div>
        )}
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div className="space-y-2 animate-fade-in">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-2">
            <Clock className="h-3 w-3" />
            Select Time Slot
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {timeSlots.map((time, index) => {
              const isSelected = selectedTime === time

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => onDateSelect(selectedDate, time)}
                  className={`p-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isSelected
                      ? "bg-accent text-accent-foreground shadow-md scale-105"
                      : "bg-muted hover:bg-muted/80 hover:scale-105"
                  }`}
                >
                  {time}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Selected Summary */}
      {selectedDate && selectedTime && (
        <Card className="p-3 bg-primary/5 border-primary/20 animate-scale-in">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="font-medium">
              Consultation scheduled for {formatDate(selectedDate)} at {selectedTime}
            </span>
          </div>
        </Card>
      )}
    </div>
  )
}
