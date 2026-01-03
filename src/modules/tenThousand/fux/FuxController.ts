import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuxes")
export default class FuxController {
  @operation({
    summary: "Get Fuxes",
  })
  @get()
  static getFuxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fux",
  })
  @post("{id}")
  static createFux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
