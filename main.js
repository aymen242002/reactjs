      let a = "Hello it is me Rayan.";
      let i = 0;
      let wordcount = 1;

      while (a[i] != ".") {
        if (a[i] == " ") wordcount++;
        i++;
      }

      while (
        a[i] == "a" ||
        a[i] == "o" ||
        a[i] == "u" ||
        a[i] == "i" ||
        a[i] == "e"
      ) {
        console.log(a.length);
        i++;
      }