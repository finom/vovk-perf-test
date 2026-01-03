import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cks")
export default class CkController {
  @operation({
    summary: "Get Cks",
  })
  @get()
  static getCks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ck",
  })
  @post("{id}")
  static createCk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
