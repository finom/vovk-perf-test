import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwms")
export default class MwmController {
  @operation({
    summary: "Get Mwms",
  })
  @get()
  static getMwms = procedure({
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
