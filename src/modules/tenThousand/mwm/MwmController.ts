import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwm")
export default class MwmController {
  @operation({
    summary: "Get Mwm",
  })
  @get()
  static getMwm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwm",
  })
  @post("{id}")
  static createMwm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
