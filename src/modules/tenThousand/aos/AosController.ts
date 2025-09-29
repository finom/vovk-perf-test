import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aos")
export default class AosController {
  @operation({
    summary: "Get Aos",
  })
  @get()
  static getAos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aos",
  })
  @post("{id}")
  static createAos = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
