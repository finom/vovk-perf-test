import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrrs")
export default class MrrController {
  @operation({
    summary: "Get Mrrs",
  })
  @get()
  static getMrrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrr",
  })
  @post("{id}")
  static createMrr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
