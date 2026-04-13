const CTA = () => {
  return (
    <section className="relative py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-12 md:p-16 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful projects. Let&apos;s discuss how we can bring excellence to your next endeavor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Start Your Project
            </button>
            <button className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto">
              Schedule Call
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-primary/20">
            {[
              {
                icon: '📧',
                label: 'Email',
                value: 'info@daalcrown.com',
              },
              {
                icon: '📱',
                label: 'Phone',
                value: '+1 (555) 123-4567',
              },
              {
                icon: '📍',
                label: 'Address',
                value: 'Business Hub',
              },
              {
                icon: '🕐',
                label: 'Hours',
                value: '24/7 Support',
              },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="text-2xl">{item.icon}</p>
                <p className="text-xs text-foreground/60">{item.label}</p>
                <p className="text-sm font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
