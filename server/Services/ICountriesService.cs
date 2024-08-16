using DotnetProject.Models;

namespace DotnetProject.Services
{
    public interface ICountriesService
    {
        Task<IEnumerable<Countries>> GetCountriesAsync();
    }
}
