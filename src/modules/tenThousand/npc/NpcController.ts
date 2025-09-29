import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npcs")
export default class NpcController {
  @operation({
    summary: "Get Npcs",
  })
  @get()
  static getNpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npc",
  })
  @post("{id}")
  static createNpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
