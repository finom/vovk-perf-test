import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ties")
export default class TyController {
  @operation({
    summary: "Get Ties",
  })
  @get()
  static getTies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ty",
  })
  @post("{id}")
  static createTy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
