export default function Home() {
	return (
		<main
			style={{
				maxWidth: "900px",
				margin: "0 auto",
				padding: "30px 20px",
				fontFamily: "Arial, sans-serif",
				lineHeight: 1.6,
			}}
		>
			<header style={{ borderBottom: "1px solid #dddddd", paddingBottom: "20px" }}>
				<h1 style={{ margin: 0 }}>Aman Khokhar</h1>
				<p style={{ marginBottom: 0 }}>Welcome to my personal website</p>
			</header>

			<section style={{ padding: "70px 0 50px" }}>
				<p style={{ color: "#666666" }}>Hello, I am</p>
				<h2 style={{ fontSize: "48px", margin: "10px 0" }}>Aman Khokhar</h2>
				<p style={{ maxWidth: "560px", fontSize: "20px" }}>
					I am learning web development and building simple, useful, and creative
					websites with Next.js.
				</p>
				<a
					href="#contact"
					style={{
						display: "inline-block",
						padding: "12px 20px",
						backgroundColor: "#111111",
						color: "white",
						textDecoration: "none",
					}}
				>
					Contact Me
				</a>
			</section>

			<section style={{ borderTop: "1px solid #dddddd", padding: "40px 0" }}>
				<h2>About Me</h2>
				<p>
					My name is Aman Khokhar. I enjoy learning new technology, solving
					problems, and creating projects that help people.
				</p>
			</section>

			<section style={{ borderTop: "1px solid #dddddd", padding: "40px 0" }}>
				<h2>My Skills</h2>
				<ul>
					<li>HTML and JavaScript</li>
					<li>Next.js and React</li>
					<li>Problem solving</li>
					<li>Learning new tools</li>
				</ul>
			</section>

			<section id="contact" style={{ borderTop: "1px solid #dddddd", padding: "40px 0" }}>
				<h2>Contact</h2>
				<p>You can contact me by email:</p>
				<a href="mailto:aman@example.com">aman@example.com</a>
			</section>

			<footer style={{ borderTop: "1px solid #dddddd", paddingTop: "20px", color: "#666666" }}>
				<p>© 2026 Aman Khokhar</p>
			</footer>
		</main>
	);
}
