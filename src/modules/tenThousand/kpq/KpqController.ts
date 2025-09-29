import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpqs")
export default class KpqController {
  @operation({
    summary: "Get Kpqs",
  })
  @get()
  static getKpqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpq",
  })
  @post("{id}")
  static createKpq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
