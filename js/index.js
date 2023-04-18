/*
 * @Author: Kayson Zhang
 * @Date: 2023-04-18
 * @Description: Login
 */

let errCount = 0;
$("#login-button").click(function (event) {
  const userName = document.getElementById("userName").value;
  const pwd = document.getElementById("pwd").value;
  errCount++;
  if (userName == "芊芊" && pwd == "0418" || errCount === 5) {
    if (errCount === 5) {
      alert("算了, 不为难你了！");
    }
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "cake.html";
    }, 2000);
  } else if (errCount === 1) {
    alert("密码错了呢, 提示一下, 想想今天是什么日子？");
  } else if (errCount === 2) {
    alert("再给你一点提示吧, 四位数。");
  } else if (errCount === 3) {
    alert("叫你王笨笨, 还真是没错, 不需要年份哟！");
  } else {
    alert(`emmmm, 你还有 ${5 - errCount} 次机会`);
  }
});
