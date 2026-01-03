import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvms")
export default class LvmController {
  @operation({
    summary: "Get Lvms",
  })
  @get()
  static getLvms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvm",
  })
  @post("{id}")
  static createLvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
