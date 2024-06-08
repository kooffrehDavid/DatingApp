using System;
using System.Transactions;
using System.Runtime.Serialization;
using System.Net.Security;
using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration)
        {
                services.AddCors();
                services.AddScoped<ITokenService, TokenService>();
                services.AddScoped<IUserRepository, UserRepository>();
                services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

                services.AddDbContext<DataContext>(opt =>
                     {
                             opt.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
                     });
                return services;
        }
}
