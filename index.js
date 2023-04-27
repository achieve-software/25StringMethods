//STRİNG METHODS

let text2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

let sonuc = "";

sonuc = text2.toLowerCase(); // tüm texti küçük harfe çevirir
sonuc = text2.toUpperCase(); //tüm texti büyük harfe çevirir
sonuc = text2.length; //textin uzunluğunu verir
sonuc = text2.length - 1; //textin kaç indexli olduğunu verir
sonuc = text2[0]; //L
sonuc = text2[1]; //o
//------------------------------------------------------------------
sonuc = text2.slice(0, 4); //0. indexten 4 ya kadar kes ve al //Lore
sonuc = text2.slice(10); // 10.indexten basla sona kadar kes ve al
sonuc = text2.slice(-4); //-4. indexten basla sona kadar kes ve al //lit.
sonuc = text2.slice(-4, -2); //-4. indexten basla -2 ye kadar kes ve al //li
//------------------------------------------------------------------
sonuc = text2.substring(0, 4); //0. indexten 4 ya kadar kes ve al //Lore
sonuc = text2.substring(10); // 10.indexten basla sona kadar kes ve al
//--------------------------------------------------------------------
sonuc = text2.replace("Lorem", "Merhaba"); //Bulduğu ilk Lorem kelimesinin yerine Merhaba yazar
sonuc = text2.replaceAll("Lorem", "Merhaba"); //replaceAll() ise tüm kelimeleri değiştirir.
//--------------------------------------------------------------------
sonuc = text2.trim(); //metnin başında ve sonunda boşluk varsa o boşluğu siler
sonuc = text2.trimEnd(); //metnin sonunda boşluk varsa o boşluğu siler
sonuc = text2.trimStart(); //metnin başında boşluk varsa o boşluğu siler
//--------------------------------------------------------------------
sonuc = text2.charAt(0); //verilen indexteki harfi döndürür //L

//--------------------------------------------------------------------
sonuc = text2.split(""); // A string can be converted to an array with the split() method://tırnak içerisine verdiğim karaktere kadar eleman eleman böler ve dizi oluşturur
sonuc = text2.split("")[0];
//--------------------------------------------------------------------
text1 = "merhaba";
sonuc = text2.concat(text1); //iki stringi birleştirir
//--------------------------------------------------------------------
sonuc = text2.includes("Lorem"); //true // verilen kelimeyi içeriyor mu diye bakar

//--------------------------------------------------------------------
sonuc = text2.indexOf("ipsum"); //soldan sağa tarar ilk bulduğu ifadenin başladığı indexi döndürür yoksa -1 döndürür.

//--------------------------------------------------------------------
sonuc = text2.lastIndexOf("ipsum"); //soldan sağa tarar en son bulduğunun başladığı indexi verir. yoksa -1 döndürür.

//--------------------------------------------------------------------
sonuc = text2.search("ipsum"); //soldan sağa tarar ilk bulduğu ifadenin başladığı indexi döndürür yoksa -1 döndürür.

//--------------------------------------------------------------------
sonuc = text2.startsWith("Lorem"); //Lorem ile mi başlıyor true veya false döndürür.//true

//--------------------------------------------------------------------
sonuc = text2.endsWith("elit."); //elit. ile mi bitiyor true veya false döndürür.//true

// console.log(sonuc);
