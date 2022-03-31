export class TransactionTsell {
    transactionId: number;
    coinName: string='Tether';
    amount: number;
    total: string;
    buyOrSell: string='Prodaja';
    cryptoAdress: string;
    userId: string;
}

export class TransactionTbuy {
    transactionId: number;
    coinName: string='Tether';
    amount: number;
    total: string;
    buyOrSell: string='Kupovina';
    cryptoAdress: string;
    userId: string;
}
