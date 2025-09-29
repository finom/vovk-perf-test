import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mobs")
export default class MobController {
  @operation({
    summary: "Get Mobs",
  })
  @get()
  static getMobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mob",
  })
  @post("{id}")
  static createMob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
