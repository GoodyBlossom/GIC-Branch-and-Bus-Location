import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { i as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as Phone, c as MapPin, d as ExternalLink, f as Clock, g as Bus, h as Check, i as Sun, l as Instagram, m as ChevronDown, n as X, o as Moon, p as ChevronUp, r as User, s as Menu, t as Youtube, u as Facebook } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C2M4Azeo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var branches = [
	{
		id: "hq-goodland",
		name: "HQ – The Goodland",
		region: "Lagos",
		location: "Oworoshoki, Lagos",
		scope: "Nigeria",
		serviceTimes: [{
			label: "Sunday",
			value: "07:15AM · 09:00AM · 10:45AM"
		}, {
			label: "Wednesday Midweek",
			value: "06:00PM"
		}],
		address: "The Goodland, Ifako Bus Stop, Oworoshoki Expressway, Lagos",
		mapQuery: "The Goodland, Ifako Bus Stop, Oworoshoki Expressway, Lagos"
	},
	{
		id: "surulere",
		name: "Surulere Center",
		region: "Lagos",
		location: "Surulere, Lagos",
		scope: "Nigeria",
		serviceTimes: [{
			label: "Sunday",
			value: "07:30AM · 09:30AM · 11:30AM"
		}, {
			label: "Wednesday Midweek",
			value: "06:00PM"
		}],
		address: "277 Babs Animashaun, Surulere, Lagos",
		mapQuery: "277 Babs Animashaun, Surulere, Lagos"
	},
	{
		id: "lekki",
		name: "Lekki Center",
		region: "Lagos",
		location: "Lekki, Lagos",
		scope: "Nigeria",
		serviceTimes: [{
			label: "Sunday",
			value: "09:00AM"
		}, {
			label: "Wednesday Midweek",
			value: "06:00PM"
		}],
		address: "L'avenida Multipurpose Hall, Lakeview Park One, Opp. Ikota Shopping Complex after VGC",
		mapQuery: "Lakeview Park One, Ikota, Lekki, Lagos"
	},
	{
		id: "abuja",
		name: "Abuja Center",
		region: "Abuja",
		location: "Wuse, Abuja",
		scope: "Nigeria",
		venue: "Decency Event Center, Accra Street, Wuse Zone 5, Abuja",
		enquiries: ["08068059584", "08068594949"],
		mapQuery: "Decency Event Center, Accra Street, Wuse Zone 5, Abuja"
	},
	{
		id: "hamilton",
		name: "Hamilton Center",
		region: "Canada",
		location: "Hamilton, Ontario, Canada",
		scope: "International",
		venue: "Courtyard Hotel, 1224 Upper James, Hamilton, Ontario, Canada L9C 3B1",
		mapQuery: "Courtyard Hotel, 1224 Upper James, Hamilton, Ontario, Canada L9C 3B1"
	},
	{
		id: "maryland",
		name: "Maryland Center",
		region: "USA (Maryland)",
		location: "Lanham, Maryland, USA",
		scope: "International",
		serviceTimes: [{
			label: "Weekend Service",
			value: "04:00PM EST"
		}],
		address: "5900 Princess Garden Parkway, Suite 430, Lanham, MD 20706",
		mapQuery: "5900 Princess Garden Parkway, Suite 430, Lanham, MD 20706"
	}
];
var transportStates = [{
	name: "Lagos",
	areas: [
		{
			name: "Agbara / Oko Afo",
			stops: [{
				id: "lagos-agbara",
				name: "MRS Fuel Station",
				area: "Agbara / Oko Afo",
				managerName: "Ebenezer",
				phone: "09029277207",
				mapQuery: "MRS Fuel Station, Agbara, Lagos"
			}]
		},
		{
			name: "Iyana Iba",
			stops: [{
				id: "lagos-iyana-iba",
				name: "Aratunmi Bus-Stop",
				area: "Iyana Iba",
				managerName: "Alex",
				phone: "08052863586",
				mapQuery: "Aratunmi Bus-Stop, Iyana Iba, Lagos"
			}]
		},
		{
			name: "Isolo / Cele / Jakande Gate",
			stops: [{
				id: "lagos-isolo-cele-jakande",
				name: "Jakande (MRS Filling Station) & Cele Bus-Stop",
				area: "Isolo / Cele / Jakande Gate",
				managerName: "Temi",
				phone: "08133367072",
				mapQuery: "Jakande MRS Filling Station, Isolo, Lagos"
			}]
		},
		{
			name: "Alagbole / Akute",
			stops: [{
				id: "lagos-alagbole-akute",
				name: "Four Square Gospel Church Junction, Akute",
				area: "Alagbole / Akute",
				managerName: "Michael",
				phone: "08135386750",
				mapQuery: "Four Square Gospel Church Junction, Akute, Lagos"
			}]
		},
		{
			name: "Ogba / Iju-Ishaga",
			stops: [{
				id: "lagos-ogba-iju",
				name: "Beside BRT Park, Opposite County Estate, Agege",
				area: "Ogba / Iju-Ishaga",
				managerName: "Newton",
				phone: "08037671006",
				mapQuery: "BRT Park, Opposite County Estate, Agege, Lagos"
			}]
		},
		{
			name: "Gbagada / New Garage",
			stops: [{
				id: "lagos-gbagada",
				name: "UBA Ifako / R-Jolad",
				area: "Gbagada / New Garage",
				managerName: "Tope",
				phone: "09075788256",
				mapQuery: "UBA Ifako, Gbagada, Lagos"
			}]
		},
		{
			name: "Ayobo",
			stops: [{
				id: "lagos-ayobo",
				name: "23 Captain David Road, 8/9 Bus-Stop, Ayobo",
				area: "Ayobo",
				managerName: "Faith",
				phone: "08067028304",
				mapQuery: "23 Captain David Road, Ayobo, Lagos"
			}]
		},
		{
			name: "Ikorodu",
			stops: [{
				id: "lagos-ikorodu",
				name: "Benson Bus-Stop, Beside Union Bank, Ikorodu Garage",
				area: "Ikorodu",
				managerName: "Abiodun",
				phone: "07031667710",
				mapQuery: "Benson Bus-Stop, Ikorodu Garage, Lagos"
			}]
		},
		{
			name: "Alimosho / Iyana Ipaja",
			stops: [{
				id: "lagos-alimosho",
				name: "Iyana Ipaja Bus-Stop",
				area: "Alimosho / Iyana Ipaja",
				managerName: "Victoria",
				phone: "08136955641",
				mapQuery: "Iyana Ipaja Bus-Stop, Lagos"
			}]
		},
		{
			name: "Mowe / Ibafo",
			stops: [{
				id: "lagos-mowe-ibafo",
				name: "Mowe AP Filling Station",
				area: "Mowe / Ibafo",
				managerName: "Blessing",
				phone: "08103879518",
				mapQuery: "Mowe AP Filling Station, Lagos"
			}]
		},
		{
			name: "Unilag / Yabatech",
			stops: [{
				id: "lagos-unilag-yabatech",
				name: "Unilag Gate / Ilaje",
				area: "Unilag / Yabatech",
				managerName: "Munachi",
				phone: "08156670376",
				mapQuery: "Unilag Gate, Akoka, Lagos"
			}]
		},
		{
			name: "Oworonshoki",
			stops: [{
				id: "lagos-oworonshoki",
				name: "First Bank, Oworonshoki Road",
				area: "Oworonshoki",
				managerName: "Esther",
				phone: "08184480272",
				mapQuery: "First Bank, Oworonshoki Road, Lagos"
			}]
		},
		{
			name: "Irawo / Owode / Mile 12",
			stops: [{
				id: "lagos-irawo-mile12",
				name: "Irawo Bus-Stop / Mile 12",
				area: "Irawo / Owode / Mile 12",
				managerName: "Omolara",
				phone: "08065916534",
				mapQuery: "Irawo Bus-Stop, Mile 12, Lagos"
			}]
		},
		{
			name: "Ketu / Alapere",
			stops: [{
				id: "lagos-ketu-alapere",
				name: "Tantalizer Eatery, Alapere",
				area: "Ketu / Alapere",
				managerName: "Emmanuel",
				phone: "08027209567",
				mapQuery: "Tantalizer Eatery, Alapere, Lagos"
			}]
		},
		{
			name: "Berger",
			stops: [{
				id: "lagos-berger",
				name: "Berger Bus-Stop",
				area: "Berger",
				managerName: "Linus",
				phone: "07031838141",
				mapQuery: "Berger Bus-Stop, Lagos"
			}]
		},
		{
			name: "Ifako / Yetunde Brown",
			stops: [{
				id: "lagos-ifako-yetunde",
				name: "UBA Ifako",
				area: "Ifako / Yetunde Brown",
				managerName: "Emmanuel",
				phone: "07038497025",
				mapQuery: "UBA Ifako, Lagos"
			}]
		}
	]
}];
var mapEmbedUrl = (query) => `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
var mapLinkUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
var socialLinks = {
	instagram: "https://instagram.com",
	facebook: "https://facebook.com",
	youtube: "https://youtube.com"
};
var churchName = "Global Impact Church";
var STORAGE_KEY = "gic-theme";
function getInitialTheme() {
	if (typeof document !== "undefined" && document.documentElement.classList.contains("dark")) return "dark";
	return "light";
}
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)(getInitialTheme);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch {}
	}, [theme]);
	return {
		theme,
		toggleTheme: (0, import_react.useCallback)(() => {
			setTheme((t) => t === "dark" ? "light" : "dark");
		}, [])
	};
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var links = [{
	href: "#branches",
	label: "Branches"
}, {
	href: "#transport",
	label: "Transport"
}];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { theme, toggleTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.png",
						alt: "Global Impact Church logo",
						className: "h-full w-full object-contain"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate font-display text-lg font-semibold",
					children: churchName
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 sm:flex",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle dark mode",
						onClick: toggleTheme,
						className: "grid h-9 w-9 place-items-center rounded-lg text-foreground transition-colors hover:bg-secondary",
						children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle menu",
						onClick: () => setOpen((v) => !v),
						className: "grid h-9 w-9 place-items-center rounded-lg text-foreground transition-colors hover:bg-secondary sm:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("overflow-hidden border-t border-border transition-all sm:hidden", open ? "max-h-40" : "max-h-0 border-t-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-5xl flex-col px-5 py-2",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
					children: l.label
				}, l.href))
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/40 via-background to-background" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-5 py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }), "Branch & Transport Locator"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 text-4xl leading-tight text-balance sm:text-5xl",
						children: "Find Global Impact Church branch and transport pickup point"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted-foreground text-balance",
						children: "Locate the nearest branch, check service times, and find the bus stop closest to you — all in one simple place."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#branches",
							className: "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Find a Branch"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#transport",
							className: "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bus, { className: "h-4 w-4 text-primary" }), " Bus Transport"]
						})]
					})
				]
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function MapEmbed({ query, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl border border-border bg-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			title: `Map of ${title}`,
			src: mapEmbedUrl(query),
			loading: "lazy",
			referrerPolicy: "no-referrer-when-downgrade",
			className: "h-56 w-full border-0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: mapLinkUrl(query),
			target: "_blank",
			rel: "noreferrer",
			className: "flex items-center justify-center gap-1.5 border-t border-border bg-card px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-secondary",
			children: ["Open in Google Maps", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
		})]
	});
}
function ServiceTimes({ branch }) {
	if (!branch.serviceTimes?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-1.5",
		children: branch.serviceTimes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-2 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 shrink-0 font-medium text-foreground",
				children: [s.label, ":"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 text-muted-foreground",
				children: s.value
			})]
		}, s.label))
	});
}
function BranchCard({ branch }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const place = branch.address ?? branch.venue ?? "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-w-0 items-start justify-between gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "truncate text-lg text-card-foreground",
						children: branch.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: branch.location
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-3",
				children: [branch.serviceTimes?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceTimes, { branch })]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex gap-2.5 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: place })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 pt-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							className: "w-full",
							children: "View Details"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-h-[90vh] overflow-y-auto sm:max-w-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-xl",
							children: branch.name
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-1.5 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 text-primary" }), branch.location]
								}),
								branch.serviceTimes?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "mb-2 flex items-center gap-2 text-sm font-semibold text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-primary" }), " Service Times"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceTimes, { branch })] }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "mb-2 flex items-center gap-2 text-sm font-semibold text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), branch.address ? "Address" : "Venue"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: place
								})] }),
								branch.enquiries?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "mb-2 flex items-center gap-2 text-sm font-semibold text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), " Enquiries"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: branch.enquiries.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${p}`,
										className: "rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent",
										children: p
									}, p))
								})] }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapEmbed, {
									query: branch.mapQuery,
									title: branch.name
								})
							]
						})]
					})]
				})
			})
		]
	});
}
function groupByRegion(list) {
	const map = /* @__PURE__ */ new Map();
	for (const b of list) {
		const arr = map.get(b.region) ?? [];
		arr.push(b);
		map.set(b.region, arr);
	}
	return Array.from(map.entries());
}
function BranchFinder() {
	const [scope, setScope] = (0, import_react.useState)("Nigeria");
	const grouped = (0, import_react.useMemo)(() => groupByRegion(branches.filter((b) => b.scope === scope)), [scope]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "branches",
		className: "scroll-mt-20 py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-wide text-primary",
							children: "Branch Finder"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl sm:text-4xl",
							children: "Find a church branch near you"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Select a location to see available branches, service times and directions."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "tablist",
					"aria-label": "Select location",
					className: "mt-8 inline-flex rounded-xl border border-border bg-card p-1 shadow-soft",
					children: ["Nigeria", "International"].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						role: "tab",
						"aria-selected": scope === s,
						onClick: () => setScope(s),
						className: cn("rounded-lg px-5 py-2 text-sm font-medium transition-colors", scope === s ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"),
						children: s
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-12",
					children: grouped.map(([region, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mb-5 flex items-center gap-3 text-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: region }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm font-normal text-muted-foreground",
								children: [
									list.length,
									" ",
									list.length === 1 ? "branch" : "branches"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: list.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchCard, { branch: b }, b.id))
					})] }, region))
				})
			]
		})
	});
}
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function StopCard({ stop }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
				className: "flex items-center gap-2 text-lg text-card-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bus, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: stop.name
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 flex items-center gap-1.5 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 shrink-0 text-primary" }),
					" ",
					stop.area
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4 shrink-0 text-primary" }),
						" ",
						stop.managerName
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${stop.phone}`,
					className: "flex items-center gap-2 font-medium text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0" }),
						" ",
						stop.phone
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						className: "w-full",
						children: "View on Map"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[90vh] overflow-y-auto sm:max-w-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-display text-xl",
						children: stop.name
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								stop.area,
								" · Manager: ",
								stop.managerName,
								" · ",
								stop.phone
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapEmbed, {
							query: stop.mapQuery,
							title: stop.name
						})]
					})]
				})] })
			})
		]
	});
}
function TransportSection() {
	const [state, setState] = (0, import_react.useState)("");
	const [area, setArea] = (0, import_react.useState)("");
	const hasData = transportStates.length > 0;
	const selectedState = (0, import_react.useMemo)(() => transportStates.find((s) => s.name === state), [state]);
	const areas = selectedState?.areas ?? [];
	const selectedArea = (0, import_react.useMemo)(() => areas.find((a) => a.name === area), [areas, area]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "transport",
		className: "scroll-mt-20 bg-secondary/60 py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-wide text-primary",
						children: "Bus Transport"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl sm:text-4xl",
						children: "Find your nearest pickup point"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Choose a state and area to see available bus stops and contact your bus manager."
					})
				]
			}), !hasData ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-2xl border border-dashed border-border bg-card p-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bus, { className: "mx-auto h-8 w-8 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-medium text-foreground",
						children: "Transport pickup points coming soon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Bus stop details will appear here once they’re added."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mb-1.5 block text-sm font-medium text-foreground",
					children: "State"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state,
					onValueChange: (v) => {
						setState(v);
						setArea("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select state" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: transportStates.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: s.name,
						children: s.name
					}, s.name)) })]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mb-1.5 block text-sm font-medium text-foreground",
					children: "Area"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: area,
					onValueChange: setArea,
					disabled: !selectedState,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select area" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: a.name,
						children: a.name
					}, a.name)) })]
				})] })]
			}), selectedArea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2",
				children: selectedArea.stops.map((stop) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StopCard, { stop }, stop.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted-foreground",
				children: selectedState ? "Select an area to view bus stops." : "Select a state to begin."
			})] })]
		})
	});
}
var socials = [
	{
		href: socialLinks.instagram,
		label: "Instagram",
		Icon: Instagram
	},
	{
		href: socialLinks.facebook,
		label: "Facebook",
		Icon: Facebook
	},
	{
		href: socialLinks.youtube,
		label: "YouTube",
		Icon: Youtube
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo.png",
					alt: "Global Impact Church logo",
					className: "h-14 w-14 object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl font-semibold",
					children: churchName
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-3",
				children: socials.map(({ href, label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": label,
					className: "grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
				}, label))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-5xl px-5 py-4 text-center text-sm text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					churchName,
					". All rights reserved."
				]
			})
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchFinder, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransportSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Index as component };
