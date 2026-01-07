import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpv")
export default class HpvController {
  @operation({
    summary: "Get Hpv",
  })
  @get()
  static getHpv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpv",
  })
  @post("{id}")
  static createHpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
