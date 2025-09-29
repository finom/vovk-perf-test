import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhcs")
export default class NhcController {
  @operation({
    summary: "Get Nhcs",
  })
  @get()
  static getNhcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhc",
  })
  @post("{id}")
  static createNhc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
