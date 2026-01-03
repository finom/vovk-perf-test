import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvps")
export default class LvpController {
  @operation({
    summary: "Get Lvps",
  })
  @get()
  static getLvps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvp",
  })
  @post("{id}")
  static createLvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
