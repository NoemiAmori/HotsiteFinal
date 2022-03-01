using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MySql.Data.MySqlClient;

namespace Hotsite.Models
{
    public class DatabaseService
    {
        public int CadastraInteresse(Interesse cad)
        {
            using(var context = new DatabaseContext())
            {
                context.Add(cad);
                context.SaveChanges();
                return cad.Id;
            }
        }
    }
}