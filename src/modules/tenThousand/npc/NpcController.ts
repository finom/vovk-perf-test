import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npc")
export default class NpcController {
  @operation({
    summary: "Get Npc",
  })
  @get()
  static getNpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npc",
  })
  @post("{id}")
  static createNpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
