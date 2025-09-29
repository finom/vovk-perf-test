import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrs")
export default class LrController {
  @operation({
    summary: "Get Lrs",
  })
  @get()
  static getLrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lr",
  })
  @post("{id}")
  static createLr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
