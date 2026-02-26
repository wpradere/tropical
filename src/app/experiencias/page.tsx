import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import Testimonials from "@/containers/Testimonials";

export default function ExperienciasPage() {
  return (
    <div>
      <Header />
      <div className="pt-32">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
