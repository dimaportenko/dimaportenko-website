import { createThemeAction } from "remix-themes";

import { themeSessionResolver } from "@/modules/color-scheme/server";

export const action = createThemeAction(themeSessionResolver);
