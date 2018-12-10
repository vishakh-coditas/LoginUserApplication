using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;
using LoginUserApplication.Models;

namespace LoginUserApplication.Controllers
{

    public class HomeController : Controller
    {

        //private const string _securityKey = "MyComplexKey";

        
        //public static string EncryptPlainTextToCipherText(string PlainText)
        //{
        //    //Getting the bytes of Input String.
        //    byte[] toEncryptedArray = UTF8Encoding.UTF8.GetBytes(PlainText);
        //    MD5CryptoServiceProvider objMD5CryptoService = new MD5CryptoServiceProvider();
        //    //Gettting the bytes from the Security Key and Passing it to compute the Corresponding Hash Value.
        //    byte[] securityKeyArray = objMD5CryptoService.ComputeHash(UTF8Encoding.UTF8.GetBytes(_securityKey));
        //    //De-allocatinng the memory after doing the Job.
        //    objMD5CryptoService.Clear();
        //    var objTripleDESCryptoService = new TripleDESCryptoServiceProvider();
        //    //Assigning the Security key to the TripleDES Service Provider.
        //    objTripleDESCryptoService.Key = securityKeyArray;

        //    //Mode of the Crypto service is Electronic Code Book.
        //    objTripleDESCryptoService.Mode = CipherMode.ECB;

        //    //Padding Mode is PKCS7 if there is any extra byte is added.
        //    objTripleDESCryptoService.Padding = PaddingMode.PKCS7;
        //    var objCrytpoTransform = objTripleDESCryptoService.CreateEncryptor();
        //    //Transform the bytes array to resultArray
        //    byte[] resultArray = objCrytpoTransform.TransformFinalBlock(toEncryptedArray, 0, toEncryptedArray.Length);
        //    //Releasing the Memory Occupied by TripleDES Service Provider for Encryption.
        //    objTripleDESCryptoService.Clear();
        //    //Convert and return the encrypted data/byte into string format.
        //    return Convert.ToBase64String(resultArray, 0, resultArray.Length);
        //}


        
        //public static string DecryptCipherTextToPlainText(string CipherText)
        //{

        //    byte[] toEncryptArray = Convert.FromBase64String(CipherText);
        //    MD5CryptoServiceProvider objMD5CryptoService = new MD5CryptoServiceProvider();
        //    //Gettting the bytes from the Security Key and Passing it to compute the Corresponding Hash Value.
        //    byte[] securityKeyArray = objMD5CryptoService.ComputeHash(UTF8Encoding.UTF8.GetBytes(_securityKey));
            
        //    //De-allocatinng the memory after doing the Job.
        
        //    objMD5CryptoService.Clear();
            
        //    var objTripleDESCryptoService = new TripleDESCryptoServiceProvider();
            
        //    //Assigning the Security key to the TripleDES Service Provider.
        
        //    objTripleDESCryptoService.Key = securityKeyArray;
            
        //    //Mode of the Crypto service is Electronic Code Book.

        //    objTripleDESCryptoService.Mode = CipherMode.ECB;
        //    //Padding Mode is PKCS7 if there is any extra byte is added.

        //    objTripleDESCryptoService.Padding = PaddingMode.PKCS7;
        //    var objCrytpoTransform = objTripleDESCryptoService.CreateDecryptor();
        //    //Transform the bytes array to resultArray
        //    byte[] resultArray = objCrytpoTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);
        //    //Releasing the Memory Occupied by TripleDES Service Provider for Decryption.          

        //    objTripleDESCryptoService.Clear();
        //    //Convert and return the decrypted data/byte into string format.
        //    return UTF8Encoding.UTF8.GetString(resultArray);

        //}

        public EmployeeDBEntities db = new EmployeeDBEntities();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Employee()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Employee(Employee emp)
        {
            //string EncryptPassword = EncryptPlainTextToCipherText(emp.UserPass);
            string EncryptPassword =Cryptography.Encrypt(emp.UserPass);
            if (ModelState.IsValid)
            {
                emp.UserPass = EncryptPassword;
                db.Employees.Add(emp);
                db.SaveChanges();
            }
            return View("Login");
        }


        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(Employee emp)
        {
            try
            {


                if (ModelState.IsValid)
                {


                    //var Details = (from UserList in db.Employees
                    //               where UserList.UserName == emp.UserName && UserList.UserPass == emp.UserPass
                    //               select new
                    //               {
                    //                   UserList.UserName,
                    //                   UserList.UserPass,
                    //                   UserList.FirstName
                    //               }).ToList();


                    string PasswordQuery = (from data in db.Employees where data.UserName == emp.UserName select data.UserPass).FirstOrDefault();

                    string d = Convert.ToString(PasswordQuery);
                    string DecryptPassword = Cryptography.Decrypt(d);
                    //string DecryptPassword = DecryptCipherTextToPlainText(d);
                    var UsernameQuery = (from UserList in db.Employees where UserList.UserName == emp.UserName select new { UserList.UserName, UserList.FirstName }).ToList();

                    //if (Details.ToString() != emp.UserName)
                    //{
                    //    ModelState.AddModelError(string.Empty, "Invalid Credentials");
                    //}

                    //if (Details.FirstOrDefault() != null)
                    //{
                    //    Session["UserName"] = Details.FirstOrDefault().UserName;
                    //    Session["UserPass"] = Details.FirstOrDefault().UserPass;
                    //    Session["FirstName"] = Details.FirstOrDefault().FirstName;

                    //    return RedirectToAction("Welcome", "Home");
                    //}

                    if (UsernameQuery.ToString() != emp.UserName)
                    {
                        ModelState.AddModelError(string.Empty, " Credentials Invalid");
                    }

                    if (DecryptPassword != null && DecryptPassword.Equals(emp.UserPass))
                    {
                        Session["FirstName"] = UsernameQuery.FirstOrDefault().FirstName;
                        //Session["UserName"] = UsernameQuery.UserName;
                        //Session["UserPass"] = DecryptPassword.UserPass.ToString();
                        //Session["FirstName"] = Details.FirstOrDefault().FirstName;

                        return RedirectToAction("Welcome", "Home");
                    }

                    //if(Details.FirstOrDefault()!=null && ((emp.UserName).Equals(Details) && emp.UserPass.Equals(DecryptPassword)))
                    //{
                    //    Session["UserName"] = Details.FirstOrDefault().UserName;
                    //    Session["UserPass"] = Details.FirstOrDefault().UserPass;
                    //    Session["FirstName"] = Details.FirstOrDefault().FirstName;

                    //    return RedirectToAction("Welcome", "Home");
                    //}

                    //if ((UsernameQuery).Equals(emp.UserName) && (emp.UserPass).Equals(PasswordQuery)){
                    //    return RedirectToAction("Welcome", "Home");
                    //}
                }
            }
            catch(Exception)
            {
                ModelState.AddModelError(string.Empty, "Invalid Credentials");
            }

            
            return View(emp);
        }

        public ActionResult Welcome()
        {
            return View();
        }

        public ActionResult Data()
        {
            Employee emp = new Employee();
            ViewBag.UserName = emp.UserName;
            ViewBag.UserPass = emp.UserPass;

            return View();
        }
    }
}