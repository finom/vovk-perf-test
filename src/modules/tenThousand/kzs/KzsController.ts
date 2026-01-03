import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzs")
export default class KzsController {
  @operation({
    summary: "Get Kzs",
  })
  @get()
  static getKzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzs",
  })
  @post("{id}")
  static createKzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
