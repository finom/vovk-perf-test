import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("deus")
export default class DeuController {
  @operation({
    summary: "Get Deus",
  })
  @get()
  static getDeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Deu",
  })
  @post("{id}")
  static createDeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
