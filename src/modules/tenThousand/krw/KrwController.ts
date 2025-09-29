import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krws")
export default class KrwController {
  @operation({
    summary: "Get Krws",
  })
  @get()
  static getKrws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krw",
  })
  @post("{id}")
  static createKrw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
