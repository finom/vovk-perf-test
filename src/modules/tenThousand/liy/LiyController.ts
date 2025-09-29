import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("liys")
export default class LiyController {
  @operation({
    summary: "Get Liys",
  })
  @get()
  static getLiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Liy",
  })
  @post("{id}")
  static createLiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
