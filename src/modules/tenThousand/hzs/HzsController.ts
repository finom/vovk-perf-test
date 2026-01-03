import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzs")
export default class HzsController {
  @operation({
    summary: "Get Hzs",
  })
  @get()
  static getHzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzs",
  })
  @post("{id}")
  static createHzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
