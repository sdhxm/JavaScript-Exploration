for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 2) {
        break; // Berhenti di angka 2
    }
}

// Break tidak bisa digunakan langsung dalam if-else di luar loop
if (true) {
    // break; // Error: Illegal break statement
    console.log("Break tidak bisa digunakan di luar loop!");
}
