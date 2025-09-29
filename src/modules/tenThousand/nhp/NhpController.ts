import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhps")
export default class NhpController {
  @operation({
    summary: "Get Nhps",
  })
  @get()
  static getNhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhp",
  })
  @post("{id}")
  static createNhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
