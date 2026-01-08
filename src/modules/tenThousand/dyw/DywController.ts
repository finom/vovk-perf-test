import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyw")
export default class DywController {
  @operation({
    summary: "Get Dyw",
  })
  @get()
  static getDyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyw",
  })
  @post("{id}")
  static createDyw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
