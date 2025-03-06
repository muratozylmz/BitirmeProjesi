using Microsoft.AspNetCore.Mvc;

namespace MyWebProject.Controllers
{
    public class FeedbackController : Controller
    {
        public IActionResult campaigns() => View();
        public IActionResult eposta() => View();
        public IActionResult setup() => View();
    }
}
