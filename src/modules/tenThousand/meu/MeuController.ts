import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("meus")
export default class MeuController {
  @operation({
    summary: "Get Meus",
  })
  @get()
  static getMeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Meu",
  })
  @post("{id}")
  static createMeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
