import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("movs")
export default class MovController {
  @operation({
    summary: "Get Movs",
  })
  @get()
  static getMovs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mov",
  })
  @post("{id}")
  static createMov = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
