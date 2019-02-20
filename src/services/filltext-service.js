export default class FilltextService {

  __apiBase = 'http://www.filltext.com/'

  async getResource (url) {
    const res = await fetch(`${this.__apiBase}${url}`);
    if(!res.ok) throw new Error(`Could not fetch ${url}`)
    return await res.json();
  }

  async getLiteData() {
    const res = await this.getResource(`?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`);
    return res.map(this._transformList);
  };

  _transformList = (list) => {
    return {
      id: list.id,
      firstName: list.firstName,
      lastName: list.lastName,
      email: list.email,
      phone: list.phone,
      street: list.address.streetAddress,
      city: list.address.city,
      state: list.address.state,
      zip: list.address.zip,
      description: list.description
    };
  };
  
};
