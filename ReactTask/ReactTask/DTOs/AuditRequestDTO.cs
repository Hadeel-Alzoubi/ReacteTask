using System.ComponentModel.DataAnnotations;

namespace ReactTask.DTOs
{
    public class AuditRequestDTO
    {
        [Required]
        public string? Action { get; set; }

        [Required]
        public string? Employee { get; set; }

        [Required]
        public int? EmployeeId { get; set; }

        [Required]
        public int? Userid { get; set; }

    }
}
