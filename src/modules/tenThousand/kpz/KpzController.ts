import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpzs")
export default class KpzController {
  @operation({
    summary: "Get Kpzs",
  })
  @get()
  static getKpzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpz",
  })
  @post("{id}")
  static createKpz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
