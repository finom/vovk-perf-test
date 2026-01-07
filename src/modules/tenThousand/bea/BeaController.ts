import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bea")
export default class BeaController {
  @operation({
    summary: "Get Bea",
  })
  @get()
  static getBea = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bea",
  })
  @post("{id}")
  static createBea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
