import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mays")
export default class MayController {
  @operation({
    summary: "Get Mays",
  })
  @get()
  static getMays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create May",
  })
  @post("{id}")
  static createMay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
