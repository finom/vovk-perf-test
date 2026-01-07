import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmg")
export default class DmgController {
  @operation({
    summary: "Get Dmg",
  })
  @get()
  static getDmg = procedure({
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
