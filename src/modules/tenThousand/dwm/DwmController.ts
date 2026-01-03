import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwms")
export default class DwmController {
  @operation({
    summary: "Get Dwms",
  })
  @get()
  static getDwms = procedure({
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
