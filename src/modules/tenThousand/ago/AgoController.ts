import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("agos")
export default class AgoController {
  @operation({
    summary: "Get Agos",
  })
  @get()
  static getAgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ago",
  })
  @post("{id}")
  static createAgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
