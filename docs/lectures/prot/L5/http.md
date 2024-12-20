import PDU from '../../../../static/lib/pdu'
import Mermaid from '../../../../static/lib/Mermaid'
import IframeComponent from '../../../../static/lib/iframe'

# HTTP

**HTTP** (*HyperText Transfer Protocol*) — это протокол прикладного уровня для передачи данных в интернете. Он используется для взаимодействия между клиентом (обычно браузером) и сервером. 

## Версии HTTP
- **HTTP/1.0**: Первая версия, которая поддерживает одно соединение на запрос.
- **HTTP/1.1** (наиболее распространенная): Ввела улучшения, такие как постоянные соединения и поддержку заголовков.
- **HTTP/2**: Внедрила двоичный формат, мультиплексирование запросов и сжатие заголовков.
- **HTTP/3**: Использует протокол QUIC (основанный на UDP), что ускоряет загрузку данных и повышает надежность соединений.

## Соедиения HTTP

Соединения в HTTP — это основа для передачи данных между клиентом (обычно браузером) и сервером. Рассмотрим ключевые аспекты работы соединений HTTP:

### Одноразовые соединения (HTTP/1.0)

- Для каждого запроса клиент открывает новое соединение, получает ответ и закрывает его.
- Проблемы:
  - Высокие накладные расходы на открытие и закрытие соединений.
  - Замедленная передача данных.

### Постоянные соединения (HTTP/1.1 и выше)

- Соединение остается открытым для нескольких запросов и ответов.
- Поддерживается с помощью заголовка `Connection: keep-alive` (по умолчанию в HTTP/1.1).
- Преимущества:
  - Уменьшает накладные расходы на установку соединений.
  - Ускоряет передачу данных.

#### Контейнер соединения (Connection Container)

Контейнер соединения можно рассматривать как механизм, который позволяет компьютеру пользовалеля запрашивать от сервера данные до прихода уже запрошенных:

![](../../imgs/httpContainer.drawio.svg)


## HTTP-методы

Методы HTTP указывают на действие, которое клиент хочет выполнить:
- **GET**: Получение данных с сервера.
- **POST**: Отправка данных на сервер (например, форма или файл).
- **PUT**: Обновление или создание ресурса.
- **DELETE**: Удаление ресурса.
- **HEAD**: Получение заголовков ответа без тела.
- **OPTIONS**: Запрос поддерживаемых сервером методов.
- **PATCH**: Частичное обновление ресурса.


### Пример GET-запроса

```
GET /api/v1/users HTTP/1.1
Host: example.com
Accept: application/json
User-Agent: MyApp/1.0
```

### Расшифровка:
- `GET`: HTTP-метод, запрашивающий ресурс (в данном случае `/api/v1/users`).
- `Host`: Указывает домен сервера (`example.com`).
- `Accept`: Указывает, что клиент ожидает ответ в формате `application/json`.
- `User-Agent`: Идентифицирует клиента, который отправил запрос.

### Пример ответа сервера (200 OK)

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 85

{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    }
  ]
}
```

### Расшифровка:
- **Статусная строка**: `HTTP/1.1 200 OK` указывает, что запрос успешен.
- **Заголовки**:
  - `Content-Type`: Формат данных ответа (`application/json`).
  - `Content-Length`: Длина тела ответа в байтах.
- **Тело ответа**: JSON-объект с данными, запрошенными клиентом.

### HTTP-заголовки
Заголовки передают дополнительную информацию:
1. **Общие**:
   - `Cache-Control`: Управляет кэшированием.
   - `Content-Type`: Указывает тип данных (например, `text/html`, `application/json`).
2. **Заголовки запроса**:
   - `User-Agent`: Идентификация клиента.
   - `Accept`: Форматы, которые клиент может обработать.
3. **Заголовки ответа**:
   - `Set-Cookie`: Устанавливает куки.
   - `Content-Encoding`: Тип сжатия (например, gzip).

## Коды состояния HTTP
HTTP-коды состояния делятся на группы:
- **1xx (Информационные)**: Запрос принят, обработка продолжается.
  - 100 Continue
  - 101 Switching Protocols
- **2xx (Успех)**: Запрос успешно обработан.
  - 200 OK
  - 201 Created
  - 204 No Content
- **3xx (Перенаправление)**: Требуется дополнительное действие.
  - 301 Moved Permanently
  - 302 Found
  - 304 Not Modified
- **4xx (Ошибки клиента)**: Ошибка со стороны клиента.
  - 400 Bad Request
  - 401 Unauthorized
  - 403 Forbidden
  - 404 Not Found
- **5xx (Ошибки сервера)**: Ошибка на стороне сервера.
  - 500 Internal Server Error
  - 502 Bad Gateway
  - 503 Service Unavailable


