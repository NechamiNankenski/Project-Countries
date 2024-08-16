using DotnetProject.Models;
using DotnetProject.Services;
using Microsoft.AspNetCore.Mvc;

namespace DotnetProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CountriesController : ControllerBase
    {

        private readonly ICountriesService countriesService;

        public CountriesController(ICountriesService weatherService)
        {
            this.countriesService = weatherService;
        }

        [HttpGet(Name = "GetCountries")]
        public async Task<IEnumerable<Countries>> GetCountries()
        {
            return await countriesService.GetCountriesAsync();
        }
    }
}
