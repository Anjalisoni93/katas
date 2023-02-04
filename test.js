class C {
  public d: number;
  constructor(e: number) {
    this.d = e;
  }
}
function blah(a: number, b: number[], c: C) {
  a = 4;
  b[0] = 5;
  c.d = 6;
}
let a = 0;
let b = [1, 2];
let c = new C(3);
blah(a, b, c);
print(a);  
print(b);  
print(c);  