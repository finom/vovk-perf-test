import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckxes")
export default class CkxController {
  @operation({
    summary: "Get Ckxes",
  })
  @get()
  static getCkxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckx",
  })
  @post("{id}")
  static createCkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
