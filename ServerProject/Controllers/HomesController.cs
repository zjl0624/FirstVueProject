using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.IO;
namespace ServerProject.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HomesController : ControllerBase
    {
        [HttpPost("GradeInfo")]
        public string GetGradeInfo(string userId)
        {
            Dictionary<string,object> res = new Dictionary<string, object>();
            ArrayList gradeInfo = new ArrayList();
            for(int i = 0;i < 4;i++)
            {
                Dictionary<string, string> item = new Dictionary<string, string>();
                if (i == 0)
                {
                    item.Add("grade_id", "0101");
                    item.Add("grade_name", "一年级1班");
                }
                else if (i == 1)
                {
                    item.Add("grade_id", "0201");
                    item.Add("grade_name", "二年级1班");
                }
                else if (i == 2)
                {
                    item.Add("grade_id", "0302");
                    item.Add("grade_name", "三年级2班");
                }
                else if (i == 3)
                {
                    item.Add("grade_id", "0404");
                    item.Add("grade_name", "四年级4班");
                }
                gradeInfo.Add(item);

            }
            res.Add("data", gradeInfo);   
            return JsonSerialize.SerializeJSON(res);
        }
    }
}