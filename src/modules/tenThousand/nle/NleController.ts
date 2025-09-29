import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nles")
export default class NleController {
  @operation({
    summary: "Get Nles",
  })
  @get()
  static getNles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nle",
  })
  @post("{id}")
  static createNle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
