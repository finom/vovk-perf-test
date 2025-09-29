import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhhs")
export default class NhhController {
  @operation({
    summary: "Get Nhhs",
  })
  @get()
  static getNhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhh",
  })
  @post("{id}")
  static createNhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
