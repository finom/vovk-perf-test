import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhxes")
export default class NhxController {
  @operation({
    summary: "Get Nhxes",
  })
  @get()
  static getNhxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhx",
  })
  @post("{id}")
  static createNhx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
