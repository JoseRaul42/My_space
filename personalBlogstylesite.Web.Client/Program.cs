using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using personalBlogstylesite.Shared.Services;
using personalBlogstylesite.Web.Client.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Add device-specific services used by the personalBlogstylesite.Shared project
builder.Services.AddSingleton<IFormFactor, FormFactor>();

await builder.Build().RunAsync();
