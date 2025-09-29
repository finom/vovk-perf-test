import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyts")
export default class KytController {
  @operation({
    summary: "Get Kyts",
  })
  @get()
  static getKyts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyt",
  })
  @post("{id}")
  static createKyt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
