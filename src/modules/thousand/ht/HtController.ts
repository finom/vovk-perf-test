import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ht")
export default class HtController {
  @operation({
    summary: "Get Ht",
  })
  @get()
  static getHt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ht",
  })
  @post("{id}")
  static createHt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
