import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flts")
export default class FltController {
  @operation({
    summary: "Get Flts",
  })
  @get()
  static getFlts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flt",
  })
  @post("{id}")
  static createFlt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
