import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kims")
export default class KimController {
  @operation({
    summary: "Get Kims",
  })
  @get()
  static getKims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kim",
  })
  @post("{id}")
  static createKim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
