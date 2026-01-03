import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bygs")
export default class BygController {
  @operation({
    summary: "Get Bygs",
  })
  @get()
  static getBygs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byg",
  })
  @post("{id}")
  static createByg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
