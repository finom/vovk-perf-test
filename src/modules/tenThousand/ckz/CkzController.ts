import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckzs")
export default class CkzController {
  @operation({
    summary: "Get Ckzs",
  })
  @get()
  static getCkzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckz",
  })
  @post("{id}")
  static createCkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
