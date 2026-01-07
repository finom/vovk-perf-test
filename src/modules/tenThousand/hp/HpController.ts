import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hp")
export default class HpController {
  @operation({
    summary: "Get Hp",
  })
  @get()
  static getHp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hp",
  })
  @post("{id}")
  static createHp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
