import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drgs")
export default class DrgController {
  @operation({
    summary: "Get Drgs",
  })
  @get()
  static getDrgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drg",
  })
  @post("{id}")
  static createDrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
