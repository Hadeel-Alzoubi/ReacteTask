﻿using System;
using System.Collections.Generic;

namespace ReactTask.Models;

public partial class User
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<Audit> Audits { get; set; } = new List<Audit>();
}
