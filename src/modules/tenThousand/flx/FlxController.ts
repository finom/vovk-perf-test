import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flxes")
export default class FlxController {
  @operation({
    summary: "Get Flxes",
  })
  @get()
  static getFlxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flx",
  })
  @post("{id}")
  static createFlx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
