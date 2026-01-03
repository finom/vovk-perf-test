import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxzs")
export default class KxzController {
  @operation({
    summary: "Get Kxzs",
  })
  @get()
  static getKxzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxz",
  })
  @post("{id}")
  static createKxz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
