import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhzs")
export default class NhzController {
  @operation({
    summary: "Get Nhzs",
  })
  @get()
  static getNhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhz",
  })
  @post("{id}")
  static createNhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
