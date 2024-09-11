class Storage1<T> {
    private items: T[] = [];
  
    addItem(item: T): void {
      this.items.push(item);
    }
  
    getItems(): T[] {
      return this.items;
    }
  }
  
  const stringStorage = new Storage1<string>();
  stringStorage.addItem("Hello");
  stringStorage.addItem("World");
  console.log(stringStorage.getItems());
  
  const numberStorage = new Storage1<number>();
  numberStorage.addItem(1);
  numberStorage.addItem(2);
  console.log(numberStorage.getItems());
  