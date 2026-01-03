import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzs")
export default class JzsController {
  @operation({
    summary: "Get Jzs",
  })
  @get()
  static getJzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzs",
  })
  @post("{id}")
  static createJzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
