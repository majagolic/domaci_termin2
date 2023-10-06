/*Zadatak 1
Napisati program koji ce za zadatu matricu A sabrati elemente na glavnoj i sporednoj dijagonali i to prikazati kao rezultat.

	1	2	3
A = 4	5	6
	7	8	9*/

    var A = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];

      var zbirGlavna = 0;
      var zbirSporedna = 0;

      for(var i = 0; i < A.length; i++){

        zbirGlavna += A[i][i];

        zbirSporedna += A[i][A.length -i -1];
      }

      console.log("Zbir glavne dijagonele je " + zbirGlavna);

      console.log("Zbir sporedna dijagonele je " + zbirSporedna);

/*Zadatak 2
Napisati program koji ce za zadatu matricu sabrati vrednosti elemenata iz druge kolone i treceg reda i to prikazati kao rezultat.


	1	2	3	5
A = 4	5	6	8
	7	8	9	9
	8	5	3	1*/

    var A = [
        [1, 2, 3, 5],
        [4, 5, 6, 8],
        [7, 8, 9, 9],
        [8, 5, 3, 1]
      ];

      var zbirTrecegReda = 0;
      var zbirDrugeKolone = 0;
      

      for(var i = 0; i < A[2].length; i++){

        zbirTrecegReda += A[2][i];
      }
      for(var i = 0; i < A.length; i++){

        zbirDrugeKolone += A[i][1];
      }
      console.log("Ukupan zbir je " + (zbirDrugeKolone + zbirTrecegReda));

      /*Zadatak 3
Napisati program koji za zadatu matricu kao krajnji rezultat vraca zbir elemenata ciji je ostatak pri deljenju sa 2 jednak 0.

	1	2	3	5 
A = 4	5	6	8
	7	8	9	9
	8	5	3	1*/

    var A = [
        [1, 2, 3, 5],
        [4, 5, 6, 8],
        [7, 8, 9, 9],
        [8, 5, 3, 1]
      ];

      zbirParnihBrojeva = 0;

      for(var i = 0; i < A.length; i++){
        for(var j = 0; j < A[i].length; j++){
            if(A[i][j] % 2 == 0){
                zbirParnihBrojeva += A[i][j];
            }
        }
      }
      console.log("Zbir je " + zbirParnihBrojeva);

      /*Zadatak 4
Napisati program koji u zadatoj matrici menja brojeve 3 sa brojem 0, a brojeve 5 sa -1.

	1	2	3	5 
A = 3	5	6	8
	7	8	9	3
	8	5	3	1*/

    var A = [
        [1, 2, 3, 5],
        [3, 5, 6, 8],
        [7, 8, 9, 3],
        [8, 5, 3, 1]
      ];

      for(var i = 0; i < A.length; i++){
        for(var j = 0; j < A[i].length; j++){
            if(A[i][j] == 3){
                A[i][j] = 0;
            }
            if(A[i][j] == 5){
                A[i][j] = -1;
            }
        }
      }
      console.log("Matrica je: " + A);


      /*Zadatak 5
Napisati program za konverziju Farenhajta u Celzijuse.
Formula farenhajt u celzijus: (F - 32) * 5/9 = C
Formula celzijus u farenhajt: C * 9/5 + 32 = F*/

function FtoC (farenhajt){
    return(farenhajt - 32) * 5/9;
}

function CtoF (celzijus){
    return(celzijus * 9/5 + 32);
}
console.log("96 farenhajta je " + FtoC(96) + " celzijusa");
console.log("20 celzijusa je " + CtoF(20) + " farenhajta");

/*Zadatak 6
Napisati program koji ispisuje vrednosti stepeni Celzijusa i Farenhajta 
za svakih 10 stepeni od 0 do 100 stepeni Celzijusa.*/

for(var i = 0; i <= 100; i+=10){
    console.log( i + "celzijusa je " + CtoF(i) + " farenhajta");
}







      