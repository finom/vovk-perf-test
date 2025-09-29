import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("foqs")
export default class FoqController {
  @operation({
    summary: "Get Foqs",
  })
  @get()
  static getFoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Foq",
  })
  @post("{id}")
  static createFoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
