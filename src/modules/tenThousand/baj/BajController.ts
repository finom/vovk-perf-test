import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bajs")
export default class BajController {
  @operation({
    summary: "Get Bajs",
  })
  @get()
  static getBajs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Baj",
  })
  @post("{id}")
  static createBaj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
