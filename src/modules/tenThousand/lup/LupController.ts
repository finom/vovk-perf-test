import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lups")
export default class LupController {
  @operation({
    summary: "Get Lups",
  })
  @get()
  static getLups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lup",
  })
  @post("{id}")
  static createLup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
