import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpz")
export default class HpzController {
  @operation({
    summary: "Get Hpz",
  })
  @get()
  static getHpz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpz",
  })
  @post("{id}")
  static createHpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
