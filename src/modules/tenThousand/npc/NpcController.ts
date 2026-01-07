import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npc")
export default class NpcController {
  @operation({
    summary: "Get Npc",
  })
  @get()
  static getNpc = procedure({
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
