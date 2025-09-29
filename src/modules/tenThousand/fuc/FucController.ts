import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fucs")
export default class FucController {
  @operation({
    summary: "Get Fucs",
  })
  @get()
  static getFucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fuc",
  })
  @post("{id}")
  static createFuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
