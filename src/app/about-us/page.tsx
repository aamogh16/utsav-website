export default function About() {
  return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About Utsav</h1>
        <div className="space-y-4">
          <p className="text-lg">
            Welcome to Utsav, our vibrant university club dedicated to celebrating culture, community, and creativity.
          </p>
          <p>
            Founded in [year], we bring together students from diverse backgrounds to share experiences,
            learn from each other, and create lasting memories.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cultural events and festivals</li>
            <li>Community service projects</li>
            <li>Social gatherings and networking</li>
            <li>Educational workshops</li>
          </ul>
        </div>
      </div>
  );
}