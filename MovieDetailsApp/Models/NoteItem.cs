using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MovieDetailsApp.Models
{
    public class NoteItem
    {
        
            public long Id { get; set; }
            [Required]
            [StringLength(1000)]
            public string Title { get; set; }
            [Required]
            public string Description { get; set; }
            [Required]
            public string MovieName { get; set; }

        
    }
}
