import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aos")
export default class AoController {
  @operation({
    summary: "Get Aos",
  })
  @get()
  static getAos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ao",
  })
  @post("{id}")
  static createAo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
