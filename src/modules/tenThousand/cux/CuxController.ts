import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuxes")
export default class CuxController {
  @operation({
    summary: "Get Cuxes",
  })
  @get()
  static getCuxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cux",
  })
  @post("{id}")
  static createCux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
