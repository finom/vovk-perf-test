import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbc")
export default class FbcController {
  @operation({
    summary: "Get Fbc",
  })
  @get()
  static getFbc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbc",
  })
  @post("{id}")
  static createFbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
