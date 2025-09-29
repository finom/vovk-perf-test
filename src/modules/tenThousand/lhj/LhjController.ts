import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhjs")
export default class LhjController {
  @operation({
    summary: "Get Lhjs",
  })
  @get()
  static getLhjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhj",
  })
  @post("{id}")
  static createLhj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
