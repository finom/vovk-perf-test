import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpws")
export default class HpwController {
  @operation({
    summary: "Get Hpws",
  })
  @get()
  static getHpws = procedure({
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
