import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hets")
export default class HetController {
  @operation({
    summary: "Get Hets",
  })
  @get()
  static getHets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Het",
  })
  @post("{id}")
  static createHet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
