import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfs")
export default class BfsController {
  @operation({
    summary: "Get Bfs",
  })
  @get()
  static getBfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfs",
  })
  @post("{id}")
  static createBfs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
