import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrs")
export default class LrsController {
  @operation({
    summary: "Get Lrs",
  })
  @get()
  static getLrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrs",
  })
  @post("{id}")
  static createLrs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
