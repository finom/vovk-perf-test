import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvds")
export default class LvdController {
  @operation({
    summary: "Get Lvds",
  })
  @get()
  static getLvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvd",
  })
  @post("{id}")
  static createLvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
