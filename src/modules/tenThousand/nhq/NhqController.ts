import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhqs")
export default class NhqController {
  @operation({
    summary: "Get Nhqs",
  })
  @get()
  static getNhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhq",
  })
  @post("{id}")
  static createNhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
