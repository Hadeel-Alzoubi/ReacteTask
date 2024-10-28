using System;
using System.Collections.Generic;

namespace ReactTask.Models;

public partial class Audit
{
    public int Id { get; set; }

    public string? Action { get; set; }

    public string? Employee { get; set; }

    public int? EmployeeId { get; set; }

    public int? Userid { get; set; }

    public DateTime? Timestamp { get; set; }

    public virtual Employee? EmployeeNavigation { get; set; }

    public virtual User? User { get; set; }
}
