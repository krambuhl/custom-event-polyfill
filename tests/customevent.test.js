describe('custom-event-polyfill', function () {
  it('should be defined', function() {
    expect(CustomEvent).toBeDefined();
  });

  it('should be defined as a function', function() {
    expect(function() { new CustomEvent('test'); }).not.toThrow();
  });

  it('should work as expected', function() {
    var ev = new CustomEvent('test', { pow: 'blammy' });
    expect(ev.pow).toEqual('blammy');
  });
});