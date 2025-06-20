"use client";

export default function Header() {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

  function handleClick() {
    console.log("Clicked");
  }
  return (
    <div>
      <header className="p-8 md:grid grid-cols-3 grid-rows-1 gap-4">
        <div className="text-2xl hidden md:block">{companyName}</div>
        <div className="justify-center gap-4 md:flex hidden">
          <button onClick={handleClick}>Все туры</button>
          <button onClick={handleClick}>Отзывы</button>
          <button onClick={handleClick}>Контакты</button>
        </div>
        <div className="">
            <span className="mdi mdi-menu text-3xl md:flex justify-end"></span>
        </div>
      </header>
    </div>
  );
}
