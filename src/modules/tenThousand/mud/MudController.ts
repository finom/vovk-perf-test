import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mud")
export default class MudController {
  @operation({
    summary: "Get Mud",
  })
  @get()
  static getMud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mud",
  })
  @post("{id}")
  static createMud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
