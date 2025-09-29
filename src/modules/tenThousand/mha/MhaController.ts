import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhas")
export default class MhaController {
  @operation({
    summary: "Get Mhas",
  })
  @get()
  static getMhas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mha",
  })
  @post("{id}")
  static createMha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
