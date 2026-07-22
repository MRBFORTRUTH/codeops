def generate_transaction_report(input_file="transactions.txt", output_file="report.txt"):
    customer_totals = {}

    try:
        with open(input_file, "r") as file:
            for line in file:
                line = line.strip()
                if not line:
                    continue
                
                name, amount_str = line.split(",")
                amount = float(amount_str)

                if name in customer_totals:
                    customer_totals[name] += amount
                else:
                    customer_totals[name] = amount

    except FileNotFoundError:
        print(f"Error: The file '{input_file}' was not found.")
        return

    sorted_customers = sorted(customer_totals.items(), key=lambda item: item[1], reverse=True)

    print("--- Transaction Summary ---")
    for name, total in sorted_customers:
        print(f"{name}: ${total:.2f}")

    try:
        with open(output_file, "w") as out_file:
            out_file.write("--- Customer Spend Summary ---\n")
            for name, total in sorted_customers:
                out_file.write(f"{name}: ${total:.2f}\n")
        print(f"\nReport successfully generated and saved to '{output_file}'.")
    except Exception as e:
        print(f"An error occurred while writing to '{output_file}': {e}")


generate_transaction_report()