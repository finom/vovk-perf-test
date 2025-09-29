import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dips")
export default class DipController {
  @operation({
    summary: "Get Dips",
  })
  @get()
  static getDips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dip",
  })
  @post("{id}")
  static createDip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
