import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arcs")
export default class ArcController {
  @operation({
    summary: "Get Arcs",
  })
  @get()
  static getArcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arc",
  })
  @post("{id}")
  static createArc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
