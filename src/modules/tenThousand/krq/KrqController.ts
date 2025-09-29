import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krqs")
export default class KrqController {
  @operation({
    summary: "Get Krqs",
  })
  @get()
  static getKrqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krq",
  })
  @post("{id}")
  static createKrq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
