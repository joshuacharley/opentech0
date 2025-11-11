export interface AuditLog {
  id: string
  timestamp: Date
  eventType: string
  userId?: string
  ip: string
  userAgent?: string
  resource: string
  action: string
  status: "success" | "failure"
  details?: string
}

class AuditLogger {
  private logs: AuditLog[] = []
  private maxLogs = 1000

  log(event: Omit<AuditLog, "id" | "timestamp">): void {
    const auditLog: AuditLog = {
      id: this.generateId(),
      timestamp: new Date(),
      ...event,
    }

    this.logs.push(auditLog)

    // Keep only recent logs in memory
    if (this.logs.length > this.maxLogs) {
      this.logs.shift()
    }

    // In production, send to logging service (e.g., Datadog, Sentry)
    console.log("[AUDIT]", JSON.stringify(auditLog))
  }

  getLogs(filter?: { eventType?: string; status?: string }): AuditLog[] {
    if (!filter) return this.logs

    return this.logs.filter((log) => {
      if (filter.eventType && log.eventType !== filter.eventType) return false
      if (filter.status && log.status !== filter.status) return false
      return true
    })
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }
}

export const auditLogger = new AuditLogger()
