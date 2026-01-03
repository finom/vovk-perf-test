import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imzs")
export default class ImzController {
  @operation({
    summary: "Get Imzs",
  })
  @get()
  static getImzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imz",
  })
  @post("{id}")
  static createImz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
