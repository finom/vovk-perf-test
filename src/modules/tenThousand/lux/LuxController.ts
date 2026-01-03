import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luxes")
export default class LuxController {
  @operation({
    summary: "Get Luxes",
  })
  @get()
  static getLuxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lux",
  })
  @post("{id}")
  static createLux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
