import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxks")
export default class KxkController {
  @operation({
    summary: "Get Kxks",
  })
  @get()
  static getKxks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxk",
  })
  @post("{id}")
  static createKxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
