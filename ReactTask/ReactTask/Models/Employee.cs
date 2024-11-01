using System;
using System.Collections.Generic;

namespace ReactTask.Models;

public partial class Employee
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Position { get; set; }

    public int? Department { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual Department? DepartmentNavigation { get; set; }
}
