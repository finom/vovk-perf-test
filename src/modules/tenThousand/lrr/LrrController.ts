import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrrs")
export default class LrrController {
  @operation({
    summary: "Get Lrrs",
  })
  @get()
  static getLrrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrr",
  })
  @post("{id}")
  static createLrr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
