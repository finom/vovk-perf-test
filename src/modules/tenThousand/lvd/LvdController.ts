import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvds")
export default class LvdController {
  @operation({
    summary: "Get Lvds",
  })
  @get()
  static getLvds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvd",
  })
  @post("{id}")
  static createLvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
