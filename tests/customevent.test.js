describe('custom-event-polyfill', function () {
  it('should be a okay', function() {
    expect(CustomEvent).toBeDefined();
    expect(new CustomEvent('test')).not.toThrow();
  });
});