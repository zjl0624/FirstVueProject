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
                switch (i)
                {
                    case 0:
                        item.Add("grade_id", "0101");
                        item.Add("grade_name", "一年级1班");
                        break;
                    case 1:
                        item.Add("grade_id", "0201");
                        item.Add("grade_name", "二年级1班");
                        break;
                    case 2:
                        item.Add("grade_id", "0302");
                        item.Add("grade_name", "三年级2班");
                        break;
                    case 3:
                        item.Add("grade_id", "0404");
                        item.Add("grade_name", "四年级4班");
                        break;
                }

                gradeInfo.Add(item);

            }
            res.Add("data", gradeInfo);
            return JsonSerialize.SerializeJSON(res);
        }
    }
}