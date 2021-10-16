var images = ["https://kbimages1-a.akamaihd.net/73c58c2c-c205-49ac-a745-86d25c8081ee/1200/1200/False/the-family-book.jpg", "file:///C:/Users/Admin/Pictures/Camera%20Roll/WIN_20210828_15_17_40_Pro%20(2).jpg", "file:///C:/Users/Admin/Pictures/Camera%20Roll/WhatsApp%20Image%202021-10-15%20at%2010.40.40%20PM%20(2).jpeg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book", "Me", "My Parents", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update() {
  i++;
  var numbers_of_family_member_in_array = 5
  if (i > numbers_of_family_member_in_array) {
    i = 0;
  }


  var updatedImage = images[i];

  var updatedName = names[i];

  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;
}
