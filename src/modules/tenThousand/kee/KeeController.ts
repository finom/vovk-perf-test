import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kees")
export default class KeeController {
  @operation({
    summary: "Get Kees",
  })
  @get()
  static getKees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kee",
  })
  @post("{id}")
  static createKee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
