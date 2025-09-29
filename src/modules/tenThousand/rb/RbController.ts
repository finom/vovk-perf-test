import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rbs")
export default class RbController {
  @operation({
    summary: "Get Rbs",
  })
  @get()
  static getRbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rb",
  })
  @post("{id}")
  static createRb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
