import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("djk")
export default class DjkController {
  @operation({
    summary: "Get Djk",
  })
  @get()
  static getDjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djk",
  })
  @post("{id}")
  static createDjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
