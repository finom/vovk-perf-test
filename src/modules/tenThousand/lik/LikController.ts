import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liks")
export default class LikController {
  @operation({
    summary: "Get Liks",
  })
  @get()
  static getLiks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lik",
  })
  @post("{id}")
  static createLik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
