using DotnetProject.Models;
using Newtonsoft.Json;

namespace DotnetProject.Services
{
    public class CountriesService : ICountriesService
    {

        public static HttpClient client = new HttpClient();
        public static string PATH = "https://restcountries.com/v2/all";

        public CountriesService()
        {

        }

        public async Task<IEnumerable<Countries>> GetCountriesAsync()
        {
            var countries = Enumerable.Empty<Countries>();
            HttpResponseMessage response = await client.GetAsync(PATH);
            if (response.IsSuccessStatusCode)
            {
                var jsonString = await response.Content.ReadAsStringAsync();
                countries = JsonConvert.DeserializeObject<IEnumerable<Countries>>(jsonString);
            }
            return countries?.Where(x=>x.Region == "Asia");
        }
    }
}

