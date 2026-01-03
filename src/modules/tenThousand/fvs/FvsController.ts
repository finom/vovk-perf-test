import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvs")
export default class FvsController {
  @operation({
    summary: "Get Fvs",
  })
  @get()
  static getFvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvs",
  })
  @post("{id}")
  static createFvs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
