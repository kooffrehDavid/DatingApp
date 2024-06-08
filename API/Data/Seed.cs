using System.ComponentModel.Design.Serialization;
using System.Threading;
using System;
using System.Text;
using System.Reflection.Metadata;
using System.Security.Cryptography;
using System.Collections.Generic;
using System.Runtime.Serialization.Json;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using API.Entities;
namespace API.Data;

public class Seed
{

    public static async Task SeedUsers(DataContext context)
    {
        if (await context.Users.AnyAsync()) return;
        var userData = await File.ReadAllTextAsync("Data/UserSeedData.json");
        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        var users = JsonSerializer.Deserialize<List<AppUser>>(userData, options);
        foreach (var user in users)
        {
            using var hmac = new HMACSHA512();
            user.UserName = user.UserName.ToLower();
            user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("p@$$w0rD"));
            user.PasswordSalt = hmac.Key;
            context.Users.Add(user);
        }
        await context.SaveChangesAsync();
    }
}
