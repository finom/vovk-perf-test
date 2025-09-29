import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhms")
export default class LhmController {
  @operation({
    summary: "Get Lhms",
  })
  @get()
  static getLhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhm",
  })
  @post("{id}")
  static createLhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
