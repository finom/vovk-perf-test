import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxgs")
export default class KxgController {
  @operation({
    summary: "Get Kxgs",
  })
  @get()
  static getKxgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxg",
  })
  @post("{id}")
  static createKxg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
