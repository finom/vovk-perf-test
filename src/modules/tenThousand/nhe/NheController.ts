import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhes")
export default class NheController {
  @operation({
    summary: "Get Nhes",
  })
  @get()
  static getNhes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhe",
  })
  @post("{id}")
  static createNhe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
