'use client'

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center space-x-4">
        <Menu className="h-6 w-6 md:hidden" />
        <h1 className="text-2xl font-bold">sneakers</h1>
        <Navigation />
      </div>
      <div className="flex items-center space-x-4">
        <ShoppingCart className="h-6 w-6" />
        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
          <Image src="/placeholder.svg" alt="User avatar" width={32} height={32} />
        </div>
      </div>
    </header>
  )
}