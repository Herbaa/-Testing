import DiscountService from "./DiscountService";
  let service = new DiscountService()
  test('should throw error', () => {
    expect(() => service.getFinalPrice(100)).toThrow('Стратегия скидок не установлена')
  });

  test('should correctly discount', () => {
    const strategy = { apply: (price) => price * 0.6 }
    service.setDiscountStrategy(strategy);
    
    const finalPrice = service.getFinalPrice(1000)
    expect(finalPrice).toBe(600)
  })

  test('should clear history', () => {
    const strategy = { apply: (price) => price * 0.9 }
    service.setDiscountStrategy(strategy);
    
    service.clearHistory()
    
    expect(service.getDiscountHistory()).toEqual([])
  })
