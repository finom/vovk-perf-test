import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brqs")
export default class BrqController {
  @operation({
    summary: "Get Brqs",
  })
  @get()
  static getBrqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brq",
  })
  @post("{id}")
  static createBrq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
