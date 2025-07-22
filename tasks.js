// // Zadania 1

// const uzytkownicy = [
//   { imie: 'Anna', wiek: 29, aktywny: true },
//   { imie: 'Piotr', wiek: 16, aktywny: false },
//   { imie: 'Kasia', wiek: 22, aktywny: true },
//   { imie: 'Michał', wiek: 35, aktywny: false },
//   { imie: 'Ewa', wiek: 17, aktywny: true },
//   { imie: 'Jan', wiek: 40, aktywny: true }
// ];


// console.log(uzytkownicy);


// // Stwórz nową tablicę pelnoletniAktywni, która będzie zawierać tylko tych użytkowników, którzy mają co najmniej 18 lat i są aktywni: true.

// const pelnoletniAktywni = uzytkownicy.filter((user) => {
//     return user.wiek > 18 && user.aktywny === true;
// });

// console.log(pelnoletniAktywni);

// // Z nowej tablicy pelnoletniAktywni stwórz kolejną tablicę imionaPelnoletnichAktywnych, która będzie zawierać tylko imiona tych użytkowników.

// const imionaPelnoletnichAktywnych = pelnoletniAktywni.map((user) => user.imie);

// console.log(imionaPelnoletnichAktywnych);

// Zadania 2

// Napisz funkcję symulujPobieranieDanych(nazwaDanych), która:

// 1. Przyjmuje jeden argument: nazwaDanych (string).
// 2. Zwraca nową Promise.
// 3. Wewnątrz Promise, użyj setTimeout, aby po 2 sekundach (symulując opóźnienie pobierania danych) Promise została rozwiązana (resolve) z komunikatem typu: Pobrano dane: [nazwaDanych].
// 4. Wywołaj tę funkcję i użyj .then() do wypisania komunikatu w konsoli po zakończeniu pobierania.

// function symulujPobieranieDanych(nazwaDanych) {
//   return new Promise((resolve) => { 
//     setTimeout(() => {
//       resolve(`Pobrano dane: ${nazwaDanych}`);
//     }, 2000)
//   })
// }

// symulujPobieranieDanych("Jabłko").then(nazwaDanych => {
//   console.log(nazwaDanych)
// })  

// Zadanie 2a: Ładowanie Obrazka

// Napisz funkcję ladujObrazek(nazwaPliku), która:

// 1. Przyjmuje jeden argument: nazwaPliku (string, np. 'zdjecie.jpg').

// 2. Zwraca nową Promise.

// 3. Wewnątrz Promise, użyj setTimeout, aby po 1.5 sekundach (1500 ms) Promise została rozwiązana (resolve) z komunikatem: Obrazek "${nazwaPliku}" został pomyślnie załadowany..

// 4. Wywołaj tę funkcję dla kilku różnych nazw plików (np. 'profil.png', 'tlo.gif') i użyj .then() do wypisania komunikatu w konsoli po zakończeniu ładowania każdego obrazka.

// function ladujObrazek(nazwaPliku) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Obrazek "${nazwaPliku}" został pomyślnie załadowany.`)
//     }, 1500)
//   })
// };

// ladujObrazek("profil.png").then(nazwaPliku => {
//   console.log(nazwaPliku)
// })

// Napisz funkcję potwierdzTransakcje(idTransakcji), która:

//  1. Przyjmuje jeden argument: idTransakcji (liczba lub string, np. 12345).
// 2. Zwraca nową Promise.
// 3. Wewnątrz Promise, użyj setTimeout, aby po 3 sekundach (3000 ms) Promise została rozwiązana (resolve) z obiektem zawierającym:
// a. id: przekazane idTransakcji.
// b. status: 'Zatwierdzona'.
// c. data: aktualna data i czas (możesz użyć new Date().toLocaleString()).
// 4. Wywołaj tę funkcję dla co najmniej dwóch różnych ID transakcji i użyj .then() do wypisania w konsoli tylko statusu transakcji (np. Transakcja 12345: Zatwierdzona) po zakończeniu procesu.


// function potwierdzTransakcje(idTransakcji) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(obj = {
//         id: idTransakcji,
//         status: 'Zatwierdzona',
//         data: (new Date().toLocaleDateString())
//       })
//     }, 3000)
//   });
// };

// potwierdzTransakcje(12345).then(idTransakcji => {
//   console.log(`Transakcja ${idTransakcji.id}: ${idTransakcji.status}`)
// })

// Modyfikując funkcję z Zadania 2:

// Zmień funkcję symulujPobieranieDanych tak, aby w 25% przypadków (możesz użyć Math.random() < 0.25) Promise była odrzucana (reject) z komunikatem błędu, np. Błąd podczas pobierania danych: [nazwaDanych].
// Napisz funkcję asynchroniczną pobierzWieleDanych(), która użyje pętli (for lub forEach) i await do pobrania trzech różnych zestawów danych (np. 'Użytkownicy', 'Produkty', 'Zamówienia') za pomocą Twojej zmodyfikowanej funkcji symulujPobieranieDanych.
// Użyj bloku try...catch w funkcji pobierzWieleDanych(), aby obsłużyć potencjalne błędy pobierania i wypisać odpowiedni komunikat w konsoli, gdy wystąpi błąd.
// Wypisz w konsoli 'Rozpoczęto pobieranie...' przed pętlą i 'Zakończono pobieranie.' po pętli (lub po obsłudze błędów).

// function symulujPobieranieDanych(nazwaDanych) {
//   return new Promise((resolve, reject) => { 
//     setTimeout(() => {
//       if (Math.random() < 0.25) {
//         reject(`Błąd podczas pobierania danych: ${nazwaDanych}`);
//       } else {
//         resolve(`Pobrano dane: ${nazwaDanych}`);
//       }
//     }, 2000)
//   })
// }

// async function pobierzWieleDanych() {

//   try {
//     console.log("Rozpoczęto pobieranie...")
//     for (let i = 0; i<3; i++){
//       let chance = Math.random();
//       if (chance < 0.33) {
//         value = "Jabłko"
//       } else if (chance < 0.66) {
//         value = "Gruszka"
//       } else {
//         value = "Pomarańcza"
//       }
//       const wynikSymulujPobieranieDanych = await symulujPobieranieDanych(value)
//       console.log(wynikSymulujPobieranieDanych)
//     }
//     console.log("Zakończono pobieranie.")
//   }
//   catch(error) {
//     console.error(error)
//   }
  
// }

// pobierzWieleDanych()

// Napisz funkcję sprawdzDostep(uzytkownikId), która:

// Zwraca Promise.
// Symuluje sprawdzanie dostępu do zasobu z 1.5-sekundowym opóźnieniem (setTimeout).
// Jeśli uzytkownikId jest liczbą parzystą (np. 10, 22), Promise powinna zostać rozwiązana (resolve) z komunikatem: Dostęp dla użytkownika ${uzytkownikId} potwierdzony..
// Jeśli uzytkownikId jest liczbą nieparzystą (np. 5, 17), Promise powinna zostać odrzucona (reject) z komunikatem: Błąd: Brak dostępu dla użytkownika ${uzytkownikId}..
// Następnie napisz funkcję asynchroniczną testujDostepUzytkownikow(), która:
// Użyje pętli, aby spróbować sprawdzić dostęp dla trzech różnych użytkowników (np. 10, 5, 22).
// Dla każdego sprawdzenia użyj await oraz try...catch do obsługi wyniku.
// Wypisz w konsoli odpowiedni komunikat (Dostęp potwierdzony... lub Błąd dostępu...) w zależności od wyniku każdej operacji.
// Wypisz 'Rozpoczynam testowanie dostępu...' na początku i 'Zakończono testowanie dostępu.' na końcu funkcji.

// const usersId = [10, 5, 22]

// function sprawdzDostep(uzytkownikId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (uzytkownikId % 2 === 0) {
//         resolve(`Dostęp dla użytkownika ${uzytkownikId} potwierdzony.`)
//       } else {
//         reject(`Błąd: Brak dostępu dla użytkownika ${uzytkownikId}.`)
//       }
//     }, 1500)
//   });
// };

// async function testujDostepUzytkownikow() {
//   try {
//     console.log('Rozpoczynam testowanie dostępu...');
//     for (let i=0; i<usersId.length; i++) {
//       const wynikTestu = await sprawdzDostep(usersId[i]);
//       console.log(wynikTestu);
//     }
//     console.log("Zakończono testowanie dostępu.");
//   }
//   catch(error) {
//     console.error(error);
//   }
// };

// testujDostepUzytkownikow();

// Masz tablicę nazwyPlikow: ['dane1.txt', 'obrazek.jpg', 'logi.log', 'raport.pdf'].
// Napisz funkcję pobierzPlik(nazwaPliku), która:
// Zwraca Promise.
// Symuluje pobieranie pliku z opóźnieniem zależnym od nazwy pliku:
// Jeśli nazwa pliku zawiera "obrazek", opóźnienie wynosi 3 sekundy.
// Jeśli nazwa pliku zawiera "raport", opóźnienie wynosi 4 sekundy.
// W pozostałych przypadkach opóźnienie wynosi 2 sekundy.
// W 20% przypadków (użyj Math.random() < 0.2) Promise powinna zostać odrzucona (reject) z komunikatem: Nie udało się pobrać pliku: ${nazwaPliku}.
// W pozostałych przypadkach Promise powinna zostać rozwiązana (resolve) z komunikatem: Plik ${nazwaPliku} pobrany pomyślnie..
// Następnie napisz funkcję asynchroniczną zarzadzajPobieraniemPlikow(), która:
// Wyświetli w konsoli 'Rozpoczynam pobieranie plików...'.
// Przejdzie przez tablicę nazwyPlikow (możesz użyć pętli for...of lub zwykłej for).
// Dla każdego pliku:
// Użyje await pobierzPlik(nazwaPliku).
// Użyje bloku try...catch do obsługi wyniku każdej operacji.
// Wypisze w konsoli komunikat o sukcesie lub błędzie dla każdego pliku.
// Wyświetli w konsoli 'Zakończono zarządzanie pobieraniem plików.' po przetworzeniu wszystkich plików.

// const nazwyPlikow = ['dane1.txt', 'obrazek.jpg', 'logi.log', 'raport.pdf']

// function pobierzPlik(nazwaPliku) {
//   return new Promise((resolve, reject) => {
//     let value = 0;
//     if (nazwaPliku.includes('obrazek')) {
//       value = 3000
//     } else if (nazwaPliku.includes('raport')) {
//       value = 4000
//     } else {
//       value = 2000
//     }
//     setTimeout(()=> {
//       if (Math.random() < 0.2) {
//         reject(`Nie udało się pobrać pliku: ${nazwaPliku}.`)
//       } else {
//         resolve(`Plik ${nazwaPliku} pobrany pomyślnie.`)
//       }
//     }, value)
//   });
// };

// async function zarzadzajPobieraniemPlikow() {
//   try {
//     console.log('Rozpoczynam pobieranie plików...')
//     for (let i = 0; i < nazwyPlikow.length; i++) {
//       const wynikZarzadzaniaPobieraniaPlikow = await pobierzPlik(nazwyPlikow[i]);
//       console.log(wynikZarzadzaniaPobieraniaPlikow);
//     }
//     console.log('Zakończono zarządzanie pobieraniem plików.')
//   }
//   catch(error) {
//     console.error(error);
//   }
// };

// zarzadzajPobieraniemPlikow()


// Zadanie 5: Obiekt this i Kontekst Wywołania

// Masz obiekt uzytkownik z właściwością imie i metodą powitaj().
// Wywołaj metodę powitaj() bezpośrednio na obiekcie uzytkownik. Co zostanie wypisane?
// Przypisz metodę powitaj do nowej zmiennej nowaFunkcjaPowitania. Wywołaj nowaFunkcjaPowitania(). Co zostanie wypisane i dlaczego tak się stało?
// Użyj metody bind() na nowaFunkcjaPowitania, aby na stałe powiązać ją z obiektem uzytkownik. Nazwij wynik powitanieZbindowane. Wywołaj powitanieZbindowane(). Co teraz zostanie wypisane?

// const uzytkownik = {
//   imie: 'Tester',
//   powitaj: function() {
//     console.log(`Witaj, ${this.imie}!`);
//   }
// };

// uzytkownik.powitaj()
// // console.log(uzytkownik.powitaj())

// const nowaFunkcjaPowitania = uzytkownik.powitaj;

// nowaFunkcjaPowitania();
// // console.log(nowaFunkcjaPowitania())

// const powitanieZbindowane = nowaFunkcjaPowitania.bind(uzytkownik);

// powitanieZbindowane();
// console.log(powitanieZbindowane())


// 1. Wywołaj metodę bezpośrednio
// uzytkownik.powitaj();

// 2. Przypisz do zmiennej i wywołaj
// const nowaFunkcjaPowitania = uzytkownik.powitaj;
// nowaFunkcjaPowitania();

// 3. Użyj bind()
// const powitanieZbindowane = nowaFunkcjaPowitania.bind(uzytkownik);
// powitanieZbindowane();

// Dodaj swoje wywołania i wyjaśnienia poniżej

