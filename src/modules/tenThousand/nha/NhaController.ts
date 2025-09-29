import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhas")
export default class NhaController {
  @operation({
    summary: "Get Nhas",
  })
  @get()
  static getNhas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nha",
  })
  @post("{id}")
  static createNha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
