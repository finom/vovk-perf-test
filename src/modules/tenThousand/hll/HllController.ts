import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlls")
export default class HllController {
  @operation({
    summary: "Get Hlls",
  })
  @get()
  static getHlls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hll",
  })
  @post("{id}")
  static createHll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
