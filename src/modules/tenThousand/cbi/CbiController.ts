import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbis")
export default class CbiController {
  @operation({
    summary: "Get Cbis",
  })
  @get()
  static getCbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbi",
  })
  @post("{id}")
  static createCbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
