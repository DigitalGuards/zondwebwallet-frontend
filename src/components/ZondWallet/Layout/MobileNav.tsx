import { Users, SendHorizontal, QrCode, Settings as SettingsIcon, Plus, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/router/router";
import { handleLogout } from "@/utilities/logoutUtil";

const navItems = [
    {
        icon: Users,
        label: "Wallets",
        path: ROUTES.ACCOUNT_LIST,
    },
    {
        icon: SendHorizontal,
        label: "Send",
        path: ROUTES.ACCOUNT_DETAILS,
    },
    {
        icon: QrCode,
        label: "QR View",
        path: ROUTES.QR_VIEW,
    },
    {
        icon: Plus,
        label: "ZRC20",
        path: ROUTES.CREATE_TOKEN,
    },
    {
        icon: SettingsIcon,
        label: "Settings",
        path: ROUTES.SETTINGS,
    },
]

export default function MobileNav() {
    const navigate = useNavigate();
    
    const onLogoutClick = () => {
        handleLogout(navigate);
    };

    return (
        <nav className="md:hidden fixed bottom-6 border-t-2 border-t-secondary border-t-opacity-50 bg-background w-full z-10 h-14 flex items-center justify-around px-4 pt-0">
            {
                navItems.map((item) => (
                    <button key={item.path} className="cursor-pointer flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => navigate(item.path)}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                    </button>
                ))
            }
            <button className="cursor-pointer flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={onLogoutClick}>
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
            </button>
        </nav>
    )
}
