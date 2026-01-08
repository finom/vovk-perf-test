import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxy")
export default class MxyController {
  @operation({
    summary: "Get Mxy",
  })
  @get()
  static getMxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxy",
  })
  @post("{id}")
  static createMxy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
