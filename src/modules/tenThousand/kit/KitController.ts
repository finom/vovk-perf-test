import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kits")
export default class KitController {
  @operation({
    summary: "Get Kits",
  })
  @get()
  static getKits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kit",
  })
  @post("{id}")
  static createKit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
