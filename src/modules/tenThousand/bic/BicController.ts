import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bics")
export default class BicController {
  @operation({
    summary: "Get Bics",
  })
  @get()
  static getBics = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bic",
  })
  @post("{id}")
  static createBic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
