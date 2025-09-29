import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhgs")
export default class NhgController {
  @operation({
    summary: "Get Nhgs",
  })
  @get()
  static getNhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhg",
  })
  @post("{id}")
  static createNhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
