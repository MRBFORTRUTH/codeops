def split_bill():
    friends = 5
    meal_cost = 1500.0  

    vat = meal_cost * 0.15
    tip = meal_cost * 0.10

    total_bill = meal_cost + vat + tip
    share_per_person = total_bill / friends

    print(f"Meal Cost: {meal_cost}")
    print(f"VAT (15%): {vat}")
    print(f"Tip (10%): {tip}")
    print(f"Total Bill: {total_bill}")
    print(f"Each of the {friends} friends pays: {share_per_person}")

if __name__ == "__main__":
    split_bill()