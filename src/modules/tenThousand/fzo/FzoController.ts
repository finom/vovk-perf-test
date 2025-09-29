import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzos")
export default class FzoController {
  @operation({
    summary: "Get Fzos",
  })
  @get()
  static getFzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzo",
  })
  @post("{id}")
  static createFzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
