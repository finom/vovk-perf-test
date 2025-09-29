import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guis")
export default class GuiController {
  @operation({
    summary: "Get Guis",
  })
  @get()
  static getGuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gui",
  })
  @post("{id}")
  static createGui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
