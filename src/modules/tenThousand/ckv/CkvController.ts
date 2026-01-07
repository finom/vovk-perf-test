import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckv")
export default class CkvController {
  @operation({
    summary: "Get Ckv",
  })
  @get()
  static getCkv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckv",
  })
  @post("{id}")
  static createCkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
