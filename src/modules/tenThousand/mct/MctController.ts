import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcts")
export default class MctController {
  @operation({
    summary: "Get Mcts",
  })
  @get()
  static getMcts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mct",
  })
  @post("{id}")
  static createMct = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
