import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myl")
export default class MylController {
  @operation({
    summary: "Get Myl",
  })
  @get()
  static getMyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myl",
  })
  @post("{id}")
  static createMyl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
