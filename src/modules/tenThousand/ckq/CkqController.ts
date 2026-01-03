import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckqs")
export default class CkqController {
  @operation({
    summary: "Get Ckqs",
  })
  @get()
  static getCkqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckq",
  })
  @post("{id}")
  static createCkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
