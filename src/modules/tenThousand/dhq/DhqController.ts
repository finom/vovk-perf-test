import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhqs")
export default class DhqController {
  @operation({
    summary: "Get Dhqs",
  })
  @get()
  static getDhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dhq",
  })
  @post("{id}")
  static createDhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
