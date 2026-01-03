import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckus")
export default class CkuController {
  @operation({
    summary: "Get Ckus",
  })
  @get()
  static getCkus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cku",
  })
  @post("{id}")
  static createCku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
