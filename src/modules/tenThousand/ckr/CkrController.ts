import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckrs")
export default class CkrController {
  @operation({
    summary: "Get Ckrs",
  })
  @get()
  static getCkrs = procedure({
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
