import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbqs")
export default class MbqController {
  @operation({
    summary: "Get Mbqs",
  })
  @get()
  static getMbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbq",
  })
  @post("{id}")
  static createMbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
