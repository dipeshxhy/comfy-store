const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Welcome to Comfy, your premier destination for exquisite furniture and
        home decor. We believe that everyone deserves a living space that
        perfectly balances style, comfort and functionality. Since our founding,
        we've been passionate about curating high-quality pieces that transform
        houses into homes. Our carefully selected collection features everything
        from plush sofas to elegant dining sets, all backed by our commitment to
        exceptional craftsmanship and customer satisfaction. Whether you're
        furnishing your first apartment or refreshing your forever home, we're
        here to help you create spaces you'll love coming home to.
      </p>
    </>
  );
};
export default About;

// - About Component:
//   - Define the `About` component.
//     - Return a fragment containing the following elements:
//       - A `div` with classes `flex`, `flex-wrap`, `gap-2`, `sm:gap-x-6`, `items-center`, and `justify-center`.
//         - Inside the `div`, an `h1` with classes `text-4xl`, `font-bold`, `leading-none`, and `tracking-tight`, with the text "We love".
//         - Inside the `div`, a `div` with classes `stats`, `bg-primary`, and `shadow`.
//           - Inside the nested `div`, another `div` with class `stat`.
//             - Inside this `div`, a `div` with classes `stat-title`, `text-primary-content`, `text-4xl`, `font-bold`, and `tracking-widest`, containing the text "comfy".
//       - A `p` element with classes `mt-6`, `text-lg`, `leading-8`, `max-w-2xl`, and `mx-auto`, containing sample Lorem ipsum text.
