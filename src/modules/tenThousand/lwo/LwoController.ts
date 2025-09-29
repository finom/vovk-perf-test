import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwos")
export default class LwoController {
  @operation({
    summary: "Get Lwos",
  })
  @get()
  static getLwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwo",
  })
  @post("{id}")
  static createLwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
