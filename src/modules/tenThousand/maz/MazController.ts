import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mazs")
export default class MazController {
  @operation({
    summary: "Get Mazs",
  })
  @get()
  static getMazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Maz",
  })
  @post("{id}")
  static createMaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
