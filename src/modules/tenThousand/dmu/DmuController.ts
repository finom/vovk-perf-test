import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmus")
export default class DmuController {
  @operation({
    summary: "Get Dmus",
  })
  @get()
  static getDmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmu",
  })
  @post("{id}")
  static createDmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
