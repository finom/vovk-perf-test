import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckws")
export default class CkwController {
  @operation({
    summary: "Get Ckws",
  })
  @get()
  static getCkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckw",
  })
  @post("{id}")
  static createCkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
