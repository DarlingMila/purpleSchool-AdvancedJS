class Billing {
    amount = 50;

    set sum(sum) {
        return this.amount += sum;
    }

    calculateTotal(sum) {
        if (sum) this.sum = sum;
        return this.amount;
    }
}

class FixBilling extends Billing {

}

class HourBilling extends Billing {

    set sum(hours) {
        return this.amount += hours;
    }
}

class ItemBilling extends Billing {

    set sum(items) {
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
