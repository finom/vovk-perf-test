import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksqs")
export default class KsqController {
  @operation({
    summary: "Get Ksqs",
  })
  @get()
  static getKsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksq",
  })
  @post("{id}")
  static createKsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
