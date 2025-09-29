import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lars")
export default class LarController {
  @operation({
    summary: "Get Lars",
  })
  @get()
  static getLars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lar",
  })
  @post("{id}")
  static createLar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
