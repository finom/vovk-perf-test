import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckr")
export default class CkrController {
  @operation({
    summary: "Get Ckr",
  })
  @get()
  static getCkr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckr",
  })
  @post("{id}")
  static createCkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
