import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckh")
export default class CkhController {
  @operation({
    summary: "Get Ckh",
  })
  @get()
  static getCkh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckh",
  })
  @post("{id}")
  static createCkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
