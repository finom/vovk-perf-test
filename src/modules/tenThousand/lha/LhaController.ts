import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhas")
export default class LhaController {
  @operation({
    summary: "Get Lhas",
  })
  @get()
  static getLhas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lha",
  })
  @post("{id}")
  static createLha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
