import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxz")
export default class KxzController {
  @operation({
    summary: "Get Kxz",
  })
  @get()
  static getKxz = procedure({
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
