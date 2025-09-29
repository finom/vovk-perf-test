import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhjs")
export default class NhjController {
  @operation({
    summary: "Get Nhjs",
  })
  @get()
  static getNhjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhj",
  })
  @post("{id}")
  static createNhj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
