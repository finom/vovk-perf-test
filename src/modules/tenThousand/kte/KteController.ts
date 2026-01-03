import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktes")
export default class KteController {
  @operation({
    summary: "Get Ktes",
  })
  @get()
  static getKtes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kte",
  })
  @post("{id}")
  static createKte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
