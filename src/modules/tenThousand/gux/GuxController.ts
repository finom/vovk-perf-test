import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guxes")
export default class GuxController {
  @operation({
    summary: "Get Guxes",
  })
  @get()
  static getGuxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gux",
  })
  @post("{id}")
  static createGux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
