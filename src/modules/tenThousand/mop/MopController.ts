import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mop")
export default class MopController {
  @operation({
    summary: "Get Mop",
  })
  @get()
  static getMop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mop",
  })
  @post("{id}")
  static createMop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
