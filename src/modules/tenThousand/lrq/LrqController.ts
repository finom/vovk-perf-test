import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrqs")
export default class LrqController {
  @operation({
    summary: "Get Lrqs",
  })
  @get()
  static getLrqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrq",
  })
  @post("{id}")
  static createLrq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
