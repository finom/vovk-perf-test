import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpies")
export default class HpyController {
  @operation({
    summary: "Get Hpies",
  })
  @get()
  static getHpies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpy",
  })
  @post("{id}")
  static createHpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
