import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxm")
export default class KxmController {
  @operation({
    summary: "Get Kxm",
  })
  @get()
  static getKxm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxm",
  })
  @post("{id}")
  static createKxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
