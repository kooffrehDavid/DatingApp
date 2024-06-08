using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System;
using API.Extensions;
using System.ComponentModel.DataAnnotations;

namespace API.Entities;

public class AppUser
{
    public int Id { get; set; }

    public string UserName { get; set; }
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
    public DateOnly DateOfBirth { get; set; }
    public string KnownAS { get; set; }
    public DateTime Created { get; set; } = DateTime.UtcNow;
    public string Gender { get; set; }
    public string Introduction { get; set; }
    public string LookingFor { get; set; }
    public string Interest { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public DateTime LastActive { get; set; } = DateTime.UtcNow;
    public List<Photo> Photos { get; set; } = new();
    // public int GetAge(){
    //     return DateOfBirth.CalculateAge();
    // }
}
