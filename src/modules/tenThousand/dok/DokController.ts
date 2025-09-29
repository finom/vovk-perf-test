import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("doks")
export default class DokController {
  @operation({
    summary: "Get Doks",
  })
  @get()
  static getDoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dok",
  })
  @post("{id}")
  static createDok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
