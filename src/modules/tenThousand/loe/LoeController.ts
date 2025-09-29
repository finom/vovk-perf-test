import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("loes")
export default class LoeController {
  @operation({
    summary: "Get Loes",
  })
  @get()
  static getLoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Loe",
  })
  @post("{id}")
  static createLoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
