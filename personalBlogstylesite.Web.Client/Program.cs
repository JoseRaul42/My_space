using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using personalBlogstylesite.Shared.Services;
using personalBlogstylesite.Web.Client.Services;
using personalBlogstylesite.Web.Client;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Set the root component
builder.RootComponents.Add<App>("#app");

// Add device-specific services used by the personalBlogstylesite.Shared project
builder.Services.AddSingleton<IFormFactor, FormFactor>();

// Build and run the app
await builder.Build().RunAsync();
