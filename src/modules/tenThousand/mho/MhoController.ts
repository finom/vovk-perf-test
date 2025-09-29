import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhos")
export default class MhoController {
  @operation({
    summary: "Get Mhos",
  })
  @get()
  static getMhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mho",
  })
  @post("{id}")
  static createMho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
