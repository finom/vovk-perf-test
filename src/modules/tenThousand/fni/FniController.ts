import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fni")
export default class FniController {
  @operation({
    summary: "Get Fni",
  })
  @get()
  static getFni = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fni",
  })
  @post("{id}")
  static createFni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
