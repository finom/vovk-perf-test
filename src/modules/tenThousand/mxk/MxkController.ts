import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxk")
export default class MxkController {
  @operation({
    summary: "Get Mxk",
  })
  @get()
  static getMxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxk",
  })
  @post("{id}")
  static createMxk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
