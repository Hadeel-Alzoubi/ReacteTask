using System;
using System.Collections.Generic;

namespace ReactTask.Models;

public partial class Employee
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Department { get; set; }

    public string? Position { get; set; }

    public virtual ICollection<Audit> Audits { get; set; } = new List<Audit>();
}
