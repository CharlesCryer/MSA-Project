using System;

namespace Backend.DTO
{
    public class PatchSessionRequestDTO
    {
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
    }
}
