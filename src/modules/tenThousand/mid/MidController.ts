import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mid")
export default class MidController {
  @operation({
    summary: "Get Mid",
  })
  @get()
  static getMid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mid",
  })
  @post("{id}")
  static createMid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
