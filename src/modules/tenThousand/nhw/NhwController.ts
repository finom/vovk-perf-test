import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhws")
export default class NhwController {
  @operation({
    summary: "Get Nhws",
  })
  @get()
  static getNhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhw",
  })
  @post("{id}")
  static createNhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
