using Backend.Context;
using Microsoft.EntityFrameworkCore;
using dotenv.net;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

DotEnv.Load();
builder.Configuration.AddEnvironmentVariables();
string? connection_string = Environment.GetEnvironmentVariable("connection_string");
if (connection_string == null) {
    throw new ArgumentNullException(nameof(connection_string), "is null");
}
builder.Services.AddDbContext<ApplicationDBContext>(options => options.UseSqlServer(connection_string));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();
app.Run();