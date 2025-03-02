import { APP_NAME } from "@/lib/constants";
import SocialLinks from "./social-links";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear} {APP_NAME}. All Rights Reserved
      </div>
      <SocialLinks/>
    </footer>
  );
}
