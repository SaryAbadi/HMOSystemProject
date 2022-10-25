using System;

namespace WebApi.Controllers
{
    internal class HttpNotVaccinationAttribute : Attribute
    {
        private string v;

        public HttpNotVaccinationAttribute(string v)
        {
            this.v = v;
        }
    }
}