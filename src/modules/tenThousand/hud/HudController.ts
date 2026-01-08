import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hud")
export default class HudController {
  @operation({
    summary: "Get Hud",
  })
  @get()
  static getHud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hud",
  })
  @post("{id}")
  static createHud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
