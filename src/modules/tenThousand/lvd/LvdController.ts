import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvd")
export default class LvdController {
  @operation({
    summary: "Get Lvd",
  })
  @get()
  static getLvd = procedure({
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
