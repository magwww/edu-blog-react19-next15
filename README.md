# EduBlog 📚

EduBlog to edukacyjny blog stworzony w Next.js 15 i React 19. Pozwala na przeglądanie listy postów oraz wyświetlanie szczegółów wybranego posta.

## 📂 Struktura projektu

```
├── 📂 public/                 # Zasoby statyczne (obrazy, ikony)
├── 📂 src/                    # Główne źródło aplikacji
│   ├── 📂 app/                # Główna aplikacja Next.js
│   │   ├── 📂 (blog)/posts/   # Foldery dla lepszej czytelności i organizacji kodu
│   │   │   ├── 📂 [id]/       # Dynamiczna strona pojedynczego posta
│   │   ├── 📂 components/     # Reużywalne komponenty UI
│   ├── 📂 context/            # Kontekst globalny aplikacji
│   ├── 📂 data/               # Statyczne dane aplikacji
│   ├── 📂 lib/                # Funkcje pomocnicze
│   ├── 📂 sections/           # Sekcje strony (np. kategorie, posty)
│   ├── 📂 services/           # Klient API do pobierania danych
│   ├── 📂 types/              # Definicje typów TypeScript
```

## 🔧 Instalacja i uruchomienie

1. Sklonuj repozytorium:

   ```sh
   git clone https://github.com/magwww/zadanie.git
   cd zadanie
   ```

2. Zainstaluj zależności:

   ```sh
   npm install
   ```

3. Uruchom aplikację w trybie deweloperskim:
   ```sh
   npm run dev
   ```

Aplikacja będzie dostępna pod adresem http://localhost:3000.

## 🚀 Technologie

- **Next.js 15** – Framework do tworzenia aplikacji React
- **React 19** – Biblioteka UI
- **TypeScript** – Statyczne typowanie
- **Tailwind CSS** – Stylowanie
- **Sentry** – Monitoring błędów
- **ESLint & Prettier** – Lintowanie i formatowanie kodu

## 🎯 Funkcjonalności

✅ **Lista postów** – pobieranie postów z API  
✅ **Filtracja** – filtrowanie po kategoriach i ulubionych postach  
✅ **Ulubione posty** – zarządzanie ulubionymi postami w `localStorage`  
✅ **Szczegóły posta** – podstrona `/posts/{id}` z informacjami o poście  
✅ **Obsługa błędów** – globalna obsługa błędów i strony `not-found.tsx`  
✅ **API Client** – abstrakcyjny klient do pobierania danych

## 🌍 API

Dane pobierane są z jsonplaceholder.typicode.com:

- **Lista postów** : GET /posts?\_limit=16
- **Szczegóły posta** : GET /posts/{id}

## 🛠 Możliwości rozwoju projektu:

- Dodanie user analytics - dla dokładnych informacji o zdarzeniach biznesowych w komponencie
- Odkomentowanie sentry i logowanie błędów
- Dodanie testów jednostkowych i integracyjnych
- Rozbudowa klienta api pozwalająca na używanie różnych sposobów komunikacji (http, graphql, websockets)
- Wyświetlanie większej liczby postów, dodanie paginacji
- Możliwość dodawania własnych postów
- Możliwość dodawania komentarzy do postów
