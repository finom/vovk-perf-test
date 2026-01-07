import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hud")
export default class HudController {
  @operation({
    summary: "Get Hud",
  })
  @get()
  static getHud = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hud",
  })
  @post("{id}")
  static createHud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
