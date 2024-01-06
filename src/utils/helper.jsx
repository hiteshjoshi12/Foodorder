export function filterdata(searchtxt, restrorents) {
    return restrorents.filter((restroList) =>
      restroList.info.name.toLowerCase().includes(searchtxt.toLowerCase())
    );
  }