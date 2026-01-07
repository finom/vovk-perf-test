import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpw")
export default class HpwController {
  @operation({
    summary: "Get Hpw",
  })
  @get()
  static getHpw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpw",
  })
  @post("{id}")
  static createHpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
