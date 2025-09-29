import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgies")
export default class LgyController {
  @operation({
    summary: "Get Lgies",
  })
  @get()
  static getLgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgy",
  })
  @post("{id}")
  static createLgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
