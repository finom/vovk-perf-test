import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dot")
export default class DotController {
  @operation({
    summary: "Get Dot",
  })
  @get()
  static getDot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dot",
  })
  @post("{id}")
  static createDot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
