import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqrs")
export default class LqrController {
  @operation({
    summary: "Get Lqrs",
  })
  @get()
  static getLqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqr",
  })
  @post("{id}")
  static createLqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
