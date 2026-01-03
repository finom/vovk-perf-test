import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duxes")
export default class DuxController {
  @operation({
    summary: "Get Duxes",
  })
  @get()
  static getDuxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dux",
  })
  @post("{id}")
  static createDux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
