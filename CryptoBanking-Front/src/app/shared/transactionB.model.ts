export class TransactionBsell {
    transactionId: number;
    coinName: string='Bitcoin';
    amount: number;
    total: string;
    buyOrSell: string='Prodaja';
    cryptoAdress: string;
    userId: string;
}

export class TransactionBbuy {
    transactionId: number;
    coinName: string='Bitcoin';
    amount: number;
    total: string;
    buyOrSell: string='Kupovina';
    cryptoAdress: string;
    userId: string;
}
