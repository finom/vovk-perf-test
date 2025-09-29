import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhbs")
export default class NhbController {
  @operation({
    summary: "Get Nhbs",
  })
  @get()
  static getNhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhb",
  })
  @post("{id}")
  static createNhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
