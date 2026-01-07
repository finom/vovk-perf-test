import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpk")
export default class HpkController {
  @operation({
    summary: "Get Hpk",
  })
  @get()
  static getHpk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpk",
  })
  @post("{id}")
  static createHpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
