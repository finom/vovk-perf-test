import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dxxes")
export default class DxxController {
  @operation({
    summary: "Get Dxxes",
  })
  @get()
  static getDxxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dxx",
  })
  @post("{id}")
  static createDxx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
