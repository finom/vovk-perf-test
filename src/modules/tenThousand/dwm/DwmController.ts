import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwm")
export default class DwmController {
  @operation({
    summary: "Get Dwm",
  })
  @get()
  static getDwm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwm",
  })
  @post("{id}")
  static createDwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
