import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
