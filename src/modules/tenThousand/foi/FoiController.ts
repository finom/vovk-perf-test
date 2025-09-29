import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fois")
export default class FoiController {
  @operation({
    summary: "Get Fois",
  })
  @get()
  static getFois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Foi",
  })
  @post("{id}")
  static createFoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
