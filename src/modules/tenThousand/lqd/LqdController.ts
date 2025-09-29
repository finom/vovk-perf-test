import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqds")
export default class LqdController {
  @operation({
    summary: "Get Lqds",
  })
  @get()
  static getLqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqd",
  })
  @post("{id}")
  static createLqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
