import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fazs")
export default class FazController {
  @operation({
    summary: "Get Fazs",
  })
  @get()
  static getFazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Faz",
  })
  @post("{id}")
  static createFaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
