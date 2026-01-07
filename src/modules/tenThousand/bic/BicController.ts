import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bic")
export default class BicController {
  @operation({
    summary: "Get Bic",
  })
  @get()
  static getBic = procedure({
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
