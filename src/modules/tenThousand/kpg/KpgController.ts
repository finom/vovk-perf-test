import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpgs")
export default class KpgController {
  @operation({
    summary: "Get Kpgs",
  })
  @get()
  static getKpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpg",
  })
  @post("{id}")
  static createKpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
