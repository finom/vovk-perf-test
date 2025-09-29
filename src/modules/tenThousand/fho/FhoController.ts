import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhos")
export default class FhoController {
  @operation({
    summary: "Get Fhos",
  })
  @get()
  static getFhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fho",
  })
  @post("{id}")
  static createFho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
