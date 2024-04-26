export default class FetchHttp {
  private static generic<T, R>(method: string, url: string, body?: T): Promise<R> {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => err);
  }

  static get<R>(url: string) {
    return this.generic<never, R>('GET', url);
  }

  static post<T, R>(url: string, body: T) {
    return this.generic<T, R>('POST', url, body);
  }

  static put<T, R>(url: string, body: T) {
    return this.generic<T, R>('PUT', url, body);
  }

  static remove<R>(url: string) {
    return this.generic<never, R>('DELETE', url);
  }
}
