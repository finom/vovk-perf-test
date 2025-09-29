import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqes")
export default class LqeController {
  @operation({
    summary: "Get Lqes",
  })
  @get()
  static getLqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqe",
  })
  @post("{id}")
  static createLqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
