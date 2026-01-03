import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beas")
export default class BeaController {
  @operation({
    summary: "Get Beas",
  })
  @get()
  static getBeas = procedure({
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
