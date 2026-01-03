import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckfs")
export default class CkfController {
  @operation({
    summary: "Get Ckfs",
  })
  @get()
  static getCkfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckf",
  })
  @post("{id}")
  static createCkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
