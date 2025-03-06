using Microsoft.AspNetCore.Mvc;

namespace MyWebProject.Controllers
{
    public class InventoryController : Controller
    {
        public IActionResult inventorymanage() => View();
        public IActionResult pool() => View();
        public IActionResult productList() => View();
        public IActionResult updateHistory() => View();
        public IActionResult variations() => View();
        public IActionResult addProduct() => View();
        public IActionResult bestSelling() => View();
        public IActionResult category() => View();
    }
}
