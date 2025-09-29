import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhqs")
export default class MhqController {
  @operation({
    summary: "Get Mhqs",
  })
  @get()
  static getMhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhq",
  })
  @post("{id}")
  static createMhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
