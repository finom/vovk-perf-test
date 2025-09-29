import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhvs")
export default class NhvController {
  @operation({
    summary: "Get Nhvs",
  })
  @get()
  static getNhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhv",
  })
  @post("{id}")
  static createNhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
