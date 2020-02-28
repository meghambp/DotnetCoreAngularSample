using System;
using System.Collections.Generic;

namespace DatingApp.API.Models
{
    public class User
    {
        public int UserID { get; set; } 
        public string  Username { get; set; }   
        public byte[] passwordHash { get; set; }    
        public byte[] passwordSalt { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string KnowsAs { get; set; } 
        public DateTime Created { get; set; }   
        public DateTime LastActive { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
         public string Interests { get; set; }
         public string City { get; set; }   
         public string Country { get; set; }
         public ICollection<Photo> Photos { get; set; }
    }
}