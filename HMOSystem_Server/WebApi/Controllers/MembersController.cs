using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL;
using Microsoft.AspNetCore.Mvc;
using ViewModel;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController : ControllerBase
    {
        private readonly MembersService membersService;
       public MembersController(MembersService membersService)
        {
            this.membersService = membersService;
        }


        // GET: api/<MembersController>
        [HttpGet("[action]")]
        public IActionResult GetMembers()
        {
            return Ok(membersService.GetMembers());
        }

        // GET api/<MembersController>/5
        [HttpGet("[action]")]
        public IActionResult GetMemberById(string id)
        {
            return Ok(membersService.GetMemberById(id));
        }

        // POST api/<MembersController>
        [HttpPost("[action]")]
        public IActionResult AddMember([FromBody] Membersdto member)
        {
            membersService.AddMember(member);
            return Ok(membersService.GetMembers());
        }

        // PUT api/<MembersController>/5
        [HttpPut("[action]")]
        public IActionResult UpdateMember([FromBody] Membersdto member)
        {
            membersService.UpdateMember(member);
            return Ok(membersService.GetMembers());
        }

        // DELETE api/<MembersController>/5
        [HttpDelete("[action]")]
        public IActionResult DeleteMember(string id)
        {
            membersService.DeleteMember(id);
            return Ok(membersService.GetMembers());
        }
    }
}
