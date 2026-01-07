import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvp")
export default class LvpController {
  @operation({
    summary: "Get Lvp",
  })
  @get()
  static getLvp = procedure({
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
