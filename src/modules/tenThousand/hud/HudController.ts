import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huds")
export default class HudController {
  @operation({
    summary: "Get Huds",
  })
  @get()
  static getHuds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hud",
  })
  @post("{id}")
  static createHud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
