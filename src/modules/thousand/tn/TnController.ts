import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tns")
export default class TnController {
  @operation({
    summary: "Get Tns",
  })
  @get()
  static getTns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tn",
  })
  @post("{id}")
  static createTn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
