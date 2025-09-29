import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cots")
export default class CotController {
  @operation({
    summary: "Get Cots",
  })
  @get()
  static getCots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cot",
  })
  @post("{id}")
  static createCot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
