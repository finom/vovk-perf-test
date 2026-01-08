import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mad")
export default class MadController {
  @operation({
    summary: "Get Mad",
  })
  @get()
  static getMad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mad",
  })
  @post("{id}")
  static createMad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
