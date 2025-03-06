using Microsoft.AspNetCore.Mvc;

namespace MyWebProject.Controllers
{
    public class OrdersController : Controller
    {
        public IActionResult orders() => View();
    }
}
