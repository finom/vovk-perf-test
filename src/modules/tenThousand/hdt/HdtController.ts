import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdts")
export default class HdtController {
  @operation({
    summary: "Get Hdts",
  })
  @get()
  static getHdts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdt",
  })
  @post("{id}")
  static createHdt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
