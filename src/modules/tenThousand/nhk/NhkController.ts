import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhks")
export default class NhkController {
  @operation({
    summary: "Get Nhks",
  })
  @get()
  static getNhks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhk",
  })
  @post("{id}")
  static createNhk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
