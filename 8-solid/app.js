class Billing {
    amount = 0;
    
    calculateTotal(sum) {
        return this.amount += sum;
    }
}

class FixBilling extends Billing {
    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    calculateTotal(hours) {
        return this.amount *= hours;
    }
}

class ItemBilling extends Billing {
    calculateTotal(items) {
        return this.amount *= items;
    }
}

const billing = new Billing();
console.log(billing);
billing.calculateTotal(500);
billing.calculateTotal(-60);
billing.calculateTotal(350);
billing.calculateTotal(-80);
console.log(billing);

const fixBilling = new FixBilling();
console.log(fixBilling.calculateTotal());

const hourBilling = new HourBilling();
console.log(hourBilling.calculateTotal(5));

const itemBilling = new ItemBilling();
console.log(itemBilling.calculateTotal(10));