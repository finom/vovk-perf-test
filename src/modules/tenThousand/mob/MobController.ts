import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mob")
export default class MobController {
  @operation({
    summary: "Get Mob",
  })
  @get()
  static getMob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mob",
  })
  @post("{id}")
  static createMob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
