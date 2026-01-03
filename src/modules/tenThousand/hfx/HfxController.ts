import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfxes")
export default class HfxController {
  @operation({
    summary: "Get Hfxes",
  })
  @get()
  static getHfxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfx",
  })
  @post("{id}")
  static createHfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
