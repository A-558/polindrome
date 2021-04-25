function Pl()
			{
				var a, originalNumber, reverse = 0;
				var number = '';
        number=document.getElementById("text").value;
				originalNumber = number;
				while(number>0)
				{
					a = number%10;
					number = parseInt(number/10);
					reverse = reverse*10+a;
				}
				if(reverse==originalNumber)
				{
					console.log("The number is Palindrome");
                    document.getElementById("result").value="The number is Palindrome";
					document.getElementById("result").style.color="green";
				}
				else
				{
					console.log("Number is not palindrome");
        			  document.getElementById("result").value = "Number is not palindrome";
					  document.getElementById("result").style.color="blue";
				}
			}
      