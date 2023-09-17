import { Heading, Paragraph } from "."

const About = () => {
  return (
    <div className="relative text-muted-foreground flex flex-col my-6 md:my-12">
      <div className="grid gap-6">
        <div>
          <Heading
            typeStyle="heading-2xl"
            className="uppercase text-foreground mb-4"
          >
            Adesida Adeleye Alexander
          </Heading>
          <Paragraph typeStyle="body-xl">
            I've always been someone who's up for any challenge and keen on
            writing minimal and highly functional code while at the same time
            creating a good product to the best of my abilities.
          </Paragraph>
        </div>

        <Paragraph typeStyle="body-xl">
          Over the past year, I have working on various projects ranging from
          Open Source to paid gigs to personal projects. I'm always ready to
          learn and correct my mistakes, I'm comfortable working in
          cross-functional teams with designers, engineers and product managers.
        </Paragraph>
      </div>
    </div>
  )
}

export default About

{
  /* <img
          src="/leye.svg"
          alt="Avatar"
          width={100}
          height={100}
          loading="lazy"
          className="absolute -top-12 left-4"
        /> */
}
