import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lens")
export default class LenController {
  @operation({
    summary: "Get Lens",
  })
  @get()
  static getLens = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Len",
  })
  @post("{id}")
  static createLen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
