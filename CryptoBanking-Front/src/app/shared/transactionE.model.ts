export class TransactionEsell {
    transactionId: number;
    coinName: string='Ethereum';
    amount: number;
    total: string;
    buyOrSell: string='Prodaja';
    cryptoAdress: string;
    userId: string;
}

export class TransactionEbuy {
    transactionId: number;
    coinName: string='Ethereum';
    amount: number;
    total: string;
    buyOrSell: string='Kupovina';
    cryptoAdress: string;
    userId: string;
}

