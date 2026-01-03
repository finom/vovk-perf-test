import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmgs")
export default class DmgController {
  @operation({
    summary: "Get Dmgs",
  })
  @get()
  static getDmgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmg",
  })
  @post("{id}")
  static createDmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
