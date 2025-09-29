import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfs")
export default class BfController {
  @operation({
    summary: "Get Bfs",
  })
  @get()
  static getBfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bf",
  })
  @post("{id}")
  static createBf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
