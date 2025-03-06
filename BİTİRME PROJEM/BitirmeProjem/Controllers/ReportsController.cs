using Microsoft.AspNetCore.Mvc;

namespace MyWebProject.Controllers
{
	public class ReportsController : Controller
	{
		public IActionResult allStores() => View();
		public IActionResult buybox() => View();
		public IActionResult health() => View();
		public IActionResult payments() => View();
		public IActionResult popular() => View();
		public IActionResult profitReport() => View();
		public IActionResult salesReport() => View();
	}
}
