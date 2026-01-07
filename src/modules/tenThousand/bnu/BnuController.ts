import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnu")
export default class BnuController {
  @operation({
    summary: "Get Bnu",
  })
  @get()
  static getBnu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnu",
  })
  @post("{id}")
  static createBnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
