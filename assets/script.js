const loves = document.querySelectorAll(".love"),
			downloads = document.querySelectorAll(".download"),
			deletes = document.querySelectorAll(".delete");

init();

function init() {
	like();
	download();
	deleted();
}

function like() {
	loves.forEach(function(love) {
		love.addEventListener("click", function() {
			alert("You have liked this picture");
		})
	})
}

function download() {
	downloads.forEach(function(download) {
		download.addEventListener("click", function() {
			alert("Your download is ready. Wait for a moment!")
		})
	})
}

function deleted() {
	deletes.forEach(function(deleted) {
		deleted.addEventListener("click", function() {
			alert("You have deleted the picture.")
		})
	})
}