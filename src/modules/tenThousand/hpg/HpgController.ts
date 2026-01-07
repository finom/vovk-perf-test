import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpg")
export default class HpgController {
  @operation({
    summary: "Get Hpg",
  })
  @get()
  static getHpg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpg",
  })
  @post("{id}")
  static createHpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
