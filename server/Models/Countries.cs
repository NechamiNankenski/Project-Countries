namespace DotnetProject.Models
{
    public class Countries
    {
        public string Name { get; set; }
        public string Capital { get; set; }
        public string Region { get; set; }
        public string Flag { get; set; }
        public Currencies[] Currencies { get; set; }

    }
}
