import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huds")
export default class HudController {
  @operation({
    summary: "Get Huds",
  })
  @get()
  static getHuds = procedure({
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
