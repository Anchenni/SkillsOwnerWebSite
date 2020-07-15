function validateForm()
{
	var email = $("#email").val();
	var name = $("#name").val();
	var subject = $("#subject").val();
	var message = $("#contact-form-message").val();

	if (!validateEmail(email))
		return false;
	if (!validateName(name))
		return false;
	if (!validateSubject(subject))
		return false;
	return true;
}

function validateEmail(email)
{
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function validateName(name)
{
	var i = 0;
	while (name[i])
		i++;
	return (i >= 4 ? true : false);
}

function validateSubject(sub)
{
	var i = 0;
	while (sub[i])
		i++;
	return (i >= 8 ? true : false);
}