import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckbs")
export default class CkbController {
  @operation({
    summary: "Get Ckbs",
  })
  @get()
  static getCkbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckb",
  })
  @post("{id}")
  static createCkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
