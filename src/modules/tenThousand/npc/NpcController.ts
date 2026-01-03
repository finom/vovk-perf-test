import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npcs")
export default class NpcController {
  @operation({
    summary: "Get Npcs",
  })
  @get()
  static getNpcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npc",
  })
  @post("{id}")
  static createNpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
